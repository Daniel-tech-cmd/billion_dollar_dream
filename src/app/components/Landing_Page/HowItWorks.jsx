import React from "react";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdFlashOn } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

const steps = [
  {
    icon: (
      <span className="relative inline-block">
        <span className="absolute right-0 top-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white z-10" />
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB6E6] to-[#FFE3F2]">
          <FaInstagram className="text-4xl text-[#E354AD]" />
        </span>
      </span>
    ),
    step: "01",
    stepColor: "bg-[#FF5CA7]",
    title: "Connect Instagram",
    desc: "Link your Instagram account securely and tell us about your brand, audience and content goals.",
  },
  {
    icon: (
      <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#C57DF0] to-[#E354AD]">
        <TbBrandGoogleAnalytics className="text-4xl text-white" />
        <span className="absolute right-2 bottom-2 w-3 h-3 bg-white rounded-full border-2 border-[#C57DF0]" />
      </span>
    ),
    step: "02",
    stepColor: "bg-[#7D5FFF]",
    title: "Tell Us about Your Brand",
    desc: "Share your brand colors, style preference, and target audience. Our AI learns your unique voice and aesthetic.",
  },
  {
    icon: (
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFE3B3] to-[#FFF7E7]">
        <MdFlashOn className="text-4xl text-[#FFB800]" />
        <span className="absolute right-2 top-2">
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1v2M9 15v2M3.22 3.22l1.42 1.42M13.36 13.36l1.42 1.42M1 9h2m12 0h2M3.22 14.78l1.42-1.42M13.36 4.64l1.42-1.42"
              stroke="#FFB800"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </span>
    ),
    step: "03",
    stepColor: "bg-[#FFB800]",
    title: "Generate with AI",
    desc: "Watch as our advanced AI creates multiple designs options, writes engaging captions, and suggests trending hashtags.",
  },
  {
    icon: (
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#B3FFF7] to-[#E3FFF7]">
        <BsCalendar2Check className="text-4xl text-[#18BE81]" />
        <span className="absolute right-2 top-2">
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9"
              cy="9"
              r="8"
              stroke="#18BE81"
              strokeWidth="2"
            />
          </svg>
        </span>
      </span>
    ),
    step: "04",
    stepColor: "bg-[#18BE81]",
    title: "Schedule & Publish",
    desc: "Fine-tune your content with our editor, then schedule it for the perfect posting time to maximize engagement.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(127.56deg, #F8E1F2 6.04%, #F1E1F9 69.91%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 text-black">
          How It Works
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mb-14 text-sm sm:text-base font-medium">
          Create professional Instagram content in
          just four simple steps. Our AI handles
          the heavy lifting while you focus on
          your creative vision
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg px-6 py-10 flex flex-col items-center text-center relative min-h-[370px]"
            >
              {/* Icon */}
              <div className="mb-6 relative flex items-center justify-center">
                {step.icon}
              </div>
              {/* Step Number */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${step.stepColor} text-white font-bold text-lg mb-4 shadow-md`}
              >
                {step.step}
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 text-sm">
                {step.desc}
              </p>
              {/* Decorative dots for first card */}
              {idx === 0 && (
                <span className="absolute left-4 top-4 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#FF5CA7] rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-[#FFB800] rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-[#18BE81] rounded-full"></span>
                </span>
              )}
              {/* Decorative dots for last card */}
              {idx === 3 && (
                <span className="absolute right-4 bottom-4 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#FF5CA7] rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-[#FFB800] rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-[#18BE81] rounded-full"></span>
                </span>
              )}
              {/* Arrow between cards */}
              {idx < 3 && (
                <span className="hidden md:block absolute right-[-28px] top-1/2 transform -translate-y-1/2">
                  <FiArrowRight className="text-3xl text-gray-300" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
