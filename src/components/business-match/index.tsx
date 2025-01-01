"use client";
import React from "react";
import Nav from "./nav";
import Hero from "./hero";
import FreeLeads from "./free-leads";
import HowItWorks from "./how-it-works";
import { BusinessMatchData } from "@/util/types";

const BusinessMatch = (businessMatch: BusinessMatchData) => {
  return (
    <div>
      <Nav />
      <Hero {...businessMatch} />
      <FreeLeads {...businessMatch} />
      <HowItWorks />
    </div>
  );
};

export default BusinessMatch;
