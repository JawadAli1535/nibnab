"use client";
import React, { useRef } from "react";

import Hero from "./hero";
import Features from "./features";
import HowItWorks from "./how-it-works";
import UseCases from "./use-case";
import PersonalWebsite from "./personal-website";
import EarlyAccess from "../home/early-access";
import EarlyAccessCard from "./early-access-card";
import WaitList from "./waitlist";
import Footer from "../home/footer";
import StickyNavbar from "../navbar/sticky-navbar";
const LandingPage = () => {
  const earlyAccessRef = useRef<HTMLInputElement>(null);

  const onCTAClick = () => {
    earlyAccessRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <StickyNavbar onCTAClick={onCTAClick} />
      <Hero onCTAClick={onCTAClick} />
      <Features />
      <section id="how-it-works" className="pt-[100px] md:pt-[200px]">
        <HowItWorks />
      </section>
      <section id="use-cases">
        <UseCases />
      </section>
      <section id="personal-website">
        <PersonalWebsite />
      </section>
      <EarlyAccessCard onCTAClick={onCTAClick}/>
      <WaitList ref={earlyAccessRef} />
      <Footer />
    </>
  );
};

export default LandingPage;
