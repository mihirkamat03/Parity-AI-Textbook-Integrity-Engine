import React from 'react';
import { ShieldAlert, Activity, GitCommit, FileWarning } from 'lucide-react';
import { useVerification } from '../../context/useVerification';

export function ReviewWorkspace() {
  const { setActiveView, flagIssue, dismissIssue } = useVerification();

  return (
    <div className="flex h-full w-full bg-parity-bg border-t border-parity-border overflow-hidden">
      {/* Left side: Document alignment view (68%) */}
      <div className="w-[68%] flex h-full border-r border-parity-border bg-parity-surface">
        {/* English Panel */}
        <div className="w-1/2 flex flex-col h-full border-r border-parity-border">
          <div className="px-6 py-4 border-b border-parity-border bg-parity-bg">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Source Document</div>
            <div className="text-sm font-sans text-zinc-300 font-medium">Physics: Chapter 4 (English)</div>
          </div>
          <div className="flex-1 p-8 overflow-y-auto font-sans text-base leading-relaxed text-zinc-300">
            <p className="mb-6">
              When a net force acts on an object, the object will accelerate in the direction of the net force. 
              The acceleration is directly proportional to the net force and inversely proportional to the mass of the object.
            </p>
            <p className="mb-6">
              This relationship is expressed mathematically by Newton's Second Law of Motion:
            </p>
            <div className="my-6 p-4 bg-white/[0.02] border border-white/[0.05] rounded font-mono text-lg text-white">
              F = m × a
            </div>
            <p>
              Where <span className="font-mono text-sm bg-white/[0.05] px-1 py-0.5 rounded">F</span> is the force,{' '}
              <span className="font-mono text-sm bg-white/[0.05] px-1 py-0.5 rounded">m</span> is the mass, and{' '}
              <span className="font-mono text-sm bg-white/[0.05] px-1 py-0.5 rounded">a</span> is the acceleration.
            </p>
          </div>
        </div>

        {/* Marathi Panel */}
        <div className="w-1/2 flex flex-col h-full bg-parity-surface">
          <div className="px-6 py-4 border-b border-parity-border bg-parity-bg">
            <div className="font-mono text-[10px] text-parity-orange uppercase tracking-widest mb-1">Target Document</div>
            <div className="text-sm font-sans text-zinc-300 font-medium">Physics: Chapter 4 (Marathi)</div>
          </div>
          <div className="flex-1 p-8 overflow-y-auto font-sans text-base leading-relaxed text-zinc-300">
            <p className="mb-6">
              जेव्हा एखाद्या वस्तूवर निव्वळ बल कार्य करते, तेव्हा ती वस्तू त्या बलाच्या दिशेने प्रवेगित होते.
              हा प्रवेग निव्वळ बलाच्या थेट प्रमाणात आणि वस्तूच्या वस्तुमानाच्या व्यस्त प्रमाणात असतो.
            </p>
            <p className="mb-6">
              हा संबंध न्यूटनच्या गतीच्या दुसऱ्या नियमाद्वारे गणितीयदृष्ट्या व्यक्त केला जातो:
            </p>
            <div className="my-6 p-4 bg-parity-red/10 border border-parity-red/30 rounded font-mono text-lg text-parity-red relative">
              <div className="absolute -top-3 right-3 bg-parity-red text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                <FileWarning className="w-3 h-3" /> DISCREPANCY
              </div>
              F = m × v
            </div>
            <p>
              येथे <span className="font-mono text-sm bg-white/[0.05] px-1 py-0.5 rounded">F</span> हे बल आहे,{' '}
              <span className="font-mono text-sm bg-white/[0.05] px-1 py-0.5 rounded">m</span> हे वस्तुमान आहे आणि{' '}
              <span className="font-mono text-sm bg-white/[0.05] px-1 py-0.5 rounded">v</span> हा वेग आहे.
            </p>
          </div>
        </div>
      </div>

      {/* Right side: Evidence Inspector (32%) */}
      <div className="w-[32%] h-full flex flex-col bg-parity-panel z-10">
        <div className="px-6 py-5 border-b border-parity-border flex items-center justify-between">
          <h3 className="font-mono text-xs text-white uppercase tracking-wider">Evidence Inspector</h3>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-parity-orange/10 border border-parity-orange/20 text-parity-orange text-[10px] font-mono tracking-wide rounded">
            <Activity className="w-3 h-3" /> HIGH CONFIDENCE
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <ShieldAlert className="w-5 h-5 text-parity-red" />
              <h2 className="font-display text-2xl text-white tracking-tight">Symbolic Discrepancy</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans mt-3">
              The AST parser detected a fundamental structural mismatch in the governing equation. 
              The target document defines Force as the product of mass and velocity (momentum), rather than mass and acceleration. 
              This constitutes a critical instructional failure.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-b border-parity-border pb-2">Diagnostic Data</h4>
            <div className="font-mono text-xs space-y-3">
              <div className="flex justify-between items-center text-zinc-400">
                <span>Source AST</span>
                <span className="text-zinc-300">Multiply(Mass, Accel)</span>
              </div>
              <div className="flex justify-between items-center text-parity-red">
                <span>Target AST</span>
                <span>Multiply(Mass, Velocity)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Trail Metadata */}
        <div className="mt-auto flex flex-col border-t border-parity-border bg-[#0B0C0E]">
          <div className="flex items-center justify-between px-6 py-3 border-b border-parity-border">
            <span className="font-mono text-[10px] text-zinc-500 tracking-wide uppercase">Method</span>
            <span className="font-mono text-xs text-zinc-300 flex items-center gap-1.5">
              <GitCommit className="w-3.5 h-3.5 text-zinc-500" /> Deterministic AST
            </span>
          </div>
          <div className="flex items-center justify-between px-6 py-3 border-b border-parity-border">
            <span className="font-mono text-[10px] text-zinc-500 tracking-wide uppercase">Entity</span>
            <span className="font-mono text-xs text-zinc-300">Equation 2.1</span>
          </div>
        </div>

        {/* Fixed Action Bar */}
        <div className="p-6 bg-parity-panel border-t border-parity-border flex items-center gap-3">
          <button 
            onClick={() => {
              flagIssue('ISSUE-001');
              setActiveView('report');
            }}
            className="flex-1 h-10 bg-parity-red hover:bg-parity-red-bright text-white font-sans text-sm font-medium rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Flag Error
          </button>
          <button 
            onClick={() => {
              dismissIssue('ISSUE-001');
              setActiveView('report');
            }}
            className="flex-1 h-10 bg-transparent border border-parity-border hover:border-zinc-500 text-zinc-300 font-sans text-sm font-medium rounded transition-colors flex items-center justify-center cursor-pointer"
          >
            Override
          </button>
        </div>
      </div>
    </div>
  );
}
