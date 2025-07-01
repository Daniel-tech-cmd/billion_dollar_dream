"use client";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="w-full pt-10 pb-4 px-4"
      style={{
        background:
          "linear-gradient(117.43deg, #181830 -13.56%, #461B6F 46.61%, #6E1A63 97.6%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full text-white">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-0">
          {/* Left: Brand & Subscribe */}
          <div className="flex-1 min-w-[270px] md:max-w-[370px]">
            <div
              className="text-lg font-extrabold mb-2"
              style={{
                background:
                  "linear-gradient(90deg, #E354AD 0%, #A742F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:
                  "transparent",
                display: "inline",
              }}
            >
              InstaGlow AI
            </div>
            <p className="text-sm text-[#D1BFE7] mb-6 leading-relaxed">
              Transform your Instagram presence
              with AI-powered content creation.
              Generate stunning posts, engaging
              captions, and grow your audience
              effortlessly.
            </p>
            <div className="bg-white/10 border border-[#A742F1] rounded-xl p-4 mb-3">
              <div className="flex items-center mb-1">
                <FaEnvelope className="text-[#E354AD] text-lg mr-2" />
                <span className="font-bold text-base text-white">
                  Stay Updated
                </span>
              </div>
              <div className="text-[#D1BFE7] text-xs mb-3">
                Get the latest tips and features
                delivered to your inbox
              </div>
              <form className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg bg-[#D1BFE7]/10 border border-[#D1BFE7] px-3 py-2 text-sm text-white placeholder-[#D1BFE7] focus:outline-none focus:ring-2 focus:ring-[#A742F1] transition"
                />
                <button
                  type="submit"
                  className="rounded-lg px-5 py-2 font-semibold text-sm bg-gradient-to-r from-[#E354AD] to-[#A742F1] text-white hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Center: Navigation */}
          <div className="flex-1 flex flex-col items-start md:items-center min-w-[180px]">
            <div
              className="font-bold text-base mb-3"
              style={{ color: "#E354AD" }}
            >
              Navigation
            </div>
            <ul className="space-y-2 text-[#EDE6F7] text-sm">
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          {/* Right: Legal & Support */}
          <div className="flex-1 flex flex-col items-start md:items-end min-w-[200px]">
            <div
              className="font-bold text-base mb-3"
              style={{ color: "#A792E3" }}
            >
              Legal and Support
            </div>
            <ul className="space-y-2 text-[#EDE6F7] text-sm mb-4">
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                >
                  Login
                </a>
              </li>
            </ul>
            <button className="rounded-lg px-5 py-2 font-semibold text-sm bg-white text-[#E354AD] border border-[#E354AD] hover:bg-[#F8E1F2] transition mb-2">
              Start Free Trial
            </button>
          </div>
        </div>
        {/* Bottom: Divider and Copyright */}
        <div className="mt-8 border-t border-[#A792E3]/30 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#A792E3] text-xs">
            © 2025 InstaGlow AI. Made with love
            for creators everywhere
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#A792E3] text-xs">
              Follow us:
            </span>
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-[#FFFFFF22] flex items-center justify-center hover:bg-[#E354AD] transition"
            >
              <FaInstagram className="text-[#EDE6F7] text-base" />
            </a>
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-[#FFFFFF22] flex items-center justify-center hover:bg-[#E354AD] transition"
            >
              <FaLinkedinIn className="text-[#EDE6F7] text-base" />
            </a>
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-[#FFFFFF22] flex items-center justify-center hover:bg-[#E354AD] transition"
            >
              <FaXTwitter className="text-[#EDE6F7] text-base" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
