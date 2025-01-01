import { easeIn } from "framer-motion";

export const staggeredVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      ease: easeIn,
    },
  },
};
