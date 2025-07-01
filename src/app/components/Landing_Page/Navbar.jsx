"use client";
import React, {
  useState,
  useEffect,
} from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "navbar-scrolled" : ""
      } ${
        scrolled
          ? "backdrop-blur-md bg-white/30"
          : ""
      }`}
      style={
        scrolled
          ? {
              background:
                "linear-gradient(105.12deg, rgba(48,34,89,0.85) 15.24%, rgba(62,31,55,0.85) 93.55%)",
              backdropFilter: "blur(12px)",
            }
          : { background: "transparent" }
      }
    >
      <div className="flex max-w-[1000px] flex mx-auto items-center justify-between pt-4 pb-6 px-4">
        {" "}
        {/* Logo */}
        <div>
          <h1 className="text-[24px] font-bold bg-gradient-to-r from-[#FF4D8F] to-[#A742F1] bg-clip-text text-transparent">
            InstaGlow AI
          </h1>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1 ml-8">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/features"
                className="text-[#C0BFC9] hover:text-white text-[14px] font-medium"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="text-[#C0BFC9] hover:text-white text-[14px] font-medium"
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-[#C0BFC9] hover:text-white text-[14px] font-medium"
              >
                Pricing
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4 ml-6">
            <Link
              href="/user/login"
              className="text-[12px] ml-4 bg-gray-200 text-[#7E28D4] font-bold px-4 py-2 rounded-[7.36px] hover:bg-gray-300 transition duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/user/signup"
              className="text-[12px] bg-gradient-to-r from-[#FF4D8F] to-[#A742F1] text-white px-4 py-2 font-bold rounded-[7.36px] hover:opacity-90 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-[#A742F1] ml-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
        {/* Mobile Sidebar */}
        {open && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30"
              onClick={() => setOpen(false)}
            />
            {/* Sidebar */}
            <div
              className="relative w-64 max-w-[80vw] h-full bg-white shadow-lg p-6"
              style={{
                background:
                  "rgba(255, 255, 255, 1)",
              }}
            >
              <button
                className="absolute top-4 right-4 text-2xl text-[#A742F1]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </button>
              <nav className="mt-10 flex flex-col gap-6">
                <Link
                  href="/features"
                  className="text-[#C0BFC9] hover:text-white text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-[#C0BFC9] hover:text-white text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  How it Works
                </Link>
                <Link
                  href="/pricing"
                  className="text-[#C0BFC9] hover:text-white text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/user/login"
                  className="text-[13px] bg-gray-200 text-[#7E28D4] font-bold px-4 py-2 rounded-[7.36px] hover:bg-gray-300 transition duration-300 mt-4"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/user/signup"
                  className="text-[13px] bg-gradient-to-r from-[#FF4D8F] to-[#A742F1] text-white px-4 py-2 font-bold rounded-[7.36px] hover:opacity-90 transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
