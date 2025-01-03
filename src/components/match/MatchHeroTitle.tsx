"use client";
import { staggeredVariants } from "@/util/variants";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Congratulations", "Woop Woop", "Voilà"];

const MatchHeroTitle = () => {
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
          if ([0].includes(textIndex.get())) {
            setSelectedColor("blue");
          }
          if ([1].includes(textIndex.get())) {
            setSelectedColor("redMain");
          }
          if ([2].includes(textIndex.get())) {
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
  return (
    <motion.h1
      className="font-semibold text-[45px] md:text-[74px] font-rubik leading-[52px] md:leading-[78px] text-center"
      variants={staggeredVariants}
    >
      <span className={`text-${selectedColor}`}>
        <motion.span>{displayText}</motion.span>
      </span>
      <br />
      <span className="text-blackMain block">You Found A Match!</span>
    </motion.h1>
  );
};

export default MatchHeroTitle;
