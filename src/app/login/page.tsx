"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// import assets
import logo from "@/assets/prodigy-logo-light.png";
import featuredImage from "@/assets/featured-2.jpg";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div className="font-jost overflow-hidden relative w-screen h-screen flex">
      <div className="w-[60%] flex flex-col justify-between px-[60px] py-[50px]">
        <Link href="/" className="w-fit">
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
            Log in to your Prodigy
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
          <Link href="/forget" className="w-fit">
            <p className="text-sm underline">Forget your password?</p>
          </Link>
          <button className="py-[12px] px-[20px] rounded-full bg-blue-300 my-[10px] font-semibold hover:bg-opacity-70">
            Log in
          </button>
          {/* <p className="text-sm text-red-500">
            Wrong email or password, please try again?
          </p> */}
          <div className="relative border-t border-gray-500 my-[20px]">
            <p className="py-3 px-[20px] bg-[#F8F7F3] rounded-full absolute text-[12px] top-[-21px] left-[45%] z-10 ">
              OR
            </p>
          </div>
          <div className="flex flex-col gap-y-[15px] my-[10px]">
            {/* Google Button */}
            <div className="relative flex items-center justify-center py-[12px] px-[20px] border border-gray-400 rounded-full cursor-pointer transition-all duration-300 hover:border-gray-800">
              <FaGoogle size={16} className="absolute left-[20px]" />
              <p>Continue with Google</p>
            </div>
            {/* Facebook Button */}
            <div className="relative flex items-center justify-center py-[12px] px-[20px] border border-gray-400 rounded-full cursor-pointer transition-all duration-300 hover:border-gray-800">
              <FaFacebook size={18} className="absolute left-[20px]" />
              <p>Continue with Facebook</p>
            </div>
            {/* Apple Button */}
            <div className="relative flex items-center justify-center py-[12px] px-[20px] border border-gray-400 rounded-full cursor-pointer transition-all duration-300 hover:border-gray-800">
              <FaApple size={22} className="absolute left-[20px]" />
              <p>Continue with Apple</p>
            </div>
          </div>
        </form>
        <div className="self-center flex gap-x-[3px]">
          <p className="text-sm">I don't have any account?</p>
          <Link href="/signup">
            <p className="underline text-sm">Register Prodigy</p>
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
            <p className="text-blue-300 text-[24px]">Featured Artist</p>
            <p className="text-blue-300 text-[46px]">Low G</p>
            <p className="text-center text-blue-300 text-[17px]">
              Low G is well-known for being flexible to many different genres
              from Pop to Hip-hop. He is also good at mixing US & UK rap style
              with Vietnamese culture, making it interesting to listeners.
            </p>
          </div>
          <div className="flex flex-col items-center w-[60%] gap-y-[10px]">
            <p className="text-blue-300 text-center text-[22px]">
              Prodigy made releasing my music effortlessly smooth - a game
              changer for Indie artist
            </p>
            <p className="text-blue-300 text-[22px]">Low G</p>
          </div>
        </div>
      </div>
    </div>
  );
}
