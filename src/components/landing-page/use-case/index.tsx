"use client";
import TitleSection from "@/components/home/timeline/title";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { USECASES, initial } from "@/util/constants";
import UseCases from "@/components/home/use-cases";

interface CardProps {
  text: string;
  image: string;
  color: string;
  link: string;
}

const UseCase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(USECASES.length / itemsPerPage);

  const renderUseCaseCard = (item: CardProps, index: number) => (
    <Link href={`${item.link}`} key={item.text}>
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

  const renderUseCaseCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
      <div className="grid grid-cols-1 w-[90%] md:w-full md:grid-cols-3 mx-auto max-w-[83rem] gap-8 mt-16 relative z-50">
        {USECASES.slice(startIndex, endIndex).map((item, index) => (
          <React.Fragment key={index}>
            {renderUseCaseCard(item, index)}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageDots = () => {
    const dots = [];

    for (let i = 1; i <= totalPages; i++) {
      dots.push(
        <div
          key={i}
          className={`w-4 h-4 rounded-full ${
            currentPage === i ? "bg-coolGray" : "bg-blue/50"
          }`}
        />
      );
    }

    return dots;
  };
  const renderPaginationButtons = () => {
    return (
      <div className="flex justify-center items-center gap-[56px] mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`p-[5px] rounded-lg h-[26px] w-[26px] ${
            currentPage === 1 ? "bg-blue/50  cursor-not-allowed" : "bg-blue"
          }`}
          disabled={currentPage === 1}
        >
          <Image
            src={"/images/arrow-white.svg"}
            height={26}
            width={26}
            alt={"arrow"}
            className="scale-x-[-1]"
          />
        </button>
        <div className="flex gap-6">{renderPageDots()}</div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`p-[5px] rounded-lg h-[26px] w-[26px] ${
            currentPage === totalPages
              ? "bg-blue/50 cursor-not-allowed"
              : "bg-blue"
          }`}
          disabled={currentPage === totalPages}
        >
          <Image
            src={"/images/arrow-white.svg"}
            height={26}
            width={26}
            alt={"arrow"}
          />
        </button>
      </div>
    );
  };

  return (
    <div className="pt-[160px] md:pt-[200px]">
      <div className="use-case-bg max-w-[83rem] mx-auto min-h-screen py-[6.93%] px-[5.18%] hidden md:block ">
        <TitleSection
          customClassName="text-center mx-auto"
          title="Use Cases"
          description="With nibnab, your possibilities are endless. Below, you'll<br/> find a handful of use cases that can be particularly handy."
        />
        <div className="hidden md:block min-h-[300px]">{renderUseCaseCards()}</div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {renderPaginationButtons()}
          </div>
        )}
      </div>
      <div className="md:hidden use-case-bg pt-[130px]">
        <UseCases />
      </div>
    </div>
  );
};

export default UseCase;
