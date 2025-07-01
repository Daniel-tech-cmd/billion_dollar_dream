"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 60, scale: 0.95 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function SeeItInAction() {
  return (
    <section
      className="w-full py-20 px-4"
      style={{
        background:
          "linear-gradient(204.55deg, #FEFAFD 53.58%, #F1E1F9 78.89%)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-black">
          See It In Action
        </h2>
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-end mb-20"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Before Card (Manual Design) */}
          <motion.div
            className="flex flex-col items-center"
            variants={cardVariants}
            custom={0}
          >
            <div className="relative w-56 h-44 rounded-2xl bg-gradient-to-br from-[#f3e6f3] to-[#e6e3f3] shadow-xl mb-6 flex items-end justify-center transition-transform duration-200 hover:scale-[1.03]">
              <div className="absolute left-0 right-0 bottom-8 mx-auto w-44 h-10 bg-white rounded-xl flex flex-col justify-center px-6 shadow-md">
                <div className="h-2.5 w-5/6 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-2.5 w-2/3 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-600 font-semibold text-base mt-2">
              Before: Manual Design
            </span>
          </motion.div>
          {/* AI Magic */}
          <motion.div
            className="flex flex-col items-center"
            variants={cardVariants}
            custom={1}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-[#fa71cd] to-[#a742f1] flex flex-col items-center justify-center shadow-lg mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/landing_page/Vector_2.png"
                alt="AI Magic Icon"
                width={38}
                height={38}
              />
            </motion.div>
            <span className="text-gray-800 font-bold text-lg">
              AI Magic
            </span>
            <span className="text-gray-400 text-sm mt-1">
              30 seconds
            </span>
          </motion.div>
          {/* After Card (AI-Generated) */}
          <motion.div
            className="flex flex-col items-center"
            variants={cardVariants}
            custom={2}
          >
            <div className="relative w-56 h-44 rounded-2xl bg-gradient-to-br from-[#fa71cd] to-[#a742f1] shadow-xl mb-6 flex items-end justify-center transition-transform duration-200 hover:scale-[1.03]">
              {/* Content card */}
              <div className="absolute left-0 right-0 bottom-8 mx-auto w-44 h-16 bg-white rounded-xl flex flex-col justify-center px-6 py-2 shadow-md">
                <div className="flex items-center mb-2">
                  <span className="inline-block w-2.5 h-2.5 bg-[#FF5CA7] rounded-full mr-2"></span>
                  <span className="text-sm font-semibold text-gray-700">
                    Scroll-stopping content
                  </span>
                </div>
                <div className="h-2.5 w-2/3 bg-gray-200 rounded-full mt-1"></div>
              </div>
              {/* Pink dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-[#FFB6E6] rounded-full border-2 border-white"></div>
            </div>
            <span className="text-gray-600 font-semibold text-base mt-2">
              After: AI-Generated
            </span>
          </motion.div>
        </motion.div>
        <button className="mt-2 px-10 py-4 rounded-full text-white font-semibold text-base bg-gradient-to-r from-[#fa71cd] to-[#a742f1] shadow-md hover:opacity-90 transition">
          Start Creating Now
        </button>
      </div>
    </section>
  );
}
