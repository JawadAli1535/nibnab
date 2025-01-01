"use client";
import { MotionValue, motion } from "framer-motion";

interface TopLeftLineSvgProps {
  scrollYProgress: MotionValue<number>;
}

const TopLeftLineSvg: React.FC<TopLeftLineSvgProps> = ({ scrollYProgress }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="238"
      height="232"
      viewBox="0 0 238 232"
      fill="none"
    >
      <motion.path
        d="M237.5 4H131C115.536 4 103 16.536 103 32V98C103 113.464 90.464 126 75 126H32C16.536 126 4 138.536 4 154V232"
        stroke="url(#paint0_linear_792_1811)"
        strokeWidth="8"
        style={{ pathLength: scrollYProgress, strokeWidth: 8 }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_792_1811"
          x1="120.75"
          y1="4"
          x2="120.75"
          y2="232"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1993F" />
          <stop offset="1" stopColor="#F1993F" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TopLeftLineSvg;
