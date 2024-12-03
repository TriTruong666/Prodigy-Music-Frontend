"use client";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import Link from "next/link";
// import assets
import logo from "@/assets/prodigy-logo-primary.png";
import image from "@/assets/pexels-qhung999-27200179.jpg";
export default function PublishConfirm() {
  return (
    <div className="font-jost w-screen overflow-hidden max-h-screen h-screen bg-homepage_foreground">
      <div className="flex items-center justify-between py-7 px-16">
        <div className="flex items-center gap-x-[40px]">
          <Image
            className="object-cover md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]"
            alt="logo"
            src={logo}
            quality={50}
          />
          <p className="text-[24px] text-homepage_background tracking-wider font-normal">
            You're almost there
          </p>
        </div>
        <IconContext.Provider value={{ size: "20px", color: "#791049" }}>
          <Link href="/">
            <div className="flex items-center gap-x-[10px]">
              <p className="text-homepage_background">Close</p>
              <IoCloseOutline />
            </div>
          </Link>
        </IconContext.Provider>
      </div>
      <div className="flex text-homepage_background items-center justify-around px-[250px] my-[100px]">
        <div className="flex flex-col gap-y-[10px]">
          <IconContext.Provider value={{ size: "20px", color: "#791049" }}>
            <Link href="/" className="flex gap-x-2 items-center">
              <IoReturnDownBackSharp />
              <p className="text-[18px] underline">Back</p>
            </Link>
          </IconContext.Provider>
          <h2 className="text-[38px]">Ready for the world to hear it?</h2>
          <p className="text-[20px] font-light">
            Last click to send single to the stories.
          </p>
          <button className="w-fit py-[12px] px-[40px] bg-homepage_background text-background rounded-full font-semibold text-[15px] mt-[15px]">
            Submit release
          </button>
        </div>
        <div className="flex flex-col px-[30px] bg-homepage_background rounded-[25px] gap-y-[12px]">
          <Image
            src={image}
            width={300}
            height={300}
            quality={50}
            alt="Track"
            className="rounded-[20px] mt-[30px]"
          />
          <p className="text-background text-[14px]">July 30, 2023 - Indie</p>
          <p className="text-background font-semibold text-[18px]">
            Binh Yen of Saigon
          </p>
          <p className="text-background mb-[30px] text-[14px]">
            Hoang Tu Indie
          </p>
        </div>
      </div>
      <div className="flex px-[250px] justify-around mt-[160px]">
        <div>
          <p className="text-homepage_background">
            80% of all the music never gets released, lying unheard and
            undiscovered.
          </p>
          <p className="text-homepage_background">
            Prodigy is here to change it forever.
          </p>
        </div>
        <div className="w-[325px]"></div>
      </div>
    </div>
  );
}
