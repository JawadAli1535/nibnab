"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "../button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MatchNavbar = () => {
  const router = useRouter();
  const handlerRoute = () => {
    router.push("/");
  };
  return (
    <div className="max-w-[83rem] hidden mx-auto md:flex items-center justify-between p-[44px] relative z-[555]">
      <Link href={"/"}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={135}
          height={33}
          className="h-[41px] w-[169px] object-contain"
        />
      </Link>
      <div className="py-[6px] px-[8px] rounded-[4px] text-[12px] font-medium font-rubik text-white bg-redMain mr-auto ml-[12px]">
        JOIN BETA NOW
      </div>
      <CustomButton onClick={handlerRoute} text="What is nibnab?" />
    </div>
  );
};

export default MatchNavbar;
