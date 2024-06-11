"use client";
import React, { ChangeEvent } from "react"; // Import ChangeEvent from 'react'
import Image from "next/image";
import logo from "../../../../public/icon/logo.jpg";
import SearchInput from "../SearchInput";
import { AiTwotoneHome } from "react-icons/ai"; // Import the FaSearch icon
import { MdGroup } from "react-icons/md";
// import { BsFillBagHeartFill } from "react-icons/bs";
import { BiSolidMessageRounded } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";

const NavBar = () => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // Implement your search logic here
  };

  return (
    <nav className="pt-2  pb-1 shadow-md">
      <div className="max-w-screen-xl  px-28 flex justify-between mx-auto">
        <div className="flex  gap-2">
          <Image
            alt="logo"
            loading="lazy"
            className="w-10  rounded-xl h-10"
            src={logo}
            height={0}
            width={0}
          ></Image>
          <SearchInput placeholder="Search..." onChange={handleSearch} />
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col cursor-pointer items-center relative">
            <AiTwotoneHome size={26} />
            <span className="absolute top-1 right-1 -mt-2 -mr-2 bg-red-600 rounded-full h-5 w-5 text-white flex items-center justify-center text-xs">
              <span className="bg-white rounded-full h-2 w-2"></span>
            </span>

            <span className="font-extralight text-xs">Home</span>
          </div>
          <div className="flex cursor-pointer  flex-col items-center">
            <MdGroup size={26} className="text-gray-500" />
            <span className="font-extralight text-xs">My Network</span>
          </div>
          {/* <div className="flex cursor-pointer  flex-col items-center">
            <BsFillBagHeartFill className="text-gray-500" size={26} />
            <span className="font-extralight text-xs">Jobs</span>
          </div> */}

          <div className="flex cursor-pointer  flex-col items-center">
            <BiSolidMessageRounded className="text-gray-500" size={26} />
            <span className="font-extralight text-xs">Message</span>
          </div>
          <div className="flex cursor-pointer  flex-col items-center">
            <BsFillBellFill className="text-gray-500" size={26} />
            <span className="font-extralight text-xs">Notification</span>
          </div>
          <div className="flex cursor-pointer  flex-col items-center">
            <Image
              loading="lazy"
              className="w-7 h-7 rounded-full"
              src="data:image/jpeg;base64,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"
              alt="Rounded avatar"
              height={0}
              width={0}
            ></Image>
            <span className="font-extralight flex items-center gap-[2px] text-xs">
              Me
              <BiSolidDownArrow className="text-gray-500" size={8} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
