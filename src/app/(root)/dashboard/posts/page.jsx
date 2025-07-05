"use client";
import PostsHeader from "@/app/components/dashboard/PostsHeader";
import DashboardPostCard from "@/app/components/dashboard/DashboardPostCard";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const postsData = [
  {
    status: "Published",
    image: "/landing_page/ai.png",
    type: "Carousel",
    date: "2025-09-17",
    title: "5 Tips for Better Engage..",
    views: 3200,
    likes: 267,
    comments: 54,
  },
  {
    status: "Draft",
    image: "/landing_page/content.png",
    type: "Image",
    date: "2025-08-10",
    title: "How to Grow Your Audience",
    views: 1200,
    likes: 98,
    comments: 12,
  },
  {
    status: "Published",
    image: "/landing_page/designs.png",
    type: "Video",
    date: "2025-07-22",
    title: "Design Trends 2025",
    views: 5400,
    likes: 430,
    comments: 87,
  },
  {
    status: "Scheduled",
    image: "/landing_page/schedule.png",
    type: "Carousel",
    date: "2025-10-01",
    title: "Scheduling Content Like a Pro",
    views: 800,
    likes: 45,
    comments: 5,
  },
  {
    status: "Published",
    image: "/landing_page/infographics.png",
    type: "Reel",
    date: "2025-11-05",
    title: "Reel Success Stories",
    views: 2100,
    likes: 150,
    comments: 23,
  },
  // 8 more dummy posts for a total of 13
  {
    status: "Draft",
    image: "/landing_page/ai.png",
    type: "Image",
    date: "2025-12-01",
    title: "Draft Post 1",
    views: 100,
    likes: 10,
    comments: 2,
  },
  {
    status: "Published",
    image: "/landing_page/content.png",
    type: "Carousel",
    date: "2025-12-02",
    title: "Published Post 2",
    views: 200,
    likes: 20,
    comments: 4,
  },
  {
    status: "Scheduled",
    image: "/landing_page/designs.png",
    type: "Video",
    date: "2025-12-03",
    title: "Scheduled Post 3",
    views: 300,
    likes: 30,
    comments: 6,
  },
  {
    status: "Draft",
    image: "/landing_page/schedule.png",
    type: "Reel",
    date: "2025-12-04",
    title: "Draft Post 4",
    views: 400,
    likes: 40,
    comments: 8,
  },
  {
    status: "Published",
    image: "/landing_page/infographics.png",
    type: "Image",
    date: "2025-12-05",
    title: "Published Post 5",
    views: 500,
    likes: 50,
    comments: 10,
  },
  {
    status: "Scheduled",
    image: "/landing_page/ai.png",
    type: "Carousel",
    date: "2025-12-06",
    title: "Scheduled Post 6",
    views: 600,
    likes: 60,
    comments: 12,
  },
  {
    status: "Draft",
    image: "/landing_page/content.png",
    type: "Video",
    date: "2025-12-07",
    title: "Draft Post 7",
    views: 700,
    likes: 70,
    comments: 14,
  },
  {
    status: "Published",
    image: "/landing_page/designs.png",
    type: "Reel",
    date: "2025-12-08",
    title: "Published Post 8",
    views: 800,
    likes: 80,
    comments: 16,
  },
];

const statusOptions = [
  "All",
  "Published",
  "Draft",
  "Scheduled",
];
const typeOptions = [
  "All",
  "Carousel",
  "Image",
  "Video",
  "Reel",
];
const POSTS_PER_PAGE = 10;

