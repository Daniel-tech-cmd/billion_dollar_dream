import NextAuth from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import User from "@/app/models/user";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret:
        process.env.INSTAGRAM_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "user_profile,user_media",
        },
      },
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
            instagramHandle: user.instagramHandle,
            instagramConnected:
              user.instagramConnected,
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
      if (account?.provider === "instagram") {
        try {
          await connectToDB();

          // Check if user already exists
          let existingUser = await User.findOne({
            instagramUserId: profile.id,
          });

          if (!existingUser) {
            // Create new user with Instagram data
            existingUser = new User({
              name:
                profile.name || profile.username,
              email: `${profile.username}@instagram.com`, // Instagram doesn't provide email
              instagramHandle: profile.username,
              instagramUserId: profile.id,
              instagramConnected: true,
              instagramAccessToken:
                account.access_token,
              isEmailVerified: true, // Instagram users are pre-verified
              password:
                "instagram_oauth_" +
                Math.random()
                  .toString(36)
                  .substr(2, 9), // Generate a random password
            });
            await existingUser.save();
          } else {
            // Update existing user's Instagram connection
            existingUser.instagramConnected = true;
            existingUser.instagramAccessToken =
              account.access_token;
            existingUser.lastLogin = new Date();
            await existingUser.save();
          }
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
        // Add Instagram info to session
        session.user.instagramHandle =
          user?.instagramHandle ||
          token?.instagramHandle;
        session.user.instagramConnected =
          user?.instagramConnected ||
          token?.instagramConnected;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (
        account?.provider === "instagram" &&
        user
      ) {
        token.instagramHandle =
          user.instagramHandle;
        token.instagramConnected =
          user.instagramConnected;
      }
      if (user) {
        token.instagramHandle =
          user.instagramHandle;
        token.instagramConnected =
          user.instagramConnected;
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
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
