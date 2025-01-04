import React from "react";
import { CgUserlane } from "react-icons/cg";
import { TbMoodPuzzled } from "react-icons/tb";
import { CgMediaLive } from "react-icons/cg";

export const WhyChooseUs = () => {
  return (
    <div className="relative w-screen h-screen bg-black select-none">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col w-[70%] self-center gap-y-[5px]">
          <p className="text-gray-400">Prodigy</p>
          <p className="font-semibold_poppins text-[34px] bg-gradient-to-bl from-[#4C1D95] via-gray-100 to-pink-700 bg-clip-text text-transparent">
            Redefining music experience
          </p>
        </div>
        <div className="grid grid-cols-3 w-[70%] gap-[15px] my-[50px]">
          <div className="flex flex-col px-[15px] py-[30px] gap-y-[10px] rounded-md border border-gray-900 hover:border-opacity-40 cursor-default transition-all duration-300 hover:bg-gray-900 hover:bg-opacity-40">
            <CgUserlane className="text-homepage_foreground" size={22} />
            <p className="text-gray-200 font-semibold_poppins text-[20px]">
              High-Quality Audio
            </p>
            <p className="font-light text-gray-300 mt-[15px] text-[15px]">
              With Prodigy, you get access to high-fidelity, lossless audio
              formats, ensuring that every song sounds just as the artist
              intended. Our streaming service supports formats like FLAC, ALAC,
              and WAV, offering crystal-clear sound with deep lows, vibrant
              mids, and sparkling highs.
            </p>
          </div>
          <div className="flex flex-col px-[15px] py-[30px] gap-y-[10px] rounded-md border border-gray-900 hover:border-opacity-40 cursor-default transition-all duration-300 hover:bg-gray-900 hover:bg-opacity-40">
            <TbMoodPuzzled className="text-homepage_foreground" size={22} />
            <p className="text-gray-200 font-semibold_poppins text-[20px]">
              Mood-Based Discovery
            </p>
            <p className="font-light text-gray-300 mt-[15px] text-[15px]">
              Your music experience is tailored not only to your favorite genres
              but also to how you're feeling. Whether you’re looking for
              something uplifting, calming, or energizing, Prodigy allows you to
              discover music based on mood, making it easier to find the perfect
              soundtrack for any moment.
            </p>
          </div>
          <div className="flex flex-col px-[15px] py-[30px] gap-y-[10px] rounded-md border border-gray-900 hover:border-opacity-40 cursor-default transition-all duration-300 hover:bg-gray-900 hover:bg-opacity-40">
            <CgMediaLive className="text-homepage_foreground" size={22} />
            <p className="text-gray-200 font-semibold_poppins text-[20px]">
              Virtual Concerts
            </p>
            <p className="font-light text-gray-300 mt-[15px] text-[15px]">
              You can attend live virtual concerts and music events from top
              artists, all from the comfort of your home. Whether it’s an
              intimate acoustic session or a grand live show, Prodigy brings the
              energy, connection, and excitement of live music to your screen,
              anytime you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
