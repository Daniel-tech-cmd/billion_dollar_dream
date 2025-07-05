import React from "react";
import CaptionAssitantHeader from "@/app/components/dashboard/CaptionAssitantHeader";
import CaptionAssistant from "@/app/components/dashboard/CaptionAssistant";

export default function page() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] md:left-[282px] md:w-[calc(100%-282px)] pt-[64px] md:pt-[80px]">
      <CaptionAssitantHeader />
      <CaptionAssistant />
    </div>
  );
}
