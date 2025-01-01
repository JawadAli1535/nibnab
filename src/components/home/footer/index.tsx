"use client";
import CustomButton from "@/components/button";
import { FOOTERLINKS } from "@/util/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarlyAccessInput from "@/components/home/early-access/early-access-input";

const Footer = () => {
  return (
    <div className="md:px-5  md:pb-10 md:max-w-[95%] mt-[112px] md:mt-0 mx-auto">
      <div className="bg-blue  rounded-t-[16px] md:rounded-[32px] px-3 py-[64px] md:p-[80px] ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/images/footer-logo.svg"
                alt="footer"
                width={189}
                height={41}
              />
              <p className="text-white font-medium text-lg mt-[51px]">
                Join The Waitlist
              </p>
            </div>
            <EarlyAccessInput isSmall />
          </div>
          <div className="flex flex-col md:flex-row md:w-1/3 justify-between">
            <div className="flex flex-col gap-8 mt-16 md:mt-0">
              {FOOTERLINKS.links.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.title}
                    className="text-white text-center md:text-left md:text-lg 2xl:text-xl font-normal"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-8 mt-8 md:mt-0">
              {FOOTERLINKS.resources.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.title}
                    className="text-white text-center md:text-left md:text-lg 2xl:text-xl font-normal"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="border-grayFade/40 mt-20" />
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mt-6">
          <div className="flex  gap-8">
            {FOOTERLINKS.terms.map((item) => {
              return (
                <a
                  href={item.href}
                  key={item.title}
                  className="text-white  md:text-lg 2xl:text-xl font-normal"
                >
                  {item.title}
                </a>
              );
            })}
          </div>
          <div className="flex  gap-4">
            {FOOTERLINKS.socials.map((item, i) => {
              return (
                <Link
                  href={item.href}
                  key={i}
                  className="bg-black/20 rounded-full p-2.5 cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.href}
                    width={14}
                    height={14}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
