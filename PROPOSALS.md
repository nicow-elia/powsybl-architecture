# Proposals

Every proposal has one folder under `model/proposals/` (elements, with a `README.md`) and one under
`views/proposals/` (views). Exported PNGs of selected views are under `exports/proposals/<proposal>/`.

Status: **as-is-branch** – the proposed elements exist as code on a branch that is not upstream; **proposed** – a
designed target, not implemented; **draft** – an early sketch, not yet reviewed.

| Proposal | Status | Folders | View ids | PNGs | Evidence |
| --- | --- | --- | --- | --- | --- |
| [Unified IIDM <-> CGMES mapping](model/proposals/unified-mapping/README.md) | as-is-branch (`feat/diffstacking-unified-mapping`) | `model/proposals/unified-mapping/`, `views/proposals/unified-mapping/` | `unified_mapping_before`, `unified_mapping_after`, `upstream-main-today`, `families-after`, `machine-example` | [exports/proposals/unified-mapping/](exports/proposals/unified-mapping/) | [architecture-evidence.md](architecture-evidence.md), "Unified mapping proposal" |
| [Model registry in its own repository](model/proposals/model-registry/README.md) | proposed | `model/proposals/model-registry/`, `views/proposals/model-registry/` | `rdfdb-integration` | [exports/proposals/model-registry/](exports/proposals/model-registry/) | [architecture-evidence.md](architecture-evidence.md), rows `powsybl_core.cgmes.rdfdb*` |
| [Diffstacking slow route](model/proposals/diffstacking/README.md) | proposed | `model/proposals/diffstacking/`, `views/proposals/diffstacking/` | `diffstacking_slow_route` | – | [architecture-evidence.md](architecture-evidence.md), rows of the reused `powsybl_core.cgmes.*` elements |
| [State Estimation (Proposal A / B)](model/proposals/state-estimation/README.md) | proposed | `model/proposals/state-estimation/`, `views/proposals/state-estimation/` | `state_estimation_proposal_a`, `state_estimation_proposal_b`, `state_estimation_proposed_contracts`, `state_estimation_proposal_b_sequence_mvp`, `state_estimation_proposal_b_sequence_followup` | – | [architecture-evidence.md](architecture-evidence.md), State Estimation baseline |

To add a proposal: create `model/proposals/<proposal>/` with its elements and a `README.md`, `views/proposals/<proposal>/`
with its views, and add a row here. View ids are global in the LikeC4 project, so a file can move between folders
without breaking links to its views.
