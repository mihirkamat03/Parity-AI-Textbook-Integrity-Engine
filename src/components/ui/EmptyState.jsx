import React from 'react';
import { Inbox } from 'lucide-react';
import { Button } from './Button';

export function EmptyState({
  icon: Icon = Inbox,
  title = 'No items found',
  description = 'No records match your selected criteria.',
  actionLabel = null,
  onAction = null,
  className = '',
}) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center rounded-xl border border-dashed border-border bg-card/40 ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-border text-slate-400 mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-sm font-semibold font-sans text-white">{title}</h4>
      <p className="mt-1 text-xs text-slate-400 max-w-sm font-sans">{description}</p>
      {actionLabel && onAction && (
        <div className="mt-4">
          <Button size="sm" variant="secondary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
