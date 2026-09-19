import React from 'react';

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendPositive,
  highlight = false,
  className = '',
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-[#0E1014]/60 p-5 transition-all duration-200 hover:border-white/[0.12] hover:bg-[#13151C]/80 ${
        highlight ? 'border-[#FF7A18]/40 bg-[#121419]/90 shadow-[0_4px_24px_rgba(255,122,24,0.12)]' : 'border-white/[0.06]'
      } ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-sans font-medium text-zinc-400">
          {title}
        </span>
        {Icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="mt-3.5 flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          {value}
        </span>
        {trend && (
          <span
            className={`text-xs font-sans font-medium px-2 py-0.5 rounded-full ${
              trendPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
            }`}
          >
            {trend}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-2 text-xs text-zinc-400 font-sans line-clamp-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
