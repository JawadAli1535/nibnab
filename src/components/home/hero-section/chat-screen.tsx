"ues client";
import React from "react";
import ChatBox from "./chatbox";
import { DUMMYCHAT, DUMMYCHATBOXES } from "@/util/constants";
import Image from "next/image";
import MessageBox from "@/components/message-box";
import { motion } from "framer-motion";
const ChatScreen = () => {
  const renderScreenHeader = () => {
    return (
      <div className="hidden md:flex items-center justify-between border-b-[1px] border-b-gray/20 p-[17px]">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={1000}
          height={1000}
          className="h-[24px] w-[112px] object-contain "
        />
        <div className="flex items-center gap-2 text-sm bg-gray/5 rounded-lg px-3 py-2">
          <div className="bg-red-500 text-white rounded-full w-6 text-sm h-6 flex items-center justify-center">
            M
          </div>
          Mark D.
          <Image
            src="/images/arrow-right.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-4 object-contain"
          />
        </div>
      </div>
    );
  };

  const renderChatMenu = () => {
    return (
      <div className="w-full md:w-[30%] p-[17px] relative md:border-r border-r-gray/20">
        <div className="hidden md:block w-[5px] h-[100px] rounded-full bg-gray/20 absolute right-1.5 top-1/3"></div>
        <div className="flex p-[11px] rounded-full w-full gap-2 bg-gray/5 text-xs">
          <Image
            src="/images/search.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-3 object-contain"
          />
          Search
        </div>
        <div className="flex items-center md:py-3 md:px-2.5 md:bg-gray/5 rounded-lg gap-3 mt-4">
          <Image
            src="/images/logo-main.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]  object-contain"
          />
          <div>
            <div className="flex items-center gap-1.5 md:gap-1">
              <p className="text-sm text-blackMain font-medium">nibnab</p>
              <p className="bg-redMain text-white rounded-[3px] text-[8px] font-medium p-1">
                BOT
              </p>
            </div>
            <p className="hidden md:block text-xs text-gray font-normal">
              Typing...
            </p>
            <p className="block md:hidden mt-1 text-[11px] md:text-xs text-gray font-normal">
              Of course. That’s why I’m here!
            </p>
          </div>
          <p className="text-[10px] md:text-xs text-gray font-normal flex-1 text-right">
            Today
          </p>
        </div>
        <div className="flex gap-[5px] mt-[17px]">
          <div className="bg-redMain/10 text-redMain text-xs w-1/3 text-center py-2 rounded-full">
            All
          </div>
          <div className="bg-gray/5 text-gray/80 text-xs w-1/3 text-center py-2 rounded-full font-medium">
            Unread{" "}
            <span className="bg-gray/80 text-white text-[9px] px-[2px] rounded-[2px] ml-[2px]">
              3
            </span>
          </div>
          <div className="bg-gray/5 text-gray/80 text-xs w-1/3 text-center py-2 rounded-full font-medium">
            Request{" "}
            <span className="bg-gray/80 text-white text-[9px] px-[2px] rounded-[2px] ml-[2px]">
              2
            </span>
          </div>
        </div>
        <div className="mt-[11.34px]">
          {DUMMYCHATBOXES.map((item) => {
            return (
              <ChatBox
                key={item.name}
                name={item.name}
                text={item.text}
                image={item.image}
                time={item.time}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const renderChatHeader = () => {
    return (
      <div className="flex items-center justify-between px-8 py-3 border-b border-b-gray/20">
        <div className="flex items-center gap-[5px]">
          <Image
            src="/images/logo-main.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px] object-contain"
          />
          <p className="text-sm text-blackMain font-medium">nibnab</p>
          <p className="bg-redMain text-white rounded-[3px] text-[8px] font-medium p-1">
            BOT
          </p>
        </div>
        <div className=" text-xs bg-amber/10 rounded-[6px] py-3 px-3 text-amber font-medium flex items-center gap-1">
          <p>My goals</p>
          <p className="bg-redMain text-white rounded-[3px] text-[8px] font-medium h-3 w-3 flex items-center justify-center">
            1
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white z-10 relative m-8 md:m-[100px] rounded-3xl md:rounded-2xl  w-full">
      {renderScreenHeader()}
      <div className="flex ">
        {renderChatMenu()}
        <div className="flex-1 hidden md:block">
          {renderChatHeader()}
          {DUMMYCHAT.map((item, i) => {
            return (
              <motion.div
                key={item.text}
                className="m-[20px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5 * i, ease: "easeInOut" },
                }}
              >
                <MessageBox content={{ ...item, customCss: "w-max" }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
