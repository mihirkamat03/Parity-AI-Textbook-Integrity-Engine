import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export function EquivalenceVisualizer() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 py-12 border-b border-parity-border">
      {/* Left side: Editorial text */}
      <div className="w-full lg:w-1/3 space-y-4 pt-2">
        <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight">
          Different ≠ Incorrect
        </h2>
        <p className="text-sm text-zinc-400 font-sans leading-relaxed">
          Technical translation often introduces apparent discrepancies that are mathematically or scientifically equivalent. 
          PARITY's normalization engine resolves these harmless variations to eliminate false alarms, ensuring reviewers 
          only spend time on genuine instructional degradation.
        </p>
      </div>

      {/* Right side: Bordered rows (NOT cards) */}
      <div className="w-full lg:w-2/3 flex flex-col border-t border-parity-border">
        
        {/* Row 1: Valid Equivalence */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-parity-border hover:bg-white/[0.01] transition-colors gap-4">
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-sm">
            <span className="text-zinc-300 w-16 text-right">5000 m</span>
            <div className="flex items-center gap-2 text-zinc-500 text-[11px] sm:text-xs">
              <span className="hidden sm:block w-8 h-[1px] bg-parity-border"></span>
              <span className="tracking-wide">UNIT NORMALIZATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <span className="text-white w-16">5 km</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-parity-green/10 border border-parity-green/20 text-parity-green text-[10px] font-mono tracking-wide">
            <Check className="w-3 h-3" />
            VALID EQUIVALENCE
          </div>
        </div>

        {/* Row 2: High-Risk Discrepancy */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-parity-border hover:bg-white/[0.01] transition-colors gap-4">
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-sm">
            <span className="text-zinc-300 w-16 text-right">5 km</span>
            <div className="flex items-center gap-2 text-zinc-500 text-[11px] sm:text-xs">
              <span className="hidden sm:block w-8 h-[1px] bg-parity-border"></span>
              <span className="tracking-wide">UNIT NORMALIZATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <span className="text-white w-16">500 m</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-parity-red/10 border border-parity-red/20 text-parity-red text-[10px] font-mono tracking-wide">
            <X className="w-3 h-3" />
            HIGH-RISK DISCREPANCY
          </div>
        </div>

      </div>
    </section>
  );
}
