"use client";
import React, { useRef } from "react";
import EarlyAccess from "@/components/home/early-access";
import ExampleSection from "@/components/home/example-section";
import Footer from "@/components/home/footer";
import Goals from "@/components/home/goals-section";
import HeroSection from "@/components/home/hero-section/hero-section";
import BreakSection from "@/components/home/take-a-break-section";
import Timeline from "@/components/home/timeline";
import UseCases from "@/components/home/use-cases";
import WhyChooseSection from "@/components/home/why-choose-section";

export const Home = () => {
  const earlyAccessRef = useRef<HTMLInputElement>(null);

  const onCTAClick = () => {
    earlyAccessRef.current?.scrollIntoView();
  };

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection onCTAClick={onCTAClick} />
      <UseCases />
      <ExampleSection onCTAClick={onCTAClick} />
      <Timeline />
      <Goals onCTAClick={onCTAClick} />
      <BreakSection />
      <WhyChooseSection />
      <EarlyAccess ref={earlyAccessRef} />
      <Footer />
    </div>
  );
};
