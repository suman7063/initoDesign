"use client";
import React, { useState } from "react";
const accordionData = [
  {
    _id: "accordion_1",
    title: "What results does Inito give?",
    description:
      " Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 4 hormones.",
  },
  {
    _id: "accordion_2",
    title: "Will Inito work if I have PCOS?",
    description:
      "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.",
  },
  {
    _id: "accordion_3",
    title: "Will Inito work if I have PCOS?",
    description:
      "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.",
  },
  {
    _id: "accordion_4",
    title: "How do I make payments using paypal? How does it work?",
    description:
      "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.",
  },
  {
    _id: "accordion_5",
    title: "How much do deliveries cost?",
    description:
      "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.",
  },
];
interface accordion {
  _id: any;
  title: string;
  description: string;
}
const AskQuestion = () => {
  const [accordionShow, setAccordionShow] = useState({
    accordion_1: false,
    accordion_2: false,
    accordion_3: false,
    accordion_4: false,
    accordion_5: false,
  });
  const toggleAccordion = (accordionKey: string) => {
    setAccordionShow((prevState: any) => {
      const updatedAccordionShow = { ...prevState };
      // Set all accordions to false except the clicked one
      Object.keys(prevState).forEach((key) => {
        updatedAccordionShow[key] =
          key === accordionKey ? !prevState[key] : false;
      });
      return updatedAccordionShow;
    });
  };

  return (
    <div className="text-center max-w-[1024px] md:m-auto md:w-[90%]">
      {/* <h1 className="text-2xl text-center sm:text-left sm:text-4xl text-[#112D35] font-bold  tracking-wider">
      Your top questions answered
            </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {accordionData.map((item: accordion) => {
          return (
            <div key={item._id} className="mx-8 md:mx-0">
              <button
                type="button"
                className="w-full py-4  rtl:text-right border-bgap-3 bg-[#F7F7FD]  px-4 rounded-3xl"
                onClick={() => toggleAccordion(item._id)}>
                <div>
                  <div className="text-xl text-[#112D35] font-bold  tracking-widest leading-7 text-left flex justify-between">
                    <span>{item.title}</span>

                    {
                      // @ts-ignore
                      accordionShow[item._id] ? (
                        <span className="text-3xl">-</span>
                      ) : (
                        <span className="text-3xl">+</span>
                      )
                    }
                  </div>

                  {
                    // @ts-ignore
                    accordionShow[item._id] && (
                      <div className="text-left bg-[#F7F7FD]">
                        <p className="sm:text-xl lg:text-lg text-[#112D35] font-medium  tracking-widest leading-7">
                          {item.description}
                        </p>
                      </div>
                    )
                  }
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AskQuestion;
