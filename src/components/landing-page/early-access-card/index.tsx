"use client";
import CustomButton from "@/components/button";
import Image from "next/image";
import React from "react";

const EarlyAccessCard = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  return (
    <div className="max-w-[83rem] min-h-[395px] mx-auto bg-blue rounded-[32px] px-3 py-[43px] md:px-[126px] md:pt-[110px] pb-[150px] relative overflow-hidden mt-[160px] md:mt-[200px]">
      <h1 className="text-white font-semibold text-[32px] md:text-[70px] leading-[38px] md:leading-[80px]">
        This AI Will Not Steal
        <br /> Your Job!
      </h1>
      <p className="text-white text-sm md:text-base 2xl:text-lg font-normal mt-4 md:mt-[45px]">
        nibnab is going to create so many more opportunities for you, that your
        next
        <br className="hidden md:block" /> problem would be “Should I hire
        someone to help me serve this demand?”.
      </p>
      <CustomButton
        text="Get early access"
        onClick={() => {onCTAClick && onCTAClick()}}
        className="absolute right-3 bottom-[30%] md:bottom-[16%] md:right-[124px]"
      />
      <Image
        src="/images/point.png"
        alt="point"
        height={100}
        width={100}
        className="absolute right-[55%] md:right-[350px] bottom-[-100px] md:bottom-[-220px] h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-contain"
      />
      <div className="use-case-bg h-[120%] w-[333px] absolute  bottom-[-50px] top-[-300px] rotate-[-30deg]"></div>
      <div className="use-case-bg h-[120%] w-[333px] absolute  bottom-[-50px] left-[25%] 2xl:left-[20%] top-[-300px] rotate-[-30deg]"></div>
    </div>
  );
};

export default EarlyAccessCard;
