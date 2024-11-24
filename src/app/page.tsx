"use client";

import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
// import components
import { Navbar } from "@/components/public/Navbar";
import { Footer } from "@/components/public/Footer";
// import assets
import image from "@/assets/pexels-qhung999-27200179.jpg";
import logo from "@/assets/prodigy-logo-dark.png";
export default function Home() {
  return (
    <div className="font-jost w-screen overflow-x-hidden">
      <Navbar />
      <div className="bg-homepage_background py-32 flex flex-col justify-center items-center text-center gap-y-3">
        <p className="text-2xl font-normal text-background">
          Your Ultimate Music Companion
        </p>
        <h2 className="text-5xl max-w-3xl mt-2 font-medium text-background">
          Discover, create, and share your music journey like never before.
        </h2>
        <p className="mt-4 text-lg max-w-3xl text-background font-light text-gray-200">
          Prodigy connects you to a world of melodies, playlists, and beats
          crafted just for you. Whether you're an aspiring artist or a
          passionate listener, Prodigy lets you explore new sounds, build your
          playlist, and join a vibrant community of music enthusiasts.
        </p>
        <IconContext.Provider value={{ color: "white", size: "30px" }}>
          <div className="flex items-center border px-5 rounded-xl border-gray-200 gap-5 mt-6 w-4/12">
            <RiSearchLine />
            <input
              className="outline-none bg-transparent text-white w-full py-3 text-lg placeholder:text-gray-200"
              type="text"
              placeholder="Explore our new tracks..."
            />
          </div>
        </IconContext.Provider>
      </div>
      <div className="flex flex-col px-20 bg-homepage_background">
        <IconContext.Provider value={{ color: "white", size: "22px" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <p className="text-2xl font-semibold text-background">
                Trending Now
              </p>
            </div>
            <Link href="/music" className="flex items-center gap-x-1 ">
              <p className="text-md font-normal text-background ">View more</p>
              <MdKeyboardArrowRight />
            </Link>
          </div>
        </IconContext.Provider>
        <div className="my-7 grid grid-cols-6 bg-homepage_background gap-x-24">
          <div className="relative flex flex-col gap-y-2 items-center rounded-3xl bg-homepage_foreground cursor-pointer group overflow-hidden transition-all duration-500 hover:bg-black ">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={image}
                width={180}
                height={180}
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
            <p className="text-homepage_background font-semibold mt-5 group-hover:text-white transition-all duration-500">
              Binh Yen
            </p>
            <p className="mb-4 text-homepage_background font-normal group-hover:text-gray-200 transition-all duration-500">
              Indie
            </p>

            <div className="absolute inset-0 z-10 flex items-center bg-black bg-opacity-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
                Play
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-2 items-center rounded-3xl bg-homepage_foreground cursor-pointer group overflow-hidden transition-all duration-500 hover:bg-black ">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={image}
                width={180}
                height={180}
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
            <p className="text-homepage_background font-semibold mt-5 group-hover:text-white transition-all duration-500">
              Binh Yen
            </p>
            <p className="mb-4 text-homepage_background font-normal group-hover:text-gray-200 transition-all duration-500">
              Indie
            </p>

            <div className="absolute inset-0 z-10 flex items-center bg-black bg-opacity-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
                Play
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-2 items-center rounded-3xl bg-homepage_foreground cursor-pointer group overflow-hidden transition-all duration-500 hover:bg-black ">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={image}
                width={180}
                height={180}
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
            <p className="text-homepage_background font-semibold mt-5 group-hover:text-white transition-all duration-500">
              Binh Yen
            </p>
            <p className="mb-4 text-homepage_background font-normal group-hover:text-gray-200 transition-all duration-500">
              Indie
            </p>

            <div className="absolute inset-0 z-10 flex items-center bg-black bg-opacity-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
                Play
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-2 items-center rounded-3xl bg-homepage_foreground cursor-pointer group overflow-hidden transition-all duration-500 hover:bg-black ">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={image}
                width={180}
                height={180}
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
            <p className="text-homepage_background font-semibold mt-5 group-hover:text-white transition-all duration-500">
              Binh Yen
            </p>
            <p className="mb-4 text-homepage_background font-normal group-hover:text-gray-200 transition-all duration-500">
              Indie
            </p>

            <div className="absolute inset-0 z-10 flex items-center bg-black bg-opacity-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
                Play
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-2 items-center rounded-3xl bg-homepage_foreground cursor-pointer group overflow-hidden transition-all duration-500 hover:bg-black ">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={image}
                width={180}
                height={180}
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
            <p className="text-homepage_background font-semibold mt-5 group-hover:text-white transition-all duration-500">
              Binh Yen
            </p>
            <p className="mb-4 text-homepage_background font-normal group-hover:text-gray-200 transition-all duration-500">
              Indie
            </p>

            <div className="absolute inset-0 z-10 flex items-center bg-black bg-opacity-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
                Play
              </button>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-2 items-center rounded-3xl bg-homepage_foreground cursor-pointer group overflow-hidden transition-all duration-500 hover:bg-black ">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src={image}
                width={180}
                height={180}
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
            <p className="text-homepage_background font-semibold mt-5 group-hover:text-white transition-all duration-500">
              Binh Yen
            </p>
            <p className="mb-4 text-homepage_background font-normal group-hover:text-gray-200 transition-all duration-500">
              Indie
            </p>

            <div className="absolute inset-0 z-10 flex items-center bg-black bg-opacity-60 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow-md">
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
