"use client";
import Slider from "react-slick";
import Image from "next/image";
const PredictAndConfirm = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
  };
  return (
    <div className="w-full box-border sm:max-w-[1024px] bg-[#B4E4F2] lg:bg-[#E1F4FA] lg:rounded-[20px] mx-auto mt-16 sm:py-8 lg:p-8 ">
      {/* Start Wrap PredictAndConfirm Part*/}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left side of PredictAndConfirm */}
        <div className="lg:bg-[#B4E4F2] rounded-[20px] w-full pl-3 sm:pl-0 sm:w-[400px] h-[445px] sm:mx-auto lg:mx-0">
          <Slider {...settings}>
            <Image
              src="https://cdn.inito.com/inito_website/ovulation_confirmed.png"
              alt="hero"
              width={400}
              height={445}
              className="w-full sm:w-[370px] h-[445px] sm:ml-2"
            />

            <Image
              src="https://cdn.inito.com/inito_website/hormone_chart.png"
              alt="hero_2"
              width={400}
              height={445}
              className="w-full sm:w-[370px] h-[445px] sm:ml-2"
            />

            <Image
              src="https://cdn.inito.com/inito_website/cycle_day_view.png"
              alt="hero_3"
              width={400}
              height={445}
              className="w-full sm:w-[370px] h-[445px] sm:ml-2"
            />

            {/* Add more slides as needed */}
          </Slider>
        </div>
        {/* Right side of PredictAndConfirm */}
        <div className="m-4 sm:m-12 lg:m-0 lg:ml-[108px]">
          <h1 className="text-2xl sm:text-4xl text-[#112D35] font-bold  tracking-wider">
            Predict and confirm your ovulation with{" "}
            <span className="image_as_underline">actual</span> data
          </h1>
          <p className="sm:text-xl lg:text-sm text-[#112D35] font-medium  tracking-widest leading-7  mt-8">
            Unlike most ovulation tests that only give you `yes/no` results,
            Inito provides <strong>real numerical values</strong> of your
            fertility hormones.
            <br />
            <br />
            If you have irregular cycles, actual data is necessary to know{" "}
            <em>exactly</em> when you ovulate, and when is the best time to try
            to conceive.
          </p>
          <div className="flex w-full justify-center lg:justify-start">
            <button className="w-[70%] sm:w-[200px] lg:w-[248px]  h-10  lg:h-[50px] rounded-full bg-[#1F94AA] text-white text-[13px] sm:text-xs lg:text-sm cursor-pointer tracking-wider font-semibold mt-10">
              HOW DOES INITO WORK?
            </button>
          </div>
        </div>
      </div>
      {/* end Wrap PredictAndConfirm Part*/}
      {/* Start Wrap Never Miss Part*/}
      <div className="bg-white lg:bg-transparent p-4  mt-0 pt-10 lg:pt-0 lg:p-0 sm:p-[50px] lg:flex lg:mt-24">
        {/* Left side of Never Miss */}
        <div>
          <h1 className="text-4xl text-[#112D35] font-bold  tracking-wider">
            Never miss
            <span className="an-egg">
              <Image
                className="text-image"
                src="https://cdn.inito.com/inito_website/an_egg.png"
                alt="egg"
                width={300}
                height={300}
              />
              a day
              <Image
                className="strike-through"
                src="https://cdn.inito.com/inito_website/strike_through.png"
                alt="strike"
                width={30}
                height={2}
              />
            </span>
            again with Inito
          </h1>
          <p className="text-sm text-[#112D35] font-medium  tracking-widest leading-5  mt-4">
            Inito tracks up to 6 fertile days and confirms ovulation by
            measuring all 4 hormones in just 10 minutes:
          </p>
          <ul>
            <li className="flex text-sm text-[#112D35] mt-8">
              <Image
                src="https://cdn.inito.com/inito_website/tick_1.png"
                alt="green"
                width={20}
                height={20}
                className="mr-2 "
              />
              Estrogen, which rises 3-4 days before ovulation
            </li>
            <li className="flex text-sm text-[#112D35] mt-2">
              <Image
                src="https://cdn.inito.com/inito_website/tick_2.png"
                alt="green"
                width={20}
                height={20}
                className="mr-2"
              />
              LH, which surges 24-36 hours before ovulation
            </li>
            <li className="flex text-sm text-[#112D35] mt-2">
              <Image
                src="https://cdn.inito.com/inito_website/tick_1.png"
                alt="green"
                width={20}
                height={20}
                className="mr-2"
              />{" "}
              PdG, which rises after ovulation
            </li>
            <li className="flex text-sm text-[#112D35] mt-2">
              <Image
                src="https://cdn.inito.com/inito_website/tick_2.png"
                alt="green"
                width={20}
                height={20}
                className="mr-2"
              />
              FSH, to track follicle growth
            </li>
          </ul>
        </div>
        <Image
          src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png"
          alt="never_miss"
          width={600}
          height={305}
          className="w-full lg:w-[544px] h-[305px] ml-2 "
        />
      </div>
      {/* end Wrap Never Miss Part*/}
    </div>
  );
};
export default PredictAndConfirm;
