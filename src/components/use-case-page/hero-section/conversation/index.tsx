"use client";
import TitleSection from "@/components/home/timeline/title";
import React from "react";
import { motion } from "framer-motion";
import { initial, whileInView } from "@/util/constants";
import CustomButton from "@/components/button";
import Image from "next/image";
import MessageBox from "@/components/message-box";
const Conversation = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  const renderTitle = () => {
    return (
      <div className="flex flex-col items-center md:items-start">
        {" "}
        <TitleSection
          title="Start the<br/> conversation!"
          description="nibnab makes it easy to connect so you can start<br/> the conversation immediately."
          descriptionSmallerScreens="nibnab makes it easy to connect so you can <br/>start the conversation immediately."
          customClassName="w-full text-center md:text-left"
        />
        <motion.div
          whileInView={whileInView}
          initial={initial}
          viewport={{ once: true }}
        >
          <CustomButton
            onClick={() => {
              if (onCTAClick) onCTAClick();
            }}
            text="Get early access"
            className="mt-8"
          />
        </motion.div>
      </div>
    );
  };

  const renderPfp = (src: string, className?: string) => {
    if (!src) return;
    return (
      <Image
        src={`/images/${src}.png`}
        className={`h-12 w-12 md:h-[74px] md:w-[74px] ${className}`}
        height={74}
        width={74}
        alt="profile"
      />
    );
  };

  return (
    <div className="md:-mt-[150px] 2xl:-mt-[250px] relative z-[10]">
      <div className=" mx-auto flex flex-col-reverse md:flex-row justify-between  items-center  max-w-[83rem]">
        <div className="conversation-main-container p-[40px] md:p-14 relative mt-[69px]">
          <motion.div
            whileInView={whileInView}
            initial={initial}
            className="absolute flex flex-col items-end gap-7 top-0 md:top-[80px] -right-[-10%] md:-right-[35px]"
          >
            <MessageBox
              content={{
                sender: "ai",
                text: "Can you help me create cooler<br/> motorcycle content that does<br/> well on social media?",
                customCss: "w-full text-xs md:text-base font-normal shadow-md",
              }}
            />
            {renderPfp("dummy-profile-15")}
          </motion.div>
          <motion.div
            whileInView={whileInView}
            initial={initial}
            className="absolute flex flex-col top-1/4 md:top-[20%] gap-5 left-[10%] md:-left-[40px]"
          >
            <MessageBox
              content={{
                sender: "ai",
                text: "I want to start making money<br/> from yoga and meditation.<br/> How can I do that?",
                customCss: "w-full text-xs md:text-base font-normal shadow-md",
              }}
            />
            {renderPfp("dummy-profile-14")}
          </motion.div>
          <motion.div
            whileInView={whileInView}
            initial={initial}
            className="absolute bottom-[-10%] flex flex-col items-end md:bottom-[5%] gap-4 left-[10%] md:-left-[40px]"
          >
            <Image
              src={"/images/voice.png"}
              height={59}
              width={210}
              alt="voice"
              className="h-[49px] md:h-[59px] w-full  object-contain"
            />
            {renderPfp("dummy-profile-13")}
          </motion.div>
          <motion.div
            whileInView={whileInView}
            initial={initial}
            className="absolute  items-end md:items-start flex flex-col-reverse md:flex-col bottom-[10%] gap-4 -right-[-5%] md:-right-[30px]"
          >
            {renderPfp("dummy-profile-2", "!w-[51px] !h-[51px]")}
            <MessageBox
              content={{
                sender: "user",
                text: "I want to start competing in<br/> chess",
                customCss:
                  "w-full text-xs md:text-base font-normal !bg-[#edf6f7] shadow-md",
              }}
            />
          </motion.div>
          <div className="conversation-sub-container p-10 md:p-14">
            <div className="conversation-sub-container p-8 md:p-12">
              <div className="conversation-container-red p-8 md:p-10">
                <div className="p-4 md:p-10 conversation-border rounded-full">
                  <Image
                    src={"/images/logo-main.svg"}
                    height={128}
                    width={128}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {renderTitle()}
      </div>

      <Image
        src="/images/curve.svg"
        alt="curve"
        width={1000}
        height={1000}
        className={
          " absolute w-full left-0 right-0 z-[-1] scale-[-1] md:-bottom-[450px] 2xl:-bottom-[600px]"
        }
      />
    </div>
  );
};

export default Conversation;
