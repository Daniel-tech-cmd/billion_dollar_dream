import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Clear session cookies
    const response = NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );

    // Clear auth cookies
    response.cookies.set(
      "next-auth.session-token",
      "",
      {
        expires: new Date(0),
        path: "/",
      }
    );
    response.cookies.set(
      "__Secure-next-auth.session-token",
      "",
      {
        expires: new Date(0),
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.error("Signout error:", error);
    return NextResponse.json(
      { error: "Failed to sign out" },
      { status: 500 }
    );
  }
}
