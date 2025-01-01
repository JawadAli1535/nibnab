import Image from "next/image";
import React from "react";

const CommonWindow = ({
  children,
  contentStyles,
  mainContainer,
}: {
  children: React.ReactNode;
  contentStyles?: string;
  mainContainer?: string;
}) => {
  const renderHeader = () => {
    return (
      <div className="flex items-center bg-[#f7f7f7] justify-between py-[18px] px-6 rounded-t-[18px]">
        <div className="flex  items-center gap-6">
          <div className="flex gap-[6.8px] ">
            {["bg-[#F96057]", "bg-[#F8CE52]", "bg-[#5FCF65]"].map((item) => {
              return (
                <div
                  className={`${item} rounded-full h-[10.6px] w-[10.6px]`}
                  key={item}
                ></div>
              );
            })}
          </div>
          <div className="flex items-center gap-[12px]">
            <Image
              src="/images/arrow-left.svg"
              className="h-[21px] w-[21px]"
              alt="icon"
              height={21}
              width={21}
            />
            <Image
              src="/images/arrow-left.svg"
              className="h-[21px] w-[21px] scale-[-1]"
              alt="icon"
              height={21}
              width={21}
            />
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <Image
            src="/images/send.svg"
            className="h-[14px] w-[14px]"
            alt="icon"
            height={21}
            width={21}
          />
          <Image
            src="/images/add.svg"
            className="h-[14px] w-[14px] scale-[-1]"
            alt="icon"
            height={21}
            width={21}
          />
          <Image
            src="/images/copy.svg"
            className="h-[14px] w-[14px] scale-[-1]"
            alt="icon"
            height={21}
            width={21}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`rounded-[16px] w-full scale-[0.75] md:scale-100 md:w-[36%]  shadow-xl ${mainContainer}`}
    >
      {renderHeader()}
      <div className="bg-white">
        <div className="flex items-center justify-between px-8 py-3 border-b border-b-gray/20">
          <div className="flex items-center gap-[5px]">
            <Image
              src="/images/logo-main.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[30px] h-[30px] object-contain"
            />
            <p className="text-sm text-blackMain font-medium">nibnab</p>
            <p className="bg-redMain text-white rounded-[3px] text-[6px] font-medium px-1 py-[2px]">
              BOT
            </p>
          </div>
        </div>
      </div>
      <div
        className={`bg-white rounded-b-[12px] relative min-h-[300px] ${contentStyles}`}
      >
        <div className="absolute -left-[20%] w-full">{children}</div>
      </div>
    </div>
  );
};

export default CommonWindow;
