import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { BusinessMatchLeadConversationMessage } from "@/util/types";

const BusinessMatchDialog = ({
  children,
  leadName,
  leadAvatar,
  messages,
}: {
  children: React.ReactNode;
  leadName?: string;
  leadAvatar?: string;
  messages?: BusinessMatchLeadConversationMessage[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [canBeOpenned, setCanBeOpenned] = useState(false);

  useEffect(() => {
    setCanBeOpenned(messages !== undefined && messages.length > 0);
  }, [messages]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen && canBeOpenned);
      }}
    >
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="bg-white w-[95%] md:w-[806px] p-8 !rounded-[10px] md:!rounded-[19px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <h1 className="font-rubik text-blackSecondary md:text-[32px] font-medium">
              Why Are You Meant To Be?
            </h1>
            <DialogClose>
              <Image
                src="/images/close.svg"
                alt="logo"
                width={24}
                height={24}
                className="h-4 md:h-6 w-4 md:w-6"
              />
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-8 mt-8">
          {messages?.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex ${
                  item.isAgent ? "flex-row-reverse" : ""
                } gap-2 md:gap-4 w-max ${item.isAgent && "ml-auto"}`}
              >
                <Image
                  src={
                    item.isAgent
                      ? "/images/logo-framer-no-padding.png"
                      : leadAvatar || ""
                  }
                  alt="user"
                  width={64}
                  height={64}
                  className="h-8 md:h-[54px] w-8 md:w-[54px] rounded-full"
                />
                <div
                  className={`flex gap-1 md:gap-2 text-blackMain max-w-[189px] md:max-w-[547px] flex-col text-[10px] md:text-[18px] p-2 md:p-4 rounded-[9px] md:rounded-[18px] ${
                    item.isAgent ? "bg-blueFade" : "bg-grayFade"
                  }`}
                >
                  <p className="">{item.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BusinessMatchDialog;
