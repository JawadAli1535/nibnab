import React from "react";
import CustomButton from "../button";
import HeroDynamicSection from "./hero-dynamic-section";
import { BusinessMatchData } from "@/util/types";
import { useRouter } from "next/navigation";

const Hero = (businessMatch: BusinessMatchData) => {
  const navigate = useRouter();

  const renderHeroText = () => {
    return (
      <div className="pt-[56px] md:pt-0 md:h-screen w-max flex flex-col items-center justify-center">
        <div className="text-center font-semibold text-[45px] md:text-[74px] leading-[55px] md:leading-[76px]">
          <h1 className="text-blackMain">Sell on</h1>
          <h1 className="text-blue">Auto-Pilot</h1>
        </div>
        <div className="flex mt-6 md:mt-8 flex-col items-start gap-5 md:gap-4">
          {[
            "Describe your customer",
            "Give as url to your product",
            "Match’s AI does the rest",
          ].map((item, i) => {
            return (
              <div
                className="text-gray font-medium text-[18px] flex items-center gap-4"
                key={item}
              >
                <div className="bg-white border border-coolGray rounded-full h-12 w-12 flex items-center justify-center">
                  {i + 1}
                </div>{" "}
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <CustomButton
          text="Sell on Autopilot"
          className="mt-10 md:mt-12"
          onClick={() => {
            navigate.push(businessMatch.ctaLinkUrl);
          }}
        />
      </div>
    );
  };
  return (
    <div className="bg-blueFade font-rubik">
      <div className="max-w-[83rem] flex flex-col md:flex-row justify-between min-h-screen  items-center mx-auto">
        {renderHeroText()}
        <HeroDynamicSection {...businessMatch} />
      </div>
    </div>
  );
};

export default Hero;
