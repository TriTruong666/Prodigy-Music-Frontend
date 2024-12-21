"use client";
import React, { useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Calendar } from "@/components/ui/calendar";
import { IconContext } from "react-icons";
import { IoCalendarClearOutline, IoReturnDownBackSharp } from "react-icons/io5";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button as UIButton } from "../../ui/button";
import { Button as MaterialButton } from "@material-tailwind/react";
import { cn } from "@/lib/utils";
// import utils
import formatDateGB from "@/utils/format/DateFormat";
interface AddReleaseProps {
  setStep: (value: number) => void;
  setProgress: (value: number) => void;
}

export const AddRelease: React.FC<AddReleaseProps> = ({
  setStep,
  setProgress,
}) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const handleGoToNextStep = () => {
    setStep(6);
    setProgress(100);
  };
  const handleGoToPrevStep = () => {
    setStep(4);
    setProgress(60);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleGoToNextStep();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
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
        Set a release date
      </h2>
      <IconContext.Provider value={{ size: "24px", color: "#616161" }}>
        <Popover>
          <PopoverTrigger asChild>
            <UIButton
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal gap-x-5 py-5 border border-gray-500 hover:bg-gray-200",
                !date && "text-muted-foreground"
              )}
            >
              <IoCalendarClearOutline />
              {date ? (
                <>
                  <span className="text-[15px] text-gray-700">
                    {formatDateGB(date)}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[15px] text-gray-700">Pick a date</span>
                </>
              )}
            </UIButton>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Calendar
              className="font-jost border border-gray-400"
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </IconContext.Provider>
      <div className="flex items-center gap-x-[25px]">
        <MaterialButton
          onClick={handleGoToNextStep}
          className="font-jost font-500 rounded-full w-fit py-4 px-12 text-base tracking-wider normal-case"
          ripple={true}
        >
          Next
        </MaterialButton>
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
