import React from 'react';
import { 
  Compass, 
  FilePlus2, 
  Activity, 
  SplitSquareVertical, 
  ListFilter, 
  BarChart3, 
  FileCheck2,
  Play
} from 'lucide-react';
import { useVerification } from '../../context/useVerification';
import { BrandMark } from '../ui/BrandMark';

export function AppShell({ children }) {
  const { 
    activeView, 
    setActiveView, 
    startPipeline, 
    pipelineStatus, 
    metrics, 
    job 
  } = useVerification();

  const navigation = [
    { id: 'overview', label: 'Overview', icon: Compass },
    { id: 'new', label: 'New Verification', icon: FilePlus2 },
    { id: 'analysis', label: 'Analysis Pipeline', icon: Activity, badge: pipelineStatus === 'running' ? 'LIVE' : null },
    { id: 'review', label: 'Reviewer Workspace', icon: SplitSquareVertical, badge: metrics.pending > 0 ? `${metrics.pending}` : null },
    { id: 'issues', label: 'Discrepancy Log', icon: ListFilter, badge: `${metrics.total}` },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'report', label: 'Verification Report', icon: FileCheck2 },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#050608] text-zinc-100 font-sans p-4 gap-4">
      {/* Floating Sidebar Island */}
      <aside className="w-[240px] bg-parity-bg rounded-2xl border border-white/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.5)] flex flex-col justify-between shrink-0 select-none z-20 overflow-hidden">
        <div className="overflow-y-auto">
          {/* Logo & Platform Header */}
          <div className="h-[68px] px-5 border-b border-white/[0.04] flex items-center gap-3">
            <BrandMark size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg tracking-wider text-white font-bold">PARITY</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.04]">v1.2</span>
              </div>
              <p className="text-[10px] text-parity-muted font-sans tracking-tight">Forensic Verification Engine</p>
            </div>
          </div>

          {/* Minimal Links with Thin Left Border for Active States */}
          <nav className="py-4 space-y-1 px-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-sans transition-all cursor-pointer text-left rounded-lg ${
                    isActive
                      ? 'bg-parity-orange/10 text-white font-medium'
                      : 'bg-transparent text-parity-muted hover:text-zinc-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-parity-orange' : 'text-parity-muted'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? 'text-parity-orange bg-parity-orange/10' : 'text-parity-muted bg-white/[0.04]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Minimal Engine Telemetry Footer */}
        <div className="p-4 border-t border-white/[0.04] bg-white/[0.01] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-sans">
            <span className="text-parity-muted">Integrity Index</span>
            <span className="text-[10px] font-mono text-parity-gold">PROTOTYPE</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              {metrics.integrityScore}%
            </span>
            <span className="text-[10px] font-mono text-parity-muted">
              {metrics.resolvedCount}/{metrics.total} reviewed
            </span>
          </div>
          <div className="h-1 w-full rounded-full bg-zinc-800 overflow-hidden">
            <div 
              className="h-full bg-parity-orange transition-all duration-300"
              style={{ width: `${metrics.integrityScore}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-parity-muted pt-1 font-mono">
            <span className="flex items-center gap-1.5 text-parity-green">
              <span className="w-1.5 h-1.5 rounded-full bg-parity-green shadow-[0_0_6px_#10B981]" />
              Online
            </span>
            <span>EN ➔ MR</span>
          </div>
        </div>
      </aside>

      {/* Main Workspace Column */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden gap-4">
        {/* Floating Topbar Island */}
        <header className="h-[68px] bg-parity-surface rounded-2xl border border-white/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.5)] px-6 flex items-center justify-between shrink-0 z-10 select-none">
          {/* Mock Context */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="text-parity-muted">Target:</span>
            <span className="text-white font-medium">{job.targetLanguage || 'Marathi'}</span>
            <span className="text-parity-muted mx-1">|</span>
            <span className="text-parity-muted">Subject:</span>
            <span className="text-white font-medium">{job.subject || 'Newtonian Mechanics'}</span>
          </div>

          {/* Solid Orange Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={startPipeline}
              disabled={pipelineStatus === 'running'}
              className="h-9 px-4 rounded-lg bg-parity-orange hover:bg-parity-orange-bright active:bg-[#E66B12] text-black font-semibold text-xs font-sans flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_2px_12px_rgba(255,122,24,0.25)]"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>{pipelineStatus === 'running' ? 'Running Analysis...' : 'Run Pipeline'}</span>
            </button>
          </div>
        </header>

        {/* Floating Main Content Island */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-parity-bg rounded-2xl border border-white/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.5)] relative">
          {children}
        </main>
      </div>
    </div>
  );
}
