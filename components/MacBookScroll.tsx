import React from "react";
import { MacbookScrollEffect } from "./ui/MacBookScrollEffect";
import Link from "next/link";

export function MacbookScroll() {
  return (
    <div className="overflow-hidden w-full">
      <MacbookScrollEffect
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src={`/CodingScreen.webp`}
        showGradient={false}
      />
    </div>
  );
}