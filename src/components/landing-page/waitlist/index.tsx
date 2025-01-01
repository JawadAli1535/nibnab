"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/button";
import CommonHeader from "@/components/common-header";
import CommonWindow from "@/components/common-window";
import MessageAnimation from "@/components/home/timeline/message-animation";
import TitleSection from "@/components/home/timeline/title";
import EarlyAccessInput from "@/components/home/early-access/early-access-input";
import { ScrollAnchor } from "@/components/util/scroll-anchor";

const DUMMY_CHAT = [
  {
    sender: "ai",
    text: "Hey @Jeremy! Last week you told me<br/> that you wanted to take on some more<br/> coding gigs. I found a few, do you want<br/> me to share?",
  },
  {
    sender: "user",
    text: "Hey nibnab! I would love to hear,<br/> thanks!",
  },
];

const WaitList = React.forwardRef<HTMLInputElement>((props, ref) => {
  const renderGoals = () => {
    return (
      <div className="absolute top-[-98%] right-[-45%] shadow-md rounded-[10px] overflow-hidden rotate-[9deg] scale-[0.9] 2xl:scale-100">
        <div className="rounded-t-xl bg-peach text-amber text-sm py-5 px-7 font-medium">
          My goals
        </div>
        <div className="bg-white  text-sm p-[21px]">
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
          <p className="font-normal text-gray mt-2">
            Make an extra $2000 this month by selling
            <br /> some of my stuff, taking on some more freelance
            <br /> gigs and other opportunities that might appear.
          </p>
          <div className="flex gap-[14px] items-center mt-[21px]">
            <p className="text-blackMain font-semibold">
              Find a nanny for the kids
            </p>
            <div className="bg-success rounded-lg text-[10px] text-white px-[7px] py-[6px]">
              COMPLETE
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
          <p className="font-normal text-gray mt-2">
            Make an extra $2000 this month by selling
            <br /> some of my stuff, taking on some more freelance
            <br /> gigs and other opportunities that might appear.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div
      className="max-w-[83rem] overflow-x-hidden  mx-auto min-h-screen flex flex-col md:flex-row items-center justify-around mt-[100px] md:mt-[200px]"
    >
      <div className="md:w-[70%] flex flex-col items-center">
        <CommonWindow mainContainer="md:!w-[60%] !scale-[60%] md:!scale-[100%]">
          <div className="rotate-[-8deg] w-[300px] md:scale-[0.8] 2xl:scale-100 mt-16 ">
            <MessageAnimation
              chat={DUMMY_CHAT}
              isAiChat={true}
              userProfile="/images/dummy-profile-7.png"
            />
          </div>
          {renderGoals()}
        </CommonWindow>
        <div className="bg-white mt-[-100px] w-[90%]  md:mt-[-24px] relative z-[50] shadow-lg rounded-[20px]">
          <div className="bg-grayFade p-4 rounded-[20px]">
            <p className="text-xs md:text-base">
              Please make sure it’s all frond-end gigs that you are sending my
              way.
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-4">
                <Image
                  src="images/image.svg"
                  alt="image"
                  height={20}
                  width={20}
                />
                <Image
                  src="images/mic.svg"
                  alt="image"
                  height={20}
                  width={20}
                />
              </div>
              <div className="bg-blue rounded-md p-1.5">
                <Image
                  src="images/send-text-white.svg"
                  alt="image"
                  height={14}
                  width={14}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <CommonHeader
          title="Join The Waitlist <br/>And Reserve<br/> Your @Handle!"
          titleSmallerScreen="Join The Waitlist And Reserve Your @Handle!"
          description="You will be among the first people to get a chance at<br/> reserving their handle, before we launch for the public!"
          descriptionSmallerScreen="You will be among the first people to get a  chance at reserving their handle, before we launch for the public!"
          containerStyles="!text-left sm:px-3 px-5"
        />

        <ScrollAnchor ref={ref} />

        <EarlyAccessInput />
      </div>
    </div>
  );
});

export default WaitList;
