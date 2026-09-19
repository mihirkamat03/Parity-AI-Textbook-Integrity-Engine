# PARITY ⚖️
**Post-Translation Textbook Integrity Engine**

> *VERIFY. COMPARE. PRESERVE.*

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## The Problem
A state education board discovers, only after lakhs of copies are printed, that a translated vernacular textbook chapter contradicts the source NCERT text on a factual point — a date, a formula, a scientific claim — because the translation-and-localisation pipeline was never fact-checked against the original. Build an AI cross-verification pipeline that compares a translated/localised textbook chapter against its source-language original and flags factual drift, mistranslation-driven errors, or silently dropped content, across at least three Indian languages. Twist: The system must distinguish genuine, intentional localisation — regionally appropriate examples, renamed characters — from unintentional factual drift, or it will bury every real error under thousands of harmless false positives.

## Our Solution
**PARITY** is an AI cross-verification pipeline that compares a translated/localised textbook chapter against its source-language original. It flags factual drift, mistranslation-driven errors, and silently dropped content across multiple Indian languages.

### The Twist: "Different ≠ Incorrect"
The system distinguishes genuine, intentional localisation (regionally appropriate examples, culturally adapted names) from unintentional factual drift. Without this, real errors are buried under thousands of harmless false positives.

## Core Features
*   **Bilingual Semantic Alignment:** Maps translated paragraphs back to the source using dense cross-lingual embeddings.
*   **Deterministic Symbolic Engine:** Parses formulas into Abstract Syntax Trees (AST) and checks dimensional tensor balance (e.g., `[M L T⁻²]`). **Zero LLM hallucinations.**
*   **SI Unit Normalization:** Automatically recognizes that `5 km` is mathematically identical to `5000 m` and flags it as a valid equivalence.
*   **Contextual Missing Content Detection:** Identifies instructional clauses or entire paragraphs dropped during translation.
*   **Editorial Workspace:** A forensic side-by-side human-in-the-loop review dashboard for Subject Matter Experts (SMEs).

## Future Implementation & Roadmap
To elevate PARITY into an enterprise-grade platform for State Education Boards, the following features are on our roadmap:

1.  📄 **Print-Ready Errata Generation (The "Save Millions" Feature)**
    Instead of reprinting 500,000 textbooks due to a late-discovered error, PARITY generates a formatted 1-page PDF Errata slip or QR code sticker that can be appended to already printed books, saving millions in pulping costs.
2.  🎯 **Pedagogical Impact Mapping (NEP 2020)**
    PARITY won't just flag a bad translation; it maps the exact error to the compromised NCERT Core Learning Outcome (e.g., "This error compromises Objective 4.2.1: Understanding Vector Kinematics").
3.  🖼️ **Cross-Modal Diagram Verification**
    Extracting translated text labels baked inside localized scientific diagrams (e.g., a biology cell or physics pulley system) and mathematically cross-verifying them against the chapter's text.
4.  🌐 **Crowdsourced Reviewer Consensus**
    Routing highly ambiguous flagged discrepancies to a verified pool of university Subject Matter Experts for a consensus vote.

## Getting Started
To run the prototype locally:

```bash
npm install
npm run dev
```
