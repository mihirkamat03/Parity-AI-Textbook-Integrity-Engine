import React from 'react';
import { Sparkles, Binary, Variable, BookOpen, Scale, FileQuestion } from 'lucide-react';

export function Capabilities() {
  const capabilities = [
    {
      title: "Semantic Integrity",
      question: "Does the translated passage preserve the intended meaning?",
      icon: Sparkles,
      desc: "Deep multilingual embeddings detect subtle semantic divergence and conceptual shifts across languages.",
      badge: "Multilingual Vectors",
      span: "md:col-span-4"
    },
    {
      title: "Numerical Integrity",
      question: "Are numerical values preserved correctly?",
      icon: Binary,
      desc: "Scalar extraction pinpoints decimal shifts, factor-of-10 errors, and coefficient changes.",
      badge: "Scalar Extraction",
      span: "md:col-span-2"
    },
    {
      title: "Formula Integrity",
      question: "Are mathematical expressions technically equivalent?",
      icon: Variable,
      desc: "Symbolic AST parser and dimensional tensor analysis verify LHS/RHS physical law balance.",
      badge: "Symbolic AST",
      span: "md:col-span-2"
    },
    {
      title: "Unit Integrity",
      question: "Are measurements equivalent after normalization?",
      icon: Scale,
      desc: "SI unit normalization engine resolves 'Different ≠ Incorrect' to eliminate false alarms.",
      badge: "SI Normalization",
      span: "md:col-span-2"
    },
    {
      title: "Terminology Integrity",
      question: "Are domain-specific concepts translated consistently?",
      icon: BookOpen,
      desc: "Authoritative academic glossaries catch colloquial replacements (e.g. speed vs acceleration).",
      badge: "Domain Glossary",
      span: "md:col-span-2"
    },
    {
      title: "Content Integrity",
      question: "Was anything meaningful omitted or altered?",
      icon: FileQuestion,
      desc: "Coverage mapping identifies missing instructional clauses, caveats, or untranslated paragraphs.",
      badge: "Coverage Matrix",
      span: "md:col-span-6"
    }
  ];

  return (
    <section className="w-full py-12">
      <div className="space-y-4 mb-8 pl-4 border-l-2 border-parity-orange">
        <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight">
          Verification is not translation.
        </h2>
        <p className="text-sm text-zinc-400 max-w-2xl font-sans leading-relaxed">
          Generic translation platforms evaluate linguistic fluency. PARITY evaluates whether technical laws, 
          dimensional physics, and instructional integrity survived the translation.
        </p>
      </div>

      {/* Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <div
              key={i}
              className={`col-span-1 ${cap.span} relative rounded-2xl bg-[#090A0E] border border-white/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.5)] p-6 sm:p-8 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:shadow-[0_20px_56px_rgba(0,0,0,0.7)] hover:border-white/[0.1] hover:-translate-y-1`}
            >
              {/* 3D glare effect at the top */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-10" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.08] bg-[#050608] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] group-hover:border-parity-orange/50 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-zinc-500 group-hover:text-parity-orange transition-colors duration-300" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-[#050608] border border-white/[0.04] px-2 py-1 rounded shadow-inner">
                    {cap.badge}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-sans text-base font-semibold text-white group-hover:text-parity-orange transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium font-sans leading-relaxed">
                    {cap.question}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-5 border-t border-white/[0.04] relative z-10">
                <p className="text-[11px] text-zinc-500 font-sans leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {cap.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
