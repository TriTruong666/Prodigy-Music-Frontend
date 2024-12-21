import React, { useRef, useState, useEffect } from "react";
import { IoMusicalNotesOutline } from "react-icons/io5";
import {
  TbPlayerPlay,
  TbPlayerPause,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
} from "react-icons/tb";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { LuListChecks } from "react-icons/lu";
import { RiPlayListAddLine } from "react-icons/ri";
import { RxShuffle } from "react-icons/rx";
import { SlVolume2, SlVolumeOff } from "react-icons/sl";
import { Avatar } from "@material-tailwind/react";
import { IconContext } from "react-icons";
// import assets
const AUDIO_URL =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const MusicPlayer = () => {
  // ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // states
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoving, setIsLoving] = useState<boolean>(false);
  const [isAddPlaylist, setIsAddPlaylist] = useState<boolean>(false);
  const [isShowVolumeControl, setIsShowVolumeControl] =
    useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progressVolume, setProgressVolume] = useState<number>(100);
  const [progressSong, setProgressSong] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  // handle volume func
  const handleMuteVolume = () => {
    setIsMuted(true);
    setProgressVolume(0);
    if (audioRef.current) audioRef.current.volume = 0;
  };
  const handleUnmutedVolume = () => {
    setIsMuted(false);
    setProgressVolume(100);
    if (audioRef.current) audioRef.current.volume = 1;
  };
  const handleVolumeChangeByClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newVolume = Math.min(
      Math.max(((e.clientX - rect.left) / rect.width) * 100, 0),
      100
    );
    setProgressVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume / 100;
  };

  // handle song func
  const handleSongChangeByClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newSongTime = Math.min(
      Math.max(((e.clientX - rect.left) / rect.width) * 100, 0),
      100
    );
    setProgressSong(newSongTime);
    if (audioRef.current) {
      audioRef.current.currentTime =
        (audioRef.current.duration * newSongTime) / 100;
    }
  };

  // play/pause functionality
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // update progress, current time, and duration when audio is playing
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        const currentTime = audioRef.current?.currentTime || 0;
        const duration = audioRef.current?.duration || 0;
        setCurrentTime(currentTime); // Update current time
        setProgressSong((currentTime / duration) * 100);
      });

      // set duration of the audio when loaded
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current?.duration || 0);
      });

      // Handle the 'ended' event to stop the song and update isPlaying
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setCurrentTime(0);
        setProgressSong(0);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", () => {});
        audioRef.current.removeEventListener("loadedmetadata", () => {});
        audioRef.current.removeEventListener("ended", () => {});
      }
    };
  }, [isPlaying]);

  // Format the time to mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="fixed w-screen h-[90px] px-[80px] z-50 top-[86%]">
      <div
        id="player"
        className="flex items-center justify-between rounded-full bg-black h-full w-full bg-opacity-80 px-[30px] gap-x-[50px]"
      >
        {/* Song Info */}
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
            <p className="text-gray-200 font-semibold">Ma Meilleure Ennemie</p>
            <p className="text-gray-400 text-[14px]">Stromae, Pomme</p>
          </div>
        </div>

        {/* Controls */}
        <IconContext.Provider value={{ color: "#eeeeee", size: "26px" }}>
          <div className="flex items-center gap-x-[20px]">
            <div className="p-[13px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <TbPlayerSkipBack />
            </div>
            <div
              onClick={togglePlayPause}
              className="p-[13px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
            </div>
            <div className="p-[13px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <TbPlayerSkipForward />
            </div>
          </div>
        </IconContext.Provider>

        {/* Progress Bar */}
        <div className="flex flex-col gap-y-[5px] mt-[18px]">
          <div
            onClick={handleSongChangeByClick}
            className="relative w-[600px] h-[4px] bg-gray-600 rounded-full cursor-pointer"
          >
            <div
              className="h-full bg-gray-300 rounded-full transition-all duration-300 cursor-pointer"
              style={{ width: `${progressSong}%` }}
            ></div>
            {/* Dot */}
            <div
              className="absolute top-[-4px] w-[12px] h-[12px] bg-gray-300 rounded-full border border-gray-400 cursor-pointer"
              style={{ left: `calc(${progressSong}% - 8px)` }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-[12px]">
              {formatTime(currentTime)}
            </p>
            <p className="text-gray-500 text-[12px]">{formatTime(duration)}</p>
          </div>
        </div>

        {/* Utils */}
        <IconContext.Provider value={{ color: "#eeeeee", size: "22px" }}>
          <div className="flex items-center gap-x-[30px]">
            <div
              onClick={() => setIsLoving(!isLoving)}
              className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {!isLoving ? (
                <GoHeart />
              ) : (
                <GoHeartFill style={{ color: "#d32f2f" }} />
              )}
            </div>
            <div
              onClick={() => setIsAddPlaylist(!isAddPlaylist)}
              className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {!isAddPlaylist ? <RiPlayListAddLine /> : <LuListChecks />}
            </div>

            <div className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
              <RxShuffle />
            </div>
            <div
              onMouseEnter={() => setIsShowVolumeControl(true)}
              onMouseLeave={() => setIsShowVolumeControl(false)}
              className="flex items-center gap-x-[10px] w-fit"
            >
              {!isMuted ? (
                <div
                  onClick={handleMuteVolume}
                  className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <SlVolume2 />
                </div>
              ) : (
                <div
                  onClick={handleUnmutedVolume}
                  className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                >
                  <SlVolumeOff />
                </div>
              )}

              {/* volume control */}
              <div
                onClick={handleVolumeChangeByClick}
                className={`relative h-[3px] bg-gray-600 rounded-full cursor-pointer transition-all duration-300 ${
                  isShowVolumeControl ? "w-[100px]" : "w-[0]"
                }`}
              >
                <div
                  className="h-full bg-gray-300 rounded-full transition-all duration-300 cursor-pointer"
                  style={{ width: `${progressVolume}%` }}
                ></div>
                <div
                  className={`absolute top-[-3px] w-[10px] h-[10px] bg-gray-300 rounded-full border border-gray-400 cursor-pointer ${
                    !isShowVolumeControl && "hidden"
                  }`}
                  style={{
                    left: `calc(${progressVolume}% - 8px)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <audio ref={audioRef} src={AUDIO_URL} />
    </div>
  );
};
