"use client";
import Image from "next/image";
import { IconContext } from "react-icons";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
// import components
import { AddTitle } from "@/components/public/AddTitle";
// import assets
import logo from "@/assets/prodigy-logo-light.png";
export default function AddTrack() {
  return (
    <div className="font-jost w-screen overflow-hidden max-h-screen h-screen bg-background">
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-homepage_background h-1.5 rounded-full dark:bg-homepage_background transition-all duration-500 ease-in-out"
          style={{ width: "20%" }}
        ></div>
      </div>
      <div className="flex items-center justify-between py-7 px-16">
        <div className="flex items-center gap-x-[40px]">
          <Image
            className="object-cover md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]"
            alt="logo"
            src={logo}
            quality={50}
          />
          <p className="text-[22px] text-gray-600 font-normal tracking-[0.1rem]">
            Let's build your release
          </p>
        </div>
        <IconContext.Provider value={{ size: "20px", color: "#000000" }}>
          <Link href="/">
            <div className="flex items-center gap-x-[10px]">
              <p className="text-gray-600">Close</p>
              <IoCloseOutline />
            </div>
          </Link>
        </IconContext.Provider>
      </div>
      {/* components */}
      <div className="flex justify-center my-[225px]">
        <AddTitle />
      </div>
    </div>
  );
}
