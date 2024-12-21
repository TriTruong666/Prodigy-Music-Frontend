import React, { useEffect } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Select, Option, Button } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import { IoReturnDownBackSharp } from "react-icons/io5";
interface AddGenreProps {
  setStep: (value: number) => void;
  setProgress: (value: number) => void;
}
const customTheme = {
  select: {
    styles: {
      base: {
        arrow: {
          color: "text-gray-400",
        },
        select: {
          color: "text-gray-700",
          fontWeight: "font-normal",
          outline: "outline outline-0 focus:outline-0",
        },
        menu: {
          bg: "bg-background",
          border: "border border-gray-700",
          color: "text-gray-700",
        },
        option: {
          initial: {
            background: "hover:bg-gray-300 focus:bg-gray-300",
            color: "hover:text-gray-900 focus:text-gray-900",
          },
          active: {
            bg: "bg-gray-50 bg-opacity-80",
            color: "text-gray-900",
          },
        },
      },
    },
    defaultProps: {
      size: "lg",
    },
  },
};

export const AddGenre: React.FC<AddGenreProps> = ({ setStep, setProgress }) => {
  const handleGoToNextStep = () => {
    setStep(5);
    setProgress(80);
  };
  const handleGoToPrevStep = () => {
    setStep(3);
    setProgress(40);
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
        What's the primary genre?
      </h2>
      <ThemeProvider value={customTheme}>
        <Select
          color="gray"
          className="font-jost text-base"
          size="lg"
          label="Select a genre"
        >
          <Option className="font-jost text-base" value="rock">
            Rock
          </Option>
          <Option className="font-jost text-base" value="hiphop">
            Hip-hop
          </Option>
          <Option className="font-jost text-base" value="edm">
            EDM
          </Option>
          <Option className="font-jost text-base" value="indie">
            Indie
          </Option>
          <Option className="font-jost text-base" value="kp">
            K-Pop
          </Option>
          <Option className="font-jost text-base" value="trap">
            Trap
          </Option>
          <Option className="font-jost text-base" value="house">
            House
          </Option>
        </Select>
      </ThemeProvider>
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
