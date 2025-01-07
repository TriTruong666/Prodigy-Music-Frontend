"use client";
import { MusicSidebar } from "@/components/public/navbar/MusicSidebar";

export default function MusicPlatform() {
  return (
    <div className="font-jost overflow-hidden relative w-screen flex">
      <MusicSidebar />
      {/* main */}
      <div
        className={`w-[calc(100vw-250px)] ml-[250px] bg-platform_background h-screen rounded-l-[30px] z-10`}
      ></div>
    </div>
  );
}
