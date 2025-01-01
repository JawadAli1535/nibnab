"use client";
import React from "react";
import { motion } from "framer-motion";

const SvgLeft = ({ delay }: { delay: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="338"
      height="304"
      viewBox="0 0 338 304"
      fill="none"
    >
      <g transform="rotate(180,169,152)"> {/* Center of SVG (338/2, 304/2) */}
        <motion.path
          d="M333.753 299.647C333.753 299.647 333.821 258.684 333.877 216.029C333.933 173.233 299.255 138.541 256.46 138.541H82.1944C39.4427 138.541 4.76835 103.916 4.70687 61.1646L4.62527 4.41997"
          stroke="url(#paint0_linear_595_1029)"
          strokeOpacity="0.6"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, transition: { duration: 0.5, delay } }}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_595_1029"
          x1="333.702"
          y1="293.998"
          x2="-16.2512"
          y2="13.4365"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC463B" stopOpacity="0" />
          <stop offset="0.208333" stopColor="#DC463B" />
          <stop offset="0.689592" stopColor="#F1993F" />
          <stop offset="0.817708" stopColor="#4BA1A8" />
          <stop offset="0.971497" stopColor="#4BA1A8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SvgLeft;
