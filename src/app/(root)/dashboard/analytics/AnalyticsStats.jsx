import React from "react";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import { PiUsersThreeLight } from "react-icons/pi";

const stats = [
  {
    label: "Total Views",
    value: "24.5K",
    change: "+12.5%",
    iconBg: "#EFF6FF",
    icon: (
      <AiOutlineEye size={20} color="#2B67EC" />
    ), // blue
    changeColor: "#26C661",
  },
  {
    label: "Total Likes",
    value: "1,287",
    change: "+8.2%",
    iconBg: "#FFF1F2",
    icon: (
      <AiOutlineHeart size={20} color="#E5479F" />
    ), // pink
    changeColor: "#26C661",
  },
  {
    label: "Comments",
    value: "234",
    change: "+15.7%",
    iconBg: "#ECFDF5",
    icon: (
      <AiOutlineComment
        size={20}
        color="#22C55E"
      />
    ), // green
    changeColor: "#26C661",
  },
  {
    label: "Followers",
    value: "892",
    change: "+5.3%",
    iconBg: "#F5F3FF",
    icon: (
      <PiUsersThreeLight
        size={20}
        color="#A855F7"
      />
    ), // purple
    changeColor: "#26C661",
  },
];

export default function AnalyticsStats() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-[#E5E7EB] rounded-[10px] p-4 flex flex-col justify-between h-[110px] min-w-[160px] relative shadow-sm"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-bold text-[18px] leading-[22px] text-black">
                {stat.value}
              </div>
              <div className="font-normal text-[12px] leading-[15px] text-[#4B5563] mt-0.5">
                {stat.label}
              </div>
            </div>
            <div
              className="flex items-center justify-center rounded-[10px]"
              style={{
                background: stat.iconBg,
                width: 36,
                height: 36,
              }}
            >
              {stat.icon}
            </div>
          </div>
          <div className="flex items-center gap-1 mt-4">
            {/* Up arrow icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 15V4M9 4L4 9M9 4l5 5"
                stroke="#26C661"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="font-semibold text-[13px] leading-[16px]"
              style={{ color: stat.changeColor }}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
