"use client";
import React, { useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import {
  BottomLeftLineSvg,
  BottomRightLineSvg,
  TopLeftLineSvg,
  TopRightLineSvg,
} from "./svg";
import Image from "next/image";
import { Message } from "./ChatBox";

interface NibnabWorkflowProps {
  authorImageA: string;
  authorImageB: string;
}

const MotionImage = motion(Image);

const NibnabWorkflow = ({ authorImageA, authorImageB }: NibnabWorkflowProps) => {
  const containerBottomRef = useRef(null);
  const { scrollYProgress: scrollYProgressBottom } = useScroll({
    target: containerBottomRef,
    offset: ["start end", "end end"],
  });
  const yBottom = useSpring(scrollYProgressBottom, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className="max-w-[83rem] mx-auto md:px-[77px] overflow-x-hidden overflow-y-visible lg:overflow-visible">
      <div className="text-center font-rubik">
        <h1 className="text-blackMain text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px]">
          How <span className="text-redMain">nib</span>
          <span className="text-blue">nab</span> Works
        </h1>
        <p className="font-normal text-sm md:leading-[25px] md:text-[18px] text-gray text-center font-rubik mt-[32px] px-5">
          It’s simple... nibnab is actively looking for people seeking the same
          outcomes, and <br className="hidden lg:block" />
          then helping them connect and collaborate with each other.
        </p>
      </div>

      <div>
        <div className="mt-[96px] w-max max-w-[70vw] mx-auto relative">
          <div className="flex justify-center relative">
            <div ref={containerBottomRef} className="max-w-[50%]">
              <TopLeftLineSvg scrollYProgress={yBottom} />
            </div>
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[96px] h-[96px]">
              <MotionImage
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
                src={"/images/logo-frame.png"}
                height={96}
                width={96}
                alt="logo"
              />
            </div>
            <div ref={containerBottomRef}>
              <TopRightLineSvg scrollYProgress={yBottom} />
            </div>
          </div>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
            <div className="relative">
              <span className="absolute right-0 translate-x-[104%] top-0 -translate-y-1/2 block w-[133px]">
                <Message text="I want this..." bgColor="bg-grayFade" />
              </span>
              <MotionImage
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
                className="rounded-full"
                viewport={{ once: true }}
                src={authorImageA}
                width={96}
                height={96}
                alt="your-profile"
                style={{ boxShadow: "0px 4px 7px 0px rgba(28, 31, 42, 0.13)" }}
              />
            </div>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
            <div className="relative">
              <span className="absolute left-0 -translate-x-[104%] bottom-0 translate-y-1/2 block w-[174px]">
                <Message text="I also want that..." bgColor="bg-blueFade" />
              </span>
              <MotionImage
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
                viewport={{ once: true }}
                src={authorImageB}
                width={96}
                height={96}
                alt="your-profile"
                className="rounded-full"
                style={{ boxShadow: "0px 4px 7px 0px rgba(28, 31, 42, 0.13)" }}
              />
            </div>
          </div>

          <div className="flex justify-center relative">
            <div ref={containerBottomRef} className="max-w-[50%]">
              <BottomLeftLineSvg scrollYProgress={yBottom} />
            </div>
            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2">
              <MatchButton
                icon="/images/logo-main.svg"
                title="Connect"
                className="bg-[#FEFAF5] border border-amber"
                disabled
                shadow
              />
            </div>
            <div ref={containerBottomRef}>
              <BottomRightLineSvg scrollYProgress={yBottom} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NibnabWorkflow;

interface IButton {
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  title: string;
  icon?: string;
  className?: string;
  shadow?: boolean;
}

export const MatchButton = ({
  onClick,
  href,
  disabled,
  title,
  icon,
  className,
  shadow,
}: IButton) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, delay: 0.2 },
      }}
      viewport={{ once: true }}
      onClick={() => {
        if (href) {
          return window.open(href, "_blank");
        }

        if (onClick) {
          onClick()
        }
      }}
      disabled={disabled}
      style={{
        boxShadow: shadow ? "0px 4px 7px 0px rgba(28, 31, 42, 0.13)" : "none",
      }}
      className={`${className} rounded-full text-blackMain text-[18px] font-medium leading-[27px] flex items-center justify-center gap-[10px] py-4 px-8 disabled:cursor-not-allowed`}
    >
      {icon && (
        <span>
          <Image src={icon} height={22.052} width={22.052} alt="logo" />
        </span>
      )}
      <span className="text-center">{title}</span>
    </motion.button>
  );
};
