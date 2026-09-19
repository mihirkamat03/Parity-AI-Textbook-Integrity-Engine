import { 
  Printer, 
  Download, 
  CheckCircle2, 
  UserCheck,
  FileCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useVerification } from '../context/useVerification';
import { Button } from '../components/ui/Button';
import { SeverityBadge } from '../components/ui/Badge';
import { BrandMark } from '../components/ui/BrandMark';

export function QAReportView() {
  const { job, issues, metrics, sections } = useVerification();
  const [signedOff, setSignedOff] = useState(false);
  const [signOffDate, setSignOffDate] = useState(null);

  const handleSignOff = () => {
    setSignedOff(true);
    setSignOffDate(new Date().toLocaleString());
    confetti({
      particleCount: 65,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#FF7A18', '#F5B942', '#FF4D3D', '#10B981']
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportJSON = () => {
    const reportData = {
      reportTitle: "PARITY Textbook Integrity Verification Report",
      verificationId: job.id,
      timestamp: new Date().toISOString(),
      metadata: {
        sourceLanguage: job.sourceLanguage,
        targetLanguage: job.targetLanguage,
        subject: job.subject,
        document: job.chapter,
        datasetBadge: job.datasetBadge,
        leadReviewer: job.leadReviewer,
      },
      summary: {
        issuesDetected: issues.length,
        highRisk: issues.filter(i => i.severity === 'HIGH').length,
        mediumRisk: issues.filter(i => i.severity === 'MEDIUM').length,
        validEquivalences: issues.filter(i => i.severity === 'NONE' || i.isEquivalent).length,
        acceptedFindings: metrics.confirmed,
        falsePositives: metrics.dismissed,
        flaggedReview: metrics.flagged,
      },
      integrityScore: {
        score: `${metrics.integrityScore}%`,
        label: "Prototype metric based on detected discrepancies and reviewer resolutions. Not a validated measure of textbook accuracy.",
      },
      disclaimer: "PARITY provides AI-assisted verification and does not replace qualified academic, editorial, or subject-matter review.",
      sectionsAnalyzed: sections.map(s => ({ id: s.id, number: s.number, title: s.title })),
      auditTrail: issues.map(i => ({
        id: i.id,
        title: i.title,
        category: i.category,
        severity: i.severity,
        originalSnippet: i.originalSnippet,
        translatedSnippet: i.translatedSnippet,
        isEquivalent: i.isEquivalent,
        verificationMethod: i.verificationMethod,
        methodType: i.methodType,
        reviewerDecision: i.reviewerDecision,
        reviewerNotes: i.reviewerNotes,
        resolvedAt: i.resolvedAt,
      })),
      reviewerSignOff: signedOff ? { status: "SIGNED_OFF", signedBy: job.leadReviewer, timestamp: signOffDate } : "PENDING"
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `PARITY_REPORT_${job.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const highRiskCount = issues.filter(i => i.severity === 'HIGH').length;
  const mediumRiskCount = issues.filter(i => i.severity === 'MEDIUM').length;
  const validEquivCount = issues.filter(i => i.severity === 'NONE' || i.isEquivalent).length;

  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-10 space-y-8 print:p-0 print:max-w-none bg-ambient-warm">
      {/* Top Action Bar (Hidden in Print) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/[0.06] pb-5 print:hidden">
        <div>
          <span className="text-xs font-sans text-[#FF7A18] font-medium flex items-center gap-1.5">
            <FileCheck2 className="w-3.5 h-3.5" />
            Verification Report / Audit Record
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-white mt-1 tracking-tight">
            Textbook Verification Report
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            icon={Printer}
            onClick={handlePrint}
          >
            Print / PDF
          </Button>

          <Button
            variant="secondary"
            size="sm"
            icon={Download}
            onClick={handleExportJSON}
          >
            Export JSON
          </Button>

          {!signedOff ? (
            <Button
              variant="primary"
              size="sm"
              icon={UserCheck}
              onClick={handleSignOff}
            >
              Sign Off Audit Record
            </Button>
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Signed by {job.leadReviewer}</span>
            </div>
          )}
        </div>
      </div>

      {/* Printable Research Report Sheet */}
      <div className="rounded-xl border border-white/[0.08] bg-[#0A0B0E] p-8 sm:p-10 space-y-8 print:border-none print:p-0 print:bg-white print:text-black">
        {/* Report Document Header */}
        <div className="border-b border-white/[0.06] pb-6 space-y-4 print:border-black">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandMark size="md" />
              <div>
                <span className="font-serif text-xl tracking-wider font-bold text-white print:text-black">
                  PARITY
                </span>
                <span className="block text-[11px] font-sans text-zinc-400 print:text-zinc-600">
                  Post-Translation Textbook Integrity Engine
                </span>
              </div>
            </div>

            <div className="text-right font-mono text-xs">
              <span className="text-zinc-500 block print:text-zinc-600">DOCUMENT ID</span>
              <span className="font-bold text-white print:text-black">{job.id}</span>
            </div>
          </div>

          <div className="pt-2">
            <h2 className="font-display text-2xl sm:text-3xl text-white print:text-black tracking-tight">
              Verification Report: {job.subject}
            </h2>
            <p className="text-xs font-sans text-zinc-400 print:text-zinc-700 mt-1">
              Chapter: {job.chapter} • Demonstration Dataset ({job.datasetBadge})
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs print:bg-zinc-100 print:border-zinc-300">
            <div>
              <span className="text-zinc-500 block font-mono text-[10px]">SOURCE LANGUAGE</span>
              <span className="font-medium text-white print:text-black">{job.sourceLanguage}</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-[10px]">TARGET LANGUAGE</span>
              <span className="font-medium text-[#FF7A18] print:text-black">{job.targetLanguage}</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-[10px]">LEAD REVIEWER</span>
              <span className="font-medium text-white print:text-black">{job.leadReviewer}</span>
            </div>
            <div>
              <span className="text-zinc-500 block font-mono text-[10px]">DATE GENERATED</span>
              <span className="font-medium text-zinc-300 print:text-black font-mono text-[11px]">
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Prototype Integrity Metric Strip */}
        <div className="p-5 rounded-lg border border-white/[0.06] bg-white/[0.015] space-y-3 print:bg-zinc-50 print:border-zinc-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-sans font-semibold text-white print:text-black">
              Prototype Integrity Metric
            </span>
            <span className="font-display text-3xl font-bold text-[#FF7A18] print:text-black">
              {metrics.integrityScore}%
            </span>
          </div>
          <p className="text-xs font-sans text-zinc-400 print:text-zinc-600 leading-relaxed">
            Prototype metric based on detected discrepancies and reviewer resolutions. Not a validated measure of textbook accuracy.
          </p>
        </div>

        {/* Findings Summary Stats */}
        <div className="space-y-3">
          <h3 className="text-xs font-sans font-semibold text-white print:text-black">
            Verification Summary
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-1 print:bg-zinc-50 print:border-zinc-300">
              <span className="text-zinc-500 text-[10px]">TOTAL DISCREPANCIES</span>
              <div className="text-xl font-bold text-white print:text-black">{issues.length}</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#FF4D3D]/10 border border-[#FF4D3D]/25 space-y-1 print:bg-zinc-50 print:border-zinc-300">
              <span className="text-[#FF6353] text-[10px]">HIGH RISK</span>
              <div className="text-xl font-bold text-[#FF6353] print:text-black">{highRiskCount}</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F5B942]/10 border border-[#F5B942]/25 space-y-1 print:bg-zinc-50 print:border-zinc-300">
              <span className="text-[#F5B942] text-[10px]">MEDIUM RISK</span>
              <div className="text-xl font-bold text-[#F5B942] print:text-black">{mediumRiskCount}</div>
            </div>
            <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/25 space-y-1 print:bg-zinc-50 print:border-zinc-300">
              <span className="text-emerald-400 text-[10px]">VALID EQUIVALENCES</span>
              <div className="text-xl font-bold text-emerald-400 print:text-black">{validEquivCount}</div>
            </div>
          </div>
        </div>

        {/* Discrepancy Findings Detail Table */}
        <div className="space-y-3">
          <h3 className="text-xs font-sans font-semibold text-white print:text-black">
            Detailed Discrepancy Audit Log
          </h3>
          <div className="rounded-lg border border-white/[0.06] overflow-hidden print:border-zinc-300">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/[0.06] bg-black/40 text-[10px] font-mono text-zinc-400 print:bg-zinc-100 print:text-zinc-700">
                  <th className="py-2.5 px-3">ID</th>
                  <th className="py-2.5 px-3">DESCRIPTION</th>
                  <th className="py-2.5 px-3">SEVERITY</th>
                  <th className="py-2.5 px-3">SOURCE EVIDENCE</th>
                  <th className="py-2.5 px-3">TARGET EVIDENCE</th>
                  <th className="py-2.5 px-3">REVIEWER ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] print:divide-zinc-200 font-sans">
                {issues.map(issue => (
                  <tr key={issue.id} className="print:text-black">
                    <td className="py-2.5 px-3 font-mono font-medium text-[#FF7A18] print:text-black">
                      {issue.id}
                    </td>
                    <td className="py-2.5 px-3 font-medium text-white print:text-black">
                      {issue.title}
                    </td>
                    <td className="py-2.5 px-3">
                      <SeverityBadge severity={issue.severity} />
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-zinc-300 print:text-black max-w-[150px] truncate">
                      {issue.originalSnippet}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-zinc-300 print:text-black max-w-[150px] truncate">
                      {issue.translatedSnippet}
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 print:bg-zinc-200 print:text-black">
                        {issue.reviewerDecision === 'CONFIRMED' ? 'ACCEPTED' : issue.reviewerDecision}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reviewer Validation Record Sign-Off Section */}
        <div className="pt-6 border-t border-white/[0.06] print:border-black flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-sans font-semibold text-white print:text-black block">
              Reviewer Validation Record
            </span>
            <p className="text-[11px] font-sans text-zinc-400 print:text-zinc-600">
              Audit log recorded for demonstration and human-in-the-loop review trace.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-white/[0.08] bg-black/40 text-xs font-mono space-y-1 min-w-[240px] print:border-zinc-300 print:bg-zinc-50">
            <div className="flex justify-between">
              <span className="text-zinc-500">STATUS:</span>
              <span className={signedOff ? "text-emerald-400 font-bold" : "text-[#F5B942]"}>
                {signedOff ? "VALIDATED & LOGGED" : "PENDING REVIEW"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">REVIEWER:</span>
              <span className="text-white print:text-black">{job.leadReviewer}</span>
            </div>
            {signOffDate && (
              <div className="flex justify-between">
                <span className="text-zinc-500">TIMESTAMP:</span>
                <span className="text-zinc-400 print:text-black">{signOffDate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Mandatory Research Disclaimer */}
        <div className="p-3.5 rounded-lg border border-white/[0.04] bg-white/[0.01] text-[11px] text-zinc-500 print:text-zinc-600 font-sans leading-relaxed">
          <strong>Notice:</strong> PARITY provides AI-assisted verification and does not replace qualified academic, editorial, or subject-matter review. This demonstration dataset is provided for testing and evaluation purposes.
        </div>
      </div>
    </div>
  );
}
