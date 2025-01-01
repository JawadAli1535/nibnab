"use client";
import MessageBox from "@/components/message-box";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import MessageAiAnimation from "./message-ai-animation";

interface MessageAnimationProps {
  chat: {
    text?: string;
    sender?: string;
    time?: string;
    image?: string;
    customCss?: string;
    type?: string;
  }[];
  isAiChat?: boolean;
  userProfile?: string;
}
const MessageAnimation: React.FC<MessageAnimationProps> = ({
  chat,
  isAiChat,
  userProfile,
}) => {
  const renderContactCard = () => (
    <div className="bg-grayFade w-[297px] md:w-[380px] ml-auto mt-6 rounded-[20px] p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/dummy-profile-12.png"
            alt="profile"
            height={64}
            width={64}
            className="rounded-full h-10 w-10 md:h-12 md:w-12"
          />
          <p className="text-xs md:text-sm text-blackMain font-medium">
            Brooke S.
          </p>
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
    </div>
  );

  return (
    <div className="w-[140%] md:w-[139%]">
      {chat.map((item, index) => {
        const isUser = item.sender === "user";
        if (item.type === "new text") {
          return (
            <div
              className="flex items-center gap-[11px] text-redMain text-xs md:text-base  mt-3"
              key={index}
            >
              <div className="bg-redMain h-[2px] flex-1" />
              New messages
              <div className="bg-redMain h-[2px] flex-1" />
            </div>
          );
        }

        return (
          <div
            key={index}
            className={`flex ${
              isUser ? "flex-row-reverse" : ""
            } items-start gap-2 md:gap-4 mt-6`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, delay: index * 0.2 },
              }}
              viewport={{ once: true }}
            >
              {isAiChat ? (
                <>
                  {isUser && userProfile ? (
                    <Image
                      src={userProfile}
                      height={64}
                      width={64}
                      alt="profile"
                      className="rounded-full h-10 w-10 md:h-12 md:w-12"
                    />
                  ) : (
                    <div className="bg-peach h-10 md:h-12 w-10 md:w-12 flex items-center justify-center rounded-full">
                      <Image
                        src={"images/logo-main.svg"}
                        height={35}
                        width={35}
                        alt="profile"
                        className="h-[21px] w-[21px] md:h-[25px] md:w-[25px]"
                      />
                    </div>
                  )}
                </>
              ) : (
                <Image
                  src={`/images/dummy-profile-${
                    !(index % 2) ? "11" : "12"
                  }.png`}
                  height={64}
                  width={64}
                  alt="profile"
                  className="rounded-full h-10 w-10 md:h-16 md:w-16"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3, delay: index * 0.4 },
              }}
              viewport={{ once: true }}
            >
              {item.type === "goal" ? (
                <div className="w-max text-[14px] bg-white rounded-[16px] shadow-md">
                  <div className="flex justify-between items-center bg-peach py-2.5 px-4 rounded-t-[16px] text-amber">
                    <p>New Goal Created</p>
                    <Image
                      src="/images/goal.svg"
                      height={20}
                      width={20}
                      alt="profile"
                    />
                  </div>
                  <div className="flex gap-[30px]  p-[18px]">
                    <div className=" flex items-center gap-[14px]">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                        className={`text-blackMain font-medium  rounded-b-[20px]`}
                      />
                      <div className="bg-amber rounded-lg text-[10px] text-white px-[7px] py-[6px]">
                        IN PROGRESS
                      </div>
                    </div>
                    <Image
                      src={"/images/dot-menu.svg"}
                      height={17}
                      width={17}
                      alt={"dot menu"}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <MessageBox
                    content={{
                      sender: item.sender ?? "",
                      customCss: "w-max text-[14px] shadow-md",
                      text: item.text ?? "",
                    }}
                  >
                    {item.type === "loading" && (
                      <div className="flex gap-1 p-4">
                        <div className="bg-gray md:w-2 md:h-2 rounded-full h-1 w-1"></div>
                        <div className="bg-gray/50 md:w-2 md:h-2 rounded-full h-1 w-1"></div>
                        <div className="bg-gray/10 md:w-2 md:h-2 rounded-full h-1 w-1"></div>
                      </div>
                    )}
                  </MessageBox>
                  {item.type === "contact" && renderContactCard()}
                </div>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageAnimation;
