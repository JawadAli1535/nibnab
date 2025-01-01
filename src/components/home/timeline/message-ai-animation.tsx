"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import MessageBox from "@/components/message-box";

const localInitial = {
  opacity: 0,
  scale: 0.8,
};

const localWhileInView = {
  opacity: 1,
  scale: 1,
  transition: {
    duration: 0.2,
    delay: 0.4,
  },
};

const renderUserMessage = () => {
  return (
    <div className="flex items-center   gap-[6px] ">
      <motion.div
        initial={localInitial}
        whileInView={localWhileInView}
        viewport={{ once: true }}
        className="w-[280px] md:w-[430px]"
      >
        <MessageBox
          content={{
            sender: "user",
            text: "I want to attend a jazz concert this weekend and play if possible..",
            customCss: "ml-0 w-full text-xs md:text-base",
          }}
        />
      </motion.div>
      <motion.div
        initial={localInitial}
        whileInView={{ ...localWhileInView, transition: { delay: 0.2 } }}
        viewport={{ once: true }}
      >
        <Image
          src={"/images/dummy-profile-11.png"}
          height={64}
          width={64}
          alt="profile"
          className="rounded-full h-10 w-10 md:h-16 md:w-16"
        />
      </motion.div>
    </div>
  );
};
const renderNibnabMessage = () => {
  return (
    <div className="w-max">
      <div className="flex items-start justify-center gap-[6px] mt-6">
        <motion.div
          initial={localInitial}
          whileInView={{ ...localWhileInView, transition: { delay: 0.8 } }}
          viewport={{ once: true }}
        >
          <div className="bg-amber/10 p-2 rounded-full h-10 w-10 md:h-16 md:w-16 flex items-center justify-center">
            <Image
              src={"/images/logo-main.svg"}
              height={34}
              width={34}
              alt="profile"
            />
          </div>
        </motion.div>
        <motion.div
          initial={localInitial}
          whileInView={{ ...localWhileInView, transition: { delay: 1 } }}
          viewport={{ once: true }}
          className="w-[297px] md:w-[430px]"
        >
          <MessageBox
            content={{
              sender: "ai",
              text: "Cool! I found 3 people in the area that is hosting a jazz concert this weekend. Feel free to reach out to them! Brooke looks like a great fit.",
              customCss: "ml-0 w-full text-xs md:text-base",
            }}
          />
        </motion.div>
      </div>
      <motion.div
        className="bg-grayFade w-[297px] md:w-[310px] ml-auto mt-6 rounded-[20px] p-4"
        initial={localInitial}
        whileInView={{ ...localWhileInView, transition: { delay: 1.2 } }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/dummy-profile-12.png"
              height={47}
              width={47}
              alt="profile"
              className="rounded-full h-8 w-8 md:h-12 md:w-12"

            />
            <p className="text-xs md:text-sm text-blackMain font-medium">Brooke S.</p>
          </div>
          <button className="bg-blue font-medium rounded-[20px] px-4 py-2 text-white text-[12px]">
            Connect
          </button>
        </div>
        <div className="flex justify-between items-center mt-2.5">
          <div className="flex items-center gap-3">
            <div className="bg-gray/30 rounded-full h-8 md:h-12 md:w-12 w-8"></div>
            <div className="w-[100px] bg-gray/30 rounded-md h-5"></div>
          </div>
          <button className="bg-blue font-medium rounded-[20px] px-4 py-2 text-white text-[12px]">
            Connect
          </button>
        </div>
        <div className="flex justify-between items-center mt-2.5 opacity-[0.5]">
          <div className="flex items-center gap-3">
            <div className="bg-gray/30 rounded-full h-8 md:h-12 md:w-12 w-8"></div>
            <div className="w-[100px] bg-gray/30 rounded-md h-5"></div>
          </div>
          <button className="bg-blue font-medium rounded-[20px] px-4 py-2 text-white text-[12px]">
            Connect
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const MessageAiAnimation = () => {
  return (
    <div className="flex flex-col flex-1">
      {renderUserMessage()}
      {renderNibnabMessage()}
    </div>
  );
};

export default MessageAiAnimation;
