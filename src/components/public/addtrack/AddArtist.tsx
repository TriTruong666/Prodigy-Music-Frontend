import React, { useEffect } from "react";
import { Radio } from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ThemeProvider } from "@material-tailwind/react";
import { IoAddSharp, IoReturnDownBackSharp } from "react-icons/io5";
import { Avatar } from "@material-tailwind/react";
import { Button as MaterialButton } from "@material-tailwind/react";
import Link from "next/link";
interface AddArtistProps {
  setStep: (value: number) => void;
  setProgress: (value: number) => void;
}
const customTheme = {
  radio: {
    defaultProps: {
      labelProps: {
        className: "text-[20px]",
      },
    },
    styles: {
      base: {
        container: {
          p: "p-3",
        },
        input: {
          width: "w-6",
          height: "h-6",
          borderColor: "border-gray-600",
          before: {
            height: "before:h-12",
            width: "before:w-12",
          },
        },
        label: {
          color: "text-black",
          fontWeight: "font-normal",
        },
      },
    },
  },
};
export const AddArtist: React.FC<AddArtistProps> = ({
  setProgress,
  setStep,
}) => {
  const [showAddButton, setShowAddButton] = React.useState<boolean>(false);

  //   handle func
  const handleToggleAddArtistOn = () => {
    setShowAddButton(true);
  };
  const handleToggleAddArtistOff = () => {
    setShowAddButton(false);
  };
  const handleGoToPrevStep = () => {
    setStep(4);
    setProgress(75);
  };
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
        Add a featured artist to song title?
      </h2>
      <ThemeProvider value={customTheme}>
        <div className="flex flex-col gap-y-[5px]">
          <Radio
            name="type"
            label="No, don't show any other artists in song title"
            ripple={true}
            onClick={handleToggleAddArtistOff}
          />
          <Radio
            name="type"
            label="Yes, add featured artists to track title"
            ripple={true}
            onClick={handleToggleAddArtistOn}
          />
        </div>
      </ThemeProvider>
      {showAddButton && (
        <>
          <div className="flex flex-col ml-[50px]">
            <div className="flex items-center justify-between px-[20px] border border-gray-800 rounded-lg mb-[20px]">
              <div className="flex flex-col py-[10px] gap-y-[5px]">
                <p className="text-[15px] text-gray-700">Featured artist</p>
                <p className="text-[18px] font-semibold">VSTRA</p>
              </div>
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="md"
              />
            </div>
            <IconContext.Provider value={{ color: "#616161", size: "22px" }}>
              <div className="flex items-center gap-x-[15px] cursor-pointer">
                <IoAddSharp />
                <p className="text-[18px] text-gray-700">
                  Add another featured artist
                </p>
              </div>
            </IconContext.Provider>
          </div>
        </>
      )}
      <div className="flex items-center gap-x-[25px]">
        <Link href="/publish/confirm">
          <MaterialButton
            className="font-jost font-500 rounded-full w-fit py-4 px-12 text-base tracking-wider normal-case"
            ripple={true}
          >
            Next
          </MaterialButton>
        </Link>
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
