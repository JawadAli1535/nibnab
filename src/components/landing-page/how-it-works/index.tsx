'use client';
import CommonHeader from '@/components/common-header';
import CommonWindow from '@/components/common-window';
import MessageAnimation from '@/components/home/timeline/message-animation';
import SvgAnimation from '@/components/home/timeline/svg-animation';
import { useScroll, useSpring } from 'framer-motion';
import React, { useRef } from 'react';
import LineSvg from './line-svg';

const DUMMY_CHAT_GET_TO_KNOW = [
  {
    text: 'Hey Patrick! Welcome onboard!<br/> Before I can be of most use I need to learn<br/> a bit more about you. Wanna have a quick chat?<br/> I will ask a few  questions and you can<br/> reply whenever convenient!',
    sender: 'ai',
  },
  {
    text: 'Hey, yeah, shoot!',
    sender: 'user',
  },
  {
    type: 'loading',
    sender: 'ai',
  },
];
const DUMMY_CHAT_GOALS = [
  {
    text: 'Hey nibnab, I need to make some extra cash<br/> this month... like $2000. Can you help me get it<br/> done?',
    sender: 'user',
  },
  {
    text: 'Make extra $2000 this month',
    sender: 'ai',
    type: 'goal',
  },
  {
    type: 'loading',
    sender: 'ai',
  },
];

const DUMMY_CHAT_CONTACT = [
  {
    text: 'Patrick, I think I have found a few interesting<br/> gigs for your weekends. All of these people <br/>need a photographer for a shoot in your city!',
    sender: 'ai',
    type: 'contact',
  },
  {
    text: 'This is awesome!! Thank you, nibnab!',
    sender: 'user',
  },
];
const HowItWorks = () => {
  const containerTopRef = useRef(null);
  const containerBottomRef = useRef(null);
  const { scrollYProgress: scrollYProgressTop } = useScroll({
    target: containerTopRef,
    offset: ['start center', 'end end'],
  });
  const { scrollYProgress: scrollYProgressBottom } = useScroll({
    target: containerBottomRef,
    offset: ['start center', 'end end'],
  });
  const yTop = useSpring(scrollYProgressTop, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const yBottom = useSpring(scrollYProgressBottom, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const renderGetToKnow = () => (
    <div className="mt-[42px] py-[1.5%] flex flex-col md:flex-row justify-around items-center gap-[6%] 2xl:gap-[18%]">
      <CommonWindow>
        <MessageAnimation
          chat={DUMMY_CHAT_GET_TO_KNOW}
          isAiChat={true}
          userProfile="/images/dummy-profile-11.png"
        />
      </CommonWindow>
      <CommonHeader
        title={'Let Us Get To<br/> Know You'}
        titleSmallerScreen={'Let Us Get To Know You'}
        description={`All it takes is talking to your personal AI agent! nibnab is a<br/> powerful AI, capable of understanding text, audio and <br/>images. The better it knows YOU, the greater the <br/>opportunities it will create become. “Opportunities?” you <br/>say... come, let me share more.`}
        containerStyles="md:!text-left"
        descriptionSmallerScreen="All it takes is talking to your personal AI agent! nibnab is a powerful AI, capable of understanding text, audio and images. The better it knows YOU, the greater the opportunities it will create become. “Opportunities?” you say... come, let me share more."
      />
    </div>
  );
  const renderGoal = () => (
    <div className="mt-[42px] py-[1.5%] flex flex-col-reverse md:flex-row justify-around items-center gap-[6%] 2xl:gap-[18%]">
      <CommonHeader
        title={'Your Goals = <br/>nibnab’s Job'}
        titleSmallerScreen={'Your Goals = nibnab’s Job'}
        description={`nibnab is here to help you maximise your potential.<br/> Just tell it what you want to achieve and it will come back<br/> with a plan and visual aid to track progress.`}
        descriptionSmallerScreen={`nibnab is here to help you maximise your potential.<br/> Just tell it what you want to achieve and it will come back with a plan and visual aid to track progress.`}
        containerStyles="md:!text-left"
      />
      <CommonWindow>
        <MessageAnimation
          chat={DUMMY_CHAT_GOALS}
          isAiChat={true}
          userProfile="/images/dummy-profile-11.png"
        />
      </CommonWindow>
    </div>
  );
  const renderContact = () => (
    <div
      className="mt-[42px] py-[1.5%] flex flex-col md:flex-row justify-around items-center gap-[6%] 2xl:gap-[18%]"
      ref={containerBottomRef}
    >
      <CommonWindow contentStyles="h-[420px]">
        <MessageAnimation
          chat={DUMMY_CHAT_CONTACT}
          isAiChat={true}
          userProfile="/images/dummy-profile-11.png"
        />
      </CommonWindow>
      <CommonHeader
        title={'We Link You<br/> With The Right<br/> People'}
        titleSmallerScreen={'We Link You With The Right People'}
        description={`Once your agent knows you and has a goal of yours’ to work <br/>on - it will find the right people to help you achieve it.`}
        descriptionSmallerScreen={`Once your agent knows you and has a goal of yours’ to work on - it will find the right people to help you achieve it.`}
        containerStyles="md:!text-left"
      />
    </div>
  );
  return (
    <div className="how-it-works-bg max-w-[83rem] w-full overflow-x-hidden mx-auto min-h-screen py-20 md:py-[6.93%] px-[5.18%]">
      <CommonHeader
        title={'How It Works?'}
        titleSmallerScreen={'How It Works?'}
        description={` Collaboration is the best way to create value. AI can identify
        opportunities for collaboration at a scale,
        <br /> rate and complexity at which even the best organisations out
        there can’t.
        <br /> We link people towards their success.`}
        descriptionSmallerScreen="Collaboration is the best way to create value. AI can identify opportunities for collaboration at a scale, rate and complexity at which even the best organisations out there can’t. We link people towards their success."
      />
      <div ref={containerTopRef}>
        {renderGetToKnow()}
        <div className="mx-auto block md:hidden w-max -mt-5 -mb-[120px]">
          <LineSvg scrollYProgress={yTop} />
        </div>
        <div className=" hidden md:block -my-[120px] 2xl:-my-[60px]">
          <SvgAnimation scrollYProgress={yTop} />
        </div>
      </div>
      <div ref={containerBottomRef}>
        {renderGoal()}
        <div className="mx-auto block md:hidden w-max -mt-5 -mb-[120px] -scale-x-100">
          <LineSvg scrollYProgress={yBottom} />
        </div>
        <div className="hidden md:block  -my-[120px] 2xl:-my-[60px] scale-x-[-1]">
          <SvgAnimation scrollYProgress={yBottom} />
        </div>
        {renderContact()}
      </div>
    </div>
  );
};

export default HowItWorks;
