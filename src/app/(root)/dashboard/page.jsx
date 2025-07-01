import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import FeatureTools from "@/app/components/dashboard/FeatureTools";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import React from "react";

export default function page() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC]">
      <DashboardHeader />
      <div
        className="pt-[35px] max-w-[100vw]"
        style={{ padding: "80px 10px 10px 10px" }}
      >
        <FeatureTools />
        <DashboardStats />
        {/* Add padding to prevent content from being hidden behind the fixed header */}
        {/* ...other dashboard content... */}
      </div>
    </div>
  );
}
