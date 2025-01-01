"use client";
import React from "react";
import { MotionValue, motion } from "framer-motion";
const SvgAnimation = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  return (
    <>
      <div className="block md:hidden translate-x-1/2 translate-y-[15%] scale-y-[0.9]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="298"
          viewBox="0 0 10 298"
          fill="none"
        >
          <motion.path
            d="M5 0L5.00001 298"
            stroke="url(#paint0_linear_365_4385)"
            strokeWidth="10"
            style={{ pathLength: scrollYProgress, strokeWidth: 10 }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_365_4385"
              x1="5.5"
              y1="-2.18557e-08"
              x2="5.50001"
              y2="298"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.141981" stopColor="#4BA1A8" stopOpacity="0" />
              <stop offset="0.5" stopColor="#4BA1A8" />
              <stop offset="0.873954" stopColor="#4BA1A8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="751"
          height="510"
          viewBox="0 0 751 510"
          fill="none"
          className="mx-auto w-1/2"
        >
          <motion.path
            d="M5 0V114.734C5 185.427 62.3076 242.734 133 242.734H618C688.692 242.734 746 300.042 746 370.734V510"
            stroke="url(#paint0_linear_250_18589)"
            strokeWidth="10"
            style={{ pathLength: scrollYProgress, strokeWidth: 10 }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_250_18589"
              x1="375.5"
              y1="0"
              x2="375.5"
              y2="510"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.141981" stopColor="#4BA1A8" stopOpacity="0" />
              <stop offset="0.5" stopColor="#4BA1A8" />
              <stop offset="0.873954" stopColor="#4BA1A8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default SvgAnimation;
