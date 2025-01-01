import React from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaPlay } from "react-icons/fa6";
import { useAppDispatch } from "@/context/store";
import { useAppSelector } from "@/context/store";
// import slices
import { togglePlaylistCollapseOff } from "@/context/slices/collapse/collapseSlices";
import { toggleAnimationPlaylistCollapseOff } from "@/context/slices/collapse/collapseSlices";
import { toggleMenuDropdownOff } from "@/context/slices/dropdown/dropdownSlices";
import { toggleAnimationMusicPlayerOn } from "@/context/slices/player/musicPlayerSlices";
import { toggleMusicPlayerOn } from "@/context/slices/player/musicPlayerSlices";
import image from "@/assets/pexels-qhung999-27200179.jpg";
export const PlaylistCollapse = () => {
  const testArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const testArtists = ["Xuan Nghi", "Hoang Dung", "MCK"];
  // selector
  const isTogglePlaylistCollapse = useAppSelector(
    (state) => state.collapse.playlistCollapse.isTogglePlaylistCollapse
  );
  const isToggleAnimationPlaylistCollapse = useAppSelector(
    (state) => state.collapse.playlistCollapse.isToggleAnimationPlaylistCollapse
  );
  // dispatch
  const dispatch = useAppDispatch();
  // Handle Functions
  const handleTogglePlaylistCollapseOff = () => {
    dispatch(toggleAnimationPlaylistCollapseOff());
    dispatch(toggleMenuDropdownOff());
    setTimeout(() => {
      dispatch(togglePlaylistCollapseOff());
    }, 500);
  };
  const handleTurnOnMusicPlayer = () => {
    dispatch(toggleMusicPlayerOn());
    setTimeout(() => {
      dispatch(toggleAnimationMusicPlayerOn());
    }, 100);
  };
  return (
    <>
      {isTogglePlaylistCollapse && (
        <div
          className={`fixed h-screen w-[450px] bg-[#212121] z-[100] ${
            isToggleAnimationPlaylistCollapse
              ? "right-0 opacity-100"
              : "right-[-450px] opacity-0"
          } shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden transition-all ease-out duration-500`}
        >
          <div className="flex flex-col h-full pt-[29px] px-[20px]">
            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-[18px]">Playlist</p>
              <div
                className="p-[7px] rounded-full transition-all duration-300 hover:bg-gray-800 cursor-pointer"
                onClick={handleTogglePlaylistCollapseOff}
              >
                <IoCloseOutline size={20} className="text-gray-300" />
              </div>
            </div>
            {/* Scrollable content */}
            <div className="flex flex-col mt-[30px] overflow-y-auto h-full">
              {/* Recent */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between cursor-pointer p-[10px] transition-all duration-300 rounded-[10px] hover:bg-[#424242] hover:bg-opacity-50 mb-[5px]">
                  <div className="flex items-center gap-x-[5px]">
                    <div className="relative w-[40px] h-[40px] group">
                      <Image
                        src={image}
                        alt="song"
                        quality={30}
                        className="w-full h-full object-cover rounded-[10px] absolute"
                      />
                      <div className="absolute rounded-[10px] inset-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <FaPlay className="text-homepage_foreground" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold_poppins text-[13px] text-gray-300 hover:text-homepage_foreground">
                        Summer Night (Remix)
                      </p>
                      <div className="flex gap-x-[3px]">
                        {testArtists.map((artist, index) => (
                          <p
                            key={index}
                            className="text-[12px] text-gray-400 hover:underline cursor-pointer w-fit"
                          >
                            {artist}
                            {index !== testArtists.length - 1 && ","}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-[5px] rounded-full transition-all duration-300 hover:bg-gray-800 cursor-pointer">
                    <GoHeart className="text-gray-400" size={18} />
                  </div>
                </div>
              </div>
              {/* Next */}
              <div className="flex flex-col mt-[10px]">
                <p className="text-sm text-gray-300 mb-[10px]">Next Song</p>
                {testArray.map((song) => (
                  <div
                    key={song}
                    className="flex items-center justify-between cursor-pointer p-[10px] transition-all duration-300 rounded-[10px] hover:bg-[#424242] hover:bg-opacity-50 mb-[5px]"
                  >
                    <div
                      className="flex items-center gap-x-[5px]"
                      onClick={handleTurnOnMusicPlayer}
                    >
                      <div className="relative w-[40px] h-[40px] group">
                        <Image
                          src={image}
                          alt="song"
                          quality={30}
                          className="w-full h-full object-cover rounded-[10px] absolute"
                        />
                        <div className="absolute rounded-[10px] inset-0 w-full h-full bg-homepage_foreground flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <FaPlay className="text-homepage_background" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold_poppins text-[13px] text-gray-300 hover:text-homepage_foreground">
                          Summer Night (Remix)
                        </p>
                        <div className="flex gap-x-[3px]">
                          {testArtists.map((artist, index) => (
                            <p
                              key={index}
                              className="text-[12px] text-gray-400 hover:underline cursor-pointer w-fit"
                            >
                              {artist}
                              {index !== testArtists.length - 1 && ","}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-[5px] rounded-full transition-all duration-300 hover:bg-gray-800 cursor-pointer">
                      <GoHeart className="text-gray-400" size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
