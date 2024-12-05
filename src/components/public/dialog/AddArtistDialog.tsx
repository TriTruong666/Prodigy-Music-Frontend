"use client";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Avatar } from "@material-tailwind/react";
import { Badge } from "@/components/ui/badge";
export const AddArtistDialog = () => {
  return (
    <div className="fixed z-20 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-[3px] flex items-center justify-center">
      <div className="w-[700px] max-h-[500px] bg-black bg-opacity-70 rounded-[20px] flex flex-col relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-700 px-[15px] pt-[20px] pb-[15px]">
          <IconContext.Provider value={{ color: "#9e9e9e", size: "22px" }}>
            <FiSearch className="cursor-default" />
            <input
              type="text"
              className="bg-transparent outline-none border-none text-gray-200 w-[90%] font-jost"
              placeholder="Search featured artist..."
            />
            <IoCloseOutline className="cursor-pointer" />
          </IconContext.Provider>
        </div>
        <span className="pt-[20px] pb-[10px] px-[25px] text-[15px] text-gray-500">
          Artists
        </span>
        <div className="flex flex-col overflow-auto max-h-[280px]">
          <div className="flex justify-between items-center px-[25px] py-[10px] hover:bg-gray-800 cursor-pointer transition-all duration-300">
            <p className="font-semibold text-gray-300">Truong Hoang Tri</p>
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="sm"
            />
          </div>
        </div>
        <div className="flex items-center justify-between py-[15px] px-[25px] border-t border-gray-700">
          <p className="text-gray-500 text-[14px] cursor-default">
            Select a featured artist to your track
          </p>
          <div className="flex items-center gap-x-[10px]">
            <p className="text-gray-500 text-[14px]">Close</p>
            <Badge
              className="text-gray-500 outline-gray-500 border-gray-500 text-[10px]"
              variant="outline"
            >
              ESC
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
