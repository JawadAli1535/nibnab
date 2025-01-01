"use client";
import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { staggeredVariants } from "@/util/variants";
import Image from "next/image";
import CustomButton from "@/components/button";
const texts = [
  "Connections",
  "Collaboration",
  "Earning",
  "Learning",
  "Dating",
  "Giving-back",
  "GSD"
];
const HeroTitle = ({
  onCTAClick,
  hideLogo,
}: {
  onCTAClick?: () => void;
  hideLogo?: boolean;
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          if ([1, 3].includes(textIndex.get())) {
            setSelectedColor("blue");
          }
          if ([0, 2, 4, 6].includes(textIndex.get())) {
            setSelectedColor("redMain");
          }
          if ([5].includes(textIndex.get())) {
            setSelectedColor("amber");
          }
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, textIndex, updatedThisRound]);

  const renderTitle = () => {
    return (
      <motion.div className="overflow-hidden">
        <motion.div
          variants={staggeredVariants}
          className="flex items-center flex-col z-10 relative "
        >
          {!hideLogo && (
            <motion.div variants={staggeredVariants}>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={189}
                height={41}
                className="h-8 md:h-[35px] 2xl:h-[41px] 2xl:w-[189px] object-contain mb-7 2xl:mb-9 mt-[90px] 2xl:mt-[120px]"
              />
            </motion.div>
          )}
          <motion.h1
            variants={staggeredVariants}
            className="font-semibold text-[45px] md:text-[74px] text-blackMain leading-[52px] md:leading-[78px]   text-center"
          >
            <span className={`text-${selectedColor}`}>
              {" "}
              <motion.span>{displayText}</motion.span>
            </span>
            <br />
            in the Age of AI
          </motion.h1>
          <motion.p
            variants={staggeredVariants}
            className="text-gray  md:text-lg 2xl:text-xl mt-4 text-center"
          >
            There is no Networking in the Future.
          </motion.p>
          <motion.div variants={staggeredVariants}>
            <CustomButton
              text="Get early access"
              onClick={() => {
                if (onCTAClick) onCTAClick();
              }}
              className="mt-8"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggeredVariants}
          className="bg-amber/10 w-2/3 md:w-1/3 h-1/2 md:h-1/3 absolute !left-0 md:!left-1/2 rounded-full  !-translate-x-1/2 -top-[10%] blur-3xl"
          style={{
            transform: 'translate3d(0, 0, 0)'
          }}
        ></motion.div>
      </motion.div>
    );
  };
  return <div>{renderTitle()}</div>;
};

export default HeroTitle;
