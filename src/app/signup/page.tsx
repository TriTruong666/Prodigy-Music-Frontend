"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";
// import assets
import logo from "@/assets/prodigy-logo-light.png";
import featuredImage from "@/assets/featured-1.jpg";
import { useState } from "react";

export default function Signup() {
  // State to control password visibility
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="font-jost overflow-hidden relative w-screen h-screen flex">
      <div className="w-[60%] flex flex-col justify-between px-[60px] py-[50px]">
        <Link href="/">
          <Image
            className="object-cover md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]"
            alt="logo"
            src={logo}
            quality={50}
          />
        </Link>
        <form
          action=""
          className="w-[50%] self-center flex flex-col gap-y-[10px]"
        >
          <h2 className="text-[40px] font-light_poppins font-semibold my-[20px]">
            Create your account
          </h2>
          <div className="relative">
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
          <IconContext.Provider value={{ color: "#616161" }}>
            <div className="relative mt-[5px]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-[20px] font-bold text-gray-900 bg-transparent rounded-lg border border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
              <div
                className="absolute top-[20px] right-3 cursor-pointer"
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
                className="block px-2.5 pb-2.5 pt-4 w-full text-[20px] font-bold text-gray-900 bg-transparent rounded-lg border border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
                placeholder=" "
              />
              <label
                htmlFor="confirm_password"
                className="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
              >
                Confirm password
              </label>
              <div
                className="absolute top-[20px] right-3 cursor-pointer"
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
          <button className="py-[12px] px-[20px] rounded-full bg-pink-300 my-[10px] font-semibold hover:bg-opacity-70">
            Create account
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
        <div className="self-center flex gap-x-[3px]">
          <p className="text-sm">Already have an account?</p>
          <Link href="/login">
            <p className="underline text-sm">Log in</p>
          </Link>
        </div>
      </div>
      <div className="w-[40%] relative h-full">
        <Image
          src={featuredImage}
          className="w-full h-full object-cover"
          alt="featured artist"
        />
        <div className="absolute z-10 inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between items-center py-[80px]">
          <div className="flex flex-col items-center w-[70%] gap-y-[10px]">
            <p className="text-pink-300 text-[24px]">Featured Artist</p>
            <p className="text-pink-300 text-[46px]">Son Tung M-TP</p>
            <p className="text-center text-pink-300 text-[17px]">
              Famous for his profound influence on Vietnamese music, he was
              dubbed the "Prince of V-pop" by the World Music Awards and
              BroadwayWorld.
            </p>
          </div>
          <div className="flex flex-col items-center w-[70%] gap-y-[10px]">
            <p className="text-pink-300 text-center text-[20px]">
              I'll be recommending Prodigy to every artists that comes to my
              music company.
            </p>
            <p className="text-pink-300 text-[20px]">Son Tung M-TP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
