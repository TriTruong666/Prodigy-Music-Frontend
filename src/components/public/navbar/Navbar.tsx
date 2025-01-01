"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiMusicNotesLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { useAppDispatch } from "@/context/store";
import { useAppSelector } from "@/context/store";
// import image
import logo from "@/assets/prodigy-logo-dark.png";
// import slices
import {
  toggleMenuDropdownOn,
  toggleAnimationMenuDropdownOn,
  toggleMenuDropdownOff,
  toggleAnimationMenuDropdownOff,
} from "@/context/slices/dropdown/dropdownSlices";
import { togglePlaylistCollapseOn } from "@/context/slices/collapse/collapseSlices";
import { toggleAnimationPlaylistCollapseOn } from "@/context/slices/collapse/collapseSlices";
export const Navbar = () => {
  // dispatch
  const dispatch = useAppDispatch();
  // selector
  const isToggleDropdownMenu = useAppSelector(
    (state) => state.dropdown.menuDropdown.isToggleDropdown
  );
  const isToggleAnimationDropdownMenu = useAppSelector(
    (state) => state.dropdown.menuDropdown.isToggleAnimationDropdown
  );
  // handle dropdown func
  const handleToggleDropdownMenu = () => {
    if (!isToggleDropdownMenu) {
      dispatch(toggleMenuDropdownOn());
      setTimeout(() => {
        dispatch(toggleAnimationMenuDropdownOn());
      }, 1);
    } else {
      dispatch(toggleAnimationMenuDropdownOff());
      setTimeout(() => {
        dispatch(toggleMenuDropdownOff());
      }, 300);
    }
  };
  // handle toggle collapse
  const handleTogglePlaylistCollapseOn = () => {
    dispatch(togglePlaylistCollapseOn());
    dispatch(toggleMenuDropdownOff());
    setTimeout(() => {
      dispatch(toggleAnimationPlaylistCollapseOn());
    }, 100);
  };
  return (
    <div className="w-full h-[100px] flex items-center px-20 bg-homepage_background justify-between lg:px-10 xl:px-20 fixed z-20">
      <div className="flex w-fit">
        <Link href="/">
          <Image
            className="object-cover md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]"
            alt="logo"
            src={logo}
            quality={50}
          />
        </Link>
      </div>
      <div className="ml-[340px] flex gap-x-16 text-background pb-1">
        <Link
          href="/publish/addtrack"
          className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-homepage_foreground after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Make music
        </Link>
        <Link
          href="/publish/confirm"
          className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-homepage_foreground after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Prodigy World
        </Link>
        <Link
          href="/community"
          className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-homepage_foreground after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Community
        </Link>
        <Link
          href="/publish"
          className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-homepage_foreground after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Upgrade premium
        </Link>
      </div>
      {/* Logged */}
      <div className="flex items-center gap-x-[40px]">
        <p className="py-[12px] px-[30px] bg-homepage_foreground rounded-full text-sm cursor-pointer">
          Upgrade to Artist Pro
        </p>
        <div
          className="p-[15px] rounded-full cursor-pointer bg-gray-500 bg-opacity-20"
          onClick={handleTogglePlaylistCollapseOn}
        >
          <PiMusicNotesLight size={22} className=" text-white " />
        </div>
        <div
          onClick={handleToggleDropdownMenu}
          className="p-[15px] rounded-full cursor-pointer bg-gray-500 bg-opacity-20"
        >
          <IoSettingsOutline size={22} className=" text-white " />
        </div>
        {/* <div className="flex items-center gap-x-[15px]">
          <Image
            src={artist}
            alt="artist"
            className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"
          />
        </div> */}
      </div>
      {/* Not Login */}
      {/* <div className="flex gap-x-10 items-center">
        <Link
          className="font-semibold text-background hover:text-homepage_foreground transition-colors duration-300"
          href="/signup"
        >
          Signup
        </Link>
        <Link
          className="px-12 py-3 text-homepage_background bg-background font-semibold rounded-md hover:bg-homepage_foreground hover:text-homepage_background transition-colors duration-300"
          href="/login"
        >
          Login
        </Link>
      </div> */}
    </div>
  );
};
