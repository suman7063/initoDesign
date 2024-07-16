"use client"
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIconSvg from "../icons/MenuIconSvg";
import CloseIconSvg from "../icons/CloseIconSvg";

const TopHeader = () => {
const[isOpen,setIsOpen]=useState(false)
  return (
    <header className="fixed top-0 left-0 w-full  bg-white  px-4 lg:px-0 z-50">
      <div className="max-w-[1024px] mx-auto flex justify-between items-center h-20 ">
      <MenuIconSvg />
        {/* <div className="flex items-center">
          {isOpen ?<CloseIconSvg/> :<MenuIconSvg />}
         
        </div> */}
 <Image
            src={
              "https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg"
            }
            alt="logo"
            width={105}
            height={40}
            className="cursor-pointer ml-4 sm:ml-0"
          />
        <div className="flex justify-between items-center text-[#112D35] font-semibold">
          <div className="hidden sm:flex justify-between ">
            <Link href="/#">About Us</Link>
            <Link href="/#" className="ml-6">
              Blog
            </Link>
            <Link href="/#" className="ml-6">
              FAQ
            </Link>
            <Link href="/#" className="ml-6">
              Contact Us
            </Link>
            <Link href="/#" className="ml-6">
              Careers
            </Link>
          </div>
          <button className="w-[120px] h-[35px] md:w-[130px] md:h-[40px] rounded-full bg-[#1F94AA] text-white cursor-pointer ml-6">
            Try Inito
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
