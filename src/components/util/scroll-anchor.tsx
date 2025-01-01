"use client";
import React, { useState, useEffect, useRef } from "react";

export interface IScrollAnchorProps {
  positionStyle?: string
}

export const ScrollAnchor = React.forwardRef<HTMLInputElement, IScrollAnchorProps>(({positionStyle}, ref) => {
  return (
    <div className="relative invisible">
      <div ref={ref} className={`absolute w-1 h-1 bg-redMain l-10 ${positionStyle || '-top-40'}`} />
    </div>
  );
});