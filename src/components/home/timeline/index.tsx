"use client";
import React, { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import TitleSection from "./title";
import SvgAnimation from "./svg-animation";
import MessageAiAnimation from "./message-ai-animation";
import MessageAnimation from "./message-animation";
import Image from "next/image";

const DUMMYCHAT = [
  {
    sender: "user",
    text: "Hey Brooke! 👋",
  },
  {
    sender: "ai",
    text: "Hi Patrick, what&nbsp;s up? 😊",
  },
  {
    sender: "user",
    text: "I got the word that you&nbsp;re hosting a jazz<br/> concert this weekend... Can I come play?",
  },
  {
    sender: "ai",
    text: "Yes, and YES!",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });
  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="min-h-screen  max-w-[83rem] mx-auto mt-[135px]"
      >
        <div className="flex md:mr-[5%] gap-16 md:gap-0 flex-col-reverse md:flex-row  items-center md:items-start">
          <MessageAiAnimation />
          <TitleSection
            title="Get suggested<br/> connections in<br/> minutes"
            description="With nibnab's extremely powerful recommendation<br/> technology, you can receive suggestions for new<br/> connections just minutes after asking."
            descriptionSmallerScreens="With nibnab's extremely powerful <br/>recommendation technology, you can receive<br/> suggestions for new connections just minutes<br/> after asking."
            customClassName="text-center md:text-left"
          />
        </div>
        <div className="-mt-[100px]">
          <SvgAnimation scrollYProgress={y} />
        </div>
        <div className="flex justify-around  gap-16 md:gap-0 flex-col md:flex-row  items-center md:items-start">
          <TitleSection
            title="Start the <br/>conversation"
            description="nibnab makes it easy to connect so you can start the<br/> conversation immediately."
            descriptionSmallerScreens="nibnab makes it easy to connect so you can <br/>start the conversation immediately."
            customClassName=" text-center md:text-left"
          />
          <MessageAnimation chat={DUMMYCHAT} />
        </div>
      </div>
      <Image
        src="/images/curve.svg"
        alt="curve"
        width={1000}
        height={1000}
        className="absolute  scale-[-1] bottom-[-15%] md:bottom-[-40%]  -z-10  left-0 right-0 w-full"
      />
    </div>
  );
};

export default Timeline;
