"use client";
import React from "react";
import TitleSection from "../timeline/title";
import { motion } from "framer-motion";
import CustomButton from "@/components/button";
import { initial, whileInView } from "@/util/constants";
import MessageAnimation from "../timeline/message-animation";

const DUMMYCHAT = [
  {
    sender: "user",
    text: "Please spend the next 6 hours gathering<br/> potential leads for my business",
  },
  {
    sender: "ai",
    text: "Sure, see you then!",
  },
  {
    type: "new text",
  },
  {
    sender: "ai",
    text: "Done, I found what I believe to be<br/> 3 solid leads close to you:",
  },
  {
    type: "loading",
  },
];

const BreakSection = () => {
  const renderTitle = () => {
    return (
      <div className="flex flex-col items-start">
        <TitleSection
          title="Take a break while<br/> nibnab works for<br/> you"
          description="Got a busy life? Do not worry, nibnab is able to work <br/>for you while you go on about your life, and will notify <br/>you whenever there's progress."
          customClassName="w-full text-center md:text-left hidden md:block"
        />
        <TitleSection
          title="Take a break while<br/> nibnab works for you"
          descriptionSmallerScreens="Got a busy life? Do not worry, nibnab is able to<br/> work for you while you go on about your life,<br/> and will notify you whenever there's progress."
          customClassName="w-full text-center md:text-left md:hidden block"
        />
      </div>
    );
  };
  return (
    <div className="max-w-[83rem]  gap-16 md:gap-0 mx-auto flex flex-col-reverse md:flex-row md:justify-around items-center md:min-h-screen my-[166px] md:my-0">
      <MessageAnimation
        chat={DUMMYCHAT}
        isAiChat={true}
        userProfile="/images/dummy-profile-13.png"
      />
      {renderTitle()}
    </div>
  );
};

export default BreakSection;
