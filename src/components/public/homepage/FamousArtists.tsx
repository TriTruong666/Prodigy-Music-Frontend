import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
// import assets
import artist from "@/assets/artist1.jpg";
export const FamousArtists = () => {
  return (
    <div className="flex flex-col px-20 bg-homepage_background ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <p className="text-2xl font-semibold text-background">
            Famous Artists
          </p>
        </div>
        <Link href="/music" className="flex items-center gap-x-1 ">
          <p className="text-md font-normal text-background ">View more</p>
          <MdKeyboardArrowRight size={22} color="#ffffff" />
        </Link>
      </div>
      <div className="my-7 grid grid-cols-6 bg-homepage_background gap-x-6">
        <div className="group relative flex flex-col gap-y-2 rounded-[15px] cursor-pointer py-4 px-6">
          <Image
            src={artist}
            quality={50}
            alt="artist"
            className="rounded-full object-cover w-[240px] h-[240px] self-center"
          />
          <p className="text-[18px] font-semibold_poppins mt-[10px] text-homepage_foreground">
            HIEUTHUHAI
          </p>
          <p className="text-homepage_foreground text-sm">Artist</p>
          <div className="absolute inset-0 z-10 flex items-center rounded-3xl bg-gray-400 bg-opacity-20 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
