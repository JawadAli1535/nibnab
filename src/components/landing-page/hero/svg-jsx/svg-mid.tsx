"use client";
import React from "react";
import { motion } from "framer-motion";

const SvgMid = ({ delay }: { delay: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="529"
      height="217"
      viewBox="0 0 529 217"
      fill="none"
    >
      <g transform="rotate(180,264.5,108.5)"> {/* Center of SVG (529/2, 217/2) */}
        <motion.path
          d="M525 4.12338C525 4.12338 409.257 4.05388 318.173 4.01921C275.378 4.00292 240.688 38.6924 240.688 81.4875L240.688 135.43C240.688 178.21 206.02 212.896 163.241 212.918L4.00003 213"
          stroke="url(#paint0_linear_595_1031)"
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
          id="paint0_linear_595_1031"
          x1="515.03"
          y1="4.1556"
          x2="417.914"
          y2="340.998"
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

export default SvgMid;
