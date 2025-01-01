"use client";
import { MotionValue, motion } from "framer-motion";

interface TopRightLineSvgProps {
  scrollYProgress: MotionValue<number>;
}

const TopRightLineSvg: React.FC<TopRightLineSvgProps> = ({
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
        d="M0 4H106.5C121.964 4 134.5 16.536 134.5 32V98C134.5 113.464 147.036 126 162.5 126H205.5C220.964 126 233.5 138.536 233.5 154V232"
        stroke="url(#paint0_linear_792_1813)"
        strokeWidth="8"
        style={{ pathLength: scrollYProgress, strokeWidth: 8 }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_792_1813"
          x1="116.75"
          y1="4"
          x2="116.75"
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

export default TopRightLineSvg;
