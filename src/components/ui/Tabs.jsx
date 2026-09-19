import React from 'react';

export function Tabs({ tabs, activeTab, onChange, className = '' }) {
  return (
    <div className={`flex items-center gap-1.5 p-1 rounded-lg bg-surface border border-border ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all select-none cursor-pointer ${
              isActive
                ? 'bg-slate-900 text-white font-semibold shadow-sm border border-slate-700/80'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                isActive ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-500'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
