import MessageAnimation from '@/components/home/timeline/message-animation';
import TitleSection from '@/components/home/timeline/title';
import MessageBox from '@/components/message-box';
import Image from 'next/image';
import React from 'react';

const DUMMYCHAT = [
  {
    sender: 'user',
    text: 'Hey, got any questions about Ricardo I<br/> can help you with?',
  },
  {
    sender: 'ai',
    text: 'Yes, I would like to know if I can hire <br/>Ricardo for a concert gig next week?',
  },
  {
    sender: 'user',
    text: 'Unfortunately his calendar is booked<br/> tight for next week, I’m sorry...',
  },
  {
    sender: 'ai',
    type: 'loading',
  },
];

const PersonalWebsite = () => {
  const renderUserChat = ({
    name,
    image,
    text,
  }: {
    name: string;
    image: string;
    text: string;
  }) => {
    return (
      <div className=" flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={`/images/${image}.png`}
            alt="profile"
            height={32}
            width={32}
            className="h-8 w-8 rounded-full"
          />
          <p className="font-medium text-base">{name}</p>
        </div>
        <MessageBox content={{ sender: 'ai', text, customCss: 'shadow-md' }} />
      </div>
    );
  };
  const renderUserChatBox = () => (
    <div className="rounded-[25px] shadow-lg w-[350px] overflow-hidden absolute top-[-12%] right-[-40%]">
      <div className="flex items-center gap-2 px-8 py-[17px] bg-white/50">
        <Image
          src="/images/personal-website-profile.png"
          alt="profile"
          height={102}
          width={102}
          className="h-12 w-12"
        />
        <div className="text-center ">
          <span className="font-medium ">Ricardo&apos;s</span> Agent
        </div>
        <p className="bg-redMain text-white rounded-[3px] text-[8px] font-medium px-1 py-[2px] ml-2">
          BOT
        </p>
      </div>
      <div className="px-4 py-6 flex flex-col gap-4 bg-white">
        {DUMMYCHAT.map((item, index) => {
          if (item.type === 'loading') {
            return (
              <MessageBox
                key={index}
                content={{ customCss: 'w-max', sender: 'ai' }}
              >
                <div className="flex gap-1 p-2">
                  <div className="bg-gray md:w-2 md:h-2 rounded-full h-1 w-1"></div>
                  <div className="bg-gray/50 md:w-2 md:h-2 rounded-full h-1 w-1"></div>
                  <div className="bg-gray/10 md:w-2 md:h-2 rounded-full h-1 w-1"></div>
                </div>
              </MessageBox>
            );
          }
          return (
            <MessageBox
              key={index}
              content={{ ...item, customCss: 'w-full' }}
            />
          );
        })}
      </div>
      <div className="p-4 bg-white border-grayFade border-t-[1px]">
        <div className="bg-grayFade p-4 rounded-[20px]">
          <p className="text-sm">Type your message</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4">
              <Image
                src="images/image.svg"
                alt="image"
                height={16}
                width={16}
              />
              <Image src="images/mic.svg" alt="image" height={16} width={16} />
            </div>
            <Image src="images/send.svg" alt="image" height={16} width={16} />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="overflow-x-hidden personal-website-bg max-w-[83rem] mx-auto min-h-screen pt-24  md:py-[6.93%] px-[5.18%] ">
      <TitleSection
        description="Showcase real social proof from your nibnab conversations!<br/> Never miss an opportunity - let your AI surrogate take a message!"
        descriptionSmallerScreens="Showcase real social proof  from your <br/>nibnab conversations! Never miss  an opportunity<br/> - let your AI surrogate take a message!"
        customClassName="mx-auto text-center"
      >
        <div className="flex flex-col items-center">
          Revolutionizing
          <span className="text-redMain">
            <s> Social Profiles</s>
          </span>
          Personal Websites
        </div>
      </TitleSection>

      <div className="scale-[0.5] md:scale-100  md:w-[47%] shadow-lg relative mb-[-100px] md:mb-0 mt-[-80px] md:mt-[128px] bg-white  mx-auto rounded-[14.2px] flex flex-col items-center">
        {renderUserChatBox()}
        <div className="py-[21px] text-sm text-center">
          <span className="font-medium ">Ricardo&apos;s</span> personal website
        </div>
        <div className="bg-coolGray h-[122px] w-full"></div>
        <Image
          src="/images/personal-website-profile.png"
          alt="profile"
          height={102}
          width={102}
          className="mt-[-47px] mx-auto"
        />
        <div className="bg-coolGray rounded-sm h-[14px] w-[192px] mx-auto"></div>
        <div className="bg-coolGray rounded-sm h-[9px] w-[126px] mx-auto mt-2"></div>
        <div className="bg-coolGray rounded-md h-[88px] w-[308px] mx-auto mt-4"></div>
        <div className="flex gap-1 mt-4">
          <div className="bg-coolGray rounded-full w-[51px] h-[13px]"></div>
          <div className="bg-coolGray rounded-full w-[69px] h-[13px]"></div>
          <div className="bg-coolGray rounded-full w-[69px] h-[13px]"></div>
        </div>
        <div className="flex gap-1 mt-2">
          <div className="bg-coolGray rounded-full w-[51px] h-[13px]"></div>
          <div className="bg-coolGray rounded-full w-[90px] h-[13px]"></div>
          <div className="bg-coolGray rounded-full w-[69px] h-[13px]"></div>
        </div>
        <div className="bg-redMain rounded-full py-2 px-16 text-white text-sm mt-8">
          Talk to my Agent
        </div>
        <div className="text-xs font-normal text-black/40 mt-2 pb-[200px]">
          Ricardo AI is a representative of Ricardo.
        </div>
        <div className="flex absolute bottom-[58px] w-[210%] gap-4  md:w-[160%]  justify-between">
          {renderUserChat({
            name: 'Stephanie M.',
            text: 'You are super talented, Ricardo!',
            image: 'dummy-profile-2',
          })}
          {renderUserChat({
            name: 'Freya',
            text: 'This was the best keys part in a song<br/> ANYONE has ever played for me!',
            image: 'dummy-profile-8',
          })}
          {renderUserChat({
            name: 'Robert K.',
            text: 'Talented musician and an awesome artist?! <br/>Dude you are incredible!',
            image: 'dummy-profile-10',
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalWebsite;
