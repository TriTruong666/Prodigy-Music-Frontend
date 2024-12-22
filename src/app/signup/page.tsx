"use client";
import Image from "next/image";
import Link from "next/link";
// import components
import { SignupForm } from "@/components/public/signup/SignupForm";
import { ChooseRole } from "@/components/public/signup/ChooseRole";
import { WelcomeSignup } from "@/components/public/signup/WelcomeSignup";
// import assets
import logo from "@/assets/prodigy-logo-light.png";
import featuredImage from "@/assets/featured-1.jpg";
import { useState } from "react";

export default function Signup() {
  const [signupProcess, setSignupProcess] = useState<number>(1);
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
        {signupProcess === 1 && (
          <WelcomeSignup setSignupProcess={setSignupProcess} />
        )}
        {signupProcess === 2 && (
          <ChooseRole setSignupProcess={setSignupProcess} />
        )}
        {signupProcess === 3 && (
          <SignupForm setSignupProcess={setSignupProcess} />
        )}
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
        <div className="absolute z-10 inset-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-between items-center py-[80px]">
          <div className="flex flex-col items-center w-[70%] gap-y-[10px]">
            <p className="text-red-400 text-[24px]">Featured Artist</p>
            <p className="text-red-400 text-[46px]">Son Tung M-TP</p>
            <p className="text-center text-red-400 text-[17px]">
              Famous for his profound influence on Vietnamese music, he was
              dubbed the "Prince of V-pop" by the World Music Awards and
              BroadwayWorld.
            </p>
          </div>
          <div className="flex flex-col items-center w-[60%] gap-y-[10px]">
            <p className="text-red-400 text-center text-[22px]">
              I'll be recommending Prodigy to every artists that comes to my
              music company.
            </p>
            <p className="text-red-400 text-[22px]">Son Tung M-TP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
