import React, { useState } from "react";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TbPlayerPlay } from "react-icons/tb";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerSkipForward } from "react-icons/tb";
import { TbPlayerPause } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { TfiLoop } from "react-icons/tfi";
import { SlVolume2 } from "react-icons/sl";
import { SlVolumeOff } from "react-icons/sl";
import { LuListChecks } from "react-icons/lu";
import { RxShuffle } from "react-icons/rx";
import { GoHeartFill } from "react-icons/go";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsRepeat1 } from "react-icons/bs";
import { Avatar } from "@material-tailwind/react";
import { IconContext } from "react-icons";
export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLoving, setIsLoving] = useState<boolean>(false);
  const [isAddPlaylist, setIsAddPlaylist] = useState<boolean>(false);
  return (
    <div className="fixed w-screen h-[90px] px-[150px] z-50 top-[86%]">
      <div
        id="player"
        className="flex items-center justify-between rounded-full bg-black h-full w-full bg-opacity-80 px-[30px]"
      >
        <div className="flex items-center gap-x-[15px]">
          <IconContext.Provider value={{ size: "30px", color: "#000000" }}>
            <div className="p-[10px]">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="lg"
              />
            </div>
          </IconContext.Provider>
          <div className="flex flex-col gap-y-[3px]">
            <p className="text-gray-200 font-semibold">Forget About Her</p>
            <p className="text-gray-400 text-[14px]">Soul Tracks</p>
          </div>
        </div>
        {/* control */}
        <IconContext.Provider value={{ color: "#eeeeee", size: "26px" }}>
          <div className="flex items-center gap-x-[20px]">
            <div className="p-[13px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer ">
              <TbPlayerSkipBack />
            </div>
            {isPlaying ? (
              <>
                <div
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-[13px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <TbPlayerPlay />
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-[13px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <TbPlayerPause />
                </div>
              </>
            )}
            <div className="p-[13px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <TbPlayerSkipForward />
            </div>
          </div>
        </IconContext.Provider>
        {/* progress bar */}
        <div className="flex flex-col gap-y-[5px] mt-[15px]">
          <div className="flex items-center w-[700px] h-[4px] bg-gray-600 rounded-full cursor-pointer relative">
            <div
              className="h-full bg-gray-300 rounded-full transition-all duration-300"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-[12px]">0:00</p>
            <p className="text-gray-500 text-[12px]">4:23</p>
          </div>
        </div>
        {/* utils */}
        <IconContext.Provider value={{ color: "#eeeeee", size: "22px" }}>
          <div className="flex items-center gap-x-[30px]">
            <div
              onClick={() => setIsLoving(!isLoving)}
              className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {!isLoving ? (
                <>
                  <GoHeart />
                </>
              ) : (
                <IconContext.Provider
                  value={{ color: "#d32f2f", size: "22px" }}
                >
                  <GoHeartFill />
                </IconContext.Provider>
              )}
            </div>
            <div
              onClick={() => setIsAddPlaylist(!isAddPlaylist)}
              className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {!isAddPlaylist ? (
                <>
                  <RiPlayListAddLine />
                </>
              ) : (
                <>
                  <LuListChecks />
                </>
              )}
            </div>
            <div className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <RxShuffle />
            </div>
            <div className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <SlVolume2 />
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};
