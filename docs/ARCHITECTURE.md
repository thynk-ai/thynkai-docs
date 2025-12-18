# Architecture overview

ThynkAI is split across repositories to keep concerns separated and reusable.

## Core components

### thynkai-core
Defines protocol primitives (types and minimal logic):
- Model specs and artifacts
- Validation request/result formats
- Basic scoring and governance utilities

### thynkai-models
A registry of model entries:
- stable model metadata (what it is)
- version entries (what artifact/version exists)
- performance notes (how it behaves)

### thynkai-validators
Validator workflows:
- onboarding requirements (minimum validator contract)
- scoring algorithms (v1+)
- harness + fixtures for robustness

### thynkai-toolkits
Contributor tooling:
- CLI scaffolding and validation checks
- templates for new model entries
- publishing helpers (dry-run summaries)

## Data flow (high-level)

1) A model is registered in thynkai-models (metadata + versions).
2) A validator evaluates a model artifact against a benchmark.
3) A ValidationResult is produced (score + evidence + provenance).
4) Scoring aggregates multiple validator results into a report.

The protocol focuses on making steps 2–4 interpretable and reproducible.

