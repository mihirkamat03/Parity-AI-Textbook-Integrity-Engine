import React, { useState, useMemo } from 'react';
import { VerificationContext } from './VerificationContextInstance';
import { MOCK_VERIFICATION_JOB, MOCK_SECTIONS, MOCK_ISSUES, PIPELINE_STAGES, TECHNICAL_GLOSSARY } from '../data/mockData';

export function VerificationProvider({ children }) {
  // Navigation: 'overview' | 'new' | 'analysis' | 'review' | 'analytics' | 'report'
  const [activeView, setActiveView] = useState('overview');

  // Pipeline Execution State
  const [pipelineStatus, setPipelineStatus] = useState('completed'); // 'idle' | 'running' | 'completed'
  const [currentStageIndex, setCurrentStageIndex] = useState(10);
  const [pipelineLogs, setPipelineLogs] = useState([
    "[10:14:00.120] INITIALIZED: Job PARITY-VER-2026-PHYS-01",
    "[10:14:00.410] ML_STAGE: Dense cross-lingual vector embeddings computed (1536-dim)",
    "[10:14:00.790] ML_STAGE: Dynamic section alignment converged at 0.964 confidence",
    "[10:14:01.200] SYMBOLIC_STAGE: Numerical consistency pass completed (29 values checked, 1 anomaly detected)",
    "[10:14:01.560] SYMBOLIC_STAGE: Unit normalization engine completed (Different ≠ Incorrect pass: 1 match)",
    "[10:14:02.050] SYMBOLIC_STAGE: AST formula parser detected dimensional mismatch: [M L T⁻²] vs [M L T⁻¹]",
    "[10:14:02.400] SYMBOLIC_STAGE: Glossary verification flagged non-standard term 'चाल' instead of 'त्वरण'",
    "[10:14:02.980] LLM_REASONING: Synthesized 6 natural language contextual explanations from deterministic evidence",
    "[10:14:03.280] DECISION_LAYER: Risk classification complete. Ready for human review."
  ]);

  // Document & Issue State
  const [sections] = useState(MOCK_SECTIONS);
  const [issues, setIssues] = useState(MOCK_ISSUES);
  const [selectedIssueId, setSelectedIssueId] = useState('ISSUE-001');
  const [selectedSectionId, setSelectedSectionId] = useState('sec-02');

  // Reviewer Filters
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [severityFilter, setSeverityFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Reviewer Actions
  const confirmIssue = (id, notes = "") => {
    setIssues(prev => prev.map(issue => {
      if (issue.id === id) {
        return {
          ...issue,
          reviewerDecision: 'CONFIRMED',
          reviewerNotes: notes || issue.reviewerNotes || 'Confirmed as a genuine scientific discrepancy requiring textbook revision.',
          resolvedAt: new Date().toISOString(),
        };
      }
      return issue;
    }));
  };

  const dismissIssue = (id, reason = "") => {
    setIssues(prev => prev.map(issue => {
      if (issue.id === id) {
        return {
          ...issue,
          reviewerDecision: 'DISMISSED',
          reviewerNotes: reason || issue.reviewerNotes || 'Dismissed by reviewer (classified as false positive or acceptable pedagogical adaptation).',
          resolvedAt: new Date().toISOString(),
        };
      }
      return issue;
    }));
  };

  const flagIssue = (id, notes = "") => {
    setIssues(prev => prev.map(issue => {
      if (issue.id === id) {
        return {
          ...issue,
          reviewerDecision: 'FLAGGED',
          reviewerNotes: notes || issue.reviewerNotes || 'Flagged for editorial board deliberation.',
          resolvedAt: new Date().toISOString(),
        };
      }
      return issue;
    }));
  };

  const updateNotes = (id, notes) => {
    setIssues(prev => prev.map(issue => {
      if (issue.id === id) {
        return { ...issue, reviewerNotes: notes };
      }
      return issue;
    }));
  };

  const resetIssues = () => {
    setIssues(MOCK_ISSUES);
    setSelectedIssueId('ISSUE-001');
  };

  // Pipeline runner simulation
  const startPipeline = () => {
    setActiveView('analysis');
    setPipelineStatus('running');
    setCurrentStageIndex(0);
    setPipelineLogs(["[00:00.000] STARTING VERIFICATION: PARITY Synthetic Demonstration Dataset"]);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current <= PIPELINE_STAGES.length) {
        const stage = PIPELINE_STAGES[current - 1];
        setCurrentStageIndex(current);
        const timestamp = new Date().toISOString().substring(14, 23);
        const logMsg = `[${timestamp}] [${stage.category}] ${stage.name} (${stage.durationMs}ms) - Verified`;
        setPipelineLogs(prev => [...prev, logMsg]);
      } else {
        clearInterval(interval);
        setPipelineStatus('completed');
        setPipelineLogs(prev => [...prev, `[${new Date().toISOString().substring(14, 23)}] VERIFICATION COMPLETED: Ready for Human Review`]);
      }
    }, 650);
  };

  const fastForwardPipeline = () => {
    setCurrentStageIndex(PIPELINE_STAGES.length);
    setPipelineStatus('completed');
  };

  // Computed Dynamic Prototype Metrics
  const metrics = useMemo(() => {
    const total = issues.length;
    const pending = issues.filter(i => i.reviewerDecision === 'PENDING').length;
    const confirmed = issues.filter(i => i.reviewerDecision === 'CONFIRMED').length;
    const dismissed = issues.filter(i => i.reviewerDecision === 'DISMISSED').length;
    const flagged = issues.filter(i => i.reviewerDecision === 'FLAGGED').length;

    // Prototype score calculation:
    // Base 100
    // Active / confirmed issues deduct points based on severity:
    // HIGH: -7 pts, MEDIUM: -3 pts, LOW: -1 pt, EQUIVALENT: 0 pt
    // Dismissed issues restore points.
    let deductions = 0;
    issues.forEach(i => {
      if (i.isEquivalent || i.reviewerDecision === 'DISMISSED') return;
      if (i.severity === 'HIGH') deductions += (i.reviewerDecision === 'CONFIRMED' ? 7.5 : 6.0);
      else if (i.severity === 'MEDIUM') deductions += (i.reviewerDecision === 'CONFIRMED' ? 3.5 : 2.5);
      else if (i.severity === 'LOW') deductions += (i.reviewerDecision === 'CONFIRMED' ? 1.5 : 1.0);
    });

    const score = Math.max(0, Math.min(100, Math.round((100 - deductions) * 10) / 10));

    return {
      total,
      pending,
      confirmed,
      dismissed,
      flagged,
      integrityScore: score,
      resolvedCount: confirmed + dismissed + flagged,
      resolutionPercentage: Math.round(((confirmed + dismissed + flagged) / total) * 100),
    };
  }, [issues]);

  const selectedIssue = useMemo(() => {
    return issues.find(i => i.id === selectedIssueId) || issues[0];
  }, [issues, selectedIssueId]);

  const filteredIssues = useMemo(() => {
    return issues.filter(issue => {
      if (categoryFilter !== 'ALL' && issue.category !== categoryFilter) return false;
      if (severityFilter !== 'ALL' && issue.severity !== severityFilter) return false;
      if (statusFilter !== 'ALL' && issue.reviewerDecision !== statusFilter) return false;
      return true;
    });
  }, [issues, categoryFilter, severityFilter, statusFilter]);

  const value = {
    activeView,
    setActiveView,
    pipelineStatus,
    currentStageIndex,
    pipelineLogs,
    startPipeline,
    fastForwardPipeline,
    job: MOCK_VERIFICATION_JOB,
    sections,
    issues,
    selectedIssue,
    selectedIssueId,
    setSelectedIssueId,
    selectedSectionId,
    setSelectedSectionId,
    filteredIssues,
    categoryFilter,
    setCategoryFilter,
    severityFilter,
    setSeverityFilter,
    statusFilter,
    setStatusFilter,
    confirmIssue,
    dismissIssue,
    flagIssue,
    updateNotes,
    resetIssues,
    metrics,
    stages: PIPELINE_STAGES,
    glossary: TECHNICAL_GLOSSARY,
  };

  return (
    <VerificationContext.Provider value={value}>
      {children}
    </VerificationContext.Provider>
  );
}


