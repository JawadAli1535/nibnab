import Image from "next/image";
import React from "react";
import YouTubeEmbed from "@/components/ui/youtube-embed";

export const enum MasonryLayoutType {
  Video = "video",
  Image = "image",
}

export type MasonryItem = {
  type: MasonryLayoutType;
  embedId?: string;
  src?: string;
  alt?: string;
  width: number;
  height: number;
};

export const MasonryLayout = ({ items }: { items: MasonryItem[] }) => {
  return (
    <div className="w-full max-w-[90rem] columns-1 md:columns-2 lg:columns-3 gap-4 p-4 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 break-inside-avoid mb-4`}
        >
          {item.type === MasonryLayoutType.Video ? (
            <div className="w-full aspect-video">
              <YouTubeEmbed embedId={item.embedId || ""} />
            </div>
          ) : (
            <div
              className="relative w-full"
              style={{ paddingTop: `${(item.height / item.width) * 100}%` }}
            >
              <Image
                src={item.src || ""}
                alt={item.alt || ""}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
