"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import Link from "next/link";
export const Footer = () => {
  return (
    <>
      <footer className="flex px-20 py-14 justify-between bg-black">
        <div className="flex gap-x-[200px]">
          <div className="flex flex-col gap-y-5 text-background">
            <strong className="text-[18px]">Introduction</strong>
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">More Projects</p>
            <p className="hover:underline cursor-pointer">Recruitment</p>
          </div>
          <div className="flex flex-col gap-y-5 text-background">
            <strong className="text-[18px]">Community</strong>
            <p className="hover:underline cursor-pointer">For Artists</p>
            <p className="hover:underline cursor-pointer">For Developers</p>
            <p className="hover:underline cursor-pointer">For Investors</p>
            <p className="hover:underline cursor-pointer">For Vendors</p>
            <p className="hover:underline cursor-pointer">Advertisement</p>
          </div>

          <div className="flex flex-col gap-y-5 text-background">
            <strong className="text-[18px]">Useful Links</strong>
            <p className="hover:underline cursor-pointer">Support</p>
            <p className="hover:underline cursor-pointer">
              Prodigy on Appstore
            </p>
            <p className="hover:underline cursor-pointer">Prodigy on CH Play</p>
          </div>
          <div className="flex flex-col gap-y-5 text-background">
            <strong className="text-[18px]">Our Packages</strong>
            <p className="hover:underline cursor-pointer">Prodigy Student</p>
            <p className="hover:underline cursor-pointer">Prodigy Family</p>
            <p className="hover:underline cursor-pointer">Prodigy Premium</p>
          </div>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="https://www.facebook.com/tritruong2603/"
            className=" p-4 rounded-full border border-gray-300 bg-opacity-30 h-fit hover:bg-opacity-70 transition-all duration-300"
          >
            <FaInstagram size={24} className="text-white" />
          </Link>
          <Link
            href="https://github.com/TriTruong666"
            className=" p-4 rounded-full border border-gray-300 bg-opacity-30 h-fit hover:bg-opacity-70 transition-all duration-300"
          >
            <PiGithubLogoLight size={24} className="text-white" />
          </Link>
          <Link
            href="https://www.facebook.com/tritruong2603/"
            className=" p-4 rounded-full border border-gray-300 bg-opacity-30 h-fit hover:bg-opacity-70 transition-all duration-300"
          >
            <RiFacebookCircleLine size={24} className="text-white" />
          </Link>
        </div>
      </footer>
      <div className="flex justify-between items-center px-20 py-10 bg-black border-t border-white">
        <p className="text-background">© 2024 Prodigy Entertainment</p>
        <p className="text-background text-[12px]">Version 1.0.666</p>
      </div>
    </>
  );
};
