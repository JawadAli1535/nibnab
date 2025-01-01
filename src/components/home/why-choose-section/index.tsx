"use client";
import Image from "next/image";
import React from "react";
import TitleSection from "../timeline/title";
import { WHYCHOOSEDUMMYCHAT, initial, whileInView } from "@/util/constants";
import MessageBox from "@/components/message-box";
import { motion } from "framer-motion";
const WhyChooseSection = () => {
  return (
    <div className="max-w-[83rem] mx-auto flex flex-col items-center">
      <Image src={"/images/logo-main.svg"} height={88} width={88} alt="logo" className="h-16 w-16 md:w-[88px] md:h-[88px] "/>
      <TitleSection
        title="Why choose nibnab<br/> over other chat apps?"
        description=""
        customClassName="text-center mt-12"
      />
      <div className="flex flex-col mt-12 gap-[22px] w-[95%] md:w-[700px] ">
        {WHYCHOOSEDUMMYCHAT.map((chat, index) => {
          return (
            <motion.div
              key={index}
              initial={{ ...initial, scale: 0.8 }}
              whileInView={{ ...whileInView, scale: 1 }}
              viewport={{ once: true }}
            >
              <MessageBox
                content={{ ...chat, customCss: "w-max text-xs md:text-base 2xl:text-lg" }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseSection;
