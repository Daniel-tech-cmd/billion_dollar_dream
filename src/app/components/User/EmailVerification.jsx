"use client";
import React, { useState } from "react";

export default function EmailVerification() {
  const [code, setCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [timer, setTimer] = useState(160); // 2:40 in seconds

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(
        () => setTimer((t) => t - 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(
      /[^0-9a-zA-Z]/,
      ""
    );
    if (val.length > 1) return;
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);
    // Move to next input
    if (val && idx < 5) {
      document
        .getElementById(`code-input-${idx + 1}`)
        .focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData
      .getData("text")
      .slice(0, 6)
      .split("");
    setCode((prev) =>
      prev.map((_, i) => paste[i] || "")
    );
  };

  const formattedTime = `${String(
    Math.floor(timer / 60)
  ).padStart(2, "0")}:${String(
    timer % 60
  ).padStart(2, "0")}`;

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-2 py-6"
      style={{
        background:
          "linear-gradient(115.43deg, #9859E9 18.37%, #CB4FB8 41.76%, #DE54AB 57.93%, #CF64C1 76.86%, #AD85F1 100%)",
      }}
    >
      <div className="relative w-full max-w-[95vw] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[860px] h-auto bg-white shadow-[0_0_25px_#E2DFE7] rounded-[16px] flex items-center justify-center p-2 sm:p-4 md:p-8">
        <div className="w-full flex flex-col items-center">
          {/* Email Icon with blur */}
          <div className="relative w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] lg:w-[72px] lg:h-[72px] mb-4 flex items-center justify-center">
            <div className="absolute w-full h-full bg-[rgba(180,59,204,0.63)] rounded-full blur-[32px]" />
            {/* Placeholder for email icon */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="64"
                height="64"
                rx="12"
                fill="#fff"
                fillOpacity="0"
              />
              <path
                d="M12 20C12 17.7909 13.7909 16 16 16H48C50.2091 16 52 17.7909 52 20V44C52 46.2091 50.2091 48 48 48H16C13.7909 48 12 46.2091 12 44V20Z"
                stroke="#ED6EB3"
                strokeWidth="3"
              />
              <path
                d="M16 20L32 34L48 20"
                stroke="#ED6EB3"
                strokeWidth="3"
              />
            </svg>
          </div>
          {/* Main Card Content */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
            {/* Title and subtitle */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                Check your Email
              </div>
              <div className="text-[#707070] font-medium text-xs sm:text-sm md:text-base text-center w-full">
                Please enter the verification code
                sent to your email{" "}
                <span className="text-[#6C63FF] break-all">
                  bookwhiteclef@gmail.com
                </span>
              </div>
            </div>
            {/* Code Inputs */}
            <div className="flex flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full mt-2">
              {code.map((val, idx) => (
                <input
                  key={idx}
                  id={`code-input-${idx}`}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={(e) =>
                    handleChange(e, idx)
                  }
                  onPaste={
                    idx === 0
                      ? handlePaste
                      : undefined
                  }
                  className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] border border-[#DCDDDE] rounded-[10px] text-center text-lg sm:text-2xl md:text-3xl font-bold focus:outline-none focus:border-[#AD39D2] transition"
                />
              ))}
            </div>
            {/* Timer and Button */}
            <div className="flex flex-col items-center gap-2 w-full mt-2">
              <div className="text-[#707070] font-medium text-xs sm:text-sm md:text-base text-center w-full">
                Resend code in {formattedTime}
              </div>
              <button className="w-32 h-10 sm:w-40 sm:h-12 md:w-44 md:h-14 bg-gradient-to-r from-[#E5479F] to-[#AD39D2] rounded-[10px] flex items-center justify-center mt-1">
                <span className="text-white text-base sm:text-lg md:text-xl font-medium">
                  Continue
                </span>
              </button>
            </div>
            {/* Help Link */}
            <div className="text-[#707070] font-medium text-xs sm:text-sm md:text-base text-center w-full mt-1">
              Need Help?{" "}
              <a
                href="#"
                className="text-[#6C63FF] underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
