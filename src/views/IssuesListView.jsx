import React, { useState } from 'react';
import { 
  Search, 
  ExternalLink, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  Filter
} from 'lucide-react';
import { useVerification } from '../context/useVerification';
import { SeverityBadge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHeader } from '../components/ui/PageHeader';

export function IssuesListView() {
  const { 
    issues, 
    setSelectedIssueId, 
    setSelectedSectionId, 
    setActiveView,
    confirmIssue,
    dismissIssue
  } = useVerification();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [filterSeverity, setFilterSeverity] = useState('ALL');

  const filtered = issues.filter(issue => {
    if (filterCategory !== 'ALL' && issue.category !== filterCategory) return false;
    if (filterSeverity !== 'ALL' && issue.severity !== filterSeverity) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return (
        issue.id.toLowerCase().includes(q) ||
        issue.title.toLowerCase().includes(q) ||
        issue.originalSnippet.toLowerCase().includes(q) ||
        issue.translatedSnippet.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleInspectInReader = (issue) => {
    setSelectedIssueId(issue.id);
    if (issue.sectionId) {
      setSelectedSectionId(issue.sectionId);
    }
    setActiveView('review');
  };

  return (
    <div className="w-full px-6 sm:px-8 lg:px-12 py-10 space-y-6 bg-ambient-warm">
      <PageHeader
        category="DISCREPANCY LOG"
        badge="AUDIT QUEUE"
        title="Detected Discrepancies"
        description="Comprehensive audit register of flagged discrepancies across mathematical formulas, numerical values, terminology, units, and missing content."
        actions={
          <Button
            variant="primary"
            icon={ArrowRight}
            onClick={() => setActiveView('review')}
          >
            Reviewer Workspace
          </Button>
        }
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by ID, formula, or phrase..."
            className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-sans text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/[0.2]"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <Filter className="w-3.5 h-3.5 text-zinc-500" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="rounded-lg bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 text-zinc-200 text-xs font-sans focus:outline-none"
          >
            <option value="ALL" className="bg-[#0E1014]">All Categories</option>
            <option value="Formula" className="bg-[#0E1014]">Formula</option>
            <option value="Numerical" className="bg-[#0E1014]">Numerical</option>
            <option value="Terminology" className="bg-[#0E1014]">Terminology</option>
            <option value="Missing Content" className="bg-[#0E1014]">Missing Content</option>
            <option value="Unit / Numerical" className="bg-[#0E1014]">Unit / Numerical</option>
            <option value="Equivalent" className="bg-[#0E1014]">Equivalent</option>
          </select>

          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            className="rounded-lg bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 text-zinc-200 text-xs font-sans focus:outline-none"
          >
            <option value="ALL" className="bg-[#0E1014]">All Severities</option>
            <option value="HIGH" className="bg-[#0E1014]">High Risk</option>
            <option value="MEDIUM" className="bg-[#0E1014]">Medium Risk</option>
            <option value="NONE" className="bg-[#0E1014]">None / Valid</option>
          </select>
        </div>
      </div>

      {/* Discrepancy Table */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0A0B0E] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.06] bg-black/40 text-[11px] font-sans text-zinc-400 font-medium">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">DISCREPANCY</th>
              <th className="py-3 px-4">CATEGORY</th>
              <th className="py-3 px-4">SEVERITY</th>
              <th className="py-3 px-4">SOURCE / TARGET EVIDENCE</th>
              <th className="py-3 px-4">VALIDATION</th>
              <th className="py-3 px-4 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04] text-xs font-sans">
            {filtered.map((issue) => (
              <tr 
                key={issue.id}
                className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                onClick={() => handleInspectInReader(issue)}
              >
                <td className="py-3.5 px-4 font-mono font-medium text-[#FF7A18]">
                  {issue.id}
                </td>

                <td className="py-3.5 px-4">
                  <div className="font-medium text-white group-hover:text-[#FF7A18] transition-colors max-w-xs">
                    {issue.title}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">{issue.sectionTitle}</div>
                </td>

                <td className="py-3.5 px-4 text-zinc-300">
                  {issue.category}
                </td>

                <td className="py-3.5 px-4">
                  <SeverityBadge severity={issue.severity} />
                </td>

                <td className="py-3.5 px-4 max-w-sm">
                  <div className="space-y-1 font-mono text-[11px]">
                    <div className="text-zinc-300 truncate">
                      <span className="text-zinc-500 mr-1.5">EN:</span>
                      {issue.originalSnippet}
                    </div>
                    <div className={issue.severity === 'HIGH' ? 'text-[#FF6353] truncate' : 'text-zinc-300 truncate'}>
                      <span className="text-zinc-500 mr-1.5">MR:</span>
                      {issue.translatedSnippet}
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-4">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                      issue.reviewerDecision === 'CONFIRMED'
                        ? 'text-[#FF6353] bg-[#FF4D3D]/10'
                        : issue.reviewerDecision === 'DISMISSED'
                        ? 'text-emerald-400 bg-emerald-950/30'
                        : issue.reviewerDecision === 'FLAGGED'
                        ? 'text-purple-400 bg-purple-950/30'
                        : 'text-[#F5B942] bg-[#F5B942]/10'
                    }`}
                  >
                    {issue.reviewerDecision === 'CONFIRMED' ? 'ACCEPTED' : issue.reviewerDecision}
                  </span>
                </td>

                <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => confirmIssue(issue.id, "Accepted directly from Discrepancy Log")}
                      title="Accept Discrepancy"
                      className="p-1 rounded hover:bg-[#FF4D3D]/20 text-zinc-400 hover:text-[#FF6353] transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => dismissIssue(issue.id, "Dismissed directly from Discrepancy Log")}
                      title="Dismiss Discrepancy"
                      className="p-1 rounded hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleInspectInReader(issue)}
                      title="Inspect in Reader"
                      className="p-1 rounded hover:bg-white/[0.06] text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
