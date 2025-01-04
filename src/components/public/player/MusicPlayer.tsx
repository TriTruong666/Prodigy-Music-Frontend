import React, { useRef, useState, useEffect } from "react";
import { useAppSelector } from "@/context/store";
import {
  TbPlayerPlay,
  TbPlayerPause,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
} from "react-icons/tb";
import { RxShuffle } from "react-icons/rx";
import { RxLoop } from "react-icons/rx";
import { SlVolumeOff, SlVolume2 } from "react-icons/sl";
import { Avatar } from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { musicPlayerTimeFormat } from "@/utils/format/TImeFormat";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PlayerSlider } from "../slider/PlayerSlider";
import { VolumeSlider } from "../slider/VolumeSlider";
import { MusicPlayerContextMenu } from "../contextMenu/MusicPlayerContextMenu";
// import audio
const AUDIO_URL =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const contextMenuRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressSong, setProgressSong] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const [volumeValue, setVolumeValue] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeBarTrigger, setVolumeBarTrigger] = useState(false);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  const isToggleMusicPlayer = useAppSelector(
    (state) => state.player.musicPlayer.isTogglePlayer
  );
  const isToggleAnimationMusicPlayer = useAppSelector(
    (state) => state.player.musicPlayer.isAnimationPlayer
  );
  // Context Menu Functions
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const contextMenuHeight = 100; // Approximate height of the context menu
    const contextMenuWidth = 200; // Approximate width of the context menu
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = e.clientX; // Mouse X-coordinate
    let y = e.clientY - 160; // Mouse Y-coordinate

    // Adjust X position if the menu overflows the right edge
    if (x + contextMenuWidth > viewportWidth) {
      x = viewportWidth - contextMenuWidth - 10; // Add padding
    }

    // Adjust Y position if the menu overflows the bottom edge
    if (y + contextMenuHeight > viewportHeight) {
      y = viewportHeight - contextMenuHeight - 10; // Add padding
    }

    // Ensure the menu stays within the viewport
    y = Math.max(10, Math.min(y, viewportHeight - contextMenuHeight - 10));
    x = Math.max(10, x);

    setContextMenu({
      visible: true,
      x,
      y,
    });
  };

  // Volume Functions
  const toggleMuteVolume = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleUnmuteVolume = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      setIsMuted(false);
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolumeValue(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
      if (value > 0) setIsMuted(false);
    }
  };

  // Play/Pause Function
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Song Progress Functions
  const handleSongSeek = (value: number) => {
    setProgressSong(value);
    if (audioRef.current && duration > 0 && !isDraggingSlider) {
      const newTime = (value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSongDragStart = () => {
    setIsDraggingSlider(true);
  };

  const handleSongDragEnd = (value: number) => {
    if (audioRef.current && duration > 0) {
      const newTime = (value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgressSong(value);
    }
    setIsDraggingSlider(false);
  };

  // Update Progress and Duration
  useEffect(() => {
    if (contextMenu.visible) {
      console.log("contextMenuRef:", contextMenuRef.current);
      console.log("Context Menu Visibility:", contextMenu.visible);
    }
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDraggingSlider) {
        const current = audio.currentTime;
        setCurrentTime(current);
        setProgressSong((current / audio.duration) * 100);
      }
    };

    const setAudioDuration = () => {
      if (!isNaN(audio.duration) && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };

    const handleError = () => {
      console.error("Failed to load audio.");
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target as Node) &&
        contextMenu.visible
      ) {
        setContextMenu({ ...contextMenu, visible: false });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && contextMenu.visible) {
        setContextMenu({ ...contextMenu, visible: false });
      }
    };

    // Add listeners
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("canplay", setAudioDuration);
    audio.addEventListener("error", handleError);

    document.addEventListener("mousedown", handleClickOutside); // Use `mousedown` for earlier detection
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("canplay", setAudioDuration);
      audio.removeEventListener("error", handleError);

      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contextMenu.visible, isDraggingSlider]);

  return (
    <>
      {isToggleMusicPlayer && (
        <div
          className={`fixed w-screen h-[90px] px-[80px] z-50  transition-all duration-300 ${
            isToggleAnimationMusicPlayer
              ? "top-[86%] opacity-100"
              : "top-[95%] opacity-0"
          }`}
        >
          <div
            id="player"
            className="flex items-center justify-between rounded-full bg-black h-full w-full bg-opacity-80 px-[30px] gap-x-[50px]"
            onContextMenu={handleContextMenu}
          >
            {/* Context Menu */}
            {contextMenu.visible && (
              <div
                ref={contextMenuRef}
                onClick={(e) => e.stopPropagation()}
                className="absolute w-[200px] bg-gray-900 rounded-lg py-[5px] px-[5px] z-50"
                style={{
                  top: `${contextMenu.y}px`,
                  left: `${contextMenu.x}px`,
                  position: "fixed",
                }}
              >
                <MusicPlayerContextMenu />
              </div>
            )}

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
                <p className="text-gray-200 font-semibold">
                  Ma Meilleure Ennemie
                </p>
                <p className="text-gray-400 text-[14px]">Stromae, Pomme</p>
              </div>
            </div>

            {/* Controls */}
            <IconContext.Provider value={{ color: "#eeeeee", size: "26px" }}>
              <div className="flex items-center gap-x-[20px] ">
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

            {/* Song Slider */}
            <div className="flex flex-col gap-y-[5px] mt-[18px]">
              <PlayerSlider
                value={progressSong}
                max={100}
                min={0}
                onChange={handleSongSeek}
                onDragStart={handleSongDragStart}
                onDragEnd={handleSongDragEnd}
              />
              <div className="flex items-center justify-between mt-[3px]">
                <p className="text-gray-500 text-[12px]">
                  {musicPlayerTimeFormat(currentTime)}
                </p>
                <p className="text-gray-500 text-[12px]">
                  {musicPlayerTimeFormat(duration)}
                </p>
              </div>
            </div>

            {/* Utils */}
            <TooltipProvider>
              <div className="flex items-center gap-x-[30px]">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                      <RxShuffle className="text-[#eeeeee] text-[22px]" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-jost text-[12px]">Random</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                      <RxLoop className="text-[#eeeeee] text-[22px]" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-jost text-[12px]">Loop</p>
                  </TooltipContent>
                </Tooltip>

                <div
                  className="flex items-center gap-x-[5px]"
                  onMouseEnter={() => setVolumeBarTrigger(true)}
                  onMouseLeave={() => setVolumeBarTrigger(false)}
                >
                  {isMuted ? (
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                          onClick={toggleUnmuteVolume}
                        >
                          <SlVolumeOff className="text-[#eeeeee] text-[22px]" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-jost text-[12px]">Unmute</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className="p-[10px] rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
                          onClick={toggleMuteVolume}
                        >
                          <SlVolume2 className="text-[#eeeeee] text-[22px]" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-jost text-[12px]">Mute</p>
                      </TooltipContent>
                    </Tooltip>
                  )}

                  <VolumeSlider
                    max={100}
                    min={0}
                    value={isMuted ? 0 : volumeValue}
                    onChange={handleVolumeChange}
                    trigger={volumeBarTrigger}
                  />
                </div>
              </div>
            </TooltipProvider>
          </div>
          <audio ref={audioRef} src="/testsound1.mp3" />
        </div>
      )}
    </>
  );
};
