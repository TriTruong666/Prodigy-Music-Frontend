import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";

// import assets
import image from "@/assets/pexels-qhung999-27200179.jpg";
import logo from "@/assets/prodigy-logo-dark.png";
export const TopAlbums = () => {
  return (
    <div className="flex flex-col px-20 bg-homepage_background ">
      <IconContext.Provider value={{ color: "white", size: "22px" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <p className="text-2xl font-semibold text-background">Top Albums</p>
          </div>
          <Link href="/music" className="flex items-center gap-x-1 ">
            <p className="text-md font-normal text-background ">View more</p>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </IconContext.Provider>
      <div className="my-7 grid grid-cols-6 bg-homepage_background gap-x-6">
        <div className="relative flex flex-col gap-y-2 items-center rounded-3xl bg-homepage_foreground cursor-pointer group overflow-hidden transition-all duration-500 hover:bg-black ">
          <div className="relative w-[240px] h-[240px]">
            <Image
              src={image}
              width={240}
              height={240}
              quality={50}
              alt="Song"
              className="rounded-2xl mt-4"
            />
            <Avatar className="absolute top-[20px] left-1 transform translate-x-2 translate-y-2 w-[26px] h-[26px]">
              <Image
                src={logo}
                alt="logo"
                className="rounded-full"
                width={26}
                height={26}
                objectFit="cover"
              />
            </Avatar>
          </div>
          <p className="text-homepage_background font-semibold_poppins text-[15px] mt-5 group-hover:text-white transition-all duration-500">
            THE WXRDIES
          </p>
          <p className="mb-4 text-homepage_background text-sm group-hover:text-gray-200 transition-all duration-500">
            Wrxdie
          </p>

          <div className="absolute inset-0 z-10 flex items-center bg-black bg-opacity-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
