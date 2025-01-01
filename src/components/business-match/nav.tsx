import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="max-w-[83rem]  mx-auto flex items-center justify-between px-3 py-4 md:py-5">
      <div className="flex gap-1 md:gap-2 items-center relative">
        <Link
          href={"/"}
          className="w-8 md:w-[56px] p-1 md:p-3 h-8 md:h-[56px] bg-peach rounded-[3.33px] md:rounded-[10px]"
        >
          <Image
            src="/images/logo-main.svg"
            alt="logo"
            width={135}
            height={33}
            className=" object-contain"
          />
        </Link>
        <p className="text-blackSecondary font-semibold font-rubik text-[18px] md:text-[28px]">
          Match
        </p>
        <div className="text-white bg-redMain uppercase md:absolute right-[-50px] top-2 md:px-2 px-1 py-0.5 md:py-[6px] rounded-[4px] text-[8px] md:text-[10px]">
          beta
        </div>
      </div>
    </div>
  );
};

export default Nav;
