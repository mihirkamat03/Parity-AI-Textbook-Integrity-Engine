import React from 'react';

export function Badge({ children, variant = 'neutral', size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 font-medium',
    md: 'text-[11px] px-2.5 py-0.5 font-medium',
    lg: 'text-xs px-3 py-1 font-medium',
  };

  const variantClasses = {
    neutral: 'bg-white/[0.04] text-zinc-300 border border-white/[0.08]',
    primary: 'bg-[#FF7A18]/10 text-[#FF8A24] border border-[#FF7A18]/25',
    high: 'bg-[#FF4D3D]/10 text-[#FF6353] border border-[#FF4D3D]/25 font-medium',
    medium: 'bg-[#F5B942]/10 text-[#F5B942] border border-[#F5B942]/25 font-medium',
    low: 'bg-zinc-800/40 text-zinc-400 border border-zinc-700/25',
    valid: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-sans ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.neutral} ${className}`}
    >
      {children}
    </span>
  );
}

export function SeverityBadge({ severity }) {
  if (severity === 'HIGH') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-medium bg-[#FF4D3D]/10 text-[#FF6353] border border-[#FF4D3D]/25">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D3D]"></span>
        High Risk
      </span>
    );
  }
  if (severity === 'MEDIUM') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-medium bg-[#F5B942]/10 text-[#F5B942] border border-[#F5B942]/25">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F5B942]"></span>
        Medium Risk
      </span>
    );
  }
  if (severity === 'LOW') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-medium bg-zinc-800/40 text-zinc-400 border border-zinc-700/25">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
        Low Risk
      </span>
    );
  }
  if (severity === 'NONE' || severity === 'EQUIVALENT') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-sans font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        Valid Equivalent
      </span>
    );
  }
  return <Badge>{severity}</Badge>;
}
