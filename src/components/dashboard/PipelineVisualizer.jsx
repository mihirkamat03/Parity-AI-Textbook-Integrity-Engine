import React from 'react';

export function PipelineVisualizer() {
  const stages = [
    "Document Processing",
    "Section Alignment",
    "Semantic Analysis",
    "Terminology Detection",
    "Numerical Verification",
    "Unit Normalization",
    "Formula Verification",
    "Missing Content Detection",
    "Evidence Aggregation",
    "Risk Classification"
  ];

  return (
    <section className="w-full py-16 border-b border-parity-border overflow-hidden">
      <div className="space-y-2 mb-16">
        <h2 className="font-display text-2xl text-white tracking-tight">
          Ten-Stage Verification Architecture
        </h2>
        <p className="text-sm text-zinc-400 font-sans max-w-xl leading-relaxed">
          Sequential multi-stage analysis combining multilingual machine learning models with deterministic symbolic mathematical and unit engines.
        </p>
      </div>

      <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex items-center min-w-[1000px] px-4">
          {stages.map((stage, index) => {
            // Hardcode stage 5 (index 4) as active for the demonstration
            const isActive = index === 4; 
            const isPast = index < 4;
            const isLast = index === stages.length - 1;

            return (
              <div key={index} className="flex-1 flex items-center relative">
                {/* Node & Label Container */}
                <div className="relative flex flex-col items-center justify-center z-10 w-8">
                  {/* The Node */}
                  <div className={`w-2 h-2 rounded-full transition-all duration-500 z-10 ${
                    isActive 
                      ? 'bg-parity-orange ring-4 ring-parity-orange/20 shadow-[0_0_12px_rgba(255,122,24,0.6)] animate-pulse scale-150'
                      : isPast
                      ? 'bg-zinc-500'
                      : 'bg-parity-bg border border-zinc-600'
                  }`} />
                  
                  {/* Step Number Above */}
                  <div className={`absolute -top-8 text-[10px] font-mono transition-colors ${
                    isActive ? 'text-parity-orange' : isPast ? 'text-zinc-500' : 'text-zinc-700'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Label Below */}
                  <div className={`absolute top-8 w-24 text-center text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-widest leading-snug transition-colors ${
                    isActive ? 'text-white' : isPast ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {stage}
                  </div>
                </div>

                {/* Connecting Line */}
                {!isLast && (
                  <div className={`flex-1 h-[1px] -ml-2 -mr-2 ${
                    isPast ? 'bg-zinc-600' : 'bg-parity-border'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
