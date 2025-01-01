import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { COREPAGE, IPageConsts } from "@/util/constants";
import { generateMeta, Props } from "@/util/meta";
import { Home } from "@/components/home";
import LandingPage from "@/components/landing-page";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return generateMeta(
    { params, searchParams },
    parent,
    COREPAGE as IPageConsts
  );
}

const Index = () => {
  return <LandingPage />;
};

export default Index;
