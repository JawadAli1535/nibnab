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
          <div className="p-[6px] h-8 w-8 bg-grayFade rounded-md flex items-center justify-center border-coolGray border">
            <Image
              src="/images/twitter-dark.svg"
              alt="Twitter logo"
              height={18}
              width={18}
              className=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`rounded-[16px] w-[calc(100vw-84px)]  md:w-[550px]  shadow-xl ${mainContainer}`}
    >
      {renderHeader()}
      <div className="bg-white">
        <div className="flex items-center justify-between px-8 py-3 border-b border-b-gray/20">
          <div className="flex items-center gap-[5px]">
            <Image
              src="/images/dummy-profile-12.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[30px] h-[30px] object-contain"
            />
            <p className="text-sm text-blackMain font-medium">Brooke S.</p>
          </div>
        </div>
      </div>
      <div
        className={`bg-white rounded-b-[12px] relative min-h-[300px] ${contentStyles}`}
      >
        <div className="absolute w-[120%] left-[-10%]  md:top-[-10%]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CommonWindow;
