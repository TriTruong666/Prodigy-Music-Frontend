import React from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa6";

interface WelcomeSignupProps {
  setSignupProcess: (value: number) => void;
}

export const WelcomeSignup: React.FC<WelcomeSignupProps> = ({
  setSignupProcess,
}) => {
  // handle signup process func
  const handleSignupProcessNext = () => {
    setSignupProcess(2);
  };

  return (
    <div className="w-[50%] self-center flex flex-col gap-y-[10px]">
      <h2 className="text-[40px] font-light_poppins font-semibold my-[20px]">
        Let's start your journey
      </h2>
      <div className="relative mt-[5px]">
        <input
          type="text"
          id="email"
          className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
        >
          Email
        </label>
      </div>
      {/* <p className="text-red-500 text-sm">
        This address is already associated with an existing account.
      </p> */}
      {/* <p className="text-red-500 text-sm">
        This email is not valid. Make sure the email is entered as
        example@email.com.
      </p> */}
      <button
        onClick={handleSignupProcessNext}
        className="py-[12px] px-[20px] rounded-full bg-pink-300 my-[10px] font-semibold hover:bg-opacity-70"
      >
        Next Step
      </button>
      <div className="relative border-t border-gray-500 my-[20px]">
        <p className="py-3 px-[20px] bg-[#F8F7F3] rounded-full absolute text-[12px] top-[-21px] left-[45%] z-10 ">
          OR
        </p>
      </div>
      <div className="flex flex-col gap-y-[15px] my-[10px]">
        {/* Google Button */}
        <div className="relative flex items-center justify-center py-[12px] px-[20px] border border-gray-400 rounded-full cursor-pointer transition-all duration-300 hover:border-gray-800">
          <FaGoogle size={16} className="absolute left-[20px]" />
          <p>Signup with Google</p>
        </div>
        {/* Facebook Button */}
        <div className="relative flex items-center justify-center py-[12px] px-[20px] border border-gray-400 rounded-full cursor-pointer transition-all duration-300 hover:border-gray-800">
          <FaFacebook size={18} className="absolute left-[20px]" />
          <p>Signup with Facebook</p>
        </div>
        {/* Apple Button */}
        <div className="relative flex items-center justify-center py-[12px] px-[20px] border border-gray-400 rounded-full cursor-pointer transition-all duration-300 hover:border-gray-800">
          <FaApple size={22} className="absolute left-[20px]" />
          <p>Signup with Apple</p>
        </div>
      </div>
    </div>
  );
};
