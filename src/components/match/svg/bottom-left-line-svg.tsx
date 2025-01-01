"use client";
import { MotionValue, motion } from "framer-motion";

interface BottomLeftLineSvgProps {
  scrollYProgress: MotionValue<number>;
}

const BottomLeftLineSvg: React.FC<BottomLeftLineSvgProps> = ({
  scrollYProgress,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="238"
      height="232"
      viewBox="0 0 238 232"
      fill="none"
    >
      <motion.path
        d="M237.5 228H131C115.536 228 103 215.464 103 200V134C103 118.536 90.464 106 75 106H32C16.536 106 4 93.464 4 78V0"
        stroke="url(#paint0_linear_792_1812)"
        strokeWidth="8"
        style={{ pathLength: scrollYProgress, strokeWidth: 8 }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_792_1812"
          x1="120.75"
          y1="228"
          x2="120.75"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1993F" />
          <stop offset="1" stopColor="#F1993F" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BottomLeftLineSvg;
