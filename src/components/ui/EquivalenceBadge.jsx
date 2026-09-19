import React, { useState } from 'react';
import { Check, X, ArrowRight, ShieldCheck, ArrowRightLeft } from 'lucide-react';

export function EquivalenceShowcase({ className = '' }) {
  const [activeTab, setActiveTab] = useState('equivalent'); // 'equivalent' | 'discrepancy'

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header with Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A18]" />
            <span className="font-sans text-xs text-zinc-400 font-medium">
              Core Product Principle
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight mt-1">
            Different ≠ Incorrect
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
          <button
            onClick={() => setActiveTab('equivalent')}
            className={`px-3 py-1.5 rounded-md text-xs font-sans font-medium transition-all cursor-pointer ${
              activeTab === 'equivalent'
                ? 'bg-emerald-500/15 text-emerald-300 font-medium border border-emerald-500/30'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Valid Equivalence
          </button>
          <button
            onClick={() => setActiveTab('discrepancy')}
            className={`px-3 py-1.5 rounded-md text-xs font-sans font-medium transition-all cursor-pointer ${
              activeTab === 'discrepancy'
                ? 'bg-[#FF4D3D]/15 text-[#FF6353] font-medium border border-[#FF4D3D]/30'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Actual Discrepancy
          </button>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-2xl">
        PARITY uses symbolic normalization and dimensional reasoning to distinguish harmless representational 
        variations from errors that corrupt physical laws or educational integrity.
      </p>

      {/* Dynamic Comparison Presentation */}
      {activeTab === 'equivalent' ? (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/[0.08] p-6 space-y-5">
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-emerald-400 font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              EVALUATED AS: VALID EQUIVALENCE (Not Flagged as Error)
            </span>
            <span className="font-mono text-zinc-500 text-[11px]">SI Normalization Engine</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Source */}
            <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 font-sans block">Source Representation</span>
              <span className="text-2xl font-bold text-white font-mono">5000 m</span>
              <span className="text-[11px] text-zinc-400 block font-sans">Standard meter notation</span>
            </div>

            {/* Normalization Engine */}
            <div className="flex flex-col items-center justify-center p-2 space-y-1 text-center">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-semibold">
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>SI Base: 5,000 m</span>
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">
                Normalized to identical scalar magnitude
              </div>
            </div>

            {/* Target */}
            <div className="p-4 rounded-lg bg-black/40 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] text-zinc-500 font-sans block">Translated Representation</span>
              <span className="text-2xl font-bold text-emerald-300 font-mono">5 km</span>
              <span className="text-[11px] text-emerald-400/80 block font-sans">Preserves exact 10³ m physical scale</span>
            </div>
          </div>

          <div className="text-xs text-zinc-400 font-sans border-t border-emerald-500/15 pt-3">
            <strong className="text-zinc-200">System Verdict:</strong> Textually divergent, mathematically identical. The translation preserved technical correctness.
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-[#FF4D3D]/25 bg-[#FF4D3D]/[0.05] p-6 space-y-5">
          <div className="flex items-center justify-between text-xs font-sans">
            <span className="text-[#FF6353] font-medium flex items-center gap-1.5">
              <X className="w-4 h-4 text-[#FF4D3D]" />
              EVALUATED AS: ACTUAL DISCREPANCY (Critical Magnitude Shift)
            </span>
            <span className="font-mono text-zinc-500 text-[11px]">Scalar Verification Engine</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Source */}
            <div className="p-4 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
              <span className="text-[10px] text-zinc-500 font-sans block">Source Representation</span>
              <span className="text-2xl font-bold text-white font-mono">5 km</span>
              <span className="text-[11px] text-zinc-400 block font-sans">5,000 m SI base value</span>
            </div>

            {/* Discrepancy Failure */}
            <div className="flex flex-col items-center justify-center p-2 space-y-1 text-center">
              <div className="flex items-center gap-1.5 text-[#FF6353] font-mono text-xs font-semibold">
                <span>Ratio: 0.1× (10× Reduction)</span>
              </div>
              <div className="text-[11px] text-zinc-400 font-sans">
                Magnitude mismatch detected
              </div>
            </div>

            {/* Target */}
            <div className="p-4 rounded-lg bg-black/40 border border-[#FF4D3D]/30 space-y-1">
              <span className="text-[10px] text-zinc-500 font-sans block">Translated Representation</span>
              <span className="text-2xl font-bold text-[#FF6353] font-mono">500 m</span>
              <span className="text-[11px] text-[#FF6353]/80 block font-sans">Missing factor of 10</span>
            </div>
          </div>

          <div className="text-xs text-zinc-400 font-sans border-t border-[#FF4D3D]/15 pt-3">
            <strong className="text-zinc-200">System Verdict:</strong> The translation reduced the numerical magnitude by a factor of 10. Flagged as High-Risk Discrepancy for human validation.
          </div>
        </div>
      )}
    </div>
  );
}

export function EquivalenceBadge({ source = "5000 m", target = "5 km", siValue = "5000 m" }) {
  return (
    <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-4 text-xs space-y-2.5">
      <div className="flex items-center justify-between gap-2 border-b border-emerald-500/15 pb-2">
        <div className="flex items-center gap-1.5 font-sans text-emerald-400 font-medium text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Different ≠ Incorrect (Verified Equivalent)</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-sans font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-500/25">
          Valid Equivalent
        </span>
      </div>

      <p className="text-zinc-300 font-sans text-xs leading-relaxed">
        SI Unit Normalizer verified that textual differences represent mathematically identical physical quantities.
      </p>

      <div className="flex items-center justify-between rounded-lg bg-black/40 px-3.5 py-2 font-mono text-xs border border-white/[0.04]">
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500">Source:</span>
          <span className="font-semibold text-white">{source}</span>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500">SI Base:</span>
          <span className="font-semibold text-emerald-400">{siValue}</span>
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500">Target:</span>
          <span className="font-semibold text-white">{target}</span>
          <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
        </div>
      </div>
    </div>
  );
}
