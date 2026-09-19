import { 
  Play, 
  RotateCcw, 
  Sparkles, 
  Search 
} from 'lucide-react';
import { useVerification } from '../../context/useVerification';
import { Button } from '../ui/Button';

export function TopBar() {
  const { 
    job, 
    startPipeline, 
    resetIssues, 
    pipelineStatus,
    setActiveView 
  } = useVerification();

  return (
    <header className="h-16 border-b border-white/[0.06] bg-[#08090C] px-6 flex items-center justify-between shrink-0 z-10 select-none">
      {/* Left: Document / Chapter Context */}
      <div className="flex items-center gap-2 text-xs font-sans text-zinc-300">
        <span className="text-zinc-400 font-medium">{job.subject}</span>
        <span className="text-zinc-600">/</span>
        <span className="text-zinc-200 font-medium">{job.chapter}</span>
      </div>

      {/* Center: Language Pair & Demo Environment Badge */}
      <div className="hidden md:flex items-center gap-2.5">
        <span className="font-mono text-xs text-[#FF7A18] font-medium bg-[#FF7A18]/10 px-2.5 py-0.5 rounded border border-[#FF7A18]/20">
          {job.sourceLanguage} ➔ {job.targetLanguage}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5B942]/70" />
          <span>Demo Environment</span>
        </span>
      </div>

      {/* Right: Search, Reset, Run Pipeline (Dominant), Reviewer Profile */}
      <div className="flex items-center gap-3.5">
        {/* Clean Search (~260px) */}
        <div className="relative hidden lg:block w-64">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            readOnly
            onClick={() => setActiveView('issues')}
            placeholder="Search discrepancies, formulas..."
            className="w-full h-8 pl-8.5 pr-8 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-sans text-zinc-300 placeholder:text-zinc-500 cursor-pointer focus:outline-none focus:border-white/[0.15]"
          />
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[10px] text-zinc-400 bg-white/[0.05] px-1.5 py-0.5 rounded border border-white/[0.06]">
            ⌘K
          </kbd>
        </div>

        {/* Reset State */}
        <button
          onClick={resetIssues}
          title="Reset demonstration state"
          className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        <div className="h-4 w-px bg-white/[0.08]" />

        {/* The Dominant Action: Run Pipeline (~130px) */}
        {pipelineStatus === 'running' ? (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FF7A18]/10 border border-[#FF7A18]/30 text-[#FF7A18] font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Analyzing...</span>
          </div>
        ) : (
          <Button
            size="sm"
            variant="primary"
            icon={Play}
            onClick={startPipeline}
            className="w-[128px]"
          >
            Run Pipeline
          </Button>
        )}

        {/* Compact Reviewer Avatar + Name */}
        <div className="flex items-center gap-2 pl-1 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-[#181A20] border border-white/[0.1] flex items-center justify-center text-[10px] font-semibold text-zinc-200">
            MR
          </div>
          <div className="hidden xl:flex flex-col text-left">
            <span className="text-xs font-medium text-zinc-200 leading-tight">Mihir R.</span>
            <span className="text-[10px] text-zinc-400 leading-tight">Reviewer</span>
          </div>
        </div>
      </div>
    </header>
  );
}
