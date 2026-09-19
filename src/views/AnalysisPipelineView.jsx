import React, { useRef, useEffect } from 'react';
import { 
  Cpu, 
  GitMerge, 
  Sparkles, 
  BookOpen, 
  Binary, 
  Scale, 
  Variable, 
  FileQuestion, 
  Layers, 
  ShieldAlert,
  CheckCircle2,
  Terminal,
  FastForward,
  Play,
  ArrowRight,
  Workflow
} from 'lucide-react';
import { useVerification } from '../context/useVerification';
import { Button } from '../components/ui/Button';
import { PageHeader } from '../components/ui/PageHeader';
import { ProgressBar } from '../components/ui/ProgressBar';

export function AnalysisPipelineView() {
  const { 
    stages, 
    pipelineStatus, 
    currentStageIndex, 
    pipelineLogs, 
    startPipeline, 
    fastForwardPipeline, 
    setActiveView 
  } = useVerification();

  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pipelineLogs]);

  const iconMap = {
    Cpu,
    GitMerge,
    Sparkles,
    BookOpen,
    Binary,
    Scale,
    Variable,
    FileQuestion,
    Layers,
    ShieldAlert,
  };

  const getCategoryColor = (category) => {
    if (category.includes('ML')) return 'text-[#F5B942] border-[#F5B942]/25 bg-[#F5B942]/10';
    if (category.includes('Symbolic')) return 'text-[#FF7A18] border-[#FF7A18]/25 bg-[#FF7A18]/10';
    return 'text-[#FF4D3D] border-[#FF4D3D]/25 bg-[#FF4D3D]/10';
  };

  const pipelineProgress = Math.round((currentStageIndex / stages.length) * 100);

  return (
    <div className="w-full px-6 sm:px-8 lg:px-12 py-10 space-y-8 bg-ambient-warm">
      {/* Page Header */}
      <PageHeader
        category="INTELLIGENCE PIPELINE"
        badge={pipelineStatus === 'running' ? 'RUNNING' : 'COMPLETED'}
        title="Verification Pipeline Execution"
        description="Sequential multi-stage analysis combining multilingual machine learning models with deterministic symbolic mathematical and unit engines."
        actions={
          <div className="flex items-center gap-2.5">
            {pipelineStatus === 'running' ? (
              <Button
                variant="outline"
                size="sm"
                icon={FastForward}
                onClick={fastForwardPipeline}
              >
                Fast-Forward
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  icon={Play}
                  onClick={startPipeline}
                >
                  Re-Run Verification
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => setActiveView('review')}
                >
                  Reviewer Workspace
                </Button>
              </>
            )}
          </div>
        }
      />

      {/* Central Workflow Diagram: Original Document ↓ Alignment ↓ Evidence ↓ Risk */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <span className="text-xs font-sans text-zinc-300 font-semibold flex items-center gap-2">
            <Workflow className="w-4 h-4 text-[#FF7A18]" />
            Core Verification Architecture
          </span>
          <span className="text-[11px] font-mono text-zinc-400">
            HYBRID PIPELINE (AI/ML + DETERMINISTIC TENSOR)
          </span>
        </div>

        {/* 10-Stage Horizontal Node Map */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {stages.map((stage, idx) => {
            const Icon = iconMap[stage.icon] || Cpu;
            const isCompleted = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex && pipelineStatus === 'running';

            return (
              <div
                key={stage.id}
                className={`p-3 rounded-lg border transition-all duration-200 relative ${
                  isCurrent
                    ? 'border-[#FF7A18] bg-[#FF7A18]/[0.06] shadow-[0_0_15px_rgba(255,122,24,0.15)]'
                    : isCompleted
                    ? 'border-emerald-500/20 bg-emerald-950/[0.05]'
                    : 'border-white/[0.04] bg-black/40 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-2">
                  <span className="font-mono text-zinc-500">0{stage.order}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-sans ${getCategoryColor(stage.category)}`}>
                    {stage.category.includes('ML') ? 'AI/ML' : 'Deterministic'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#FF7A18] animate-pulse' : isCompleted ? 'text-emerald-400' : 'text-zinc-500'}`} />
                  <span className="text-xs font-sans font-medium text-white line-clamp-1">
                    {stage.name}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>{isCurrent ? 'ANALYZING...' : isCompleted ? 'VERIFIED' : 'PENDING'}</span>
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Metric Strip */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="md:col-span-8 p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-3">
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-zinc-300 font-medium">Pipeline Progress</span>
            <span className="font-mono text-[#FF7A18] font-semibold">{pipelineProgress}% Complete</span>
          </div>
          <ProgressBar value={pipelineProgress} variant="amber" />
          <div className="flex items-center justify-between text-[11px] font-sans text-zinc-400 pt-1">
            <span>Stage {Math.min(currentStageIndex + 1, stages.length)} of {stages.length}: {stages[Math.min(currentStageIndex, stages.length - 1)]?.name}</span>
            <span>Est. Remaining: {pipelineStatus === 'running' ? '00:04' : '00:00'}</span>
          </div>
        </div>

        <div className="md:col-span-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-2">
          <div className="text-xs font-sans text-zinc-400 font-medium">Pipeline Latency</div>
          <div className="font-display text-3xl text-white tracking-tight">1.42s</div>
          <div className="text-[11px] text-zinc-400 font-sans">18 pages scanned, 14 formulas validated</div>
        </div>
      </div>

      {/* Real-Time Telemetry Terminal Console */}
      <div className="rounded-xl border border-white/[0.08] bg-[#07080A] overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/[0.06] bg-black/40 flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#FF7A18]" />
            <span>telemetry_stream.log</span>
          </div>
          <span className="text-[10px] text-zinc-500">UTF-8 • REALTIME</span>
        </div>

        <div className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-1 bg-[#050608]">
          {pipelineLogs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="text-zinc-600 select-none text-[11px]">{log.time}</span>
              <span className={`select-none text-[10px] font-semibold px-1 rounded ${
                log.level === 'CRIT' ? 'bg-[#FF4D3D]/20 text-[#FF6353]' :
                log.level === 'WARN' ? 'bg-[#F5B942]/20 text-[#F5B942]' :
                log.level === 'PASS' ? 'bg-emerald-950/50 text-emerald-400' :
                'text-zinc-500'
              }`}>
                [{log.level}]
              </span>
              <span className={`flex-1 ${
                log.level === 'CRIT' ? 'text-[#FF6353]' :
                log.level === 'WARN' ? 'text-[#F5B942]' :
                log.level === 'PASS' ? 'text-emerald-300' :
                'text-zinc-400'
              }`}>
                {log.message}
              </span>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
}
