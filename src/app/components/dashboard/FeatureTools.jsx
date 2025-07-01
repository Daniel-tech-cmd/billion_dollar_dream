import React from "react";
import { CiLink } from "react-icons/ci";

const tools = [
  {
    label: "Smart Prompt",
    icon: (
      <div
        className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, #E86ABC 0%, #9F3AE4 100%)",
        }}
      >
        <svg
          width="18"
          height="24"
          viewBox="0 0 23 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61645 14.6648L11.417 2.08422C12.1831 1.09968 13.62 1.71169 13.62 3.02255V12.7601C13.62 13.5444 14.183 14.1816 14.879 14.1816H19.6463C20.7288 14.1816 21.3058 15.6241 20.5902 16.5428L10.7896 29.1233C10.0236 30.1065 8.58666 29.4945 8.58666 28.1836V18.4461C8.58666 17.6618 8.02226 17.0246 7.32762 17.0246H2.56038C1.4778 17.0246 0.900805 15.5835 1.61645 14.6648Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    label: "Infographics Generator",
    icon: (
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] flex items-center justify-center bg-gradient-to-tr from-[#3ECFFF] to-[#1A8FE3]">
        <svg
          width="20"
          height="18"
          viewBox="0 0 29 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.12668 24.9625C1.7637 24.9621 1.41571 24.8176 1.15918 24.5608C0.902643 24.304 0.758545 23.9559 0.758545 23.5929V1.50696C0.761069 1.14476 0.905978 0.798096 1.16197 0.541847C1.41796 0.285598 1.76448 0.14034 2.12668 0.137451H26.9737C27.7295 0.137451 28.3419 0.75118 28.3419 1.50696V23.5929C28.3394 23.9551 28.1944 24.3018 27.9385 24.5581C27.6825 24.8143 27.3359 24.9596 26.9737 24.9625H2.12668ZM25.5835 16.6875V2.89578H3.51688V22.2041L17.3085 8.41245L25.5835 16.6875ZM25.5835 20.5877L17.3085 12.3127L7.41716 22.2041H25.5835V20.5877ZM9.03354 11.1708C8.30199 11.1708 7.6004 10.8802 7.08311 10.3629C6.56582 9.8456 6.27521 9.14401 6.27521 8.41245C6.27521 7.6809 6.56582 6.9793 7.08311 6.46201C7.6004 5.94473 8.30199 5.65412 9.03354 5.65412C9.7651 5.65412 10.4667 5.94473 10.984 6.46201C11.5013 6.9793 11.7919 7.6809 11.7919 8.41245C11.7919 9.14401 11.5013 9.8456 10.984 10.3629C10.4667 10.8802 9.7651 11.1708 9.03354 11.1708Z"
            fill="white"
          />
        </svg>
      </div>
    ),
  },
  {
    label: "Post Templates",
    icon: (
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] flex items-center justify-center bg-gradient-to-tr from-[#FFB86C] to-[#FF7A3C]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9998 0H3.99976C3.46932 0 2.96061 0.210714 2.58554 0.585786C2.21047 0.960859 1.99976 1.46957 1.99976 2V22C1.99976 22.5304 2.21047 23.0391 2.58554 23.4142C2.96061 23.7893 3.46932 24 3.99976 24H19.9998C20.5302 24 21.0389 23.7893 21.414 23.4142C21.789 23.0391 21.9998 22.5304 21.9998 22V2C21.9998 1.46957 21.789 0.960859 21.414 0.585786C21.0389 0.210714 20.5302 0 19.9998 0ZM19.9998 22H3.99976V2H19.9998V22Z"
            fill="white"
          />
          <path
            d="M5.99976 4H17.9998V6H5.99976V4ZM5.99976 8H12.9998V10H5.99976V8ZM7.99976 20H15.9998L11.9998 17L7.99976 20ZM18.9998 19V13L13.9998 16L18.9998 19ZM5.99976 13V19L9.99976 16L5.99976 13ZM15.9998 12H7.99976L11.9998 15L15.9998 12Z"
            fill="white"
          />
        </svg>
      </div>
    ),
  },
  {
    label: "Caption Assistant",
    icon: (
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] flex items-center justify-center bg-gradient-to-tr from-[#3EDC81] to-[#1ABF6E]">
        <svg
          width="13"
          height="24"
          viewBox="0 0 19 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.77983 3.22727V0.727272H18.2344V3.22727H10.9162V24H8.09801V3.22727H0.77983Z"
            fill="white"
          />
        </svg>
      </div>
    ),
  },
  {
    label: "Auto Scheduler",
    icon: (
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] flex items-center justify-center bg-gradient-to-tr from-[#B18CFF] to-[#A742F1]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.13745 7.21437L8.48183 4.13745M28.9625 7.21437L24.6181 4.13745M27.5833 17.9291C27.5833 20.8553 26.4208 23.6617 24.3517 25.7309C22.2825 27.8 19.4762 28.9625 16.55 28.9625C13.6237 28.9625 10.8174 27.8 8.74821 25.7309C6.67906 23.6617 5.51662 20.8553 5.51662 17.9291C5.51662 15.0029 6.67906 12.1965 8.74821 10.1274C10.8174 8.05822 13.6237 6.89578 16.55 6.89578C19.4762 6.89578 22.2825 8.05822 24.3517 10.1274C26.4208 12.1965 27.5833 15.0029 27.5833 17.9291Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5499 11.7229V18.6187L20.6874 21.3771"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    label: "Link in Bio Builder",
    icon: (
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] flex items-center justify-center bg-gradient-to-tr from-[#FF7A9C] to-[#FF4D8F]">
        <CiLink className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
    ),
  },
];

export default function FeatureTools() {
  return (
    <div
      className="relative w-full md:w-[calc(100%-282px)] ml-auto mt-6 md:mt-[32px] bg-white border border-[#E5E7EB] shadow-sm rounded-[12px] px-2 md:px-8 py-4 md:py-6"
      style={{
        boxShadow:
          "0px 0px 0px rgba(0,0,0,0.25), 0px 0px 4px rgba(0,0,0,0.25)",
      }}
    >
      <div className="text-center">
        <h2 className="text-[16px] md:text-[22px] font-bold bg-gradient-to-r from-[#FF4D8F] to-[#A742F1] bg-clip-text text-transparent mb-1 md:mb-2">
          Bring your Instagram to life with AI
        </h2>
        <p className="text-[#64748B] text-[12px] md:text-[15px] font-medium mb-4 md:mb-5">
          Create stunning content with our
          AI-powered tools in seconds
        </p>
      </div>
      <div className="w-full">
        <div
          className="flex flex-row gap-3 md:gap-5 justify-center-safe
 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 hide-scrollbar"
          style={{}}
        >
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-white border border-[#E5E7EB] rounded-[12px] shadow-sm p-2 md:p-4 transition hover:shadow-md flex-shrink-0"
            >
              {tool.icon}
              <span className="mt-2 md:mt-4 text-[#64748B] text-[12px] md:text-[15px] font-medium text-center">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
