import Image from "next/image";
const TrackEveryThing = () => {
  return (
    <div className="w-full box-border  bg-[#E1F4FA] mt-64 p-4 sm:p-8">
      {/* Top part of TrackEveryThing */}
      <div className="lg:w-[960px] shadow-xl bg-white p-4 lg:p-10 rounded-3xl mx-auto mt-[-200px] relative">
        <h6 className="text-sm lg:text-lg text-[#1F94AA] font-semibold">
          Why measure the PdG? (urine metabolite of progesterone)?
        </h6>
        {/* <Image
          src="https://cdn.inito.com/inito_website/blue_calendar.png"
          alt="calendar"
          width={120}
          height={120}
          className="absolute right-[-60px] top-[-60px]"
        /> */}
        <p className="text-sm lg:text-lg text-[#112D35] font-medium  tracking-widest leading-7  mt-8">
          <strong>Anovulation</strong> (having a menstrual cycle with no egg) is
          actually a common occurrence, affecting 1 in 10 women*.
          <br />
          <br />
          If ovulation occurs, the levels of Progesterone and its urine
          metabolite PdG rise after a few days and stay elevated. Sustained,
          elevated PdG levels after peak fertility indicate a successful
          ovulation.
          <br />
          <br />
        </p>
        <div className="doctor-review-source">
          <p className="text-xs text-[#A0ABAE]">
            * Source: National Institutes of Health
          </p>
          <p className="text-lg text-[#112D35] font-bold mt-4">
            Inito is all that you need to give you the best chance of conception
          </p>

          <div className="flex mt-4">
            <Image
              src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg"
              alt="dr"
              width={65}
              height={65}
            />
            <div className="mt-2 ml-4">
              <strong className="text-sm lg:text-lg text-[#112D35] font-bold">
                Dr. Rachel Wagner
              </strong>
              <br />
              <em className="text-[#aaafb0] text-sm lg:text-lg mt-2">MD</em>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* middle part of TrackEveryThing */}
      <h1 className="text-center lg:text-left text-2xl sm:text-4xl text-[#112D35] font-bold  tracking-wider w-full px-4 sm:px-0 sm:w-[470px] mx-auto my-16">
        Why Inito is the smarter way to get
        <span className="image_as_underline mx-2">pregnant</span>
      </h1>
      <div className="lg:w-[960px] shadow-xl bg-white rounded-3xl mx-auto lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="p-4 sm:p-[25px] lg:p-0 lg:ml-[40px] lg:mr-[20px] lg:my-[20px]  ">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl text-[#112D35] font-bold  tracking-wider">
              Get charts and actual
              <span className="image_as_underline mx-2">values</span> of your
              hormones
            </h1>
            <p className="text-sm lg:text-lg text-[#112D35] font-medium  tracking-widest leading-7  mt-8">
              Most ovulation kits have a set value or a threshold, making them
              likely to give a false read if your hormones fall outside the
              average range.
              <br />
              <br />
              Inito measures real values of your hormones to personalize results
              to the unique you.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png"
            alt="chart"
            width={500}
            height={500}
            className="w-full lg:w-[500px] lg:rounded-r-3xl"
          />
        </div>
      </div>
      {/* last Part Of TrackEveryThing */}
      <div className="lg:w-[960px] shadow-xl bg-white rounded-3xl mx-auto flex flex-col-reverse lg:flex-row mt-16 px-4 sm:px-8 pt-8 items-end">
        {/* Left side of last */}
        <div className="w-full flex justify-center pl-4 lg:block lg:pl-0 lg:w-[750px] h-[445px]">
            <Image src="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg" alt="hero" width={400} height={445} className=" w-[370px] h-[445px] sm:mx-auto lg:ml-2 "/>
        </div>
        {/* Right side of last */}
        <div className="sm:ml-[20px] md:ml-[30px] lg:ml-[54px]">
          <h1 className="text-2xl sm:text-4xl text-[#112D35] font-bold  tracking-wider">
            Inito tracks everything so you don’t have to
          </h1>
          <p className="text-sm lg:text-lg text-[#112D35] font-medium  tracking-widest leading-7  mt-8">
            The Inito Fertility Monitor comes with a free easy-to-use App, so
            you can track your fertile days with ease and know exactly when you
            ovulate.
          </p>

          <ul className="list-disc  text-sm lg:text-lg text-[#112D35] font-medium mt-4">
            Our App notifies you for everything:
            <li className="mt-2 ml-4 sm:pl-2">Your fertility levels</li>
            <li className="mt-1 ml-4 sm:pl-2">When to test on the right days</li>
            <li className="mt-1 ml-4 sm:pl-2">When you’ve successfully ovulated</li>
            <li className="mt-1 ml-4 sm:pl-2">And when to roll into bed!</li>
          </ul>
          <div className="flex w-full justify-center lg:justify-start">
          <button className="w-[70%] sm:w-[200px] lg:w-[248px]  h-10  lg:h-[50px] rounded-full bg-[#1F94AA] text-white text-[13px] sm:text-xs lg:text-sm cursor-pointer tracking-wider font-semibold mt-6 mb-8">
            Get the Inito Kit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrackEveryThing;
