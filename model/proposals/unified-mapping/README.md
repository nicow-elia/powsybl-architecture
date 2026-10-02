# Proposal: unified IIDM <-> CGMES mapping

**What it proposes.** One IIDM <-> CGMES mapping for every steady state hypothesis path: eight family classes state
each SSH rule once and write into one property sink (the full SSH export's XML writer, or the buffer of one change for
the partial SSH, the difference model and the RDF database); the in-place import of a difference reads the same
families. The views compare upstream main, the diffstacking branch before the rework and the families after it, and
follow one change of a generator's active power through both directions.

**Status:** as-is-branch – the "after" elements exist on the local powsybl-core branch
`feat/diffstacking-unified-mapping` (`p4-merged` = `20ce552c50`), not upstream; "before" is `bb9cb0eb85`. Both build on
the diffstacking proposal ([../diffstacking/README.md](../diffstacking/README.md)): the change exports, the difference
model import and the RDF sink they connect are `proposed_diffstacking.*` elements, not upstream ones.

**Colours of the document views.** Grey is upstream main only (`upstream-main-today` holds nothing else; every element
was checked against `f3d031b60f`). Blue is the proposal: families, plain rows, sink, refusal, `CgmesChangeTranslator`,
the change exports, `CgmesDiffImport`, the RDF database sink, and the upstream `Conversion.update` where it runs with the
proposed `UpdateScope`. Red marks upstream code that states the rule `RotatingMachine.p = -targetP` itself, a darker
blue (`doc_rule_proposal`) proposal code that does.

| | |
| --- | --- |
| Model | [mapping.c4](mapping.c4) |
| Views | [views/proposals/unified-mapping/before-after.c4](../../../views/proposals/unified-mapping/before-after.c4) (overview, before and after), [document-views.c4](../../../views/proposals/unified-mapping/document-views.c4) (three document views) |
| View ids | `unified_mapping_before`, `unified_mapping_after`, `upstream-main-today`, `families-after`, `machine-example` |
| Evidence | section "Unified mapping proposal" of [architecture-evidence.md](../../../architecture-evidence.md) (source paths, rule statement counts) |
| Exported PNGs | [exports/proposals/unified-mapping/](../../../exports/proposals/unified-mapping/): `upstream-main-today.png`, `families-after.png`, `machine-example.png` |
