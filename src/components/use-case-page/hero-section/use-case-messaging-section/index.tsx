import { USECASEPAGES } from "@/util/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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

interface MessageType {
  type?: string;
  sender?: string;
  text?: string;
  images?: string[];
  subType?: string;
  goalImage?: string;
}
interface UseCaseMessaginSectionProps {
  selectedUseCaseLink: string;
}
const UseCaseMessaginSection: React.FC<UseCaseMessaginSectionProps> = ({
  selectedUseCaseLink,
}) => {
  const selectedUseCaseTextObject = USECASEPAGES.find((item) =>
    item.link.includes(selectedUseCaseLink)
  );

  const renderContactCard = (name?: string, pfp?: string) => (
    <motion.div
      viewport={{ once: true }}
      className="bg-grayFade md:min-w-[415px] w-full ml-auto mt-6 rounded-[20px] p-4"
      initial={localInitial}
      whileInView={{ ...localWhileInView, transition: { delay: 0.2 } }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {selectedUseCaseTextObject?.contactProfilePicture && (
            <Image
              src={pfp ?? selectedUseCaseTextObject?.contactProfilePicture}
              height={47}
              width={47}
              alt="profile"
              className="rounded-full  h-[37px] w-[37px] md:h-[47px] md:w-[47px]"
            />
          )}
          <p
            className="text-sm text-blackMain font-medium"
            dangerouslySetInnerHTML={{
              __html: (name ?? selectedUseCaseTextObject?.contactName) || "",
            }}
          />
        </div>
        <button className="bg-blue rounded-[20px] px-4 py-2 text-white text-[12px]">
          Connect
        </button>
      </div>
      <div className="flex gap-4 justify-between items-center mt-2.5">
        <div className="flex items-center gap-3">
          <div className="bg-gray/30 rounded-full h-[37px] w-[37px] md:h-[47px] md:w-[47px]"></div>
          <div className="w-[70px] md:w-[100px] bg-gray/30 rounded-md h-5"></div>
        </div>
        <button className="bg-blue rounded-[20px] px-4 py-2 text-white text-[12px]">
          Connect
        </button>
      </div>
      <div className="flex justify-between items-center mt-2.5 opacity-[0.5]">
        <div className="flex items-center gap-3">
          <div className="bg-gray/30 rounded-full h-[37px] w-[37px] md:h-[47px] md:w-[47px]"></div>
          <div className="w-[70px] md:w-[100px] bg-gray/30 rounded-md h-5"></div>
        </div>
        <button className="bg-blue rounded-[20px] px-4 py-2 text-white text-[12px]">
          Connect
        </button>
      </div>
    </motion.div>
  );

  const renderSvgLine = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="374"
        height="324"
        viewBox="0 0 374 324"
        fill="none"
      >
        <path
          opacity="0.7"
          d="M367.139 0.269531C367.139 0.269531 367.214 45.1358 367.275 91.8564C367.336 138.729 329.353 176.728 282.48 176.728H91.6094C44.784 176.728 6.80548 214.652 6.73815 261.477L6.64877 323.629"
          stroke="url(#paint0_linear_250_24057)"
          strokeWidth="12.7307"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_250_24057"
            x1="367.083"
            y1="6.45751"
            x2="-16.217"
            y2="313.753"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DC463B" stopOpacity="0" />
            <stop offset="0.208333" stopColor="#DC463B" />
            <stop offset="0.689592" stopColor="#F1993F" />
            <stop offset="0.817708" stopColor="#4BA1A8" />
            <stop offset="0.971497" stopColor="#4BA1A8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <div className="w-[95%] md:w-[640px]  mt-16 mx-auto flex flex-col">
      {selectedUseCaseTextObject?.texts.map((item: MessageType, index) => {
        const senderProfilePicture =
          item.sender === "user"
            ? selectedUseCaseTextObject?.profilePicture
            : item.sender === "contact"
            ? selectedUseCaseTextObject?.contactProfilePicture
            : item.sender === "contact-2"
            ? selectedUseCaseTextObject?.contactProfilePictureSecond
            : "";
        const bgColor = item.sender === "user" ? "bg-blue/10" : "bg-grayFade";
        const conditionalMargin =
          item.sender === "user" ? "ml-auto" : "mr-auto";

        if (item.type === "new message") {
          return (
            <div
              className="flex items-center  gap-[11px] text-redMain text-xs md:text-base mt-6"
              key={index}
            >
              <div className="bg-redMain h-[2px] flex-1" />
              New messages
              <div className="bg-redMain h-[2px] flex-1" />
            </div>
          );
        }
        return (
          <div key={index}>
            <div
              className={`flex items-start ${
                item.sender !== "user" && "flex-row-reverse"
              } mt-8 gap-3`}
            >
              <motion.div
                viewport={{ once: true }}
                initial={localInitial}
                whileInView={localWhileInView}
                className={` ${conditionalMargin}`}
                key={index}
              >
                {item.type === "loading" ? (
                  <div
                    className={` text-lg text-blackMain  rounded-[20px] mt-[6px] p-[18px] ${bgColor} ${conditionalMargin} `}
                  >
                    <div className="flex gap-1 py-2">
                      <div className="bg-gray w-2 h-2 rounded-full"></div>
                      <div className="bg-gray/50 w-2 h-2 rounded-full"></div>
                      <div className="bg-gray/10 w-2 h-2 rounded-full"></div>
                    </div>
                  </div>
                ) : item.type === "contact-card" ? (
                  <div className={`flex flex-col  ${conditionalMargin}`}>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                      className={`  text-xs md:text-lg text-blackMain  rounded-[20px] mt-[6px] p-[18px] ${bgColor} ${conditionalMargin} `}
                    />
                    {renderContactCard(
                      item?.subType === "contact-2"
                        ? selectedUseCaseTextObject.contactNameSecond
                        : selectedUseCaseTextObject.contactName,
                      item?.subType === "contact-2"
                        ? selectedUseCaseTextObject.contactProfilePictureSecond
                        : selectedUseCaseTextObject.contactProfilePicture
                    )}
                  </div>
                ) : item.type === "address-card" ? (
                  <div className={`flex flex-col  ${conditionalMargin}`}>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                      className={` text-xs md:text-lg text-blackMain  rounded-[20px] mt-[6px] p-[18px] ${bgColor} ${conditionalMargin} `}
                    />
                    {renderContactCard(
                      selectedUseCaseTextObject.address,
                      selectedUseCaseTextObject.addressPfp
                    )}
                  </div>
                ) : item?.images ? (
                  <div
                    className={`flex flex-col  ${conditionalMargin} ${bgColor}  text-xs md:text-lg text-blackMain  rounded-[20px] mt-[6px] p-[12px]`}
                  >
                    {item.text && (
                      <div
                        dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                      />
                    )}
                    <div
                      className={`grid grid-cols-${item.images.length} gap-4 ${
                        item.text && "mt-4"
                      }`}
                    >
                      {item?.images.map((item) => {
                        return (
                          <Image
                            src={item}
                            height={300}
                            width={300}
                            alt="profile"
                            className="object-contain  w-[282px]"
                            key={item}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : item?.type === "svg-line" ? (
                  <div
                    className={`${
                      item.sender === "ai" &&
                      "mr-auto md:translate-x-[12%] my-[-50px] md:my-0 scale-[0.7] md:scale-[0.9]"
                    }`}
                  >
                    {renderSvgLine()}
                  </div>
                ) : item.type === "goal" ? (
                  <div>
                    <div className="flex justify-between items-center bg-amber/10 py-2.5 px-4 rounded-t-[20px] text-amber">
                      <p>Goal created</p>
                      <Image
                        src="/images/goal.svg"
                        height={20}
                        width={20}
                        alt="profile"
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                      className={`  text-xs md:text-lg text-blackMain  rounded-b-[20px]   p-[18px] ${bgColor} ${conditionalMargin} `}
                    />
                  </div>
                ) : item.type === "reply" ? (
                  <div>
                    <div className="flex justify-between items-center bg-redMain/10 py-2.5 px-4 rounded-t-[20px] text-redMain">
                      <p>Replied to image</p>
                     {item?.goalImage&& <Image
                        src={item?.goalImage}
                        height={32}
                        width={51}
                        alt="profile"
                        className="rounded-sm"
                      />}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                      className={`  text-xs md:text-lg text-blackMain  rounded-b-[20px]   p-[18px] ${bgColor} ${conditionalMargin} `}
                    />
                  </div>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                    className={`  text-xs md:text-lg text-blackMain  rounded-[20px] mt-[6px] p-[18px] ${bgColor} ${conditionalMargin} `}
                  />
                )}
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={localInitial}
                whileInView={localWhileInView}
                key={item.text}
              >
                {item.type === "svg-line" ? (
                  <div className="w-[72px]"></div>
                ) : item.sender === "ai" ? (
                  <div className=" h-12 md:h-[72px] w-12 md:w-[72px] flex items-center justify-center bg-peach rounded-full">
                    <Image
                      src={"/images/logo-main.svg"}
                      height={52}
                      width={52}
                      alt="profile"
                      className="object-contain  h-[24px]  w-[24px] md:h-[40px]  md:w-[40px]"
                    />
                  </div>
                ) : (
                  <Image
                    src={senderProfilePicture ?? ""}
                    height={62}
                    width={62}
                    alt="profile"
                    className="object-contain h-12 md:h-[72px] w-12 md:w-[72px] rounded-full"
                  />
                )}
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseCaseMessaginSection;
