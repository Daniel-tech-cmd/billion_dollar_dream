"use client";
import React, { useState } from "react";

const POST_TYPES = [
  { icon: "📷", label: "Photo Post" },
  { icon: "🖼️", label: "Carousel" },
  { icon: "📹", label: "Reels" },
  { icon: "☁️", label: "Story" },
  { icon: "📝", label: "Qutoes Post" },
  { icon: "💡", label: "Tips/Tutorials" },
];

const TONES = [
  "Friendly",
  "Professional",
  "Funny",
  "Inspiring",
  "Serious",
  "Playful",
];

export default function CaptionAssistant() {
  const [selectedType, setSelectedType] =
    useState(POST_TYPES[0].label);
  const [description, setDescription] =
    useState("");
  const [tone, setTone] = useState("");
  const [includeHashtags, setIncludeHashtags] =
    useState(true);
  const [includeEmojis, setIncludeEmojis] =
    useState(true);

  const isFormComplete =
    description.trim() !== "" && tone !== "";

  return (
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 lg:gap-[28px] w-full max-w-screen-lg mx-auto px-1.5 py-5"
      style={{ minHeight: "calc(62.5vh - 50px)" }}
    >
      {/* Left: Caption Details */}
      <div className="bg-white rounded-[10px] flex flex-col p-5 w-full max-w-[546px] h-auto shadow-sm mb-5 lg:mb-0">
        <h2 className="font-bold text-[15px] mb-4">
          Caption Details
        </h2>
        <div className="mb-4">
          <div className="font-medium text-[10px] mb-2">
            Post Type
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {POST_TYPES.map((type) => {
              const isActive =
                selectedType === type.label;
              return (
                <button
                  key={type.label}
                  type="button"
                  className={`flex items-center gap-1.5 rounded-[6px] px-2.5 py-2 w-full transition-colors duration-200 cursor-pointer
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#AD48BA] to-[#E76933] text-white"
                        : "bg-[#F5F5F5] text-black hover:bg-gray-200"
                    }
                  `}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(90deg, #AD48BA 0%, #E76933 100%)",
                        }
                      : {}
                  }
                  onClick={() =>
                    setSelectedType(type.label)
                  }
                >
                  <span className="text-[15px]">
                    {type.icon}
                  </span>
                  <span className="font-medium text-[10px]">
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium text-[10px] mb-1.5">
            Describe your post
          </div>
          <textarea
            className="w-full h-[56px] bg-[#F5F5F5] rounded-[6px] p-2.5 text-[8.5px] text-[#757575] resize-none outline-none border-none"
            placeholder="What is your post about? What message do you want to convey?"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        </div>
        <div className="mb-4">
          <div className="font-medium text-[10px] mb-1.5">
            Tone of the Post
          </div>
          <select
            className="w-full bg-[#F5F5F5] rounded-[6px] p-2.5 text-[8.5px] text-[#757575] outline-none border-none"
            value={tone}
            onChange={(e) =>
              setTone(e.target.value)
            }
          >
            <option value="">
              Select tone...
            </option>
            {TONES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 mb-5">
          <label className="flex items-center gap-1.5 text-[8.5px] cursor-pointer">
            <input
              type="checkbox"
              checked={includeHashtags}
              onChange={() =>
                setIncludeHashtags((v) => !v)
              }
              className="accent-[#A742F1] scale-90"
            />
            <span className="text-[#757575]">
              # Include hashtags
            </span>
          </label>
          <label className="flex items-center gap-1.5 text-[8.5px] cursor-pointer">
            <input
              type="checkbox"
              checked={includeEmojis}
              onChange={() =>
                setIncludeEmojis((v) => !v)
              }
              className="accent-[#A742F1] scale-90"
            />
            <span className="text-[#757575]">
              😊 Include emojis
            </span>
          </label>
        </div>
        <button
          className={`w-full py-2.5 rounded-[6px] font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all duration-200
            ${
              isFormComplete
                ? "text-white cursor-pointer"
                : "opacity-70 cursor-not-allowed text-white"
            }
          `}
          style={
            isFormComplete
              ? {
                  background:
                    "linear-gradient(90deg, #E7479D 0%, #9B35E2 100%)",
                }
              : {
                  background:
                    "linear-gradient(90deg, #FFB6EA 0%, #B8AFFF 100%)",
                }
          }
          disabled={!isFormComplete}
        >
          <span
            className="inline-flex items-center justify-center"
            style={{ width: 16, height: 16 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.1659 32.177C25.4533 24.728 27.9809 22.0405 34.6028 20.0253C27.9809 18.0102 25.4533 15.3227 23.1659 7.87368C20.8786 15.3227 18.351 18.0102 11.7291 20.0253C18.351 22.0405 20.8786 24.728 23.1659 32.177ZM7.91679 13.9495C9.06048 10.223 10.3243 8.88025 13.6352 7.87368C10.3243 6.86712 9.06048 5.52436 7.91679 1.79785C6.77311 5.52436 5.50934 6.86712 2.19836 7.87368C5.50934 8.88025 6.77311 10.223 7.91679 13.9495ZM10.776 34.2023C11.3479 32.339 11.9788 31.6687 13.6352 31.1644C11.9788 30.6601 11.3479 29.9897 10.776 28.1265C10.2042 29.9897 9.57323 30.6601 7.91679 31.1644C9.57323 31.6687 10.2042 32.339 10.776 34.2023Z"
                stroke="white"
                strokeWidth="2.7"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Generate Caption
        </button>
      </div>
      {/* Right: Generated Caption */}
      <div className="bg-white rounded-[10px] flex flex-col items-center justify-center w-full max-w-[546px]  shadow-sm h-[400px]">
        <h2 className="font-bold text-[15px] mb-6 mt-5">
          Generated Caption
        </h2>
        <span className="text-[40px] font-serif mb-5">
          T
        </span>
        <span className="text-[12.5px] text-[#A3A3A3] text-center">
          Your generated caption will appear here
        </span>
      </div>
    </div>
  );
}
