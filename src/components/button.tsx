"use client";
import React, { FC, MouseEvent } from "react";

interface CustomButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  disabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  onClick,
  text,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-amber rounded-full py-4 2xl:py-6 px-8 2xl:px-8 text-white md:text-lg 2xl:text-xl font-medium
    ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
