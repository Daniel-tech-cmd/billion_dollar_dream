import { NextResponse } from "next/server";
import User from "@/app/models/user";
import { connectToDB } from "@/utils/database";
import sendEmail from "@/utils/sendEmail";
import bcrypt from "bcrypt";

function generateVerificationCode() {
  return Math.floor(
    100000 + Math.random() * 900000
  ).toString();
}

export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const { name, email, password, username } =
      body;

    // Input validation
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          error:
            "Name, email, and password are required.",
        },
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 6 characters.",
        },
        { status: 400 }
      );
    }
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Check for existing user
    const existingUser = await User.findOne({
      email,
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered." },
        { status: 409 }
      );
    }
    if (username) {
      const existingUsername = await User.findOne(
        { username }
      );
      if (existingUsername) {
        return NextResponse.json(
          { error: "Username is already taken." },
          { status: 409 }
        );
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    // Generate verification code and expiry
    const verificationCode =
      generateVerificationCode();
    const verificationExpires = new Date(
      Date.now() + 10 * 60 * 1000
    ); // 10 minutes

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      username: username || undefined,
      isEmailVerified: false,
      emailVerificationToken: verificationCode,
      emailVerificationExpires:
        verificationExpires,
    });
    await user.save();

    // Send verification email
    const emailContent = `<p>Hi <b>${name}</b>,</p>
      <p>Thank you for signing up for InstaGlow AI!<br/>
      Please use the following verification code to verify your email address:</p>
      <div style="font-size:2rem; letter-spacing:0.5rem; font-weight:700; color:#A742F1; margin:24px 0;">${verificationCode}</div>
      <p>This code will expire in 10 minutes.</p>
      <p>If you did not sign up, you can safely ignore this email.</p>`;
    await sendEmail(
      email,
      "Verify your email for InstaGlow AI",
      "Your verification code is: " +
        verificationCode,
      emailContent
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Signup successful. Please check your email for the verification code.",
      },
      { status: 201 }
    );
  } catch (err) {
    // Log error for debugging but return generic error to client
    console.error("Signup error:", err);
    return NextResponse.json(
      {
        error:
          "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
