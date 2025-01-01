'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Footer from '../home/footer';

const GrantSection = () => {
  const images = [
    '/images/proudpartnerimg1.png',
    '/images/proudpartnerimg2.png',
    '/images/proudpartnerimg3.png',
    '/images/proudpartnerimg4.png',
    '/images/proudpartnerimg5.png',
    '/images/proudpartnerimg6.png',
    '/images/proudpartnerimg7.png',
    '/images/proudpartnerimg8.png',
    '/images/proudpartnerimg9.png',
    '/images/proudpartnerimg10.png',
    '/images/proudpartnerimg11.png',
    '/images/proudpartnerimg12.png',
    '/images/proudpartnerimg13.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="relative -z-10 ">
        <Image
          src={'/images/curve-1.svg'}
          height={1000}
          width={1000}
          className="hidden md:block w-full mt-[-40px] md:mt-[-14%] mb-[-40px] md:mb-[-17%] 2xl:mb-[-20%]"
          alt="curve"
        />
        <Image
          src={'/images/curve-smaller.svg'}
          height={1000}
          width={1000}
          className="block md:hidden w-full mt-[-40px] md:mt-[-180px] mb-[-40px] md:mb-[-250px] 2xl:mb-[-300px]"
          alt="curve"
        />
      </div>
      {/* grant */}
      <section className="how-it-works-bg flex justify-center items-center max-w-full md:max-w-[83rem]  my-[100px] lg:mx-auto  min-h-[600px] lg:min-h-[807px] z-20">
        <div className="lg:mx-[77px] w-full   md:h-[437px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-blackSecondary   text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px]">
              Grants
            </h2>
            <p className="text-gray md:leading-[30px] mx-[20px] md:mx-[140px] text-center text-[13.5px]  md:text-[20px] mt-5">
              We’re thrilled to have been awarded grants from Pioneers of the
              Tech Industry, Who rule the industry from over 3 decades,
              empowering us to push the boundaries of innovation, expand our
              capabilities, and deliver transformative solutions to our users.
            </p>
          </div>
          <div className="mx-[30px] md:mx-[77px] mt-[80px] md:mt-[128px] grid grid-cols-2 md:grid-cols-4 items-center gap-[20px] md:gap-[32px]">
            <Image
              src={'/images/microsoft.png'}
              width={310}
              height={120}
              //   height={1000}
              //   width={1000}
              //   className="block md:hidden w-full mt-[-40px] md:mt-[-180px] mb-[-40px] md:mb-[-250px] 2xl:mb-[-300px]"
              alt="curve"
            />
            <Image
              src={'/images/openai.png'}
              width={310}
              height={120}
              //   height={1000}
              //   width={1000}
              //   className="block md:hidden w-full mt-[-40px] md:mt-[-180px] mb-[-40px] md:mb-[-250px] 2xl:mb-[-300px]"
              alt="curve"
            />
            <Image
              src={'/images/elevenlabs.png'}
              width={310}
              height={120}
              //   height={1000}
              //   width={1000}
              //   className="block md:hidden w-full mt-[-40px] md:mt-[-180px] mb-[-40px] md:mb-[-250px] 2xl:mb-[-300px]"
              alt="curve"
            />
            <Image
              src={'/images/aws.png'}
              width={310}
              height={120}
              //   height={1000}
              //   width={1000}
              //   className="block md:hidden w-full mt-[-40px] md:mt-[-180px] mb-[-40px] md:mb-[-250px] 2xl:mb-[-300px]"
              alt="curve"
            />
          </div>
        </div>
      </section>

      {/* awards & recogniton */}

      <section className="my-[100px] w-full md:max-w-[83rem]  mx-auto md:min-h-[809px] px-4 md:px-0">
        <h2 className="text-blackSecondary text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[48px] font-semibold lg:leading-[52.8px]">
          Awards & Recognitions
        </h2>
        <p className="text-[#5C6A6B] text-[16px] md:text-[20px] my-[15px] md:my-[25px]">
          We’ve won a total of 5 awards until now and are still on the roadmap
          to achieve more and more.
        </p>

        <div className=" grid grid-cols-[2fr_1.8fr_1fr_1fr] md:grid-cols-[2.5fr_2fr_1fr_1fr] items-center">
          <h4 className="text-[#5C6A6B] text-[16px] md:text-[20px] my-[15px] ml-[16px] md:ml-[32px] mb-[10px]">
            Awards Name
          </h4>
          <h4 className="text-[#5C6A6B] text-[16px] md:text-[20px] my-[15px] ml-[16px] md:ml-[32px] mb-[10px]">
            Awarded By
          </h4>
          <h4 className="text-[#5C6A6B] text-[16px] md:text-[20px] my-[15px] ml-[16px] md:ml-[32px] mb-[10px]">
            Year
          </h4>
        </div>

        {[
          {
            name: 'BEST AI OF THE YEAR',
            awardedBy: 'Premio Gianni Brera',
            year: '2024',
            imgSrc: '/images/awardsimg.png',
          },
          {
            name: 'AI EXCELLENCE AWARD 2024',
            awardedBy: 'Contact Engine',
            year: '2024',
            imgSrc: '/images/awardsimg.png',
          },
          {
            name: 'AI & DATA AWARD 2025',
            awardedBy: 'Boussias',
            year: '2024',
            imgSrc: '/images/awardsimg.png',
          },
          {
            name: 'AI FOR SOCIAL GOOD',
            awardedBy: 'Empowering India',
            year: '2024',
            imgSrc: '/images/awardsimg.png',
          },
        ].map((award, index) => (
          <div
            key={index}
            className="relative grid grid-cols-[2fr_1.8fr_1fr_1fr] md:grid-cols-[2.5fr_2fr_1fr_1fr] items-center border-t-[1px] border-b-[1px] border-[#2D3434] py-4 md:py-7 
      group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black scale-0 transform origin-top-left transition-transform duration-1000 group-hover:scale-100"></div>

            <div className="relative text-[14px] md:text-[32px] font-medium md:py-[40px] pl-4 md:pl-[32px] text-[#2D3434] group-hover:text-white">
              {award.name}
            </div>
            <div className="relative text-[12px] md:text-[32px] font-normal text-[#2D3434] md:py-[40px] pl-4 md:pl-[32px] group-hover:text-white">
              {award.awardedBy}
            </div>
            <div className="relative text-[12px] md:text-[32px] font-normal text-[#2D3434] md:py-[40px] pl-4 md:pl-[32px] group-hover:text-white">
              {award.year}
            </div>
            <div className="relative text-center md:text-left md:py-[40px]">
              <Image
                src={award.imgSrc}
                height={50}
                width={100}
                alt="award"
                className="mx-auto md:mx-0 transition duration-500 group-hover:filter group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
              />
            </div>
          </div>
        ))}
      </section>

      {/* accelerators&Communities */}
      <section className="how-it-works-bg flex justify-center items-center lg:max-w-[83rem] w-full my-[130px] lg:mx-auto min-h-[450px] lg:min-h-[807px] ">
        <div className=" md:mx-[77px] w-full  ">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-blackSecondary text-center  text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px]">
              Accelerators <span>&</span> <br />
              <span className="text-redMain">Recognition</span>
            </h2>
            <p className="text-gray md:leading-[30px] mx-[30px] md:mx-[140px] text-center text-[12px]  md:text-[20px] mt-5">
              We're proud to be part of the NVIDIA Inception program, which
              supports startups driving innovation in AI and data science.
              Through this partnership, we gain access to cutting-edge
              technology, resources, and expertise, empowering us to accelerate
              our growth and bring advanced solutions to our users.
            </p>
          </div>
          <div className="md:mx-[77px] mx-[12px] mt-[50px] md:mt-[128px] grid grid-cols-3 place-content-center items-center gap-4 md:gap-[32px]">
            <Image
              src={'/images/foundershub.png'}
              width={330}
              height={80}
              alt="curve"
            />
            <Image
              src={'/images/awsstartup.png'}
              width={330}
              height={80}
              alt="curve"
            />
            <Image
              src={'/images/nvidia.png'}
              width={330}
              height={80}
              alt="curve"
            />
          </div>
        </div>
      </section>

      {/* our proud partners */}
      <section className="personal-website-bg lg:max-w-[83rem] flex justify-center items-center w-full my-[130px] mx-auto h-[600px] lg:min-h-[1200px]">
        <div className="mx-[12px] md:mx-[77px] w-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-blackSecondary text-center text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px]">
              Our Proud <br />
              <span className="text-redMain">Partners</span>
            </h2>
            <p className="text-gray md:leading-[30px] md:max-w-[640px] text-center md:text-[20px] mt-5">
              Showcase real social proof from your nibnab conversations! Never
              miss an opportunity - let your AI surrogate take a message!
            </p>
          </div>

          <div className=" mt-[50px] md:mt-[128px] md:hidden w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 75}%)`,
              }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="min-w-[75%] flex-shrink-0 flex justify-center items-center"
                >
                  <Image
                    src={src}
                    width={258}
                    height={173}
                    alt={`partner-${index}`}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-10">
              <button
                onClick={handlePrev}
                className=" left-2 top-1/2 transform -translate-y-1/2 bg-[#FFCECC] w-[52px] h-[36px] rounded-lg border-none  "
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className=" right-2 top-1/2 transform -translate-y-1/2 bg-[#FFCECC] w-[52px] h-[36px] rounded-lg border-none"
              >
                ›
              </button>
            </div>
          </div>

          <div className="hidden md:grid mt-[50px] md:mt-[128px] grid-cols-5 justify-content-center justify-items-center gap-[10px]">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={258}
                height={173}
                alt={`partner-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default GrantSection;
