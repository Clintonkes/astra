import React from "react";

const ITEMS = [
  "Lawn Mowing", "Lakefront Edging", "Snow & Seasonal", "Fall Clean-Up",
  "Hedge Trimming", "Aeration", "Mulch & Beds", "Landscaping",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-sastra-pine py-4 overflow-hidden border-y border-sastra-sun/20">
      <div className="flex w-max animate-str-marquee">
        {row.map((it, idx) => (
          <span key={idx} className="flex items-center gap-4 px-8 font-fraunces text-sastra-sun text-lg md:text-xl italic whitespace-nowrap">
            {it}<span className="w-1.5 h-1.5 rounded-full bg-sastra-sun/40" />
          </span>
        ))}
      </div>
    </div>
  );
}