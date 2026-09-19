import React from 'react';

export function ProgressBar({ value = 0, max = 100, variant = 'sky', className = '', showLabel = false }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const variantColors = {
    sky: 'from-sky-500 to-indigo-500',
    emerald: 'from-emerald-500 to-teal-400',
    amber: 'from-amber-500 to-yellow-400',
    red: 'from-red-500 to-rose-400',
  };

  return (
    <div className={`w-full space-y-1.5 ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-[11px] font-mono text-slate-400">
          <span>Progress</span>
          <span className="text-white font-semibold">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-2 w-full rounded-full bg-slate-900 border border-border-subtle overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${variantColors[variant] || variantColors.sky} transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
