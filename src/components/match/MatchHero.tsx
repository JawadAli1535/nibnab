"use client";
import Image from "next/image";
import MatchHeroTitle from "./MatchHeroTitle";
import Link from "next/link";
import { motion } from "framer-motion";
import { MatchButton } from "./NibnabWorkflow";

interface MatchHeroProps {
  imageA: string;
  imageB: string;
  emoji: string;
  onClick: () => void;
}

const imageVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const MatchHero = ({ imageA, imageB, emoji, onClick }: MatchHeroProps) => {
  return (
    <section className="relative xl:min-h-screen">
      <Image
        src={"/images/curve-1.svg"}
        height={1000}
        width={1000}
        className="absolute xl:block hidden bottom-[-20%] md:-bottom-[16%] xl:-bottom-[20%] 2xl:-bottom-[25%] w-full z-[10]"
        alt="curve"
      />
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 flex blur-[177.5px] opacity-50`}
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {["blue", "amber", "redMain"].map((color) => (
          <div key={color} className={`bg-${color} w-1/3 h-1/4`}></div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-[48px] relative z-10">
        <MatchHeroTitle />
        <div className="relative flex items-center">
          <motion.span
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="rounded-full"
          >
            <Image
              src={imageA}
              width={200}
              height={200}
              alt="your-profile"
              className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] border-[3px] border-coolGray rounded-full"
            />
          </motion.span>
          <span className="text-[24px] lg:text-[48px] font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.span
              className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] flex items-center justify-center bg-white border-[3px] border-coolGray rounded-full"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              {emoji}
            </motion.span>
          </span>
          <motion.span
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="rounded-full"
          >
            <Image
              src={imageB}
              width={200}
              height={200}
              alt="your-match"
              className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] border-[3px] border-coolGray rounded-full"
            />
          </motion.span>
        </div>
        <p className="md:text-lg 2xl:text-xl mt-4 text-gray text-center font-rubik px-5 md:px-0">
          You put the word out there, now the universe has responded.{" "}
          <br className="hidden md:block" />
          Discover why the two of you are a great match below.
        </p>
        <MatchButton
          className="bg-amber text-white"
          title="Why are we connected?"
          onClick={onClick}
        />
      </div>
    </section>
  );
};

export default MatchHero;
