import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { IconContext } from "react-icons";
import { Button } from "@material-tailwind/react";
import { IoReturnDownBackSharp } from "react-icons/io5";

interface AddTitleProps {
  setStep: (value: number) => void;
  setProgress: (value: number) => void;
}

export const AddTitle: React.FC<AddTitleProps> = ({ setStep, setProgress }) => {
  const handleGoToNextStep = () => {
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
      <h2 className="text-[28px] tracking-wide font-normal">
        What's the name of your track?
      </h2>
      <div className="relative">
        <input
          type="text"
          id="floating_outlined"
          className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border border-input border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
        >
          Track title
        </label>
      </div>
      <div className="flex flex-col text-gray-600">
        <p>Please DON'T:</p>
        <IconContext.Provider value={{ color: "#949494" }}>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-[10px]">
              <GoDotFill />
              <p>Don't mention featured artists here.</p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <GoDotFill />
              <p>Don't include year in song title.</p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <GoDotFill />
              <p>Don't add extra details (e.g. "EP", "Single")</p>
            </div>
          </div>
        </IconContext.Provider>
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
