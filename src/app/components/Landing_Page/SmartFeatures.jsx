import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";

const features = [
  {
    icon: (
      <FiBarChart2 className="text-3xl text-white" />
    ),
    title: "Analytics & Insights",
    description:
      "Track performance and optimize your content stratgy with detailed analytics.",
    bg: "bg-[linear-gradient(90deg,_#40D880_0%,_#18BE81_100%)]",
    style: {
      background:
        "linear-gradient(90deg, #40D880 0%, #18BE81 100%)",
    },
  },
  {
    icon: (
      <FaInstagram className="text-3xl text-white" />
    ),
    title: "Direct Publishing",
    description:
      "Publish directly to Instagram without switching between the app",
    bg: "bg-[linear-gradient(90deg,_#5BA6F8_0%,_#0FB4D8_100%)]",
    style: {
      background:
        "linear-gradient(90deg, #5BA6F8 0%, #0FB4D8 100%)",
    },
  },
  {
    icon: (
      <MdPhoto className="text-3xl text-white" />
    ),
    title: "Brand Kit Integration",
    description:
      "Keep your brand consistent with custom color, fonts and logos.",
    bg: "bg-[linear-gradient(90deg,_#C57DF0_0%,_#E354AD_100%)]",
    style: {
      background:
        "linear-gradient(90deg, #C57DF0 0%, #E354AD 100%)",
    },
  },
];

export default function SmartFeatures() {
  return (
    <section className="bg-[#fcf6fa] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-black">
          Smart Features That Save Time
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md px-8 py-10 flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.03]"
            >
              <div
                className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl"
                style={feature.style}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
