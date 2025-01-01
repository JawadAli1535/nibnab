"use client";
import { USECASEPAGES } from "@/util/constants";
import { usePathname } from "next/navigation";
import React from "react";
import UseCaseMessaginSection from "./use-case-messaging-section";
import Image from "next/image";

const HeroSection = () => {
  const pathname = usePathname();
  const selectedUseCase = USECASEPAGES.find((useCase) =>
    pathname.includes(useCase.link)
  );
  return (
    <div className="h-auto">
      <Image
        src={"/images/logo-main.svg"}
        height={32}
        width={32}
        alt="logo"
        className="mx-auto mt-[100px] mb-8 block md:hidden"
      />
      <h2 className="text-gray  md:text-xl 2xl:text-3xl font-medium text-center">
        I texted nibnab
      </h2>
      <h1
        dangerouslySetInnerHTML={{ __html: selectedUseCase?.title ?? "" }}
        className="text-center text-blackMain text-[45px] md:text-[55px] leading-[55px] md:leading-[69px] my-4 md:my-6 2xl:text-[70px] 2xl:leading-[74px] font-semibold"
      />
      <h2 className="text-gray md:text-xl 2xl:text-3xl font-medium text-center">
        Below is the outcome
      </h2>
      {selectedUseCase && (
        <UseCaseMessaginSection selectedUseCaseLink={selectedUseCase?.link} />
      )}
      <Image
        src={"/images/curve-1.svg"}
        height={1000}
        width={1000}
        className="sticky bottom-[0%] md:-bottom-[40%] w-full z-[10]"
        alt="curve"
      />
    </div>
  );
};

export default HeroSection;
