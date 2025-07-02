"use client";
import Image from "next/image";

/**
 * DashboardPostCard component
 * Props:
 * - data: {
 *     status: string,
 *     image: string,
 *     type: string,
 *     date: string,
 *     title: string,
 *     views: number,
 *     likes: number,
 *     comments: number
 *   }
 */
export default function DashboardPostCard({
  data,
}) {
  const {
    status,
    image,
    type,
    date,
    title,
    views,
    likes,
    comments,
  } = data;

  // Define the onEdit function inside the component
  const onEdit = () => {
    // TODO: Implement edit logic here (e.g., open modal, navigate, etc.)
    alert(`Edit post: ${title}`);
  };

  // Define the onView function inside the component
  const onView = () => {
    // TODO: Implement view logic here (e.g., open modal, navigate, etc.)
    alert(`View post: ${title}`);
  };

  return (
    <div className="relative box-border w-[165px] h-[200px] md:w-[222px] md:h-[300px] bg-white border border-gray-200 rounded-[8px] md:rounded-[12px] overflow-hidden shadow-sm">
      {/* Top image */}
      <div className="w-full h-[80px] md:h-[140px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-[8px] md:rounded-t-[12px]"
        />
      </div>

      {/* Top bar: status and menu */}
      <div className="absolute flex justify-between items-center w-[150px] h-[18px] md:w-[180px] md:h-[28px] left-1/2 -translate-x-1/2 top-[6px] md:top-[10px] z-10">
        <div className="flex items-center bg-[#C2E2CE] rounded-[10px] md:rounded-[14px] px-2 md:px-3 py-0.5 h-[18px] md:h-[28px]">
          <span className="font-semibold text-[8px] md:text-[12px] text-[#26C661] leading-[10px] md:leading-[15px]">
            {status}
          </span>
        </div>
        <div className="flex items-center justify-center w-[18px] h-[18px] md:w-[28px] md:h-[28px] bg-[#757575] rounded-[4px] md:rounded-[7px] cursor-pointer">
          {/* Dots icon (fallback to 3 dots) */}
          <svg
            width="12"
            height="12"
            className="md:w-4 md:h-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              cx="5"
              cy="12"
              r="2"
              fill="#fff"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
              fill="#fff"
            />
            <circle
              cx="19"
              cy="12"
              r="2"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/* Type and date */}
      <div className="absolute flex flex-row items-center gap-1 left-[10px] top-[90px] md:left-[10px] md:top-[155px]">
        <span className="font-medium text-[7px] md:text-[11px] text-[#7E28D4] leading-[10px] md:leading-[14px]">
          {type}
        </span>
      </div>
      <div className="absolute flex flex-row items-center gap-1 left-[90px] top-[88px] md:left-[110px] md:top-[153px]">
        {/* Calendar icon */}
        <svg
          width="10"
          height="10"
          className="md:w-4 md:h-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            stroke="#64748B"
            strokeWidth="1.2"
          />
          <path
            d="M16 3V7"
            stroke="#64748B"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M8 3V7"
            stroke="#64748B"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-medium text-[7px] md:text-[11px] text-[#64748B] leading-[10px] md:leading-[14px]">
          {date}
        </span>
      </div>

      {/* Title */}
      <div className="absolute left-[10px] top-[105px] w-[150px] md:left-[10px] md:top-[175px] md:w-[190px]">
        <span className="font-semibold text-[9px] md:text-[14px] text-black leading-[12px] md:leading-[18px] truncate block">
          {title}
        </span>
      </div>

      {/* Stats: views, likes, comments */}
      <div className="absolute flex flex-row items-center gap-[6px] left-[10px] top-[120px] w-[140px] h-[12px] md:left-[10px] md:top-[200px] md:w-[170px] md:h-[18px]">
        {/* Views */}
        <div className="flex flex-row items-center gap-1 w-[40px] md:w-[50px]">
          <Image
            src="/user/brain.png"
            alt="views"
            width={10}
            height={10}
            className="md:w-4 md:h-4"
          />
          <span className="font-medium text-[7px] md:text-[11px] text-[#64748B] leading-[10px] md:leading-[14px]">
            {views.toLocaleString()}
          </span>
        </div>
        {/* Likes */}
        <div className="flex flex-row items-center gap-1 w-[30px] md:w-[40px]">
          <Image
            src="/user/heart.png"
            alt="likes"
            width={10}
            height={10}
            className="md:w-4 md:h-4"
          />
          <span className="font-medium text-[7px] md:text-[11px] text-[#64748B] leading-[10px] md:leading-[14px]">
            {likes}
          </span>
        </div>
        {/* Comments */}
        <div className="flex flex-row items-center gap-1 w-[20px] md:w-[30px]">
          <Image
            src="/user/comment.png"
            alt="comments"
            width={10}
            height={10}
            className="md:w-4 md:h-4"
          />
          <span className="font-medium text-[7px] md:text-[11px] text-[#64748B] leading-[10px] md:leading-[14px]">
            {comments}
          </span>
        </div>
      </div>

      {/* Actions: View, Edit */}
      <div className="absolute flex flex-row justify-between items-center left-[10px] top-[140px] w-[140px] h-[12px] md:left-[14px] md:top-[230px] md:w-[170px] md:h-[18px]">
        <button
          onClick={onView}
          className="flex flex-row items-center gap-1 w-[45px] md:w-[60px] group"
        >
          <Image
            src="/user/brain.png"
            alt="view"
            width={10}
            height={10}
            className="md:w-4 md:h-4"
          />
          <span className="font-medium text-[7px] md:text-[11px] text-[#64748B] leading-[10px] md:leading-[14px] group-hover:underline">
            View
          </span>
        </button>
        <button
          onClick={onEdit}
          className="flex flex-row items-center gap-1 w-[40px] md:w-[55px] group"
        >
          {/* Edit icon (pencil) */}
          <svg
            width="10"
            height="10"
            className="md:w-4 md:h-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 20h4l10.29-10.29a1 1 0 0 0 0-1.41l-2.59-2.59a1 1 0 0 0-1.41 0L4 16v4z"
              stroke="#4B5563"
              strokeWidth="1.2"
            />
          </svg>
          <span className="font-medium text-[7px] md:text-[11px] text-[#64748B] leading-[10px] md:leading-[14px] group-hover:underline">
            Edit
          </span>
        </button>
      </div>
    </div>
  );
}
