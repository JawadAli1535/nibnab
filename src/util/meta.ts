import type { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import { IPageConsts } from "@/util/constants";

export type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMeta(
  { params }: Props,
  parent: ResolvingMetadata,
  pageConsts: IPageConsts
): Promise<Metadata> {
  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto");
  const host = headersList.get("host");
  const slug = params.id;
  const rootUrl = `${protocol}://${host}`;
  const url = `${rootUrl}/${slug || ""}`;
  const twitterHandle = `@${process.env.TWITTER_HANDLE}`;

  const title = pageConsts.meta.title;
  const description = pageConsts.meta.description;
  const ogImage = `${rootUrl}/${pageConsts.meta.ogImage}`;
  const twitterImage = `${rootUrl}/${pageConsts.meta.twitterImage}`;

  const previousOGImages = (await parent).openGraph?.images || [];
  const previousTwitterImages = (await parent).twitter?.images || [];

  return {
    title,
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
