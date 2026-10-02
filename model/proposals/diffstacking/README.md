# Proposal: diffstacking

**What it proposes.** Grid states exchanged as differences instead of whole models. powsybl-core records what a
business process changes on a network (the upstream `NetworkEventRecorder`) and writes it as a partial SSH file
(`PartialSshExport`) or as IEC 61970-552 difference models (`CgmesDiffExport`, through `CgmesChangeTranslator`); the
CGMES importer applies a difference model to a loaded network in place (`CgmesDiffImport`, deciding beforehand whether
it can, then running the upstream `Conversion.update` scoped to the named equipment). An RDF database integration
(`cgmes-rdfdb` over `triple-store-impl-rdf4j-sparql`) stores the base models and the differences of a day as addressable
snapshots (scenario, timestep, version) and loads a network, or a variant of one, by the difference route or by a
rebuild. pypowsybl binds the recorder and the database. A difference the in-place import refuses is not applied to a
live network: with the database it is merged into the stored base graphs and the conversion runs again
(`proposed_diffstacking_db_merge_fallback`); general difference application is left to RDF tooling such as OpenCGMES
(`proposed_diffstacking_opencgmes`).

**Status:** implemented on local branch `feat/vibestacker`, not upstream. powsybl-core: branch `feat/vibestacker` of
the main working tree (formerly `feat/diffstacking`; committed `31b11b9fb0` "vibestacker - initial commit" on the
partial SSH baseline `c8c7f57f0f`, plus staged steps); pypowsybl: branch `feat/vibestacker` (`19b6afa9`). None of these classes or modules exists on powsybl-core `upstream-snapshot/main` (`f3d031b60f`) or
pypowsybl `upstream/main` (`a23a5616`) - see the audit in
[architecture-evidence.md](../../../architecture-evidence.md). The slow route (merge fallback, OpenCGMES) is proposed
only: no code.

The elements moved here from `model/as-is/` keep their internal structure under three roots that extend no factual
FQN:

| Before (as-is) | Now |
| --- | --- |
| `powsybl_core.cgmes.{difference_model, partial_ssh_export, cgmes_diff_export, change_translator, difference_sink, difference_model_parser, cgmes_diff_import, fast_route_capabilities, cgmes_object_dump, diff_update_store, direct_eq_applier, triple_store_diff_applier, cgmes_triple_store_loader, triple_store_network_loader}` | `proposed_diffstacking.<same id>` |
| `powsybl_core.iidm.io.exchange_formats.difference_model_format` | `proposed_diffstacking.difference_model_format` |
| `powsybl_core.triple_store_sparql` | `proposed_diffstacking.triple_store_sparql` |
| `powsybl_core.cgmes.rdfdb.*`, `powsybl_core.cgmes.rdfdb_schema.*` | `proposed_diffstacking.cgmes_rdfdb.*`, `proposed_diffstacking.cgmes_rdfdb_schema.*` |
| `pypowsybl.{python_event_recorder, python_rdf_database}`, `pypowsybl.java_bindings.{network_event_recorder_c_functions, network_event_recording, rdf_db_c_functions, rdf_db_util}` | `proposed_diffstacking_pypowsybl.<same id>` |
| `rdf_database` (and its children) | `proposed_diffstacking_rdf_database` |

Upstream elements the proposal uses stay in `model/as-is/`: `powsybl_core.iidm.variants.network_event_recorder`,
`powsybl_core.cgmes.{triple_store, cgmes_model, conversion_update, ...}`, `powsybl_core.iidm.io.import_providers.cgmes_importer`.
Relations to them carry the intent labels `would extend` (the branch changes the upstream element, e.g. `CgmesImport`
delegating difference models, `Conversion.update` taking a scope) and `would consume as-is` (used unchanged).

| | |
| --- | --- |
| Model | [cgmes.c4](cgmes.c4) (change exports, difference model import), [cgmes-rdfdb.c4](cgmes-rdfdb.c4) (RDF database integration), [rdf-database.c4](rdf-database.c4) (the external store), [pypowsybl-bindings.c4](pypowsybl-bindings.c4), [slow-route.c4](slow-route.c4) |
| Views | [views/proposals/diffstacking/](../../../views/proposals/diffstacking/): `cgmes-change-export.c4`, `cgmes-diff-import.c4`, `cgmes-rdfdb.c4`, `pypowsybl-change-export.c4`, `pypowsybl-rdf-database.c4`, `diffstacking-ipc.c4`, `slow-route.c4` |
| View ids | `cgmes_change_export`, `cgmes_diff_import`, `cgmes_diff_import_fast_route`, `cgmes_loading_split`, `rdfdb_fetch_performance`, `rdfdb_upload`, `rdfdb_diff_roundtrip`, `rdfdb_update_decision`, `rdfdb_versioning_schema`, `rdfdb_version_navigation`, `rdfdb_checkpoint`, `rdfdb_timesteps`, `rdfdb_timestep_ingestion`, `rdfdb_variant_binding`, `rdfdb_variants_bulk_load`, `rdfdb_variant_refusal_decision`, `pypowsybl_change_export`, `pypowsybl_rdf_database`, `pypowsybl_rdf_db_update_flow`, `pypowsybl_rdf_db_export_flow`, `pypowsybl_rdf_db_variants_flow`, `diffstacking_ipc`, `diffstacking_slow_route` |
| Evidence | rows `proposed_diffstacking*` of the ledger and the upstream audit in [architecture-evidence.md](../../../architecture-evidence.md) |
| Exported PNGs | none committed yet (see [exports/README.md](../../../exports/README.md) to generate one) |
