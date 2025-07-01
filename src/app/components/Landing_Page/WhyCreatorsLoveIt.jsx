"use client";
import React from "react";
import {
  FiClock,
  FiZap,
  FiTrendingUp,
  FiGrid,
} from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: "spring",
      stiffness: 100,
    },
  }),
};
const featureVariants = {
  offscreen: { opacity: 0, scale: 0.85 },
  onscreen: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.18,
      duration: 0.7,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function WhyCreatorsLoveIt() {
  return (
    <motion.section
      className="w-full py-20 px-4"
      style={{
        background:
          "linear-gradient(204.55deg, #FEFAFD 53.58%, #F1E1F9 78.89%)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Game Changer Badge */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8E1F2] text-[#A742F1] text-xs font-semibold shadow-sm">
            <span className="text-lg">✨</span>{" "}
            Game Changer
          </span>
        </motion.div>
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-black mb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          Why Creators
        </motion.h2>
        <motion.h3
          className="text-2xl sm:text-3xl font-extrabold text-center mb-4"
          style={{ color: "#E354AD" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          Love It
        </motion.h3>
        <motion.p
          className="text-center text-gray-500 max-w-2xl mb-10 text-sm sm:text-base font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          Stop wasting hours on content creation.
          Our AI + Canva + Instagram integration
          makes professional content creation
          effortless.
        </motion.p>
        {/* Comparison Cards */}
        <motion.div
          className="w-full flex flex-col md:flex-row gap-6 mb-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Manual Content Creation */}
          <motion.div
            className="flex-1 bg-[#F6F7F9] rounded-xl p-6 shadow-sm border border-[#ececec]"
            variants={cardVariants}
            custom={0}
          >
            <div className="flex items-center mb-4">
              <FiClock className="text-xl text-[#A6A6A6] mr-2" />
              <span className="text-base sm:text-lg font-bold text-gray-900">
                Manual Content Creation
              </span>
            </div>
            <ul className="mt-2 space-y-3 text-sm sm:text-base">
              <li className="flex items-center text-gray-500">
                <Image
                  src="/landing_page/material-symbols_cancel-outline-rounded.png"
                  alt="x"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Hours of design work
              </li>
              <li className="flex items-center text-gray-500">
                <Image
                  src="/landing_page/material-symbols_cancel-outline-rounded.png"
                  alt="x"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Research hashtags manually
              </li>
              <li className="flex items-center text-gray-500">
                <Image
                  src="/landing_page/material-symbols_cancel-outline-rounded.png"
                  alt="x"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Write captions from scratch
              </li>
              <li className="flex items-center text-gray-500">
                <Image
                  src="/landing_page/material-symbols_cancel-outline-rounded.png"
                  alt="x"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Post at random times
              </li>
              <li className="flex items-center text-gray-500">
                <Image
                  src="/landing_page/material-symbols_cancel-outline-rounded.png"
                  alt="x"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                No brand consistency
              </li>
            </ul>
          </motion.div>
          {/* InstaGlow AI */}
          <motion.div
            className="flex-1 bg-[#F8E1F2]/80 rounded-xl p-6 shadow-sm border border-[#f3d6f0]"
            style={{
              background:
                "linear-gradient(120deg, #F8E1F2 60%, #F1E1F9 100%)",
            }}
            variants={cardVariants}
            custom={1}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/landing_page/Vector (3).png"
                alt="AI"
                width={20}
                height={29}
                className="mr-2"
              />
              <span className="text-base sm:text-lg font-bold text-[#000000]">
                InstaGlow AI
              </span>
            </div>
            <ul className="mt-2 space-y-3 text-sm sm:text-base">
              <li className="flex items-center text-gray-700">
                <Image
                  src="/landing_page/lets-icons_done-ring-round.png"
                  alt="check"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                AI generates content in 30 seconds
              </li>
              <li className="flex items-center text-gray-700">
                <Image
                  src="/landing_page/lets-icons_done-ring-round.png"
                  alt="check"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Smart hashtag suggestions
              </li>
              <li className="flex items-center text-gray-700">
                <Image
                  src="/landing_page/lets-icons_done-ring-round.png"
                  alt="check"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Engaging captions written for you
              </li>
              <li className="flex items-center text-gray-700">
                <Image
                  src="/landing_page/lets-icons_done-ring-round.png"
                  alt="check"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Schedule at optimal times
              </li>
              <li className="flex items-center text-gray-700">
                <Image
                  src="/landing_page/lets-icons_done-ring-round.png"
                  alt="check"
                  width={18}
                  height={18}
                  className="mr-2"
                />
                Consistent brand voice & style
              </li>
            </ul>
          </motion.div>
        </motion.div>
        {/* Features Row */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: (
                <FiZap className="text-white text-2xl" />
              ),
              label: "10X Faster Creation",
              desc: "What takes hours now takes minutes with AI assistance",
            },
            {
              icon: (
                <FiTrendingUp className="text-white text-2xl" />
              ),
              label: "Higher Engagement",
              desc: "AI-optimized content performs 3x better than manual posts",
            },
            {
              icon: (
                <FiGrid className="text-white text-2xl" />
              ),
              label: "All-in-One Platform",
              desc: "Create, edit, schedule, and analyze everything in one dashboard",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm border border-[#f3e6f3]"
              variants={featureVariants}
              custom={i}
            >
              <motion.span
                className="mb-2 flex items-center justify-center w-12 h-12 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #DF45A5 0%, #9C35E2 100%)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.span>
              <span className="text-base font-bold text-gray-900 mb-1">
                {item.label}
              </span>
              <span className="text-sm text-gray-500 text-center">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
