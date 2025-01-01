"use client";
import React, { useState, useEffect, useRef } from "react";
import TitleSection from "../timeline/title";
import CustomButton from "@/components/button";
import { trySubscribe } from "@/util/maillist";

const BORDER_COLORS = {
  valid: "green-600",
  invalid: "red-900",
  default: "gray-50",
};

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

interface IEarlyAccessInputProps {
  isSmall?: boolean
}


const EarlyAccessInput = React.forwardRef<HTMLInputElement, IEarlyAccessInputProps>(({isSmall}, ref) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [borderColor, setBorderColor] = useState(BORDER_COLORS.default);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isValid = isValidEmail(email);
    setIsValid(isValid);
    setBorderColor(isValid ? BORDER_COLORS.valid : BORDER_COLORS.invalid);
  }, [email]);

  const onSubscribe = async () => {
    if (email && isValidEmail(email)) {
      setIsSubscribing(true);

      const isSubscribeSuccessful = await trySubscribe(email);

      setIsSubscribed(isSubscribeSuccessful);

      setIsSubscribing(false);
    } else {
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (isSubscribed) {
      setTimeout(() => {
        window.location.href = "/?subscribed=true";
      }, 1000);
    }
  }, [isSubscribed])

  return (
    <div
      ref={ref}
      className={`${!isSmall ? `mt-[10px] sm:mt-[71px] ` : ''}flex flex-col md:flex-row items-center gap-4`}
    >
      {!isSubscribed ? (
        !isSubscribing ? (
          <div className={isSmall ? "rounded-full w-max p-3 mt-4 bg-white flex" : "md:border-[1px] rounded-full w-max  p-4 md:border-grayFade md:mt-16"}>
            <input
              ref={inputRef}
              placeholder="Enter your email address"
              inputMode="email"
              className={isSmall ? `text-gray text-sm font-normal  md:w-[228px] rounded-full outline-none px-4` : `text-gray text-xs md:text-lg 2xl:text-xl font-normal border-grayFade border-[1px] w-full  md:w-[350px] rounded-full py-4 2xl:py-6 px-4 md:px-6 outline-none`}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  void onSubscribe();
                }
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <CustomButton
              disabled={isSubscribing}
              onClick={() => {
                void onSubscribe();
              }}
              text="Get Early Access"
              className={isSmall ? "w-max !text-xs md:!text-sm !p-3 md:!px-8 md:!py-3" : "w-full md:w-max mt-4 md:mt-0 !py-2 md:!py-4 !leading-[26px]"}
            />
          </div>
        ) : isSmall ? (<span className='text-white'>Subscribing...</span>) : (
          <TitleSection
            title="Subscribing..."
            description="Please wait while we subscribe you to our mailing list."
            descriptionSmallerScreens="Please wait while we subscribe you to our mailing list."
            customClassName="text-center"
          />
        )
      ) : isSmall ? (<span className='text-white'>Subscribed!</span>) : (
        <TitleSection
          title="Thanks for subscribing!"
          description="Please check your email for a confirmation."
          descriptionSmallerScreens="Please check your email for a confirmation."
          customClassName="text-center"
        />
      )}
    </div>
  );
});

export default EarlyAccessInput;