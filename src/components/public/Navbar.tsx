"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import image
import logo from "@/assets/prodigy-logo-dark.png";
export const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex items-center px-20 bg-homepage_background justify-between lg:px-10 xl:px-20">
      <div className="flex w-fit">
        <Image
          className="object-cover md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]"
          alt="logo"
          src={logo}
          quality={50}
        />
      </div>
      <div className="ml-36 flex gap-x-16 text-background pb-1">
        <Link
          href="/publish"
          className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-homepage_foreground after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Make music
        </Link>
        <Link
          href="/publish"
          className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-homepage_foreground after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Explore Prodigy
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
      <div className="flex gap-x-10 items-center">
        <Link
          className="font-semibold text-background hover:text-homepage_foreground transition-colors duration-300"
          href="/signup"
        >
          Signup
        </Link>
        <Link
          className="px-12 py-3 text-homepage_background bg-background font-semibold rounded-md hover:bg-homepage_foreground hover:text-homepage_background transition-colors duration-300"
          href="/signup"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
