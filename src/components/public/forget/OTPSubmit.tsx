import React, { useRef } from "react";
import { GrFormPrevious } from "react-icons/gr";

interface OTPSubmitProps {
  setForgetProcess: (value: number) => void;
}

export const OTPSubmit: React.FC<OTPSubmitProps> = ({ setForgetProcess }) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    e.target.value = value; // Set the sanitized value

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus(); // Focus next input
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Focus previous input
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const clipboardData = e.clipboardData
      .getData("Text")
      .replace(/\D/g, "")
      .slice(0, 6); // Extract numbers only
    clipboardData.split("").forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = char; // Fill inputs
        if (index < 5) inputRefs.current[index + 1]?.focus(); // Move focus
      }
    });
  };

  // handle forget process
  const handleForgetProcessNext = () => setForgetProcess(3);
  const handleForgetProcessPrev = () => setForgetProcess(1);

  return (
    <div className="w-[50%] self-center flex flex-col gap-y-[20px]">
      <GrFormPrevious
        onClick={handleForgetProcessPrev}
        className="cursor-pointer text-gray-500 hover:text-gray-900"
        size={30}
      />
      <h2 className="text-[40px] font-light_poppins font-semibold my-[20px]">
        Enter OTP code
      </h2>
      <div className="grid grid-cols-6 gap-x-[10px]">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-[75px] h-[75px] text-center font-poppins text-[28px] border border-gray-400 transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <div className="flex items-center gap-x-[5px]">
        <p className="text-sm">Didn't receive the email?</p>
        <p className="underline text-sm cursor-pointer">Click to resend.</p>
      </div>
      <button
        onClick={handleForgetProcessNext}
        className="py-[12px] px-[20px] rounded-full bg-green-200 my-[10px] font-semibold hover:bg-opacity-70"
      >
        Submit
      </button>
      {/* <p className="text-sm text-red-500">
        Invalid OTP code, please check your email again.
      </p> */}
    </div>
  );
};
