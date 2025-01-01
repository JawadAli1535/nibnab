import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import { Props } from "@/util/meta";
import BusinessMatch from "@/components/business-match";
import { BusinessMatchDataSchema, BusinessMatchData } from "@/util/types";

const getBusinessMatch = async (id: string) => {
  if (!id) {
    throw new Error("No match ID provided");
  }

  const url = `${
    process.env.MATCH_API_ROOT_URL
  }/api/trpc/businessMatch.get?batch=1&input=${encodeURIComponent(
    JSON.stringify({ "0": { json: { id: id } } })
  )}`;

  const callResult = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = BusinessMatchDataSchema.parse(
    (await callResult.json())[0].result.data.json
  );

  return result;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const businessMatch = await getBusinessMatch(id);

  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto");
  const host = headersList.get("host");
  const slug = params.id;
  const rootUrl = `${protocol}://${host}`;
  const url = `${rootUrl}/app/match/${slug || ""}`;
  const twitterHandle = `@${process.env.MATCH_TWITTER_HANDLE}`;

  const tabTitle = `Match x ${businessMatch.business.name}`;
  const title = `${businessMatch.business.name}, we've done some work for you!`;
  const description = `Match has quietly collected leads for ${businessMatch.business.name}`;
  const ogImage = businessMatch.image;
  const twitterImage = businessMatch.image;

  const previousOGImages = (await parent).openGraph?.images || [];
  const previousTwitterImages = (await parent).twitter?.images || [];

  return {
    title: tabTitle,
    description,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [ogImage, ...previousOGImages],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage, ...previousTwitterImages],
      creator: twitterHandle,
      site: twitterHandle,
    },
  };
}

interface IPageProps {
  params: {
    id: string;
  };
}

export default async function page({ params: { id } }: IPageProps) {
  const businessMatch = await getBusinessMatch(id);

  return <BusinessMatch {...businessMatch} />;
}
