import React, { useState } from 'react';
import { 
  FileText, 
  Check, 
  Settings2, 
  Play, 
  AlertCircle
} from 'lucide-react';
import { useVerification } from '../context/useVerification';
import { Button } from '../components/ui/Button';
import { PageHeader } from '../components/ui/PageHeader';

export function NewVerificationView() {
  const { job, startPipeline, setActiveView } = useVerification();

  const [sourceDoc] = useState({
    fileName: "Newtonian Mechanics — Demonstration Chapter (EN).pdf",
    language: "English",
    documentStatus: "Indexed & Ready",
    extractionStatus: "Complete (18 Pages, 2,840 Tokens, 14 Formulas)",
    size: "4.2 MB"
  });

  const [targetDoc] = useState({
    fileName: "Newtonian Mechanics — Demonstration Chapter (MR).pdf",
    language: "Marathi",
    documentStatus: "Indexed & Ready",
    extractionStatus: "Complete (19 Pages, 2,910 Tokens, 14 Formulas)",
    size: "4.6 MB"
  });

  const [modules, setModules] = useState({
    semanticAlignment: true,
    numericalIntegrity: true,
    unitConsistency: true,
    formulaVerification: true,
    terminologyConsistency: true,
    missingContentDetection: true,
  });

  const toggleModule = (key) => {
    setModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const moduleItems = [
    { key: 'semanticAlignment', label: 'Semantic Alignment', desc: 'Cross-lingual paragraph and sentence anchoring via dense embeddings' },
    { key: 'numericalIntegrity', label: 'Numerical Integrity', desc: 'Extracts scalars and floats to detect decimal shifts and magnitude differences' },
    { key: 'unitConsistency', label: 'Unit Consistency', desc: 'Normalizes units into SI base representations ("Different ≠ Incorrect")' },
    { key: 'formulaVerification', label: 'Formula Verification', desc: 'Symbolic AST and dimensional tensor balance verification [M L T]' },
    { key: 'terminologyConsistency', label: 'Terminology Consistency', desc: 'Cross-references domain terminology against authoritative academic glossaries' },
    { key: 'missingContentDetection', label: 'Missing Content Detection', desc: 'Bilingual token coverage maps to detect omitted paragraphs or clauses' },
  ];

  return (
    <div className="w-full px-6 sm:px-8 lg:px-12 py-10 space-y-8 bg-ambient-warm">
      {/* Page Header */}
      <PageHeader
        category="VERIFICATION SETUP"
        badge={`JOB: ${job.id}`}
        title="New Textbook Verification"
        description="Configure bilingual document pair analysis and verification parameters. Select which deterministic and ML engines to run across the curriculum."
        actions={
          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveView('overview')}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="md"
              icon={Play}
              onClick={startPipeline}
            >
              Execute Verification
            </Button>
          </div>
        }
      />

      {/* Demonstration Notice */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-400">
        <AlertCircle className="w-4 h-4 text-[#FF7A18] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-semibold text-zinc-200">Demonstration Mode Active:</span>
          <p>
            The demo dataset ({job.datasetBadge}, {job.subject}) is pre-loaded and ready for verification.
          </p>
        </div>
      </div>

      {/* Document Ingestion Pair (Side by Side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Source Document Card */}
        <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-xs font-sans text-zinc-300 font-semibold">ORIGINAL TEXTBOOK</span>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded">
              {sourceDoc.language}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FileText className="w-8 h-8 text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h4 className="text-sm font-medium text-white">{sourceDoc.fileName}</h4>
                <p className="text-xs text-zinc-500 font-mono">{sourceDoc.size} • PDF Optical Ingest</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/40 space-y-1.5 text-xs font-mono border border-white/[0.04]">
              <div className="flex justify-between text-zinc-400">
                <span>Ingestion Status:</span>
                <span className="text-emerald-400">{sourceDoc.documentStatus}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Extracted:</span>
                <span className="text-zinc-300">{sourceDoc.extractionStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Target Document Card */}
        <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.015] space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-sans text-zinc-300 font-semibold">TRANSLATED TEXTBOOK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-zinc-500">TARGET LANGUAGE:</span>
              <select className="bg-[#0B0C0E] border border-white/[0.08] rounded text-xs font-mono text-parity-orange px-2 py-1 outline-none">
                <option value="Marathi">Marathi (mr-IN)</option>
                <option value="Hindi">Hindi (hi-IN)</option>
                <option value="Tamil">Tamil (ta-IN)</option>
                <option value="Bengali">Bengali (bn-IN)</option>
                <option value="Gujarati">Gujarati (gu-IN)</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FileText className="w-8 h-8 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h4 className="text-sm font-medium text-white">{targetDoc.fileName}</h4>
                <p className="text-xs text-zinc-500 font-mono">{targetDoc.size} • OCR Vectorized</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/40 space-y-1.5 text-xs font-mono border border-white/[0.04]">
              <div className="flex justify-between text-zinc-400">
                <span>Ingestion Status:</span>
                <span className="text-emerald-400">{targetDoc.documentStatus}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Extracted:</span>
                <span className="text-zinc-300">{targetDoc.extractionStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Modules Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-[#FF7A18]" />
            <h3 className="font-sans text-sm font-semibold text-white">Active Verification Engines</h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">6 of 6 Active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moduleItems.map((mod) => {
            const isChecked = modules[mod.key];
            return (
              <div
                key={mod.key}
                onClick={() => toggleModule(mod.key)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-150 flex items-start gap-3 ${
                  isChecked
                    ? 'border-white/[0.12] bg-white/[0.025]'
                    : 'border-white/[0.04] bg-white/[0.008] opacity-60'
                }`}
              >
                <div
                  className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border transition-all ${
                    isChecked
                      ? 'bg-[#FF7A18] border-[#FF7A18] text-black'
                      : 'border-zinc-600 bg-transparent'
                  }`}
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <div className="space-y-1 select-none">
                  <h4 className="text-xs font-medium text-white">{mod.label}</h4>
                  <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
