import Image from "next/image";
import React from "react";
import ChatBox from "./ChatBox";
import { PostData } from "@/util/types";

interface ConnectivityInsightProps {
  postA: PostData;
  postB: PostData;
}

const ConnectivityInsight = ({
  postA,
  postB
}: ConnectivityInsightProps) => {
  return (
    <div className="overflow-x-hidden connectivity-insight-bg max-w-[83rem] mx-auto py-[70px] lg:py-[96px] px-[20px] lg:px-[77px] flex items-center justify-center gap-[30px] lg:gap-0 lg:justify-between flex-col lg:flex-row">
      <div className="font-rubik max-w-[484px]">
        <h2 className="text-blackSecondary text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px]">
          The Signal Of Connection?
        </h2>
        <p className="mt-[32px] font-normal text-sm md:leading-[25px] md:text-[18px] text-gray">
          We listened carefully and picked up some of your recent activity.
        </p>
      </div>
      <div>
        <div className="relative">
          <Box />
          <div className="flex flex-col w-max items-center justify-center gap-[30px] min-h-[500px] max-w-[100%]">
            <div className="w-max max-w-[100%]">
              <ChatBox
                content={{
                  text: postB.content,
                  image: postB.author.avatar,
                  title: postB.author.name,
                  sender: "user",
                }}
              />
            </div>
            <div className="w-max  max-w-[100%]">
              <ChatBox
                content={{
                  text: postA.content,
                  image: postA.author.avatar,
                  title: postA.author.name,
                  rowReverse: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectivityInsight;

const Box = () => {
  return (
    <div className="absolute -z-10 w-max conversation-sub-container p-10 md:p-14">
      <div className="conversation-sub-container p-8 md:p-12">
        <div className="conversation-container-red p-8 md:p-10">
          <div className="p-4 md:p-10 conversation-border rounded-full">
            <Image
              src={"/images/logo-main.svg"}
              height={128}
              width={128}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
