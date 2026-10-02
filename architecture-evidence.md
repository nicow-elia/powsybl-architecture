# Architecture Evidence

This ledger records the source-backed evidence for the State Estimation as-is baseline. It documents what exists in the checked-out repositories; proposal elements are not evidenced here, except where a proposal section below cites measured figures of an implementation branch (see "Unified mapping proposal").

| FQN | Repository | Source path(s) | Branch/commit reviewed | Last checked |
| --- | --- | --- | --- | --- |
| `powsybl_core.iidm.network` | powsybl-core | `powsybl-core/iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Network.java` | `feat/parallel-switchflow` / `936fa1d20c` | 2026-09-02 |
| `powsybl_core.iidm.extensions.measurements` | powsybl-core | `powsybl-core/iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/{Measurement,Measurements,DiscreteMeasurement,DiscreteMeasurements}.java` | `feat/parallel-switchflow` / `936fa1d20c` | 2026-09-02 |
| `powsybl_core.iidm.extensions.observability` | powsybl-core | `powsybl-core/iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/{Observability,BranchObservability,InjectionObservability,ObservabilityArea}.java` | `feat/parallel-switchflow` / `936fa1d20c` | 2026-09-02 |
| `powsybl_core.iidm.extensions.transformer_estimation_flags` | powsybl-core | `powsybl-core/iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/{TwoWindingsTransformerToBeEstimated,ThreeWindingsTransformerToBeEstimated}.java` | `feat/parallel-switchflow` / `936fa1d20c` | 2026-09-02 |
| `powsybl_core.math` | powsybl-core | `powsybl-core/math/src/main/java/com/powsybl/math/matrix/{MatrixFactory,LUDecomposition}.java` | `feat/parallel-switchflow` / `936fa1d20c` | 2026-09-02 |
| `powsybl_open_loadflow.lf_network` | powsybl-open-loadflow | `powsybl-open-loadflow/src/main/java/com/powsybl/openloadflow/network/LfNetwork.java` | `main` / `bb19987a` | 2026-09-02 |
| `powsybl_open_loadflow.lf_network_adapter.network_loader` | powsybl-open-loadflow | `powsybl-open-loadflow/src/main/java/com/powsybl/openloadflow/network/{LfNetworkLoader.java,impl/LfNetworkLoaderImpl.java}` | `main` / `bb19987a` | 2026-09-02 |
| `powsybl_open_loadflow.equation_toolkit.equation_system` | powsybl-open-loadflow | `powsybl-open-loadflow/src/main/java/com/powsybl/openloadflow/equations/{EquationSystem,JacobianMatrix}.java` | `main` / `bb19987a` | 2026-09-02 |
| `powsybl_open_loadflow.equation_toolkit.ac_equation_builder` | powsybl-open-loadflow | `powsybl-open-loadflow/src/main/java/com/powsybl/openloadflow/ac/equations/{AcEquationSystemCreator,ClosedBranchSide1ActiveFlowEquationTerm}.java` | `main` / `bb19987a` | 2026-09-02 |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.newton_raphson` | powsybl-open-loadflow | `powsybl-open-loadflow/src/main/java/com/powsybl/openloadflow/ac/solver/NewtonRaphson.java` | `main` / `bb19987a` | 2026-09-02 |
| `pypowsybl.measurement_and_observability_dataframes` | pypowsybl | `pypowsybl/java/pypowsybl/src/main/java/com/powsybl/dataframe/network/extensions/{MeasurementsDataframeProvider,BranchObservabilityDataframeProvider,InjectionObservabilityDataframeProvider}.java` | `feat/outage-groups` / `4ae49253` | 2026-09-02 |
| `powsybl_core.cgmes` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/, powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.triple_store` | powsybl-core | `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/triplestore/CgmesModelTripleStore.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.cgmes_model` | powsybl-core | `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/{CgmesNamespace,CgmesSubset,CgmesMetadataModel}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.difference_model` | powsybl-core | `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/diff/{CgmesStatement,DifferenceModel,DifferenceModelHeader,DifferenceModelSet}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.partial_ssh_export` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/PartialSshExport.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.cgmes_diff_export` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/{CgmesDiffExport,DifferenceModelBuilder}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.change_translator` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/{CgmesChangeTranslator,IidmStateView,CgmesChangeRegulatingControls,CgmesPropertyBuffer,CgmesLimitIndex}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.difference_sink` | powsybl-core | `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/diff/{DifferenceSink,DifferenceModelWriter}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.iidm.variants.network_event_recorder` | powsybl-core | `powsybl-core/iidm/iidm-api/src/main/java/com/powsybl/iidm/network/NetworkEventRecorder.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.iidm.io.exchange_formats.difference_model_format` | powsybl-core | `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/diff/DifferenceModelWriter.java; powsybl-core/docs/grid_exchange_formats/cgmes/export.md` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.difference_model_parser` | powsybl-core | `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/diff/DifferenceModelParser.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.cgmes_diff_import` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/diff/{CgmesDiffImport,CgmesDiffNotApplicableException,FastRoutePlan}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.fast_route_capabilities` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/diff/{FastRouteCapabilities,DiffSubjectResolver,DiffProbes}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.cgmes_object_dump` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/CgmesObjectDump.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.diff_update_store` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/diff/DiffUpdateStoreBuilder.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.conversion_update` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/{Conversion,Update,UpdateScope}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.direct_eq_applier` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/diff/DirectEqApplier.java`, `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/CgmesLimitIndex.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.triple_store_diff_applier` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/diff/TripleStoreDiffApplier.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `pypowsybl.python_event_recorder` | pypowsybl | `pypowsybl/pypowsybl/network/impl/network_event_recorder.py`, `pypowsybl/pypowsybl/network/impl/network.py` (`event_recorder`, `update_from_string`) | `feat/diffstacking` / `742818ac` | 2026-09-18 |
| `pypowsybl.java_bindings.network_event_recorder_c_functions` | pypowsybl | `pypowsybl/java/pypowsybl/src/main/java/com/powsybl/python/network/NetworkEventRecorderCFunctions.java` | `feat/diffstacking` / `742818ac` | 2026-09-18 |
| `pypowsybl.java_bindings.network_event_recording` | pypowsybl | `pypowsybl/java/pypowsybl/src/main/java/com/powsybl/python/network/{NetworkEventRecording,NetworkEventRow}.java`, `.../network/Dataframes.java` (`networkEventsMapper`) | `feat/diffstacking` / `742818ac` | 2026-09-18 |
| No factual State Estimation API, provider, module, WLS kernel, result type, or report | powsybl-core and powsybl-open-loadflow | `powsybl-core/pom.xml`; Java source trees in both repositories searched for State Estimation and WLS terminology | Core `feat/parallel-switchflow` / `936fa1d20c`; OLF `main` / `bb19987a` | 2026-09-02 |

