import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";
import { GrFormPrevious } from "react-icons/gr";

interface SignupFormProps {
  setSignupProcess: (value: number) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ setSignupProcess }) => {
  // State to control password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);
  // handle signup process func
  const handleSignupProcess = () => {
    setSignupProcess(3);
  };
  const handleSignupProcessPrev = () => {
    setSignupProcess(1);
  };
  return (
    <form action="" className="w-[50%] self-center flex flex-col gap-y-[10px]">
      <GrFormPrevious
        onClick={handleSignupProcessPrev}
        className="cursor-pointer text-gray-500 hover:text-gray-900"
        size={30}
      />
      <h2 className="text-[40px] font-light_poppins font-semibold my-[20px]">
        Create your account
      </h2>
      <div className="relative">
        <input
          type="text"
          id="fullname"
          className="block px-2.5 pb-2.5 pt-4 w-full text-[18px] text-gray-900 bg-transparent rounded-lg border border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
          placeholder=" "
        />
        <label
          htmlFor="fullname"
          className="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
        >
          Your name
        </label>
      </div>

      <IconContext.Provider value={{ color: "#616161" }}>
        <div className="relative mt-[5px]">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className={`block px-2.5 pb-2.5 pt-4 w-full ${
              !showPassword && "text-[18px] font-bold"
            } text-gray-900 bg-transparent rounded-lg border border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer`}
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
          >
            Password
          </label>
          <div
            className={`absolute ${
              showPassword ? "top-[15px]" : "top-[15px]"
            } right-3 cursor-pointer`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={24} />
            ) : (
              <AiOutlineEye size={24} />
            )}
          </div>
        </div>

        <div className="relative mt-[5px]">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            className={`block px-2.5 pb-2.5 pt-4 w-full ${
              !showConfirmPassword && "text-[18px] font-bold"
            } text-gray-900 bg-transparent rounded-lg border border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer`}
            placeholder=" "
          />
          <label
            htmlFor="confirm_password"
            className="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
          >
            Confirm password
          </label>
          <div
            className={`absolute ${
              showConfirmPassword ? "top-[15px]" : "top-[15px]"
            } right-3 cursor-pointer`}
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible size={24} />
            ) : (
              <AiOutlineEye size={24} />
            )}
          </div>
        </div>
      </IconContext.Provider>
      <button
        onClick={handleSignupProcess}
        className="py-[12px] px-[20px] rounded-full bg-pink-300 my-[10px] font-semibold hover:bg-opacity-70"
      >
        Next Step
      </button>
      <div className="flex flex-wrap items-center text-sm text-gray-700">
        <p>When you click 'Create account', you agree with Prodigy's</p>
        <p className="underline ml-[5px] cursor-pointer">
          Terms and Conditions,
        </p>
        <p className="">and confirming that you've read our</p>
        <p className="underline ml-[5px] cursor-pointer">Privacy Notice.</p>
      </div>
    </form>
  );
};
