import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from "react-icons/io5";
// import assets
import logo from "@/assets/prodigy-logo-dark.png";
import logo2 from "@/assets/prodigy-logo-2-dark.png";
import Image from "next/image";
export const VideoSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [cinematic, setCinematic] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle Functions
  const handleClickForFirstTime = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      video.requestFullscreen();
      video.play();
    }
    setIsClicked(true);
    setCinematic(true);
    setIsPlaying(true);
    setTimeout(() => {
      setCinematic(false);
    }, 1500);
  };
  const handleMuteVideo = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = true;
      setIsMuted(true);
    }
  };
  const handleUnmuteVideo = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      setIsMuted(false);
    }
  };
  const handlePauseVideo = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.pause();
      setIsPlaying(false);
    }
  };
  const handlePlayVideo = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.play();
      setIsPlaying(true);
    }
  };
  const handleFullScreenVideo = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.requestFullscreen();
    }
  };
  return (
    <div className="relative w-screen h-screen bg-black select-none">
      <div className="flex flex-col justify-center items-center">
        <div
          className={`w-[70%] cursor-pointer relative group transition-all duration-500 ${
            cinematic && "scale-150"
          }`}
        >
          <video
            ref={videoRef}
            src="/video.mp4"
            className={`w-full h-[600px] object-cover rounded-2xl transition-all duration-1000 ${
              cinematic && "scale-150 opacity-0"
            }`}
          ></video>
          {isClicked && (
            <div className="inset-0 group absolute z-10 w-full h-full bg-black bg-opacity-50 opacity-0 transition-all duration-500 hover:opacity-100">
              <div className="flex h-full justify-center items-end py-[30px] gap-x-[100px]">
                {isMuted ? (
                  <div
                    className="p-[14px] rounded-full border border-gray-700 transition-all duration-300 hover:bg-gray-800"
                    onClick={handleUnmuteVideo}
                  >
                    <IoVolumeMuteSharp className="text-gray-300" size={18} />
                  </div>
                ) : (
                  <div
                    className="p-[14px] rounded-full border border-gray-700 transition-all duration-300 hover:bg-gray-800"
                    onClick={handleMuteVideo}
                  >
                    <IoVolumeMediumSharp className="text-gray-300" size={18} />
                  </div>
                )}
                {isPlaying ? (
                  <div
                    className="p-[14px] rounded-full border border-gray-700 transition-all duration-300 hover:bg-gray-800"
                    onClick={handlePauseVideo}
                  >
                    <FaPause className="text-gray-300" size={18} />
                  </div>
                ) : (
                  <div
                    className="p-[14px] rounded-full border border-gray-700 transition-all duration-300 hover:bg-gray-800"
                    onClick={handlePlayVideo}
                  >
                    <FaPlay className="text-gray-300" size={18} />
                  </div>
                )}

                <div
                  className="p-[14px] rounded-full border border-gray-700 transition-all duration-300 hover:bg-gray-800"
                  onClick={handleFullScreenVideo}
                >
                  <MdZoomOutMap className="text-gray-300" size={18} />
                </div>
              </div>
            </div>
          )}
          {!isClicked && (
            <div
              onClick={handleClickForFirstTime}
              className="inset-0 group gap-x-[30px] absolute z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition-all duration-500 hover:opacity-100"
            >
              <Image
                src={logo}
                alt="logo"
                className="w-[70px] h-[70px] object-cover z-10 absolute left-[48%] duration-500 group-hover:left-[39%]"
              />
              <Image
                src={logo2}
                alt="logo"
                className="w-[180px] h-[180px] object-cover absolute left-[46%] top-[80%] opacity-0 duration-500 group-hover:top-[35%] group-hover:opacity-100"
              />
            </div>
          )}
        </div>
        <div className="w-[70%] flex flex-col gap-y-[15px] mt-[50px]">
          <p className="font-semibold_poppins self-center text-[30px] text-gray-200 bg-gradient-to-tl from-red-900 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
            Be the First to Hear It
          </p>
          <div className="flex gap-x-[8px] self-center">
            <p className="text-gray-500 text-[22px]">Get</p>
            <p className="bg-gradient-to-tl from-red-900 via-pink-600 to-yellow-600 bg-clip-text text-transparent text-[22px]">
              exclusive early access
            </p>
            <p className="text-gray-500 text-[22px]">
              to new releases from your favorite artists,
            </p>
            <p className="bg-gradient-to-tl from-red-900 via-pink-600 to-yellow-600 bg-clip-text text-transparent text-[22px]">
              only on Prodigy.
            </p>
          </div>
          <Link
            href="/"
            className="flex self-center mt-3 group items-center gap-x-[10px] justify-center w-[300px] bg-gradient-to-r from-[#fda4af]  to-[#f43f5e] py-[12px] rounded-full shadow-[0px_5px_40px_10px_rgba(226,_117,_226,_0.2)]
  text-homepage_background transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(69,_78,_94,_0.5)] hover:bg-gradient-to-r hover:from-[#d1d5db] hover:via-[#6b7280] hover:to-[#374151]"
          >
            <p className="text-gray-200 group-hover:text-homepage_background">
              View all Exclusives
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
