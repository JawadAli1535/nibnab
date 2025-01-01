"use client";
import { MotionValue, motion } from "framer-motion";
import React from "react";

const LineSvg = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="205"
      height="268"
      viewBox="0 0 205 268"
      fill="none"
    >
      <motion.path
        d="M5.5 0.471191V63.5496C5.5 98.8958 34.1538 127.55 69.5 127.55H135.5C170.846 127.55 199.5 156.203 199.5 191.55V267.471"
        stroke="url(#paint0_linear_623_1075)"
        style={{ pathLength: scrollYProgress, strokeWidth: 10 }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_623_1075"
          x1="102.5"
          y1="0.471191"
          x2="102.5"
          y2="267.471"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.141981" stopColor="#4BA1A8" stopOpacity="0" />
          <stop offset="0.5" stopColor="#4BA1A8" />
          <stop offset="0.873954" stopColor="#4BA1A8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LineSvg;
