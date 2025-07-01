import React from "react";
import { LuSparkles } from "react-icons/lu";
import {
  MdOutlineSchedule,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

const stats = [
  {
    icon: (
      <LuSparkles className="text-[#A855F7] w-5 h-5 md:w-6 md:h-6" />
    ), // purple sparkles
    value: "24",
    delta: "+12%",
    deltaColor: "#26C661",
    label: "Posts Generated",
    deltaClass: "text-[#26C661]",
  },
  {
    icon: (
      <MdOutlineSchedule className="text-[#17A1FA] w-5 h-5 md:w-6 md:h-6" />
    ), // blue clock
    value: "8",
    delta: "+4",
    deltaColor: "#26C661",
    label: "Schedule Posts",
    deltaClass: "text-[#26C661]",
  },
  {
    icon: (
      <BsCheckCircle className="text-[#32C96E] w-5 h-5 md:w-6 md:h-6" />
    ), // green check
    value: "16",
    delta: "+6",
    deltaColor: "#26C661",
    label: "Published",
    deltaClass: "text-[#26C661]",
  },
  {
    icon: (
      <MdOutlineRemoveRedEye className="text-[#EA580C] w-5 h-5 md:w-6 md:h-6" />
    ), // orange eye
    value: "12.5K",
    delta: "+23",
    deltaColor: "#26C661",
    label: "Total views",
    deltaClass: "text-[#26C661]",
  },
];

export default function DashboardStats() {
  return (
    <div
      className="w-full md:w-[calc(100%-282px)] ml-auto mt-6 md:mt-[32px] max-w-full flex flex-wrap justify-center-safe"
      style={{ maxWidth: "100%", gap: "25px" }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="bg-white border border-[#E5E7EB] rounded-[12px] shadow-sm flex flex-col items-start justify-center-safe px-3 py-3 md:px-5 md:py-5 h-[110px] md:h-[140px] relative box-border w-[calc(50%-12.5px)] md:w-[calc(25%-18.75px)]"
        >
          {/* Top Row: Icon and Delta */}
          <div className="flex flex-row w-full justify-between items-center mb-1">
            <div className="flex items-center justify-center">
              {stat.icon}
            </div>
            <span
              className={`font-semibold text-[12px] md:text-[15px] ${stat.deltaClass} ml-2`}
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              {stat.delta}
            </span>
          </div>
          {/* Value */}
          <div className="mt-1 mb-0.5">
            <span
              className="font-bold text-[16px] md:text-[20px] text-black"
              style={{
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.2",
              }}
            >
              {stat.value}
            </span>
          </div>
          {/* Label */}
          <div className="w-full mt-auto">
            <span
              className="text-[#4B5563] text-[10px] md:text-[13px] font-normal block"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
