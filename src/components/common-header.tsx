import React from 'react';

interface CommonHeaderProps {
  title: string;
  description: string;
  containerStyles?: string;
  titleStyles?: string;
  descriptionStyles?: string;
  descriptionSmallerScreen?: string;
  titleSmallerScreen?: string;
}

const CommonHeader = React.forwardRef<HTMLInputElement, CommonHeaderProps>(
  (
    {
      title,
      description,
      containerStyles,
      titleStyles,
      descriptionStyles,
      descriptionSmallerScreen,
      titleSmallerScreen,
    },
    ref
  ) => {
    console.log('🚀 ~ titleStyles:', titleStyles);

    return (
      <div ref={ref} className={`text-center ${containerStyles}`}>
        <h1
          className={`text-blackSecondary hidden md:block text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px] ${titleStyles}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {titleSmallerScreen && (
          <h1
            className={`text-blackSecondary  block md:hidden text-[32px] leading-[36px] md:text-[48px] font-semibold md:leading-[52.8px] ${titleStyles}`}
            dangerouslySetInnerHTML={{ __html: titleSmallerScreen }}
          />
        )}

        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className={`text-gray hidden md:block font-normal text-sm md:leading-[25px] md:text-[18px] mt-6 ${descriptionStyles}`}
        />
        {descriptionSmallerScreen && (
          <p
            dangerouslySetInnerHTML={{ __html: descriptionSmallerScreen }}
            className={`text-gray font-normal block md:hidden text-sm md:leading-[25px] md:text-[18px] mt-2 ${descriptionStyles}`}
          />
        )}
      </div>
    );
  }
);

export default CommonHeader;
