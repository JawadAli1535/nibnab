"use client";
import MessageBox from "@/components/message-box";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sparkle from "./sparkle";
import { EXAMPLEQUESTIONS } from "@/util/constants";
import { AnimatePresence, motion } from "framer-motion";

const CircularAnimation = () => {
  const [message, setMessage] = useState(0);
  const profileImages = [
    {
      className: "h-[62px] w-[62px] object-contain absolute top-4 right-8 z-10",
      image: message === 0 ? "2" : message === 1 ? "5" : "7",
    },
    {
      className:
        "h-[62px] w-[62px] object-contain absolute top-1/2 -translate-y-1/2 -right-7",
      image: message === 0 ? "10" : message === 1 ? "6" : "8",
    },
    {
      className:
        "h-[62px] w-[62px] object-contain absolute bottom-4 right-8 z-10",
      image: message === 0 ? "3" : message === 1 ? "2" : "9",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage((prevMessage) =>
        prevMessage === EXAMPLEQUESTIONS.length - 1 ? 0 : prevMessage + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [message]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="absolute top-[-10%] right-[15%] md:top-[10%] md:right-1/3 text-redMain">
        <Sparkle />
      </div>
      <div className="absolute bottom-[70%] right-[80%] md:bottom-[10%] md:right-[10%] scale-[0.6] text-blue">
        <Sparkle />
      </div>
      <div className="absolute top-[-15%] left-[25%] md:top-[10%] md:left-[10%] scale-[0.6] text-blue">
        <Sparkle />
      </div>
      <div className="absolute bottom-[-5%] left-[80%] md:bottom-[10%] md:left-[5%] text-amber">
        <Sparkle />
      </div>

      <div className="relative z-50 flex flex-col md:flex-row items-center gap-14 md:gap-8 mt-[104px] md:mt-0">
        <div className="hidden md:block h-1 absolute -z-10 bg-gradient-to-r from-amber to-transparent left-0 -right-20 top-1/2"></div>
        <div className="block md:hidden h-1 w-[250px] top-[150px] rotate-[90deg] absolute bg-gradient-to-r from-amber to-transparent"></div>
        <Image
          src="/images/dummy-profile-4.png"
          alt="logo"
          width={1000}
          height={1000}
          className="h-[62px] w-[62px] object-contain z-10 "
        />
        <motion.div
          layoutId="message-box"
          key={message}
          className="relative z-50 bg-blueFade rounded-xl w-[240px]"
        >
          <MessageBox
            content={{
              sender: "user",
              text: EXAMPLEQUESTIONS[message],
              customCss: "w-full",
            }}
          />
        </motion.div>
      </div>
      <div className="radial  -translate-y-[20%] md:translate-y-0 md:-translate-x-[30%] h-[400px] w-[400px] flex items-center justify-center relative rotate-[90deg] md:rotate-0">
        <div className="bg-gradient-to-r from-white from-60% to-transparent absolute -top-1 -left-1 -bottom-1 right-0 z-10"></div>
        <AnimatePresence key={message}>
          {profileImages.map(({ className, image }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Image
                src={`/images/dummy-profile-${image}.png`}
                alt="logo"
                width={1000}
                height={1000}
                className={`${className} rotate-[-90deg] md:rotate-0`}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="radial h-[300px] w-[300px] flex items-center justify-center">
          <div className="radial h-[200px] w-[200px] flex items-center justify-center">
            <div className="radial-logo-container  h-[100px] w-[100px] flex items-center justify-center relative z-50">
              <Image
                src="/images/logo-main.svg"
                alt="logo"
                width={1000}
                height={1000}
                className="h-[50px] w-[50px] object-contain rotate-[-90deg] md:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularAnimation;
