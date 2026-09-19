/**
 * PARITY API Service Abstraction Layer
 * 
 * Provides mock API contracts matching future FastAPI / PostgreSQL endpoints:
 * - GET    /api/verifications/:id
 * - GET    /api/verifications/:id/issues
 * - PATCH  /api/issues/:id
 * - GET    /api/verifications/:id/pipeline-status
 * - GET    /api/verifications/:id/analytics
 * - GET    /api/verifications/:id/report
 */

import { 
  MOCK_VERIFICATION_JOB, 
  MOCK_ISSUES, 
  MOCK_SECTIONS, 
  PIPELINE_STAGES, 
  TECHNICAL_GLOSSARY 
} from '../data/mockData';

export async function getVerification(id = 'PARITY-VER-2026-PHYS-01') {
  return Promise.resolve({ ...MOCK_VERIFICATION_JOB, id });
}

export async function getIssues(_verificationId = 'PARITY-VER-2026-PHYS-01') {
  return Promise.resolve([...MOCK_ISSUES]);
}

export async function getPipelineStatus(_verificationId = 'PARITY-VER-2026-PHYS-01') {
  return Promise.resolve({
    jobId: _verificationId,
    status: 'COMPLETED',
    stages: PIPELINE_STAGES,
  });
}

export async function updateIssueDecision(issueId, decision, notes = '') {
  return Promise.resolve({
    id: issueId,
    decision,
    notes,
    resolvedAt: new Date().toISOString(),
    status: 'SUCCESS'
  });
}

export async function getAnalytics(verificationId = 'PARITY-VER-2026-PHYS-01') {
  const issues = MOCK_ISSUES;
  const total = issues.length;
  const highRisk = issues.filter(i => i.severity === 'HIGH').length;
  const mediumRisk = issues.filter(i => i.severity === 'MEDIUM').length;
  const validEquiv = issues.filter(i => i.severity === 'EQUIVALENT' || i.isEquivalent).length;

  return Promise.resolve({
    verificationId,
    totalIssues: total,
    highRiskCount: highRisk,
    mediumRiskCount: mediumRisk,
    validEquivalences: validEquiv,
    prototypeIntegrityScore: 84.2,
    glossary: TECHNICAL_GLOSSARY,
  });
}

export async function getQAReport(verificationId = 'PARITY-VER-2026-PHYS-01') {
  return Promise.resolve({
    reportId: `REP-${verificationId}`,
    generatedAt: new Date().toISOString(),
    job: MOCK_VERIFICATION_JOB,
    issues: MOCK_ISSUES,
    sections: MOCK_SECTIONS,
    prototypeScore: 84.2,
    disclaimer: "PARITY provides AI-assisted verification and does not replace qualified academic, editorial, or subject-matter review."
  });
}

export async function getDocumentPair(verificationId = 'PARITY-VER-2026-PHYS-01') {
  return Promise.resolve({
    verificationId,
    sourceDocument: {
      name: "Newtonian Mechanics — Demonstration Chapter (EN).pdf",
      language: "English",
      status: "Extracted",
      pages: 18,
      tokenCount: 2840,
    },
    targetDocument: {
      name: "Newtonian Mechanics — Demonstration Chapter (MR).pdf",
      language: "Marathi",
      status: "Extracted",
      pages: 19,
      tokenCount: 2910,
    },
    subject: "Newtonian Mechanics",
  });
}
