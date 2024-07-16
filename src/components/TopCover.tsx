import React from "react";
import Image from "next/image";
const TopCover = () => {
  return (
    <div
    className="w-full h-[500px] sm:h-[550px] md:h-[750px] lg:h-[850px] xl:h-[975px] bg-cover bg-no-repeat z-10"
    style={{
        backgroundImage:
            "url('https://cdn.inito.com/inito_website/v2_main_hero_background.png')",
            backgroundPositionY:"-120px"
    }}
>
    {/* 778,1024,1280,1536 */}
    {/* <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row justify-between px-4 md:px-0">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <form className="w-full"></form>
        </div>
        <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] mt-4 md:mt-0">
            <Image
                src="https://cdn.inito.com/inito_website/v2_main_hero_desktop.png"
                alt="hero"
                layout="fill"
                objectFit="contain"
            />
        </div>
    </div> */}
</div>
  );
};

export default TopCover;
