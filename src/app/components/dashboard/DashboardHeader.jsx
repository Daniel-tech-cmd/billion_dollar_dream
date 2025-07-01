import React from "react";

export default function DashboardHeader() {
  return (
    <header className="fixed top-0 left-0 w-full md:left-[282px] md:w-[calc(100%-282px)] h-[64px] md:h-[80px] bg-white border-b border-[#E5E7EB] z-30 flex items-center justify-center px-2 md:px-4">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-center gap-2 md:gap-[24px] w-full max-w-[1158px] h-[40px] md:h-[48px]">
        <span className="text-black font-medium text-[13px] md:text-[15px] lg:text-[16px] leading-[20px] whitespace-nowrap">
          Welcome back, Jacey
        </span>
        <div className="flex items-center border border-[#E5E7EB] rounded-[10px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[220px] h-[32px] md:h-[38px] px-2 md:px-4">
          <svg
            className="w-4 h-4 text-[#64748B] mr-1 md:mr-2"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="#64748B"
              strokeWidth="2"
            />
            <path
              d="M20 20L17 17"
              stroke="#64748B"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            className="bg-transparent outline-none border-none text-[#64748B] font-medium text-[11px] md:text-[13px] placeholder-[#64748B] w-full"
            placeholder="Search for projects...."
          />
        </div>
        <button className="w-5 h-5 items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17.9999C6.48333 17.9999 4.35433 17.1289 2.613 15.3869C0.871667 13.6449 0.000666667 11.5159 0 8.99992C0 6.69992 0.75 4.70392 2.25 3.01192C3.75 1.31992 5.66667 0.332586 8 0.049919C8.21667 0.0165856 8.40833 0.045919 8.575 0.137919C8.74167 0.229919 8.875 0.350586 8.975 0.499919C9.075 0.649252 9.12933 0.824252 9.138 1.02492C9.14667 1.22559 9.084 1.41725 8.95 1.59992C8.66667 2.03325 8.454 2.49159 8.312 2.97492C8.17 3.45825 8.09933 3.96659 8.1 4.49992C8.1 5.99992 8.625 7.27492 9.675 8.32492C10.725 9.37492 12 9.89992 13.5 9.89992C14.0167 9.89992 14.5293 9.82492 15.038 9.67492C15.5467 9.52492 16.0007 9.31659 16.4 9.04992C16.5833 8.93325 16.771 8.87925 16.963 8.88792C17.155 8.89659 17.3257 8.94225 17.475 9.02492C17.6417 9.10825 17.771 9.23325 17.863 9.39992C17.955 9.56659 17.984 9.76659 17.95 9.99992C17.7167 12.2999 16.7377 14.2083 15.013 15.7249C13.2883 17.2416 11.284 17.9999 9 17.9999ZM9 15.9999C10.4667 15.9999 11.7833 15.5956 12.95 14.7869C14.1167 13.9783 14.9667 12.9243 15.5 11.6249C15.1667 11.7083 14.8333 11.7749 14.5 11.8249C14.1667 11.8749 13.8333 11.8999 13.5 11.8999C11.45 11.8999 9.704 11.1789 8.262 9.73692C6.82 8.29492 6.09933 6.54925 6.1 4.49992C6.1 4.16659 6.125 3.83325 6.175 3.49992C6.225 3.16659 6.29167 2.83325 6.375 2.49992C5.075 3.03325 4.02067 3.88325 3.212 5.04992C2.40333 6.21659 1.99933 7.53325 2 8.99992C2 10.9333 2.68333 12.5833 4.05 13.9499C5.41667 15.3166 7.06667 15.9999 9 15.9999Z"
              fill="#64748B"
            />
          </svg>
        </button>
        <div className="relative w-5 h-5 flex items-center justify-center ml-auto">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 17z"
              stroke="#64748B"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#F05473] rounded-full border-2 border-white"></span>
        </div>
        <div className="flex items-center bg-[#F1F5F9] rounded-[16px] h-[36px] md:h-[44px] px-2 gap-1 md:gap-2">
          <div className="flex items-center gap-1 px-1 md:px-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5294 23.5C18.2235 17.983 20.0955 15.9925 25 14.5C20.0955 13.0075 18.2235 11.017 16.5294 5.5C14.8353 11.017 12.9633 13.0075 8.05882 14.5C12.9633 15.9925 14.8353 17.983 16.5294 23.5ZM5.23529 10C6.08235 7.24 7.01835 6.2455 9.47059 5.5C7.01835 4.7545 6.08235 3.76 5.23529 1C4.38824 3.76 3.45224 4.7545 1 5.5C3.45224 6.2455 4.38824 7.24 5.23529 10ZM7.35294 25C7.77647 23.62 8.24376 23.1235 9.47059 22.75C8.24376 22.3765 7.77647 21.88 7.35294 20.5C6.92941 21.88 6.46212 22.3765 5.23529 22.75C6.46212 23.1235 6.92941 23.62 7.35294 25Z"
                stroke="#A855F7"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#64748B] font-medium text-[11px] md:text-[13px]">
              150 tokens
            </span>
          </div>
          <button className="flex items-center gap-1 md:gap-2 bg-gradient-to-r from-[#E7479D] to-[#9B35E2] rounded-[10px] h-[28px] md:h-[36px] px-2 md:px-4">
            <svg
              width="14"
              height="13"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18V16H17V18H3ZM3 14.5L1.725 6.475C1.69167 6.475 1.654 6.47934 1.612 6.488C1.57 6.49667 1.53267 6.50067 1.5 6.5C1.08334 6.5 0.729336 6.354 0.438002 6.062C0.146669 5.77 0.000668939 5.416 2.27273e-06 5C-0.000664394 4.584 0.145336 4.23 0.438002 3.938C0.730669 3.646 1.08467 3.5 1.5 3.5C1.91534 3.5 2.26967 3.646 2.563 3.938C2.85634 4.23 3.002 4.584 3 5C3 5.11667 2.98734 5.225 2.962 5.325C2.93667 5.425 2.90767 5.51667 2.875 5.6L6 7L9.125 2.725C8.94167 2.59167 8.79167 2.41667 8.675 2.2C8.55834 1.98334 8.5 1.75 8.5 1.5C8.5 1.08334 8.646 0.729002 8.938 0.437002C9.23 0.145002 9.584 -0.000664389 10 2.2779e-06C10.416 0.000668945 10.7703 0.146669 11.063 0.438002C11.3557 0.729336 11.5013 1.08334 11.5 1.5C11.5 1.75 11.4417 1.98334 11.325 2.2C11.2083 2.41667 11.0583 2.59167 10.875 2.725L14 7L17.125 5.6C17.0917 5.51667 17.0623 5.425 17.037 5.325C17.0117 5.225 16.9993 5.11667 17 5C17 4.58334 17.146 4.229 17.438 3.937C17.73 3.645 18.084 3.49934 18.5 3.5C18.916 3.50067 19.2703 3.64667 19.563 3.938C19.8557 4.22934 20.0013 4.58334 20 5C19.9987 5.41667 19.853 5.771 19.563 6.063C19.273 6.355 18.9187 6.50067 18.5 6.5C18.4667 6.5 18.4293 6.496 18.388 6.488C18.3467 6.48 18.309 6.47567 18.275 6.475L17 14.5H3ZM4.7 12.5H15.3L15.95 8.325L13.325 9.475L10 4.9L6.675 9.475L4.05 8.325L4.7 12.5Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-semibold text-[11px] md:text-[13px]">
              Upgrade
            </span>
          </button>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] rounded-full object-cover border-2 border-white shadow block ml-2 shrink-0"
        />
      </div>
      {/* Mobile Layout: Only notification and profile image */}
      <div className="flex md:hidden flex-row items-center justify-end w-full h-full px-2">
        <div className="relative w-5 h-5 flex items-center justify-center">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 17z"
              stroke="#64748B"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#F05473] rounded-full border-2 border-white"></span>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-[28px] h-[28px] rounded-full object-cover border-2 border-white shadow block ml-4 shrink-0"
        />
      </div>
    </header>
  );
}
