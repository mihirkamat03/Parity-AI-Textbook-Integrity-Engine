/**
 * PARITY Synthetic Demonstration Dataset
 * Structured to mirror future FastAPI backend schemas (/api/verifications, /issues, /analytics, /report)
 */

export const MOCK_VERIFICATION_JOB = {
  id: "PARITY-VER-2026-PHYS-01",
  title: "Physics — Demonstration Dataset",
  subject: "Newtonian Mechanics",
  chapter: "Newtonian Mechanics — Demonstration Chapter",
  sourceLanguage: "English",
  targetLanguage: "Marathi",
  datasetBadge: "PARITY Synthetic Demonstration Dataset",
  disclaimer: "Demonstration dataset with synthetic and intentionally introduced discrepancies for evaluation purposes. Not an official textbook.",
  createdAt: "2026-09-19T10:14:00Z",
  status: "COMPLETED",
  leadReviewer: "Dr. A. Kelkar (Lead Scientific Reviewer)",
  summary: {
    documentsVerified: 1,
    potentialIssues: 5,
    highRisk: 3,
    mediumRisk: 2,
    validEquivalences: 1,
    prototypeIntegrityScore: 84.2,
  },
  config: {
    numericalTolerance: 0.001,
    formulaStrictness: "DIMENSIONAL_AND_AST",
    glossaryStandard: "Maharashtra State Academic Terminology Glossary (Physics v3.2)",
    enableLLMExplanation: true,
  }
};

export const PIPELINE_STAGES = [
  {
    id: 1,
    number: "01",
    name: "Document Processing",
    category: "ML / AI",
    description: "Tokenizes bilingual passages, extracts layout geometry, builds semantic embedding graphs.",
    icon: "Cpu",
    durationMs: 380,
    telemetry: { tokensParsed: 2840, segmentsExtracted: 24, ocrConfidence: 0.992 },
  },
  {
    id: 2,
    number: "02",
    name: "Section Alignment",
    category: "ML / AI",
    description: "Aligns corresponding English source and Marathi translated section blocks using dynamic semantic anchoring.",
    icon: "GitMerge",
    durationMs: 420,
    telemetry: { alignedPairs: 18, alignmentConfidence: 0.964 },
  },
  {
    id: 3,
    number: "03",
    name: "Semantic Analysis",
    category: "ML / AI",
    description: "Computes cosine and dense contextual vector similarity across bilingual sentence embeddings.",
    icon: "Sparkles",
    durationMs: 410,
    telemetry: { vectorsGenerated: 340, embeddingDim: 1536, cosineThreshold: 0.88 },
  },
  {
    id: 4,
    number: "04",
    name: "Terminology Detection",
    category: "Deterministic / Symbolic",
    description: "Cross-checks scientific domain vocabulary against authoritative Physics academic glossaries.",
    icon: "BookOpen",
    durationMs: 340,
    telemetry: { technicalTermsFound: 46, glossaryMatchRate: 0.957, invalidSubstitutions: 1 },
  },
  {
    id: 5,
    number: "05",
    name: "Numerical Verification",
    category: "Deterministic / Symbolic",
    description: "Extracts scalars, floats and scientific notation to detect decimal shifts and magnitude discrepancies.",
    icon: "Binary",
    durationMs: 310,
    telemetry: { numbersChecked: 29, anomalousValues: 1, tolerance: "0.01%" },
  },
  {
    id: 6,
    number: "06",
    name: "Unit Normalization",
    category: "Deterministic / Symbolic",
    description: "Normalizes units into SI base representations to power the 'Different ≠ Incorrect' equivalence engine.",
    icon: "Scale",
    durationMs: 360,
    telemetry: { unitsParsed: 19, equivalentMatches: 1, unitMismatches: 1 },
  },
  {
    id: 7,
    number: "07",
    name: "Formula Verification",
    category: "Deterministic / Symbolic",
    description: "Constructs AST trees and performs dimensional tensor verification [M L T] on mathematical formulas.",
    icon: "Variable",
    durationMs: 480,
    telemetry: { formulasParsed: 14, astMismatches: 1, dimensionalViolations: 1 },
  },
  {
    id: 8,
    number: "08",
    name: "Missing Content Detection",
    category: "ML / AI",
    description: "Scans bilingual paragraph coverage maps to identify truncated paragraphs or untranslated educational clauses.",
    icon: "FileQuestion",
    durationMs: 390,
    telemetry: { coverageRatio: 0.942, missingParagraphsFound: 1 },
  },
  {
    id: 9,
    number: "09",
    name: "Evidence Aggregation",
    category: "Decision Layer",
    description: "Synthesizes multi-modal signals from AST parsers, numerical verifiers, semantic cosine vectors, and glossaries.",
    icon: "Layers",
    durationMs: 350,
    telemetry: { fusedSignals: 6, matrixDensity: 0.91 },
  },
  {
    id: 10,
    number: "10",
    name: "Risk Classification",
    category: "Decision Layer",
    description: "Assigns calibrated risk severity (HIGH, MEDIUM, LOW, EQUIVALENT) with explainable audit trails for human review.",
    icon: "ShieldAlert",
    durationMs: 290,
    telemetry: { highRisk: 3, mediumRisk: 2, lowRisk: 0, equivalent: 1 },
  }
];

