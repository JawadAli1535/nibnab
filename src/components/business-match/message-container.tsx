import React from "react";
import MessageBox from "../message-box";
import Image from "next/image";
const DUMMY_CHAT_GET_TO_KNOW = [
  {
    text: "Hey Brooke! Saw you’re looking for a business<br/> consultant. Are you seeking help in a specific area?",
    sender: "user",
    customCss:'!text-[10px] md:!text-sm'
  },
  {
    text: "Hey nibnab. That’s right! And yeah, looking for someone in e-commerce.",
    sender: "ai",
    customCss:'!text-[10px] md:!text-sm'
  },
  {
    text: "You’ll love this then:<br/>",
    link: "intro.co/marketplace/business/e-commerce",
    sender: "user",
    customCss:'!text-[10px] md:!text-sm'
  },
  {
    text: "Wow, thanks. I just booked a session!",
    sender: "ai",
    liked: true,
    customCss:'!text-[10px] md:!text-sm'
  },
];
const MessageContainer = () => {
  return (
    <div className="flex w-full flex-col gap-4 mt-4 md:mt-0 md:gap-[22px]">
      {DUMMY_CHAT_GET_TO_KNOW.map((item, index) => {
        return (
          <div
            className={`flex ${
              item.sender === "user" && "flex-row-reverse"
            } gap-2.5 md:gap-6`}
            key={index}
          >
            <Image
              src={
                item.sender === "ai"
                  ? "/images/dummy-profile-12.png"
                  : "/images/logo-framer-no-padding.png"
              }
              alt="profile"
              width={40}
              height={40}
              className="h-8 md:h-16 w-8 md:w-16"
            />
            <div className="relative">
              {item.liked && (
                <Image
                  src="/images/like.png"
                  alt="icon"
                  width={21}
                  height={21}
                  className="h-5 md:h-8 w-5 md:w-8 object-contain absolute right-0 md:-right-2 -bottom-1 md:bottom-1.5"
                  unoptimized
                />
              )}
              <MessageBox key={index} content={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageContainer;
