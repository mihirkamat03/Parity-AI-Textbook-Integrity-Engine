import React from 'react';
import { 
  Compass, 
  FilePlus2, 
  Activity, 
  SplitSquareVertical, 
  ListFilter, 
  BarChart3, 
  FileCheck2 
} from 'lucide-react';
import { useVerification } from '../../context/useVerification';
import { BrandMark } from '../ui/BrandMark';

export function Sidebar() {
  const { activeView, setActiveView, metrics, pipelineStatus } = useVerification();

  const sections = [
    {
      title: null,
      items: [
        { id: 'overview', label: 'Overview', icon: Compass, badge: null }
      ]
    },
    {
      title: 'Verification',
      items: [
        { id: 'new', label: 'New Verification', icon: FilePlus2, badge: 'Demo' },
        { 
          id: 'analysis', 
          label: 'Analysis Pipeline', 
          icon: Activity, 
          badge: pipelineStatus === 'running' ? 'LIVE' : null,
          badgeColor: 'text-[#FF7A18] bg-[#FF7A18]/10'
        },
      ]
    },
    {
      title: 'Review',
      items: [
        { 
          id: 'review', 
          label: 'Reviewer Workspace', 
          icon: SplitSquareVertical, 
          badge: `${metrics.pending} pending`,
          badgeColor: metrics.pending > 0 ? 'text-[#F5B942] bg-[#F5B942]/10' : 'text-emerald-400 bg-emerald-950/30'
        },
        { 
          id: 'issues', 
          label: 'Discrepancy Log', 
          icon: ListFilter, 
          badge: `${metrics.total}`,
          badgeColor: 'text-zinc-400 bg-white/[0.04]'
        },
      ]
    },
    {
      title: 'Insights',
      items: [
        { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
        { id: 'report', label: 'Verification Report', icon: FileCheck2, badge: null },
      ]
    }
  ];

  return (
    <aside className="w-[230px] border-r border-white/[0.06] bg-[#090A0D] flex flex-col justify-between shrink-0 select-none z-20">
      <div className="overflow-y-auto">
        {/* PARITY Brand Header */}
        <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3">
          <BrandMark size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg tracking-wider text-white font-bold">PARITY</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">v1.2</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-sans tracking-tight">Verify. Compare. Preserve.</p>
          </div>
        </div>

        {/* Workspace Navigation */}
        <nav className="p-2.5 space-y-4">
          {sections.map((sec, sIdx) => (
            <div key={sIdx} className="space-y-0.5">
              {sec.title && (
                <div className="px-2.5 py-1 text-[11px] font-sans font-medium text-zinc-400 tracking-wide">
                  {sec.title}
                </div>
              )}
              {sec.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`relative w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-sans transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'text-white font-medium bg-white/[0.04] border border-white/[0.08]'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02] border border-transparent'
                    }`}
                  >
                    {/* Thin subtle orange accent indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#FF7A18] rounded-r shadow-[0_0_8px_#FF7A18]" />
                    )}

                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#FF7A18]' : 'text-zinc-400'}`} />
                      <span className={isActive ? 'text-zinc-100 font-medium' : 'text-zinc-400'}>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${item.badgeColor || 'text-zinc-400 bg-white/[0.04]'}`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Quiet Telemetry / System Footer */}
      <div className="p-3.5 border-t border-white/[0.06] bg-[#07080A]">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-sans">
            <span className="text-zinc-400 font-medium">Prototype Metric</span>
            <span className="text-[10px] font-mono text-zinc-400">Index</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              {metrics.integrityScore}%
            </span>
            <span className="text-[10px] font-mono text-zinc-400">
              {metrics.resolvedCount}/{metrics.total} reviewed
            </span>
          </div>
          <div className="h-1 w-full rounded-full bg-zinc-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FF7A18] to-[#F5B942] transition-all duration-300"
              style={{ width: `${metrics.integrityScore}%` }}
            />
          </div>
          <p className="text-[9px] text-zinc-400 leading-tight pt-0.5">
            Dynamic resolution score. Not an official compliance claim.
          </p>
        </div>

        <div className="mt-2.5 flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-white/[0.04]">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
            Engine Online
          </span>
          <span className="font-mono text-zinc-400">EN ➔ MR</span>
        </div>
      </div>
    </aside>
  );
}
