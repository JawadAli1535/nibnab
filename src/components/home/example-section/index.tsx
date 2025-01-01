"use client";
import React from "react";
import { motion } from "framer-motion";
import { initial, whileInView } from "@/util/constants";
import CustomButton from "@/components/button";
import Image from "next/image";
import CircularAnimation from "./circular-animation-section";
const ExampleSection = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  const renderTitle = () => {
    return (
      <>
        <motion.div
          whileInView={whileInView}
          initial={initial}
          viewport={{ once: true }}
          className="font-semibold text-[32px] md:text-[44px] text-blackMain 2xl:text-[64px] leading-[48px] 2xl:leading-[68px] text-center md:text-left"
        >
          <h1>Just a text away</h1>
        </motion.div>
        <motion.div
          whileInView={whileInView}
          initial={initial}
          viewport={{ once: true }}
          className="text-gray  md:text-lg 2xl:text-xl mt-4 text-center md:text-left"
        >
          <p>
            With nibnab, you are just one text away from
            <br className="md:hidden" /> your next opportunity and connection.
          </p>
        </motion.div>
        <motion.div
          whileInView={whileInView}
          initial={initial}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <CustomButton
            onClick={() => {
              if (onCTAClick) onCTAClick();
            }}
            text="Get early access"
            className="mt-8 "
          />
        </motion.div>
      </>
    );
  };

  return (
    <div className="relative z-50 w-[90%] md:w-full flex flex-col-reverse md:flex-row justify-between max-w-[83rem] mx-auto md:min-h-[800px]  items-center mt-[-100px] md:mt-0">
      <div className="w-max">
        <CircularAnimation />
      </div>
      <div className="md:w-1/3">{renderTitle()}</div>
    </div>
  );
};

export default ExampleSection;
