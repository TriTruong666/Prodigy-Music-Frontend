import React, { useState } from "react";
import { TbMusicHeart } from "react-icons/tb";
import { SlUser } from "react-icons/sl";
import { GrFormPrevious } from "react-icons/gr";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

interface ChooseRoleProps {
  setSignupProcess: (value: number) => void;
}

export const ChooseRole: React.FC<ChooseRoleProps> = ({ setSignupProcess }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  // handle signup process func
  const handleSignupProcessNext = () => {
    setSignupProcess(3);
  };
  const handleSignupProcessPrev = () => {
    setSignupProcess(1);
  };
  return (
    <div className="w-[50%] self-center flex flex-col gap-y-[10px]">
      <GrFormPrevious
        onClick={handleSignupProcessPrev}
        className="cursor-pointer text-gray-500 hover:text-gray-900"
        size={30}
      />
      <h2 className="text-[40px] font-light_poppins font-semibold my-[20px]">
        Choose type of account
      </h2>

      <div className="flex gap-x-4">
        {/* User Role */}
        <div
          className={`w-[50%] h-[200px] border rounded-lg cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 ${
            selectedRole === "user"
              ? "scale-105 border-red-300"
              : "hover:scale-105 hover:border-gray-400"
          }`}
          onClick={() => setSelectedRole("user")}
        >
          <SlUser
            size={40}
            className={
              selectedRole === "user" ? "text-red-300" : "text-gray-700"
            }
          />
          <span className={`mt-4 ${selectedRole === "user" && "text-red-300"}`}>
            User
          </span>
        </div>
        {/* Artist Role */}
        <div
          className={`w-[50%] h-[200px] border rounded-lg cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 ${
            selectedRole === "artist"
              ? "scale-105 border-red-300"
              : "hover:scale-105 hover:border-gray-400"
          }`}
          onClick={() => setSelectedRole("artist")}
        >
          <TbMusicHeart
            size={40}
            className={
              selectedRole === "artist" ? "text-red-300" : "text-gray-700"
            }
          />
          <span
            className={`mt-4 ${selectedRole === "artist" && "text-red-300"}`}
          >
            Artist
          </span>
        </div>
      </div>
      <button
        onClick={handleSignupProcessNext}
        className="py-[12px] px-[20px] rounded-full bg-red-300 my-[10px] font-semibold hover:bg-opacity-70"
      >
        Next Step
      </button>
      {selectedRole === "user" && (
        <p className="text-sm text-gray-700">
          I'm just a normal person and just want to feel the music on Prodigy.
        </p>
      )}
      {selectedRole === "artist" && (
        <p className="text-sm text-gray-700">
          I'm an artist and want to try this platform for my upcomming products.
          Artist can access many features of Prodigy.
        </p>
      )}
    </div>
  );
};
