import React from 'react';

export function PageHeader({ category, title, description, actions, badge }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-white/[0.06] pb-5">
      <div className="space-y-1">
        {category && (
          <div className="flex items-center gap-2 text-xs font-sans text-zinc-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A18]" />
            <span className="text-zinc-400">{category}</span>
            {badge && (
              <span className="ml-1 px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                {badge}
              </span>
            )}
          </div>
        )}
        <h1 className="font-display text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed pt-0.5">
            {description}
          </p>
        )}
      </div>

      {actions && (
        <div className="flex items-center gap-2.5 shrink-0 pt-1">
          {actions}
        </div>
      )}
    </div>
  );
}
