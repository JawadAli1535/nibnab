import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import { Props } from "@/util/meta";
import Match from "@/components/match/Match";
import { MatchDataSchema, MatchData } from "@/util/types";

const getMatch = async (id: string) => {
  if (!id) {
    throw new Error("No match ID provided");
  }

  const url = `${
    process.env.MATCH_API_ROOT_URL
  }/api/trpc/match.get?batch=1&input=${encodeURIComponent(
    JSON.stringify({ "0": { json: { id: id } } })
  )}`;

  const callResult = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const match = MatchDataSchema.parse(
    (await callResult.json())[0].result.data.json
  );

  return match;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const match = await getMatch(id);

  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto");
  const host = headersList.get("host");
  const slug = params.id;
  const rootUrl = `${protocol}://${host}`;
  const url = `${rootUrl}/app/match/${slug || ""}`;
  const twitterHandle = `@${process.env.MATCH_TWITTER_HANDLE}`;

  const tabTitle = `${match.posts[0].author.name} x ${match.posts[1].author.name}`;
  const title = `Match: ${match.posts[0].author.name} x ${match.posts[1].author.name}`;
  const description = match.description;
  const ogImage = match.image;
  const twitterImage = match.image;

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
  const match = await getMatch(id);

  return <Match {...match} />;
}
