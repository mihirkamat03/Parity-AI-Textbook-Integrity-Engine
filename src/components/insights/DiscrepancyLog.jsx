import React from 'react';
import { ChevronRight } from 'lucide-react';

export function DiscrepancyLog() {
  const logData = [
    { id: 'PHY-4-02', type: 'Formula Structural Mismatch', location: 'Section 4.1, Eq 2', severity: 'HIGH', confidence: '99.8%', status: 'Flagged' },
    { id: 'PHY-4-15', type: 'Numerical Value Shift', location: 'Section 4.2, P 3', severity: 'MEDIUM', confidence: '94.2%', status: 'Pending' },
    { id: 'PHY-4-18', type: 'Omitted Content Clause', location: 'Section 4.3, P 1', severity: 'HIGH', confidence: '91.5%', status: 'Pending' },
    { id: 'PHY-4-22', type: 'Unit Normalization Equivalence', location: 'Section 4.3, P 5', severity: 'NONE', confidence: '98.1%', status: 'Dismissed' },
    { id: 'PHY-4-27', type: 'Terminology Inconsistency', location: 'Section 4.4, P 2', severity: 'LOW', confidence: '82.4%', status: 'Pending' },
    { id: 'PHY-4-31', type: 'Formula Scalar Shift', location: 'Section 4.5, Eq 1', severity: 'HIGH', confidence: '97.3%', status: 'Pending' },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="text-[10px] uppercase font-mono tracking-widest text-parity-muted border-y border-parity-border bg-parity-surface">
          <tr>
            <th className="py-4 px-6 font-medium">ID</th>
            <th className="py-4 px-6 font-medium">Type</th>
            <th className="py-4 px-6 font-medium">Location</th>
            <th className="py-4 px-6 font-medium">Severity</th>
            <th className="py-4 px-6 font-medium text-right">Confidence</th>
            <th className="py-4 px-6 font-medium">Status</th>
            <th className="py-4 px-6 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody className="bg-parity-bg">
          {logData.map((item, index) => {
            const isHigh = item.severity === 'HIGH';
            
            return (
              <tr 
                key={index} 
                className="border-b border-parity-border hover:bg-white/[0.02] transition-colors group"
              >
                <td className="py-4 px-6">
                  <span className={`font-mono text-xs font-medium ${isHigh ? 'text-parity-red' : 'text-zinc-300'}`}>
                    {item.id}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`font-sans text-sm ${isHigh ? 'text-white' : 'text-zinc-300'}`}>
                    {item.type}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-mono text-xs text-zinc-500">
                    {item.location}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {isHigh && <span className="w-1.5 h-1.5 rounded-full bg-parity-red shadow-[0_0_8px_rgba(230,59,50,0.6)]"></span>}
                    <span className={`font-mono text-[11px] uppercase tracking-wide ${isHigh ? 'text-parity-red' : 'text-zinc-400'}`}>
                      {item.severity}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <span className="font-mono text-xs text-zinc-400">
                    {item.confidence}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                    item.status === 'Flagged' 
                      ? 'border-parity-red/30 text-parity-red bg-parity-red/10'
                      : item.status === 'Dismissed'
                      ? 'border-parity-green/30 text-parity-green bg-parity-green/10'
                      : 'border-white/10 text-zinc-400 bg-white/[0.02]'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-zinc-500 hover:text-parity-orange transition-colors inline-flex items-center gap-1 font-sans text-xs uppercase font-medium tracking-wider cursor-pointer">
                    Inspect <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
