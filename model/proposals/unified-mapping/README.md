# Proposal: unified IIDM <-> CGMES mapping

**What it proposes.** One IIDM <-> CGMES mapping for every steady state hypothesis path: eight family classes state
each SSH rule once and write into one property sink (the full SSH export's XML writer, or the buffer of one change for
the partial SSH, the difference model and the RDF database); the in-place import of a difference reads the same
families. The views compare upstream main, the diffstacking branch before the rework and the families after it, and
follow one change of a generator's active power through both directions.

**Status:** as-is-branch – the "after" elements exist on the powsybl-core branch `feat/diffstacking-unified-mapping`
(`p4-merged` = `20ce552c50`), not upstream; "before" is `bb9cb0eb85`.

| | |
| --- | --- |
| Model | [mapping.c4](mapping.c4) |
| Views | [views/proposals/unified-mapping/before-after.c4](../../../views/proposals/unified-mapping/before-after.c4) (overview, before and after), [document-views.c4](../../../views/proposals/unified-mapping/document-views.c4) (three document views) |
| View ids | `unified_mapping_before`, `unified_mapping_after`, `upstream-main-today`, `families-after`, `machine-example` |
| Evidence | section "Unified mapping proposal" of [architecture-evidence.md](../../../architecture-evidence.md) (source paths, rule statement counts) |
| Exported PNGs | [exports/proposals/unified-mapping/](../../../exports/proposals/unified-mapping/): `upstream-main-today.png`, `families-after.png`, `machine-example.png` |
