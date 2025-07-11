import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import User from "@/app/models/user";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt";

// Debug: Check environment variables
console.log(
  "Google Client ID:",
  process.env.GOOGLE_CLIENT_ID ? "Set" : "NOT SET"
);
console.log(
  "Google Client Secret:",
  process.env.GOOGLE_CLIENT_SECRET
    ? "Set"
    : "NOT SET"
);
console.log(
  "NextAuth Secret:",
  process.env.NEXTAUTH_SECRET ? "Set" : "NOT SET"
);
console.log(
  "NextAuth URL:",
  process.env.NEXTAUTH_URL || "NOT SET"
);

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (
          !credentials?.email ||
          !credentials?.password
        ) {
          return null;
        }

        try {
          await connectToDB();
          const user = await User.findOne({
            email: credentials.email,
          });

          if (!user) {
            return null;
          }

          const isPasswordValid =
            await bcrypt.compare(
              credentials.password,
              user.password
            );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            googleId: user.googleId,
          };
        } catch (error) {
          console.error(
            "Credentials auth error:",
            error
          );
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn callback triggered:", {
        provider: account?.provider,
        profile,
      });
      if (account?.provider === "google") {
        try {
          await connectToDB();
          let existingUser = await User.findOne({
            googleId: profile.sub,
          });
          // If not found by googleId, try to find by email (for merging accounts)
          if (!existingUser && profile.email) {
            existingUser = await User.findOne({
              email: profile.email,
            });
            if (existingUser) {
              // Merge: add googleId to existing user
              existingUser.googleId = profile.sub;
              existingUser.isEmailVerified =
                profile.email_verified;
              existingUser.avatar =
                profile.picture;
              await existingUser.save();
              console.log(
                "Merged Google account with existing email user:",
                existingUser._id
              );
            }
          }
          if (!existingUser) {
            // Generate a unique username
            let baseUsername = profile.name
              ? profile.name
                  .replace(/\s+/g, "")
                  .toLowerCase()
              : profile.email.split("@")[0];
            let username = baseUsername;
            let suffix = 1;
            while (
              await User.findOne({ username })
            ) {
              username = `${baseUsername}${suffix++}`;
            }

            existingUser = new User({
              name: profile.name,
              email: profile.email,
              googleId: profile.sub,
              isEmailVerified:
                profile.email_verified,
              avatar: profile.picture,
              password:
                "google_oauth_" +
                Math.random()
                  .toString(36)
                  .substr(2, 9),
              username, // <-- set unique username
            });
            await existingUser.save();
            console.log(
              "Created new user with Google:",
              existingUser._id
            );
          } else {
            // Optionally update fields on every login
            existingUser.lastLogin = new Date();
            existingUser.avatar = profile.picture;
            await existingUser.save();
            console.log(
              "Updated existing user with Google:",
              existingUser._id
            );
          }
          // Attach user to session
          user.id = existingUser._id.toString();
          user.googleId = existingUser.googleId;
          user.name = existingUser.name;
          user.email = existingUser.email;
          user.avatar = existingUser.avatar;
        } catch (error) {
          console.error(
            "Error in signIn callback:",
            error
          );
          return false;
        }
      }
      return true;
    },
    async session({ session, user, token }) {
      if (session?.user) {
        session.user.id = user?.id || token?.sub;
        session.user.googleId =
          user?.googleId || token?.googleId;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (
        account?.provider === "google" &&
        user
      ) {
        token.googleId = user.googleId;
      }
      if (user) {
        token.googleId = user.googleId;
      }
      return token;
    },
  },
  pages: {
    signIn: "/user/login",
    signUp: "/user/register",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
