import Image from "next/image";
import React from "react";

type IContent = {
  text?: string;
  sender: string;
  time?: string;
  image?: string;
  customCss?: string;
  link?: string;
};

interface MessageBoxProps {
  content?: IContent;
  children?: React.ReactNode;
}

const MessageBox: React.FC<MessageBoxProps> = ({ content = {}, children }) => {
  const { text, sender, time, image, customCss, link } = content as IContent;
  const bgColor = sender === "user" ? "bg-blueFade" : "bg-grayFade";
  const conditionalMargin = sender === "user" ? "ml-auto" : "";
  return (
    <div
      className={`text-[12.76px] text-blackMain  rounded-[14.2px] p-[11.34px] ${bgColor} ${conditionalMargin} ${customCss}`}
    >
      {text || image ? (
        <div className="flex items-end gap-4 justify-between">
          {text && (
            <div className="flex flex-col">
              <div dangerouslySetInnerHTML={{ __html: text }} />{" "}
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue"
              >
                {link}
              </a>
            </div>
          )}

          {image && (
            <Image
              src={image}
              alt="image"
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
          )}
          {!image && (
            <div className="text-gray/40 font-light whitespace-nowrap">
              {time}
            </div>
          )}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default MessageBox;
