import React from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
export const MusicSidebar = () => {
  return (
    <div className="fixed h-screen w-[300px] bg-[#111111] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex flex-col h-full justify-between p-[30px]">
        {/* main sidebar */}
        <div className="flex flex-col">
          <div className="cursor-pointer transition-all duration-300 p-[12px] ml-[-12px] hover:bg-gray-900 w-fit rounded-full">
            <IoMenu className="text-gray-300" size={24} />
          </div>
          <div className="flex flex-col">
            {/* Main Links */}
            <div className="flex flex-col gap-y-[20px] my-[50px]">
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Main
              </Link>
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Top 100
              </Link>
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Explore
              </Link>
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Category
              </Link>
            </div>
            {/* Other Links */}
            <div className="flex flex-col mt-[12px] gap-y-[20px]">
              <p className="text-white text-[22px] font-light font-manrope">
                My Prodigy
              </p>
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 mt-[10px]"
              >
                Tracks
              </Link>
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Albums
              </Link>
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Artists
              </Link>
              <Link
                href="/"
                className="text-gray-300 text-[20px] font-light font-manrope w-fit relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                Playlists
              </Link>
            </div>
          </div>
        </div>
        {/* second sidebar */}
        <div className="flex flex-col select-none gap-y-[5px]">
          <p className="text-gray-400 text-[14px] italic">
            "Enjoy your world in Prodigy"
          </p>
          <p className="text-gray-400 text-[12px]">Version 1.0.666</p>
        </div>
      </div>
    </div>
  );
};
