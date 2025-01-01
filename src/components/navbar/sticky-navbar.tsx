"use client";
import { navLinks } from "@/util/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "../button";

const StickyNavbar = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className={`z-[999999] p-3 md:p-4 bg-white/50 backdrop-blur-[17px] ${
        menuOpen ? "rounded-[25px]" : "rounded-full"
      } w-[95%] md:w-max fixed top-2 md:top-[50px] left-1/2 -translate-x-1/2`}
    >
      <div className="flex items-center gap-8 justify-between w-full">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="ml-2 md:hidden"
          >
            <Image src="/images/menu.svg" alt="menu" height={24} width={24} />
          </button>
          <Link
            href={"/"}
            className="md:border-[1px] md:border-amber rounded-full md:py-2 md:px-4"
          >
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={106}
              height={22}
              className="h-[18px] w-[85px] md:h-[22px] md:w-[106px] object-contain"
            />
          </Link>
        </div>
        <div className="md:flex gap-6 hidden">
          {navLinks.map((links) => {
            return (
              <Link href={links.href} key={links.title} className="text-lg">
                {links.title}
              </Link>
            );
          })}
        </div>
        <CustomButton
          onClick={() => {onCTAClick && onCTAClick()}}
          text="Get early access"
          className="!text-xs md:!text-base !py-3 md:!py-2 !px-4"
        />
      </div>
      {menuOpen && (
        <div className="flex flex-col items-start gap-4 py-4 px-4">
          {navLinks.map((links) => {
            return (
              <Link
                href={links.href}
                key={links.title}
                className="text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {links.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StickyNavbar;
