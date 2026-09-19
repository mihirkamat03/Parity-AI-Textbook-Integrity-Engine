import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#101113] border border-white/[0.08] p-3 shadow-xl">
        <p className="font-sans text-xs text-zinc-400 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-4 font-mono text-xs">
            <span style={{ color: entry.color }}>{entry.name}</span>
            <span className="text-white font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function Analytics() {
  const discrepancyTrend = [
    { chapter: 'Ch 1', structural: 4, terminology: 12 },
    { chapter: 'Ch 2', structural: 2, terminology: 18 },
    { chapter: 'Ch 3', structural: 7, terminology: 9 },
    { chapter: 'Ch 4', structural: 14, terminology: 24 },
    { chapter: 'Ch 5', structural: 3, terminology: 15 },
    { chapter: 'Ch 6', structural: 1, terminology: 8 },
  ];

  const resolutionMetrics = [
    { action: 'Accepted', count: 124 },
    { action: 'Dismissed', count: 342 },
    { action: 'Escalated', count: 45 },
    { action: 'Pending', count: 12 },
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-px bg-parity-border border-y border-parity-border">
      {/* Chart 1: Trend over chapters */}
      <div className="bg-parity-surface p-6 sm:p-8 flex flex-col">
        <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6">Discrepancy Frequency by Type</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={discrepancyTrend} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="chapter" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 10, fontFamily: 'monospace' }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 10, fontFamily: 'monospace' }} 
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Line 
                type="monotone" 
                dataKey="structural" 
                name="Structural / Formula"
                stroke="#FF7A18" 
                strokeWidth={2} 
                dot={{ fill: '#070809', stroke: '#FF7A18', strokeWidth: 2, r: 4 }} 
                activeDot={{ r: 6, fill: '#FF7A18', stroke: '#070809' }}
              />
              <Line 
                type="monotone" 
                dataKey="terminology" 
                name="Terminology"
                stroke="#F5B942" 
                strokeWidth={2}
                dot={{ fill: '#070809', stroke: '#F5B942', strokeWidth: 2, r: 4 }} 
                activeDot={{ r: 6, fill: '#F5B942', stroke: '#070809' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Resolution Actions */}
      <div className="bg-parity-surface p-6 sm:p-8 flex flex-col">
        <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6">Reviewer Actions Distribution</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resolutionMetrics} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="action" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 10, fontFamily: 'monospace' }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 10, fontFamily: 'monospace' }} 
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
              <Bar 
                dataKey="count" 
                name="Volume"
                fill="#FF7A18"
                radius={[2, 2, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
