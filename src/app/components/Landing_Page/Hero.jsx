"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative text-white py-16 px-4 md:px-8 overflow-hidden pt-24 md:pt-16"
      style={{
        backgroundImage: `linear-gradient(105.12deg, rgba(24,17,44,0.96) 5.24%, rgba(31,15,28,0.92) 63.55%), url('/landing_page/line.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Grid Layer */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 pointer-events-none z-0">
        <div className="col-span-full row-span-full bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      <motion.div
        className="relative z-10 grid md:grid-cols-2 gap-8 items-center mx-auto w-full"
        style={{ maxWidth: "1000px" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        {/* Left Content */}
        <div>
          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            Creativity,
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                background:
                  "linear-gradient(90.48deg, #CA80EE 0.41%, #F98862 66.21%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:
                  "transparent",
              }}
            >
              Unleashed.
            </span>
          </motion.h1>
          <motion.p
            className="text-sm text-gray-300 mt-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            Automate your Instagram infographics &
            content with AI-powered design tools
          </motion.p>

          <div className="flex gap-3 mt-6 flex-wrap">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 4px 24px #fa71cd55",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#c471f5] to-[#fa71cd] text-white font-medium px-4 py-2 rounded-full shadow-md hover:opacity-90 transition text-xs cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                <Image
                  src="/landing_page/vector.png"
                  alt="sparkle"
                  width={16}
                  height={16}
                />
                Generate My content
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 4px 24px #a200c555",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#a200c5] font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition text-xs cursor-pointer"
            >
              Watch Demo
            </motion.button>
          </div>

          <div className="flex gap-2 mt-6 flex-wrap">
            <motion.span
              className="bg-[#51277b] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#6d3bbd",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Image
                src="/landing_page/mingcute_flash-fill.png"
                alt="AI"
                width={16}
                height={16}
              />
              AI-Powered
            </motion.span>
            <motion.span
              className="bg-[#872c64] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#a94b7b",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Image
                src="/landing_page/mdi_art.png"
                alt="Smart"
                width={16}
                height={16}
              />
              Smart Design
            </motion.span>
            <motion.span
              className="bg-[#2f3f79] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer"
              whileHover={{
                scale: 1.08,
                backgroundColor: "#4256a1",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Image
                src="/landing_page/vector_1.png"
                alt="Phone"
                width={16}
                height={16}
              />
              Instant Posts
            </motion.span>
          </div>
        </div>

        {/* Right Image Section */}
        <motion.div
          className="flex justify-center relative w-full"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="relative overflow-hidden w-full"
            style={{
              maxWidth: 420,
              width: "100%",
              height: "auto",
              top: "14px",
              borderWidth: "30px",
              borderRadius: "30px",
              border:
                "30px solid rgba(36, 40, 62, 0.53)",
              boxShadow:
                "0 8px 32px #a742f155, 0px 4px 4px 0px rgba(56, 40, 73, 1)",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 8px 32px #a742f155, 0px 4px 4px 0px rgba(56, 40, 73, 1)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
          >
            <Image
              src="/landing_page/ai.png"
              alt="AI avatars"
              width={420}
              height={395}
              className="object-cover w-full h-auto"
              style={{ borderRadius: "30px" }}
              sizes="(max-width: 768px) 90vw, 420px"
              priority
            />
          </motion.div>

          {/* Floating decorative icons - responsive positioning and sizing */}
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute top-[-10px] left-[-20px] sm:top-[-10px] sm:left-[-20px] xs:top-0 xs:left-0"
          >
            <Image
              src="/landing_page/float.png"
              alt="Floating Icon 1"
              width={32}
              height={32}
              className="animate-float sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]"
            />
          </motion.div>
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-20px] right-[-20px] sm:bottom-[-20px] sm:right-[-20px] xs:bottom-0 xs:right-0"
          >
            <Image
              src="/landing_page/Rectangle.png"
              alt="Floating Icon 2"
              width={32}
              height={32}
              className="animate-float-rev sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]"
            />
          </motion.div>
          <motion.div
            initial={{ y: -15 }}
            animate={{ y: [-15, 15, -15] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="absolute top-[-15px] right-[-30px] sm:top-[-15px] sm:right-[-30px] xs:top-0 xs:right-0"
          >
            <Image
              src="/landing_page/frame_476.png"
              alt="Floating Icon 3"
              width={32}
              height={32}
              className="animate-float sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]"
            />
          </motion.div>
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 2.7,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-20px] left-[-20px] sm:bottom-[-20px] sm:left-[-20px] xs:bottom-0 xs:left-0"
          >
            <Image
              src="/landing_page/Rectangle_24.png"
              alt="Floating Icon 4"
              width={32}
              height={32}
              className="animate-float-rev sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="mt-14 flex flex-col md:flex-row items-center justify-center gap-8 text-center mx-auto"
        style={{ maxWidth: "1000px" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <div>
          <p className="text-xl font-bold text-[#fa71cd]">
            50K+
          </p>
          <p className="text-gray-300 text-xs">
            Content Created
          </p>
        </div>
        <div>
          <p className="text-xl font-bold text-[#fa71cd]">
            10K+
          </p>
          <p className="text-gray-300 text-xs">
            Happy Creators
          </p>
        </div>
        <div>
          <p className="text-xl font-bold text-[#43c3f3]">
            5★
          </p>
          <p className="text-gray-300 text-xs">
            Average Rating
          </p>
        </div>
      </motion.div>
    </section>
  );
}