export default function page() {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] =
    useState(postsData);
  const [statusFilter, setStatusFilter] =
    useState("All");
  const [typeFilter, setTypeFilter] =
    useState("All");
  const [pageNum, setPageNum] = useState(1);

  // Search and filter handler
  const filterPosts = (
    searchValue,
    status,
    type
  ) => {
    let result = postsData.filter((post) => {
      const matchesSearch =
        post.title
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        post.type
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        post.status
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      const matchesStatus =
        status === "All" ||
        post.status === status;
      const matchesType =
        type === "All" || post.type === type;
      return (
        matchesSearch &&
        matchesStatus &&
        matchesType
      );
    });
    setFilteredPosts(result);
    setPageNum(1); // Reset to first page on filter
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    filterPosts(value, statusFilter, typeFilter);
  };

  const handleClearSearch = () => {
    setSearch("");
    filterPosts("", statusFilter, typeFilter);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterPosts(search, status, typeFilter);
  };

  const handleTypeFilter = (type) => {
    setTypeFilter(type);
    filterPosts(search, statusFilter, type);
  };

  // Pagination logic
  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE
  );
  const paginatedPosts = filteredPosts.slice(
    (pageNum - 1) * POSTS_PER_PAGE,
    pageNum * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages)
      return;
    setPageNum(newPage);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] md:left-[282px] md:w-[calc(100%-282px)] pt-[64px] md:pt-[80px]">
      <PostsHeader />
      {/* Search and Filter Bar */}
      <div className="flex flex-row items-center gap-3 md:gap-[18px] w-full max-w-[406px] mt-6 md:mt-10 mx-auto px-2 md:px-0 relative z-10">
        <div className="flex flex-row items-center flex-1 border border-[#64748B] rounded-[10px] bg-white h-[45px] px-3 focus-within:ring-2 focus-within:ring-[#AD39D2] transition">
          {/* Search icon */}
          <svg
            className="w-5 h-5 text-[#64748B] mr-2"
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
            type="text"
            value={search}
            onChange={handleSearch}
            className="flex-1 bg-transparent outline-none border-none text-black font-medium text-[15px] placeholder-[#64748B]"
            placeholder="Search posts...."
          />
          {search && (
            <button
              onClick={handleClearSearch}
              className="ml-2 text-[#64748B] hover:text-[#AD39D2] focus:outline-none"
              aria-label="Clear search"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#64748B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center justify-center border border-[#64748B] rounded-[10px] bg-white h-[45px] w-[80px] cursor-pointer text-black hover:border-[#AD39D2] transition"
              aria-label="Filter posts"
            >
              <svg
                className="w-5 h-5 text-[#64748B]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 5h18M6 10h12M9 15h6"
                  stroke="#64748B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="ml-2 text-[#64748B] font-medium text-[15px] hidden md:inline">
                Filter
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-20 p-3 flex flex-col gap-2"
          >
            <DropdownMenuLabel className="font-semibold text-[13px] text-[#64748B]">
              Status
            </DropdownMenuLabel>
            {statusOptions.map((status) => (
              <DropdownMenuItem
                key={status}
                onSelect={() =>
                  handleStatusFilter(status)
                }
                className={
                  statusFilter === status
                    ? "bg-[#AD39D2] text-white border-[#AD39D2]"
                    : "bg-white text-black border-[#E5E7EB] hover:bg-[#F3E8FF]"
                }
              >
                {status}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="font-semibold text-[13px] text-[#64748B] mt-2">
              Type
            </DropdownMenuLabel>
            {typeOptions.map((type) => (
              <DropdownMenuItem
                key={type}
                onSelect={() =>
                  handleTypeFilter(type)
                }
                className={
                  typeFilter === type
                    ? "bg-[#AD39D2] text-white border-[#AD39D2]"
                    : "bg-white text-black border-[#E5E7EB] hover:bg-[#F3E8FF]"
                }
              >
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Responsive grid for post cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8">
        {paginatedPosts.map((post, idx) => (
          <DashboardPostCard
            key={idx}
            data={post}
          />
        ))}
      </div>
      {/* Pagination Bar */}
      <div className="flex justify-center mt-4 mb-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  handlePageChange(pageNum - 1)
                }
              />
            </PaginationItem>
            {Array.from(
              { length: totalPages },
              (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={pageNum === i + 1}
                    onClick={() =>
                      handlePageChange(i + 1)
                    }
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(pageNum + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
