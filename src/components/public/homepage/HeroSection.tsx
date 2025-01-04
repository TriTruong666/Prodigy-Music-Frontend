import Image from "next/image";
import React from "react";
// import assets
import background from "@/assets/homepage.jpg";
import { PiMusicNotesSimpleFill } from "react-icons/pi";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen select-none">
      <Image
        src={background}
        alt="background"
        className="w-full h-full object-cover grayscale select-none"
        quality={25}
      />
      <div className="bg-black bg-opacity-70 inset-0 absolute z-[1] w-full h-full flex flex-col justify-center items-center text-center gap-y-3 overflow-y-auto">
        <p className="text-2xl font-normal text-background">
          Your Ultimate Music Companion
        </p>
        <h2 className="font-semibold_poppins text-[70px] max-w-[80%] mt-2 text-homepage_foreground">
          Discover, create, and share your music journey like never before.
        </h2>
        <p className="mt-4 text-[20px] max-w-[50%] text-background font-light text-gray-200">
          Prodigy connects you to a world of melodies, playlists, and beats
          crafted just for you. Whether you're an aspiring artist or a
          passionate listener, Prodigy lets you explore new sounds, build your
          playlist, and join a vibrant community of music enthusiasts.
        </p>
        <Link
          href="/"
          className="flex mt-3 group items-center gap-x-[10px] justify-center w-[300px] bg-homepage_foreground py-[12px] rounded-full shadow-[0px_20px_138px_34px_rgba(226,_117,_226,_0.2)] 
  text-homepage_background transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(226,_117,_226,_0.5)] hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
        >
          <p className="text-homepage_background group-hover:text-homepage_foreground">
            Get Started
          </p>
          <PiMusicNotesSimpleFill
            className="text-homepage_background group-hover:text-homepage_foreground"
            size={18}
          />
        </Link>
      </div>
    </div>
  );
};
