"use client";

import Footer from "../home/footer";
import ConnectivityInsight from "./ConnectivityInsight";
import ConnectionRationale from "./ConnectionRationale";
import NextStepsSection from "./NextStepsSection";
import NibnabWorkflow from "./NibnabWorkflow";
import MatchNavbar from "./MatchNavbar";
import MatchHero from "./MatchHero";
import { useRef, useState } from "react";
import MatchMobileNavbar from "./MatchMobileNavbar";
import { MatchData } from "@/util/types";

const Match = (matchData: MatchData) => {
  const connectivityInsightRef = useRef<HTMLInputElement>(null);

  const onCTAClick = () => {
    connectivityInsightRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (matchData.posts.length < 2) {
    throw new Error("Match data must contain at least 2 posts");
  }

  const [data] = useState(matchData);
  return (
    <div>
      <MatchNavbar />
      <MatchMobileNavbar />
      <MatchHero
        imageA={data.posts[0].author.avatar}
        imageB={data.posts[1].author.avatar}
        emoji={data.emoji}
        onClick={onCTAClick}
      />
      <div
        className="relative z-[600] pt-16 xl:pt-0"
        ref={connectivityInsightRef}
      >
        <ConnectivityInsight
          postA={data.posts[0]}
          postB={data.posts[1]}
        />
      </div>
      <div className="mt-[160px] md:mt-[200px]">
        <ConnectionRationale description={data.description}/>
      </div>
      <div className="mt-[160px] md:mt-[200px]">
        <NextStepsSection
          authorA={data.posts[0].author}
          authorB={data.posts[1].author}
        />
      </div>
      <div className="mt-[160px] md:mt-[200px]">
        <NibnabWorkflow
          authorImageA={data.posts[0].author.avatar}
          authorImageB={data.posts[1].author.avatar}
        />
      </div>
      <div className="mt-[160px] md:mt-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default Match;
