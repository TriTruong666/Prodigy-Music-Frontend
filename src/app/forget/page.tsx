"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import components
import { EmailSubmit } from "@/components/public/forget/EmailSubmit";
import { OTPSubmit } from "@/components/public/forget/OTPSubmit";
import { ResetPassword } from "@/components/public/forget/ResetPassword";
// import assets
import logo from "@/assets/prodigy-logo-light.png";
import featuredImage from "@/assets/featured-3.jpg";
export default function Forget() {
  const [forgetProcess, setForgetProcess] = useState<number>(1);
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
        {forgetProcess === 1 && (
          <EmailSubmit setForgetProcess={setForgetProcess} />
        )}
        {forgetProcess === 2 && (
          <OTPSubmit setForgetProcess={setForgetProcess} />
        )}
        {forgetProcess === 3 && (
          <ResetPassword setForgetProcess={setForgetProcess} />
        )}
        <div className="self-center flex gap-x-[3px]">
          <p className="text-sm">You just remember it?</p>
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
            <p className="text-green-300 text-[24px]">Featured Artist</p>
            <p className="text-green-300 text-[46px]">Chi Pu</p>
            <p className="text-center text-green-300 text-[17px]">
              Officially debuted as a singer in 2017, Chi Pu has released more
              than 20 singles and EPs during her musical career. She is highly
              praised for her records, stage performance and conceptual music
              videos.
            </p>
          </div>
          <div className="flex flex-col items-center w-[80%] gap-y-[10px]">
            <p className="text-green-300 text-center text-[22px]">
              Prodigy redefines how we experience music—it's like having every
              beat, every lyric, perfectly tailored to your soul.
            </p>
            <p className="text-green-300 text-[22px]">Chi Pu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
