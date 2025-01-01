"use client";
import React from "react";
import { motion } from "framer-motion";

const SvgRight = ({ delay }: { delay: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="303"
      viewBox="0 0 224 303"
      fill="none"
    >
      <g transform="rotate(180,112,151.5)"> {/* Center of SVG (224/2, 303/2) */}
        <motion.path
          d="M219.461 4C219.461 4 219.505 44.8621 219.542 87.4396C219.578 130.235 184.896 164.928 142.1 164.928H81.6603C38.8937 164.928 4.21321 199.576 4.17293 242.342L4.11966 298.899"
          stroke="url(#paint0_linear_595_1030)"
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
          id="paint0_linear_595_1030"
          x1="219.427"
          y1="9.64335"
          x2="-75.4038"
          y2="164.467"
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

export default SvgRight;
