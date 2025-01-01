"use client";
import React from "react";
import MessageBox from "./message-box";
import Image from "next/image";
import CustomButton from "./button";
import { useRouter } from "next/navigation";

const WorkWithNibnab = () => {
  const navigate = useRouter();
  return (
    <div className=" md:max-w-[95%] md:px-5 mx-auto font-rubik text-blackMain">
      <div className="use-case-bg w-full flex-col flex items-center justify-center pt-[96px] md:pb-[128px]  md:pt-[160px]">
        <h1 className="font-semibold text-[45px] md:text-[73px] 2xl:text-[80px] text-center">
          Work with&nbsp;<br className="md:hidden"/><span className="text-redMain">nib</span>
          <span className="text-blue">nab</span>
        </h1>
        <div className="flex flex-col items-end gap-8 mt-16 md:mt-[96px]">
          <div className="flex gap-[13px] md:gap-8">
            <div className="relative box-shadow-team-text  bg-peach h-12 w-12 xl:h-16 xl:w-16 2xl:h-[74px] 2xl:w-[74px] flex items-center justify-center rounded-full">
              <Image
                src={"images/logo-main.svg"}
                height={35}
                width={35}
                alt="profile"
                className="h-[24px]  w-[24px] xl:h-[34px] 2xl:h-[40px] xl:w-[34px] 2xl:w-[40px]"
              />
            </div>
            <MessageBox
              content={{
                sender: "ai",
                text: "If you want to change the world, and your talents match an open <br/>position of ours - lets chat!",
                customCss:
                  "hidden md:block text-base 2xl:text-lg box-shadow-team-text  rounded-[20px] p-5",
              }}
            />
            <MessageBox
              content={{
                sender: "ai",
                text: "If you want to change the world,<br/> and your talents match an open<br/> position of ours - lets chat!",
                customCss:
                  "block md:hidden text-xs box-shadow-team-text  rounded-[15px] p-3",
              }}
            />
          </div>

          <CustomButton
            onClick={() => {
              navigate.push(
                "https://nibnab.notion.site/Careers-at-nibnab-f77e0f7573554b00bbfc47f748383311"
              );
            }}
            text="Open Positions"
            className={"w-[74%] md:w-[84%] !py-2 md:!py-4 !leading-[26px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithNibnab;
