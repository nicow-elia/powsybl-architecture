# Proposal: model registry in its own repository

**What it proposes.** The model registry – today the module `cgmes-rdfdb` of the diffstacking branch – moves to a
repository of its own next to powsybl-core: the catalogue addressed by (scenario, timestep, version), the version graph
and checkpoints, the loader with its diff and full routes, and the ingest of a day. powsybl-core keeps the IIDM network,
the CGMES conversion, the in-place import of a difference, the `NetworkEventRecorder` and the thin triple store over a
SPARQL endpoint. The view shows three flows: a TSO ingesting 96 SSH timesteps as differences, a study tool loading
(scenario, 08:30, v1.1) into a variant, an operator writing a change back as a new version.

**Status:** proposed – the registry code exists on the powsybl-core branch `feat/diffstacking` (as `cgmes-rdfdb`, so
the elements keep their `powsybl_core.cgmes.rdfdb.*` ids); its own repository and one scenario per
ModelingAuthoritySet are not implemented.

| | |
| --- | --- |
| Model | [registry.c4](registry.c4) |
| Views | [views/proposals/model-registry/registry.c4](../../../views/proposals/model-registry/registry.c4) |
| View ids | `rdfdb-integration` |
| Evidence | rows `powsybl_core.cgmes.rdfdb.*` and `powsybl_core.cgmes.rdfdb_schema.*` of the ledger in [architecture-evidence.md](../../../architecture-evidence.md) |
| Exported PNGs | [exports/proposals/model-registry/rdfdb-integration.png](../../../exports/proposals/model-registry/rdfdb-integration.png) |
