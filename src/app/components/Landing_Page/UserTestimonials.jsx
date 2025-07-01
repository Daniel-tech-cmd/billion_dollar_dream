"use client";
import React from "react";
import {
  FaStar,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    followers: "45.2K followers",
    stars: 5,
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
    text: `"InstaGlow AI transformed my content game! I went from spending 3 hours per post to just 10 minutes. My engagement increased by 200% in just one month!"`,
  },
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    followers: "45.2K followers",
    stars: 5,
    avatar:
      "https://randomuser.me/api/portraits/women/65.jpg",
    text: `"InstaGlow AI transformed my content game! I went from spending 3 hours per post to just 10 minutes. My engagement increased by 200% in just one month!"`,
  },
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    followers: "45.2K followers",
    stars: 5,
    avatar:
      "https://randomuser.me/api/portraits/women/43.jpg",
    text: `"InstaGlow AI transformed my content game! I went from spending 3 hours per post to just 10 minutes. My engagement increased by 200% in just one month!"`,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.95 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function UserTestimonials() {
  return (
    <motion.section
      className="w-full py-20 px-4"
      style={{
        background: "rgba(255, 255, 255, 1)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-black mb-2">
          What Our
        </h2>
        <h3
          className="text-2xl md:text-3xl font-extrabold text-center mb-6"
          style={{
            background:
              "linear-gradient(90deg, #E354AD 0%, #A742F1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Users Say
        </h3>
        <p className="text-center text-gray-500 max-w-2xl mb-10 text-sm md:text-base font-medium">
          Join thousands of creators who've
          transformed their instagram presence
          with AI
        </p>
        {/* Testimonials */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-[#FAF6FB] rounded-2xl p-6 shadow-sm flex flex-col min-h-[290px] relative"
              style={{
                borderBottom: "6px solid",
                borderImage:
                  "linear-gradient(90deg, #FFB6E6 0%, #A742F1 100%) 1",
              }}
              variants={cardVariants}
              custom={idx}
            >
              {/* User Info */}
              <div className="flex items-center mb-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full mr-3 border border-gray-200 object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-black flex items-center">
                    {t.name}
                    <FaInstagram className="ml-1 text-[#E354AD] text-base" />
                  </span>
                  <span className="text-xs text-gray-400">
                    {t.handle}
                  </span>
                  <span className="text-xs text-gray-400">
                    {t.followers}
                  </span>
                </div>
              </div>
              {/* Stars */}
              <div className="flex items-center mb-2">
                {[...Array(t.stars)].map(
                  (_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-lg mr-1"
                      style={{ color: "#FFC107" }}
                    />
                  )
                )}
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-700 text-base font-medium mt-2">
                {t.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {/* Stats Row */}
        <motion.div
          className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-extrabold text-black">
              50K+
            </span>
            <span className="text-sm text-gray-500 mt-1">
              Content Created
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-extrabold text-black">
              10K+
            </span>
            <span className="text-sm text-gray-500 mt-1">
              Happy Creators
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-extrabold text-black">
              5★
            </span>
            <span className="text-sm text-gray-500 mt-1">
              Average Rating
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
