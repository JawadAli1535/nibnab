"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../button";
import { useRouter } from "next/navigation";

const MatchMobileNavbar = () => {
  const router = useRouter();
  const handlerRoute = () => {
    router.push("/");
  };
  return (
    <div
      className={`z-[999999] p-3 md:p-4 bg-white/50 backdrop-blur-[17px] rounded-full w-[95%] md:w-max sticky top-2 md:top-[50px] mb-10 mx-auto md:hidden`}
    >
      <div className="flex items-center gap-8 justify-between w-full">
        <div className="flex gap-4 items-center">
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
        <CustomButton
          onClick={handlerRoute}
          text="What is nibnab?"
          className="!text-xs md:!text-base !py-3 md:!py-2 !px-4"
        />
      </div>
    </div>
  );
};

export default MatchMobileNavbar;