export const MOCK_SECTIONS = [
  {
    id: "sec-01",
    number: "§ 1.1",
    title: "Introduction & Newton's First Law (Inertia)",
    marathiTitle: "न्यूटनचा गतीचा पहिला नियम आणि जडत्व",
    originalText: [
      {
        id: "sec-01-p1",
        text: "In classical mechanics, the inertia of a body is its resistance to any change in its velocity. A body continues in its state of rest or uniform motion unless acted upon by a net external unbalanced force.",
        hasIssue: false,
      },
      {
        id: "sec-01-p2",
        text: "This implies that in the absence of an unbalanced net force, the acceleration of the body is strictly zero: a = 0. Therefore, force is the physical cause that produces change in momentum.",
        hasIssue: true,
        issueId: "ISSUE-003",
      },
      {
        id: "sec-01-p3",
        text: "Furthermore, the state of equilibrium requires that the vector sum of all individual forces acting upon the system vanishes completely in every spatial dimension.",
        hasIssue: true,
        issueId: "ISSUE-004", // Missing content in translation
      }
    ],
    translatedText: [
      {
        id: "sec-01-m1",
        text: "अभिजात भौतिकशास्त्रामध्ये (Classical Mechanics), वस्तूचे जडत्व (Inertia) म्हणजे त्याच्या वेगामध्ये होणाऱ्या कोणत्याही बदलाला विरोध करण्याची प्रवृत्ती होय. कोणताही बाह्य असंतुलित बल कार्य करेपर्यंत वस्तू आपली विरामावस्था किंवा एकसमान गतीची अवस्था टिकवून ठेवते.",
        hasIssue: false,
      },
      {
        id: "sec-01-m2",
        text: "याचा अर्थ असा की बाह्य असंतुलित बलाच्या अनुपस्थितीत वस्तूची चाल शून्य असते: a = 0. म्हणून, बल हे संवेगात बदल घडवून आणणारे भौतिक कारण आहे.",
        hasIssue: true,
        issueId: "ISSUE-003", // Uses 'चाल' (speed) instead of 'त्वरण' (acceleration)
      },
      {
        id: "sec-01-m3",
        text: "/* [ओळ वगळली - Missing passage: Directional equilibrium paragraph not found in translation] */",
        hasIssue: true,
        issueId: "ISSUE-004",
        isOmission: true,
      }
    ]
  },
  {
    id: "sec-02",
    number: "§ 1.2",
    title: "Newton's Second Law & Quantitative Force",
    marathiTitle: "न्यूटनचा गतीचा दुसरा नियम व बल समीकरण",
    originalText: [
      {
        id: "sec-02-p1",
        text: "The second law states that the rate of change of momentum of an object is directly proportional to the applied unbalanced force and takes place in the direction in which the force acts.",
        hasIssue: false,
      },
      {
        id: "sec-02-p2",
        text: "For a body of constant mass m, this foundational law takes the fundamental algebraic form: F = m × a, where F is the net applied force, m is the inertial mass, and a is the resulting acceleration vector.",
        hasIssue: true,
        issueId: "ISSUE-001",
      },
      {
        id: "sec-02-p3",
        text: "In SI units, force is measured in Newtons (N), where 1 Newton is the force required to accelerate a 1 kg mass at 1 m/s².",
        hasIssue: false,
      }
    ],
    translatedText: [
      {
        id: "sec-02-m1",
        text: "दुसरा नियम असे सांगतो की कोणत्याही वस्तूच्या संवेग परिवर्तनाचा दर हा प्रयुक्त असंतुलित बलाशी समप्रमाणात असतो आणि हे परिवर्तन बलाच्या दिशेनेच घडते.",
        hasIssue: false,
      },
      {
        id: "sec-02-m2",
        text: "स्थिर वस्तुमान m असलेल्या वस्तूसाठी, हा मूलभूत नियम खालील बैजिक समीकरणाने दर्शविला जातो: F = m × v, जिथे F हे प्रयुक्त निव्वळ बल आहे, m हे वस्तुमान आहे आणि v हा निर्माण झालेला गती घटक आहे.",
        hasIssue: true,
        issueId: "ISSUE-001", // Replaces 'a' with 'v'
      },
      {
        id: "sec-02-m3",
        text: "SI एकक पद्धतीत बलाचे एकक न्यूटन (N) आहे; १ किग्रॅ वस्तुमानाच्या वस्तूमध्ये १ मी/से² इतके त्वरण निर्माण करण्यासाठी लागणारे बल म्हणजे १ न्यूटन होय.",
        hasIssue: false,
      }
    ]
  },
  {
    id: "sec-03",
    number: "§ 1.3",
    title: "Gravitational Acceleration & Free Fall",
    marathiTitle: "गुरुत्वीय त्वरण आणि मुक्त पतन",
    originalText: [
      {
        id: "sec-03-p1",
        text: "Near the surface of the Earth, all bodies experience a downward gravitational acceleration denoted by g. In standard terrestrial calculations, the standard acceleration due to gravity is approximately g = 9.8 m/s².",
        hasIssue: true,
        issueId: "ISSUE-002",
      },
      {
        id: "sec-03-p2",
        text: "This gravitational acceleration acts uniformly on all bodies irrespective of their individual mass when atmospheric drag is neglected.",
        hasIssue: false,
      }
    ],
    translatedText: [
      {
        id: "sec-03-m1",
        text: "पृथ्वीच्या पृष्ठभागाजवळ सर्व वस्तू खालील दिशेने गुरुत्वीय त्वरण अनुभवतात, जे g ने दर्शविले जाते. नेहमीच्या भू-गणनेमध्ये गुरुत्वाकर्षणाचे प्रमाणित मूल्य अंदाजे g = 98 m/s² इतके मानले जाते.",
        hasIssue: true,
        issueId: "ISSUE-002", // Missing decimal point: 98 instead of 9.8
      },
      {
        id: "sec-03-m2",
        text: "हवेचा रोध दुर्लक्षित केल्यास हे गुरुत्वीय त्वरण वस्तूच्या वस्तुमानावर अवलंबून न राहता सर्वांवर सारख्याच प्रमाणात कार्य करते.",
        hasIssue: false,
      }
    ]
  },
  {
    id: "sec-04",
    number: "§ 1.4",
    title: "Trajectory Analysis & Unit Calculations",
    marathiTitle: "प्रक्षेप पथ विश्लेषण आणि एकक रूपांतरणे",
    originalText: [
      {
        id: "sec-04-p1",
        text: "Consider a testing vehicle decelerating along a straight horizontal runway over a total measured braking distance of 5 km before coming to rest.",
        hasIssue: true,
        issueId: "ISSUE-005",
      },
      {
        id: "sec-04-p2",
        text: "In another reference benchmark, an auxiliary probe travels an equivalent trajectory span of 5000 m during its calibrated orbital coast phase.",
        hasIssue: true,
        issueId: "ISSUE-006",
      }
    ],
    translatedText: [
      {
        id: "sec-04-m1",
        text: "एका सरळ आडव्या धावपट्टीवर ब्रेक लावून थांबण्यापूर्वी एकूण 500 m अंतर पार करणाऱ्या एका चाचणी वाहनाचा विचार करा.",
        hasIssue: true,
        issueId: "ISSUE-005", // 5 km translated as 500 m (10x error)
      },
      {
        id: "sec-04-m2",
        text: "दुसऱ्या संदर्भ नोंदीनुसार, उप-संशोधक चाचणीयान आपल्या निर्धारित कक्षीय प्रवासात 5 km इतके समतुल्य अंतर पार करते.",
        hasIssue: true,
        issueId: "ISSUE-006", // 5000 m translated as 5 km (DIFFERENT != INCORRECT: EQUIVALENT)
      }
    ]
  }
];

