# Proposal: diffstacking slow route

**What it proposes.** A difference that `CgmesDiffImport.canApplyInPlace` refuses is not applied to a live network.
With the RDF database integration it is merged into the base graphs that are already in the store and the conversion
runs again (`proposed_diffstacking_db_merge_fallback`); general difference application outside PowSyBl is left to RDF
tooling such as OpenCGMES (`proposed_diffstacking_opencgmes`). PowSyBl keeps no original files and grows no second RDF
engine.

**Status:** proposed – nothing here exists; the as-is elements it reuses (`powsybl_core.cgmes.triple_store_diff_applier`,
`powsybl_core.cgmes.conversion_update`) exist on the powsybl-core branch `feat/diffstacking`.

| | |
| --- | --- |
| Model | [model/proposals/diffstacking/slow-route.c4](slow-route.c4) |
| Views | [views/proposals/diffstacking/slow-route.c4](../../../views/proposals/diffstacking/slow-route.c4) |
| View ids | `diffstacking_slow_route` |
| Evidence | the reused as-is elements: rows `powsybl_core.cgmes.*` of the ledger in [architecture-evidence.md](../../../architecture-evidence.md) |
| Exported PNGs | none committed yet (see [exports/README.md](../../../exports/README.md) to generate one) |
