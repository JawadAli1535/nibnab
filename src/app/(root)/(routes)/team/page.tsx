import Image from 'next/image';
import React from 'react';
import Footer from '@/components/home/footer';
import StickyNavbar from '@/components/navbar/sticky-navbar';
import TeamHero from '@/components/team/hero';
import TeamMessagesSection from '@/components/team/messages-section';
import WorkWithNibnab from '@/components/work-with-nibnab';
import Sparkle from '@/components/home/example-section/circular-animation-section/sparkle';
import TitleSection from '@/components/home/timeline/title';
import YouTubeEmbed from '@/components/ui/youtube-embed';
import {
  MasonryLayout,
  MasonryLayoutType,
} from '@/components/ui/masonry-layout';

const page = () => {
  const masonryItems = [
    {
      type: MasonryLayoutType.Image,
      src: '/images/team/internship/nnis24.png',
      alt: 'NNIS24 Logo with Testimonials',
      width: 800,
      height: 800,
    },
    {
      type: MasonryLayoutType.Video,
      embedId: 't-b2Fz99fiA',
      width: 800,
      height: 450,
    },
    {
      type: MasonryLayoutType.Image,
      src: '/images/team/internship/dido.jpg',
      alt: 'Intern: Dido',
      width: 800,
      height: 533.33,
    },
    {
      type: MasonryLayoutType.Image,
      src: '/images/team/internship/petya.jpg',
      alt: 'Intern: Petya',
      width: 800,
      height: 533.33,
    },
    {
      type: MasonryLayoutType.Image,
      src: '/images/team/internship/niki.jpg',
      alt: 'Intern: Niki',
      width: 800,
      height: 533.33,
    },
  ];

  return (
    <div>
      <StickyNavbar />
      <div className="relative">
        <TeamHero />
        <TeamMessagesSection />
      </div>
      <div className="relative mb-40 ms:my-0 ">
        <Image
          src="/images/curve.svg"
          alt="curve"
          width={1000}
          height={1000}
          className="absolute scale-[-1] -top-1/4 l:-top-[30%] -z-10 left-0 right-0 w-full"
        />
        <div className="text-amber absolute top-[15%] md:top-[45%] left-[5%] md:left-[10%] scale-[0.6] md:scale-1">
          <Sparkle />
        </div>
        <div className="text-amber absolute top-[105%] scale-[0.6] md:scale-1 md:top-[58%] right-[20%] md:right-[10%]">
          <Sparkle />
        </div>
        <div className="text-redMain absolute top-[10%] md:top-[35%] left-[80%] md:left-[39%] scale-[0.8] md:scale-1">
          <Sparkle />
        </div>
        <div className="text-blue absolute bottom-[-20%] md:bottom-[15%] left-[30%] md:left-[15%] scale-[0.6]">
          <Sparkle />
        </div>
        <div className="text-blue absolute top-[5%] right-[50%] md:top-[45%] md:right-[15%] scale-[0.6]">
          <Sparkle />
        </div>
        <div className="text-redMain hidden md:block absolute bottom-[5%] right-[20%] scale-[0.8]">
          <Sparkle />
        </div>

        <div className="max-w-[90rem] mx-auto relative h-full pt-[5%] flex flex-col items-center">
          <TitleSection
            title="Internship Programme"
            description="We just completed our first internship programme. nibnab Internship Summer 24 (<b>NNIS24</b>) was a blast!"
            descriptionSmallerScreens="We just completed our first internship programme.<br/>Checkout this interview with our interns."
            customClassName="text-center"
          />
          <div className="mt-8 mb-4 w-full max-w-3xl flex justify-center">
            <Image
              src="/images/team/internship/nnis24-logo.png"
              alt="NNIS24 Internship Logo"
              width={500}
              height={250}
              layout="intrinsic"
            />
          </div>
          <MasonryLayout items={masonryItems} />
        </div>
      </div>
      <WorkWithNibnab />
      <Footer />
    </div>
  );
};

export default page;
