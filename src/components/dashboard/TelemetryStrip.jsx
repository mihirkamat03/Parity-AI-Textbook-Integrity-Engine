import React from 'react';
import { FileCheck2, AlertCircle, ShieldAlert, Scale } from 'lucide-react';

export function TelemetryStrip() {
  const metrics = [
    { 
      label: 'Documents Verified', 
      value: '01', 
      number: '01', 
      textColor: 'text-zinc-400', 
      valColor: 'text-white',
      icon: FileCheck2,
      gradient: 'from-white/[0.03] to-transparent',
      borderColor: 'border-white/[0.08]'
    },
    { 
      label: 'Potential Discrepancies', 
      value: '05', 
      number: '02', 
      textColor: 'text-parity-orange', 
      valColor: 'text-parity-orange',
      icon: AlertCircle,
      gradient: 'from-parity-orange/[0.05] to-transparent',
      borderColor: 'border-parity-orange/30'
    },
    { 
      label: 'High-Risk Findings', 
      value: '03', 
      number: '03', 
      textColor: 'text-parity-red', 
      valColor: 'text-parity-red',
      icon: ShieldAlert,
      gradient: 'from-parity-red/[0.05] to-transparent',
      borderColor: 'border-parity-red/30'
    },
    { 
      label: 'Valid Equivalences', 
      value: '18', 
      number: '04', 
      textColor: 'text-parity-green', 
      valColor: 'text-parity-green',
      icon: Scale,
      gradient: 'from-parity-green/[0.04] to-transparent',
      borderColor: 'border-parity-green/30'
    }
  ];

  return (
    <section className="w-full relative rounded-2xl bg-[#090A0E] border border-white/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* 3D glare effect at the top */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-10" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-0">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isLast = index === metrics.length - 1;
          
          return (
            <div 
              key={index}
              className={`relative flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-b ${metric.gradient} ${!isLast ? 'sm:border-r border-b sm:border-b-0 border-white/[0.04]' : ''} group overflow-hidden`}
            >
              {/* Subtle radial glow on hover */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border bg-[#050608] ${metric.borderColor} shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]`}>
                    <Icon className={`w-4 h-4 ${metric.valColor}`} />
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 tracking-widest">{metric.number}</span>
                </div>
                
                <div>
                  <span className={`font-serif text-5xl sm:text-6xl tracking-tight block mb-2 ${metric.valColor} drop-shadow-md`}>
                    {metric.value}
                  </span>
                  <span className={`font-sans text-[10px] sm:text-xs font-semibold tracking-widest uppercase ${metric.textColor}`}>
                    {metric.label}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
