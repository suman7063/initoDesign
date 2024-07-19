"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full  bg-white z-50">
      <div className="max-w-[1024px] mx-auto flex justify-between items-center h-[60px] sm:h-20  px-4">
        <div className="flex items-center">
          {isOpen ? (
            <Image
              src="/assets/close.png"
              alt="Example Image"
              width={30}
              height={10}
              className="cursor-pointer sm:hidden h-8"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Image
              src="/assets/more.png"
              alt="Example Image"
              width={30}
              height={10}
              className="cursor-pointer sm:hidden h-8"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}

          <Image
            src={
              "https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg"
            }
            alt="logo"
            width={105}
            height={40}
            className="cursor-pointer ml-4 sm:ml-0"
          />
        </div>
        {/* that is for mobile */}
        {isOpen && (
          <div className="sm:hidden absolute left-0 top-[60px] flex flex-col bg-white w-full py-4 px-5 text-[#112D35] font-semibold">
            <Link href="/#" className="mb-4 py-2">
              About Us
            </Link>
            <Link href="/#" className="mb-4 py-2">
              Blog
            </Link>
            <Link href="/#" className="mb-4 py-2">
              FAQ
            </Link>
            <Link href="/#" className="mb-4 py-2">
              Contact Us
            </Link>
            <Link href="/#" className="mb-4 py-2">
              Careers
            </Link>
          </div>
        )}
        <div className="flex justify-between items-center text-[#112D35] font-semibold tracking-wide">
          <div className="hidden sm:flex justify-between">
            <Link href="/#">About Us</Link>
            <Link href="/#" className="sm:ml-4 md:ml-6 lg:ml-14">
              Blog
            </Link>
            <Link href="/#" className="sm:ml-4 md:ml-6 lg:ml-14">
              FAQ
            </Link>
            <Link href="/#" className="sm:ml-4 md:ml-6 lg:ml-14">
              Contact Us
            </Link>
            <Link href="/#" className="sm:ml-4 md:ml-6 lg:ml-14">
              Careers
            </Link>
          </div>
          <button className="w-[110px] h-[35px] sm:w-[120px] sm:h-[35px] md:w-[130px] md:h-[40px] rounded-full bg-[#1F94AA] text-white text-[13px] sm:text-sm lg:text-lg cursor-pointer ml-6 tracking-wider">
            Try Inito
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
