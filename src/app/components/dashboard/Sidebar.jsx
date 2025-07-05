"use client";
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Navigation items and placeholder SVGs
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="2"
            fill="#9D58F6"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="2"
            fill="#9D58F6"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="2"
            fill="#9D58F6"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="2"
            fill="#9D58F6"
          />
        </svg>
      ),
      active: true,
    },
    {
      label: "My Post",
      href: "/dashboard/posts",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="4"
            stroke="#64748B"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="#64748B"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      label: "Post Generator",
      href: "/dashboard/generator",
      icon: (
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0294 23.5C18.7235 17.983 20.5955 15.9925 25.5 14.5C20.5955 13.0075 18.7235 11.017 17.0294 5.5C15.3353 11.017 13.4633 13.0075 8.55882 14.5C13.4633 15.9925 15.3353 17.983 17.0294 23.5ZM5.73529 10C6.58235 7.24 7.51835 6.2455 9.97059 5.5C7.51835 4.7545 6.58235 3.76 5.73529 1C4.88824 3.76 3.95224 4.7545 1.5 5.5C3.95224 6.2455 4.88824 7.24 5.73529 10ZM7.85294 25C8.27647 23.62 8.74376 23.1235 9.97059 22.75C8.74376 22.3765 8.27647 21.88 7.85294 20.5C7.42941 21.88 6.96212 22.3765 5.73529 22.75C6.96212 23.1235 7.42941 23.62 7.85294 25Z"
            stroke="#64748B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Templates",
      href: "/dashboard/templates",
      icon: (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0H12.5V2H0.5V0ZM0.5 4H7.5V6H0.5V4ZM2.5 16H10.5L6.5 13L2.5 16ZM13.5 15V9L8.5 12L13.5 15ZM0.5 9V15L4.5 12L0.5 9ZM10.5 8H2.5L6.5 11L10.5 8Z"
            fill="#64748B"
          />
        </svg>
      ),
    },
    {
      label: "Infographics",
      href: "/dashboard/infographics",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1V14.7143C1.5 15.3205 1.74082 15.9019 2.16947 16.3305C2.59812 16.7592 3.17951 17 3.78571 17H16.9286M4.92857 10.1429V13.5714M9.5 6.71429V13.5714M14.0714 3.28571V13.5714"
            stroke="#64748B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Scheduler",
      href: "/dashboard/scheduler",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="3"
            stroke="#64748B"
            strokeWidth="2"
          />
          <path
            d="M16 3v4M8 3v4"
            stroke="#64748B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="14"
            r="3"
            stroke="#64748B"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      label: "Analytics",
      href: "/dashboard/analytics",
      icon: (
        <svg
          width="25"
          height="18"
          viewBox="0 0 25 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.3652 0.184528L18.5293 0.887653C18.3359 0.91109 18.2539 1.14839 18.3916 1.28609L20.1289 3.02339L13.5078 9.64449L10.5254 6.665C10.3408 6.48043 10.0449 6.48336 9.86325 6.665L0.438447 16.0927C0.39483 16.1368 0.370361 16.1963 0.370361 16.2583C0.370361 16.3202 0.39483 16.3797 0.438447 16.4238L1.75681 17.748C1.84763 17.8388 1.99704 17.8388 2.08786 17.748L10.1943 9.64449L13.1738 12.624C13.3584 12.8056 13.6543 12.8056 13.8359 12.624L21.7871 4.67867L23.5244 6.41597C23.5555 6.44695 23.5947 6.46857 23.6375 6.47838C23.6803 6.48818 23.725 6.48577 23.7666 6.47142C23.8081 6.45708 23.8447 6.43137 23.8723 6.39723C23.9 6.36308 23.9175 6.32187 23.9228 6.27828L24.6259 0.44234C24.6465 0.292926 24.5175 0.16402 24.3652 0.184528Z"
            fill="#64748B"
          />
        </svg>
      ),
    },
    {
      label: "Brand Kit",
      href: "/dashboard/brand-kit",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <ellipse
            cx="12"
            cy="12"
            rx="8"
            ry="5"
            stroke="#64748B"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="2"
            fill="#64748B"
          />
        </svg>
      ),
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3999 10.6599C18.2396 10.4774 18.1512 10.2428 18.1512 9.9999C18.1512 9.75699 18.2396 9.52238 18.3999 9.3399L19.6799 7.89989C19.8209 7.74256 19.9085 7.5446 19.9301 7.3344C19.9516 7.12421 19.9061 6.91258 19.7999 6.72989L17.7999 3.2699C17.6948 3.08742 17.5348 2.94277 17.3426 2.85658C17.1505 2.77039 16.9361 2.74705 16.7299 2.7899L14.8499 3.1699C14.6107 3.21932 14.3616 3.17948 14.1498 3.0579C13.9379 2.93631 13.7779 2.74138 13.6999 2.5099L13.0899 0.679895C13.0228 0.481274 12.895 0.30876 12.7245 0.186737C12.5541 0.0647141 12.3495 -0.000646047 12.1399 -0.000104886H8.1399C7.92183 -0.0114869 7.70603 0.0488215 7.52546 0.171609C7.34489 0.294397 7.20948 0.472914 7.1399 0.679895L6.5799 2.5099C6.5019 2.74138 6.34187 2.93631 6.13001 3.0579C5.91815 3.17948 5.66911 3.21932 5.4299 3.1699L3.4999 2.7899C3.30445 2.76228 3.1052 2.79312 2.92724 2.87853C2.74929 2.96395 2.6006 3.10012 2.4999 3.2699L0.499896 6.72989C0.391056 6.91054 0.342118 7.12098 0.360079 7.33112C0.378039 7.54126 0.461979 7.74034 0.599896 7.89989L1.8699 9.3399C2.03022 9.52238 2.11863 9.75699 2.11863 9.9999C2.11863 10.2428 2.03022 10.4774 1.8699 10.6599L0.599896 12.0999C0.461979 12.2595 0.378039 12.4585 0.360079 12.6687C0.342118 12.8788 0.391056 13.0892 0.499896 13.2699L2.4999 16.7299C2.60499 16.9124 2.76502 17.057 2.95715 17.1432C3.14928 17.2294 3.36372 17.2527 3.5699 17.2099L5.4499 16.8299C5.68911 16.7805 5.93815 16.8203 6.15001 16.9419C6.36187 17.0635 6.5219 17.2584 6.5999 17.4899L7.2099 19.3199C7.27948 19.5269 7.41489 19.7054 7.59546 19.8282C7.77603 19.951 7.99183 20.0113 8.2099 19.9999H12.2099C12.4195 20.0004 12.6241 19.9351 12.7945 19.8131C12.965 19.691 13.0928 19.5185 13.1599 19.3199L13.7699 17.4899C13.8479 17.2584 14.0079 17.0635 14.2198 16.9419C14.4316 16.8203 14.6807 16.7805 14.9199 16.8299L16.7999 17.2099C17.0061 17.2527 17.2205 17.2294 17.4126 17.1432C17.6048 17.057 17.7648 16.9124 17.8699 16.7299L19.8699 13.2699C19.9761 13.0872 20.0216 12.8756 20.0001 12.6654C19.9785 12.4552 19.8909 12.2572 19.7499 12.0999L18.3999 10.6599ZM16.9099 11.9999L17.7099 12.8999L16.4299 15.1199L15.2499 14.8799C14.5297 14.7327 13.7805 14.855 13.1445 15.2237C12.5085 15.5924 12.03 16.1817 11.7999 16.8799L11.4199 17.9999H8.8599L8.4999 16.8599C8.26975 16.1617 7.79128 15.5724 7.1553 15.2037C6.51932 14.835 5.77012 14.7127 5.0499 14.8599L3.8699 15.0999L2.5699 12.8899L3.3699 11.9899C3.86185 11.4399 4.13383 10.7278 4.13383 9.98989C4.13383 9.25196 3.86185 8.53992 3.3699 7.98989L2.5699 7.0899L3.8499 4.88989L5.0299 5.1299C5.75012 5.27712 6.49932 5.15478 7.1353 4.78609C7.77128 4.41741 8.24975 3.82805 8.4799 3.1299L8.8599 1.9999H11.4199L11.7999 3.13989C12.03 3.83805 12.5085 4.42741 13.1445 4.79609C13.7805 5.16478 14.5297 5.28712 15.2499 5.13989L16.4299 4.8999L17.7099 7.11989L16.9099 8.0199C16.4235 8.56866 16.1549 9.27658 16.1549 10.0099C16.1549 10.7432 16.4235 11.4511 16.9099 11.9999ZM10.1399 5.9999C9.34877 5.9999 8.57541 6.23449 7.91761 6.67402C7.25982 7.11354 6.74713 7.73826 6.44438 8.46916C6.14163 9.20007 6.06241 10.0043 6.21675 10.7803C6.3711 11.5562 6.75206 12.2689 7.31147 12.8283C7.87088 13.3877 8.58361 13.7687 9.35954 13.923C10.1355 14.0774 10.9397 13.9982 11.6706 13.6954C12.4015 13.3927 13.0262 12.88 13.4658 12.2222C13.9053 11.5644 14.1399 10.791 14.1399 9.9999C14.1399 8.93903 13.7185 7.92161 12.9683 7.17147C12.2182 6.42132 11.2008 5.9999 10.1399 5.9999ZM10.1399 11.9999C9.74433 11.9999 9.35765 11.8826 9.02876 11.6628C8.69986 11.4431 8.44351 11.1307 8.29214 10.7653C8.14076 10.3998 8.10116 9.99768 8.17833 9.60971C8.2555 9.22175 8.44598 8.86539 8.72568 8.58568C9.00539 8.30598 9.36175 8.11549 9.74972 8.03832C10.1377 7.96115 10.5398 8.00076 10.9053 8.15214C11.2707 8.30351 11.5831 8.55986 11.8028 8.88875C12.0226 9.21765 12.1399 9.60433 12.1399 9.9999C12.1399 10.5303 11.9292 11.039 11.5541 11.4141C11.179 11.7892 10.6703 11.9999 10.1399 11.9999Z"
            fill="#64748B"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white border border-gray-200 shadow"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open sidebar"
      >
        <RiMenu2Line className="w-5 h-5 text-[#A742F1]" />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[220px] sm:w-[250px] md:w-[260px] lg:w-[282px] bg-white border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        } lg:translate-x-0`}
        style={{ boxSizing: "border-box" }}
      >
        {/* Logo */}
        <div className="mt-8 mb-8 flex justify-center">
          <span
            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-[1.2] bg-gradient-to-r from-[#FF4D8F] to-[#A742F1] bg-clip-text text-transparent select-none"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            InstaGlow AI
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col items-center gap-2 lg:gap-4">
          {/* All nav items with dynamic active styling */}
          <div className="flex flex-col items-start gap-2 lg:gap-3 w-[80%]">
            {navItems.map((item, idx) => {
              const isActive =
                pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`w-full transition-all duration-200 ${
                    isActive
                      ? "w-[85%]"
                      : "hover:bg-gray-50 px-2 py-1 rounded-lg"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 px-4 py-1.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "border border-[#EAAAFF] bg-gradient-to-r from-[#EDDCFD] to-[#F8DAED] shadow-md hover:shadow-lg"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      {React.cloneElement(
                        item.icon,
                        {
                          width: "100%",
                          height: "100%",
                        }
                      )}
                    </div>
                    <span
                      className={`text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-medium ${
                        isActive
                          ? "text-black"
                          : "text-[#64748B]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
      {/* No overlay, background remains white when sidebar is open */}
    </>
  );
}
