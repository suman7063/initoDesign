"use client";
import React from "react";
import Image from "next/image";
const TopCover = () => {
  return (
    <div className=" relative top-[60px] sm:top-[80px] w-full sm:h-[600px]  lg:h-[850px] xl:h-[900px] 2xl:h-[1575px]  bg-cover bg-no-repeat z-10  sm:bg-transparent sm:bg-[url('https://cdn.inito.com/inito_website/v2_main_hero_background.png')] backgroundPosition">
      <div className="w-full box-border sm:max-w-[1024px] sm:mx-auto  sm:flex justify-between bg-[#C4F2FF] sm:bg-transparent sm:px-4 relative">
        <div className="sm:w-1/2">
          <div className="w-full px-4 pt-16 sm:pt-8 lg:pt-10 2xl:pt-32">
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
              <p className="text-black  ml-1 small_text sm:text-xs">
                TRUSTED BY 20,000+ COUPLES
              </p>
            </div>
            <h1 className="text-[5vw] sm:text-[30px] lg:text-[48px]  xl:text-[52px] text-black font-bold mt-1">
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
          <div className="flex justify-center w-full mt-[-20px] sm:mt-4 sm:block absolute bottom-[-20px] sm:static">
            <button className="w-[70%] mx-auto sm:w-[200px] lg:w-[248px]  h-10  lg:h-[50px] rounded-full bg-[#1F94AA] text-white text-[13px] sm:text-xs lg:text-[16px] cursor-pointer tracking-wider font-semibold">
              HOW DOES INITO WORK?
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
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
          className="hidden sm:block large-img"
        />
        </div>
      </div>

      {/* <div className="sm:max-w-[1024px] mx-auto  sm:flex justify-between bg-[#C4F2FF] sm:bg-transparent px-4">
        <div className="w-full  sm:max-w-[300px] md:max-w-[360px] pt-8">
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
            <p className="text-black  ml-1 small_text sm:text-xs">
              TRUSTED BY 20,000+ COUPLES
            </p>
          </div>
          <h1 className="text-[5vw] sm:text-[30px] lg:text-[35px] text-black font-bold mt-1">
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
        <div className="flex justify-center w-full mt-[-20px] sm:mt-4 sm:block absolute bottom-[-20px] sm:static">
        <button className="w-[70%] mx-auto sm:w-[200px] lg:w-[248px]  h-10  lg:h-[50px] rounded-full bg-[#1F94AA] text-white text-[13px] sm:text-xs lg:text-[16px] cursor-pointer tracking-wider font-semibold">
          HOW DOES INITO WORK?
        </button>
      </div>  
       
      </div> */}
    </div>
  );
};

export default TopCover;
