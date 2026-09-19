import React from 'react';

export function Card({ children, className = '', highlight = false, onClick = null }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border transition-all duration-150 ${
        highlight 
          ? 'border-[#FF7A18]/30 bg-[#0F1014] shadow-[0_2px_16px_rgba(255,122,24,0.08)]' 
          : 'border-white/[0.06] bg-[#0A0B0E]/60 hover:border-white/[0.1] hover:bg-[#0D0E12]'
      } p-5 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-between border-b border-white/[0.06] pb-3 mb-3.5 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`font-sans text-xs sm:text-sm font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
}
