import React from 'react';

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon: Icon,
  type = 'button',
}) {
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-lg font-medium',
    md: 'text-xs sm:text-sm px-4 py-2 gap-2 rounded-lg font-medium',
    lg: 'text-sm px-5 py-2.5 gap-2.5 rounded-xl font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-[#FF7A18] hover:bg-[#FF8A24] active:bg-[#E66B12] text-black font-semibold shadow-[0_2px_12px_rgba(255,122,24,0.25)] hover:shadow-[0_4px_20px_rgba(255,122,24,0.38)] transition-all duration-150 border-t border-white/25',
    secondary:
      'bg-white/[0.05] hover:bg-white/[0.09] text-zinc-200 hover:text-white border border-white/[0.08] hover:border-white/[0.16] transition-all duration-150',
    outline:
      'bg-transparent hover:bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.12] hover:border-white/[0.22] transition-all duration-150',
    danger:
      'bg-[#FF4D3D]/12 hover:bg-[#FF4D3D]/20 text-[#FF6353] border border-[#FF4D3D]/30 hover:border-[#FF4D3D]/45 transition-all duration-150',
    success:
      'bg-emerald-500/12 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/45 transition-all duration-150',
    ghost:
      'bg-transparent hover:bg-white/[0.05] text-zinc-400 hover:text-zinc-200 transition-colors duration-150',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center select-none font-sans cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </button>
  );
}
