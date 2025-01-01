"use client";
import React, { useRef } from "react";
import EarlyAccess from "@/components/home/early-access";
import Footer from "@/components/home/footer";
import UseCases from "@/components/home/use-cases";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/use-case-page/hero-section";
import Conversation from "@/components/use-case-page/hero-section/conversation";

export const UseCasePage = () => {
  const ctaRef = useRef<HTMLInputElement>(null);

  const onCTAClick = () => {
    ctaRef.current?.scrollIntoView();
  };

  return (
    <div>
      <div className="relative">
        <Navbar onCTAClick={onCTAClick} />
        <HeroSection />
      </div>
      <Conversation onCTAClick={onCTAClick} />
      <UseCases />
      <EarlyAccess ref={ctaRef} />
      <Footer />
    </div>
  );
};
