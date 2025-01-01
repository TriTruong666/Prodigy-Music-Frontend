import React, { FC, RefObject, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";
import { useAppDispatch } from "@/context/store";
import { toggleMusicPlayerOff } from "@/context/slices/player/musicPlayerSlices";
import { toggleAnimationMusicPlayerOff } from "@/context/slices/player/musicPlayerSlices";
// interface MusicPlayerContextMenuProps {
//   top: number;
//   left: number;
//   reference: RefObject<HTMLDivElement>;
// }
export const MusicPlayerContextMenu = () => {
  const dispatch = useAppDispatch();
  const [isAddToLib, setIsAddToLib] = useState(false);
  const [isCopiedLink, setIsCopiedLink] = useState(false);

  // Handle Functions
  const handleTurnOffPlayer = () => {
    dispatch(toggleAnimationMusicPlayerOff());
    setTimeout(() => {
      dispatch(toggleMusicPlayerOff());
    }, 300);
  };
  const handleAddToLib = () => {
    setIsAddToLib(!isAddToLib);
  };
  const handleCopyLink = async () => {
    try {
      const link = "http://localhost:3000/"; // Replace with your dynamic link
      await navigator.clipboard.writeText(link);
      setIsCopiedLink(true);
    } catch (error) {
      console.error("Failed to copy link: ", error);
    }
  };
  return (
    // <div
    //   ref={reference}
    //   className="absolute w-[200px] bg-gray-900 rounded-lg py-[5px] px-[5px] z-50"
    //   style={{ top: `${top}px`, left: `${left}px`, position: "fixed" }}
    // >
    <>
      <ul className="flex flex-col gap-y-[5px]">
        <li
          className="flex items-center py-[5px] rounded-md px-[5px] cursor-pointer gap-x-[15px] transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-60"
          onClick={handleAddToLib}
        >
          {isAddToLib ? (
            <>
              <IoMdHeart className="text-red-500" size={17} />
              <p className="text-[13px] text-gray-400">Remove from library</p>
            </>
          ) : (
            <>
              <IoMdHeartEmpty className="text-gray-400" size={17} />
              <p className="text-[13px] text-gray-400">Add to library</p>
            </>
          )}
        </li>
        <li
          className="flex items-center py-[5px] rounded-md px-[5px] cursor-pointer gap-x-[15px] transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-60"
          onClick={handleCopyLink}
        >
          <LuLink
            className={` ${isCopiedLink ? "text-green-500" : "text-gray-400"}`}
            size={17}
          />
          {isCopiedLink ? (
            <p className="text-[13px] text-green-500">Copied</p>
          ) : (
            <p className="text-[13px] text-gray-400">Copy link</p>
          )}
        </li>
        <li className="flex items-center py-[5px] rounded-md px-[5px] cursor-pointer gap-x-[15px] transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-60">
          <BiErrorCircle className="text-gray-400" size={17} />
          <p className="text-[13px] text-gray-400">Have problems?</p>
        </li>
        <li
          className="flex items-center py-[5px] rounded-md px-[5px] cursor-pointer gap-x-[15px] transition-all duration-300 hover:bg-gray-800 hover:bg-opacity-60"
          onClick={handleTurnOffPlayer}
        >
          <IoCloseOutline className="text-gray-400" size={17} />
          <p className="text-[13px] text-gray-400">Close</p>
        </li>
      </ul>
    </>
    // </div>
  );
};
