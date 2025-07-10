import React from "react";
import AnalyticsHeader from "../../../components/dashboard/AnalyticsHeader";
import AnalyticsStats from "./AnalyticsStats";

export default function AnalyticsPage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] md:left-[282px] md:w-[calc(100%-282px)] pt-[64px] md:pt-[80px]">
      <AnalyticsHeader />
      <main className="px-2 md:px-8">
        <AnalyticsStats />
      </main>
    </div>
  );
}
