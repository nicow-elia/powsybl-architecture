# Proposals

Every proposal has one folder under `model/proposals/` (elements, with a `README.md`) and one under
`views/proposals/` (views). Exported PNGs of selected views are under `exports/proposals/<proposal>/`.

Status: **as-is-branch** – the proposed elements exist as code on a branch that is not upstream (a local branch of
this machine, or an unmerged upstream pull-request branch); **proposed** – a designed target, not implemented;
**draft** – an early sketch, not yet reviewed. `model/as-is/` holds only what is on the upstream main branches; whatever
moved out of it is listed in the upstream audit of [architecture-evidence.md](architecture-evidence.md).

| Proposal | Status | Folders | View ids | PNGs | Evidence |
| --- | --- | --- | --- | --- | --- |
| [Unified IIDM <-> CGMES mapping](model/proposals/unified-mapping/README.md) | as-is-branch (local `feat/diffstacking-unified-mapping`, on top of the diffstacking proposal) | `model/proposals/unified-mapping/`, `views/proposals/unified-mapping/` | `unified_mapping_before`, `unified_mapping_after`, `upstream-main-today`, `families-after`, `machine-example` | [exports/proposals/unified-mapping/](exports/proposals/unified-mapping/) | [architecture-evidence.md](architecture-evidence.md), "Unified mapping proposal" |
| [Model registry in its own repository](model/proposals/model-registry/README.md) | proposed (moves the `cgmes-rdfdb` of the diffstacking proposal) | `model/proposals/model-registry/`, `views/proposals/model-registry/` | `rdfdb-integration` | [exports/proposals/model-registry/](exports/proposals/model-registry/) | [architecture-evidence.md](architecture-evidence.md), rows `proposed_diffstacking.cgmes_rdfdb*` |
| [Diffstacking](model/proposals/diffstacking/README.md) | as-is-branch (implemented on local branch `feat/vibestacker`, not upstream); the slow route is proposed | `model/proposals/diffstacking/`, `views/proposals/diffstacking/` | `cgmes_change_export`, `cgmes_diff_import`, `cgmes_diff_import_fast_route`, `cgmes_loading_split`, the twelve `rdfdb_*` views, `pypowsybl_change_export`, `pypowsybl_rdf_database`, `pypowsybl_rdf_db_update_flow`, `pypowsybl_rdf_db_export_flow`, `pypowsybl_rdf_db_variants_flow`, `diffstacking_ipc`, `diffstacking_slow_route` | – | [architecture-evidence.md](architecture-evidence.md), upstream audit and rows `proposed_diffstacking*` |
| [Open Load Flow pull-request branches](model/proposals/olf-branches/README.md) | as-is-branch (upstream PR branches `dc_lf_network_cache`, `refactor_network_cache`, `filter-monitored-results`; not on main) | `model/proposals/olf-branches/`, `views/proposals/olf-branches/` | `olf_branch_network_cache`, `olf_branch_monitored_result_filter` | – | [architecture-evidence.md](architecture-evidence.md), upstream audit |
| [State Estimation (Proposal A / B)](model/proposals/state-estimation/README.md) | proposed | `model/proposals/state-estimation/`, `views/proposals/state-estimation/` | `state_estimation_proposal_a`, `state_estimation_proposal_b`, `state_estimation_proposed_contracts`, `state_estimation_proposal_b_sequence_mvp`, `state_estimation_proposal_b_sequence_followup` | – | [architecture-evidence.md](architecture-evidence.md), State Estimation baseline |

To add a proposal: create `model/proposals/<proposal>/` with its elements and a `README.md`, `views/proposals/<proposal>/`
with its views, and add a row here. View ids are global in the LikeC4 project, so a file can move between folders
without breaking links to its views.
