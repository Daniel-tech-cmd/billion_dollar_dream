"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/landing_page/infographics.png",
    title: "Infographics",
    description:
      "AI-generated data visualization and infographics",
    hasBackground: true,
  },
  {
    icon: "/landing_page/designs.png",
    title: "Designs",
    description:
      "Professional post designs and story templates",
  },
  {
    icon: "/landing_page/content.png",
    title: "Content",
    description:
      "Engaging captions and hashtag recommendations",
  },
  {
    icon: "/landing_page/schedule.png",
    title: "Schedule",
    description:
      "Auto-schedule post for optimal engagement",
  },
];

const stats = [
  {
    number: "50K+",
    label: "Content Created",
  },
  {
    number: "10K+",
    label: "Happy Creators",
  },
  {
    number: "5★",
    label: "Average Rating",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="bg-[#f8eaff] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group ${
                item.hasBackground
                  ? "infographic-circle"
                  : ""
              }`}
              custom={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 8px 32px #a742f155, 0px 4px 4px 0px rgba(56, 40, 73, 0.15)",
              }}
            >
              <div className="relative z-10 flex justify-center mb-4">
                <div className="p-4 rounded-xl bg-[#f8eaff] group-hover:bg-[#e9d6fa] transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#7E28D4] group-hover:text-[#A742F1] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.description}
              </p>
              {/* Decorative circle for Infographics */}
              {item.hasBackground && (
                <span className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#c471f5]/30 to-[#fa71cd]/30 rounded-full z-0 blur-2xl opacity-60"></span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
