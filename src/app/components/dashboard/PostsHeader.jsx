import React from "react";
import Link from "next/link";

export default function PostsHeader({
  onCreate,
}) {
  return (
    <header className="fixed md:left-[282px] md:w-[calc(100%-282px)] top-0 left-0 w-full bg-white flex items-center justify-between px-2 md:px-8 py-3 md:py-0 h-[64px] md:h-[80px] border-b border-[#E5E7EB] z-30">
      {/* Left: Back to Dashboard */}
      <div className="flex flex-row items-center gap-2 md:gap-[26px]">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-black hover:bg-gray-100 rounded-[5px] p-2 transition cursor-pointer"
        >
          {/* Provided SVG icon */}
          <svg
            width="14"
            height="14"
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
          My Posts
        </span>
      </div>
      {/* Right: Create New Post button */}
      <button
        onClick={onCreate}
        className="flex items-center justify-center h-[36px] md:h-[44px] px-4 md:px-8 rounded-[10px] md:rounded-[12px] font-medium text-[11px] md:text-[13px] text-white bg-gradient-to-r from-[#E5479F] to-[#AD39D2] shadow-md transition hover:opacity-90 cursor-pointer"
      >
        Create New Post
      </button>
    </header>
  );
}