export const MOCK_ISSUES = [
  {
    id: "ISSUE-001",
    title: "Formula Variable Substitution (Acceleration replaced with Velocity)",
    category: "Formula",
    severity: "HIGH",
    sectionId: "sec-02",
    paragraphId: "sec-02-p2",
    originalSnippet: "F = m × a",
    translatedSnippet: "F = m × v",
    isEquivalent: false,
    pipelineStage: "07 Formula Verification",
    verificationMethod: "Formula Parser & Structural AST",
    methodType: "DETERMINISTIC",
    confidence: 0.987,
    sourceEvidence: "Formula expression F = m × a specifies acceleration vector [a] with dimensions [M L T⁻²].",
    translationEvidence: "Symbolic comparison indicates acceleration 'a' was replaced by velocity 'v', changing dimensions to [M L T⁻¹].",
    deterministicEvidence: {
      astDifference: "RHS operand #2: Expected symbol [a] (rank 1 tensor), found symbol [v].",
      lhsDimensions: "[M L T⁻²] (Force: kg·m/s²)",
      expectedRhsDimensions: "[M] × [L T⁻²] = [M L T⁻²] (Balanced)",
      translatedRhsDimensions: "[M] × [L T⁻¹] = [M L T⁻¹] (Dimensional Mismatch: kg·m/s)",
      dimensionalMatch: false,
      operatorMatch: true,
    },
    llmExplanation: "Acceleration has dimensions [L/T²], while velocity has dimensions [L/T]. Substituting velocity replaces Newton's Second Law with momentum, altering the physical law.",
    reviewerDecision: "PENDING", // PENDING, CONFIRMED, DISMISSED, FLAGGED
    reviewerNotes: "",
    resolvedAt: null,
  },
  {
    id: "ISSUE-002",
    title: "Numerical Magnitude Shift in Gravitational Acceleration",
    category: "Numerical",
    severity: "HIGH",
    sectionId: "sec-03",
    paragraphId: "sec-03-p1",
    originalSnippet: "9.8 m/s²",
    translatedSnippet: "98 m/s²",
    isEquivalent: false,
    pipelineStage: "05 Numerical Verification",
    verificationMethod: "Numerical Normalization & Float Precision",
    methodType: "DETERMINISTIC",
    confidence: 0.998,
    sourceEvidence: "Standard local gravitational constant g = 9.8 m/s².",
    translationEvidence: "Extracted scalar 98.0 m/s² differs by factor of 10 after unit normalization.",
    deterministicEvidence: {
      originalValue: 9.8,
      translatedValue: 98.0,
      ratio: 10.0,
      relativeErrorPercentage: "+900.0%",
      decimalShiftDetected: true,
      unitPreserved: true,
    },
    llmExplanation: "Decimal point omitted in translation, increasing standard gravitational acceleration by tenfold (98 m/s² vs 9.8 m/s²).",
    reviewerDecision: "PENDING",
    reviewerNotes: "",
    resolvedAt: null,
  },
  {
    id: "ISSUE-003",
    title: "Terminology Discrepancy (Acceleration translated as Speed)",
    category: "Terminology",
    severity: "MEDIUM",
    sectionId: "sec-01",
    paragraphId: "sec-01-p2",
    originalSnippet: "acceleration of the body is strictly zero",
    translatedSnippet: "वस्तूची चाल शून्य असते (Speed of the object is zero)",
    isEquivalent: false,
    pipelineStage: "04 Terminology Detection",
    verificationMethod: "Subject Domain Glossary Comparison",
    methodType: "DETERMINISTIC",
    confidence: 0.932,
    sourceEvidence: "Original English concept: 'Acceleration' (vector rate of velocity change).",
    translationEvidence: "Used term 'चाल' (Speed/Scalar). Canonical expected domain terminology: 'त्वरण' (Acceleration).",
    deterministicEvidence: {
      originalTerm: "Acceleration",
      usedTerm: "चाल (Chāl / Speed)",
      expectedCanonicalTerm: "त्वरण (Tvaraṇ)",
      glossaryRef: "MAHA-PHYS-DICT-2024, Entry #118",
      glossarySimilarity: 0.18,
    },
    llmExplanation: "Zero acceleration does not imply zero speed in uniform motion. The substitution creates an instructional physics misconception.",
    reviewerDecision: "PENDING",
    reviewerNotes: "",
    resolvedAt: null,
  },
  {
    id: "ISSUE-004",
    title: "Missing Passage on Multi-Dimensional Vector Equilibrium",
    category: "Missing Content",
    severity: "HIGH",
    sectionId: "sec-01",
    paragraphId: "sec-01-p3",
    originalSnippet: "Furthermore, the state of equilibrium requires that the vector sum of all individual forces acting upon the system vanishes completely in every spatial dimension.",
    translatedSnippet: "/* [Entire paragraph omitted in Marathi translation] */",
    isEquivalent: false,
    pipelineStage: "08 Missing Content Detection",
    verificationMethod: "Bilingual Paragraph Alignment & Coverage Map",
    methodType: "AI / ML",
    confidence: 0.985,
    sourceEvidence: "3-sentence paragraph explaining directional equilibrium condition.",
    translationEvidence: "Zero target token mapping in translated section. Coverage ratio: 0.0%.",
    deterministicEvidence: {
      sourceTokenCount: 26,
      targetTokenCount: 0,
      coverageScore: "0.0%",
      omissionType: "COMPLETE_PARAGRAPH",
    },
    llmExplanation: "The translated section omits the condition that vector sum of external forces must vanish in all spatial dimensions.",
    reviewerDecision: "PENDING",
    reviewerNotes: "",
    resolvedAt: null,
  },
  {
    id: "ISSUE-005",
    title: "Unit Magnitude Discrepancy (5 km translated as 500 m)",
    category: "Unit / Numerical",
    severity: "HIGH",
    sectionId: "sec-04",
    paragraphId: "sec-04-p1",
    originalSnippet: "5 km",
    translatedSnippet: "500 m",
    isEquivalent: false,
    pipelineStage: "06 Unit Normalization",
    verificationMethod: "Unit Normalization & Dimensional Conversion",
    methodType: "DETERMINISTIC",
    confidence: 0.991,
    sourceEvidence: "Distance specification: 5 km (equivalent to 5000 m).",
    translationEvidence: "Extracted value 500 m. Normalized values are not equivalent (5000 m ≠ 500 m).",
    deterministicEvidence: {
      originalNormalizedSI: "5000 m",
      translatedNormalizedSI: "500 m",
      conversionRatio: 0.1,
      expectedFactor: 1000,
      delta: "-4500 m",
    },
    llmExplanation: "The translation altered the magnitude from 5 kilometers to 500 meters, a 10-fold compression in braking trajectory distance.",
    reviewerDecision: "PENDING",
    reviewerNotes: "",
    resolvedAt: null,
  },
  {
    id: "ISSUE-006",
    title: "Valid Representation: Different ≠ Incorrect (5000 m ≡ 5 km)",
    category: "Equivalent",
    severity: "NONE",
    sectionId: "sec-04",
    paragraphId: "sec-04-p2",
    originalSnippet: "5000 m",
    translatedSnippet: "5 km",
    isEquivalent: true,
    pipelineStage: "06 Unit Normalization",
    verificationMethod: "Unit Normalization & Symbolic Equivalence",
    methodType: "DETERMINISTIC",
    confidence: 0.999,
    sourceEvidence: "Original distance expression: 5000 m (SI base).",
    translationEvidence: "Translated expression: 5 km. Both expressions resolve identically to 5000 m in SI.",
    deterministicEvidence: {
      originalNormalizedSI: "5000 m",
      translatedNormalizedSI: "5000 m",
      conversionRatio: 1.0,
      equivalenceStatus: "MATHEMATICALLY_IDENTICAL",
      dimension: "[L] (Length)",
    },
    llmExplanation: "Different textual representation (5000 m vs 5 km), but mathematically and physically identical. Evaluated as EQUIVALENT under PARITY's 'Different ≠ Incorrect' engine.",
    reviewerDecision: "DISMISSED",
    reviewerNotes: "Verified mathematically identical representation by SI Unit Normalizer. Valid Equivalent.",
    resolvedAt: "2026-09-19T10:14:02Z",
  },
  {
    id: "ISSUE-007",
    title: "Intentional Localisation: Character Renaming (Alice → Anjali)",
    category: "Equivalent",
    severity: "NONE",
    sectionId: "sec-04",
    paragraphId: "sec-04-p3",
    originalSnippet: "Suppose Alice throws a ball...",
    translatedSnippet: "समजा अंजलीने एक चेंडू फेकला... (Suppose Anjali throws a ball...)",
    isEquivalent: true,
    pipelineStage: "03 Semantic Analysis",
    verificationMethod: "Cross-lingual Entity Resolution",
    methodType: "AI / ML",
    confidence: 0.994,
    sourceEvidence: "Original text uses the subject entity 'Alice'.",
    translationEvidence: "Translated text uses the subject entity 'Anjali' (अंजली).",
    deterministicEvidence: {
      entityType: "PERSON",
      sourceEntity: "Alice",
      targetEntity: "Anjali (अंजली)",
      equivalenceStatus: "VALID_LOCALISATION",
      semanticPreservationScore: 0.98,
    },
    llmExplanation: "The proper noun 'Alice' was intentionally localised to the culturally appropriate name 'Anjali'. This is a valid pedagogical adaptation and does not alter the underlying physics or factual mechanics.",
    reviewerDecision: "DISMISSED",
    reviewerNotes: "Auto-classified as valid regional localisation. Factual physics intent remains identical.",
    resolvedAt: "2026-09-19T10:14:02Z",
  }
];

export const TECHNICAL_GLOSSARY = [
  { english: "Acceleration", marathiCorrect: "त्वरण (Tvaraṇ)", marathiIncorrect: "चाल (Chāl)", context: "Kinematics & Dynamics" },
  { english: "Velocity", marathiCorrect: "वेग (Veg)", marathiIncorrect: "गती (Gatī)", context: "Vector Kinematics" },
  { english: "Momentum", marathiCorrect: "संवेग (Saṃveg)", marathiIncorrect: "बल (Bal)", context: "Conservation Laws" },
  { english: "Inertia", marathiCorrect: "जडत्व (Jaḍatva)", marathiIncorrect: "आळस (Āḷas)", context: "Newton's First Law" },
  { english: "Equilibrium", marathiCorrect: "संतुलन (Saṃtulan)", marathiIncorrect: "स्थिरता (Sthiratā)", context: "Statics & Forces" },
  { english: "Force", marathiCorrect: "बल (Bal)", marathiIncorrect: "शक्ती (Śaktī)", context: "Dynamics" },
];
