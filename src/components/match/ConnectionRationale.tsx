import React from "react";
import ChatBox from "./ChatBox";

interface ConnectionRationaleProps {
  description: string;
}

const ConnectionRationale = ({ description }: ConnectionRationaleProps) => {
  return (
    <div className="overflow-x-hidden connection-rationale-bg max-w-[83rem] mx-auto py-[70px] lg:py-[128px] px-[20px] lg:px-[77px] flex items-center justify-center gap-[30px] lg:gap-0 lg:justify-between flex-col-reverse lg:flex-row">
      <div>
        <div className="relative">
          <div className="">
            <ChatBox
              content={{
                text: description,
                image: "/images/logo-frame.png",
                rowReverse: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="font-rubik max-w-[484px]">
        <h2 className="text-blackSecondary text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px]">
          Why You Two Are A Match?
        </h2>
        <p className="mt-[32px] font-normal text-sm md:leading-[25px] md:text-[18px] text-gray">
          Check what nibnab has to say about your connection.
        </p>
      </div>
    </div>
  );
};

export default ConnectionRationale;
