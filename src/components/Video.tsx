"use client"
const videoData = [
  {
    id: 1,
    link: "https://cdn.inito.com/inito_website/step1.mp4",
    dis: "Dip the test strip in urine for 15 seconds",
  },
  {
    id: 2,
    link: "https://cdn.inito.com/inito_website/step2.mp4",
    dis: "Dip the test strip in urine for 15 seconds",
  },
  {
    id: 3,
    link: "https://cdn.inito.com/inito_website/step3.mp4",
    dis: "Dip the test strip in urine for 15 seconds",
  },
  {
    id: 4,
    link: "https://cdn.inito.com/inito_website/step4.mp4",
    dis: "Dip the test strip in urine for 15 seconds",
  },
];
const Video = () => {
  return (
    <div className="w-full box-border max-w-[1024px] mx-auto px-4 sm:px-0 py-8 md:flex justify-between items-center">
      {/* Left part */}
      <div className="w-full md:w-[350px] lg:w-[400px] text-center md:text-left">
        <h1 className="text-2xl mx-auto lg:text-4xl text-[#112D35] font-bold  tracking-wider w-[300px]  md:w-[350px]">
          A<span className="image_as_underline mx-2">fertility lab</span> at your
          fingertips
        </h1>
        <p className="sm:text-xl lg:text-sm text-[#112D35] font-medium  tracking-widest leading-7  mt-4 mb-8 md:mb-0">
          Easy-to-read fertility diagnostic results directly on your iPhone*, in
          just 10 minutes.
          </p>
          <div className=" hidden md:flex w-full justify-center lg:justify-start">
            <button className="w-[70%] sm:w-[200px] lg:w-[248px]  h-10  lg:h-[50px] rounded-full bg-[#1F94AA] text-white text-[13px] sm:text-xs lg:text-sm cursor-pointer tracking-wider font-semibold mt-10">
              HOW DOES INITO WORK?
            </button>
          </div>
        
        <p className="hidden md:block text-xs text-[#A0ABAE] tracking-wider leading-7  mt-4">
          * The Inito Fertility Monitor currently supports iPhone 7 and up.
          Android phones are not supported at the moment.
        </p>
      </div>
      {/* Right part */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        {videoData.map((data) => {
          return (
            <div className="rounded-3xl w-[80%] mx-auto md:w-[242px] relative" key={data.id}>
              {/* <video
                className="rounded-3xl w-[80%] mx-auto"
                width={242}
                height={242}
                // @ts-ignore
                autoPlay="autoplay"
                // @ts-ignore
                loop="loop"
                // @ts-ignore
                muted={true}
                // @ts-ignore
                onContextMenu={false}
                alt={`Video: Dip test strip in urine ${data.id}`}
                // @ts-ignore
                playsInline={true}
                src={data.link}
              /> */}
              <video
  className="rounded-3xl w-[80%] mx-auto"
  width={242}
  height={242}
  autoPlay
  loop
  muted
  onContextMenu={(e) => e.preventDefault()}  // Prevent the context menu from appearing
  playsInline
  src={data.link}
  aria-label={`Video: Dip test strip in urine ${data.id}`}
  title={`Video: Dip test strip in urine ${data.id}`}
/>
              <div className="md:hidden bg-[#BDE0E6] w-12 h-12 rounded-full flex justify-center items-center absolute top-[-24px] left-[24px]">
                  {data.id}
                </div>
              <div className="flex items-center justify-center my-4">
                <div className="hidden md:flex w-[60px] h-[60px] bg-[#EEEEF5] justify-center items-center text-xl text-black rounded-full">
                  {data.id}
                </div>
                <h1 className="sm:text-xl lg:text-sm text-[#112D35] w-[220px] md:w-[162px] ml-4 font-medium text-center md:text-left">
                  {data.dis}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Video;
