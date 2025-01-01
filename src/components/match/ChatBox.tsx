"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MatchButton } from "./NibnabWorkflow";

type IContent = {
  title?: string;
  text: string;
  image?: string;
  href?: string;
  customCss?: string;
  rowReverse?: boolean;
  contact?: string;
  btnColor?: string;
  sender?: string;
};

interface ChatBoxProps {
  content: IContent;
}

const ChatBox: React.FC<ChatBoxProps> = ({ content }) => {
  const {
    text,
    title,
    image,
    href,
    customCss,
    rowReverse,
    contact,
    btnColor,
    sender,
  } = content;

  const bgColor = sender === "user" ? "bg-blueFade" : "bg-grayFade";
  return (
    <div
      className={`flex gap-[24px] w-full ${
        rowReverse ? "flex-row-reverse" : ""
      } ${customCss}`}
    >
      <div>
        <Message title={title} text={text} bgColor={bgColor} />
        {contact && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <MatchButton
              title={contact}
              className={`mt-4 w-full ${btnColor}`}
              shadow
              href={href}
            />
          </motion.div>
        )}
      </div>
      <div>
        {image && (
          <motion.span
            className="rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            style={{ boxShadow: "0px 4px 7px 0px rgba(28, 31, 42, 0.13)" }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt="profile"
              width={82}
              height={82}
              className="rounded-full"
            />
          </motion.span>
        )}
      </div>
    </div>
  );
};

export default ChatBox;

interface MessageProps {
  title?: string;
  text: string;
  bgColor?: string;
}

export const Message = ({ title, text, bgColor }: MessageProps) => {
  return (
    <motion.div
      className={`text-[12.76px] text-blackMain rounded-[14.2px] p-[11.34px] max-w-[220px] md:max-w-[366px] ${bgColor}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, delay: 0.2 },
      }}
      viewport={{ once: true }}
      style={{ boxShadow: "0px 4px 7px 0px rgba(28, 31, 42, 0.13)" }}
    >
      <div>
        <h6 className="text-blackMain text-[18px] font-medium font-rubik">
          {title}
        </h6>
        <p
          className="text-[18px] font-normal leading-[27px] text-blackMain font-rubik"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </motion.div>
  );
};
