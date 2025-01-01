import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { TbUpload } from "react-icons/tb";
import { PiNotification } from "react-icons/pi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { useAppSelector } from "@/context/store";
// import assets
import artist from "@/assets/artist2.jpg";
export const DropdownSetting = () => {
  // selector
  const isToggleDropdownMenu = useAppSelector(
    (state) => state.dropdown.menuDropdown.isToggleDropdown
  );
  const isToggleAnimationDropdownMenu = useAppSelector(
    (state) => state.dropdown.menuDropdown.isToggleAnimationDropdown
  );
  return (
    <>
      {isToggleDropdownMenu && (
        <div
          className={`fixed flex flex-col p-[15px] w-[250px] bg-background z-50 left-[86%] rounded-[20px] top-[90px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-transform duration-300 ease-in-out transform scale-0 ${
            isToggleAnimationDropdownMenu
              ? "animate-menu-dropdown-in"
              : "animate-menu-dropdown-out"
          }`}
        >
          {/* Profile */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-[10px]">
            <div className="flex items-center gap-x-[5px]">
              <Image
                src={artist}
                alt="artist"
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold_poppins">GREY D</p>
                <p className="text-[12px] text-gray-800">Artist</p>
              </div>
            </div>
            <p className="text-[12px] px-[10px] py-[5px] text-[#5D0F0F] rounded-full bg-[#F9CAC7] font-semibold_poppins">
              PRO
            </p>
          </div>
          {/* Main Utils */}
          <div className="flex flex-col gap-y-[10px] pt-[15px] pb-[10px] border-b border-gray-300">
            <div className="flex items-center gap-x-[15px] px-[15px] py-[8px] group cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-gray-300">
              <MdOutlineManageAccounts
                size={20}
                className="text-gray-800 group-hover:text-black"
              />
              <p className="text-sm text-gray-800 font-semibold group-hover:text-black">
                Account Settings
              </p>
            </div>
            <div className="flex items-center gap-x-[15px] px-[15px] py-[8px] group cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-gray-300">
              <RxDashboard
                size={18}
                className="text-gray-800 group-hover:text-black"
              />
              <p className="text-sm text-gray-800 font-semibold group-hover:text-black">
                Dashboard
              </p>
            </div>
            <Link
              href="/publish/addtrack"
              className="flex items-center gap-x-[15px] px-[15px] py-[8px] group cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-gray-300"
            >
              <TbUpload
                size={18}
                className="text-gray-800 group-hover:text-black"
              />
              <p className="text-sm text-gray-800 font-semibold group-hover:text-black">
                Upload
              </p>
            </Link>
            <div className="flex items-center gap-x-[15px] px-[15px] py-[8px] group cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-gray-300">
              <PiNotification
                size={18}
                className="text-gray-800 group-hover:text-black"
              />
              <p className="text-sm text-gray-800 font-semibold group-hover:text-black">
                Notification
              </p>
            </div>
            <div className="flex items-center gap-x-[15px] px-[15px] py-[8px] group cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-gray-300">
              <IoHelpCircleOutline
                size={18}
                className="text-gray-800 group-hover:text-black"
              />
              <p className="text-sm text-gray-800 font-semibold group-hover:text-black">
                Help Center
              </p>
            </div>
          </div>
          {/* Other Utils */}
          <div className="flex flex-col gap-y-[10px] pt-[15px]">
            <div className="flex items-center gap-x-[15px] px-[15px] py-[8px] group cursor-pointer transition-all duration-300 rounded-[10px] hover:bg-gray-300">
              <LuLogOut
                size={20}
                className="text-gray-800 group-hover:text-black"
              />
              <p className="text-sm text-gray-800 font-semibold group-hover:text-black">
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
