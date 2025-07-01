"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/landing_page/infographics.png",
    title: "AI Content Generator",
    description:
      "Transform your ideas into engaging Instagram posts with our advanced AI. Generate captions, hashtags, and content ideas that resonate with your audience.",
    button: {
      text: "Try AI",
      color:
        "bg-[#FF5CA7] hover:bg-[#e14c91] text-white",
    },
    illustration: "/landing_page/frame 43.png",
    accent:
      "/landing_page/mingcute_flash-fill.png",
    gradient: "from-[#fde7f3] to-[#f8eaff]",
  },
  {
    icon: "/landing_page/designs.png",
    title: "Smart Design Creator",
    description:
      "Generate professional Instagram posts, stories, and carousel designs with AI assistance. Choose from thousands of templates or create customs designs.",
    button: {
      text: "Try Smart AI",
      color:
        "bg-[#A742F1] hover:bg-[#7E28D4] text-white",
    },
    illustration: "/landing_page/group 5.png",
    accent: "/landing_page/mdi_art.png",
    gradient: "from-[#f3e7fd] to-[#f8eaff]",
  },
  {
    icon: "/landing_page/content.png",
    title: "Content Writer AI",
    description:
      "Craft engaging captions, write compelling stories, and generate trending hashtags that boost your Instagram engagement and reach.",
    button: {
      text: "Try Content AI",
      color:
        "bg-[#FFB800] hover:bg-[#e1a200] text-white",
    },
    illustration: "/landing_page/frame_43.png",
    accent: "/landing_page/mdi_art.png",
    gradient: "from-[#fff7e7] to-[#f8eaff]",
  },
  {
    icon: "/landing_page/frame 15.png",
    title: "Smart Scheduler",
    description:
      "Schedule your content for optional posting times, manage multiples account, and maintain consistent presence with our intelligent scheduling system.",
    button: {
      text: "Try AI",
      color:
        "bg-[#3EE0C4] hover:bg-[#2bb89c] text-white",
    },
    illustration: "/landing_page/image 22.png",
    accent:
      "/landing_page/mingcute_flash-fill.png",
    gradient: "from-[#e7faf7] to-[#f8eaff]",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const floatAnim = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Everthing() {
  return (
    <section className="bg-[#f8eaff] py-16 px-4 pt-20 pb-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4">
          Everything You Need for{" "}
          <br className="hidden sm:block" />
          <span className="text-[#A742F1]">
            Instagram Success
          </span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mb-12 text-sm sm:text-base">
          Our comprehensive AI suite handles every
          aspect of Instagram content creation,
          from design to scheduling, so you can
          focus on growing your audience.
        </p>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between min-h-[440px] md:min-h-[480px]"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={cardVariants}
              custom={idx}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px #a742f155",
              }}
            >
              {/* Icon */}
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                  <Image
                    src={item.icon}
                    alt={item.title + " icon"}
                    width={24}
                    height={24}
                    className="w-10 h-10"
                  />
                </div>
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-1 text-left">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 text-sm mb-5 text-left leading-relaxed">
                {item.description}
              </p>
              {/* Button */}
              <div className="mb-6">
                <button
                  className={`px-5 py-2 rounded-full font-semibold text-sm shadow-none ${item.button.color}`}
                >
                  {item.button.text}
                </button>
              </div>
              {/* Illustration */}
              <div
                className={`relative  w-full h-48 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mt-auto`}
              >
                <motion.div
                  {...floatAnim}
                  className="w-full flex justify-center items-center"
                >
                  <Image
                    src={item.illustration}
                    alt={
                      item.title + " illustration"
                    }
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
                {/* Accent Icon */}
                <div className="absolute top-3 right-3">
                  <Image
                    src={item.accent}
                    alt="accent"
                    width={20}
                    height={20}
                    className="opacity-60"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
