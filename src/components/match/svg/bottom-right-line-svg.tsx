"use client";
import { MotionValue, motion } from "framer-motion";

interface BottomRightLineSvgProps {
  scrollYProgress: MotionValue<number>;
}

const BottomRightLineSvg: React.FC<BottomRightLineSvgProps> = ({
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
        d="M0 228H106.5C121.964 228 134.5 215.464 134.5 200V134C134.5 118.536 147.036 106 162.5 106H205.5C220.964 106 233.5 93.464 233.5 78V0"
        stroke="url(#paint0_linear_792_1814)"
        strokeWidth="8"
        style={{ pathLength: scrollYProgress, strokeWidth: 8 }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_792_1814"
          x1="116.75"
          y1="228"
          x2="116.75"
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

export default BottomRightLineSvg;
