"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "Do I need a Business Instagram account?",
    a: "No, you can use any Instagram account type, but some features may require a business account for full access.",
  },
  {
    q: "Do I need a Business Instagram account?",
    a: "No, you can use any Instagram account type, but some features may require a business account for full access.",
  },
  {
    q: "Can I edit the AI-generated designs?",
    a: "Yes, you can fully customize and edit all AI-generated designs before publishing.",
  },
  {
    q: "Can I schedule multiple posts at once?",
    a: "Absolutely! Our platform supports bulk scheduling for maximum convenience.",
  },
  {
    q: "Is it free to start?",
    a: "Yes, all plans include a 14-day free trial with no credit card required.",
  },
  {
    q: "Is it free to start?",
    a: "Yes, all plans include a 14-day free trial with no credit card required.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <section
      className="w-full py-20 px-4"
      style={{
        background:
          "linear-gradient(120deg, #FAF5FE 22.5%, #FDF6F2 93.92%)",
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-black mb-2">
          Got{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #E354AD 0%, #A742F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
            }}
          >
            Questions?
          </span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mb-10 text-sm md:text-base font-medium">
          Everything you need to know about
          creating stunning Instagram content with
          AI
        </p>
        {/* FAQ Card */}
        <div className="w-full bg-white rounded-2xl shadow-md p-6 md:p-10 mb-10">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b last:border-b-0 border-gray-100"
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                onClick={() =>
                  setOpen(
                    open === idx ? null : idx
                  )
                }
                aria-expanded={open === idx}
              >
                <span className="text-base md:text-lg font-medium text-gray-900">
                  {faq.q}
                </span>
                <FiChevronDown
                  className={`text-2xl text-gray-400 transition-transform duration-200 ${
                    open === idx
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </button>
              {open === idx && (
                <div className="pb-5 pl-1 pr-8 text-gray-500 text-sm md:text-base animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <div className="text-sm text-gray-400 mb-2">
            Still have question?
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-[#A742F1] hover:underline inline-flex items-center gap-1"
            style={{
              background:
                "linear-gradient(90deg, #E354AD 0%, #A742F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact our support team{" "}
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
