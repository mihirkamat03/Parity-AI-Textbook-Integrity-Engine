import React, { useState, useEffect } from 'react';
import { 
  ArrowRightLeft, 
  Check, 
  ShieldAlert, 
  Cpu 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ParityEngineHeroVisual() {
  const [activeCycle, setActiveCycle] = useState(0); // 0: Formula Discrepancy, 1: Unit Equivalence
  const [scanProgress, setScanProgress] = useState(0);

  // Analytical engine cycle loop: alternates between formula check & unit normalization
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCycle((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Scanning laser beam progression
  useEffect(() => {
    let animId;
    let start = performance.now();
    const duration = 2800; // 2.8s scan sweep

    const tick = (now) => {
      const elapsed = (now - start) % duration;
      setScanProgress(elapsed / duration);
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#090A0E] via-[#07080A] to-[#050608] p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden select-none">
      {/* Background Coordinate & Optical Grid Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#FF7A18 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Subtle Atmospheric Light Cone */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#FF7A18]/10 blur-3xl rounded-full" />

      {/* Top Laboratory Metadata Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF7A18] animate-pulse" />
          <span className="text-zinc-300 font-semibold tracking-wide">PARITY LABORATORY BENCH</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">PHYSICS CURRICULUM</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
            OPTICAL SCAN: {Math.round(scanProgress * 100)}%
          </span>
          <span className="text-[10px] font-semibold text-[#FF7A18] bg-[#FF7A18]/10 px-2 py-0.5 rounded border border-[#FF7A18]/25">
            BILINGUAL REAL-TIME
          </span>
        </div>
      </div>

      {/* Spatial Document Chamber: Source [EN] <---> Analytical Core <---> Translation [MR] */}
      <div className="relative my-6 py-2 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
        {/* Scanning Optical Laser Sweep across entire chamber */}
        <div 
          className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF7A18] to-transparent shadow-[0_0_15px_#FF7A18] z-20 transition-all duration-75"
          style={{ left: `${scanProgress * 100}%` }}
        >
          <div className="absolute top-0 -translate-x-1/2 px-1 py-0.5 rounded text-[8px] font-mono bg-[#FF7A18] text-black font-bold whitespace-nowrap">
            SCAN
          </div>
        </div>

        {/* 1. Source Textbook Surface [English] (4 cols) */}
        <div className="md:col-span-4 rounded-xl border border-white/[0.08] bg-[#0A0C10]/90 p-4 space-y-3.5 relative overflow-hidden backdrop-blur-sm group">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-[11px] font-semibold text-zinc-300">ORIGINAL TEXTBOOK</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-400 bg-white/[0.04] px-1.5 py-0.2 rounded">
              EN • Class 11
            </span>
          </div>

          {/* Chapter Metadata Header */}
          <div className="space-y-0.5 font-sans">
            <div className="text-[10px] text-zinc-500 font-mono">CHAPTER 04 • SECTION 4.2</div>
            <div className="text-xs font-medium text-white">Newtonian Mechanics</div>
          </div>

          {/* Passage Sample with Optical Highlights */}
          <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] space-y-2 font-sans text-xs">
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              "The force applied on a particle equals the rate of change of its linear momentum..."
            </p>

            {/* Dynamic Verified Node */}
            <div className="pt-2 border-t border-white/[0.06]">
              {activeCycle === 0 ? (
                <div className="p-2.5 rounded border border-white/[0.1] bg-white/[0.03] space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>EQ 4.2 (ORIGINAL)</span>
                    <span className="text-emerald-400">AST: Balanced</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-white">
                    F = m × a
                  </div>
                  <div className="text-[10px] font-sans text-zinc-400">
                    Force = Mass × Acceleration
                  </div>
                </div>
              ) : (
                <div className="p-2.5 rounded border border-white/[0.1] bg-white/[0.03] space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>SCALAR 4.8 (ORIGINAL)</span>
                    <span className="text-emerald-400">SI Notation</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-white">
                    d = 5000 m
                  </div>
                  <div className="text-[10px] font-sans text-zinc-400">
                    Braking stopping distance
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. Central Analytical Engine Layer (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center space-y-4 px-1 text-center">
          <div className="w-full space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#FF7A18]">
              <Cpu className="w-3.5 h-3.5" />
              <span>SEMANTIC & SYMBOLIC PIPELINE</span>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF7A18]/40 to-transparent" />
          </div>

          {/* Active Comparison Machine */}
          <AnimatePresence mode="wait">
            {activeCycle === 0 ? (
              <motion.div
                key="formula-check"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="w-full p-3.5 rounded-xl border border-[#FF4D3D]/30 bg-[#FF4D3D]/[0.06] space-y-2.5 shadow-lg"
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#FF6353] font-semibold flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" />
                    SYMBOLIC AST MISMATCH
                  </span>
                  <span className="text-zinc-400">Conf: 99.8%</span>
                </div>

                <div className="py-1 px-2 rounded bg-black/60 border border-[#FF4D3D]/20 font-mono text-xs text-center space-y-0.5">
                  <div className="text-zinc-400 text-[10px]">COMPARISON VECTOR:</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white font-bold">F = m × a</span>
                    <span className="text-[#FF4D3D]">≢</span>
                    <span className="text-[#FF4D3D] font-bold">F = m × v</span>
                  </div>
                </div>

                <div className="text-[11px] font-sans text-zinc-300 text-left leading-tight">
                  <span className="text-[#FF6353] font-semibold">Critical Discrepancy: </span> 
                  Variable <code className="text-[#FF6353] font-mono">v</code> (velocity) substituted for acceleration <code className="text-zinc-200 font-mono">a</code>, violating Newton's 2nd Law.
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="unit-normalization"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="w-full p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-950/[0.12] space-y-2.5 shadow-lg"
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    VALID EQUIVALENCE DETECTED
                  </span>
                  <span className="text-zinc-400">SI Engine</span>
                </div>

                <div className="py-1 px-2 rounded bg-black/60 border border-emerald-500/20 font-mono text-xs text-center space-y-0.5">
                  <div className="text-zinc-400 text-[10px]">UNIT NORMALIZATION VECTOR:</div>
                  <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold">
                    <span>5000 m</span>
                    <ArrowRightLeft className="w-3 h-3 text-emerald-400" />
                    <span>5 km</span>
                  </div>
                </div>

                <div className="text-[11px] font-sans text-zinc-300 text-left leading-tight">
                  <span className="text-emerald-400 font-semibold">Different ≠ Incorrect: </span>
                  Normalized to identical scalar base <code className="text-emerald-300 font-mono">5,000 m</code>. Physical meaning preserved.
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Toggle Pill for Demonstration */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/60 border border-white/[0.06] text-[10px] font-sans">
            <button
              onClick={() => setActiveCycle(0)}
              className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                activeCycle === 0 
                  ? 'bg-[#FF4D3D]/20 text-[#FF6353] font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Formula Check
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => setActiveCycle(1)}
              className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                activeCycle === 1 
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Unit Equivalence
            </button>
          </div>
        </div>

        {/* 3. Translated Textbook Surface [Marathi] (4 cols) */}
        <div className="md:col-span-4 rounded-xl border border-white/[0.08] bg-[#0A0C10]/90 p-4 space-y-3.5 relative overflow-hidden backdrop-blur-sm group">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[11px] font-semibold text-zinc-300">TRANSLATED TEXTBOOK</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-400 bg-white/[0.04] px-1.5 py-0.2 rounded">
              MR • Class 11
            </span>
          </div>

          {/* Chapter Metadata Header */}
          <div className="space-y-0.5 font-sans">
            <div className="text-[10px] text-zinc-500 font-mono">प्रकरण ०४ • विभाग ४.२</div>
            <div className="text-xs font-medium text-white">न्यूटनचे गतीचे नियम</div>
          </div>

          {/* Passage Sample with Optical Highlights */}
          <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] space-y-2 font-sans text-xs">
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              "एखाद्या कणावर प्रयुक्त केलेले बल हे त्याच्या रेषीय संवेगाच्या बदलाच्या दराशी समान असते..."
            </p>

            {/* Dynamic Target Node */}
            <div className="pt-2 border-t border-white/[0.06]">
              {activeCycle === 0 ? (
                <div className="p-2.5 rounded border border-[#FF4D3D]/30 bg-[#FF4D3D]/[0.08] space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#FF6353]">
                    <span>EQ 4.2 (TRANSLATION)</span>
                    <span className="font-bold">HIGH RISK</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-[#FF6353]">
                    F = m × v
                  </div>
                  <div className="text-[10px] font-sans text-[#FF6353]/90">
                    बल = वस्तुमान × वेग (चूक)
                  </div>
                </div>
              ) : (
                <div className="p-2.5 rounded border border-emerald-500/30 bg-emerald-950/20 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                    <span>SCALAR 4.8 (TRANSLATION)</span>
                    <span className="font-bold">VERIFIED</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-emerald-300">
                    d = 5 km
                  </div>
                  <div className="text-[10px] font-sans text-emerald-400/90">
                    अंतर = ५ किमी (मानक रूपांतरण)
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Verification Engine Telemetry Footer */}
      <div className="pt-3.5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-zinc-400 font-sans">
            Cross-Lingual Embedding Anchor: <strong>Cosine 0.942</strong>
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400 font-sans">
            Symbolic AST Parser: <strong>Active</strong>
          </span>
        </div>
        <div className="text-[11px] text-zinc-400">
          PARITY RESEARCH ENGINE v1.2
        </div>
      </div>
    </div>
  );
}
