'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { isFirefox } from 'react-device-detect';

const GrantsRecognitonHero = () => {
  const [showGaussianBlur, setShowGaussianBlur] = useState<boolean>(true);

  useEffect(() => {
    setShowGaussianBlur(!isFirefox);
  }, [isFirefox]);
  return (
    <div className="flex-col flex items-center text-center pt-[93px] md:pt-[249px] sticky top-0">
      {' '}
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 flex blur-[177.5px] opacity-50 ${
          !showGaussianBlur ? 'hidden' : ''
        }`}
        style={{
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        {['blue', 'amber', 'redMain'].map((color) => (
          <div
            key={color}
            className={`bg-${color} w-1/3 h-2/3 md:h-1/4 2xl:h-1/2`}
          ></div>
        ))}
      </div>
      <h1 className="text-blackMain font-semibold text-[45px] leading-[55px] md:leading-[76px] md:text-[64px] 2xl:text-[80px] 2xl:leading-[96px]">
        <span className="text-blue">Grants</span> <span>&</span>{' '}
        <span className="text-redMain">Recognition</span>
      </h1>
      <h2 className="text-gray md:leading-[30px] max-w-[800px]  md:text-[20px] mt-5">
        Every collaboration reflects our dedication to innovation, growth, and
        empowering our community to reach new heights.
      </h2>
    </div>
  );
};

export default GrantsRecognitonHero;
