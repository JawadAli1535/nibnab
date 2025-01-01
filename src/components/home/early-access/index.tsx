"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Sparkle from "../example-section/circular-animation-section/sparkle";
import TitleSection from "../timeline/title";
import CustomButton from "@/components/button";
import { initial, whileInView } from "@/util/constants";
import { trySubscribe } from "@/util/maillist";
import EarlyAccessInput from "./early-access-input";
import { ScrollAnchor } from "@/components/util/scroll-anchor";

const BORDER_COLORS = {
  valid: "green-600",
  invalid: "red-900",
  default: "gray-50",
};

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const EarlyAccess = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="md:min-h-screen relative  my-[126px] ms:my-0 ">
      <Image
        src="/images/curve.svg"
        alt="curve"
        width={1000}
        height={1000}
        className="absolute  scale-[-1] -top-1/4 2xl:-top-[30%]   -z-10  left-0 right-0 w-full"
      />
      <div className="text-amber absolute top-[15%] md:top-[45%] left-[5%] md:left-[10%] scale-[0.6] md:scale-1">
        <Sparkle />
      </div>
      <div className="text-amber absolute top-[105%] scale-[0.6] md:scale-1 md:top-[58%] right-[20%] md:right-[10%]">
        <Sparkle />
      </div>
      <div className="text-redMain absolute top-[10%] md:top-[35%] left-[80%] md:left-[39%] scale-[0.8] md:scale-1">
        <Sparkle />
      </div>
      <div className="text-blue absolute bottom-[-20%] md:bottom-[15%] left-[30%] md:left-[15%] scale-[0.6]">
        <Sparkle />
      </div>
      <div className="text-blue absolute top-[5%] right-[50%] md:top-[45%] md:right-[15%] scale-[0.6]">
        <Sparkle />
      </div>
      <div className="text-redMain hidden md:block absolute bottom-[5%] right-[20%] scale-[0.8]">
        <Sparkle />
      </div>

      <div
        className="max-w-[83rem] mx-auto relative h-full pt-[28%] 2xl:pt-[25%] flex flex-col items-center"
      >
        <TitleSection
          title="Get early access!"
          description="Join us and be among the first people to experience the future of connections."
          descriptionSmallerScreens="Join us and be among the first people to<br/> experience the future of connections."
          customClassName="text-center"
        />

        <ScrollAnchor ref={ref} />

        <EarlyAccessInput />
      </div>
    </div>
  );
});

export default EarlyAccess;
