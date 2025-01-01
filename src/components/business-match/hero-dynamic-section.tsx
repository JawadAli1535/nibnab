"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { BusinessMatchData, BusinessMatchLead } from "@/util/types";

const animateVariants: Variants = {
  initial: {
    scale: 0.8,
    y: 100,
  },
  animate: {
    y: 0,

    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

interface HeroMessageProps {
  name: string;
  image: string;
  username: string;
  text: string;
  isLastItem: boolean;
  link?: string;
}

const HeroMessage: React.FC<HeroMessageProps> = ({
  name,
  image,
  username,
  text,
  isLastItem,
  link,
}) => {
  return (
    <motion.div className="flex gap-2 md:gap-6" variants={childrenVariants}>
      <div className="flex flex-col items-center gap-1 md:gap-4 min-w-[32px]">
        <Image
          src={image}
          height={100}
          width={100}
          className="h-8 md:h-16 w-8 md:w-16 object-cover rounded-full"
          alt="profile"
        />
        {!isLastItem && <div className="h-full w-0.5 bg-graySecondary"></div>}
      </div>
      <div className="max-w-[217px] md:max-w-[400px] overflow-hidden break-words pb-4 md:pb-8">
        <p className="font-medium text-blackMain text-xs md:text-[24px]">
          {name}&nbsp;
          <span className="text-gray font-normal text-[10px] md:text-[20px]">
            @{username}
          </span>
        </p>
        <p
          className="text-blackMain  text-[10px] mt-1 md:text-[20px]"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {link && (
          <p
            className="text-[10px] md:text-[20px] text-blue"
            dangerouslySetInnerHTML={{ __html: link }}
          />
        )}
      </div>
    </motion.div>
  );
};

const HeroDynamicSection = (businessMatch: BusinessMatchData) => {
  const [firstLead] = useState<BusinessMatchLead | null>(
    businessMatch.leads.length ? businessMatch.leads[0] : null
  );

  const renderHeader = () => {
    return (
      <div className="flex items-center border-b border-coolGray justify-between">
        <div className="p-3 md:p-6 flex items-center justify-between w-full">
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src={businessMatch.business.logo || ""}
              height={300}
              width={300}
              alt={businessMatch.business.name || ""}
              className="h-6 md:h-12 w-6 md:w-12"
            />
            <p className="text-white text-[8px] md:text-base font-medium bg-redMain py-[6px] px-2 rounded-md">
              YOU HAVE {businessMatch.leads.length} LEADS WAITING
            </p>
          </div>
          <div className="p-[6px] h-6 md:h-12 w-6 md:w-12 bg-grayFade rounded-md flex items-center justify-center border-coolGray border">
            <Image
              src="/images/twitter-dark.svg"
              alt="logo"
              height={26}
              width={26}
              className=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-[56px] md:py-0 md:scale-[0.85]">
      <div className="match-lp-hero-parent p-4 md:p-8">
        <div className="match-lp-hero-inner-parent p-4 md:p-8">
          <div className="bg-white rounded-lg md:rounded-2xl w-[calc(100vw-114px)] md:w-[576px] overflow-hidden">
            {renderHeader()}
            <motion.div
              className="p-3 md:p-6 flex flex-col gap-2 md:gap-4"
              variants={animateVariants}
              initial="initial"
              animate="animate"
            >
              {firstLead?.conversation.map((message, i) => {
                return (
                  <HeroMessage
                    key={i}
                    image={firstLead.avatar}
                    name={firstLead.name}
                    text={message.message}
                    username={"username"}
                    isLastItem={i === firstLead.conversation.length - 1}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDynamicSection;
