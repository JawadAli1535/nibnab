"use client";
import React from "react";
import TitleSection from "../timeline/title";
import CustomButton from "@/components/button";
import Image from "next/image";
import MessageBox from "@/components/message-box";
import { motion } from "framer-motion";
import { initial, whileInView } from "@/util/constants";
import Sparkle from "../example-section/circular-animation-section/sparkle";
const Goals = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  const renderTitle = () => {
    return (
      <div className="flex flex-col items-center md:items-start">
        {" "}
        <TitleSection
          title="nibnab helps<br/> you set and<br/> achieve goals"
          description="nibnab assists you in setting goals and achieving <br/>them by consistently providing you with suggestions,<br/> opportunities, and connecting you with the right<br/> people to help you accomplish them."
          customClassName="w-full text-center md:text-left hidden md:block"
        />
        <TitleSection
          title="nibnab helps you set <br/>and achieve goals"
          descriptionSmallerScreens="nibnab assists you in setting goals and <br/>achieving them by consistently providing you <br/>with suggestions, opportunities, and <br/>connecting you with the right people to help<br/> you accomplish them."
          customClassName="w-full text-center md:text-left md:hidden block"
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
  const renderContent = () => {
    return (
      <div className="w-full px-4 md:px-0 md:w-[484px] relative ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
          className="-left-[60%] mt-12 md:mt-0 mb-[93px] md:mb-0  md:absolute top-[20%]  z-10 "
        >
          <MessageBox
            content={{
              sender: "ai",
              text: "I found a way you can<br/> make $200 today writing a<br/> few lines of code, are you<br/> interested?",
              time: "8:00 PM",
              customCss: "bg-white w-full shadow-lg text-gray hidden md:block",
            }}
          />
          <MessageBox
            content={{
              sender: "ai",
              text: "I found a way you can make $200 today<br/> writing a few lines of code, are you<br/> interested?",
              time: "8:00 PM",
              customCss:
                "bg-white w-max shadow-lg text-gray block md:hidden z-[99] relative",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.4 }}}
          className="bg-amber/5  h-[157px] w-[157px] md:h-[212px]  md:w-[212px] rounded-full  flex items-center justify-center absolute top-[15%] md:top-[20%] 2xl:top-[18%] md:left-[-23.3%] 2xl:left-[-24.3%] border-amber/10 border-[1px] left-1/3"
        >
          <div className="bg-amber/5 h-[157px] w-[157px] rounded-full flex items-center justify-center border-amber/30 border-[1px]">
            <div className="radial-logo-container-goals h-[109px] w-[109px]  border-amber/40 border-[2px] flex items-center justify-center">
              <Image
                src={"/images/logo-main.svg"}
                height={67}
                width={67}
                alt={"logo"}
              />
            </div>
          </div>
        </motion.div>
        <div className="shadow-md rounded-b-xl">
          <div className="rounded-t-xl bg-amber/10 text-amber text-xl py-5 px-7 font-medium">
            My goals
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.4 },
            }}
            viewport={{ once: true }}
            className="px-7 py-7 text-gray overflow-hidden"
          >
            <div className="flex gap-[14px] items-center">
              <p className="text-blackMain font-semibold">
                Make $10k extra a month
              </p>
              <div className="bg-amber rounded-lg text-[10px] text-white px-[7px] py-[6px]">
                IN PROGRESS
              </div>
              <div className="ml-auto bg-grayFade px-[7px] py-[3px] rounded-[3.5px]">
                <Image
                  src={"/images/dot-menu.svg"}
                  height={17}
                  width={17}
                  alt={"dot menu"}
                />
              </div>
            </div>
            <p className="text-xs md:text-[15px] mt-2 mb-6">
              You set a goal to make an extra $10k a month, and we will focus on
              these three areas to make it happen:
            </p>
            <ol className="list-decimal ml-4 text-xs md:text-[15px]">
              <li>Taking on coding projects as freelance work.</li>
              <li> Selling some stuff you don&apos;t need anymore.</li>
              <li>Start exploring new job opportunities with higher pay.</li>
            </ol>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-[14px mt-[29px] gap-4">
                <div className="bg-gray/60 w-[90px] rounded-lg h-[27px] animate-pulse"></div>
                <div className="bg-amber rounded-lg text-[10px] text-white px-[7px] py-[6px]">
                  IN PROGRESS
                </div>

                <div className="ml-auto bg-grayFade px-[7px] py-[3px] rounded-[3.5px]">
                  <Image
                    src={"/images/dot-menu.svg"}
                    height={17}
                    width={17}
                    alt={"dot menu"}
                  />
                </div>
              </div>
              <div className="animate-pulse bg-gray/30 w-full h-2.5 rounded-[3px]"></div>
              <div className="animate-pulse bg-gray/30 w-full h-2.5 rounded-[3px]"></div>
              <div className="animate-pulse bg-gray/30 w-1/2 h-2.5 rounded-[3px]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-[83rem] mx-auto pt-[50%] md:pt-[35%] md:pb-[159px] 2xl:pt-[30%] flex flex-col md:flex-row justify-between   relative">
      <div className="absolute top-[16%] right-[15%] md:top-[30%] md:right-1/3 text-redMain">
        <Sparkle />
      </div>
      <div className="absolute bottom-[5%] right-[40%] hidden md:block scale-[0.6] text-redMain">
        <Sparkle />
      </div>
      <div className="absolute bottom-[40%] md:bottom-[35%] -right-[-15%] md:-right-[3%] 2xl:-right-[5%] scale-[0.6] text-blue md:text-amber">
        <Sparkle />
      </div>
      <div className="absolute top-[40%] left-[10%] md:top-[40%] md:left-[15%] 2xl:left-[28%] scale-[0.6] text-blue">
        <Sparkle />
      </div>
      <div className="absolute bottom-[45%] 2xl:bottom-[20%] -left-[-8%] md:-left-[4%] 2xl:-left-[10%] text-amber  scale-[0.8]">
        <Sparkle />
      </div>
      {renderTitle()}
      {renderContent()}
    </div>
  );
};

export default Goals;
