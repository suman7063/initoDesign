"use client";
import Slider from "react-slick";
import Image from "next/image";
const ReviewfeedSilder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
  };
  return (
    <div className="box-border w-[90%] lg:w-[1024px] mx-auto px-4 lg:px-0 py-8 md:flex justify-between items-center">

        <div className="bg-[#F7F7FD] p-4 md:p-8 rounded-3xl">
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
          <p className="sm:text-xl lg:text-lg text-[#112D35] font-medium  tracking-widest leading-7  mt-8">
            I have PCOS and have been on letrozole and using LH tests to time
            intercourse. I was hesitant to buy this because there are so many
            different things but I liked the added hormones it tracks. I just
            used it with my last cycle and it was so great!
          </p>
        </div>

    </div>
  );
};
export default ReviewfeedSilder;
