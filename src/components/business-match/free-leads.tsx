"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import CustomButton from "../button";
import Image from "next/image";
import { motion } from "framer-motion";
import BusinessMatchDialog from "./dialog";
import {
  BusinessMatchData,
  BusinessMatchLeadConversationMessage,
} from "@/util/types";

const FreeLeads = (businessMatch: BusinessMatchData) => {
  const navigate = useRouter();
  const renderHeader = () => {
    return (
      <div className="text-center">
        <h1 className="text-blackSecondary text-[32px] md:text-[54px] font-semibold">
          Your Free Leads
        </h1>
        <div className="text-sm md:leading-[32px] md:text-[20px] mt-3 md:mt-5">
          <p className="text-gray">
            We found{" "}
            <span className="font-bold">{businessMatch.leads.length}</span>{" "}
            leads who are interested in your product.
            <br />
            Want more? Sign up below!
          </p>
        </div>
        <CustomButton
          onClick={() => navigate.push(businessMatch.ctaLinkUrl || "/")}
          text="Get More"
          className="mt-6 md:mt-12"
        />
      </div>
    );
  };

  return (
    <div className="free-leads-container mt-[96px] max-w-[86rem] 2xl:max-w-[95rem] px-3 md:px-[77px] py-16 md:py-[96px] mx-auto">
      {renderHeader()}
      <div className="px-3 md:px-6 md:py-2 bg-white rounded-[18px] mt-8 md:mt-[96px] border border-coolGray">
        {businessMatch.leads.map((lead, index) => (
          <DataRow
            key={index}
            name={lead.name}
            username={lead.name}
            conversation={lead.conversation}
            time={new Date()
              .setMilliseconds(
                new Date().getMilliseconds() - 3 * 60 * 60 * 1000 * (index + 1)
              )
              .toString()}
            status={"strong"}
            isLastItem={index === businessMatch.leads.length - 1}
            image={lead.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default FreeLeads;

interface DataRowProps {
  name: string;
  username: string;
  time: string;
  status: "weak" | "strong" | "medium";
  isLastItem: boolean;
  image: string;
  conversation: BusinessMatchLeadConversationMessage[];
}

const DataRow = ({
  name,
  username,
  time,
  status,
  isLastItem,
  image,
  conversation,
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
      } py-2.5 md:py-4`}
    >
      <div className="flex gap-[6px] md:gap-3 items-center w-[40%] md:w-1/6">
        <Image
          src={image}
          height={64}
          width={64}
          className="h-[32px] md:h-[54px] w-[32px] md:w-[54px] rounded-full"
          alt={name}
        />
        <div className="text-[10px] md:text-base">
          {/* <p className="text-blackMain font-medium">{name}</p> */}
          <p className="text-blackMain font-medium mt-[2px] md:mt-1">
            @{username}
          </p>
        </div>
      </div>
      <div className="w-1/4 md:w-1/6 hidden md:flex justify-center">
        <div className="w-max bg-blue font-medium text-sm px-2 py-[6px] rounded-md uppercase text-white">
          collected
        </div>
      </div>
      <div className="p-[3px] md:p-[6px] md:h-8 w-[18px] h-[18px] md:w-8 bg-grayFade rounded-md flex items-center justify-center border-coolGray border">
        <Image
          src="/images/twitter-dark.svg"
          alt="Twitter logo"
          height={18}
          width={18}
          className=""
        />
      </div>
      <p className="text-blue w-1/4 md:w-1/6 text-[10px] md:text-base text-center">
        <BusinessMatchDialog
          leadName={username}
          leadAvatar={image}
          messages={conversation}
        >
          See reason
        </BusinessMatchDialog>
      </p>
      <div className="md:flex hidden items-center gap-2  w-1/4 md:w-1/6">
        <div className={`h-3 w-3 rounded-full ${statusColor}`}></div>
        <p className="text-blackSecondary font-medium uppercase">{status}</p>
      </div>
      {/* <p className="text-graySecondary w-1/4 md:w-1/12 text-right text-[10px] md:text-base">
        {time}
      </p> */}
    </motion.div>
  );
};
