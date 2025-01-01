"use client";
import React, { useRef } from "react";
import CommonHeader from "../common-header";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import CustomButton from "../button";
import LineSvg from "../landing-page/how-it-works/line-svg";
import { useScroll, useSpring, motion } from "framer-motion";
import SvgAnimation from "../home/timeline/svg-animation";
import CommonWindow from "./common-window";
import MessageContainer from "./message-container";
import BusinessMatchDialog from "./dialog";
interface DataRowProps {
  name?: string;
  username?: string;
  time: string;
  status: "weak" | "strong" | "medium";
  isLastItem: boolean;
  image?: string;
  socialImage: string;
  type?: string;
}

const HowItWorks = () => {
  const containerTopRef = useRef(null);
  const containerBottomRef = useRef(null);
  const { scrollYProgress: scrollYProgressTop } = useScroll({
    target: containerTopRef,
    offset: ["start center", "end end"],
  });
  const { scrollYProgress: scrollYProgressBottom } = useScroll({
    target: containerBottomRef,
    offset: ["start center", "end end"],
  });
  const yTop = useSpring(scrollYProgressTop, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const yBottom = useSpring(scrollYProgressBottom, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const renderHeroText = () => {
    return (
      <div className="text-center mt-[96px] mb-10 md:my-[96px]">
        <h1 className="text-blackSecondary text-[32px] md:text-[54px] font-semibold">
          How It Works
        </h1>
        <div className="text-sm md:leading-[32px] md:text-[20px] mt-3 md:mt-5">
          <p className="text-gray">
            We use AI to find people on the internet who are asking for
            solutions to the problem
            <br />
            you’re solving and we send them to your website!
          </p>
        </div>
      </div>
    );
  };
  const renderAddWebLinks = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between">
        <CommonHeader
          title={
            "Describe Your<br/> Customer And Add <br/>Your Website Link(s)"
          }
          titleSmallerScreen={
            "Describe Your Customer And Add Your Website Link(s)"
          }
          description={`Match will use this information to find leads and personalize<br/> the outreach based on your ideal customer profile.`}
          containerStyles="!text-left"
          descriptionSmallerScreen="Match will use this information to find leads and personalize the outreach based on your ideal customer profile."
        />
        <div className="match-lp-hero-parent p-4 md:p-8 mt-6 md:mt-0">
          <div className="match-lp-hero-inner-parent p-4 md:p-8">
            <div className="flex flex-col items-center justify-center bg-peachSecondary p-3 md:p-6 rounded-[18px]">
              <div className="w-[calc(100vw-114px)] md:w-[456px] border border-coolGray pt-3 md:pt-0 bg-white pl-3 md:pl-6 h-[138px] rounded-[8px] md:rounded-[18px]">
                <TypewriterEffectSmooth
                  words={[
                    {
                      text: "Short description of your target audience",
                      className:
                        "font-normal !text-[#8F9D9E] text-[9px] md:text-[18px]",
                    },
                  ]}
                  cursorClassName="!bg-[#48A1A9] hidden md:block md:!h-6 md:!mt-3"
                />
              </div>
              <div className="w-[calc(100vw-114px)] md:w-[456px] flex gap-3 md:gap-6 items-center mt-6">
                <div className="bg-white pl-3 md:pl-6 h-[34px] md:h-[62px] pt-3 md:pt-0 border border-coolGray w-[95%] md:w-[85%] rounded-[8px] md:rounded-[18px]">
                  <TypewriterEffectSmooth
                    words={[
                      {
                        text: "Your website link",
                        className:
                          "font-normal !text-[#8F9D9E] text-[9px] md:text-[18px]",
                      },
                    ]}
                    cursorClassName="!bg-[#48A1A9] hidden md:block md:!h-6 md:!mt-3"
                    className="mt-[-4px]"
                  />
                </div>
                <div className="bg-amber w-[22px] md:h-12 h-[22px] md:w-12 rounded-full flex items-center justify-center">
                  <Image
                    src={"/images/plus-icon.svg"}
                    alt="add"
                    className="h-[11px] md:h-6 w-[11px] md:w-6"
                    height={36}
                    width={36}
                  />
                </div>
              </div>
              <CustomButton
                text="Create Project"
                className="mt-6 py-[10px] !text-[9px] !px-4 ml-auto md:!py-4 2xl:!py-6 md:!px-8 2xl:!px-8 text-white md:!text-lg 2xl:text-xl font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderDiscoverLeads = () => {
    return (
      <div className="flex flex-col-reverse mt-[108px] md:mt-0 md:flex-row gap-10 md:items-center  justify-between">
        <div className="match-lp-hero-parent p-4 md:p-8 mt-6 md:mt-0">
          <div className="match-lp-hero-inner-parent p-4 md:p-8">
            <div className="bg-white rounded-[20px] w-[calc(100vw-40%)] mx-auto  md:w-[650px] border-coolGray p-3 md:p-6">
              <DataRow
                image="/images/dummy-profile-12.png"
                name="Brooke S."
                username="brookes21"
                status="medium"
                time="2 min ago"
                isLastItem={false}
                socialImage="/images/twitter-dark.svg"
              />
              <DataRow
                image="/images/dummy-profile-1.png"
                name="Mark D."
                username="mark48d"
                status="medium"
                time="2 min ago"
                isLastItem={false}
                socialImage="/images/reddit.png"
              />
              <DataRow
                status="strong"
                time="2 min ago"
                isLastItem={false}
                socialImage="/images/linkedin.png"
                type="loading"
              />
              <DataRow
                status="strong"
                time="2 min ago"
                isLastItem={true}
                socialImage="/images/fb.png"
                type="loading"
              />
            </div>
          </div>
        </div>{" "}
        <CommonHeader
          title={"Auto-Discover Leads"}
          titleSmallerScreen={"Auto-Discover Leads"}
          description={`Our AI searches the Internet for leads.`}
          containerStyles="!text-left"
          descriptionSmallerScreen="Our AI searches the Internet for leads."
        />
      </div>
    );
  };
  const renderGetToKnow = () => (
    <div className="mt-[96px] md:mt-0 py-[1.5%] flex flex-col md:flex-row justify-around items-center gap-[6%] 2xl:gap-[18%]">
      <CommonHeader
        title={"Outreach On<br/> Auto-Pilot"}
        titleSmallerScreen={"Outreach On<br/> Auto-Pilot"}
        description={`Our AI sales agents initiates a conversation with everyone in the target audience. Pick-up control at any time, or let the auto-pilot land the plane!`}
        containerStyles="!text-left"
        descriptionSmallerScreen="Our AI sales agents initiates a conversation with everyone<br/> in the target audience. Pick-up control at any time, or let <br/>the auto-pilot land the plane!"
      />
      <div className="match-lp-hero-parent p-4 md:p-8 mt-6 md:mt-0">
        <div className="match-lp-hero-inner-parent p-4 md:p-8">
          <CommonWindow>
            <MessageContainer />
          </CommonWindow>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {renderHeroText()}
      <div className="how-it-works-bg max-w-[86rem] 2xl:max-w-[95rem] w-full  mx-auto min-h-screen py-20 md:py-[6.93%] px-[5.18%]">
        <div ref={containerTopRef}>
          {renderAddWebLinks()}
          <div className="mx-auto block md:hidden w-max -mt-5 -mb-[120px] -scale-x-100">
            <LineSvg scrollYProgress={yTop} />
          </div>
          <div className="hidden md:block  -my-[60px] 2xl:-my-[60px] scale-x-[-1]">
            <SvgAnimation scrollYProgress={yTop} />
          </div>
        </div>
        <div ref={containerBottomRef}>
          {renderDiscoverLeads()}
          <div className="mx-auto block md:hidden w-max -mt-5 -mb-[120px]">
            <LineSvg scrollYProgress={yBottom} />
          </div>
          <div className=" hidden md:block -my-[60px] 2xl:-my-[60px]">
            <SvgAnimation scrollYProgress={yBottom} />
          </div>
          {renderGetToKnow()}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

const DataRow = ({
  name,
  username,
  time,
  status,
  isLastItem,
  image,
  socialImage,
  type,
}: DataRowProps) => {
  const statusColor =
    status === "strong"
      ? "bg-success"
      : status === "medium"
      ? "bg-amber"
      : "bg-redMain";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
      className={`flex items-center justify-between ${
        !isLastItem && "border-b border-coolGray"
      } py-[7px] md:py-4`}
    >
      {type !== "loading" ? (
        <div className="flex w-1/4 gap-[5px] md:gap-3 items-center">
          <Image
            src={image || ""}
            height={64}
            width={64}
            className="h-[23px] md:h-[54px] w-[23px] md:w-[54px] rounded-full"
            alt={name || ""}
          />
          <div className="text-[7px] md:text-base">
            <p className="text-blackMain font-medium">{name}</p>
            <p className="text-grayTertiary mt-0.5">@{username}</p>
          </div>
        </div>
      ) : (
        <div className="flex w-1/4 gap-[5px] md:gap-3 items-center">
          <div className="h-[23px] md:h-[54px] min-w-[23px] md:w-[54px] bg-grayFade rounded-full" />
          <div>
            <div className="w-[45px] md:w-[88px] bg-grayFade rounded-md h-2 md:h-5"></div>
            <div className="w-[37px] md:w-[74px] mt-1 bg-grayFade rounded-md h-2 md:h-5"></div>
          </div>
        </div>
      )}
      <div className="p-0.5 md:p-[6px] h-[14px] md:h-8 w-[14px] md:w-8 bg-grayFade rounded-[2.6px] md:rounded-md flex items-center justify-center border-coolGray border">
        <Image
          src={socialImage}
          alt="Twitter logo"
          height={18}
          width={18}
          className=""
        />
      </div>
      <div className="hidden md:block">
        <BusinessMatchDialog>
          <p className="text-blue text-[6.92px] md:text-base text-center">
            See reason
          </p>
        </BusinessMatchDialog>
      </div>
      <div className="flex items-center gap-1 md:gap-2 ">
        <div
          className={`h-[5px] md:h-3 w-[5px] md:w-3 rounded-full ${statusColor}`}
        ></div>
        <p className="text-blackSecondary text-[6.92px] md:text-base font-medium uppercase">
          {status}
        </p>
      </div>
      <p className="text-graySecondary text-[6.92px] md:text-base">{time}</p>
    </motion.div>
  );
};
