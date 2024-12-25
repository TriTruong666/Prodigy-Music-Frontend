"use client";

import { IconContext } from "react-icons";
import { RiSearchLine } from "react-icons/ri";
// import components
import { Navbar } from "@/components/public/navbar/Navbar";
import { Footer } from "@/components/public/footer/Footer";
import { MusicPlayer } from "@/components/public/player/MusicPlayer";
import { TrendingSong } from "@/components/public/homepage/TrendingSong";
import { FamousArtists } from "@/components/public/homepage/FamousArtists";
import { TopAlbums } from "@/components/public/homepage/TopAlbums";

export default function Home() {
  return (
    <div className="font-jost w-screen overflow-x-hidden relative">
      {/* <MusicPlayer /> */}
      <Navbar />
      <div className="bg-homepage_background py-32 flex flex-col justify-center items-center text-center gap-y-3 mt-[100px]">
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
      {/* Famous Artists */}
      <FamousArtists />
      {/* Trending Now */}
      <TrendingSong />
      {/* TopAlbums */}
      <TopAlbums />
      {/* Category */}
      <Footer />
    </div>
  );
}
