import React from 'react';

export function BrandMark({ size = 'md', className = '' }) {
  const dimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 rounded-lg bg-[#121418] border border-[#22262E] shadow-sm overflow-hidden ${dimensions[size] || dimensions.md} ${className}`}>
      {/* Precision Geometric P Mark */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1.5"
      >
        {/* Left vertical spine */}
        <rect x="7" y="6" width="3.5" height="20" rx="1" fill="#FF7A18" />
        
        {/* Upper rounded loop */}
        <path
          d="M10.5 6H18C20.7614 6 23 8.23858 23 11C23 13.7614 20.7614 16 18 16H10.5V6Z"
          fill="#FF8A24"
          fillOpacity="0.9"
        />

        {/* Counter-aperture cutout */}
        <path
          d="M10.5 9.5H17C17.8284 9.5 18.5 10.1716 18.5 11C18.5 11.8284 17.8284 12.5 17 12.5H10.5V9.5Z"
          fill="#121418"
        />

        {/* Precision focal terminal dot */}
        <circle cx="10.5" cy="23" r="1.5" fill="#F5B942" />
      </svg>

      {/* Subtle warm rim light */}
      <div className="absolute inset-0 rounded-lg pointer-events-none border border-white/[0.04]" />
    </div>
  );
}
