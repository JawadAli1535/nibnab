"use client";
import HeroTitle from "@/components/home/hero-section/hero-title";
import MessageBox from "@/components/message-box";
import StickyNavbar from "@/components/navbar/sticky-navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { isFirefox } from 'react-device-detect';
import SvgLeft from "./svg-jsx/svg-left";
import SvgMid from "./svg-jsx/svg-mid";
import SvgRight from "./svg-jsx/svg-right";
import { motion } from "framer-motion";
import SvgSmallTop from "./svg-jsx/svg-small-top";
import SvgSmallMid from "./svg-jsx/svg-small-mid";
import SvgSmallBot from "./svg-jsx/svg-small-bot";
import { initial } from "@/util/constants";
const Hero = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  const [showGaussianBlur, setShowGaussianBlur] = useState<boolean>(true);

  useEffect(() => {
    setShowGaussianBlur(!isFirefox);
  }, [ isFirefox ]);

  const renderWithDelay = (children: React.ReactNode | React.ReactNode[], delay: number) => (
    <motion.div
      viewport={{ once: true }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, delay: delay },
      }}
      initial={initial}
    >
      {children}
    </motion.div>
  );
  const renderNibNabLogo = () => (
    <div className="relative bg-peach h-12 w-12 xl:h-16 xl:w-16 2xl:h-[74px] 2xl:w-[74px] flex items-center justify-center rounded-full shadow-md">
      <Image
        src={"images/logo-main.svg"}
        height={35}
        width={35}
        alt="profile"
        className="h-[24px] w-[24px] xl:h-[34px] 2xl:h-[40px] xl:w-[34px] 2xl:w-[40px]"
      />
      <div className={`absolute xl:transform-none scale-75 w-[24px] h-[24px] top-[-6px] right-[-6px] bg-redMain text-white text-center align-middle rounded-lg`}>AI</div>
    </div>
  );
  const renderUserChatWithImage = () => (
    <div className="flex gap-3">
      <MessageBox
        content={{
          sender: "user",
          image: "/images/hero-1.png",
          customCss: "w-[280px] 2xl:w-[305px]",
        }}
      />
      <Image
        src={`/images/use-case-dating.png`}
        className={`h-12 w-12 xl:h-16 xl:w-16 2xl:h-[74px] 2xl:w-[74px]`}
        height={74}
        width={74}
        alt="profile"
      />
    </div>
  );
  const renderAiReply = () => (
    <div className="flex gap-[12.7px] items-start">
      {renderNibNabLogo()}
      <div className="flex flex-col  shadow-lg rounded-2xl">
        <div className="flex text-xs xl:text-base 2xl:text-lg items-center justify-between bg-redMain/10 backdrop-blur-sm rounded-t-xl py-[9px] px-[14px] text-redMain">
          Replied to image
          <Image
            src={`/images/hero-1.png`}
            className={`h-[32px] w-[51px] xl:h-8 xl:w-[51px] rounded-[4px]`}
            height={74}
            width={74}
            alt="profile"
          />
        </div>
        <MessageBox
          content={{
            sender: "ai",
            text: "Hey Matt! Remember this image you<br/> sent me the other day? Is this a Martin<br/> Dreadnought guitar I see in it",
            customCss: "text-xs xl:text-base 2xl:text-lg rounded-t-none",
          }}
        />
      </div>
    </div>
  );
  const renderUserChatWithoutImage = () => (
    <div className="flex gap-[12.7px] items-start">
      <MessageBox
        content={{
          sender: "user",
          text: "Yeah... what’s up? 👀",
          customCss: "text-xs xl:text-base 2xl:text-lg shadow-lg",
        }}
      />
      <Image
        src={`/images/use-case-dating.png`}
        className={`h-12 w-12 xl:h-16 xl:w-16 2xl:h-[74px] 2xl:w-[74px]`}
        height={74}
        width={74}
        alt="profile"
      />
    </div>
  );
  const renderAiTextBox = () => (
    <div className="flex gap-[12.7px] items-start">
      {renderNibNabLogo()}
      <MessageBox
        content={{
          sender: "ai",
          text: "I found a person who may be<br/> willing to buy it for $2500.<br/> Are you interested in selling it?",
          customCss: "text-xs xl:text-base 2xl:text-lg shadow-lg",
        }}
      />
    </div>
  );

  const renderMobileView = () => {
    return (
      <div className="flex flex-col w-[90%]">
        <div className="mt-10">{renderWithDelay(renderUserChatWithImage(), 0)}</div>
        <div className="mt-10 relative z-50">{renderWithDelay(renderAiReply(), 0.5)}</div>
        <div className="mt-10">{renderWithDelay(renderUserChatWithoutImage(), 1)}</div>
        <div className="mt-10">{renderWithDelay(renderAiTextBox(), 1.5)}</div>
      </div>
    );
  };
  return (
    <div className="min-h-screen flex flex-col relative items-center justify-center ">
      <Image
        src={"/images/curve-1.svg"}
        height={1000}
        width={1000}
        className="absolute xl:block hidden bottom-[-20%] md:-bottom-[40%] xl:-bottom-[43%] 2xl:-bottom-[52%] w-full z-[10]"
        alt="curve"
      />
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 flex blur-[177.5px] opacity-50 ${!showGaussianBlur ? 'hidden': ''}`}
        style={{
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        {["blue", "amber", "redMain"].map((color) => (
          <div key={color} className={`bg-${color} w-1/3 h-1/4`}></div>
        ))}
      </div>

      <div className="mt-[40%] sm:mt-[18%] md:mt-[25%] xl:mt-[15%]">
        <HeroTitle onCTAClick={onCTAClick} hideLogo={true} />
      </div>

      {/* I'm currently not used - TODO: fix me! :) */}
      <div
        className="max-w-[1900px] absolute w-full h-full hidden"
      >
        <div className="hidden xl:block absolute left-[2.31%] top-[28.5%] -translate-y-[42.5%]">
          {renderWithDelay(renderUserChatWithImage(), 0)}
        </div>
        <div className="hidden xl:block absolute left-[10%] top-[37%] 2xl:top-[40%] lg:scale-[0.5] 2xl:scale-[1]">
          <SvgLeft delay={1.8} />
        </div>
        <div className="hidden xl:block absolute left-[18.34%] bottom-[10%]">
          {renderWithDelay(renderAiReply(), 2)}
        </div>
        <div className="hidden xl:block absolute bottom-[15%] left-[42%] 2xl:left-[46%] lg:scale-[0.5] 2xl:scale-[1]">
          <SvgMid delay={3.8} />
        </div>
        <div className="hidden xl:block absolute right-[7%] 2xl:right-[9%] md:bottom-[33%] bottom-[28%]">
          {renderWithDelay(renderUserChatWithoutImage(), 4)}
        </div>
        <div className="hidden xl:block absolute top-[20%] 2xl:top-[22%] right-[9%] lg:scale-[0.5] 2xl:scale-[1]">
          <SvgRight delay={5.8} />
        </div>
        <div className="hidden xl:block absolute right-[2%]  top-[19%] -translate-y-[29%] 2xl:top-[13%]">
          {renderWithDelay(renderAiTextBox(), 6)}
        </div>
      </div>

      <div className={`2xl:w-[40%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[70%] w-[95%] h-full`}>
        {renderMobileView()}
      </div>
    </div>
  );
};

export default Hero;
