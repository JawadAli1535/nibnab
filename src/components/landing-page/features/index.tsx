"use client";
import { features } from "@/util/constants";
import Image from "next/image";
import React, { useState } from "react";

interface FeatCardProp {
  icon: string;
  title: string;
  description: string;
  bg: string;
}

const Features = () => {
  const [sliderMovement, setSliderMovement] = useState(0);

  const renderFeatCard = (item: FeatCardProp, index: number) => {
    return (
      <div key={item.icon} className="w-full">
        <div className={`p-2 rounded-lg bg-${item.bg}/10 mb-4 w-max`}>
          <Image
            src={item.icon}
            alt="icon"
            width={1000}
            height={1000}
            className="h-7 w-7"
          />
        </div>
        <h1 className="text-blackSecondary text-[26px] font-medium">
          {item.title}
        </h1>
        <h2
          dangerouslySetInnerHTML={{ __html: item.description }}
          className="text-gray font-normal mt-6 2xl:text-lg"
        />
      </div>
    );
  };

  const sliderButtons = () => {
    return (
      <div className="ml-auto w-max mr-4 flex md:hidden gap-4 mt-6">
        <button
          onClick={() => {
            setSliderMovement((prev) => (prev === 0 ? prev : prev - 1));
          }}
          className={`py-2 px-4 bg-blue/10 rounded-md`}
          disabled={sliderMovement === 0}
        >
          <Image
            src={"/images/arrow.svg"}
            height={22}
            width={22}
            alt={"arrow"}
            className={`scale-[-1] opacity-${sliderMovement === 0 ? 30 : 100}`}
          />
        </button>
        <button
          onClick={() => {
            setSliderMovement((prev) =>
              prev === features.length - 1 ? prev : prev + 1
            );
          }}
          className={`py-2 px-4 bg-blue/10 rounded-md`}
          disabled={sliderMovement === features.length - 1}
        >
          <Image
            src={"/images/arrow.svg"}
            height={22}
            width={22}
            alt={"arrow"}
            className={`opacity-${
              sliderMovement === features.length - 1 ? 30 : 100
            }`}
          />
        </button>
      </div>
    );
  };

  return (
    <div className="relative z-10 max-w-[83rem] mx-auto pt-[10%]">
      <div className="md:grid grid-cols-3 gap-[87px] hidden px-[2%]">
        {features.map((item) => (
          <div key={item.icon} className="w-full">
            {renderFeatCard(item, 0)}
          </div>
        ))}
      </div>
      <div className="overflow-x-hidden block md:hidden w-full mt-[20%]">
        <div
          className={`flex flex-row w-full content-start`}
          style={{
            transform: `translateX(${-sliderMovement * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {features.map((item, index) => (
            <div key={index} className="my-4 w-full flex flex-shrink-0 px-3">
              {renderFeatCard(item, index)}
            </div>
          ))}
        </div>
        {sliderButtons()}
      </div>
    </div>
  );
};

export default Features;
