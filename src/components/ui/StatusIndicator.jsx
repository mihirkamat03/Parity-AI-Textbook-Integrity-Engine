import React from 'react';

export function StatusIndicator({ status = 'idle', label = null, className = '' }) {
  const configs = {
    idle: { color: 'bg-slate-500', ping: false, text: 'Idle' },
    running: { color: 'bg-sky-400', ping: true, text: 'Running' },
    processing: { color: 'bg-sky-400', ping: true, text: 'Processing' },
    completed: { color: 'bg-emerald-400', ping: false, text: 'Completed' },
    warning: { color: 'bg-amber-400', ping: false, text: 'Attention Required' },
    error: { color: 'bg-red-400', ping: false, text: 'Discrepancy Detected' },
  };

  const config = configs[status] || configs.idle;

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-mono text-slate-300 ${className}`}>
      <span className="relative flex h-2 w-2">
        {config.ping && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.color} opacity-75`} />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${config.color}`} />
      </span>
      {label !== false && <span>{label || config.text}</span>}
    </span>
  );
}
