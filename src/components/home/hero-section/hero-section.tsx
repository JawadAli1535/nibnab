"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../../button";
import ChatScreen from "./chat-screen";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { staggeredVariants } from "@/util/variants";
import HeroTitle from "./hero-title";

const texts = [
  "Collaboration",
  "Earning",
  "Learning",
  "Dating",
  "Giving-back",
  "GSD"
];

const HeroSection = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  return (
    <motion.div
      variants={staggeredVariants}
      animate="animate"
      initial="initial"
      className="relative min-h-screen"
    >
      <HeroTitle onCTAClick={onCTAClick} />
      <motion.div
        variants={staggeredVariants}
        className="flex w-[95%] md:w-[84%] mx-auto mt-[38px] z-50 relative h-[400px] md:h-full overflow-hidden"
      >
        <motion.div variants={staggeredVariants}>
          <div className="hero-bg-gradient absolute !opacity-[0.1] h-screen left-0  w-1/2"></div>
          <div className="hero-bg-gradient absolute w-1/2 !opacity-[0.1] !scale-x-[-1] right-0  h-screen  "></div>
        </motion.div>
        <motion.div variants={staggeredVariants}>
          <div className="hero-bg-gradient absolute top-[14px] md:top-[47px] left-[14px] md:left-[49px] !opacity-[0.3] h-screen w-1/2"></div>
          <div className="hero-bg-gradient absolute top-[14px] md:top-[47px] right-[14px] md:right-[49px] !scale-x-[-1] !opacity-[0.3] h-screen w-1/2"></div>
        </motion.div>
        <ChatScreen />
      </motion.div>
      <Image
        src="/images/curve.svg"
        alt="curve"
        width={1000}
        height={1000}
        className="absolute bottom-0 md:-bottom-[120px] 2xl:-bottom-[250px] 3xl:bottom-[-50%] z-50 left-0 right-0 w-full"
      />
    </motion.div>
  );
};

export default HeroSection;
