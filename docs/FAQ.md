# FAQ

## Is ThynkAI a model?
No. It is a protocol and a set of reference implementations.

## Why multiple repositories?
Separation keeps the protocol primitives stable and allows tooling/registries to evolve independently.

## Do you host weights?
No. The models registry stores metadata and artifact URIs (optionally with digests).

## Who decides what gets merged?
Maintainers. Discussions are public. Decisions should be documented and justified.

## Can I add my model?
Yes. Add an entry to `thynkai-models` following the spec and include performance notes.

## Can I build a validator?
Yes. Follow `thynkai-validators` onboarding spec and contribute fixtures/tests.