The final row is a negative finding from source and module-list searches. It does not rule out work on unreviewed branches, stashes, or external repositories.
| `powsybl_core.triple_store_sparql` | powsybl-core | `powsybl-core/triple-store/triple-store-impl-rdf4j-sparql/src/main/java/com/powsybl/triplestore/impl/rdf4j/sparql/{TripleStoreRDF4JSparql,SparqlEndpoint,GraphStoreClient,ScenarioGraphNames,TripleStoreFactoryServiceRDF4JSparql}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.cgmes_triple_store_loader` | powsybl-core | `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/triplestore/CgmesTripleStoreLoader.java`, `powsybl-core/cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/CgmesModelFactory.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.triple_store_network_loader` | powsybl-core | `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/TripleStoreNetworkLoader.java`, `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/CgmesImport.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.rdf_database_config` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/RdfDatabase.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.rdf_db_connection` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{RdfDbConnection,InMemoryRdfDatabases,SharedRepositoryTripleStore}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.graph_fetcher` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{GraphFetcher,GraphCache,LoadStatistics}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.rdf_db_network_loader` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{RdfDbNetworkLoader,RdfDbLoadOptions,GraphInfo,RdfDbException}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.rdf_db_provenance` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{RdfDbProvenance,RdfDbProvenanceImpl}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.rdf_db_difference_sink` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{RdfDbDifferenceSink,RdfDbExport,RdfDbConflictException,SparqlText,SparqlAccess}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.model_catalog` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{ModelCatalog,StoredModel,RdfDbNames,RdfDbVocabulary}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.rdf_db_diff_source` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{RdfDbDiffSource,StatementCodec}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.diff_update_planner` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{DiffUpdatePlanner,DiffTarget,RdfDbUpdateOptions,UpdateResult,UpdateStatistics,NetworkIdentity}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.rdf_db_materializer` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/RdfDbMaterializer.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `rdf_database` | powsybl-core | External system. Evidence of the protocol usage: `powsybl-core/triple-store/triple-store-impl-rdf4j-sparql/src/main/java/com/powsybl/triplestore/impl/rdf4j/sparql/GraphStoreClient.java` (SPARQL 1.1 Graph Store Protocol over the JDK HTTP client), `.../TripleStoreRDF4JSparql.java` (SPARQL 1.1 Query/Update through an rdf4j SPARQLRepository, dataset parameters per scenario); verified against Apache Jena Fuseki 6.2.0 in `powsybl-core/cgmes/cgmes-rdfdb/src/test/java/com/powsybl/cgmes/rdfdb/` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `pypowsybl.python_rdf_database` | pypowsybl | `pypowsybl/pypowsybl/network/impl/rdf_db.py`, `pypowsybl/pypowsybl/network/impl/network.py` (`Network.update_from_rdf_db`) | `feat/diffstacking` / `742818ac` | 2026-09-18 |
| `pypowsybl.java_bindings.rdf_db_c_functions` | pypowsybl | `pypowsybl/java/pypowsybl/src/main/java/com/powsybl/python/network/RdfDbCFunctions.java` | `feat/diffstacking` / `742818ac` | 2026-09-18 |
| `pypowsybl.java_bindings.rdf_db_util` | pypowsybl | `pypowsybl/java/pypowsybl/src/main/java/com/powsybl/python/network/RdfDbUtil.java` (variant half: `loadVariants`, `variantRows`, `identity(.., variant)`, `exportRecordingPerVariant`); tests `RdfDbUtilVariantsTest`, `RdfDbUtilVariantsFusekiTest` | `feat/diffstacking` / `742818ac` | 2026-09-21 |
| `powsybl_core.cgmes.rdfdb.snapshot_catalog` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{SnapshotCatalog,SnapshotInfo,SnapshotRows}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.version_graph` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{VersionGraph,UpdatePlan,MaterializationPlan}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.checkpoint` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/Checkpoint.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.graph_uploader` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/GraphUploader.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.timesteps` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{Timesteps,SnapshotRef}.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb_schema.*` | powsybl-core | Schema of the metadata graph, written by `SnapshotCatalog`, `RdfDbDifferenceSink`, `ModelCatalog` and `Checkpoint`; terms in `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{RdfDbVocabulary,RdfDbNames}.java`; documented in `powsybl-core/docs/grid_exchange_formats/cgmes/rdf_database.md` ("Metadata graph (schema v2)") | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb_schema.pdb_timestep_root` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/SnapshotCatalog.java` (`pin`, `putDiff`), `RdfDbDifferenceSink.java` (`SnapshotWrite`, `appendSnapshotGuards`); tests `RdfDbTimestepFlowTest` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-18 |
| `powsybl_core.cgmes.rdfdb.variant_binding` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{VariantBinding,VariantOutcome,RdfDbProvenanceImpl}.java` (the `BindingListener` inner class); tests `RdfDbProvenanceVariantTest` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-21 |
| `powsybl_core.cgmes.rdfdb.variant_scope` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{VariantScope,NetworkIdentity}.java` (`capture`, `install`), `powsybl-core/cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/ExportVariantScope.java` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-21 |
| `powsybl_core.cgmes.rdfdb.variant_updater` | powsybl-core | `powsybl-core/cgmes/cgmes-rdfdb/src/main/java/com/powsybl/cgmes/rdfdb/{VariantUpdater,VariantBulkLoader,VariantRequest,VariantLoadResult,RdfDbVariantLoadOptions}.java`, `RdfDbNetworkLoader.loadVariants`; tests `RdfDbVariantFlowTest`, `RdfDbVariantBulkLoadTest`, `RdfDbVariantExportTest`, `RdfDbVariantsBenchmarkTest` | `feat/diffstacking` / `c8c7f57f0f` | 2026-09-21 |

## Upstream audit of `model/as-is/` (2026-10-02)

Rule: `model/as-is/` and `views/as-is/` hold only what exists on the upstream main branches. Every element that was
declared under `model/as-is/` (and the four `rdf_database.*` elements a proposal adds to the moved store) was checked
against these refs, read-only:

| Repository | Upstream ref checked | Where |
| --- | --- | --- |
| powsybl-core | `upstream-snapshot/main` = `f3d031b60f` ("Bump to v7.5.0-SNAPSHOT") | `scratchpad/worktrees/powsybl-core-unified`, `git ls-tree -r` / `git show` / `git grep` |
| pypowsybl | `upstream/main` = `a23a5616` (remote `upstream` = `powsybl/pypowsybl`; commit of 2026-09-11, the newest fetched ref) | `pypowsybl`, `git ls-tree -r` / `git grep` |
| powsybl-open-loadflow | `HEAD` = `main` = `bb19987a` (remote `origin` = `powsybl/powsybl-open-loadflow`) | `powsybl-open-loadflow`, `git ls-tree -r` / `git grep` |

Result: 252 elements checked; 191 exist upstream and stay in `model/as-is/` (one description corrected to main:
`powsybl_open_loadflow.network_cache.change_classifier`); 52 exist only on the local diffstacking branches
(powsybl-core `feat/diffstacking` / `feat/vibestacker`, pypowsybl `feat/diffstacking` / `feat/vibestacker`) and moved to
`model/proposals/diffstacking/` under the roots `proposed_diffstacking`, `proposed_diffstacking_pypowsybl` and
`proposed_diffstacking_rdf_database`; 5 exist only on upstream pull-request branches of powsybl-open-loadflow, not on
main, and moved to `model/proposals/olf-branches/` under `proposed_olf_branches`; the 4 `rdf_database.store_*`
elements were already a proposal (model registry) and follow the store to its new root. `NetworkEventRecorder` (and
the `NetworkEvent` types), `Conversion.update` / `Update` and the SPARQL update catalogue are upstream and stay.

