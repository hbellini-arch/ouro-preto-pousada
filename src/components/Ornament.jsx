import React from 'react';

export default function Ornament({ className = "my-3" }) {
  return (
    <div className={`w-full flex items-center justify-center gap-3 sm:gap-4 ${className}`}>
      <div className="h-0.5 flex-1 max-w-[120px] sm:max-w-xs bg-gradient-to-r from-transparent via-imperial-gold/60 to-imperial-gold"></div>
      <span className="text-imperial-bronze text-sm sm:text-base font-serif select-none">❦ ✤ ❦</span>
      <div className="h-0.5 flex-1 max-w-[120px] sm:max-w-xs bg-gradient-to-l from-transparent via-imperial-gold/60 to-imperial-gold"></div>
    </div>
  );
}
