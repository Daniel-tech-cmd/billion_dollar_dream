"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  signIn,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import Link from "next/link";

const floatingIcons = [
  {
    src: "/user/brain.png",
    style: "top-8 left-8",
  },
  {
    src: "/user/comment.png",
    style: "top-1/2 left-4 -translate-y-1/2",
  },
  {
    src: "/user/magic.png",
    style: "top-8 right-8",
  },
  {
    src: "/user/heart.png",
    style: "bottom-16 right-8",
  },
  {
    src: "/user/upload.png",
    style: "bottom-8 left-8",
  },
];

export default function SignUp() {
  const [showPassword, setShowPassword] =
    useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] =
    useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect if already logged in
  React.useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch(
        "/api/user/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.error ||
            "Something went wrong. Please try again."
        );
      } else {
        setSuccess(
          data.message ||
            "Signup successful! Please check your email."
        );
        setForm({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      setError(
        "Network error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError("");
    try {
      const result = await signIn("google", {
        callbackUrl: "/dashboard",
        redirect: false,
      });
      if (result?.error) {
        setError(
          "Google sign-in failed. Please try again."
        );
      } else if (result?.ok) {
        setSuccess(
          "Successfully signed in with Google!"
        );
        router.push("/dashboard");
      }
    } catch (error) {
      setError(
        "Google sign-in failed. Please try again."
      );
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white py-12 px-4 md:px-12">
        <div className="max-w-md w-full">
          <h1
            className="text-xl md:text-2xl font-extrabold text-center mb-1"
            style={{
              background:
                "linear-gradient(90deg, #E354AD 0%, #A742F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              width: "100%",
              textAlign: "center",
              padding: 0,
            }}
          >
            Join Us Today
          </h1>
          <p
            className="text-center text-gray-500 mb-8 text-xs md:text-sm font-light"
            style={{
              margin: 0,
              marginBottom: "8px",
              padding: 0,
            }}
          >
            Create your account and start your
            journey
          </p>
          {/* Error/Success Alert */}
          {error && (
            <Alert
              variant="destructive"
              className="mb-4"
            >
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert className="mb-4">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                {success}
              </AlertDescription>
            </Alert>
          )}
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-200 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#A742F1] transition placeholder-gray-400 bg-white"
              required
            />
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#A742F1] transition placeholder-gray-400 bg-white pr-10"
                required
              />
            </div>
            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-200 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#A742F1] transition placeholder-gray-400 bg-white pr-10"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg focus:outline-none"
                tabIndex={-1}
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#E354AD] to-[#A742F1] text-white hover:opacity-90 transition mb-2 mt-2 cursor-pointer flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : null}
              {loading
                ? "Signing Up..."
                : "Sign Up"}
            </button>
            <div className="flex items-center my-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="mx-3 text-gray-400 text-sm">
                Or
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-[#E354AD] text-[#E354AD] font-semibold text-sm bg-white hover:bg-[#F8E1F2] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {googleLoading ? (
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-[#E354AD]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                <FaGoogle className="text-xl" />
              )}
              {googleLoading
                ? "Connecting..."
                : "Continue with Google"}
            </button>
          </form>
          <div className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/user/login"
              className="text-[#A742F1] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      {/* Right: Visual */}
      <div
        className="hidden md:flex w-1/2 min-h-screen relative items-center justify-center"
        style={{
          background:
            "linear-gradient(115.43deg, #9859E9 18.37%, #E34AA2 41.76%, #DE54AB 57.93%, #CF64C1 76.86%, #AD85F1 100%)",
        }}
      >
        {/* Floating icons */}
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            className={`absolute ${icon.style} z-10 flex items-center justify-center`}
            style={{
              width: 75,
              height: 66,
              background:
                "rgba(208, 139, 218, 0.54)",
              boxShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 20,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.2,
            }}
          >
            <Image
              src={icon.src}
              alt="icon"
              width={15}
              height={15}
              className="drop-shadow-xl"
            />
          </motion.div>
        ))}
        {/* Main image and overlay */}
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <Image
            src="/user/image__60_-removebg-preview 2.png"
            alt="Happy user"
            width={340}
            height={340}
            className="rounded-2xl object-cover z-20 mx-auto"
            style={{ maxHeight: 340 }}
          />
          {/* Overlay card above the happy user */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-30"
            style={{
              top: 30, // negative offset to place above the image
              width: 230,
              height: 230,
              background: "rgba(255,255,255,0.4)",
              borderRadius: 20,
              boxShadow:
                "0 4px 24px 0 rgba(0,0,0,0.23)",
              position: "absolute",
            }}
          >
            {/* Rectangle 17 */}
            <div
              style={{
                position: "absolute",
                width: 169,
                height: 23,
                left: 21,
                top: 53,
                background: "#E7DDFD",
                borderRadius: 20,
              }}
            />
            {/* Rectangle 18 */}
            <div
              style={{
                position: "absolute",
                width: 105,
                height: 23,
                left: 21,
                top: 90,
                background: "#FAD9EA",
                borderRadius: 20,
              }}
            />
            {/* Rectangle 19 */}
            <div
              style={{
                position: "absolute",
                width: 189,
                height: 66,
                left: 21,
                top: 127,
                background:
                  "linear-gradient(90deg, #F2ECFB 16.14%, #F9EBF4 87.57%)",
                borderRadius: 12,
              }}
            />
            {/* Ellipse 13 (star) */}
            <div
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                left: 27,
                top: 132,
                background: "#FFFFFF",
                borderRadius: "50%",
              }}
            />
          </div>
          {/* Overlay card at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 border border-white/30 rounded-xl p-6 backdrop-blur-md z-30">
            <h3 className="text-white text-xl font-bold mb-1">
              AI-Powered Social Experience
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Join millions of users experiencing
              the future of social media with
              intelligent content curation and
              seamless interations
            </p>
          </div>
        </div>
      </div>
      {/* Mobile: Only show right visual */}
      {/* <div className="flex md:hidden w-full min-h-[400px] relative items-center justify-center" ...> ... </div> */}
    </div>
  );
}
