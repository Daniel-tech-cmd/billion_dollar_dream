import React from "react";
import Link from "next/link";

export default function AnalyticsHeader({
  onExport,
  onDateRange,
}) {
  return (
    <header className="fixed md:left-[282px] md:w-[calc(100%-282px)] top-0 left-0 w-full bg-white flex items-center justify-between px-2 md:px-8 py-3 md:py-0 h-[64px] md:h-[80px] border-b border-[#E5E7EB] z-30">
      {/* Left: Back to Dashboard */}
      <div className="flex flex-row items-center gap-2 md:gap-[26px]">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-black hover:bg-gray-100 rounded-[5px] p-2 transition cursor-pointer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-4 md:h-4"
          >
            <path
              d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
              fill="black"
            />
          </svg>
          <span className="hidden md:inline font-sm text-[13px] md:text-[15px] leading-[20px] md:leading-[20px]">
            Back to Dashboard
          </span>
        </Link>
        <span className="font-bold text-[15px] md:text-[20px] leading-[20px] md:leading-[24px] ml-2 md:ml-8">
          Analytics
        </span>
      </div>
      {/* Right: Date Range and Export */}
      <div className="flex flex-row gap-3 md:gap-4">
        <button
          className="flex items-center gap-2 border border-[#E5479F] bg-[#FDF2FA] text-[#E5479F] rounded-[12px] px-4 py-2 text-[13px] md:text-[15px] font-medium h-[36px] md:h-[44px] shadow-sm transition"
          onClick={onDateRange}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2V4"
              stroke="#E5479F"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M14 2V4"
              stroke="#E5479F"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect
              x="3"
              y="6"
              width="14"
              height="11"
              rx="2"
              stroke="#E5479F"
              strokeWidth="1.5"
            />
            <path
              d="M3 9H17"
              stroke="#E5479F"
              strokeWidth="1.5"
            />
          </svg>
          Last 7 days
        </button>
        <button
          className="flex items-center gap-2 border border-[#E5E7EB] rounded-[12px] px-4 py-2 text-[13px] md:text-[15px] font-medium h-[36px] md:h-[44px] bg-white hover:bg-gray-50 transition"
          onClick={onExport}
        >
          {/* Upload icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 13V3"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 7L10 3L14 7"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect
              x="3"
              y="15"
              width="14"
              height="2"
              rx="1"
              fill="#000"
            />
          </svg>
          Export
        </button>
      </div>
    </header>
  );
}
