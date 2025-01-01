"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "../button";
import Link from "next/link";

const Navbar = ({ onCTAClick }: { onCTAClick?: () => void }) => {
  return (
    <div className="max-w-[83rem] hidden mx-auto md:flex items-center justify-between p-[44px] sticky top-0 z-[555]">
      <Link href={"/"}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={135}
          height={33}
          className="h-[41px] w-[169px] object-contain"
        />
      </Link>
      <CustomButton
        onClick={() => {
          if (onCTAClick) onCTAClick();
        }}
        text="Get Early Access"
      />
    </div>
  );
};

export default Navbar;
