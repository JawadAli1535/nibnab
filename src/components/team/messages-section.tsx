'use client';
import { teamChat } from '@/util/constants';
import React from 'react';
import MessageBox from '../message-box';
import Image from 'next/image';
import { motion } from 'framer-motion';
const localInitial = {
  opacity: 0,
  scale: 0.8,
};

const localWhileInView = {
  opacity: 1,
  scale: 1,
  transition: {
    duration: 0.2,
    delay: 0.2,
  },
};
const TeamMessagesSection = () => {
  return (
    <div className="relative z-10 ">
      <Image
        src={'/images/curve-1.svg'}
        height={1000}
        width={1000}
        className="hidden md:block w-full mt-[-40px] md:mt-[-14%] mb-[-40px] md:mb-[-17%] 2xl:mb-[-20%]"
        alt="curve"
      />
      <Image
        src={'/images/curve-smaller.svg'}
        height={1000}
        width={1000}
        className="block md:hidden w-full mt-[-40px] md:mt-[-180px] mb-[-40px] md:mb-[-250px] 2xl:mb-[-300px]"
        alt="curve"
      />
      <div className="w-full bg-white pb-40">
        <div className="w-full px-5 md:px-0 md:w-[833px] mx-auto flex flex-col gap-[27px] md:gap-[41px] bg-white">
          {teamChat.map((item, index) => (
            <motion.div
              key={index}
              className={`flex w-max gap-[14px] items-start   ${
                item.sender === 'user' ? 'flex-row-reverse ml-auto' : ''
              }`}
              viewport={{ once: true }}
              initial={localInitial}
              whileInView={localWhileInView}
            >
              <Image
                src={item.profile}
                alt="profile"
                height={32}
                width={32}
                className="object-cover h-12 md:h-[72px] w-12 md:w-[72px] rounded-full"
                unoptimized
              />
              <MessageBox
                content={{
                  ...item,
                  text: item.text,
                  customCss:
                    ' hidden max-w-[400px] md:block text-lg text-blackMain box-shadow-team-text  rounded-[20px] p-[18px]',
                }}
              />
              <MessageBox
                content={{
                  ...item,
                  text: item.smallerDeviceText,
                  customCss:
                    'max-w-[262px] block md:hidden text-wrap text-xs text-blackMain box-shadow-team-text  rounded-[15px] p-4',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMessagesSection;
