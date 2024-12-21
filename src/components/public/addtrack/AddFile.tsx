"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IconContext } from "react-icons";
import { Button } from "@material-tailwind/react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";

interface AddFileProps {
  setStep: (value: number) => void;
  setProgress: (value: number) => void;
}

export const AddFile: React.FC<AddFileProps> = ({ setStep, setProgress }) => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  // handle file func
  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Create object URL
      setAudioSrc(fileURL); // Set it as the source for the audio tag
      console.log(fileURL);
    }
  };
  // handle utils func
  const handleGoToNextStep = () => {
    setStep(4);
    setProgress(60);
  };
  const handleGoToPrevStep = () => {
    setStep(2);
    setProgress(20);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleGoToNextStep();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col w-[50%] gap-y-[25px]">
      <IconContext.Provider value={{ color: "#757575", size: "22px" }}>
        <div
          onClick={handleGoToPrevStep}
          className="flex items-center gap-x-[5px] cursor-pointer w-fit"
        >
          <IoIosArrowRoundBack />
          <p className="underline text-[18px] text-gray-600">Back</p>
        </div>
      </IconContext.Provider>
      <h2 className="text-[28px] tracking-wide font-normal">
        Upload your audio file
      </h2>

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border border-dashed border-input border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-600 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              WAV, MP3, FLAC, AIFF, WMA, OGG, AAC
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            onChange={handleFileUpload}
            accept=".mp3,.wav,.flac,.aiff,.wma,.ogg,.aac"
            className="hidden"
          />
        </label>
      </div>

      <div className="flex items-center gap-x-[25px]">
        <Button
          onClick={handleGoToNextStep}
          className="font-jost font-500 rounded-full w-fit py-4 px-12 text-base tracking-wider normal-case"
          ripple={true}
        >
          Next
        </Button>
        <IconContext.Provider value={{ color: "#000000" }}>
          <div className="flex items-center gap-x-[15px]">
            <div className="p-4 bg-gray-200 rounded-[10px]">
              <IoReturnDownBackSharp />
            </div>
            <p className="text-gray-600">or Press Enter</p>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};
