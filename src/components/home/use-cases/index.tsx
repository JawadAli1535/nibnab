"use client";
import { USECASES, initial, whileInView } from "@/util/constants";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CardProps {
  text: string;
  image: string;
  color: string;
  link: string;
}
const UseCases = () => {
  const [sliderMovement, setSliderMovement] = useState(0);
  const pathname = usePathname();
  const renderTitle = () => {
    return (
      <>
        <motion.div
          whileInView={whileInView}
          initial={initial}
          viewport={{ once: true }}
          className="font-semibold text-[44px] md:text-[55px] text-blackMain 2xl:text-[64px] leading-[48px] md:leading-[58px] 2xl:leading-[68px] text-center"
        >
          <h1>An ocean of</h1>
          <h1>use cases</h1>
        </motion.div>
        <motion.div
          whileInView={whileInView}
          initial={initial}
          viewport={{ once: true }}
          className="text-gray md:text-lg 2xl:text-xl mt-4 text-center"
        >
          <p>
            With nibnab, your possibilities are endless.{" "}
            <br className="md:hidden block" /> Below, you&apos;ll
            <br className="hidden md:block" />
            find a handful of use cases that <br className="md:hidden block" />
            can be particularly handy.{" "}
          </p>
        </motion.div>
      </>
    );
  };
  const isHome = pathname === "/";

  const renderUseCaseCard = (item: CardProps, index: number) => (
    <Link
      href={`${item.link}`}
      key={item.text}
      className={`${
        !isHome && item.link === pathname && "grayscale pointer-events-none"
      }`}
    >
      <motion.div
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, delay: index * 0.2 },
        }}
        initial={initial}
        className={`bg-${item.color}/10 text-${item.color} font-medium  md:text-lg 2xl:text-xl rounded-xl py-4 px-8 cursor-pointer  hover:border-${item.color} hover:border-[1px] h-[130px] min-w-[280px] md:min-w-auto`}
      >
        <div className="flex justify-between mb-2 md:mb-0">
          <Image
            src={item.image}
            alt="logo"
            width={1000}
            height={1000}
            className="h-6 w-6"
          />
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-25"
          >
            <path
              d="M25.8541 11.6667L9.52078 28.2495C8.8797 28.9004 8.8797 29.9557 9.52078 30.6066C10.1619 31.2574 11.2013 31.2574 11.8423 30.6066L28.1758 14.0236L28.1758 23.3334C28.1758 24.2539 28.9108 25.0001 29.8174 25.0001C30.724 25.0001 31.459 24.2539 31.459 23.3334V10.0001C31.459 9.07958 30.724 8.33339 29.8174 8.33339L16.6847 8.33339C15.7781 8.33339 15.0431 9.07958 15.0431 10.0001C15.0431 10.9205 15.7781 11.6667 16.6847 11.6667L25.8541 11.6667Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div dangerouslySetInnerHTML={{ __html: item.text }} />
      </motion.div>
    </Link>
  );

  const sliderButtons = () => {
    return (
      <div className="ml-auto w-max mr-4 flex md:hidden gap-4 mt-6 ">
        <button
          onClick={() => {
            setSliderMovement((prev) => (prev === 0 ? prev : prev - 1));
          }}
          className={`py-2 px-4 bg-blue/10 rounded-md`}
        >
          <Image
            src={"/images/arrow.svg"}
            height={22}
            width={22}
            alt={"arrow"}
            className={`scale-[-1] opacity-${sliderMovement === 0 ? 30 : 100}`}
          />
        </button>
        <button
          onClick={() => {
            setSliderMovement((prev) => (prev === USECASES.length-1 ? prev : prev + 1));
          }}
          className={`py-2 px-4 bg-blue/10 rounded-md`}
        >
          <Image
            src={"/images/arrow.svg"}
            height={22}
            width={22}
            alt={"arrow"}
            className={`opacity-${sliderMovement === USECASES.length-1 ? 30 : 100}`}
          />
        </button>
      </div>
    );
  };

  const renderUseCaseCards = () => {
    return (
      <div className="grid grid-cols-1 w-[90%] md:w-full md:grid-cols-3 mx-auto max-w-[83rem] gap-8 mt-16 relative z-50">
        {USECASES.map((item, index) => (
          <React.Fragment key={index}>
            {renderUseCaseCard(item, index)}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`relative z-[50] ${
        isHome
          ? "min-h-screen md:-mt-[80px] 2xl:-mt-[100px]"
          : "mt-[250px] md:mt-[400px]"
      }`}
    >
      {renderTitle()}
      {!isHome && <div className="block md:hidden">{renderUseCaseCards()}</div>}
      <div className="hidden md:block">{renderUseCaseCards()}</div>
      {isHome && (
        <div className="overflow-x-hidden block md:hidden w-full mt-12">
          <div
            className={`flex gap-4  p-8`}
            style={{
              transform: `translateX(${-sliderMovement * 296}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {USECASES.map((item, index) => (
              <div key={`useCaseCard${index}`} className="my-4">
                {renderUseCaseCard(item, index)}
              </div>
            ))}
          </div>
        </div>
      )}
      {isHome && sliderButtons()}
      {isHome && (
        <Image
          src="/images/curve.svg"
          alt="curve"
          width={1000}
          height={1000}
          className={
            "md:block hidden absolute scale-[-1] bottom-[200px] md:bottom-[-250px]  left-0 right-0 w-full"
          }
        />
      )}
    </div>
  );
};

export default UseCases;
