import GrantSection from '@/components/grants-recognition/grant-section';
import GrantsRecognitonHero from '@/components/grants-recognition/hero';
import StickyNavbar from '@/components/navbar/sticky-navbar';
import TeamHero from '@/components/team/hero';
import TeamMessagesSection from '@/components/team/messages-section';
import React from 'react';

const page = () => {
  return (
    <div>
      <StickyNavbar />
      <div className="relative">
        <GrantsRecognitonHero />
      </div>
      <GrantSection />
    </div>
  );
};

export default page;