| FQN (before) | Upstream path checked | Verdict | FQN now |
| --- | --- | --- | --- |
| `powsybl_core` | `pom.xml` (repository root) | as-is | unchanged |
| `powsybl_core.cgmes` | `cgmes/cgmes-conversion/`, `cgmes/cgmes-model/` | as-is | unchanged |
| `powsybl_core.cgmes.cgmes_model` | `cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/{CgmesNamespace,CgmesSubset,CgmesMetadataModel}.java` | as-is | unchanged |
| `powsybl_core.cgmes.conversion` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/Conversion.java` | as-is | unchanged |
| `powsybl_core.cgmes.conversion_update` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/{Conversion,Update}.java` (`Conversion.update(Network, ReportNode)`) | as-is | unchanged |
| `powsybl_core.cgmes.element_conversions` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/elements/` (43 `*Conversion.java`), `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/Update.java` | as-is | unchanged |
| `powsybl_core.cgmes.eq_export` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/EquipmentExport.java` | as-is | unchanged |
| `powsybl_core.cgmes.query_catalog` | `cgmes/cgmes-model/src/main/resources/{CIM16,CIM16-update,CIM100,CIM100-update}.sparql` | as-is | unchanged |
| `powsybl_core.cgmes.ssh_export` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/SteadyStateHypothesisExport.java` | as-is | unchanged |
| `powsybl_core.cgmes.tp_sv_export` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/{TopologyExport,StateVariablesExport}.java` | as-is | unchanged |
| `powsybl_core.cgmes.triple_store` | `cgmes/cgmes-model/src/main/java/com/powsybl/cgmes/model/triplestore/CgmesModelTripleStore.java`, `triple-store/triple-store-impl-rdf4j/` | as-is | unchanged |
| `powsybl_core.commons` | `commons/src/main/java/com/powsybl/commons/{config/PlatformConfig,report/ReportNode}.java`, `computation/.../ComputationManager.java` | as-is | unchanged |
| `powsybl_core.contingency_api` | `contingency/contingency-api/src/main/java/com/powsybl/contingency/{Contingency,ContingenciesProvider}.java` | as-is | unchanged |
| `powsybl_core.iidm` | `iidm/` (iidm-api, iidm-impl, iidm-extensions, iidm-serde) | as-is | unchanged |
| `powsybl_core.iidm.branches` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Branch.java` and subtypes | as-is | unchanged |
| `powsybl_core.iidm.branches.ac_line` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Line.java` | as-is | unchanged |
| `powsybl_core.iidm.branches.branch` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Branch.java` | as-is | unchanged |
| `powsybl_core.iidm.branches.tie_line` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/TieLine.java` | as-is | unchanged |
| `powsybl_core.iidm.common_types` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{Identifiable,Connectable,Terminal}.java` | as-is | unchanged |
| `powsybl_core.iidm.common_types.connectable` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Connectable.java` | as-is | unchanged |
| `powsybl_core.iidm.common_types.identifiable` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Identifiable.java` | as-is | unchanged |
| `powsybl_core.iidm.common_types.terminal` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Terminal.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{DcBus,DcNode,DcLine,DcSwitch,DcGround,DcTerminal}.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid.dc_bus` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/DcBus.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid.dc_connectivity` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{DcTerminal,DcNode}.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid.dc_ground` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/DcGround.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid.dc_line` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/DcLine.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid.dc_node` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/DcNode.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid.dc_switch` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/DcSwitch.java` | as-is | unchanged |
| `powsybl_core.iidm.dc_grid.dc_terminal` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/DcTerminal.java` | as-is | unchanged |
| `powsybl_core.iidm.extensions` | `iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/` | as-is | unchanged |
| `powsybl_core.iidm.extensions.cgmes_extensions` | `cgmes/cgmes-extensions/src/main/java/com/powsybl/cgmes/extensions/` | as-is | unchanged |
| `powsybl_core.iidm.extensions.extension_contract` | `commons/src/main/java/com/powsybl/commons/extensions/{Extension,Extendable}.java` | as-is | unchanged |
| `powsybl_core.iidm.extensions.measurements` | `iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/{Measurement,Measurements,DiscreteMeasurement,DiscreteMeasurements}.java` | as-is | unchanged |
| `powsybl_core.iidm.extensions.observability` | `iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/{Observability,BranchObservability,InjectionObservability,ObservabilityArea,ObservabilityQuality}.java` | as-is | unchanged |
| `powsybl_core.iidm.extensions.reference_terminals` | `iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/ReferenceTerminals.java` | as-is | unchanged |
| `powsybl_core.iidm.extensions.slack_terminal` | `iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/SlackTerminal.java` | as-is | unchanged |
| `powsybl_core.iidm.extensions.transformer_estimation_flags` | `iidm/iidm-extensions/src/main/java/com/powsybl/iidm/network/extensions/{TwoWindingsTransformerToBeEstimated,ThreeWindingsTransformerToBeEstimated}.java` | as-is | unchanged |
| `powsybl_core.iidm.hvdc` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{HvdcLine,HvdcConverterStation}.java` | as-is | unchanged |
| `powsybl_core.iidm.hvdc.ac_dc_converters` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{AcDcConverter,VoltageSourceConverter,LineCommutatedConverter}.java` | as-is | unchanged |
| `powsybl_core.iidm.hvdc.hvdc_line` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/HvdcLine.java` | as-is | unchanged |
| `powsybl_core.iidm.hvdc.lcc_converter_station` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/LccConverterStation.java` | as-is | unchanged |
| `powsybl_core.iidm.hvdc.vsc_converter_station` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/VscConverterStation.java` | as-is | unchanged |
| `powsybl_core.iidm.injections` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Injection.java` and subtypes | as-is | unchanged |
| `powsybl_core.iidm.injections.battery` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Battery.java` | as-is | unchanged |
| `powsybl_core.iidm.injections.generator` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Generator.java` | as-is | unchanged |
| `powsybl_core.iidm.injections.ground` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Ground.java` | as-is | unchanged |
| `powsybl_core.iidm.injections.load` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Load.java` | as-is | unchanged |
| `powsybl_core.iidm.injections.shunt_compensator` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/ShuntCompensator.java` | as-is | unchanged |
| `powsybl_core.iidm.injections.static_var_compensator` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/StaticVarCompensator.java` | as-is | unchanged |
| `powsybl_core.iidm.io` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{Importer,Importers,Exporter,Exporters}.java` | as-is | unchanged |
| `powsybl_core.iidm.io.dc_format_io` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/elements/dc/`, `iidm/iidm-serde/` (DcNode serde) | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats` | `cgmes/`, `ucte/`, `matpower/`, `psse/`, `ieee-cdf/`, `powerfactory/`, `iidm/iidm-serde/`, `ampl-converter/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.ampl` | `ampl-converter/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.biidm` | `iidm/iidm-serde/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.cgmes` | `cgmes/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.ieee_cdf` | `ieee-cdf/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.jiidm` | `iidm/iidm-serde/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.matpower` | `matpower/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.powerfactory` | `powerfactory/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.psse` | `psse/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.ucte` | `ucte/` | as-is | unchanged |
| `powsybl_core.iidm.io.exchange_formats.xiidm` | `iidm/iidm-serde/` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers` | exporter implementations below | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.ampl_exporter` | `ampl-converter/src/main/java/com/powsybl/ampl/converter/AmplExporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.biidm_exporter` | `iidm/iidm-serde/.../BinaryExporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.cgmes_exporter` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/CgmesExport.java` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.jiidm_exporter` | `iidm/iidm-serde/.../JsonExporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.matpower_exporter` | `matpower/matpower-converter/.../MatpowerExporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.psse_exporter` | `psse/psse-converter/.../PsseExporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.ucte_exporter` | `ucte/ucte-converter/.../UcteExporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.export_providers.xiidm_exporter` | `iidm/iidm-serde/.../XMLExporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.exporter_spi` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{Exporter,Exporters}.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers` | importer implementations below | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.biidm_importer` | `iidm/iidm-serde/src/main/java/com/powsybl/iidm/serde/BinaryImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.cgmes_importer` | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/CgmesImport.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.ieee_cdf_importer` | `ieee-cdf/ieee-cdf-converter/src/main/java/com/powsybl/ieeecdf/converter/IeeeCdfImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.jiidm_importer` | `iidm/iidm-serde/src/main/java/com/powsybl/iidm/serde/JsonImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.matpower_importer` | `matpower/matpower-converter/src/main/java/com/powsybl/matpower/converter/MatpowerImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.powerfactory_importer` | `powerfactory/powerfactory-converter/src/main/java/com/powsybl/powerfactory/converter/PowerFactoryImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.psse_importer` | `psse/psse-converter/src/main/java/com/powsybl/psse/converter/PsseImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.ucte_importer` | `ucte/ucte-converter/src/main/java/com/powsybl/ucte/converter/UcteImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.import_providers.xiidm_importer` | `iidm/iidm-serde/src/main/java/com/powsybl/iidm/serde/XMLImporter.java` | as-is | unchanged |
| `powsybl_core.iidm.io.importer_spi` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{Importer,Importers}.java` | as-is | unchanged |
| `powsybl_core.iidm.io.network_read_write` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Network.java` (`read`, `write`) | as-is | unchanged |
| `powsybl_core.iidm.io.provider_discovery` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{Importers,Exporters}.java` (ServiceLoader) | as-is | unchanged |
| `powsybl_core.iidm.limits_and_control` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{OperationalLimits,LoadingLimits,ReactiveLimits,AutomationSystem}.java` | as-is | unchanged |
| `powsybl_core.iidm.limits_and_control.automation_system` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{AutomationSystem,OverloadManagementSystem}.java` | as-is | unchanged |
| `powsybl_core.iidm.limits_and_control.operational_limits` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{OperationalLimits,LoadingLimits}.java` | as-is | unchanged |
| `powsybl_core.iidm.limits_and_control.reactive_limits` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/ReactiveLimits.java` | as-is | unchanged |
| `powsybl_core.iidm.network` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Network.java` | as-is | unchanged |
| `powsybl_core.iidm.topology` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{Substation,VoltageLevel,Bus,BusbarSection,Switch,Area}.java` | as-is | unchanged |
| `powsybl_core.iidm.topology.area` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{Area,AreaBoundary}.java` | as-is | unchanged |
| `powsybl_core.iidm.topology.bus` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Bus.java` | as-is | unchanged |
| `powsybl_core.iidm.topology.busbar_section` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/BusbarSection.java` | as-is | unchanged |
| `powsybl_core.iidm.topology.substation` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Substation.java` | as-is | unchanged |
| `powsybl_core.iidm.topology.switch` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/Switch.java` | as-is | unchanged |
| `powsybl_core.iidm.topology.topology_views` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/VoltageLevel.java` | as-is | unchanged |
| `powsybl_core.iidm.topology.voltage_level` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/VoltageLevel.java` | as-is | unchanged |
| `powsybl_core.iidm.transformers` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{TwoWindingsTransformer,ThreeWindingsTransformer,RatioTapChanger,PhaseTapChanger}.java` | as-is | unchanged |
| `powsybl_core.iidm.transformers.phase_tap_changer` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/PhaseTapChanger.java` | as-is | unchanged |
| `powsybl_core.iidm.transformers.ratio_tap_changer` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/RatioTapChanger.java` | as-is | unchanged |
| `powsybl_core.iidm.transformers.three_windings_transformer` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/ThreeWindingsTransformer.java` | as-is | unchanged |
| `powsybl_core.iidm.transformers.two_windings_transformer` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/TwoWindingsTransformer.java` | as-is | unchanged |
| `powsybl_core.iidm.variants` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{NetworkFactory,VariantManager,NetworkListener,NetworkEventRecorder}.java` | as-is | unchanged |
| `powsybl_core.iidm.variants.network_event_recorder` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/NetworkEventRecorder.java` (+ `events/*NetworkEvent.java`) | as-is | unchanged |
| `powsybl_core.iidm.variants.network_factory` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/NetworkFactory.java` | as-is | unchanged |
| `powsybl_core.iidm.variants.network_listener` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/NetworkListener.java` | as-is | unchanged |
| `powsybl_core.iidm.variants.variant_manager` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/VariantManager.java` | as-is | unchanged |
| `powsybl_core.loadflow_api` | `loadflow/loadflow-api/src/main/java/com/powsybl/loadflow/{LoadFlow,LoadFlowProvider}.java` | as-is | unchanged |
| `powsybl_core.math` | `math/src/main/java/com/powsybl/math/matrix/MatrixFactory.java` | as-is | unchanged |
| `powsybl_core.security_analysis_api` | `security-analysis/security-analysis-api/src/main/java/com/powsybl/security/{SecurityAnalysis,SecurityAnalysisProvider}.java` | as-is | unchanged |
| `powsybl_core.sensitivity_api` | `sensitivity-analysis-api/src/main/java/com/powsybl/sensitivity/{SensitivityAnalysis,SensitivityAnalysisProvider}.java` | as-is | unchanged |
| `powsybl_core.study_contracts` | `loadflow/loadflow-api`, `security-analysis/security-analysis-api`, `sensitivity-analysis-api`, `action-api`, `contingency/contingency-api` | as-is | unchanged |
| `powsybl_core.study_contracts.action_definitions` | `action-api/src/main/java/com/powsybl/action/{SwitchAction,TerminalsConnectionAction,GeneratorAction,LoadAction,HvdcAction}.java` | as-is | unchanged |
| `powsybl_core.study_contracts.common_study_parameters` | `.../LoadFlowParameters.java`, `.../SecurityAnalysisParameters.java`, `.../SensitivityAnalysisParameters.java` | as-is | unchanged |
| `powsybl_core.study_contracts.contingencies_and_contexts` | `contingency/contingency-api/.../{Contingency,ContingencyContext}.java` | as-is | unchanged |
| `powsybl_core.study_contracts.modified_result_parameters` | `security-analysis/security-analysis-api/src/main/java/com/powsybl/security/SecurityAnalysisParameters.java` (`ModifiedMonitoredElementsParameters`) | as-is | unchanged |
| `powsybl_core.study_contracts.operator_strategies` | `contingency/contingency-api/src/main/java/com/powsybl/contingency/strategy/OperatorStrategy.java` | as-is | unchanged |
| `powsybl_core.study_contracts.selected_loading_limits` | `iidm/iidm-api/src/main/java/com/powsybl/iidm/network/{LoadingLimits,OperationalLimitsGroup}.java` | as-is | unchanged |
| `powsybl_core.study_contracts.state_monitors` | `security-analysis/security-analysis-api/src/main/java/com/powsybl/security/monitor/StateMonitor.java` | as-is | unchanged |
| `powsybl_open_loadflow` | `pom.xml` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines` | `src/main/java/com/powsybl/openloadflow/ac/AcloadFlowEngine.java, dc/DcLoadFlowEngine.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.ac_dc_network_parameter` | `src/main/java/com/powsybl/openloadflow/OpenLoadFlowParameters.java (acDcNetwork)` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.ac_dc_newton_raphson` | `src/main/java/com/powsybl/openloadflow/ac/equations/dcnetwork/, ac/solver/NewtonRaphson.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.ac_load_flow_engine` | `src/main/java/com/powsybl/openloadflow/ac/AcloadFlowEngine.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.ac_solver_factory` | `src/main/java/com/powsybl/openloadflow/ac/solver/AcSolverFactory.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.dc_load_flow_engine` | `src/main/java/com/powsybl/openloadflow/dc/DcLoadFlowEngine.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.fast_decoupled` | `src/main/java/com/powsybl/openloadflow/ac/solver/FastDecoupled.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.load_flow_request` | `src/main/java/com/powsybl/openloadflow/OpenLoadFlowParameters.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.newton_krylov` | `src/main/java/com/powsybl/openloadflow/ac/solver/NewtonKrylov.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.newton_raphson` | `src/main/java/com/powsybl/openloadflow/ac/solver/NewtonRaphson.java` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_loadflow_engines.outer_loop_chain` | `src/main/java/com/powsybl/openloadflow/ac/outerloop/` | as-is | unchanged |
| `powsybl_open_loadflow.ac_dc_result_mapping` | `src/main/java/com/powsybl/openloadflow/network/impl/ (updateState)` | as-is | unchanged |
| `powsybl_open_loadflow.contingency_propagation` | `src/main/java/com/powsybl/openloadflow/network/impl/PropagatedContingency.java, ContingencyTripping.java` | as-is | unchanged |
| `powsybl_open_loadflow.coupled_ac_dc_lf_network` | `src/main/java/com/powsybl/openloadflow/network/LfNetwork.java (DC buses, converters)` | as-is | unchanged |
| `powsybl_open_loadflow.equation_toolkit` | `src/main/java/com/powsybl/openloadflow/equations/` | as-is | unchanged |
| `powsybl_open_loadflow.equation_toolkit.ac_equation_builder` | `src/main/java/com/powsybl/openloadflow/ac/equations/{AcEquationSystemCreator,AcEquationSystemUpdater}.java` | as-is | unchanged |
| `powsybl_open_loadflow.equation_toolkit.dc_equation_builder` | `src/main/java/com/powsybl/openloadflow/dc/equations/{DcEquationSystemCreator,DcEquationSystemUpdater}.java` | as-is | unchanged |
| `powsybl_open_loadflow.equation_toolkit.equation_system` | `src/main/java/com/powsybl/openloadflow/equations/{EquationSystem,EquationArray,VariableSet,TargetVector,StateVector,JacobianMatrix}.java` | as-is | unchanged |
| `powsybl_open_loadflow.lf_network` | `src/main/java/com/powsybl/openloadflow/network/LfNetwork.java` | as-is | unchanged |
| `powsybl_open_loadflow.lf_network_adapter` | `src/main/java/com/powsybl/openloadflow/network/impl/` | as-is | unchanged |
| `powsybl_open_loadflow.lf_network_adapter.ac_dc_loader` | `src/main/java/com/powsybl/openloadflow/network/impl/{LfNetworkLoaderImpl,LfDcBusImpl}.java` | as-is | unchanged |
| `powsybl_open_loadflow.lf_network_adapter.network_loader` | `src/main/java/com/powsybl/openloadflow/network/impl/{Networks,LfNetworkLoaderImpl}.java` | as-is | unchanged |
| `powsybl_open_loadflow.network_cache` | `src/main/java/com/powsybl/openloadflow/NetworkCache.java` | as-is | unchanged |
| `powsybl_open_loadflow.network_cache.ac_fast_restart` | `src/main/java/com/powsybl/openloadflow/AcLoadFlowFromCache.java` | as-is | unchanged |
| `powsybl_open_loadflow.network_cache.change_classifier` | `src/main/java/com/powsybl/openloadflow/NetworkCache.java` (`CacheUpdateStatus`), `ac/AcLoadFlowContext.java` (`networkUpdated`) - description corrected to main | as-is | unchanged |
| `powsybl_open_loadflow.network_cache.iidm_change_events` | `src/main/java/com/powsybl/openloadflow/NetworkCache.java` (`Entry extends DefaultNetworkListener`, `onUpdate`) | as-is | unchanged |
| `powsybl_open_loadflow.network_cache.network_cache_entry` | `src/main/java/com/powsybl/openloadflow/NetworkCache.java` (`Entry`: working/tmp variant, `pause`) | as-is | unchanged |
| `powsybl_open_loadflow.open_loadflow_provider` | `src/main/java/com/powsybl/openloadflow/OpenLoadFlowProvider.java` | as-is | unchanged |
| `powsybl_open_loadflow.open_security_provider` | `src/main/java/com/powsybl/openloadflow/sa/OpenSecurityAnalysisProvider.java` | as-is | unchanged |
| `powsybl_open_loadflow.open_sensitivity_provider` | `src/main/java/com/powsybl/openloadflow/sensi/OpenSensitivityAnalysisProvider.java` | as-is | unchanged |
| `powsybl_open_loadflow.security_analysis_engines` | `src/main/java/com/powsybl/openloadflow/sa/{AcSecurityAnalysis,DcSecurityAnalysis,WoodburyDcSecurityAnalysis}.java` | as-is | unchanged |
| `powsybl_open_loadflow.sensitivity_engines` | `src/main/java/com/powsybl/openloadflow/sensi/{AcSensitivityAnalysis,DcSensitivityAnalysis}.java` | as-is | unchanged |
| `powsybl_open_loadflow.state_and_result_mapping` | `src/main/java/com/powsybl/openloadflow/network/impl/ (updateState), sa/, sensi/` | as-is | unchanged |
| `powsybl_open_loadflow.state_and_result_mapping.study_result_mapping` | `src/main/java/com/powsybl/openloadflow/sa/AbstractSecurityAnalysis.java` | as-is | unchanged |
| `powsybl_open_loadflow.study_execution` | `src/main/java/com/powsybl/openloadflow/sa/` | as-is | unchanged |
| `powsybl_open_loadflow.study_execution.lf_actions_and_strategies` | `src/main/java/com/powsybl/openloadflow/network/action/LfAction.java, LfOperatorStrategy` | as-is | unchanged |
| `powsybl_open_loadflow.study_execution.limit_violation_evaluator` | `src/main/java/com/powsybl/openloadflow/sa/LimitViolationManager.java` | as-is | unchanged |
| `powsybl_open_loadflow.study_execution.post_action_state` | `src/main/java/com/powsybl/openloadflow/sa/AbstractSecurityAnalysis.java` | as-is | unchanged |
| `powsybl_open_loadflow.study_execution.post_contingency_state` | `src/main/java/com/powsybl/openloadflow/sa/AbstractSecurityAnalysis.java` | as-is | unchanged |
| `powsybl_open_loadflow.study_execution.pre_contingency_state` | `src/main/java/com/powsybl/openloadflow/sa/AbstractSecurityAnalysis.java` | as-is | unchanged |
| `powsybl_open_loadflow.study_execution.provider_parameter_extensions` | `src/main/java/com/powsybl/openloadflow/OpenLoadFlowParameters.java, sa/OpenSecurityAnalysisParameters.java, sensi/OpenSensitivityAnalysisParameters.java` | as-is | unchanged |
| `pypowsybl` | `pyproject.toml`, `pypowsybl/` | as-is | unchanged |
| `pypowsybl.ac_dc_opf` | `pypowsybl/opf/` | as-is | unchanged |
| `pypowsybl.dataframe_mappers` | `java/pypowsybl/src/main/java/com/powsybl/dataframe/{network/NetworkDataframes,AbstractDataframeMapper}.java` | as-is | unchanged |
| `pypowsybl.dataframe_views` | `pypowsybl/utils/, cpp/pypowsybl-cpp/bindings.cpp` | as-is | unchanged |
| `pypowsybl.dc_dataframes` | `pypowsybl/network/impl/network.py (DC getters)` | as-is | unchanged |
| `pypowsybl.java_bindings` | `java/pypowsybl/src/main/java/com/powsybl/python/` | as-is | unchanged |
| `pypowsybl.java_bindings.analysis_c_functions` | `java/pypowsybl/src/main/java/com/powsybl/python/{loadflow/LoadFlowCFunctions,security/SecurityAnalysisCFunctions,sensitivity/SensitivityAnalysisCFunctions}.java` | as-is | unchanged |
| `pypowsybl.java_bindings.network_c_functions` | `java/pypowsybl/src/main/java/com/powsybl/python/network/NetworkCFunctions.java` | as-is | unchanged |
| `pypowsybl.measurement_and_observability_dataframes` | `java/pypowsybl/src/main/java/com/powsybl/dataframe/network/extensions/{MeasurementsDataframeProvider,BranchObservabilityDataframeProvider,InjectionObservabilityDataframeProvider}.java` | as-is | unchanged |
| `pypowsybl.native_image_bridge` | `cpp/powsybl-cpp/powsybl-cpp.{h,cpp} (PowsyblCaller, GraalVmGuard)` | as-is | unchanged |
| `pypowsybl.native_image_bridge.native_parameter_abi` | `cpp/powsybl-cpp/, java/pypowsybl/src/main/java/com/powsybl/python/commons/` | as-is | unchanged |
| `pypowsybl.pandas_study_results` | `pypowsybl/{security,sensitivity}/` | as-is | unchanged |
| `pypowsybl.pybind_extension` | `cpp/pypowsybl-cpp/{CMakeLists.txt,bindings.cpp}` | as-is | unchanged |
| `pypowsybl.python_api` | `pypowsybl/` | as-is | unchanged |
| `pypowsybl.python_network` | `pypowsybl/network/impl/network.py (`_handle`)` | as-is | unchanged |
| `pypowsybl.python_study_parameters` | `pypowsybl/{loadflow,security,sensitivity}/` | as-is | unchanged |
| `pypowsybl_bundled_services` | `java/pypowsybl/pom.xml` dependencies | as-is | unchanged |
| `pypowsybl_bundled_services.core_iidm_and_formats` | `java/pypowsybl/pom.xml`: powsybl-iidm-*, powsybl-cgmes-*, converters | as-is | unchanged |
| `pypowsybl_bundled_services.dynamic_and_diagram_services` | `java/pypowsybl/pom.xml`: powsybl-dynawo-*, powsybl-dynaflow, powsybl-single-line-diagram-*, powsybl-network-area-diagram | as-is | unchanged |
| `pypowsybl_bundled_services.open_loadflow_services` | `java/pypowsybl/pom.xml`: powsybl-open-loadflow | as-is | unchanged |
| `pypowsybl_bundled_services.operational_study_services` | `java/pypowsybl/pom.xml`: open-rao-*, powsybl-shortcircuit-api, powsybl-flow-decomposition, powsybl-glsk-document-ucte | as-is | unchanged |
| `pypowsybl_bundled_services.optimization_and_reac_services` | `java/pypowsybl/pom.xml`: powsybl-open-reac; pyoptinterface (opf) | as-is | unchanged |
| `pypowsybl_capability_bundle` | `pypowsybl/` packages | as-is | unchanged |
| `pypowsybl_capability_bundle.dynamic_and_visualization` | `pypowsybl/dynamic/, network area / single-line diagram functions` | as-is | unchanged |
| `pypowsybl_capability_bundle.network_and_steady_state` | `pypowsybl/{network,loadflow,security,sensitivity}/` | as-is | unchanged |
| `pypowsybl_capability_bundle.operational_studies` | `pypowsybl/{rao,shortcircuit,flowdecomposition,glsk}/` | as-is | unchanged |
| `pypowsybl_capability_bundle.optimization_and_reac` | `pypowsybl/{opf,voltage_initializer}/` | as-is | unchanged |
| `study_configuration_sources` | `commons/.../config/PlatformConfig.java`, JSON parameter serde (no code element of its own) | as-is | unchanged |
| `powsybl_core.cgmes.cgmes_diff_export` | CgmesDiffExport: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_diff_export` |
| `powsybl_core.cgmes.cgmes_diff_import` | CgmesDiffImport: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_diff_import` |
| `powsybl_core.cgmes.cgmes_object_dump` | CgmesObjectDump: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_object_dump` |
| `powsybl_core.cgmes.cgmes_triple_store_loader` | CgmesTripleStoreLoader: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_triple_store_loader` |
| `powsybl_core.cgmes.change_translator` | CgmesChangeTranslator, IidmStateView: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.change_translator` |
| `powsybl_core.cgmes.diff_update_store` | DiffUpdateStoreBuilder: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.diff_update_store` |
| `powsybl_core.cgmes.difference_model` | CgmesStatement, DifferenceModelSet (cgmes-model `diff/`): absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.difference_model` |
| `powsybl_core.cgmes.difference_model_parser` | DifferenceModelParser: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.difference_model_parser` |
| `powsybl_core.cgmes.difference_sink` | DifferenceSink, DifferenceModelWriter: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.difference_sink` |
| `powsybl_core.cgmes.direct_eq_applier` | DirectEqApplier, CgmesLimitIndex: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.direct_eq_applier` |
| `powsybl_core.cgmes.fast_route_capabilities` | FastRouteCapabilities, DiffSubjectResolver: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.fast_route_capabilities` |
| `powsybl_core.cgmes.partial_ssh_export` | PartialSshExport: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.partial_ssh_export` |
| `powsybl_core.cgmes.rdfdb` | module `cgmes/cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb` |
| `powsybl_core.cgmes.rdfdb.checkpoint` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.checkpoint` |
| `powsybl_core.cgmes.rdfdb.diff_update_planner` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.diff_update_planner` |
| `powsybl_core.cgmes.rdfdb.graph_fetcher` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.graph_fetcher` |
| `powsybl_core.cgmes.rdfdb.graph_uploader` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.graph_uploader` |
| `powsybl_core.cgmes.rdfdb.model_catalog` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.model_catalog` |
| `powsybl_core.cgmes.rdfdb.rdf_database_config` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.rdf_database_config` |
| `powsybl_core.cgmes.rdfdb.rdf_db_connection` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.rdf_db_connection` |
| `powsybl_core.cgmes.rdfdb.rdf_db_diff_source` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.rdf_db_diff_source` |
| `powsybl_core.cgmes.rdfdb.rdf_db_difference_sink` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.rdf_db_difference_sink` |
| `powsybl_core.cgmes.rdfdb.rdf_db_materializer` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.rdf_db_materializer` |
| `powsybl_core.cgmes.rdfdb.rdf_db_network_loader` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.rdf_db_network_loader` |
| `powsybl_core.cgmes.rdfdb.rdf_db_provenance` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.rdf_db_provenance` |
| `powsybl_core.cgmes.rdfdb.snapshot_catalog` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.snapshot_catalog` |
| `powsybl_core.cgmes.rdfdb.timesteps` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.timesteps` |
| `powsybl_core.cgmes.rdfdb.triple_diff_calculator` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.triple_diff_calculator` |
| `powsybl_core.cgmes.rdfdb.variant_binding` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.variant_binding` |
| `powsybl_core.cgmes.rdfdb.variant_scope` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.variant_scope` |
| `powsybl_core.cgmes.rdfdb.variant_updater` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.variant_updater` |
| `powsybl_core.cgmes.rdfdb.version_graph` | `cgmes/cgmes-rdfdb/...`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb.version_graph` |
| `powsybl_core.cgmes.rdfdb_schema` | metadata graph schema of `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb_schema` |
| `powsybl_core.cgmes.rdfdb_schema.named_graph` | schema of `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb_schema.named_graph` |
| `powsybl_core.cgmes.rdfdb_schema.pdb_catalog` | schema of `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb_schema.pdb_catalog` |
| `powsybl_core.cgmes.rdfdb_schema.pdb_snapshot` | schema of `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb_schema.pdb_snapshot` |
| `powsybl_core.cgmes.rdfdb_schema.pdb_timestep_root` | schema of `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb_schema.pdb_timestep_root` |
| `powsybl_core.cgmes.rdfdb_schema.scenario_meta_graph` | schema of `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb_schema.scenario_meta_graph` |
| `powsybl_core.cgmes.rdfdb_schema.stored_model` | schema of `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.cgmes_rdfdb_schema.stored_model` |
| `powsybl_core.cgmes.triple_store_diff_applier` | TripleStoreDiffApplier: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.triple_store_diff_applier` |
| `powsybl_core.cgmes.triple_store_network_loader` | TripleStoreNetworkLoader: absent upstream (no such file in `git ls-tree -r upstream-snapshot/main`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.triple_store_network_loader` |
| `powsybl_core.iidm.io.exchange_formats.difference_model_format` | no IEC 61970-552 reader or writer upstream (`git ls-tree -r upstream-snapshot/main | grep -i difference` finds no class) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.difference_model_format` |
| `powsybl_core.triple_store_sparql` | module `triple-store/triple-store-impl-rdf4j-sparql`: absent upstream (upstream has `triple-store-api`, `-impl-rdf4j`, `-test` only) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking.triple_store_sparql` |
| `powsybl_open_loadflow.network_cache.ac_cache_value` | `NetworkCache.AcLfValue`: not on main `bb19987a`; only on `origin/dc_lf_network_cache` (`d8110945`), `origin/refactor_network_cache` | proposal (OLF upstream PR branch, not main) | `proposed_olf_branches.ac_cache_value` |
| `powsybl_open_loadflow.network_cache.cache_input` | `NetworkCache.LfInput`: not on main `bb19987a`; only on `origin/dc_lf_network_cache` (`d8110945`), `origin/refactor_network_cache` | proposal (OLF upstream PR branch, not main) | `proposed_olf_branches.cache_input` |
| `powsybl_open_loadflow.network_cache.dc_cache_value` | `NetworkCache.DcLfValue`: not on main `bb19987a`; only on `origin/dc_lf_network_cache` (`d8110945`), `origin/refactor_network_cache` | proposal (OLF upstream PR branch, not main) | `proposed_olf_branches.dc_cache_value` |
| `powsybl_open_loadflow.network_cache.dc_fast_restart` | `DcLoadFlowFromCache`: not on main `bb19987a`; only on `origin/dc_lf_network_cache` (`d8110945`), `origin/refactor_network_cache` | proposal (OLF upstream PR branch, not main) | `proposed_olf_branches.dc_fast_restart` |
| `powsybl_open_loadflow.study_execution.monitored_result_filter` | use of `ModifiedMonitoredElementsParameters`: not on main `bb19987a`; only on `origin/filter-monitored-results` | proposal (OLF upstream PR branch, not main) | `proposed_olf_branches.monitored_result_filter` |
| `pypowsybl.java_bindings.network_event_recorder_c_functions` | `NetworkEventRecorderCFunctions.java`: absent on `upstream/main` (`a23a5616`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_pypowsybl.network_event_recorder_c_functions` |
| `pypowsybl.java_bindings.network_event_recording` | `NetworkEventRecording.java`: absent on `upstream/main` (`a23a5616`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_pypowsybl.network_event_recording` |
| `pypowsybl.java_bindings.rdf_db_c_functions` | `RdfDbCFunctions.java`: absent on `upstream/main` (`a23a5616`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_pypowsybl.rdf_db_c_functions` |
| `pypowsybl.java_bindings.rdf_db_util` | `RdfDbUtil.java`: absent on `upstream/main` (`a23a5616`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_pypowsybl.rdf_db_util` |
| `pypowsybl.python_event_recorder` | `pypowsybl/network/impl/network_event_recorder.py`: absent on `upstream/main` (`a23a5616`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_pypowsybl.python_event_recorder` |
| `pypowsybl.python_rdf_database` | `pypowsybl/network/impl/rdf_db.py`: absent on `upstream/main` (`a23a5616`) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_pypowsybl.python_rdf_database` |
| `rdf_database` | external SPARQL store; used only by `cgmes-rdfdb` / `triple-store-impl-rdf4j-sparql` (absent upstream) | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_rdf_database` |
| `rdf_database.scenario_a` | graph layout written by `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_rdf_database.scenario_a` |
| `rdf_database.scenario_b` | graph layout written by `cgmes-rdfdb`: absent upstream | proposal (diffstacking, local `feat/vibestacker`) | `proposed_diffstacking_rdf_database.scenario_b` |
| `rdf_database.store_checkpoint_copies` | declared in `model/proposals/model-registry/registry.c4` (already a proposal; extends the moved store) | proposal (model-registry, unchanged) | `proposed_diffstacking_rdf_database.store_checkpoint_copies` |
| `rdf_database.store_data_graphs` | declared in `model/proposals/model-registry/registry.c4` (already a proposal; extends the moved store) | proposal (model-registry, unchanged) | `proposed_diffstacking_rdf_database.store_data_graphs` |
| `rdf_database.store_diff_graphs` | declared in `model/proposals/model-registry/registry.c4` (already a proposal; extends the moved store) | proposal (model-registry, unchanged) | `proposed_diffstacking_rdf_database.store_diff_graphs` |
| `rdf_database.store_meta_graph` | declared in `model/proposals/model-registry/registry.c4` (already a proposal; extends the moved store) | proposal (model-registry, unchanged) | `proposed_diffstacking_rdf_database.store_meta_graph` |

## Unified mapping proposal (`model/proposals/unified-mapping/`)

The elements of the proposal exist on the powsybl-core branch `feat/diffstacking-unified-mapping` (worktree
`scratchpad/worktrees/powsybl-core-unified`), not upstream. "Before" is the start of the rework, `bb9cb0eb85`; "after"
is `p4-merged` = `20ce552c50` (identical in main code to the P5 head, which adds a test and the documentation page).

Model: `model/proposals/unified-mapping/mapping.c4`; views: `views/proposals/unified-mapping/before-after.c4` and
`document-views.c4`; exported diagrams: `exports/proposals/unified-mapping/`; overview:
[model/proposals/unified-mapping/README.md](model/proposals/unified-mapping/README.md).

| FQN | Repository | Source path(s) | Branch/commit reviewed | Last checked |
| --- | --- | --- | --- | --- |
| `proposed_unified_mapping.before_ssh_writers` | powsybl-core | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/SteadyStateHypothesisExport.java` | `feat/diffstacking-unified-mapping` / `bb9cb0eb85` | 2026-10-01 |
| `proposed_unified_mapping.before_probes` | powsybl-core | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/diff/{DiffProbes,DiffSubjectResolver}.java`, `.../export/{CgmesObjectDump,CgmesLimitIndex}.java` | `feat/diffstacking-unified-mapping` / `bb9cb0eb85` | 2026-10-01 |
| `proposed_unified_mapping.families` | powsybl-core | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/{AbstractFamily,SwitchAndTerminalFamily,LoadFamily,MachineFamily,TapChangerAndShuntFamily,RegulatingControlFamily,HvdcFamily,ControlAreaFamily,LimitFamily}.java` | `feat/diffstacking-unified-mapping` / `20ce552c50` | 2026-10-01 |
| `proposed_unified_mapping.plain_rows` | powsybl-core | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/mapping/{Block,PlainFamily,PlainRow,Quantity,LoadRows}.java` | `feat/diffstacking-unified-mapping` / `20ce552c50` | 2026-10-01 |
| `proposed_unified_mapping.property_sink` | powsybl-core | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/{CgmesPropertySink,CgmesPropertyBuffer}.java` | `feat/diffstacking-unified-mapping` / `20ce552c50` | 2026-10-01 |
| `proposed_unified_mapping.refusal` | powsybl-core | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/{Refusal,RegulationKeyRefusals}.java` | `feat/diffstacking-unified-mapping` / `20ce552c50` | 2026-10-01 |
| `proposed_unified_mapping.subject_index` | powsybl-core | `cgmes/cgmes-conversion/src/main/java/com/powsybl/cgmes/conversion/export/Families.java` | `feat/diffstacking-unified-mapping` / `20ce552c50` | 2026-10-01 |
| `proposed_unified_mapping.mapping_page` | powsybl-core | `docs/grid_exchange_formats/cgmes/mapping.md`, `cgmes/cgmes-conversion/src/test/java/com/powsybl/cgmes/conversion/export/MappingPageTest.java` | `feat/diffstacking-unified-mapping-p5` | 2026-10-01 |

Figures of `scratchpad/probes/count20/count.sh` (statements of a rule: lines of main code, comments removed, that
state it; code lines without import/package; types incl. nested), before = `bb9cb0eb85`
(`scratchpad/reports/20-P0-count-base.txt`), after = the P5 head against an archive of `bb9cb0eb85`
(`scratchpad/reports/20-p5-count.txt`); the phase figures in `scratchpad/reports/20-slices-decision.md`, `20-p1.md`,
`20-p2.md`, `20-p4.md`.

| Rule | Statements before | after |
| --- | ---: | ---: |
| `EnergyConsumer.p` (plain SSH value) | 13 (8 files) | 4 (3 files) |
| generator p/q sign | 19 (5 files) | 12 (5 files) |
| regulating terminal sign | 14 | 14 |
| unit multiplier literal | 5 (2 files) | 5 (1 file: `Quantity`) |
| local or remote target | 5 | 5 |
| **sum of the five rules** | **56** | **40** |
| `RegulatingControl.targetValue` | 6 | 5 |
| `RegulatingControl.enabled` | 6 | 5 |
| `TapChanger.step` | 14 | 11 |
| `VsConverter.targetQpcc` | 9 | 4 |
| `EquivalentInjection.regulationTarget` | 7 | 6 |
| `Switch.open` | 8 | 5 |

| Size (cgmes-model + cgmes-conversion main code) | before | after | delta |
| --- | ---: | ---: | ---: |
| code lines without import/package | 27 253 | 27 442 | +189 (+0.7 %) |
| top-level types | 213 | 225 | +12 |
| named types incl. nested | 338 | 355 | +17 |
| methods | 3 062 | 3 139 | +77 |

What the figures say: every rule that was stated in more than one path is stated fewer times or as often (the
regulating terminal sign and the local/remote decision stay where the importer states them), the full SSH export
states none of the eleven rules any more and the change dispatch (`CgmesChangeTranslator`) two (one line each for
`EnergyConsumer.p` and `Switch.open`, the keys it dispatches by), and the rework does not reduce the number of types or lines
(the "OUR FILES" figures of the reports are not comparable across phases: from P1 on they count the family classes).
The importer's update states its own rules except for loads, control areas and switches (P4); the rules stated in the
SPARQL update catalogue are counted as statements.
