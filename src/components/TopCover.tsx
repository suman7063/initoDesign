"use client";
import React from "react";
import Image from "next/image";
const TopCover = () => {
  return (
    <div
      className=" relative top-[60px] sm:top-[80px] w-full sm:h-[550px] md:h-[850px] lg:h-[850px] xl:h-[975px]  bg-cover bg-no-repeat z-10  sm:bg-transparent sm:bg-[url('https://cdn.inito.com/inito_website/v2_main_hero_background.png')]"
      style={{
        backgroundPositionY: "-100px",
      }}>
      <div className="sm:max-w-[1024px] mx-auto  md:flex-row justify-between bg-[#C4F2FF] sm:bg-transparent">
        <div className="w-full md:w-1/2 px-4 pt-8">
          <div className="flex items-center">
            <div className="w-16 sm:w-24 flex justify-between">
              {Array.from({ length: 5 }, (_, i) => (
                <Image
                  src="https://cdn.inito.com/inito_website/star.png"
                  alt="star"
                  width={10}
                  height={10}
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
              ))}
            </div>
            <p className="text-black ml-1 small_text">
              TRUSTED BY 20,000+ COUPLES
            </p>
          </div>
          <h1 className="text-[5vw] sm:text-[28px] lg:text-[35px] text-black font-bold mt-1">
            Track your fertility hormones at home, in 10 minutes
          </h1>
          <h6 className="text-black mt-4 tracking-wide midium_text">
            Get accurate results of{" "}
            <strong>
              Estrogen, LH, PdG (urine metabolite of progesterone) and FSH
            </strong>{" "}
            with Inito, the all-in-one fertility monitor.
          </h6>
        </div>
        <Image
          className="w-[100vw] max-h-[55vh]  sm:hidden"
          src="https://cdn.inito.com/inito_website/v2_main_hero_mobile.png"
          alt="mob-hero"
          width={750}
          height={300}
        />
        <Image
          src="https://cdn.inito.com/inito_website/v2_main_hero_desktop.png"
          alt="hero"
          width={750}
          height={300}
          className="hidden sm:block absolute md:right-[0px] xl:right-[-80px]"
        />
      </div>
      <div className="flex justify-center w-full mt-[-20px]">
        <button className="w-[70%] mx-auto h-10 rounded-full bg-[#1F94AA] text-white text-[13px] sm:text-sm cursor-pointer tracking-wider font-semibold">
          HOW DOES INITO WORK?
        </button>
      </div>

      
    </div>
  );
};

export default TopCover;
