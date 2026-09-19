import React from 'react';
import { Printer, X } from 'lucide-react';
import { useVerification } from '../../context/useVerification';

export function VerificationReport() {
  const { setActiveView } = useVerification();
  
  const metadata = [
    { label: 'Source Material', value: 'English (Original)' },
    { label: 'Target Material', value: 'Marathi (Translation)' },
    { label: 'Subject Domain', value: 'Newtonian Mechanics' },
    { label: 'Evaluation Date', value: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
    { label: 'Prototype Integrity Metric', value: '87.4%' },
  ];

  return (
    <div className="min-h-full bg-parity-bg flex flex-col items-center py-12 px-6">
      
      {/* Floating Action Bar */}
      <div className="w-full max-w-4xl flex justify-end gap-3 mb-6">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] rounded-lg text-xs font-sans text-white transition-colors cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" /> Print Record
        </button>
        <button 
          onClick={() => setActiveView('overview')}
          className="flex items-center gap-2 px-4 py-2 bg-parity-orange text-black hover:bg-parity-orange-bright rounded-lg text-xs font-sans font-semibold transition-colors cursor-pointer shadow-[0_2px_12px_rgba(255,122,24,0.25)]"
        >
          <X className="w-3.5 h-3.5" /> Close Report
        </button>
      </div>

      {/* Editorial Report Container */}
      <div className="w-full max-w-4xl bg-parity-bg border border-parity-border p-12 sm:p-20 relative">
        
        {/* Header Region */}
        <header className="border-b border-parity-border pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-4">Official Record</span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-white uppercase tracking-tight">
              Parity Verification<br />Report
            </h1>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-1">Status</span>
            <span className="font-mono text-sm text-parity-orange border border-parity-orange/30 bg-parity-orange/10 px-3 py-1 rounded">
              PENDING VALIDATION
            </span>
          </div>
        </header>

        {/* Metadata Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {metadata.map((item, idx) => (
            <div key={idx} className="border-b border-white/[0.04] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block mb-2">{item.label}</span>
              <span className="font-sans text-lg text-white font-medium">{item.value}</span>
            </div>
          ))}
        </section>

        {/* Findings Summary */}
        <section className="mb-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 border-b border-parity-border pb-4 mb-6">Executive Summary</h2>
          <p className="font-sans text-sm text-zinc-300 leading-relaxed max-w-2xl">
            The automated verification engine processed 24 passages covering Chapter 4: Force and Motion. 
            The structural analysis identified <span className="text-parity-red font-medium">3 high-risk formula discrepancies</span> and 
            <span className="text-parity-orange font-medium"> 12 terminology shifts</span> requiring expert review. 
            Unit normalization confirmed equivalence for all 18 scalar references.
          </p>
        </section>

        {/* Reviewer Validation / Sign-off */}
        <footer className="mt-auto pt-12 border-t-2 border-parity-border flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <h3 className="font-sans text-sm font-bold text-white mb-2">Reviewer Validation Record</h3>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed">
              By signing below, the designated reviewer confirms that all flagged discrepancies have been inspected and appropriate pedagogical overrides have been applied.
            </p>
          </div>
          
          <div className="flex-1 max-w-sm flex flex-col justify-end">
            <div className="w-full border-b border-dashed border-zinc-500 mb-2 h-12"></div>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              <span>Authorized Signature</span>
              <span>Date</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
