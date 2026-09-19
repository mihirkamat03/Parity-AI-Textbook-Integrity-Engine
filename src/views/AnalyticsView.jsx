import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  CartesianGrid
} from 'recharts';
import { 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useVerification } from '../context/useVerification';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';

export function AnalyticsView() {
  const { issues, metrics, glossary, setActiveView } = useVerification();

  // 1. Issues by Type
  const issuesByType = [
    { name: 'Formula', count: issues.filter(i => i.category === 'Formula').length },
    { name: 'Numerical', count: issues.filter(i => i.category === 'Numerical').length },
    { name: 'Terminology', count: issues.filter(i => i.category === 'Terminology').length },
    { name: 'Missing Content', count: issues.filter(i => i.category === 'Missing Content').length },
    { name: 'Unit', count: issues.filter(i => i.category.includes('Unit')).length },
    { name: 'Equivalent', count: issues.filter(i => i.category === 'Equivalent').length },
  ];

  // 2. Reviewer Decisions
  const reviewerDecisions = [
    { status: 'Pending Review', count: metrics.pending, fill: '#F5B942' },
    { status: 'Accepted Findings', count: metrics.confirmed, fill: '#FF4D3D' },
    { status: 'False Positives', count: metrics.dismissed, fill: '#10B981' },
    { status: 'Flagged Review', count: metrics.flagged, fill: '#A855F7' },
  ];

  // Circular radial score gauge calculation
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (metrics.integrityScore / 100) * circumference;

  return (
    <div className="w-full px-6 sm:px-8 lg:px-12 py-8 space-y-8 bg-ambient-warm">
      {/* Page Header */}
      <PageHeader
        category="AUDIT TELEMETRY"
        badge="AGGREGATED INSTRUMENT"
        title="Verification & Reviewer Analytics"
        description="Quantitative metrics across formula parser ASTs, numerical consistency, domain terminology, and reviewer resolution funnels."
        actions={
          <Button
            variant="primary"
            icon={ArrowRight}
            onClick={() => setActiveView('report')}
          >
            Generate Verification Report
          </Button>
        }
      />

      {/* Top Metric Cards + Circular Radial Integrity Score Display */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Circular Radial Visualization (5 cols) */}
        <div className="md:col-span-5 rounded-xl border border-white/[0.06] bg-white/[0.015] p-6 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-xs font-sans text-zinc-300 font-semibold">Integrity Metric</span>
            <span className="text-[11px] font-mono text-zinc-400">PROTOTYPE CALCULATION</span>
          </div>

          <div className="flex items-center justify-center py-2">
            <div className="relative flex items-center justify-center">
              <svg className="w-44 h-44 -rotate-90 transform">
                <circle
                  cx="88"
                  cy="88"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-zinc-800/80"
                />
                <circle
                  cx="88"
                  cy="88"
                  r={radius}
                  stroke="url(#integrityGradient)"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="integrityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A18" />
                    <stop offset="100%" stopColor="#F5B942" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="font-display text-4xl text-white tracking-tight">
                  {metrics.integrityScore}%
                </span>
                <span className="text-[11px] font-sans text-zinc-400 mt-0.5">Resolved Index</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-[11px] text-zinc-400 font-sans leading-relaxed">
            <strong className="text-zinc-200">Prototype Metric Notice:</strong> Based on detected discrepancies and reviewer resolutions. Not a validated measure of textbook accuracy.
          </div>
        </div>

        {/* 4 Summary Telemetry Blocks (7 cols) */}
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-1">
            <div className="text-xs font-sans text-zinc-400">Total Flagged Discrepancies</div>
            <div className="font-display text-3xl text-white tracking-tight">0{issues.length}</div>
            <div className="text-[11px] text-zinc-500 font-sans">Across 18 demonstration pages</div>
          </div>

          <div className="p-5 rounded-xl border border-[#FF4D3D]/25 bg-[#FF4D3D]/[0.04] space-y-1">
            <div className="text-xs font-sans text-[#FF6353]">High-Risk Findings</div>
            <div className="font-display text-3xl text-[#FF6353] tracking-tight">
              0{issues.filter(i => i.severity === 'HIGH').length}
            </div>
            <div className="text-[11px] text-[#FF6353]/80 font-sans">Formula AST & scalar drops</div>
          </div>

          <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/[0.06] space-y-1">
            <div className="text-xs font-sans text-emerald-400">Verified Equivalences</div>
            <div className="font-display text-3xl text-emerald-400 tracking-tight">
              0{issues.filter(i => i.severity === 'NONE' || i.isEquivalent).length}
            </div>
            <div className="text-[11px] text-emerald-400/80 font-sans">Different ≠ Incorrect (SI Base)</div>
          </div>

          <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-1">
            <div className="text-xs font-sans text-zinc-400">Reviewer Validation Progress</div>
            <div className="font-display text-3xl text-white tracking-tight">
              {metrics.resolvedCount}/{metrics.total}
            </div>
            <div className="text-[11px] text-zinc-500 font-sans">Actions logged in audit trail</div>
          </div>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart 1: Issues by Category */}
        <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-3">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-xs font-sans font-semibold text-white">Discrepancies by Category</span>
            <span className="text-[10px] font-mono text-zinc-500">CATEGORY CLASSIFIER</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={issuesByType} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A1D24" vertical={false} />
                <XAxis dataKey="name" stroke="#71717A" fontSize={11} interval={0} angle={-20} textAnchor="end" />
                <YAxis stroke="#71717A" fontSize={11} allowDecimals={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B0C0E', borderColor: '#22262E', borderRadius: '8px', fontSize: '11px' }}
                />
                <Bar dataKey="count" fill="#FF7A18" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Reviewer Decision Breakdown */}
        <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-3">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-xs font-sans font-semibold text-white">Reviewer Action Distribution</span>
            <span className="text-[10px] font-mono text-zinc-500">DECISION RECORD</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reviewerDecisions} layout="vertical" margin={{ top: 10, right: 20, left: 30, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1A1D24" horizontal={false} />
                <XAxis type="number" stroke="#71717A" fontSize={11} allowDecimals={false} />
                <YAxis dataKey="status" type="category" stroke="#71717A" fontSize={11} width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B0C0E', borderColor: '#22262E', borderRadius: '8px', fontSize: '11px' }}
                />
                <Bar dataKey="count" fill="#F5B942" radius={[0, 4, 4, 0]}>
                  {reviewerDecisions.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Domain Glossaries Sample */}
      <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#FF7A18]" />
            <span className="text-xs font-sans font-semibold text-white">Domain Glossary Verification Sample</span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">PHYSICS CURRICULUM TERMS (EN ➔ MR)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
          {glossary.slice(0, 6).map((term, i) => (
            <div key={i} className="p-3 rounded-lg border border-white/[0.04] bg-black/40 space-y-1">
              <div className="text-zinc-400 text-[11px] font-sans">{term.source}</div>
              <div className="text-[#FF7A18] font-bold">{term.target}</div>
              <div className="text-[10px] text-zinc-500 font-sans">{term.domain}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
