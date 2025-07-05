import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import FeatureTools from "@/app/components/dashboard/FeatureTools";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import DashboardPostCard from "@/app/components/dashboard/DashboardPostCard";
import React from "react";

const dummyPosts = [
  {
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    type: "Carousel",
    date: "2025-09-17",
    title: "5 Tips for Better Engage..",
    views: 3200,
    likes: 267,
    comments: 54,
  },
  {
    status: "Draft",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    type: "Image",
    date: "2025-08-10",
    title: "How to Grow Your Audience",
    views: 1200,
    likes: 98,
    comments: 12,
  },
  {
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    type: "Video",
    date: "2025-07-22",
    title: "Design Trends 2025",
    views: 5400,
    likes: 430,
    comments: 87,
  },
  {
    status: "Scheduled",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    type: "Carousel",
    date: "2025-10-01",
    title: "Scheduling Content Like a Pro",
    views: 800,
    likes: 45,
    comments: 5,
  },
  {
    status: "Scheduled",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww",
    type: "Carousel",
    date: "2025-10-01",
    title: "Scheduling Content Like a Pro",
    views: 800,
    likes: 45,
    comments: 5,
  },
];

export default function page() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] md:left-[282px] md:w-[calc(100%-282px)]">
      <DashboardHeader />
      <div
        className="pt-[35px] max-w-[100vw]"
        style={{ padding: "80px 10px 10px 10px" }}
      >
        <FeatureTools />
        <DashboardStats />
        {/* Add padding to prevent content from being hidden behind the fixed header */}
        <div className="flex flex-row flex-wrap gap-6 mt-8 relative">
          {dummyPosts
            .slice(0, 5)
            .map((post, idx) => (
              <DashboardPostCard
                key={idx}
                data={post}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
