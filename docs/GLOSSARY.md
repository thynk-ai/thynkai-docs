# Glossary

## Model entry
A directory under `thynkai-models/models/<modality>/<slug>` containing stable metadata and versions.

## Model artifact
A binary or bundle referenced by a URI, optionally pinned with a sha256 digest.

## Validator
A system that evaluates a model against a benchmark and produces a ValidationResult.

## ValidationResult
A structured record describing status, score, evidence metrics, and provenance.

## Evidence
Metrics and artifacts supporting a ValidationResult. Treated as untrusted input.

## Scoring report
An explainable aggregation of multiple ValidationResults into an aggregate score + per-validator details.

## Benchmark
A named evaluation procedure with a versioned spec and expected outputs.

