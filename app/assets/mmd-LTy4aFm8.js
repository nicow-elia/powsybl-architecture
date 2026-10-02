var e=e=>{switch(e){case`index`:return'---\ntitle: "Powsybl: APIs, Python bindings, and providers"\n---\ngraph LR\n  subgraph Pypowsybl["`pypowsybl`"]\n    subgraph Pypowsybl.Java_bindings["`Java C entry points`"]\n      Pypowsybl.Java_bindings.Network_c_functions@{ shape: rectangle, label: "NetworkCFunctions" }\n      Pypowsybl.Java_bindings.Analysis_c_functions@{ shape: rectangle, label: "LoadFlowCFunctions, SecurityAnalysisCFunctions, SensitivityAnalysisCFunctions" }\n    end\n    Pypowsybl.Python_api@{ shape: rectangle, label: "Python domain APIs" }\n    Pypowsybl.Dataframe_mappers@{ shape: rectangle, label: "Java DataFrame mappers" }\n    Pypowsybl.Python_network@{ shape: rectangle, label: "pypowsybl.network.Network" }\n    Pypowsybl.Dataframe_views@{ shape: rectangle, label: "pandas DataFrame adapters" }\n    Pypowsybl.Pybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }\n    Pypowsybl.Native_image_bridge@{ shape: rectangle, label: "GraalVM native-image bridge" }\n  end\n  subgraph Powsybl_core["`powsybl-core`"]\n    Powsybl_core.Sensitivity_api@{ shape: rectangle, label: "Sensitivity Analysis API" }\n    Powsybl_core.Security_analysis_api@{ shape: rectangle, label: "Security Analysis API" }\n    Powsybl_core.Loadflow_api@{ shape: rectangle, label: "Load Flow API" }\n    Powsybl_core.Contingency_api@{ shape: rectangle, label: "Contingency API" }\n    subgraph Powsybl_core.Iidm["`IIDM API and extensions`"]\n      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }\n    end\n    Powsybl_core.Commons@{ shape: rectangle, label: "Commons services" }\n  end\n  subgraph Powsybl_open_loadflow["`powsybl-open-loadflow`"]\n    Powsybl_open_loadflow.Open_sensitivity_provider@{ shape: rectangle, label: "OpenSensitivityAnalysisProvider" }\n    Powsybl_open_loadflow.Open_security_provider@{ shape: rectangle, label: "OpenSecurityAnalysisProvider" }\n    Powsybl_open_loadflow.Contingency_propagation@{ shape: rectangle, label: "Contingency propagation" }\n    Powsybl_open_loadflow.Open_loadflow_provider@{ shape: rectangle, label: "OpenLoadFlowProvider" }\n    Powsybl_open_loadflow.Lf_network_adapter@{ shape: rectangle, label: "IIDM to LfNetwork adapter" }\n  end\n  Pypowsybl.Python_api -. "`creates and passes Network handles`" .-> Pypowsybl.Python_network\n  Pypowsybl.Python_api -. "`accepts and returns pandas DataFrames`" .-> Pypowsybl.Dataframe_views\n  Pypowsybl.Python_api -. "`calls the extension module`" .-> Pypowsybl.Pybind_extension\n  Pypowsybl.Python_network -. "`passes its opaque handle to`" .-> Pypowsybl.Pybind_extension\n  Pypowsybl.Dataframe_views -. "`marshals Dataframe and SeriesArray data through`" .-> Pypowsybl.Pybind_extension\n  Pypowsybl.Pybind_extension -. "`calls native-image entry points through`" .-> Pypowsybl.Native_image_bridge\n  Pypowsybl.Java_bindings.Network_c_functions -. "`binds Network handles`" .-> Powsybl_core.Iidm.Network\n  Pypowsybl.Dataframe_mappers -. "`maps IIDM elements through`" .-> Powsybl_core.Iidm.Network\n  Pypowsybl.Java_bindings.Analysis_c_functions -. "`binds load-flow APIs`" .-> Powsybl_core.Loadflow_api\n  Powsybl_core.Loadflow_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm.Network\n  Pypowsybl.Java_bindings.Analysis_c_functions -. "`binds sensitivity APIs`" .-> Powsybl_core.Sensitivity_api\n  Powsybl_core.Sensitivity_api -. "`returns through`" .-> Pypowsybl.Native_image_bridge\n  Powsybl_core.Sensitivity_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm.Network\n  Pypowsybl.Java_bindings.Analysis_c_functions -. "`binds security-analysis APIs`" .-> Powsybl_core.Security_analysis_api\n  Powsybl_core.Security_analysis_api -. "`returns through`" .-> Pypowsybl.Native_image_bridge\n  Powsybl_core.Security_analysis_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Security_analysis_api -. "`uses load-flow parameters`" .-> Powsybl_core.Loadflow_api\n  Powsybl_core.Sensitivity_api -. "`accepts contingency and action inputs`" .-> Powsybl_core.Contingency_api\n  Powsybl_core.Security_analysis_api -. "`obtains contingencies`" .-> Powsybl_core.Contingency_api\n  Pypowsybl.Native_image_bridge -. "`initializes Java services from`" .-> Powsybl_core.Commons\n  Powsybl_core.Loadflow_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n  Powsybl_core.Sensitivity_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n  Powsybl_core.Security_analysis_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n  Powsybl_core.Loadflow_api -. "`discovers and runs`" .-> Powsybl_open_loadflow.Open_loadflow_provider\n  Powsybl_core.Sensitivity_api -. "`discovers and runs`" .-> Powsybl_open_loadflow.Open_sensitivity_provider\n  Powsybl_open_loadflow.Open_sensitivity_provider -. "`uses the configured base-case load-flow provider`" .-> Powsybl_open_loadflow.Open_loadflow_provider\n  Powsybl_core.Security_analysis_api -. "`discovers and runs`" .-> Powsybl_open_loadflow.Open_security_provider\n  Powsybl_core.Iidm.Network -. "`is adapted by`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Open_loadflow_provider -. "`loads the computation network`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_core.Contingency_api -. "`is propagated by`" .-> Powsybl_open_loadflow.Contingency_propagation\n  Pypowsybl.Native_image_bridge -. "`forwards calls across the isolate to`" .-> Pypowsybl.Java_bindings\n  Pypowsybl.Java_bindings -. "`maps IIDM elements and result series through`" .-> Pypowsybl.Dataframe_mappers\n';case`cgmes_change_export`:return`---
title: "CGMES change export: partial SSH and difference models"
---
graph TB
  subgraph Powsybl_core["\`powsybl-core\`"]
    subgraph Powsybl_core.Iidm["\`IIDM API and extensions\`"]
      subgraph Powsybl_core.Iidm.Io["\`IIDM I/O and format providers\`"]
        subgraph Powsybl_core.Iidm.Io.Exchange_formats["\`Supported exchange formats\`"]
          Powsybl_core.Iidm.Io.Exchange_formats.Cgmes@{ shape: rectangle, label: "CGMES" }
        end
        subgraph Powsybl_core.Iidm.Io.Import_providers["\`Importer implementations\`"]
          Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer@{ shape: rectangle, label: "CgmesImport" }
        end
      end
      subgraph Powsybl_core.Iidm.Variants["\`Network lifecycle\`"]
        Powsybl_core.Iidm.Variants.Network_event_recorder@{ shape: rectangle, label: "NetworkEventRecorder" }
      end
      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }
    end
    subgraph Powsybl_core.Cgmes["\`CGMES conversion\`"]
      Powsybl_core.Cgmes.Triple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }
      Powsybl_core.Cgmes.Cgmes_model@{ shape: rectangle, label: "cgmes-model" }
    end
  end
  subgraph Proposed_diffstacking["\`Diffstacking in powsybl-core (proposal)\`"]
    Proposed_diffstacking.Partial_ssh_export@{ shape: rectangle, label: "PartialSshExport" }
    Proposed_diffstacking.Cgmes_diff_export@{ shape: rectangle, label: "CgmesDiffExport" }
    Proposed_diffstacking.Change_translator@{ shape: rectangle, label: "CgmesChangeTranslator + IidmStateView" }
    Proposed_diffstacking.Difference_model@{ shape: rectangle, label: "DifferenceModelSet / CgmesStatement" }
    Proposed_diffstacking.Difference_sink@{ shape: rectangle, label: "DifferenceSink / DifferenceModelWriter" }
    Proposed_diffstacking.Difference_model_format@{ shape: rectangle, label: "CGMES Difference Model" }
  end
  Powsybl_core.Iidm.Io.Exchange_formats.Cgmes -. "\`loads\`" .-> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer
  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "\`creates or updates\`" .-> Powsybl_core.Iidm.Network
  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "\`loads files into\`" .-> Powsybl_core.Cgmes.Triple_store
  Powsybl_core.Cgmes.Cgmes_model -. "\`would extend: defines the profiles and metadata of\`" .-> Proposed_diffstacking.Difference_model
  Powsybl_core.Iidm.Variants.Network_event_recorder -. "\`would be consumed as-is: provides change log to\`" .-> Proposed_diffstacking.Partial_ssh_export
  Proposed_diffstacking.Partial_ssh_export -. "\`would consume as-is: writes partial SSH\`" .-> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes
  Powsybl_core.Iidm.Variants.Network_event_recorder -. "\`would be consumed as-is: provides change log to\`" .-> Proposed_diffstacking.Cgmes_diff_export
  Proposed_diffstacking.Cgmes_diff_export -. "\`generates\`" .-> Proposed_diffstacking.Difference_model
  Proposed_diffstacking.Partial_ssh_export -. "\`map changes with\`" .-> Proposed_diffstacking.Change_translator
  Proposed_diffstacking.Cgmes_diff_export -. "\`map changes with\`" .-> Proposed_diffstacking.Change_translator
  Proposed_diffstacking.Change_translator -. "\`would consume as-is: reads current (and overlaid previous) state of\`" .-> Powsybl_core.Iidm.Network
  Proposed_diffstacking.Change_translator -. "\`emits EQ statements for limits and impedances into\`" .-> Proposed_diffstacking.Difference_model
  Proposed_diffstacking.Difference_model -. "\`is pushed to\`" .-> Proposed_diffstacking.Difference_sink
  Proposed_diffstacking.Difference_sink -. "\`writes one file per profile\`" .-> Proposed_diffstacking.Difference_model_format
`;case`cgmes_diff_import`:return'---\ntitle: "CGMES difference model import: the in-place fast route"\n---\ngraph TB\n  subgraph Powsybl_core["`powsybl-core`"]\n    subgraph Powsybl_core.Iidm["`IIDM API and extensions`"]\n      subgraph Powsybl_core.Iidm.Io["`IIDM I/O and format providers`"]\n        Powsybl_core.Iidm.Io.Exchange_formats@{ shape: rectangle, label: "Supported exchange formats" }\n        subgraph Powsybl_core.Iidm.Io.Import_providers["`Importer implementations`"]\n          Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer@{ shape: rectangle, label: "CgmesImport" }\n        end\n      end\n      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }\n    end\n    subgraph Powsybl_core.Cgmes["`CGMES conversion`"]\n      Powsybl_core.Cgmes.Conversion_update@{ shape: rectangle, label: "Conversion.update (SSH update workflow)" }\n      Powsybl_core.Cgmes.Triple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }\n    end\n  end\n  subgraph Proposed_diffstacking["`Diffstacking in powsybl-core (proposal)`"]\n    Proposed_diffstacking.Difference_model_format@{ shape: rectangle, label: "CGMES Difference Model" }\n    Proposed_diffstacking.Cgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }\n    Proposed_diffstacking.Triple_store_diff_applier@{ shape: rectangle, label: "TripleStoreDiffApplier" }\n    Proposed_diffstacking.Difference_model_parser@{ shape: rectangle, label: "DifferenceModelParser" }\n    Proposed_diffstacking.Fast_route_capabilities@{ shape: rectangle, label: "FastRouteCapabilities + DiffSubjectResolver" }\n    Proposed_diffstacking.Cgmes_object_dump@{ shape: rectangle, label: "CgmesObjectDump" }\n    Proposed_diffstacking.Diff_update_store@{ shape: rectangle, label: "DiffUpdateStoreBuilder" }\n    Proposed_diffstacking.Direct_eq_applier@{ shape: rectangle, label: "DirectEqApplier + CgmesLimitIndex" }\n    Proposed_diffstacking.Change_translator@{ shape: rectangle, label: "CgmesChangeTranslator + IidmStateView" }\n    Proposed_diffstacking.Difference_model@{ shape: rectangle, label: "DifferenceModelSet / CgmesStatement" }\n  end\n  Powsybl_core.Iidm.Io.Exchange_formats -. "`loads`" .-> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`creates or updates`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`loads files into`" .-> Powsybl_core.Cgmes.Triple_store\n  Proposed_diffstacking.Difference_model_format -. "`is read by`" .-> Proposed_diffstacking.Difference_model_parser\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`would extend: detects difference model files with`" .-> Proposed_diffstacking.Difference_model_parser\n  Proposed_diffstacking.Difference_model_parser -. "`produces`" .-> Proposed_diffstacking.Difference_model\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`would extend: delegates difference models to`" .-> Proposed_diffstacking.Cgmes_diff_import\n  Proposed_diffstacking.Cgmes_diff_import -. "`applies a difference in place, into a variant`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_import -. "`decides route with`" .-> Proposed_diffstacking.Fast_route_capabilities\n  Proposed_diffstacking.Fast_route_capabilities -. "`would consume as-is: resolves subjects and types in`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_import -. "`completes groups / checks reverse values with`" .-> Proposed_diffstacking.Cgmes_object_dump\n  Proposed_diffstacking.Cgmes_object_dump -. "`reuses export mapping of`" .-> Proposed_diffstacking.Change_translator\n  Proposed_diffstacking.Change_translator -. "`would consume as-is: reads current (and overlaid previous) state of`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Change_translator -. "`emits EQ statements for limits and impedances into`" .-> Proposed_diffstacking.Difference_model\n  Proposed_diffstacking.Cgmes_diff_import -. "`builds synthetic SSH update store`" .-> Proposed_diffstacking.Diff_update_store\n  Proposed_diffstacking.Diff_update_store -. "`would consume as-is: writes into`" .-> Powsybl_core.Cgmes.Triple_store\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`Importer.update: updates with`" .-> Powsybl_core.Cgmes.Conversion_update\n  Proposed_diffstacking.Cgmes_diff_import -. "`would extend: runs, scoped to the named equipment`" .-> Powsybl_core.Cgmes.Conversion_update\n  Powsybl_core.Cgmes.Conversion_update -. "`updates in place`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Cgmes.Conversion_update -. "`queries`" .-> Powsybl_core.Cgmes.Triple_store\n  Proposed_diffstacking.Cgmes_diff_import -. "`applies EQ statements with`" .-> Proposed_diffstacking.Direct_eq_applier\n  Proposed_diffstacking.Direct_eq_applier -. "`would consume as-is: sets impedances and limits on`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Triple_store_diff_applier -. "`would consume as-is: replaces property values in`" .-> Powsybl_core.Cgmes.Triple_store\n';case`cgmes_diff_import_fast_route`:return`---
title: "Applying a CGMES difference model in place, step by step"
---
graph LR
  Powsybl_coreIidmIoImport_providersCgmes_importer@{ shape: rectangle, label: "CgmesImport" }
  Proposed_diffstackingDifference_model_parser@{ shape: rectangle, label: "DifferenceModelParser" }
  Proposed_diffstackingDifference_model@{ shape: rectangle, label: "DifferenceModelSet / CgmesStatement" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Proposed_diffstackingFast_route_capabilities@{ shape: rectangle, label: "FastRouteCapabilities + DiffSubjectResolver" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  Proposed_diffstackingCgmes_object_dump@{ shape: rectangle, label: "CgmesObjectDump" }
  Proposed_diffstackingChange_translator@{ shape: rectangle, label: "CgmesChangeTranslator + IidmStateView" }
  Proposed_diffstackingDiff_update_store@{ shape: rectangle, label: "DiffUpdateStoreBuilder" }
  Powsybl_coreCgmesTriple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }
  Powsybl_coreCgmesConversion_update@{ shape: rectangle, label: "Conversion.update (SSH update workflow)" }
  Proposed_diffstackingDirect_eq_applier@{ shape: rectangle, label: "DirectEqApplier + CgmesLimitIndex" }
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`reads the first elements of every file of the data source\`" .-> Proposed_diffstackingDifference_model_parser
  Proposed_diffstackingDifference_model_parser -. "\`parses the document into forward and reverse statements\`" .-> Proposed_diffstackingDifference_model
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`hands over the difference models and the import parameters\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_diff_import -. "\`asks whether every property is one an update query reads\`" .-> Proposed_diffstackingFast_route_capabilities
  Proposed_diffstackingFast_route_capabilities -. "\`resolves every subject to an object and a CIM class\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_diff_import -. "\`asks for the properties a touched consistency group is missing\`" .-> Proposed_diffstackingCgmes_object_dump
  Proposed_diffstackingCgmes_object_dump -. "\`probes the export mapping with a synthetic change\`" .-> Proposed_diffstackingChange_translator
  Proposed_diffstackingChange_translator -. "\`reads the current value\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_diff_import -. "\`hands over the completed, typed objects\`" .-> Proposed_diffstackingDiff_update_store
  Proposed_diffstackingDiff_update_store -. "\`loads a synthetic partial SSH document\`" .-> Powsybl_coreCgmesTriple_store
  Proposed_diffstackingCgmes_diff_import -. "\`runs the update, restricted to the equipment the difference names\`" .-> Powsybl_coreCgmesConversion_update
  Powsybl_coreCgmesConversion_update -. "\`runs the update queries\`" .-> Powsybl_coreCgmesTriple_store
  Powsybl_coreCgmesConversion_update -. "\`sets the new values and registers the difference as the model of its profile\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_diff_import -. "\`hands over the equipment statements no update query reads\`" .-> Proposed_diffstackingDirect_eq_applier
  Proposed_diffstackingDirect_eq_applier -. "\`sets the impedances and the voltage level limits, and syncs the CGMES 2.4.15 normal values\`" .-> Powsybl_coreIidmNetwork
`;case`cgmes_loading_split`:return'---\ntitle: "CGMES loading split in two: files to a database, database to a network"\n---\ngraph LR\n  subgraph Proposed_diffstacking["`Diffstacking in powsybl-core (proposal)`"]\n    subgraph Proposed_diffstacking.Cgmes_rdfdb["`cgmes-rdfdb`"]\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config@{ shape: rectangle, label: "RdfDatabase" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink@{ shape: rectangle, label: "RdfDbDifferenceSink / RdfDbExport" }\n      Proposed_diffstacking.Cgmes_rdfdb.Checkpoint@{ shape: rectangle, label: "Checkpoint" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance@{ shape: rectangle, label: "RdfDbProvenance" }\n      Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner@{ shape: rectangle, label: "DiffUpdatePlanner" }\n      Proposed_diffstacking.Cgmes_rdfdb.Variant_updater@{ shape: rectangle, label: "VariantUpdater + VariantBulkLoader" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection@{ shape: rectangle, label: "RdfDbConnection" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }\n      Proposed_diffstacking.Cgmes_rdfdb.Version_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Variant_scope@{ shape: rectangle, label: "VariantScope" }\n      Proposed_diffstacking.Cgmes_rdfdb.Model_catalog@{ shape: rectangle, label: "ModelCatalog (metadata graph per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher@{ shape: rectangle, label: "GraphFetcher + GraphCache" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source@{ shape: rectangle, label: "RdfDbDiffSource + StatementCodec" }\n      Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Variant_binding@{ shape: rectangle, label: "VariantBinding" }\n      Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader@{ shape: rectangle, label: "GraphUploader" }\n      Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator@{ shape: rectangle, label: "TripleDiffCalculator" }\n      Proposed_diffstacking.Cgmes_rdfdb.Timesteps@{ shape: rectangle, label: "Timesteps + SnapshotRef" }\n    end\n    Proposed_diffstacking.Cgmes_triple_store_loader@{ shape: rectangle, label: "CgmesTripleStoreLoader" }\n    Proposed_diffstacking.Triple_store_network_loader@{ shape: rectangle, label: "TripleStoreNetworkLoader" }\n    Proposed_diffstacking.Triple_store_sparql@{ shape: rectangle, label: "TripleStoreRDF4JSparql" }\n  end\n  subgraph Powsybl_core["`powsybl-core`"]\n    subgraph Powsybl_core.Iidm["`IIDM API and extensions`"]\n      subgraph Powsybl_core.Iidm.Io["`IIDM I/O and format providers`"]\n        subgraph Powsybl_core.Iidm.Io.Import_providers["`Importer implementations`"]\n          Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer@{ shape: rectangle, label: "CgmesImport" }\n        end\n      end\n      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }\n    end\n    subgraph Powsybl_core.Cgmes["`CGMES conversion`"]\n      Powsybl_core.Cgmes.Triple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }\n    end\n  end\n  subgraph Proposed_diffstacking_rdf_database["`SPARQL 1.1 graph database`"]\n    Proposed_diffstacking_rdf_database.Scenario_a@{ shape: rectangle, label: "Scenario \\"2016-01-01\\"" }\n    Proposed_diffstacking_rdf_database.Scenario_b@{ shape: rectangle, label: "Scenario \\"2016-01-02\\"" }\n    Proposed_diffstacking_rdf_database.Store_meta_graph@{ shape: rectangle, label: "Metadata graph per scenario" }\n    Proposed_diffstacking_rdf_database.Store_checkpoint_copies@{ shape: rectangle, label: "Checkpoint copies" }\n    Proposed_diffstacking_rdf_database.Store_data_graphs@{ shape: rectangle, label: "Immutable data graphs" }\n    Proposed_diffstacking_rdf_database.Store_diff_graphs@{ shape: rectangle, label: "Forward / reverse diff graphs" }\n  end\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`creates or updates`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`loads files into`" .-> Powsybl_core.Cgmes.Triple_store\n  Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -. "`reads files with (CgmesModelTripleStore.read delegates, parallelism 1)`" .-> Proposed_diffstacking.Cgmes_triple_store_loader\n  Proposed_diffstacking.Cgmes_triple_store_loader -. "`writes contexts to`" .-> Powsybl_core.Cgmes.Triple_store\n  Proposed_diffstacking.Triple_store_network_loader -. "`creates or updates`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Triple_store_network_loader -. "`converts through CgmesImport.convert / update`" .-> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -. "`takes TripleStoreOptions from`" .-> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -. "`uploads a data source with`" .-> Proposed_diffstacking.Cgmes_triple_store_loader\n  Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher -. "`fills local MemoryStore`" .-> Powsybl_core.Cgmes.Triple_store\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`converts fetched graphs with`" .-> Proposed_diffstacking.Triple_store_network_loader\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`parses the instance files of a root into a scratch store with`" .-> Proposed_diffstacking.Cgmes_triple_store_loader\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config -. "`is opened into`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -. "`registers uploaded full models in`" .-> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`fetches the scenario with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -. "`base graphs (cached)`" .-> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`records the origin as`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`fetches and composes the chain with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`plans NOOP | DIFF | FULL`" .-> Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`rebuilds the target with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`plans and materialises a snapshot with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`dispatches an opted-in variant update or a bulk load to`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_updater\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance -. "`holds one per bound variant; a NetworkListener keeps them in step with clone, overwrite and remove`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`checks base / linear rule`" .-> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`a versioned export targets a snapshot of`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`writes one history per variant inside`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`writes a new version through (snapshot node in the same request)`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink\n  Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner -. "`chain query`" .-> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -. "`fetches the chain with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`every difference of every accepted path, in one request`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`the first snapshot of a day, converted once`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`uploads the instance files of a root with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`ingests a timestep from files with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`resolves labels and versions with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Timesteps\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`resolves the address in`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -. "`asks what to fold from`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`one multi-side chain query: the target and every candidate source`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_scope -. "`swaps the identity of, and captures it back`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`applies inside`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope\n  Proposed_diffstacking.Cgmes_triple_store_loader -. "`uploads N-Triples per graph (GSP PUT)`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -. "`opens scenario stores on`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`queries the server directly in remote mode`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`guarded SPARQL UPDATE, GSP PUT of graphs`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`plan query; Checkpoint COPY on the server`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking_rdf_database.Store_meta_graph -. "`indexes`" .-> Proposed_diffstacking_rdf_database.Store_data_graphs\n  Proposed_diffstacking_rdf_database.Store_meta_graph -. "`indexes`" .-> Proposed_diffstacking_rdf_database.Store_diff_graphs\n  Proposed_diffstacking_rdf_database.Store_checkpoint_copies -. "`folds`" .-> Proposed_diffstacking_rdf_database.Store_diff_graphs\n  Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher -. "`parallel GSP GET`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`one guarded SPARQL UPDATE (graphs + metadata)`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Model_catalog -. "`reads and writes the metadata graph of one scenario`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source -. "`fetch forward/reverse graphs`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`one plan query: UNION of both ends, pdb:parent* to the root`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -. "`COPY, three replace operations per difference, header rewrite, then the metadata`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader -. "`one immutable graph per instance file`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Triple_store_sparql -. "`SPARQL protocol + Graph Store Protocol`" .-> Proposed_diffstacking_rdf_database\n';case`rdfdb_fetch_performance`:return`---
title: "Loading a scenario out of the database, step by step"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_connection@{ shape: rectangle, label: "RdfDbConnection" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdbGraph_fetcher@{ shape: rectangle, label: "GraphFetcher + GraphCache" }
  Powsybl_coreCgmesTriple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }
  Proposed_diffstackingTriple_store_network_loader@{ shape: rectangle, label: "TripleStoreNetworkLoader" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_provenance@{ shape: rectangle, label: "RdfDbProvenance" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`asks for the graphs of the scenario\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_connection
  Proposed_diffstackingCgmes_rdfdbRdf_db_connection -. "\`lists the named graphs under the scenario prefix\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`hands over the graph names\`" .-> Proposed_diffstackingCgmes_rdfdbGraph_fetcher
  Proposed_diffstackingCgmes_rdfdbGraph_fetcher -. "\`four parallel GET requests, Accept application/n-triples\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbGraph_fetcher -. "\`adds each finished graph in one transaction, single writer\`" .-> Powsybl_coreCgmesTriple_store
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`converts the filled store\`" .-> Proposed_diffstackingTriple_store_network_loader
  Proposed_diffstackingTriple_store_network_loader -. "\`runs the unchanged CGMES query catalogs\`" .-> Powsybl_coreCgmesTriple_store
  Proposed_diffstackingTriple_store_network_loader -. "\`creates the network\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`records database, scenario and graphs on the network\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
`;case`rdfdb_upload`:return`---
title: "Uploading CGMES files into a scenario"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbRdf_db_connection@{ shape: rectangle, label: "RdfDbConnection" }
  Proposed_diffstackingCgmes_triple_store_loader@{ shape: rectangle, label: "CgmesTripleStoreLoader" }
  Proposed_diffstackingTriple_store_sparql@{ shape: rectangle, label: "TripleStoreRDF4JSparql" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_connection -. "\`hands over the data source and the scenario store\`" .-> Proposed_diffstackingCgmes_triple_store_loader
  Proposed_diffstackingCgmes_triple_store_loader -. "\`reads each instance file into the store\`" .-> Proposed_diffstackingTriple_store_sparql
  Proposed_diffstackingTriple_store_sparql -. "\`PUT one graph as N-Triples, several files in parallel\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_triple_store_loader -. "\`asks whether the model already carries a boundary\`" .-> Proposed_diffstackingTriple_store_sparql
  Proposed_diffstackingTriple_store_sparql -. "\`modelProfiles query, restricted to the scenario\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_triple_store_loader -. "\`reads the boundary data source if it does not\`" .-> Proposed_diffstackingTriple_store_sparql
`;case`rdfdb_diff_roundtrip`:return`---
title: "A change recorded on one network, applied to another, through the database"
---
graph LR
  Powsybl_coreIidmVariantsNetwork_event_recorder@{ shape: rectangle, label: "NetworkEventRecorder" }
  Proposed_diffstackingCgmes_diff_export@{ shape: rectangle, label: "CgmesDiffExport" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink@{ shape: rectangle, label: "RdfDbDifferenceSink / RdfDbExport" }
  Proposed_diffstackingCgmes_rdfdbModel_catalog@{ shape: rectangle, label: "ModelCatalog (metadata graph per scenario)" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbDiff_update_planner@{ shape: rectangle, label: "DiffUpdatePlanner" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source@{ shape: rectangle, label: "RdfDbDiffSource + StatementCodec" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  Powsybl_coreIidmVariantsNetwork_event_recorder -. "\`hands over the recorded changes\`" .-> Proposed_diffstackingCgmes_diff_export
  Proposed_diffstackingCgmes_diff_export -. "\`one difference model per profile\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -. "\`which model does it supersede, and is that model still free\`" .-> Proposed_diffstackingCgmes_rdfdbModel_catalog
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -. "\`one guarded INSERT ... WHERE into scenario S: forward graph, reverse graph, metadata node\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -. "\`the sender is now at the difference it wrote\`" .-> Proposed_diffstackingCgmes_diff_export
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`the consumer asks how to reach the head of S\`" .-> Proposed_diffstackingCgmes_rdfdbDiff_update_planner
  Proposed_diffstackingCgmes_rdfdbDiff_update_planner -. "\`one chain query for every profile\`" .-> Proposed_diffstackingCgmes_rdfdbModel_catalog
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`fetch the differences on the path\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
  Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source -. "\`one query over all forward and reverse graphs\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`the folded difference, applied in place\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_diff_import -. "\`updates the consumer network\`" .-> Powsybl_coreIidmNetwork
`;case`rdfdb_update_decision`:return`---
title: "How an update of an unversioned scenario decides: nothing, a difference, or a rebuild"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_provenance@{ shape: rectangle, label: "RdfDbProvenance" }
  Proposed_diffstackingCgmes_rdfdbDiff_update_planner@{ shape: rectangle, label: "DiffUpdatePlanner" }
  Proposed_diffstackingCgmes_rdfdbModel_catalog@{ shape: rectangle, label: "ModelCatalog (metadata graph per scenario)" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }
  Proposed_diffstackingCgmes_rdfdbGraph_fetcher@{ shape: rectangle, label: "GraphFetcher + GraphCache" }
  Proposed_diffstackingTriple_store_network_loader@{ shape: rectangle, label: "TripleStoreNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`is the network at the target scenario? if not, reload that scenario - no query sent\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`which stored model is the network at, per profile\`" .-> Proposed_diffstackingCgmes_rdfdbDiff_update_planner
  Proposed_diffstackingCgmes_rdfdbDiff_update_planner -. "\`chain of the target and of the current model, one query\`" .-> Proposed_diffstackingCgmes_rdfdbModel_catalog
  Proposed_diffstackingCgmes_rdfdbDiff_update_planner -. "\`NOOP, or a path forwards or backwards, or FULL with reasons\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`canApplyInPlace: does the importer accept the folded difference\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_diff_import -. "\`DIFF_APPLIED: the network handed in is updated\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`FULL_RELOAD: materialise the target instead\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -. "\`base graphs of the scenario, from the cache when warm\`" .-> Proposed_diffstackingCgmes_rdfdbGraph_fetcher
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -. "\`applyToGraph: the folded chain, on the local store\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -. "\`the unchanged conversion, on data that is now the target version\`" .-> Proposed_diffstackingTriple_store_network_loader
`;case`rdfdb_versioning_schema`:return'---\ntitle: "What one scenario looks like inside the database"\n---\ngraph TB\n  subgraph Proposed_diffstackingCgmes_rdfdb["`cgmes-rdfdb`"]\n    Proposed_diffstackingCgmes_rdfdb.Checkpoint@{ shape: rectangle, label: "Checkpoint" }\n    Proposed_diffstackingCgmes_rdfdb.Version_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }\n    Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }\n    Proposed_diffstackingCgmes_rdfdb.Graph_uploader@{ shape: rectangle, label: "GraphUploader" }\n  end\n  subgraph Proposed_diffstackingCgmes_rdfdb_schema["`cgmes-rdfdb metadata schema`"]\n    Proposed_diffstackingCgmes_rdfdb_schema.Scenario_meta_graph@{ shape: rectangle, label: "scenario metadata graph <sc>/meta" }\n    Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot@{ shape: rectangle, label: "pdb:Snapshot" }\n    Proposed_diffstackingCgmes_rdfdb_schema.Pdb_timestep_root@{ shape: rectangle, label: "timestep root (pdb:TimestepEdge)" }\n    Proposed_diffstackingCgmes_rdfdb_schema.Stored_model@{ shape: rectangle, label: "md:FullModel / dm:DifferenceModel node" }\n    Proposed_diffstackingCgmes_rdfdb_schema.Pdb_catalog@{ shape: rectangle, label: "pdb:Catalog" }\n    Proposed_diffstackingCgmes_rdfdb_schema.Named_graph@{ shape: rectangle, label: "immutable named graph" }\n  end\n  Proposed_diffstackingCgmes_rdfdb_schema.Scenario_meta_graph -. "`one per scenario (base timestep, offset)`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_catalog\n  Proposed_diffstackingCgmes_rdfdb_schema.Scenario_meta_graph -. "`contains (never cross-scenario)`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot\n  Proposed_diffstackingCgmes_rdfdb_schema.Scenario_meta_graph -. "`contains`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Stored_model\n  Proposed_diffstackingCgmes_rdfdb_schema.Pdb_timestep_root -. "`its label is read in the offset of`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_catalog\n  Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot -. "`pdb:timestepRoot`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_timestep_root\n  Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot -. "`pdb:member / pdb:state / pdb:full`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Stored_model\n  Proposed_diffstackingCgmes_rdfdb_schema.Stored_model -. "`pdb:graph / pdb:forwardGraph / pdb:reverseGraph`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Named_graph\n  Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog -. "`pins a new timestep to the base chain`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_timestep_root\n  Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog -. "`writes and reads`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot\n  Proposed_diffstackingCgmes_rdfdb.Version_graph -. "`walks pdb:parent of`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot\n  Proposed_diffstackingCgmes_rdfdb.Version_graph -. "`resolves the address in`" .-> Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstackingCgmes_rdfdb.Checkpoint -. "`copies and folds`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Named_graph\n  Proposed_diffstackingCgmes_rdfdb.Checkpoint -. "`asks what to fold from`" .-> Proposed_diffstackingCgmes_rdfdb.Version_graph\n  Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog -. "`uploads the instance files of a root with`" .-> Proposed_diffstackingCgmes_rdfdb.Graph_uploader\n  Proposed_diffstackingCgmes_rdfdb.Graph_uploader -. "`writes`" .-> Proposed_diffstackingCgmes_rdfdb_schema.Named_graph\n';case`rdfdb_version_navigation`:return`---
title: "Reaching a version: one query, then differences or a rebuild"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_provenance@{ shape: rectangle, label: "RdfDbProvenance" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source@{ shape: rectangle, label: "RdfDbDiffSource + StatementCodec" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }
  Proposed_diffstackingCgmes_rdfdbGraph_fetcher@{ shape: rectangle, label: "GraphFetcher + GraphCache" }
  Proposed_diffstackingTriple_store_network_loader@{ shape: rectangle, label: "TripleStoreNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`bring this network to (scenario, timestep, version)\`" .-> Proposed_diffstackingCgmes_rdfdbVersion_graph
  Proposed_diffstackingCgmes_rdfdbVersion_graph -. "\`which snapshot is the network at, and of which scenario\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
  Proposed_diffstackingCgmes_rdfdbVersion_graph -. "\`the plan query: both chains in one request\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbVersion_graph -. "\`NOOP, DIFF with the path, or FULL with the reasons\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`DIFF: every difference of the path, in one request\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`one composed difference per profile, applied or reverted in place\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`FULL: build the snapshot instead\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -. "\`the nearest full graph of each profile, cached\`" .-> Proposed_diffstackingCgmes_rdfdbGraph_fetcher
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -. "\`the unchanged conversion, on data that is now that version\`" .-> Proposed_diffstackingTriple_store_network_loader
`;case`rdfdb_checkpoint`:return`---
title: "Folding a chain into full graphs, on the database"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbCheckpoint@{ shape: rectangle, label: "Checkpoint" }
  Proposed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot@{ shape: rectangle, label: "pdb:Snapshot" }
  Proposed_diffstackingCgmes_rdfdbCheckpoint -. "\`which profiles does this snapshot reach by differences, and from where\`" .-> Proposed_diffstackingCgmes_rdfdbVersion_graph
  Proposed_diffstackingCgmes_rdfdbCheckpoint -. "\`COPY the full graph of each touched profile\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbCheckpoint -. "\`per difference: set the forward keys, drop the reverse-only keys, drop the reverse-only objects\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbCheckpoint -. "\`rewrite the md:FullModel header of the copy to the state model\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbCheckpoint -. "\`pdb:full and hasFull true on the existing snapshot\`" .-> Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot
`;case`rdfdb_timesteps`:return`---
title: "A day: the base chain, its timesteps and the versions inside them"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink@{ shape: rectangle, label: "RdfDbDifferenceSink / RdfDbExport" }
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }
  Proposed_diffstackingCgmes_rdfdbTimesteps@{ shape: rectangle, label: "Timesteps + SnapshotRef" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root@{ shape: rectangle, label: "timestep root (pdb:TimestepEdge)" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -. "\`a recorder at the base head writes (scenario, 08:30, 1.0)\`" .-> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`resolve '8:30' against the base day and offset of this scenario\`" .-> Proposed_diffstackingCgmes_rdfdbTimesteps
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`which base version do these differences supersede (the pin)\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`one guarded request: the root, its members, a TimestepEdge to the pin\`" .-> Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`a client at 08:30 asks for 08:45\`" .-> Proposed_diffstackingCgmes_rdfdbVersion_graph
  Proposed_diffstackingCgmes_rdfdbVersion_graph -. "\`undo the 08:30 differences, apply the 08:45 ones: one composed update\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
`;case`rdfdb_timestep_ingestion`:return`---
title: "Ingesting a day from its files"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }
  Proposed_diffstackingCgmes_triple_store_loader@{ shape: rectangle, label: "CgmesTripleStoreLoader" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }
  Proposed_diffstackingCgmes_rdfdbGraph_fetcher@{ shape: rectangle, label: "GraphFetcher + GraphCache" }
  Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator@{ shape: rectangle, label: "TripleDiffCalculator" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink@{ shape: rectangle, label: "RdfDbDifferenceSink / RdfDbExport" }
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`parse the files of this timestep into a scratch store\`" .-> Proposed_diffstackingCgmes_triple_store_loader
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`is the boundary still the scenario's own?\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`the parent state as triples, on a local store\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -. "\`its full graphs, from the cache after the first timestep of the day\`" .-> Proposed_diffstackingCgmes_rdfdbGraph_fetcher
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`compare EQ and SSH, graph against graph\`" .-> Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator
  Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator -. "\`one difference model per profile that moved\`" .-> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`the ordinary guarded write, as a timestep root or a version\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
`;case`rdfdb_variant_binding`:return`---
title: "A variant of a network standing for a snapshot"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbVariant_updater@{ shape: rectangle, label: "VariantUpdater + VariantBulkLoader" }
  Proposed_diffstackingCgmes_rdfdbVariant_scope@{ shape: rectangle, label: "VariantScope" }
  Proposed_diffstackingCgmes_rdfdbVariant_binding@{ shape: rectangle, label: "VariantBinding" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`bring variant '08:30' to (scenario, 08:30, 1.1)\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_updater
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`enter: lock the provenance, park the primary identity\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_scope
  Proposed_diffstackingCgmes_rdfdbVariant_scope -. "\`install this variant's models, case date and snapshot\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_binding
  Proposed_diffstackingCgmes_rdfdbVariant_scope -. "\`select the variant as the working one\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`apply the composed difference, variantSafeOnly\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_rdfdbVariant_scope -. "\`close: capture what the operation made the network say\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_binding
  Proposed_diffstackingCgmes_rdfdbVariant_scope -. "\`reinstall the primary identity, restore the working variant\`" .-> Powsybl_coreIidmNetwork
`;case`rdfdb_variants_bulk_load`:return`---
title: "A whole day as the variants of one network"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbVariant_updater@{ shape: rectangle, label: "VariantUpdater + VariantBulkLoader" }
  Proposed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source@{ shape: rectangle, label: "RdfDbDiffSource + StatementCodec" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  Proposed_diffstackingCgmes_rdfdbVariant_scope@{ shape: rectangle, label: "VariantScope" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_provenance@{ shape: rectangle, label: "RdfDbProvenance" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`loadVariants(scenario, version, 96 timesteps)\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_updater
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`one chains query: 96 sides in one request\`" .-> Proposed_diffstackingCgmes_rdfdbVersion_graph
  Proposed_diffstackingCgmes_rdfdbVersion_graph -. "\`UNION of the starts, pdb:parent* per side, details once per snapshot\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`the first snapshot becomes the network (no second plan query)\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`every difference of every accepted path, in one request\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`one cloneVariant for every target sourced from the primary\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`per target: apply its path inside its own scope\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_scope
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`one outcome per request: bound, or refused with reasons\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
`;case`rdfdb_variant_refusal_decision`:return`---
title: "Why a variant update refuses instead of reloading"
---
graph LR
  Proposed_diffstackingCgmes_rdfdbVariant_updater@{ shape: rectangle, label: "VariantUpdater + VariantBulkLoader" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_provenance@{ shape: rectangle, label: "RdfDbProvenance" }
  Proposed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`another scenario? refuse without a query\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`the path, with pdb:variantSafe on every step\`" .-> Proposed_diffstackingCgmes_rdfdbVersion_graph
  Proposed_diffstackingCgmes_rdfdbVersion_graph -. "\`a step the store says is unsafe: refuse before cloning or fetching\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_updater
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`otherwise: plan the composed difference with variantSafeOnly\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_diff_import -. "\`a statement whose IIDM target is shared: SLOW_REQUIRED with the reason\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_updater
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`remove the variant this call created; every variant is as it was\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`VARIANT_REFUSED with the reasons (or a separate network, if asked)\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
`;case`diffstacking_ipc`:return'---\ntitle: "Diffstacking IPC: Python clients exchanging grid states through the RDF database"\n---\ngraph LR\n  subgraph Pypowsybl["`pypowsybl`"]\n    Pypowsybl.Python_api@{ shape: rectangle, label: "Python domain APIs" }\n    Pypowsybl.Python_network@{ shape: rectangle, label: "pypowsybl.network.Network" }\n    Pypowsybl.Pybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }\n  end\n  subgraph Proposed_diffstacking_pypowsybl["`Diffstacking in pypowsybl (proposal)`"]\n    Proposed_diffstacking_pypowsybl.Python_event_recorder@{ shape: rectangle, label: "pypowsybl.network.NetworkEventRecorder" }\n    Proposed_diffstacking_pypowsybl.Rdf_db_util@{ shape: rectangle, label: "RdfDbUtil" }\n    Proposed_diffstacking_pypowsybl.Python_rdf_database@{ shape: rectangle, label: "pypowsybl.network.RdfDatabase" }\n  end\n  subgraph Proposed_diffstacking["`Diffstacking in powsybl-core (proposal)`"]\n    subgraph Proposed_diffstacking.Cgmes_rdfdb["`cgmes-rdfdb`"]\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config@{ shape: rectangle, label: "RdfDatabase" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink@{ shape: rectangle, label: "RdfDbDifferenceSink / RdfDbExport" }\n      Proposed_diffstacking.Cgmes_rdfdb.Checkpoint@{ shape: rectangle, label: "Checkpoint" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection@{ shape: rectangle, label: "RdfDbConnection" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance@{ shape: rectangle, label: "RdfDbProvenance" }\n      Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner@{ shape: rectangle, label: "DiffUpdatePlanner" }\n      Proposed_diffstacking.Cgmes_rdfdb.Variant_updater@{ shape: rectangle, label: "VariantUpdater + VariantBulkLoader" }\n      Proposed_diffstacking.Cgmes_rdfdb.Model_catalog@{ shape: rectangle, label: "ModelCatalog (metadata graph per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }\n      Proposed_diffstacking.Cgmes_rdfdb.Version_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Variant_scope@{ shape: rectangle, label: "VariantScope" }\n      Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher@{ shape: rectangle, label: "GraphFetcher + GraphCache" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source@{ shape: rectangle, label: "RdfDbDiffSource + StatementCodec" }\n      Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Variant_binding@{ shape: rectangle, label: "VariantBinding" }\n      Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader@{ shape: rectangle, label: "GraphUploader" }\n      Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator@{ shape: rectangle, label: "TripleDiffCalculator" }\n      Proposed_diffstacking.Cgmes_rdfdb.Timesteps@{ shape: rectangle, label: "Timesteps + SnapshotRef" }\n    end\n    Proposed_diffstacking.Cgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }\n    Proposed_diffstacking.Cgmes_diff_export@{ shape: rectangle, label: "CgmesDiffExport" }\n  end\n  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }\n  Pypowsybl.Python_api -. "`creates and passes Network handles`" .-> Pypowsybl.Python_network\n  Pypowsybl.Python_network -. "`would extend: creates (event_recorder())`" .-> Proposed_diffstacking_pypowsybl.Python_event_recorder\n  Pypowsybl.Python_api -. "`would extend: opens (connect_rdf_db / connect)`" .-> Proposed_diffstacking_pypowsybl.Python_rdf_database\n  Pypowsybl.Python_network -. "`[...]`" .-> Proposed_diffstacking_pypowsybl.Python_rdf_database\n  Proposed_diffstacking_pypowsybl.Python_event_recorder -. "`to_rdf_updates(db, scenario, version, timestep)`" .-> Proposed_diffstacking_pypowsybl.Python_rdf_database\n  Pypowsybl.Python_api -. "`calls the extension module`" .-> Pypowsybl.Pybind_extension\n  Pypowsybl.Python_network -. "`passes its opaque handle to`" .-> Pypowsybl.Pybind_extension\n  Proposed_diffstacking_pypowsybl.Python_event_recorder -. "`would extend: start/stop/export calls`" .-> Pypowsybl.Pybind_extension\n  Proposed_diffstacking_pypowsybl.Python_rdf_database -. "`would extend: upload, catalogue, load and update calls`" .-> Pypowsybl.Pybind_extension\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`builds from the option map`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`opens and uploads CGMES files through`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`load / update of one snapshot; another scenario is a full reload`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`RdfDbExport: recorder events become a snapshot of the base scenario`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`per scenario: resolves labels, putFull / putAsDiff, listings`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`checkpoint()`" .-> Proposed_diffstacking.Cgmes_rdfdb.Checkpoint\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`variantRows(network): what every variant stands for, plus the refusals of the last operation`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`identity(network, db, scenario, variant) and the per-variant exports run inside RdfDbProvenance.inVariant`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`loadVariants(scenario, requests) and update(..., targetVariant): a day as variants, or one variant moved`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_updater\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config -. "`is opened into`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -. "`registers uploaded full models in`" .-> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`fetches the scenario with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -. "`base graphs (cached)`" .-> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`records the origin as`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`fetches and composes the chain with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`plans NOOP | DIFF | FULL`" .-> Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`rebuilds the target with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`plans and materialises a snapshot with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`dispatches an opted-in variant update or a bulk load to`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_updater\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance -. "`holds one per bound variant; a NetworkListener keeps them in step with clone, overwrite and remove`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`checks base / linear rule`" .-> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`a versioned export targets a snapshot of`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`writes one history per variant inside`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`writes a new version through (snapshot node in the same request)`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink\n  Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner -. "`chain query`" .-> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -. "`fetches the chain with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`every difference of every accepted path, in one request`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`the first snapshot of a day, converted once`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`uploads the instance files of a root with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`ingests a timestep from files with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`resolves labels and versions with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Timesteps\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`resolves the address in`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -. "`asks what to fold from`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`one multi-side chain query: the target and every candidate source`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_scope -. "`swaps the identity of, and captures it back`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`applies inside`" .-> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope\n  Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator -. "`produces the DifferenceModel of`" .-> Proposed_diffstacking.Cgmes_diff_export\n  Proposed_diffstacking.Cgmes_diff_export -. "`DifferenceModelSet`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`applies composed diff in place`" .-> Proposed_diffstacking.Cgmes_diff_import\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -. "`applyToGraph on local store`" .-> Proposed_diffstacking.Cgmes_diff_import\n  Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -. "`applies with variantSafeOnly, or refuses with the reasons`" .-> Proposed_diffstacking.Cgmes_diff_import\n  Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher -. "`parallel GSP GET`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`one guarded SPARQL UPDATE (graphs + metadata)`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Model_catalog -. "`reads and writes the metadata graph of one scenario`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source -. "`fetch forward/reverse graphs`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`one plan query: UNION of both ends, pdb:parent* to the root`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -. "`COPY, three replace operations per difference, header rewrite, then the metadata`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader -. "`one immutable graph per instance file`" .-> Proposed_diffstacking_rdf_database\n';case`pypowsybl_change_export`:return`---
title: "pypowsybl: recording and exporting network changes"
---
graph LR
  subgraph Pypowsybl["\`pypowsybl\`"]
    Pypowsybl.Python_network@{ shape: rectangle, label: "pypowsybl.network.Network" }
    Pypowsybl.Java_bindingsNetwork_c_functions@{ shape: rectangle, label: "NetworkCFunctions" }
    Pypowsybl.Pybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }
    Pypowsybl.Native_image_bridge@{ shape: rectangle, label: "GraalVM native-image bridge" }
  end
  subgraph Proposed_diffstacking_pypowsybl["\`Diffstacking in pypowsybl (proposal)\`"]
    Proposed_diffstacking_pypowsybl.Python_event_recorder@{ shape: rectangle, label: "pypowsybl.network.NetworkEventRecorder" }
    Proposed_diffstacking_pypowsybl.Network_event_recorder_c_functions@{ shape: rectangle, label: "NetworkEventRecorderCFunctions" }
    Proposed_diffstacking_pypowsybl.Network_event_recording@{ shape: rectangle, label: "NetworkEventRecording" }
  end
  subgraph Powsybl_core["\`powsybl-core\`"]
    Powsybl_core.IidmVariantsNetwork_event_recorder@{ shape: rectangle, label: "NetworkEventRecorder" }
  end
  subgraph Proposed_diffstacking["\`Diffstacking in powsybl-core (proposal)\`"]
    Proposed_diffstacking.Partial_ssh_export@{ shape: rectangle, label: "PartialSshExport" }
    Proposed_diffstacking.Cgmes_diff_export@{ shape: rectangle, label: "CgmesDiffExport" }
    Proposed_diffstacking.Cgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  end
  Pypowsybl.Python_network -. "\`would extend: creates (event_recorder())\`" .-> Proposed_diffstacking_pypowsybl.Python_event_recorder
  Pypowsybl.Python_network -. "\`passes its opaque handle to\`" .-> Pypowsybl.Pybind_extension
  Proposed_diffstacking_pypowsybl.Python_event_recorder -. "\`would extend: start/stop/export calls\`" .-> Pypowsybl.Pybind_extension
  Pypowsybl.Pybind_extension -. "\`calls native-image entry points through\`" .-> Pypowsybl.Native_image_bridge
  Proposed_diffstacking_pypowsybl.Network_event_recorder_c_functions -. "\`delegates to\`" .-> Proposed_diffstacking_pypowsybl.Network_event_recording
  Proposed_diffstacking_pypowsybl.Network_event_recording -. "\`would consume as-is: records with\`" .-> Powsybl_core.IidmVariantsNetwork_event_recorder
  Proposed_diffstacking_pypowsybl.Network_event_recording -. "\`exports partial SSH through\`" .-> Proposed_diffstacking.Partial_ssh_export
  Powsybl_core.IidmVariantsNetwork_event_recorder -. "\`would be consumed as-is: provides change log to\`" .-> Proposed_diffstacking.Partial_ssh_export
  Proposed_diffstacking_pypowsybl.Network_event_recording -. "\`exports difference models through\`" .-> Proposed_diffstacking.Cgmes_diff_export
  Powsybl_core.IidmVariantsNetwork_event_recorder -. "\`would be consumed as-is: provides change log to\`" .-> Proposed_diffstacking.Cgmes_diff_export
  Pypowsybl.Java_bindingsNetwork_c_functions -. "\`would consume as-is: update_from_* reaches it transparently via CgmesImport.update\`" .-> Proposed_diffstacking.Cgmes_diff_import
`;case`pypowsybl_rdf_database`:return'---\ntitle: "pypowsybl: loading CGMES through an RDF database"\n---\ngraph LR\n  subgraph Pypowsybl["`pypowsybl`"]\n    Pypowsybl.Python_network@{ shape: rectangle, label: "pypowsybl.network.Network" }\n    Pypowsybl.Pybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }\n    Pypowsybl.Native_image_bridge@{ shape: rectangle, label: "GraalVM native-image bridge" }\n  end\n  subgraph Proposed_diffstacking_pypowsybl["`Diffstacking in pypowsybl (proposal)`"]\n    Proposed_diffstacking_pypowsybl.Python_event_recorder@{ shape: rectangle, label: "pypowsybl.network.NetworkEventRecorder" }\n    Proposed_diffstacking_pypowsybl.Rdf_db_c_functions@{ shape: rectangle, label: "RdfDbCFunctions" }\n    Proposed_diffstacking_pypowsybl.Python_rdf_database@{ shape: rectangle, label: "pypowsybl.network.RdfDatabase" }\n    Proposed_diffstacking_pypowsybl.Rdf_db_util@{ shape: rectangle, label: "RdfDbUtil" }\n  end\n  subgraph Proposed_diffstacking["`Diffstacking in powsybl-core (proposal)`"]\n    subgraph Proposed_diffstacking.Cgmes_rdfdb["`cgmes-rdfdb`"]\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config@{ shape: rectangle, label: "RdfDatabase" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }\n      Proposed_diffstacking.Cgmes_rdfdb.Checkpoint@{ shape: rectangle, label: "Checkpoint" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection@{ shape: rectangle, label: "RdfDbConnection" }\n      Proposed_diffstacking.Cgmes_rdfdb.Version_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }\n      Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink@{ shape: rectangle, label: "RdfDbDifferenceSink / RdfDbExport" }\n    end\n    Proposed_diffstacking.Triple_store_sparql@{ shape: rectangle, label: "TripleStoreRDF4JSparql" }\n  end\n  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }\n  Pypowsybl.Python_network -. "`would extend: creates (event_recorder())`" .-> Proposed_diffstacking_pypowsybl.Python_event_recorder\n  Pypowsybl.Python_network -. "`[...]`" .-> Proposed_diffstacking_pypowsybl.Python_rdf_database\n  Proposed_diffstacking_pypowsybl.Python_event_recorder -. "`to_rdf_updates(db, scenario, version, timestep)`" .-> Proposed_diffstacking_pypowsybl.Python_rdf_database\n  Pypowsybl.Python_network -. "`passes its opaque handle to`" .-> Pypowsybl.Pybind_extension\n  Proposed_diffstacking_pypowsybl.Python_event_recorder -. "`would extend: start/stop/export calls`" .-> Pypowsybl.Pybind_extension\n  Proposed_diffstacking_pypowsybl.Python_rdf_database -. "`would extend: upload, catalogue, load and update calls`" .-> Pypowsybl.Pybind_extension\n  Pypowsybl.Pybind_extension -. "`calls native-image entry points through`" .-> Pypowsybl.Native_image_bridge\n  Proposed_diffstacking_pypowsybl.Rdf_db_c_functions -. "`delegates to`" .-> Proposed_diffstacking_pypowsybl.Rdf_db_util\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`builds from the option map`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`opens and uploads CGMES files through`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config -. "`is opened into`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`load / update of one snapshot; another scenario is a full reload`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`per scenario: resolves labels, putFull / putAsDiff, listings`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`plans and materialises a snapshot with`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`resolves the address in`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`RdfDbExport: recorder events become a snapshot of the base scenario`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`writes a new version through (snapshot node in the same request)`" .-> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`a versioned export targets a snapshot of`" .-> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog\n  Proposed_diffstacking_pypowsybl.Rdf_db_util -. "`checkpoint()`" .-> Proposed_diffstacking.Cgmes_rdfdb.Checkpoint\n  Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -. "`asks what to fold from`" .-> Proposed_diffstacking.Cgmes_rdfdb.Version_graph\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -. "`opens scenario stores on`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -. "`queries the server directly in remote mode`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`guarded SPARQL UPDATE, GSP PUT of graphs`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`plan query; Checkpoint COPY on the server`" .-> Proposed_diffstacking.Triple_store_sparql\n  Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -. "`one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Version_graph -. "`one plan query: UNION of both ends, pdb:parent* to the root`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -. "`one guarded SPARQL UPDATE (graphs + metadata)`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -. "`COPY, three replace operations per difference, header rewrite, then the metadata`" .-> Proposed_diffstacking_rdf_database\n  Proposed_diffstacking.Triple_store_sparql -. "`SPARQL protocol + Graph Store Protocol`" .-> Proposed_diffstacking_rdf_database\n';case`pypowsybl_rdf_db_update_flow`:return`---
title: "update_from_rdf_db(db, scenario, version, timestep): noop | diff | full"
---
graph LR
  PypowsyblPython_network@{ shape: rectangle, label: "pypowsybl.network.Network" }
  PypowsyblPybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }
  Proposed_diffstacking_pypowsyblRdf_db_c_functions@{ shape: rectangle, label: "RdfDbCFunctions" }
  Proposed_diffstacking_pypowsyblRdf_db_util@{ shape: rectangle, label: "RdfDbUtil" }
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
  Proposed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source@{ shape: rectangle, label: "RdfDbDiffSource + StatementCodec" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }
  PypowsyblPython_network -. "\`update_network_from_rdf_db(network, db, scenario, version, timestep, ...)\`" .-> PypowsyblPybind_extension
  PypowsyblPybind_extension -. "\`through the native image bridge\`" .-> Proposed_diffstacking_pypowsyblRdf_db_c_functions
  Proposed_diffstacking_pypowsyblRdf_db_c_functions -. "\`checkScenario, timestepOrNull, RdfDbUpdateOptions\`" .-> Proposed_diffstacking_pypowsyblRdf_db_util
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`resolve(version, timestep) against this scenario base day\`" .-> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`update(network, db, SnapshotRef, options)\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`plan: one query; another scenario is FULL without a query\`" .-> Proposed_diffstackingCgmes_rdfdbVersion_graph
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`DIFF branch: fetch every difference of the path in one request\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
  Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source -. "\`composed difference per profile\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_diff_import -. "\`applied in place; route DIFF_APPLIED\`" .-> Proposed_diffstacking_pypowsyblRdf_db_util
  Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`FULL branch: base graphs of the target scenario plus the chain\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -. "\`a new Java Network; route FULL_RELOAD\`" .-> Proposed_diffstacking_pypowsyblRdf_db_util
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`UpdateOutcome handle\`" .-> PypowsyblPython_network
`;case`pypowsybl_rdf_db_export_flow`:return`---
title: "to_rdf_updates(db, scenario, version, timestep): recorder -> database snapshot"
---
graph LR
  Proposed_diffstacking_pypowsyblPython_event_recorder@{ shape: rectangle, label: "pypowsybl.network.NetworkEventRecorder" }
  PypowsyblPybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }
  Proposed_diffstacking_pypowsyblRdf_db_c_functions@{ shape: rectangle, label: "RdfDbCFunctions" }
  Proposed_diffstacking_pypowsyblRdf_db_util@{ shape: rectangle, label: "RdfDbUtil" }
  Proposed_diffstackingCgmes_diff_export@{ shape: rectangle, label: "CgmesDiffExport" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink@{ shape: rectangle, label: "RdfDbDifferenceSink / RdfDbExport" }
  Proposed_diffstacking_rdf_database@{ shape: rectangle, label: "SPARQL 1.1 graph database" }
  Proposed_diffstacking_pypowsyblPython_event_recorder -. "\`export_network_events_to_rdf_db(recorder, db, scenario, version, timestep, options)\`" .-> PypowsyblPybind_extension
  PypowsyblPybind_extension -. "\`through the native image bridge\`" .-> Proposed_diffstacking_pypowsyblRdf_db_c_functions
  Proposed_diffstacking_pypowsyblRdf_db_c_functions -. "\`reject the options the database decides; resolve the address\`" .-> Proposed_diffstacking_pypowsyblRdf_db_util
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`label-taking RdfDbExport.export(scenario, version, timestepText); core resolves the label against that scenario base day\`" .-> Proposed_diffstackingCgmes_diff_export
  Proposed_diffstackingCgmes_diff_export -. "\`DifferenceModelSet, one model per touched profile\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -. "\`one guarded SPARQL UPDATE\`" .-> Proposed_diffstacking_rdf_database
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -. "\`the stored models\`" .-> Proposed_diffstacking_pypowsyblRdf_db_util
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`model ids\`" .-> Proposed_diffstacking_pypowsyblPython_event_recorder
`;case`pypowsybl_rdf_db_variants_flow`:return`---
title: "from_rdf_db(timesteps=[...]): a day as the variants of one network"
---
graph LR
  PypowsyblPython_network@{ shape: rectangle, label: "pypowsybl.network.Network" }
  PypowsyblPybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }
  Proposed_diffstacking_pypowsyblRdf_db_c_functions@{ shape: rectangle, label: "RdfDbCFunctions" }
  Proposed_diffstacking_pypowsyblRdf_db_util@{ shape: rectangle, label: "RdfDbUtil" }
  Proposed_diffstackingCgmes_rdfdbSnapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog (per scenario)" }
  Proposed_diffstackingCgmes_rdfdbVariant_updater@{ shape: rectangle, label: "VariantUpdater + VariantBulkLoader" }
  Proposed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph (per scenario)" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_materializer@{ shape: rectangle, label: "RdfDbMaterializer" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source@{ shape: rectangle, label: "RdfDbDiffSource + StatementCodec" }
  Proposed_diffstackingCgmes_rdfdbVariant_scope@{ shape: rectangle, label: "VariantScope" }
  Proposed_diffstackingCgmes_rdfdbVariant_binding@{ shape: rectangle, label: "VariantBinding" }
  PypowsyblPython_network -. "\`load_network_variants_from_rdf_db(db, scenario, variant_ids, versions, timesteps, ...)\`" .-> PypowsyblPybind_extension
  PypowsyblPybind_extension -. "\`through the native image bridge\`" .-> Proposed_diffstacking_pypowsyblRdf_db_c_functions
  Proposed_diffstacking_pypowsyblRdf_db_c_functions -. "\`checkScenario; the three arrays become VariantRequests\`" .-> Proposed_diffstacking_pypowsyblRdf_db_util
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`resolve(version, timestep) per request, against this scenario base day\`" .-> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`loadVariants(db, scenario, requests, options)\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_updater
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`one chain query for every requested snapshot at once\`" .-> Proposed_diffstackingCgmes_rdfdbVersion_graph
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`the first requested snapshot, converted once; it becomes the network and its primary variant\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`every difference of every accepted path, in one request\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`per target: clone the nearest bound variant, then apply inside its scope\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_scope
  Proposed_diffstackingCgmes_rdfdbVariant_scope -. "\`the variant now stands for that snapshot\`" .-> Proposed_diffstackingCgmes_rdfdbVariant_binding
  Proposed_diffstackingCgmes_rdfdbVariant_updater -. "\`the network, with one variant per snapshot that was reached\`" .-> Proposed_diffstacking_pypowsyblRdf_db_util
  Proposed_diffstacking_pypowsyblRdf_db_util -. "\`one Java handle; the working variant is the primary\`" .-> PypowsyblPython_network
`;case`diffstacking_slow_route`:return`---
title: "Diffstacking: what happens to a difference the fast route refuses"
---
graph TB
  subgraph Powsybl_core["\`powsybl-core\`"]
    subgraph Powsybl_core.Iidm["\`IIDM API and extensions\`"]
      subgraph Powsybl_core.Iidm.Io["\`IIDM I/O and format providers\`"]
        Powsybl_core.Iidm.Io.Exchange_formats@{ shape: rectangle, label: "Supported exchange formats" }
      end
    end
    subgraph Powsybl_core.Cgmes["\`CGMES conversion\`"]
      Powsybl_core.Cgmes.Conversion_update@{ shape: rectangle, label: "Conversion.update (SSH update workflow)" }
      Powsybl_core.Cgmes.Triple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }
    end
  end
  Proposed_diffstacking_db_merge_fallback@{ shape: rectangle, label: "RDF database merge fallback (slow route without files)" }
  Proposed_diffstacking_opencgmes@{ shape: rectangle, label: "OpenCGMES (general difference model application)" }
  subgraph Proposed_diffstacking["\`Diffstacking in powsybl-core (proposal)\`"]
    Proposed_diffstacking.Cgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
    Proposed_diffstacking.Triple_store_diff_applier@{ shape: rectangle, label: "TripleStoreDiffApplier" }
    Proposed_diffstacking.Difference_model_format@{ shape: rectangle, label: "CGMES Difference Model" }
  end
  Proposed_diffstacking.Cgmes_diff_import -. "\`would extend: runs, scoped to the named equipment\`" .-> Powsybl_core.Cgmes.Conversion_update
  Proposed_diffstacking.Triple_store_diff_applier -. "\`would consume as-is: replaces property values in\`" .-> Powsybl_core.Cgmes.Triple_store
  Powsybl_core.Cgmes.Conversion_update -. "\`queries\`" .-> Powsybl_core.Cgmes.Triple_store
  Proposed_diffstacking_db_merge_fallback -. "\`would be chosen by the decision function of\`" .-> Proposed_diffstacking.Cgmes_diff_import
  Proposed_diffstacking_db_merge_fallback -. "\`would reuse as-is\`" .-> Proposed_diffstacking.Triple_store_diff_applier
  Proposed_diffstacking_db_merge_fallback -. "\`would reuse as-is\`" .-> Powsybl_core.Cgmes.Conversion_update
  Proposed_diffstacking_opencgmes -. "\`reads and writes the same format as\`" .-> Proposed_diffstacking.Difference_model_format
`;case`detailed_ac_dc_grid_lifecycle`:return`---
title: "Detailed AC-DC Grid: IIDM, Open Load Flow, and Python"
---
graph LR
  subgraph Powsybl_core["\`powsybl-core\`"]
    subgraph Powsybl_core.Iidm["\`IIDM API and extensions\`"]
      subgraph Powsybl_core.Iidm.Dc_grid["\`DC grid equipment\`"]
        Powsybl_core.Iidm.Dc_grid.Dc_node@{ shape: rectangle, label: "DcNode" }
        Powsybl_core.Iidm.Dc_grid.Dc_ground@{ shape: rectangle, label: "DcGround" }
        Powsybl_core.Iidm.Dc_grid.Dc_bus@{ shape: rectangle, label: "DcBus" }
        Powsybl_core.Iidm.Dc_grid.Dc_line@{ shape: rectangle, label: "DcLine" }
        Powsybl_core.Iidm.Dc_grid.Dc_switch@{ shape: rectangle, label: "DcSwitch" }
        Powsybl_core.Iidm.Dc_grid.Dc_connectivity@{ shape: rectangle, label: "DC connectivity and mutations" }
        Powsybl_core.Iidm.Dc_grid.Dc_terminal@{ shape: rectangle, label: "DcTerminal" }
      end
      subgraph Powsybl_core.Iidm.Io["\`IIDM I/O and format providers\`"]
        Powsybl_core.Iidm.Io.Dc_format_io@{ shape: rectangle, label: "DC-capable format I/O" }
      end
      subgraph Powsybl_core.Iidm.Hvdc["\`HVDC equipment\`"]
        Powsybl_core.Iidm.Hvdc.Ac_dc_converters@{ shape: rectangle, label: "IIDM AC/DC converters" }
      end
      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }
    end
  end
  subgraph Pypowsybl["\`pypowsybl\`"]
    Pypowsybl.Ac_dc_opf@{ shape: rectangle, label: "AC/DC OPF prototype" }
    Pypowsybl.Dc_dataframes@{ shape: rectangle, label: "Network DC DataFrames and mutation APIs" }
  end
  subgraph Powsybl_open_loadflow["\`powsybl-open-loadflow\`"]
    subgraph Powsybl_open_loadflow.Lf_network_adapter["\`IIDM to LfNetwork adapter\`"]
      Powsybl_open_loadflow.Lf_network_adapter.Ac_dc_loader@{ shape: rectangle, label: "IIDM to coupled LfNetwork loader" }
    end
    Powsybl_open_loadflow.Coupled_ac_dc_lf_network@{ shape: rectangle, label: "Coupled LfNetwork" }
    subgraph Powsybl_open_loadflow.Ac_dc_loadflow_engines["\`AC/DC load-flow engines\`"]
      Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_network_parameter@{ shape: rectangle, label: "acDcNetwork parameter" }
      Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_newton_raphson@{ shape: rectangle, label: "AC/DC Newton-Raphson execution" }
    end
    Powsybl_open_loadflow.Ac_dc_result_mapping@{ shape: rectangle, label: "IIDM state and Core result mapping" }
  end
  Powsybl_core.Iidm.Dc_grid.Dc_connectivity -. "\`changes the active topology of\`" .-> Powsybl_core.Iidm.Network
  Powsybl_core.Iidm.Dc_grid.Dc_terminal -. "\`connects DC topology through\`" .-> Powsybl_core.Iidm.Hvdc.Ac_dc_converters
  Powsybl_core.Iidm.Hvdc.Ac_dc_converters -. "\`maps converter controls and limits into\`" .-> Powsybl_open_loadflow.Lf_network_adapter.Ac_dc_loader
  Powsybl_open_loadflow.Lf_network_adapter.Ac_dc_loader -. "\`builds\`" .-> Powsybl_open_loadflow.Coupled_ac_dc_lf_network
  Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_network_parameter -. "\`selects\`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_newton_raphson
  Powsybl_open_loadflow.Coupled_ac_dc_lf_network -. "\`supplies coupled equations to\`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_newton_raphson
  Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_newton_raphson -. "\`produces converged state for\`" .-> Powsybl_open_loadflow.Ac_dc_result_mapping
  Powsybl_open_loadflow.Ac_dc_result_mapping -. "\`updates the shared Network\`" .-> Powsybl_core.Iidm.Network
  Pypowsybl.Dc_dataframes -. "\`reads and mutates through the native bridge\`" .-> Powsybl_core.Iidm.Network
  Pypowsybl.Ac_dc_opf -. "\`optimizes a separate model over\`" .-> Powsybl_core.Iidm.Network
  Pypowsybl.Ac_dc_opf -. "\`reads inputs and writes solved values through\`" .-> Pypowsybl.Dc_dataframes
  Powsybl_core.Iidm.Network -. "\`owns DC equipment\`" .-> Powsybl_core.Iidm.Hvdc
  Powsybl_core.Iidm.Io.Dc_format_io -. "\`constructs and serializes\`" .-> Powsybl_core.Iidm.Dc_grid
  Powsybl_core.Iidm.Dc_grid -. "\`maps the explicit DC topology into\`" .-> Powsybl_open_loadflow.Lf_network_adapter.Ac_dc_loader
`;case`contingency_and_corrective_action_flow`:return'---\ntitle: "Contingency and Corrective-Action State Flow"\n---\ngraph LR\n  subgraph Powsybl_core["`powsybl-core`"]\n    Powsybl_core.Security_analysis_api@{ shape: rectangle, label: "Security Analysis API" }\n    subgraph Powsybl_core.Study_contracts["`Study contracts`"]\n      Powsybl_core.Study_contracts.Contingencies_and_contexts@{ shape: rectangle, label: "Contingencies and contexts" }\n      Powsybl_core.Study_contracts.Action_definitions@{ shape: rectangle, label: "Action definitions" }\n      Powsybl_core.Study_contracts.Operator_strategies@{ shape: rectangle, label: "Operator strategies and conditions" }\n      Powsybl_core.Study_contracts.State_monitors@{ shape: rectangle, label: "StateMonitor definitions" }\n      Powsybl_core.Study_contracts.Selected_loading_limits@{ shape: rectangle, label: "Selected LoadingLimits" }\n    end\n  end\n  subgraph Powsybl_open_loadflow["`powsybl-open-loadflow`"]\n    Powsybl_open_loadflow.Contingency_propagation@{ shape: rectangle, label: "Contingency propagation" }\n    subgraph Powsybl_open_loadflow.Study_execution["`Study execution`"]\n      Powsybl_open_loadflow.Study_execution.Lf_actions_and_strategies@{ shape: rectangle, label: "LfAction and LfOperatorStrategy" }\n      Powsybl_open_loadflow.Study_execution.Pre_contingency_state@{ shape: rectangle, label: "Pre-contingency N state" }\n      Powsybl_open_loadflow.Study_execution.Post_contingency_state@{ shape: rectangle, label: "Post-contingency N-1 state" }\n      Powsybl_open_loadflow.Study_execution.Post_action_state@{ shape: rectangle, label: "Post-action state" }\n      Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator@{ shape: rectangle, label: "Limit violation evaluation" }\n    end\n    subgraph Powsybl_open_loadflow.State_and_result_mapping["`IIDM state and core-result mapping`"]\n      Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping@{ shape: rectangle, label: "Core study result mapping" }\n    end\n  end\n  Powsybl_core.Security_analysis_api -. "`accepts`" .-> Powsybl_core.Study_contracts.Contingencies_and_contexts\n  Powsybl_core.Security_analysis_api -. "`accepts`" .-> Powsybl_core.Study_contracts.Action_definitions\n  Powsybl_core.Security_analysis_api -. "`accepts`" .-> Powsybl_core.Study_contracts.Operator_strategies\n  Powsybl_core.Security_analysis_api -. "`accepts`" .-> Powsybl_core.Study_contracts.State_monitors\n  Powsybl_core.Study_contracts.Contingencies_and_contexts -. "`maps to`" .-> Powsybl_open_loadflow.Contingency_propagation\n  Powsybl_core.Study_contracts.Action_definitions -. "`maps to`" .-> Powsybl_open_loadflow.Study_execution.Lf_actions_and_strategies\n  Powsybl_core.Study_contracts.Operator_strategies -. "`maps to`" .-> Powsybl_open_loadflow.Study_execution.Lf_actions_and_strategies\n  Powsybl_core.Study_contracts.State_monitors -. "`selects output from`" .-> Powsybl_open_loadflow.Study_execution.Pre_contingency_state\n  Powsybl_core.Study_contracts.State_monitors -. "`selects output from`" .-> Powsybl_open_loadflow.Study_execution.Post_contingency_state\n  Powsybl_open_loadflow.Contingency_propagation -. "`applies outages for`" .-> Powsybl_open_loadflow.Study_execution.Post_contingency_state\n  Powsybl_open_loadflow.Study_execution.Pre_contingency_state -. "`provides the N baseline for`" .-> Powsybl_open_loadflow.Study_execution.Post_contingency_state\n  Powsybl_core.Study_contracts.State_monitors -. "`selects output from`" .-> Powsybl_open_loadflow.Study_execution.Post_action_state\n  Powsybl_open_loadflow.Study_execution.Lf_actions_and_strategies -. "`selects and applies curative actions for`" .-> Powsybl_open_loadflow.Study_execution.Post_action_state\n  Powsybl_open_loadflow.Study_execution.Post_contingency_state -. "`provides the N-1 state for`" .-> Powsybl_open_loadflow.Study_execution.Post_action_state\n  Powsybl_core.Study_contracts.Selected_loading_limits -. "`supplies active groups to`" .-> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator\n  Powsybl_open_loadflow.Study_execution.Pre_contingency_state -. "`evaluates`" .-> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator\n  Powsybl_open_loadflow.Study_execution.Post_contingency_state -. "`evaluates`" .-> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator\n  Powsybl_open_loadflow.Study_execution.Post_action_state -. "`evaluates`" .-> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator\n  Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator -. "`adds violations to`" .-> Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping\n  Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping -. "`returns results through`" .-> Powsybl_core.Security_analysis_api\n';case`analysis_configuration_and_result_selection`:return'---\ntitle: "Analysis Configuration and Result Selection"\n---\ngraph LR\n  Study_configuration_sources@{ shape: rectangle, label: "Configuration sources" }\n  subgraph Powsybl_core["`powsybl-core`"]\n    Powsybl_core.Security_analysis_api@{ shape: rectangle, label: "Security Analysis API" }\n    Powsybl_core.Sensitivity_api@{ shape: rectangle, label: "Sensitivity Analysis API" }\n    subgraph Powsybl_core.Study_contracts["`Study contracts`"]\n      Powsybl_core.Study_contracts.Common_study_parameters@{ shape: rectangle, label: "Core study parameters" }\n      Powsybl_core.Study_contracts.State_monitors@{ shape: rectangle, label: "StateMonitor definitions" }\n      Powsybl_core.Study_contracts.Selected_loading_limits@{ shape: rectangle, label: "Selected LoadingLimits" }\n      Powsybl_core.Study_contracts.Modified_result_parameters@{ shape: rectangle, label: "Modified monitored-elements parameters" }\n    end\n  end\n  subgraph Pypowsybl["`pypowsybl`"]\n    Pypowsybl.Python_study_parameters@{ shape: rectangle, label: "Python study parameter facades" }\n    subgraph Pypowsybl.Native_image_bridge["`GraalVM native-image bridge`"]\n      Pypowsybl.Native_image_bridge.Native_parameter_abi@{ shape: rectangle, label: "Native parameter and result ABI" }\n    end\n    Pypowsybl.Pandas_study_results@{ shape: rectangle, label: "pandas study result adapters" }\n  end\n  subgraph Powsybl_open_loadflow["`powsybl-open-loadflow`"]\n    subgraph Powsybl_open_loadflow.Study_execution["`Study execution`"]\n      Powsybl_open_loadflow.Study_execution.Provider_parameter_extensions@{ shape: rectangle, label: "OLF provider parameter extensions" }\n      Powsybl_open_loadflow.Study_execution.Pre_contingency_state@{ shape: rectangle, label: "Pre-contingency N state" }\n      Powsybl_open_loadflow.Study_execution.Post_contingency_state@{ shape: rectangle, label: "Post-contingency N-1 state" }\n      Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator@{ shape: rectangle, label: "Limit violation evaluation" }\n    end\n    subgraph Powsybl_open_loadflow.State_and_result_mapping["`IIDM state and core-result mapping`"]\n      Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping@{ shape: rectangle, label: "Core study result mapping" }\n    end\n  end\n  Pypowsybl.Python_study_parameters -. "`marshals through`" .-> Pypowsybl.Native_image_bridge.Native_parameter_abi\n  Pypowsybl.Native_image_bridge.Native_parameter_abi -. "`returns result series through`" .-> Pypowsybl.Pandas_study_results\n  Powsybl_core.Security_analysis_api -. "`returns through`" .-> Pypowsybl.Native_image_bridge.Native_parameter_abi\n  Powsybl_core.Sensitivity_api -. "`returns through`" .-> Pypowsybl.Native_image_bridge.Native_parameter_abi\n  Study_configuration_sources -. "`sets defaults and JSON values for`" .-> Powsybl_core.Study_contracts.Common_study_parameters\n  Pypowsybl.Native_image_bridge.Native_parameter_abi -. "`maps Python values into`" .-> Powsybl_core.Study_contracts.Common_study_parameters\n  Powsybl_core.Security_analysis_api -. "`runs with`" .-> Powsybl_core.Study_contracts.Common_study_parameters\n  Powsybl_core.Sensitivity_api -. "`runs with`" .-> Powsybl_core.Study_contracts.Common_study_parameters\n  Powsybl_core.Security_analysis_api -. "`accepts`" .-> Powsybl_core.Study_contracts.State_monitors\n  Powsybl_core.Sensitivity_api -. "`accepts`" .-> Powsybl_core.Study_contracts.State_monitors\n  Powsybl_core.Study_contracts.Common_study_parameters -. "`contains`" .-> Powsybl_core.Study_contracts.Modified_result_parameters\n  Study_configuration_sources -. "`sets provider-specific values for`" .-> Powsybl_open_loadflow.Study_execution.Provider_parameter_extensions\n  Powsybl_core.Study_contracts.Common_study_parameters -. "`carries extensions to`" .-> Powsybl_open_loadflow.Study_execution.Provider_parameter_extensions\n  Powsybl_core.Study_contracts.State_monitors -. "`selects output from`" .-> Powsybl_open_loadflow.Study_execution.Pre_contingency_state\n  Powsybl_open_loadflow.Study_execution.Provider_parameter_extensions -. "`configures`" .-> Powsybl_open_loadflow.Study_execution.Pre_contingency_state\n  Powsybl_core.Study_contracts.State_monitors -. "`selects output from`" .-> Powsybl_open_loadflow.Study_execution.Post_contingency_state\n  Powsybl_open_loadflow.Study_execution.Pre_contingency_state -. "`provides the N baseline for`" .-> Powsybl_open_loadflow.Study_execution.Post_contingency_state\n  Powsybl_core.Study_contracts.Selected_loading_limits -. "`supplies active groups to`" .-> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator\n  Powsybl_open_loadflow.Study_execution.Pre_contingency_state -. "`evaluates`" .-> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator\n  Powsybl_open_loadflow.Study_execution.Post_contingency_state -. "`evaluates`" .-> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator\n  Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator -. "`adds violations to`" .-> Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping\n  Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping -. "`returns results through`" .-> Powsybl_core.Security_analysis_api\n  Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping -. "`returns results through`" .-> Powsybl_core.Sensitivity_api\n';case`olf_branch_monitored_result_filter`:return`---
title: "Open Load Flow branch filter-monitored-results: monitored-result delta filter"
---
graph LR
  subgraph Powsybl_core["\`powsybl-core\`"]
    subgraph Powsybl_core.Study_contracts["\`Study contracts\`"]
      Powsybl_core.Study_contracts.Common_study_parameters@{ shape: rectangle, label: "Core study parameters" }
      Powsybl_core.Study_contracts.Modified_result_parameters@{ shape: rectangle, label: "Modified monitored-elements parameters" }
    end
  end
  subgraph Powsybl_open_loadflow["\`powsybl-open-loadflow\`"]
    subgraph Powsybl_open_loadflow.Study_execution["\`Study execution\`"]
      Powsybl_open_loadflow.Study_execution.Pre_contingency_state@{ shape: rectangle, label: "Pre-contingency N state" }
      Powsybl_open_loadflow.Study_execution.Post_contingency_state@{ shape: rectangle, label: "Post-contingency N-1 state" }
      Powsybl_open_loadflow.Study_execution.Post_action_state@{ shape: rectangle, label: "Post-action state" }
    end
    subgraph Powsybl_open_loadflow.State_and_result_mapping["\`IIDM state and core-result mapping\`"]
      Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping@{ shape: rectangle, label: "Core study result mapping" }
    end
  end
  subgraph Proposed_olf_branches["\`Open Load Flow pull-request branches (proposal)\`"]
    Proposed_olf_branches.Monitored_result_filter@{ shape: rectangle, label: "Monitored-result delta filter" }
  end
  Powsybl_core.Study_contracts.Common_study_parameters -. "\`contains\`" .-> Powsybl_core.Study_contracts.Modified_result_parameters
  Powsybl_open_loadflow.Study_execution.Pre_contingency_state -. "\`provides the N baseline for\`" .-> Powsybl_open_loadflow.Study_execution.Post_contingency_state
  Powsybl_open_loadflow.Study_execution.Post_contingency_state -. "\`provides the N-1 state for\`" .-> Powsybl_open_loadflow.Study_execution.Post_action_state
  Powsybl_core.Study_contracts.Modified_result_parameters -. "\`would be consumed as-is: configures\`" .-> Proposed_olf_branches.Monitored_result_filter
  Powsybl_open_loadflow.Study_execution.Pre_contingency_state -. "\`would extend: compares N results through\`" .-> Proposed_olf_branches.Monitored_result_filter
  Powsybl_open_loadflow.Study_execution.Post_contingency_state -. "\`would extend: filters N-1 results through\`" .-> Proposed_olf_branches.Monitored_result_filter
  Powsybl_open_loadflow.Study_execution.Post_action_state -. "\`would extend: filters post-action results through\`" .-> Proposed_olf_branches.Monitored_result_filter
  Proposed_olf_branches.Monitored_result_filter -. "\`would extend: adds selected monitored results to\`" .-> Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping
`;case`olf_branch_network_cache`:return`---
title: "DC NetworkCache"
---
graph LR
  subgraph Proposed_olf_branches["\`Open Load Flow pull-request branches (proposal)\`"]
    Proposed_olf_branches.Cache_input@{ shape: rectangle, label: "NetworkCache.LfInput" }
    Proposed_olf_branches.Ac_cache_value@{ shape: rectangle, label: "NetworkCache.AcLfValue" }
    Proposed_olf_branches.Dc_cache_value@{ shape: rectangle, label: "NetworkCache.DcLfValue" }
    Proposed_olf_branches.Dc_fast_restart@{ shape: rectangle, label: "DcLoadFlowFromCache" }
  end
  subgraph Powsybl_open_loadflow["\`powsybl-open-loadflow\`"]
    subgraph Powsybl_open_loadflow.Network_cache["\`NetworkCache\`"]
      Powsybl_open_loadflow.Network_cache.Iidm_change_events@{ shape: rectangle, label: "IIDM NetworkListener changes" }
      Powsybl_open_loadflow.Network_cache.Change_classifier@{ shape: rectangle, label: "Cache update classification" }
      Powsybl_open_loadflow.Network_cache.Network_cache_entry@{ shape: rectangle, label: "NetworkCache.Entry" }
      Powsybl_open_loadflow.Network_cache.Ac_fast_restart@{ shape: rectangle, label: "AcLoadFlowFromCache" }
    end
    Powsybl_open_loadflow.State_and_result_mapping@{ shape: rectangle, label: "IIDM state and core-result mapping" }
  end
  Powsybl_open_loadflow.Network_cache.Iidm_change_events -. "\`notifies\`" .-> Powsybl_open_loadflow.Network_cache.Network_cache_entry
  Powsybl_open_loadflow.Network_cache.Iidm_change_events -. "\`classifies changes through\`" .-> Powsybl_open_loadflow.Network_cache.Change_classifier
  Powsybl_open_loadflow.Network_cache.Network_cache_entry -. "\`holds the AcLoadFlowContext reused by\`" .-> Powsybl_open_loadflow.Network_cache.Ac_fast_restart
  Powsybl_open_loadflow.Network_cache.Change_classifier -. "\`marks the cached context for update or invalidates\`" .-> Powsybl_open_loadflow.Network_cache.Network_cache_entry
  Proposed_olf_branches.Cache_input -. "\`would extend: validates inputs for\`" .-> Powsybl_open_loadflow.Network_cache.Network_cache_entry
  Powsybl_open_loadflow.Network_cache.Network_cache_entry -. "\`would extend: owns AC value\`" .-> Proposed_olf_branches.Ac_cache_value
  Proposed_olf_branches.Ac_cache_value -. "\`would extend: reused by\`" .-> Powsybl_open_loadflow.Network_cache.Ac_fast_restart
  Powsybl_open_loadflow.Network_cache.Network_cache_entry -. "\`would extend: owns DC value\`" .-> Proposed_olf_branches.Dc_cache_value
  Proposed_olf_branches.Dc_cache_value -. "\`reuses\`" .-> Proposed_olf_branches.Dc_fast_restart
  Powsybl_open_loadflow.Network_cache.Ac_fast_restart -. "\`writes completed AC state through\`" .-> Powsybl_open_loadflow.State_and_result_mapping
  Proposed_olf_branches.Dc_fast_restart -. "\`would consume as-is: writes completed DC state through\`" .-> Powsybl_open_loadflow.State_and_result_mapping
`;case`rdfdb-integration`:return`---
title: "Model registry in its own repository, next to powsybl-core"
---
graph TB
  subgraph @gr1["\`Actors\`"]
    @gr1._integration_tso@{ icon: "fa:user", shape: rounded, label: "TSO" }
    @gr1._integration_study_tool@{ icon: "fa:user", shape: rounded, label: "Study tool" }
    @gr1._integration_operator@{ icon: "fa:user", shape: rounded, label: "Operator" }
  end
  subgraph @gr5["\`Legend\`"]
    @gr5._integration_legendCore@{ shape: rectangle, label: "Grey: powsybl-core, upstream" }
    @gr5._integration_legendRegistry@{ shape: rectangle, label: "Blue: proposal" }
    @gr5._integration_legendStore@{ shape: rectangle, label: "Green: RDF store" }
    @gr5._integration_legendProposed@{ shape: rectangle, label: "Dashed: not implemented" }
  end
  subgraph @gr2["\`powsybl-core, upstream\`"]
    @gr2.Bl_coreIidmVariantsNetwork_event_recorder@{ shape: rectangle, label: "NetworkEventRecorder" }
    @gr2.Bl_coreIidmNetwork@{ shape: rectangle, label: "IIDM Network" }
  end
  subgraph @gr4["\`Model registry (separate repository, e.g. powsybl-cgmes-registry)\`"]
    @gr4.Sed_rdfdb_scenario_per_mas@{ shape: rectangle, label: "Scenario per ModelingAuthoritySet" }
    @gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader@{ shape: rectangle, label: "RdfDbNetworkLoader" }
    @gr4.Sed_diffstackingCgmes_rdfdbVersion_graph@{ shape: rectangle, label: "VersionGraph + Checkpoint" }
    @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog@{ shape: rectangle, label: "SnapshotCatalog" }
    @gr4.Sed_diffstackingCgmes_rdfdbTriple_diff_calculator@{ shape: rectangle, label: "Ingest" }
  end
  subgraph @gr3["\`powsybl-core, proposed (local branches, not upstream)\`"]
    @gr3.Sed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
    @gr3.Sed_unified_mappingFamilies@{ shape: rectangle, label: "CGMES import / export" }
    @gr3.Sed_diffstackingTriple_store_sparql@{ shape: rectangle, label: "triple-store-impl-rdf4j-sparql" }
  end
  subgraph Proposed_diffstacking_rdf_database["\`RDF store: any SPARQL 1.1 + Graph Store endpoint (e.g. Fuseki) or in-process memory:\`"]
    Proposed_diffstacking_rdf_database.Store_meta_graph@{ shape: rectangle, label: "Metadata graph per scenario" }
    Proposed_diffstacking_rdf_database.Store_checkpoint_copies@{ shape: rectangle, label: "Checkpoint copies" }
    Proposed_diffstacking_rdf_database.Store_data_graphs@{ shape: rectangle, label: "Immutable data graphs" }
    Proposed_diffstacking_rdf_database.Store_diff_graphs@{ shape: rectangle, label: "Forward / reverse diff graphs" }
  end
  @gr1._integration_tso -. "\`putAsDiff ×96 ≈ 53 s IGM\`" .-> @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog
  @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`rich timestep ≈ 0.9–1.1 s sv20\`" .-> @gr4.Sed_diffstackingCgmes_rdfdbTriple_diff_calculator
  @gr4.Sed_rdfdb_scenario_per_mas -. "\`one scenario per TSO\`" .-> @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog
  @gr1._integration_study_tool -. "\`load (sc, 08:30, v1.1)\`" .-> @gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader
  @gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`plan: one chain query\`" .-> @gr4.Sed_diffstackingCgmes_rdfdbVersion_graph
  @gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`diff route ≈ 0.1 s sv6\`" .-> @gr3.Sed_diffstackingCgmes_diff_import
  @gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`full route: cold ≈ 2 s IGM\`" .-> @gr3.Sed_unified_mappingFamilies
  @gr3.Sed_diffstackingCgmes_diff_import -. "\`96 variants ≈ 4.7 s IGM\`" .-> @gr2.Bl_coreIidmNetwork
  @gr3.Sed_unified_mappingFamilies -. "\`builds / updates\`" .-> @gr2.Bl_coreIidmNetwork
  @gr1._integration_operator -. "\`changes a variant\`" .-> @gr2.Bl_coreIidmNetwork
  @gr2.Bl_coreIidmVariantsNetwork_event_recorder -. "\`difference model ≈ 39 ms sv20\`" .-> @gr3.Sed_unified_mappingFamilies
  @gr3.Sed_unified_mappingFamilies -. "\`putDiff (RdfDbExport)\`" .-> @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog
  @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog -. "\`one guarded SPARQL UPDATE\`" .-> @gr3.Sed_diffstackingTriple_store_sparql
  @gr4.Sed_diffstackingCgmes_rdfdbVersion_graph -. "\`chain query; Checkpoint COPY\`" .-> @gr3.Sed_diffstackingTriple_store_sparql
  @gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -. "\`parallel GSP GET\`" .-> @gr3.Sed_diffstackingTriple_store_sparql
  Proposed_diffstacking_rdf_database.Store_meta_graph -. "\`indexes\`" .-> Proposed_diffstacking_rdf_database.Store_data_graphs
  Proposed_diffstacking_rdf_database.Store_meta_graph -. "\`indexes\`" .-> Proposed_diffstacking_rdf_database.Store_diff_graphs
  Proposed_diffstacking_rdf_database.Store_checkpoint_copies -. "\`folds\`" .-> Proposed_diffstacking_rdf_database.Store_diff_graphs
  @gr3.Sed_diffstackingTriple_store_sparql -. "\`SPARQL 1.1 + GSP\`" .-> Proposed_diffstacking_rdf_database
`;case`state_estimation_proposed_contracts`:return`---
title: "Proposed State Estimation and OpenSteadyState contracts"
---
graph LR
  subgraph Powsybl_open_loadflow["\`powsybl-open-loadflow\`"]
    subgraph Powsybl_open_loadflow.Lf_network_adapter["\`IIDM to LfNetwork adapter\`"]
      Powsybl_open_loadflow.Lf_network_adapter.Network_loader@{ shape: rectangle, label: "Networks and LfNetworkLoader" }
    end
    subgraph Powsybl_open_loadflow.Equation_toolkit["\`Equation builder toolkits\`"]
      Powsybl_open_loadflow.Equation_toolkit.Ac_equation_builder@{ shape: rectangle, label: "AC equation builders" }
      Powsybl_open_loadflow.Equation_toolkit.Equation_system@{ shape: rectangle, label: "EquationSystem and Jacobian infrastructure" }
    end
    Powsybl_open_loadflow.Lf_network@{ shape: rectangle, label: "LfNetwork" }
  end
  subgraph Pypowsybl["\`pypowsybl\`"]
    Pypowsybl.Measurement_and_observability_dataframes@{ shape: rectangle, label: "Measurement and observability DataFrames" }
  end
  Proposed_state_estimation_core_api@{ shape: rectangle, label: "Proposed powsybl-core State Estimation API" }
  Proposed_bus_branch_measurement_projection@{ shape: rectangle, label: "Proposed bus/branch measurement projection" }
  Proposed_reusable_ac_measurement_terms@{ shape: rectangle, label: "Proposed reusable AC measurement terms" }
  subgraph Powsybl_core["\`powsybl-core\`"]
    subgraph Powsybl_core.IidmExtensions["\`IIDM extensions\`"]
      Powsybl_core.IidmExtensions.Transformer_estimation_flags@{ shape: rectangle, label: "Transformer estimation flags" }
      Powsybl_core.IidmExtensions.Measurements@{ shape: rectangle, label: "Measurements and discrete measurements extensions" }
      Powsybl_core.IidmExtensions.Observability@{ shape: rectangle, label: "Observability extensions" }
    end
    Powsybl_core.Math@{ shape: rectangle, label: "Math API" }
    Powsybl_core.IidmNetwork@{ shape: rectangle, label: "Network" }
  end
  Proposed_rectangular_measurement_jacobian@{ shape: rectangle, label: "Proposed measurement-function and rectangular Jacobian support" }
  Proposed_retained_factorization@{ shape: rectangle, label: "Proposed retained factorization access" }
  Proposed_state_estimation_input_contract@{ shape: rectangle, label: "Proposed State Estimation input and result contract" }
  Powsybl_core.IidmExtensions.Measurements -. "\`attach measurement data to\`" .-> Powsybl_core.IidmNetwork
  Powsybl_core.IidmExtensions.Observability -. "\`annotate equipment and topology on\`" .-> Powsybl_core.IidmNetwork
  Powsybl_open_loadflow.Lf_network_adapter.Network_loader -. "\`builds and configures\`" .-> Powsybl_open_loadflow.Lf_network
  Powsybl_open_loadflow.Equation_toolkit.Ac_equation_builder -. "\`constructs and updates\`" .-> Powsybl_open_loadflow.Equation_toolkit.Equation_system
  Pypowsybl.Measurement_and_observability_dataframes -. "\`maps through\`" .-> Powsybl_core.IidmExtensions.Measurements
  Pypowsybl.Measurement_and_observability_dataframes -. "\`maps through\`" .-> Powsybl_core.IidmExtensions.Observability
  Powsybl_core.IidmNetwork -. "\`would provide Network to\`" .-> Proposed_state_estimation_input_contract
  Powsybl_core.IidmExtensions.Measurements -. "\`would contribute measurements to\`" .-> Proposed_state_estimation_input_contract
  Powsybl_core.IidmExtensions.Observability -. "\`would contribute observability metadata to\`" .-> Proposed_state_estimation_input_contract
  Powsybl_core.IidmExtensions.Transformer_estimation_flags -. "\`would contribute equipment flags to\`" .-> Proposed_state_estimation_input_contract
  Pypowsybl.Measurement_and_observability_dataframes -. "\`would marshal Python data through\`" .-> Proposed_state_estimation_input_contract
  Proposed_state_estimation_core_api -. "\`would define calls over\`" .-> Proposed_state_estimation_input_contract
  Powsybl_open_loadflow.Lf_network_adapter.Network_loader -. "\`would be extended for\`" .-> Proposed_bus_branch_measurement_projection
  Proposed_bus_branch_measurement_projection -. "\`would derive reduced estimator input for\`" .-> Proposed_state_estimation_input_contract
  Powsybl_open_loadflow.Equation_toolkit.Equation_system -. "\`would be extended for\`" .-> Proposed_rectangular_measurement_jacobian
  Proposed_bus_branch_measurement_projection -. "\`would supply topology and state indexing to\`" .-> Proposed_rectangular_measurement_jacobian
  Powsybl_core.Math -. "\`would expose controlled reuse through\`" .-> Proposed_retained_factorization
  Proposed_rectangular_measurement_jacobian -. "\`would form weighted normal equations with\`" .-> Proposed_retained_factorization
  Powsybl_open_loadflow.Equation_toolkit.Ac_equation_builder -. "\`would expose existing terms through\`" .-> Proposed_reusable_ac_measurement_terms
  Proposed_reusable_ac_measurement_terms -. "\`would evaluate h(x) and derivatives for\`" .-> Proposed_rectangular_measurement_jacobian
`;case`state_estimation_proposal_a`:return'---\ntitle: "Proposal A: Separate OpenSteadyState and State Estimation repositories"\n---\ngraph TB\n  subgraph Powsybl_open_loadflow["`powsybl-open-loadflow`"]\n    Powsybl_open_loadflow.Lf_network@{ shape: rectangle, label: "LfNetwork" }\n    Powsybl_open_loadflow.Open_loadflow_provider@{ shape: rectangle, label: "OpenLoadFlowProvider" }\n    Powsybl_open_loadflow.Equation_toolkit@{ shape: rectangle, label: "Equation builder toolkits" }\n    Powsybl_open_loadflow.Ac_dc_loadflow_engines@{ shape: rectangle, label: "AC/DC load-flow engines" }\n    subgraph Powsybl_open_loadflow.Lf_network_adapter["`IIDM to LfNetwork adapter`"]\n      Powsybl_open_loadflow.Lf_network_adapter.Network_loader@{ shape: rectangle, label: "Networks and LfNetworkLoader" }\n    end\n  end\n  subgraph Powsybl_core["`powsybl-core`"]\n    subgraph Powsybl_core.IidmExtensions["`IIDM extensions`"]\n      Powsybl_core.IidmExtensions.Measurements@{ shape: rectangle, label: "Measurements and discrete measurements extensions" }\n      Powsybl_core.IidmExtensions.Observability@{ shape: rectangle, label: "Observability extensions" }\n    end\n    Powsybl_core.IidmNetwork@{ shape: rectangle, label: "Network" }\n  end\n  subgraph Proposal_a_state_estimation["`Proposed powsybl-state-estimation`"]\n    subgraph Proposal_a_state_estimation.Proposal_a_state_estimation_module["`state-estimation`"]\n      Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_result_mapping@{ shape: rectangle, label: "State-estimation result mapping" }\n      Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_state_estimation_provider@{ shape: rectangle, label: "StateEstimationProvider" }\n      Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_measurement_preparation@{ shape: rectangle, label: "Measurement and covariance preparation" }\n      Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_observability_analysis@{ shape: rectangle, label: "Observability analysis" }\n      Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel@{ shape: rectangle, label: "WLS kernel" }\n      Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_bad_data_diagnostics@{ shape: rectangle, label: "Post-convergence residual and bad-data diagnostics" }\n    end\n  end\n  Proposed_state_estimation_core_api@{ shape: rectangle, label: "Proposed powsybl-core State Estimation API" }\n  Proposed_state_estimation_input_contract@{ shape: rectangle, label: "Proposed State Estimation input and result contract" }\n  subgraph Proposal_a_open_steady_state["`Proposed powsybl-open-steady-state`"]\n    subgraph Proposal_a_open_steady_state.Proposal_a_network_toolkit["`Network toolkit`"]\n      Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection@{ shape: rectangle, label: "Node/breaker-to-bus/branch measurement projection" }\n    end\n    subgraph Proposal_a_open_steady_state.Proposal_a_equation_toolkit["`Equation toolkit`"]\n      Proposal_a_open_steady_state.Proposal_a_equation_toolkit.Proposal_a_measurement_equation_builder@{ shape: rectangle, label: "State Estimation measurement-equation builder" }\n    end\n  end\n  subgraph Proposal_a_open_loadflow["`Proposed powsybl-open-loadflow`"]\n    Proposal_a_open_loadflow.Proposal_a_loadflow@{ shape: rectangle, label: "open-loadflow" }\n  end\n  Powsybl_open_loadflow.Lf_network -. "`supplies variables and network state to`" .-> Powsybl_open_loadflow.Equation_toolkit\n  Powsybl_open_loadflow.Lf_network -. "`provides loaded network to`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines\n  Powsybl_open_loadflow.Equation_toolkit -. "`supplies equations to`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines\n  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "`configures`" .-> Powsybl_open_loadflow.Lf_network_adapter.Network_loader\n  Powsybl_core.IidmNetwork -. "`would provide Network to`" .-> Proposed_state_estimation_input_contract\n  Powsybl_core.IidmExtensions.Measurements -. "`would contribute measurements to`" .-> Proposed_state_estimation_input_contract\n  Powsybl_core.IidmExtensions.Observability -. "`would contribute observability metadata to`" .-> Proposed_state_estimation_input_contract\n  Proposed_state_estimation_core_api -. "`would define calls over`" .-> Proposed_state_estimation_input_contract\n  Proposed_state_estimation_input_contract -. "`would provide IIDM topology, switch status, and measurement metadata to`" .-> Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection\n  Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -. "`would provide reduced topology and measurement mappings to`" .-> Proposal_a_open_steady_state.Proposal_a_equation_toolkit.Proposal_a_measurement_equation_builder\n  Proposed_state_estimation_core_api -. "`would discover through ServiceLoader`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_state_estimation_provider\n  Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -. "`would provide projected measurement locations to`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_measurement_preparation\n  Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -. "`would provide reduced topology and measurement-to-state incidence to`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_observability_analysis\n  Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -. "`would initialize and index`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel\n  Proposal_a_open_steady_state.Proposal_a_equation_toolkit.Proposal_a_measurement_equation_builder -. "`[...]`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel\n  Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_state_estimation_provider -. "`would start topology and measurement projection through`" .-> Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection\n  Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_result_mapping -. "`would return results through`" .-> Proposed_state_estimation_core_api\n  Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_measurement_preparation -. "`[...]`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel\n  Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_observability_analysis -. "`selects observable variables for`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel\n  Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel -. "`[...]`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_bad_data_diagnostics\n  Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel -. "`provides estimated state to`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_result_mapping\n  Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_bad_data_diagnostics -. "`adds diagnostics to`" .-> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_result_mapping\n  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "`would remain in`" .-> Proposal_a_open_loadflow.Proposal_a_loadflow\n  Powsybl_open_loadflow.Open_loadflow_provider -. "`would remain in`" .-> Proposal_a_open_loadflow.Proposal_a_loadflow\n  Powsybl_open_loadflow.Open_loadflow_provider -. "`loads the computation network`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Lf_network -. "`would be extracted into`" .-> Proposal_a_open_steady_state.Proposal_a_network_toolkit\n  Powsybl_open_loadflow.Lf_network_adapter.Network_loader -. "`would move with`" .-> Proposal_a_open_steady_state.Proposal_a_network_toolkit\n  Powsybl_open_loadflow.Equation_toolkit -. "`would be extracted into`" .-> Proposal_a_open_steady_state.Proposal_a_equation_toolkit\n  Proposal_a_open_loadflow.Proposal_a_loadflow -. "`would use the target network toolkit`" .-> Proposal_a_open_steady_state.Proposal_a_network_toolkit\n  Proposal_a_open_loadflow.Proposal_a_loadflow -. "`would use the target equation toolkit`" .-> Proposal_a_open_steady_state.Proposal_a_equation_toolkit\n';case`state_estimation_proposal_b`:return`---
title: "Proposal B: Refactor powsybl-open-loadflow into powsybl-open-simulator"
---
graph TB
  subgraph Powsybl_core["\`powsybl-core\`"]
    Powsybl_core.Math@{ shape: rectangle, label: "Math API" }
  end
  subgraph Powsybl_open_loadflow["\`powsybl-open-loadflow\`"]
    Powsybl_open_loadflow.Lf_network@{ shape: rectangle, label: "LfNetwork" }
    Powsybl_open_loadflow.Lf_network_adapter@{ shape: rectangle, label: "IIDM to LfNetwork adapter" }
    Powsybl_open_loadflow.Contingency_propagation@{ shape: rectangle, label: "Contingency propagation" }
    Powsybl_open_loadflow.Equation_toolkitEquation_system@{ shape: rectangle, label: "EquationSystem and Jacobian infrastructure" }
  end
  subgraph Proposal_b_open_simulator["\`Proposed powsybl-open-simulator (renamed from powsybl-open-loadflow)\`"]
    Proposal_b_open_simulator.Proposal_b_state_estimation@{ shape: rectangle, label: "powsybl-open-state-estimation" }
    Proposal_b_open_simulator.Proposal_b_loadflow@{ shape: rectangle, label: "powsybl-open-loadflow" }
    Proposal_b_open_simulator.Proposal_b_grid_reduction@{ shape: rectangle, label: "powsybl-open-grid-reduction" }
    Proposal_b_open_simulator.Proposal_b_core@{ shape: rectangle, label: "powsybl-open-simulator-core" }
    Proposal_b_open_simulator.Proposal_b_network@{ shape: rectangle, label: "powsybl-open-simulator-network" }
    Proposal_b_open_simulator.Proposal_b_matrix@{ shape: rectangle, label: "powsybl-open-simulator-matrix" }
  end
  Powsybl_core.Math -. "\`com.powsybl.math.matrix would transfer into\`" .-> Proposal_b_open_simulator.Proposal_b_matrix
  Powsybl_open_loadflow.Lf_network -. "\`would move, renamed OsNetwork, into\`" .-> Proposal_b_open_simulator.Proposal_b_network
  Powsybl_open_loadflow.Lf_network_adapter -. "\`would move into\`" .-> Proposal_b_open_simulator.Proposal_b_network
  Powsybl_open_loadflow.Contingency_propagation -. "\`would move into\`" .-> Proposal_b_open_simulator.Proposal_b_network
  Powsybl_open_loadflow.Equation_toolkitEquation_system -. "\`would move into\`" .-> Proposal_b_open_simulator.Proposal_b_core
  Proposal_b_open_simulator.Proposal_b_state_estimation -. "\`would depend on\`" .-> Proposal_b_open_simulator.Proposal_b_core
  Proposal_b_open_simulator.Proposal_b_network -. "\`would depend on\`" .-> Proposal_b_open_simulator.Proposal_b_matrix
  Proposal_b_open_simulator.Proposal_b_core -. "\`would depend on\`" .-> Proposal_b_open_simulator.Proposal_b_network
  Proposal_b_open_simulator.Proposal_b_loadflow -. "\`would depend on\`" .-> Proposal_b_open_simulator.Proposal_b_core
  Proposal_b_open_simulator.Proposal_b_grid_reduction -. "\`would depend on\`" .-> Proposal_b_open_simulator.Proposal_b_core
  Powsybl_open_loadflow -. "\`remaining lf, sa, sensi, AC, and DC code would stay in\`" .-> Proposal_b_open_simulator.Proposal_b_loadflow
`;case`state_estimation_proposal_b_sequence_mvp`:return'---\ntitle: "Proposal B sequence: MVP State Estimation (observability and WLS)"\n---\ngraph LR\n  Proposed_state_estimation_client@{ shape: rectangle, label: "Proposed State Estimation client" }\n  Proposed_state_estimation_core_api@{ shape: rectangle, label: "Proposed powsybl-core State Estimation API" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider@{ shape: rectangle, label: "StateEstimationProvider" }\n  Powsybl_coreIidm@{ shape: rectangle, label: "IIDM API and extensions" }\n  Proposal_b_open_simulatorProposal_b_network@{ shape: rectangle, label: "powsybl-open-simulator-network" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis@{ shape: rectangle, label: "Observability analysis" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel@{ shape: rectangle, label: "WLS kernel" }\n  Proposal_b_open_simulatorProposal_b_core@{ shape: rectangle, label: "powsybl-open-simulator-core" }\n  Proposal_b_open_simulatorProposal_b_matrix@{ shape: rectangle, label: "powsybl-open-simulator-matrix" }\n  Proposed_state_estimation_client -. "`StateEstimation.run(network, variantId, parameters)`" .-> Proposed_state_estimation_core_api\n  Proposed_state_estimation_core_api -. "`discover provider through ServiceLoader and run`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`load network variant and measurements`" .-> Powsybl_coreIidm\n  Powsybl_coreIidm -. "`topology, switch status, parameters, taps, measurements with standard deviations`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`project to bus/branch model and map measurements`" .-> Proposal_b_open_simulatorProposal_b_network\n  Proposal_b_open_simulatorProposal_b_network -. "`islands and measurement mapping`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`prepare z, R, W`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`topological observability per island`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis -. "`observable islands, critical measurements`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`estimate each observable island`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -. "`build h(x) and Jacobian H`" .-> Proposal_b_open_simulatorProposal_b_core\n  Proposal_b_open_simulatorProposal_b_core -. "`sparse rectangular H`" .-> Proposal_b_open_simulatorProposal_b_matrix\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -. "`G = H^T W H, sparse factorization, solve for delta x`" .-> Proposal_b_open_simulatorProposal_b_matrix\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -. "`update x, check convergence`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -. "`x hat, residuals, convergence status`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`map bus/branch estimates to IIDM elements`" .-> Proposal_b_open_simulatorProposal_b_network\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`optional write-back of state and observability`" .-> Powsybl_coreIidm\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`StateEstimationResult and StateEstimationReport`" .-> Proposed_state_estimation_core_api\n  Proposed_state_estimation_core_api -. "`per-island status, estimated state, observability`" .-> Proposed_state_estimation_client\n';case`state_estimation_proposal_b_sequence_followup`:return'---\ntitle: "Proposal B sequence: State Estimation with bad-data, topology, and parameter processing"\n---\ngraph LR\n  Proposed_state_estimation_client@{ shape: rectangle, label: "Proposed State Estimation client" }\n  Proposed_state_estimation_core_api@{ shape: rectangle, label: "Proposed powsybl-core State Estimation API" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider@{ shape: rectangle, label: "StateEstimationProvider" }\n  Powsybl_coreIidm@{ shape: rectangle, label: "IIDM API and extensions" }\n  Proposal_b_open_simulatorProposal_b_network@{ shape: rectangle, label: "powsybl-open-simulator-network" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis@{ shape: rectangle, label: "Observability analysis" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel@{ shape: rectangle, label: "WLS kernel" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics@{ shape: rectangle, label: "Post-convergence residual and bad-data diagnostics" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing@{ shape: rectangle, label: "Topology error processing" }\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation@{ shape: rectangle, label: "Network parameter estimation" }\n  Proposed_state_estimation_client -. "`StateEstimation.run(network, variantId, parameters)`" .-> Proposed_state_estimation_core_api\n  Proposed_state_estimation_core_api -. "`run with bad-data, topology, and parameter options`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`load immutable node/breaker snapshot and measurements`" .-> Powsybl_coreIidm\n  Powsybl_coreIidm -. "`snapshot and source measurements`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`project to bus/branch, keep node/breaker provenance`" .-> Proposal_b_open_simulatorProposal_b_network\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`create run-local working measurement set`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`observability and measurement classification`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`WLS estimate`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -. "`x hat, residuals, H, retained factors`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`chi-square test and normalized residuals`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics -. "`test outcome, isolated suspects, correlated clusters`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`assess topology-signature clusters before any removal`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing -. "`build bounded hypotheses in detached variants`" .-> Proposal_b_open_simulatorProposal_b_network\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing -. "`re-estimate each hypothesis with breaker flow constraints`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing -. "`ranked candidates or inconclusive`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`identify largest normalized residual`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics -. "`gate: not critical, island stays observable`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`deactivate suspect in working set and re-estimate`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`assess persistent clusters adjacent to a branch`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation -. "`parameter observability and local redundancy`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation -. "`augmented-state estimate, feasible discrete taps`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation -. "`estimates, uncertainty, update recommendation`" .-> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`map estimates to IIDM elements`" .-> Proposal_b_open_simulatorProposal_b_network\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`opt-in write-back of state and accepted corrections`" .-> Powsybl_coreIidm\n  Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -. "`result, report, and audit trail`" .-> Proposed_state_estimation_core_api\n  Proposed_state_estimation_core_api -. "`result quality: passed, corrected, inconclusive, or failed`" .-> Proposed_state_estimation_client\n';case`unified_mapping_before`:return'---\ntitle: "Unified mapping: before - every path knows the mapping itself"\n---\ngraph TB\n  subgraph Proposed_diffstacking["`Diffstacking in powsybl-core (proposal)`"]\n    Proposed_diffstacking.Partial_ssh_export@{ shape: rectangle, label: "PartialSshExport" }\n    Proposed_diffstacking.Cgmes_diff_export@{ shape: rectangle, label: "CgmesDiffExport" }\n    Proposed_diffstacking.Cgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }\n    Proposed_diffstacking.Fast_route_capabilities@{ shape: rectangle, label: "FastRouteCapabilities + DiffSubjectResolver" }\n    Proposed_diffstacking.Cgmes_object_dump@{ shape: rectangle, label: "CgmesObjectDump" }\n    Proposed_diffstacking.Change_translator@{ shape: rectangle, label: "CgmesChangeTranslator + IidmStateView" }\n    Proposed_diffstacking.Difference_model@{ shape: rectangle, label: "DifferenceModelSet / CgmesStatement" }\n    Proposed_diffstacking.Difference_sink@{ shape: rectangle, label: "DifferenceSink / DifferenceModelWriter" }\n  end\n  subgraph Powsybl_core["`powsybl-core`"]\n    subgraph Powsybl_core.Cgmes["`CGMES conversion`"]\n      Powsybl_core.Cgmes.Conversion_update@{ shape: rectangle, label: "Conversion.update (SSH update workflow)" }\n    end\n    subgraph Powsybl_core.Iidm["`IIDM API and extensions`"]\n      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }\n      subgraph Powsybl_core.Iidm.Io["`IIDM I/O and format providers`"]\n        subgraph Powsybl_core.Iidm.Io.Export_providers["`Exporter implementations`"]\n          Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter@{ shape: rectangle, label: "CgmesExport" }\n        end\n      end\n    end\n  end\n  subgraph Proposed_unified_mapping["`Unified mapping (proposal)`"]\n    Proposed_unified_mapping.Before_ssh_writers@{ shape: rectangle, label: "SteadyStateHypothesisExport writers (before)" }\n    Proposed_unified_mapping.Before_probes@{ shape: rectangle, label: "DiffProbes + DiffSubjectResolver + CgmesLimitIndex (before)" }\n  end\n  Powsybl_core.Iidm.Network -. "`serializes`" .-> Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter\n  Proposed_diffstacking.Partial_ssh_export -. "`map changes with`" .-> Proposed_diffstacking.Change_translator\n  Proposed_diffstacking.Cgmes_diff_export -. "`map changes with`" .-> Proposed_diffstacking.Change_translator\n  Proposed_diffstacking.Change_translator -. "`would consume as-is: reads current (and overlaid previous) state of`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_export -. "`generates`" .-> Proposed_diffstacking.Difference_model\n  Proposed_diffstacking.Change_translator -. "`emits EQ statements for limits and impedances into`" .-> Proposed_diffstacking.Difference_model\n  Proposed_diffstacking.Difference_model -. "`is pushed to`" .-> Proposed_diffstacking.Difference_sink\n  Proposed_diffstacking.Cgmes_diff_import -. "`applies a difference in place, into a variant`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_import -. "`decides route with`" .-> Proposed_diffstacking.Fast_route_capabilities\n  Proposed_diffstacking.Fast_route_capabilities -. "`would consume as-is: resolves subjects and types in`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_import -. "`completes groups / checks reverse values with`" .-> Proposed_diffstacking.Cgmes_object_dump\n  Proposed_diffstacking.Cgmes_object_dump -. "`reuses export mapping of`" .-> Proposed_diffstacking.Change_translator\n  Proposed_diffstacking.Cgmes_diff_import -. "`would extend: runs, scoped to the named equipment`" .-> Powsybl_core.Cgmes.Conversion_update\n  Powsybl_core.Cgmes.Conversion_update -. "`updates in place`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter -. "`writes the full SSH with (own rules)`" .-> Proposed_unified_mapping.Before_ssh_writers\n  Proposed_unified_mapping.Before_ssh_writers -. "`reads`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_import -. "`completes groups with (own property lists)`" .-> Proposed_unified_mapping.Before_probes\n  Proposed_unified_mapping.Before_probes -. "`asks`" .-> Proposed_diffstacking.Cgmes_object_dump\n';case`unified_mapping_after`:return'---\ntitle: "Unified mapping: after - families, one sink, every path a consumer"\n---\ngraph TB\n  subgraph Proposed_diffstacking["`Diffstacking in powsybl-core (proposal)`"]\n    Proposed_diffstacking.Partial_ssh_export@{ shape: rectangle, label: "PartialSshExport" }\n    Proposed_diffstacking.Cgmes_diff_export@{ shape: rectangle, label: "CgmesDiffExport" }\n    Proposed_diffstacking.Cgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }\n    Proposed_diffstacking.Change_translator@{ shape: rectangle, label: "CgmesChangeTranslator + IidmStateView" }\n    Proposed_diffstacking.Fast_route_capabilities@{ shape: rectangle, label: "FastRouteCapabilities + DiffSubjectResolver" }\n    Proposed_diffstacking.Difference_model@{ shape: rectangle, label: "DifferenceModelSet / CgmesStatement" }\n    Proposed_diffstacking.Difference_sink@{ shape: rectangle, label: "DifferenceSink / DifferenceModelWriter" }\n  end\n  subgraph Powsybl_core["`powsybl-core`"]\n    subgraph Powsybl_core.Cgmes["`CGMES conversion`"]\n      Powsybl_core.Cgmes.Conversion_update@{ shape: rectangle, label: "Conversion.update (SSH update workflow)" }\n    end\n    subgraph Powsybl_core.Iidm["`IIDM API and extensions`"]\n      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }\n      subgraph Powsybl_core.Iidm.Io["`IIDM I/O and format providers`"]\n        subgraph Powsybl_core.Iidm.Io.Export_providers["`Exporter implementations`"]\n          Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter@{ shape: rectangle, label: "CgmesExport" }\n        end\n        subgraph Powsybl_core.Iidm.Io.Exchange_formats["`Supported exchange formats`"]\n          Powsybl_core.Iidm.Io.Exchange_formats.Cgmes@{ shape: rectangle, label: "CGMES" }\n        end\n      end\n    end\n  end\n  subgraph Proposed_unified_mapping["`Unified mapping (proposal)`"]\n    Proposed_unified_mapping.Subject_index@{ shape: rectangle, label: "Families (subject index + describe)" }\n    Proposed_unified_mapping.Mapping_page@{ shape: rectangle, label: "mapping.md (generated)" }\n    Proposed_unified_mapping.Families@{ shape: rectangle, label: "Family classes (8)" }\n    Proposed_unified_mapping.Plain_rows@{ shape: rectangle, label: "PlainFamily / PlainRow / Quantity / Block" }\n    Proposed_unified_mapping.Property_sink@{ shape: rectangle, label: "CgmesPropertySink" }\n    Proposed_unified_mapping.Refusal@{ shape: rectangle, label: "Refusal" }\n  end\n  Powsybl_core.Iidm.Network -. "`serializes`" .-> Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter\n  Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter -. "`writes`" .-> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes\n  Proposed_diffstacking.Partial_ssh_export -. "`would consume as-is: writes partial SSH`" .-> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes\n  Proposed_diffstacking.Partial_ssh_export -. "`map changes with`" .-> Proposed_diffstacking.Change_translator\n  Proposed_diffstacking.Cgmes_diff_export -. "`map changes with`" .-> Proposed_diffstacking.Change_translator\n  Proposed_diffstacking.Change_translator -. "`would consume as-is: reads current (and overlaid previous) state of`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_export -. "`generates`" .-> Proposed_diffstacking.Difference_model\n  Proposed_diffstacking.Change_translator -. "`emits EQ statements for limits and impedances into`" .-> Proposed_diffstacking.Difference_model\n  Proposed_diffstacking.Difference_model -. "`is pushed to`" .-> Proposed_diffstacking.Difference_sink\n  Proposed_diffstacking.Cgmes_diff_import -. "`applies a difference in place, into a variant`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_import -. "`decides route with`" .-> Proposed_diffstacking.Fast_route_capabilities\n  Proposed_diffstacking.Fast_route_capabilities -. "`would consume as-is: resolves subjects and types in`" .-> Powsybl_core.Iidm.Network\n  Proposed_diffstacking.Cgmes_diff_import -. "`would extend: runs, scoped to the named equipment`" .-> Powsybl_core.Cgmes.Conversion_update\n  Powsybl_core.Cgmes.Conversion_update -. "`updates in place`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter -. "`writes the full SSH through`" .-> Proposed_unified_mapping.Families\n  Proposed_diffstacking.Change_translator -. "`dispatches a change by key to`" .-> Proposed_unified_mapping.Families\n  Proposed_diffstacking.Fast_route_capabilities -. "`derives its table from the blocks of`" .-> Proposed_unified_mapping.Families\n  Proposed_unified_mapping.Families -. "`reads the current or previous state of`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Cgmes.Conversion_update -. "`sets loads, control areas and switches through`" .-> Proposed_unified_mapping.Plain_rows\n  Proposed_unified_mapping.Families -. "`states plain values as`" .-> Proposed_unified_mapping.Plain_rows\n  Proposed_unified_mapping.Families -. "`describes objects into`" .-> Proposed_unified_mapping.Property_sink\n  Proposed_unified_mapping.Property_sink -. "`becomes the SSH document of`" .-> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes\n  Proposed_unified_mapping.Property_sink -. "`one change: CgmesPropertyBuffer, written by`" .-> Proposed_diffstacking.Partial_ssh_export\n  Proposed_unified_mapping.Property_sink -. "`one change: CgmesPropertyBuffer, compared by`" .-> Proposed_diffstacking.Cgmes_diff_export\n  Proposed_unified_mapping.Property_sink -. "`becomes statements of`" .-> Proposed_diffstacking.Difference_model\n  Proposed_unified_mapping.Families -. "`refuses with`" .-> Proposed_unified_mapping.Refusal\n  Proposed_diffstacking.Cgmes_diff_import -. "`resolves subjects and completes groups with`" .-> Proposed_unified_mapping.Subject_index\n  Proposed_unified_mapping.Subject_index -. "`describes a subject with`" .-> Proposed_unified_mapping.Families\n  Proposed_unified_mapping.Mapping_page -. "`is generated from`" .-> Proposed_unified_mapping.Families\n  Proposed_unified_mapping.Mapping_page -. "`lists rule, scope and remedy of`" .-> Proposed_unified_mapping.Refusal\n';case`upstream-main-today`:return`---
title: "Upstream main today: every direction states the mapping itself"
---
graph TB
  Powsybl_coreIidmIoExchange_formatsCgmes@{ shape: rectangle, label: "CGMES files" }
  Powsybl_coreIidmIoImport_providersCgmes_importer@{ shape: rectangle, label: "CgmesImport" }
  Powsybl_coreCgmesConversion@{ shape: rectangle, label: "Conversion.convert" }
  Powsybl_coreCgmesConversion_update@{ shape: rectangle, label: "Conversion.update + Update" }
  Powsybl_coreCgmesQuery_catalog@{ shape: rectangle, label: "SPARQL catalogue (CIM16*.sparql)" }
  Powsybl_coreCgmesElement_conversions@{ shape: rectangle, label: "elements/*Conversion" }
  Powsybl_coreCgmesTriple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "IIDM Network" }
  Powsybl_coreIidmIoExport_providersCgmes_exporter@{ shape: rectangle, label: "CgmesExport" }
  Powsybl_coreCgmesEq_export@{ shape: rectangle, label: "EquipmentExport" }
  Powsybl_coreCgmesSsh_export@{ shape: rectangle, label: "SteadyStateHypothesisExport" }
  Powsybl_coreCgmesTp_sv_export@{ shape: rectangle, label: "TopologyExport / StateVariablesExport" }
  Unified_mapping_legendUnchanged@{ shape: rectangle, label: "Legend: powsybl-core, upstream" }
  Unified_mapping_legendRule_stated@{ shape: rectangle, label: "Legend: upstream code stating the rule" }
  Powsybl_coreIidmIoExchange_formatsCgmes -. "\`loads\`" .-> Powsybl_coreIidmIoImport_providersCgmes_importer
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`loads files into\`" .-> Powsybl_coreCgmesTriple_store
  Powsybl_coreCgmesQuery_catalog -. "\`is evaluated on\`" .-> Powsybl_coreCgmesTriple_store
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`Network.read: converts with\`" .-> Powsybl_coreCgmesConversion
  Powsybl_coreCgmesConversion -. "\`reads the model through\`" .-> Powsybl_coreCgmesQuery_catalog
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`Importer.update: updates with\`" .-> Powsybl_coreCgmesConversion_update
  Powsybl_coreCgmesConversion_update -. "\`reads the update queries of\`" .-> Powsybl_coreCgmesQuery_catalog
  Powsybl_coreCgmesConversion -. "\`convert() per object, then update()\`" .-> Powsybl_coreCgmesElement_conversions
  Powsybl_coreCgmesConversion_update -. "\`update() per object\`" .-> Powsybl_coreCgmesElement_conversions
  Powsybl_coreCgmesElement_conversions -. "\`creates and sets the state of\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIoExport_providersCgmes_exporter
  Powsybl_coreIidmIoExport_providersCgmes_exporter -. "\`writes\`" .-> Powsybl_coreIidmIoExchange_formatsCgmes
  Powsybl_coreIidmIoExport_providersCgmes_exporter -. "\`writes EQ with\`" .-> Powsybl_coreCgmesEq_export
  Powsybl_coreIidmIoExport_providersCgmes_exporter -. "\`writes SSH with\`" .-> Powsybl_coreCgmesSsh_export
  Powsybl_coreCgmesSsh_export -. "\`reads\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIoExport_providersCgmes_exporter -. "\`writes TP and SV with\`" .-> Powsybl_coreCgmesTp_sv_export
`;case`families-after`:return`---
title: "After the rework: eight families state the mapping once"
---
graph TB
  Powsybl_coreIidmIoExchange_formatsCgmes@{ shape: rectangle, label: "CGMES files" }
  Proposed_diffstackingChange_translator@{ shape: rectangle, label: "CgmesChangeTranslator" }
  subgraph Proposed_unified_mappingFamilies["\`Family classes\`"]
    Proposed_unified_mappingFamilies.Load_family@{ shape: rectangle, label: "LoadFamily" }
    Proposed_unified_mappingFamilies.Machine_family@{ shape: rectangle, label: "MachineFamily" }
    Proposed_unified_mappingFamilies.Tap_changer_and_shunt_family@{ shape: rectangle, label: "TapChangerAndShuntFamily" }
    Proposed_unified_mappingFamilies.Switch_and_terminal_family@{ shape: rectangle, label: "SwitchAndTerminalFamily" }
    Proposed_unified_mappingFamilies.Hvdc_family@{ shape: rectangle, label: "HvdcFamily" }
    Proposed_unified_mappingFamilies.Limit_family@{ shape: rectangle, label: "LimitFamily" }
    Proposed_unified_mappingFamilies.Regulating_control_family@{ shape: rectangle, label: "RegulatingControlFamily" }
    Proposed_unified_mappingFamilies.Control_area_family@{ shape: rectangle, label: "ControlAreaFamily" }
  end
  Proposed_unified_mappingMapping_page@{ shape: rectangle, label: "mapping.md (generated)" }
  Powsybl_coreIidmIoImport_providersCgmes_importer@{ shape: rectangle, label: "CgmesImport" }
  Powsybl_coreCgmesConversion@{ shape: rectangle, label: "Conversion" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "In-place import" }
  Powsybl_coreCgmesConversion_update@{ shape: rectangle, label: "Conversion.update + UpdateScope" }
  Proposed_diffstackingFast_route_capabilities@{ shape: rectangle, label: "Capability table" }
  Proposed_unified_mappingSubject_index@{ shape: rectangle, label: "Subject index" }
  Powsybl_coreCgmesQuery_catalog@{ shape: rectangle, label: "SPARQL catalogue (CIM16*.sparql)" }
  Powsybl_coreCgmesElement_conversions@{ shape: rectangle, label: "elements/*Conversion" }
  Powsybl_coreCgmesTriple_store@{ shape: rectangle, label: "Triple store (rdf4j)" }
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "IIDM Network" }
  Proposed_unified_mappingPlain_rows@{ shape: rectangle, label: "Quantity / PlainRow / LoadRows" }
  Proposed_unified_mappingRefusal@{ shape: rectangle, label: "Refusal" }
  Proposed_unified_mappingProperty_sink@{ shape: rectangle, label: "CgmesPropertySink" }
  Powsybl_coreCgmesSsh_export@{ shape: rectangle, label: "Full SSH export" }
  Proposed_diffstackingPartial_ssh_export@{ shape: rectangle, label: "Partial SSH" }
  Proposed_diffstackingCgmes_diff_export@{ shape: rectangle, label: "CGMES difference model" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink@{ shape: rectangle, label: "RDF database (cgmes-rdfdb)" }
  Unified_mapping_legendUnchanged@{ shape: rectangle, label: "Legend: powsybl-core, upstream" }
  Unified_mapping_legendReworked@{ shape: rectangle, label: "Legend: proposal" }
  Unified_mapping_legendRule_stated@{ shape: rectangle, label: "Legend: upstream code stating the rule" }
  Unified_mapping_legendRule_stated_proposal@{ shape: rectangle, label: "Legend: proposal code stating the rule" }
  Powsybl_coreIidmIoExchange_formatsCgmes -. "\`loads\`" .-> Powsybl_coreIidmIoImport_providersCgmes_importer
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`loads files into\`" .-> Powsybl_coreCgmesTriple_store
  Powsybl_coreCgmesQuery_catalog -. "\`is evaluated on\`" .-> Powsybl_coreCgmesTriple_store
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`Network.read: converts with\`" .-> Powsybl_coreCgmesConversion
  Powsybl_coreCgmesConversion -. "\`reads the model through\`" .-> Powsybl_coreCgmesQuery_catalog
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`Importer.update: updates with\`" .-> Powsybl_coreCgmesConversion_update
  Powsybl_coreCgmesConversion_update -. "\`reads the update queries of\`" .-> Powsybl_coreCgmesQuery_catalog
  Powsybl_coreCgmesConversion -. "\`convert() per object, then update()\`" .-> Powsybl_coreCgmesElement_conversions
  Powsybl_coreCgmesConversion_update -. "\`update() per object\`" .-> Powsybl_coreCgmesElement_conversions
  Powsybl_coreCgmesElement_conversions -. "\`reads loads, areas, switches through\`" .-> Proposed_unified_mappingPlain_rows
  Proposed_unified_mappingProperty_sink -. "\`full model: Xml\`" .-> Powsybl_coreCgmesSsh_export
  Proposed_unified_mappingProperty_sink -. "\`one change: buffer\`" .-> Proposed_diffstackingPartial_ssh_export
  Proposed_unified_mappingProperty_sink -. "\`one change: buffer\`" .-> Proposed_diffstackingCgmes_diff_export
  Proposed_diffstackingCgmes_diff_export -. "\`DifferenceModelSet\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
  Powsybl_coreIidmIoImport_providersCgmes_importer -. "\`would extend: delegates difference models to\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_diff_import -. "\`would extend: runs, scoped to the named equipment\`" .-> Powsybl_coreCgmesConversion_update
  Proposed_diffstackingCgmes_diff_import -. "\`decides route with\`" .-> Proposed_diffstackingFast_route_capabilities
  Proposed_diffstackingCgmes_diff_import -. "\`resolves subjects, completes groups with\`" .-> Proposed_unified_mappingSubject_index
  Powsybl_coreCgmesElement_conversions -. "\`creates and sets the state of\`" .-> Powsybl_coreIidmNetwork
  Proposed_diffstackingChange_translator -. "\`dispatches a change by key to\`" .-> Proposed_unified_mappingFamilies
  Proposed_unified_mappingFamilies -. "\`states plain values as\`" .-> Proposed_unified_mappingPlain_rows
  Proposed_unified_mappingFamilies -. "\`refuses with\`" .-> Proposed_unified_mappingRefusal
  Proposed_unified_mappingFamilies -. "\`describes objects into\`" .-> Proposed_unified_mappingProperty_sink
  Proposed_diffstackingFast_route_capabilities -. "\`derives its table from the blocks of\`" .-> Proposed_unified_mappingFamilies
  Proposed_unified_mappingSubject_index -. "\`describes a subject with\`" .-> Proposed_unified_mappingFamilies
  Proposed_unified_mappingMapping_page -. "\`is generated from\`" .-> Proposed_unified_mappingFamilies
`;case`machine-example`:return`---
title: "One change of a generator's active power, both directions"
---
graph TB
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "IIDM Network" }
  Powsybl_coreIidmVariantsNetwork_event_recorder@{ shape: rectangle, label: "NetworkEventRecorder" }
  Proposed_diffstackingChange_translator@{ shape: rectangle, label: "CgmesChangeTranslator" }
  Proposed_unified_mappingFamiliesMachine_family@{ shape: rectangle, label: "MachineFamily" }
  Proposed_unified_mappingProperty_sink@{ shape: rectangle, label: "CgmesPropertySink" }
  Powsybl_coreCgmesSsh_export@{ shape: rectangle, label: "Full SSH export" }
  Proposed_diffstackingPartial_ssh_export@{ shape: rectangle, label: "Partial SSH" }
  Proposed_diffstackingCgmes_diff_export@{ shape: rectangle, label: "CGMES difference model" }
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink@{ shape: rectangle, label: "RDF database" }
  Proposed_diffstackingCgmes_diff_import@{ shape: rectangle, label: "CgmesDiffImport" }
  Proposed_unified_mappingFast_route_plan@{ shape: rectangle, label: "FastRoutePlan" }
  Proposed_unified_mappingSubject_index@{ shape: rectangle, label: "Families.resolve" }
  Powsybl_coreCgmesConversion_update@{ shape: rectangle, label: "Conversion.update + UpdateScope" }
  Powsybl_coreCgmesElement_conversions@{ shape: rectangle, label: "SynchronousMachineConversion" }
  Unified_mapping_legendUnchanged@{ shape: rectangle, label: "Legend: powsybl-core, upstream" }
  Unified_mapping_legendReworked@{ shape: rectangle, label: "Legend: proposal" }
  Unified_mapping_legendRule_stated@{ shape: rectangle, label: "Legend: upstream code stating the rule" }
  Unified_mapping_legendRule_stated_proposal@{ shape: rectangle, label: "Legend: proposal code stating the rule" }
  Powsybl_coreIidmNetwork -. "\`G.setTargetP(100): event targetP\`" .-> Powsybl_coreIidmVariantsNetwork_event_recorder
  Powsybl_coreIidmVariantsNetwork_event_recorder -. "\`change log\`" .-> Proposed_diffstackingChange_translator
  Proposed_diffstackingChange_translator -. "\`key targetP: generatorUpdates(G)\`" .-> Proposed_unified_mappingFamiliesMachine_family
  Proposed_unified_mappingFamiliesMachine_family -. "\`describeSynchronousMachine: RotatingMachine.p = −100\`" .-> Proposed_unified_mappingProperty_sink
  Proposed_unified_mappingProperty_sink -. "\`buffer: SynchronousMachine block\`" .-> Proposed_diffstackingPartial_ssh_export
  Proposed_unified_mappingProperty_sink -. "\`buffer: forward and reverse statements\`" .-> Proposed_diffstackingCgmes_diff_export
  Proposed_diffstackingCgmes_diff_export -. "\`DifferenceModelSet: two named graphs\`" .-> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
  Proposed_unified_mappingProperty_sink -. "\`full model: same describe, Xml sink\`" .-> Powsybl_coreCgmesSsh_export
  Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -. "\`RdfDbNetworkLoader: difference RotatingMachine.p = −120\`" .-> Proposed_diffstackingCgmes_diff_import
  Proposed_diffstackingCgmes_diff_import -. "\`FastRoutePlan.of(network, diffs)\`" .-> Proposed_unified_mappingFast_route_plan
  Proposed_unified_mappingFast_route_plan -. "\`resolve(id, SynchronousMachine)\`" .-> Proposed_unified_mappingSubject_index
  Proposed_unified_mappingFast_route_plan -. "\`block SYNCHRONOUS_MACHINE: properties, query\`" .-> Proposed_unified_mappingFamiliesMachine_family
  Proposed_unified_mappingFamiliesMachine_family -. "\`describe: completes the block\`" .-> Proposed_unified_mappingFast_route_plan
  Proposed_diffstackingCgmes_diff_import -. "\`synthetic SSH, scoped update\`" .-> Powsybl_coreCgmesConversion_update
  Powsybl_coreCgmesConversion_update -. "\`synchronousMachinesForUpdate row\`" .-> Powsybl_coreCgmesElement_conversions
  Powsybl_coreCgmesElement_conversions -. "\`update(): targetP = −p = 120\`" .-> Powsybl_coreIidmNetwork
`;case`iidm_model`:return`---
title: "IIDM: Network model and exchange formats"
---
graph TB
  subgraph Powsybl_coreIidmCommon_types["\`Common IIDM contracts\`"]
    Powsybl_coreIidmCommon_types.Identifiable@{ shape: rectangle, label: "Identifiable" }
    Powsybl_coreIidmCommon_types.Connectable@{ shape: rectangle, label: "Connectable" }
    Powsybl_coreIidmCommon_types.Terminal@{ shape: rectangle, label: "Terminal" }
  end
  subgraph Powsybl_coreIidmVariants["\`Network lifecycle\`"]
    Powsybl_coreIidmVariants.Network_event_recorder@{ shape: rectangle, label: "NetworkEventRecorder" }
    Powsybl_coreIidmVariants.Network_factory@{ shape: rectangle, label: "NetworkFactory" }
    Powsybl_coreIidmVariants.Variant_manager@{ shape: rectangle, label: "VariantManager" }
    Powsybl_coreIidmVariants.Network_listener@{ shape: rectangle, label: "NetworkListener" }
  end
  subgraph Powsybl_coreIidmTopology["\`Topology and containment\`"]
    Powsybl_coreIidmTopology.Area@{ shape: rectangle, label: "Area and AreaBoundary" }
    Powsybl_coreIidmTopology.Substation@{ shape: rectangle, label: "Substation" }
    Powsybl_coreIidmTopology.Voltage_level@{ shape: rectangle, label: "VoltageLevel" }
    Powsybl_coreIidmTopology.Bus@{ shape: rectangle, label: "Bus" }
    Powsybl_coreIidmTopology.Busbar_section@{ shape: rectangle, label: "BusbarSection" }
    Powsybl_coreIidmTopology.Switch@{ shape: rectangle, label: "Switch" }
    Powsybl_coreIidmTopology.Topology_views@{ shape: rectangle, label: "VoltageLevel topology views" }
  end
  subgraph Powsybl_coreIidmInjections["\`Injections\`"]
    Powsybl_coreIidmInjections.Generator@{ shape: rectangle, label: "Generator" }
    Powsybl_coreIidmInjections.Load@{ shape: rectangle, label: "Load" }
    Powsybl_coreIidmInjections.Battery@{ shape: rectangle, label: "Battery" }
    Powsybl_coreIidmInjections.Shunt_compensator@{ shape: rectangle, label: "ShuntCompensator" }
    Powsybl_coreIidmInjections.Static_var_compensator@{ shape: rectangle, label: "StaticVarCompensator" }
    Powsybl_coreIidmInjections.Ground@{ shape: rectangle, label: "Ground" }
  end
  subgraph Powsybl_coreIidmBranches["\`AC branches\`"]
    Powsybl_coreIidmBranches.Branch@{ shape: rectangle, label: "Branch" }
    Powsybl_coreIidmBranches.Ac_line@{ shape: rectangle, label: "Line" }
    Powsybl_coreIidmBranches.Tie_line@{ shape: rectangle, label: "TieLine" }
  end
  subgraph Powsybl_coreIidmDc_grid["\`DC grid equipment\`"]
    Powsybl_coreIidmDc_grid.Dc_node@{ shape: rectangle, label: "DcNode" }
    Powsybl_coreIidmDc_grid.Dc_ground@{ shape: rectangle, label: "DcGround" }
    Powsybl_coreIidmDc_grid.Dc_bus@{ shape: rectangle, label: "DcBus" }
    Powsybl_coreIidmDc_grid.Dc_line@{ shape: rectangle, label: "DcLine" }
    Powsybl_coreIidmDc_grid.Dc_switch@{ shape: rectangle, label: "DcSwitch" }
    Powsybl_coreIidmDc_grid.Dc_terminal@{ shape: rectangle, label: "DcTerminal" }
    Powsybl_coreIidmDc_grid.Dc_connectivity@{ shape: rectangle, label: "DC connectivity and mutations" }
  end
  subgraph Powsybl_coreIidmLimits_and_control["\`Limits and automation\`"]
    Powsybl_coreIidmLimits_and_control.Operational_limits@{ shape: rectangle, label: "OperationalLimits and LoadingLimits" }
    Powsybl_coreIidmLimits_and_control.Reactive_limits@{ shape: rectangle, label: "ReactiveLimits" }
    Powsybl_coreIidmLimits_and_control.Automation_system@{ shape: rectangle, label: "AutomationSystem and OverloadManagementSystem" }
  end
  subgraph Powsybl_coreIidmExtensions["\`IIDM extensions\`"]
    Powsybl_coreIidmExtensions.Extension_contract@{ shape: rectangle, label: "Extension and Extendable" }
    Powsybl_coreIidmExtensions.Slack_terminal@{ shape: rectangle, label: "SlackTerminal" }
    Powsybl_coreIidmExtensions.Reference_terminals@{ shape: rectangle, label: "ReferenceTerminals" }
    Powsybl_coreIidmExtensions.Cgmes_extensions@{ shape: rectangle, label: "CGMES extensions" }
    Powsybl_coreIidmExtensions.Transformer_estimation_flags@{ shape: rectangle, label: "Transformer estimation flags" }
    Powsybl_coreIidmExtensions.Measurements@{ shape: rectangle, label: "Measurements and discrete measurements extensions" }
    Powsybl_coreIidmExtensions.Observability@{ shape: rectangle, label: "Observability extensions" }
  end
  subgraph Powsybl_coreIidmIo["\`IIDM I/O and format providers\`"]
    subgraph Powsybl_coreIidmIo.Exchange_formats["\`Supported exchange formats\`"]
      Powsybl_coreIidmIo.Exchange_formats.Cgmes@{ shape: rectangle, label: "CGMES" }
      Powsybl_coreIidmIo.Exchange_formats.Ucte@{ shape: rectangle, label: "UCTE" }
      Powsybl_coreIidmIo.Exchange_formats.Matpower@{ shape: rectangle, label: "MATPOWER" }
      Powsybl_coreIidmIo.Exchange_formats.Psse@{ shape: rectangle, label: "PSS/E" }
      Powsybl_coreIidmIo.Exchange_formats.Ieee_cdf@{ shape: rectangle, label: "IEEE CDF" }
      Powsybl_coreIidmIo.Exchange_formats.Powerfactory@{ shape: rectangle, label: "PowerFactory" }
      Powsybl_coreIidmIo.Exchange_formats.Xiidm@{ shape: rectangle, label: "XIIDM XML" }
      Powsybl_coreIidmIo.Exchange_formats.Jiidm@{ shape: rectangle, label: "JIIDM JSON" }
      Powsybl_coreIidmIo.Exchange_formats.Biidm@{ shape: rectangle, label: "BIIDM binary" }
      Powsybl_coreIidmIo.Exchange_formats.Ampl@{ shape: rectangle, label: "AMPL" }
    end
    subgraph Powsybl_coreIidmIo.Import_providers["\`Importer implementations\`"]
      Powsybl_coreIidmIo.Import_providers.Cgmes_importer@{ shape: rectangle, label: "CgmesImport" }
      Powsybl_coreIidmIo.Import_providers.Ucte_importer@{ shape: rectangle, label: "UcteImporter" }
      Powsybl_coreIidmIo.Import_providers.Matpower_importer@{ shape: rectangle, label: "MatpowerImporter" }
      Powsybl_coreIidmIo.Import_providers.Psse_importer@{ shape: rectangle, label: "PsseImporter" }
      Powsybl_coreIidmIo.Import_providers.Ieee_cdf_importer@{ shape: rectangle, label: "IeeeCdfImporter" }
      Powsybl_coreIidmIo.Import_providers.Powerfactory_importer@{ shape: rectangle, label: "PowerFactoryImporter" }
      Powsybl_coreIidmIo.Import_providers.Xiidm_importer@{ shape: rectangle, label: "XMLImporter" }
      Powsybl_coreIidmIo.Import_providers.Jiidm_importer@{ shape: rectangle, label: "JsonImporter" }
      Powsybl_coreIidmIo.Import_providers.Biidm_importer@{ shape: rectangle, label: "BinaryImporter" }
    end
    subgraph Powsybl_coreIidmIo.Export_providers["\`Exporter implementations\`"]
      Powsybl_coreIidmIo.Export_providers.Cgmes_exporter@{ shape: rectangle, label: "CgmesExport" }
      Powsybl_coreIidmIo.Export_providers.Ucte_exporter@{ shape: rectangle, label: "UCTE export adapter" }
      Powsybl_coreIidmIo.Export_providers.Matpower_exporter@{ shape: rectangle, label: "MATPOWER export adapter" }
      Powsybl_coreIidmIo.Export_providers.Psse_exporter@{ shape: rectangle, label: "PSS/E export adapter" }
      Powsybl_coreIidmIo.Export_providers.Xiidm_exporter@{ shape: rectangle, label: "XIIDM XML export adapter" }
      Powsybl_coreIidmIo.Export_providers.Jiidm_exporter@{ shape: rectangle, label: "JIIDM JSON export adapter" }
      Powsybl_coreIidmIo.Export_providers.Biidm_exporter@{ shape: rectangle, label: "BIIDM binary export adapter" }
      Powsybl_coreIidmIo.Export_providers.Ampl_exporter@{ shape: rectangle, label: "AMPL export adapter" }
    end
    Powsybl_coreIidmIo.Network_read_write@{ shape: rectangle, label: "Network.read / Network.write" }
    Powsybl_coreIidmIo.Provider_discovery@{ shape: rectangle, label: "Importers/Exporters ServiceLoader" }
    Powsybl_coreIidmIo.Importer_spi@{ shape: rectangle, label: "Importer and Importers" }
    Powsybl_coreIidmIo.Exporter_spi@{ shape: rectangle, label: "Exporter and Exporters" }
  end
  Powsybl_coreIidmNetwork@{ shape: rectangle, label: "Network" }
  subgraph Powsybl_coreIidmTransformers["\`Transformers and tap changers\`"]
    Powsybl_coreIidmTransformers.Two_windings_transformer@{ shape: rectangle, label: "TwoWindingsTransformer" }
    Powsybl_coreIidmTransformers.Three_windings_transformer@{ shape: rectangle, label: "ThreeWindingsTransformer" }
    Powsybl_coreIidmTransformers.Ratio_tap_changer@{ shape: rectangle, label: "RatioTapChanger" }
    Powsybl_coreIidmTransformers.Phase_tap_changer@{ shape: rectangle, label: "PhaseTapChanger" }
  end
  subgraph Powsybl_coreIidmHvdc["\`HVDC equipment\`"]
    Powsybl_coreIidmHvdc.Hvdc_line@{ shape: rectangle, label: "HvdcLine" }
    Powsybl_coreIidmHvdc.Ac_dc_converters@{ shape: rectangle, label: "IIDM AC/DC converters" }
    Powsybl_coreIidmHvdc.Vsc_converter_station@{ shape: rectangle, label: "VscConverterStation" }
    Powsybl_coreIidmHvdc.Lcc_converter_station@{ shape: rectangle, label: "LccConverterStation" }
  end
  Powsybl_coreIidmVariants.Network_factory -. "\`creates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmVariants.Variant_manager -. "\`selects a working variant on\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmVariants.Network_listener -. "\`observes changes on\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmTopology.Substation -. "\`contains\`" .-> Powsybl_coreIidmTopology.Voltage_level
  Powsybl_coreIidmTopology.Voltage_level -. "\`contains bus topology\`" .-> Powsybl_coreIidmTopology.Bus
  Powsybl_coreIidmTopology.Voltage_level -. "\`contains node/breaker equipment\`" .-> Powsybl_coreIidmTopology.Busbar_section
  Powsybl_coreIidmTopology.Voltage_level -. "\`contains switching equipment\`" .-> Powsybl_coreIidmTopology.Switch
  Powsybl_coreIidmTopology.Voltage_level -. "\`exposes through\`" .-> Powsybl_coreIidmTopology.Topology_views
  Powsybl_coreIidmTransformers.Two_windings_transformer -. "\`may own\`" .-> Powsybl_coreIidmTransformers.Ratio_tap_changer
  Powsybl_coreIidmTransformers.Two_windings_transformer -. "\`may own\`" .-> Powsybl_coreIidmTransformers.Phase_tap_changer
  Powsybl_coreIidmTransformers.Three_windings_transformer -. "\`may own per leg\`" .-> Powsybl_coreIidmTransformers.Ratio_tap_changer
  Powsybl_coreIidmTransformers.Three_windings_transformer -. "\`may own per leg\`" .-> Powsybl_coreIidmTransformers.Phase_tap_changer
  Powsybl_coreIidmHvdc.Hvdc_line -. "\`connects through\`" .-> Powsybl_coreIidmHvdc.Vsc_converter_station
  Powsybl_coreIidmHvdc.Hvdc_line -. "\`connects through\`" .-> Powsybl_coreIidmHvdc.Lcc_converter_station
  Powsybl_coreIidmDc_grid.Dc_terminal -. "\`connects DC topology through\`" .-> Powsybl_coreIidmHvdc.Ac_dc_converters
  Powsybl_coreIidmDc_grid.Dc_connectivity -. "\`changes the active topology of\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmExtensions.Measurements -. "\`attach measurement data to\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmExtensions.Observability -. "\`annotate equipment and topology on\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmNetwork -. "\`provides facade methods for\`" .-> Powsybl_coreIidmIo.Network_read_write
  Powsybl_coreIidmIo.Network_read_write -. "\`selects input provider\`" .-> Powsybl_coreIidmIo.Importer_spi
  Powsybl_coreIidmIo.Network_read_write -. "\`selects output provider\`" .-> Powsybl_coreIidmIo.Exporter_spi
  Powsybl_coreIidmIo.Provider_discovery -. "\`discovers implementations for\`" .-> Powsybl_coreIidmIo.Importer_spi
  Powsybl_coreIidmIo.Provider_discovery -. "\`discovers implementations for\`" .-> Powsybl_coreIidmIo.Exporter_spi
  Powsybl_coreIidmIo.Exchange_formats.Cgmes -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Cgmes_importer
  Powsybl_coreIidmIo.Exchange_formats.Ucte -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Ucte_importer
  Powsybl_coreIidmIo.Exchange_formats.Matpower -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Matpower_importer
  Powsybl_coreIidmIo.Exchange_formats.Psse -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Psse_importer
  Powsybl_coreIidmIo.Exchange_formats.Ieee_cdf -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Ieee_cdf_importer
  Powsybl_coreIidmIo.Exchange_formats.Powerfactory -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Powerfactory_importer
  Powsybl_coreIidmIo.Exchange_formats.Xiidm -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Xiidm_importer
  Powsybl_coreIidmIo.Exchange_formats.Jiidm -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Jiidm_importer
  Powsybl_coreIidmIo.Exchange_formats.Biidm -. "\`loads\`" .-> Powsybl_coreIidmIo.Import_providers.Biidm_importer
  Powsybl_coreIidmIo.Import_providers.Cgmes_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Ucte_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Matpower_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Psse_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Ieee_cdf_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Powerfactory_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Xiidm_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Jiidm_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmIo.Import_providers.Biidm_importer -. "\`creates or updates\`" .-> Powsybl_coreIidmNetwork
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Cgmes_exporter
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Ucte_exporter
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Matpower_exporter
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Psse_exporter
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Xiidm_exporter
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Jiidm_exporter
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Biidm_exporter
  Powsybl_coreIidmNetwork -. "\`serializes\`" .-> Powsybl_coreIidmIo.Export_providers.Ampl_exporter
  Powsybl_coreIidmIo.Export_providers.Cgmes_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Cgmes
  Powsybl_coreIidmIo.Export_providers.Ucte_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Ucte
  Powsybl_coreIidmIo.Export_providers.Matpower_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Matpower
  Powsybl_coreIidmIo.Export_providers.Psse_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Psse
  Powsybl_coreIidmIo.Export_providers.Xiidm_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Xiidm
  Powsybl_coreIidmIo.Export_providers.Jiidm_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Jiidm
  Powsybl_coreIidmIo.Export_providers.Biidm_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Biidm
  Powsybl_coreIidmIo.Export_providers.Ampl_exporter -. "\`writes\`" .-> Powsybl_coreIidmIo.Exchange_formats.Ampl
  Powsybl_coreIidmNetwork -. "\`is composed of identifiable and connectable objects\`" .-> Powsybl_coreIidmCommon_types
  Powsybl_coreIidmNetwork -. "\`owns electrical topology\`" .-> Powsybl_coreIidmTopology
  Powsybl_coreIidmNetwork -. "\`owns injections\`" .-> Powsybl_coreIidmInjections
  Powsybl_coreIidmNetwork -. "\`owns AC branches\`" .-> Powsybl_coreIidmBranches
  Powsybl_coreIidmNetwork -. "\`owns transformers and tap changers\`" .-> Powsybl_coreIidmTransformers
  Powsybl_coreIidmNetwork -. "\`owns DC equipment\`" .-> Powsybl_coreIidmHvdc
  Powsybl_coreIidmNetwork -. "\`owns equipment with limits and automation\`" .-> Powsybl_coreIidmLimits_and_control
  Powsybl_coreIidmExtensions.Transformer_estimation_flags -. "\`annotate equipment in\`" .-> Powsybl_coreIidmTransformers
`;case`loadflow_interaction`:return`---
title: "Load Flow: powsybl-core to Open Load Flow"
---
graph TB
  subgraph Powsybl_core["\`powsybl-core\`"]
    Powsybl_core.Loadflow_api@{ shape: rectangle, label: "Load Flow API" }
    subgraph Powsybl_core.Iidm["\`IIDM API and extensions\`"]
      Powsybl_core.Iidm.Variants@{ shape: rectangle, label: "Network lifecycle" }
      Powsybl_core.Iidm.Extensions@{ shape: rectangle, label: "IIDM extensions" }
      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }
    end
    Powsybl_core.Commons@{ shape: rectangle, label: "Commons services" }
    Powsybl_core.Math@{ shape: rectangle, label: "Math API" }
  end
  subgraph Powsybl_open_loadflow["\`powsybl-open-loadflow\`"]
    Powsybl_open_loadflow.Open_loadflow_provider@{ shape: rectangle, label: "OpenLoadFlowProvider" }
    Powsybl_open_loadflow.Network_cache@{ shape: rectangle, label: "NetworkCache" }
    Powsybl_open_loadflow.Ac_dc_loadflow_engines@{ shape: rectangle, label: "AC/DC load-flow engines" }
    Powsybl_open_loadflow.Lf_network_adapter@{ shape: rectangle, label: "IIDM to LfNetwork adapter" }
    Powsybl_open_loadflow.State_and_result_mapping@{ shape: rectangle, label: "IIDM state and core-result mapping" }
    Powsybl_open_loadflow.Lf_network@{ shape: rectangle, label: "LfNetwork" }
  end
  Powsybl_core.Loadflow_api -. "\`accepts Network and working variant\`" .-> Powsybl_core.Iidm.Network
  Powsybl_core.Iidm.Variants -. "\`[...]\`" .-> Powsybl_core.Iidm.Network
  Powsybl_core.Iidm.Extensions -. "\`enriches state and results on\`" .-> Powsybl_core.Iidm.Network
  Powsybl_core.Loadflow_api -. "\`discovers provider and reports execution\`" .-> Powsybl_core.Commons
  Powsybl_core.Loadflow_api -. "\`supplies matrix capability to providers\`" .-> Powsybl_core.Math
  Powsybl_core.Loadflow_api -. "\`discovers and runs\`" .-> Powsybl_open_loadflow.Open_loadflow_provider
  Powsybl_open_loadflow.Open_loadflow_provider -. "\`runs AC or DC calculation\`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines
  Powsybl_core.Iidm.Network -. "\`is adapted by\`" .-> Powsybl_open_loadflow.Lf_network_adapter
  Powsybl_open_loadflow.Open_loadflow_provider -. "\`loads the computation network\`" .-> Powsybl_open_loadflow.Lf_network_adapter
  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "\`configures\`" .-> Powsybl_open_loadflow.Lf_network_adapter
  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "\`runs AC or DC calculation on\`" .-> Powsybl_open_loadflow.Lf_network
  Powsybl_open_loadflow.Lf_network_adapter -. "\`builds and configures\`" .-> Powsybl_open_loadflow.Lf_network
  Powsybl_open_loadflow.Lf_network -. "\`provides loaded network to\`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines
  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "\`returns results for write-back\`" .-> Powsybl_open_loadflow.State_and_result_mapping
  Powsybl_open_loadflow.Network_cache -. "\`reuses and invalidates\`" .-> Powsybl_open_loadflow.Lf_network
  Powsybl_open_loadflow.Network_cache -. "\`writes completed AC state through\`" .-> Powsybl_open_loadflow.State_and_result_mapping
`;case`sensitivity_interaction`:return`---
title: "Sensitivity Analysis: powsybl-core to Open Load Flow"
---
graph TB
  subgraph Powsybl_core["\`powsybl-core\`"]
    Powsybl_core.Sensitivity_api@{ shape: rectangle, label: "Sensitivity Analysis API" }
    Powsybl_core.Contingency_api@{ shape: rectangle, label: "Contingency API" }
    subgraph Powsybl_core.Iidm["\`IIDM API and extensions\`"]
      Powsybl_core.Iidm.Variants@{ shape: rectangle, label: "Network lifecycle" }
      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }
    end
    Powsybl_core.Commons@{ shape: rectangle, label: "Commons services" }
  end
  subgraph Powsybl_open_loadflow["\`powsybl-open-loadflow\`"]
    Powsybl_open_loadflow.Open_sensitivity_provider@{ shape: rectangle, label: "OpenSensitivityAnalysisProvider" }
    Powsybl_open_loadflow.Open_loadflow_provider@{ shape: rectangle, label: "OpenLoadFlowProvider" }
    Powsybl_open_loadflow.Sensitivity_engines@{ shape: rectangle, label: "AC/DC sensitivity engines" }
    Powsybl_open_loadflow.Lf_network_adapter@{ shape: rectangle, label: "IIDM to LfNetwork adapter" }
    Powsybl_open_loadflow.Lf_network@{ shape: rectangle, label: "LfNetwork" }
  end
  Powsybl_core.Sensitivity_api -. "\`accepts contingency and action inputs\`" .-> Powsybl_core.Contingency_api
  Powsybl_core.Sensitivity_api -. "\`accepts Network and working variant\`" .-> Powsybl_core.Iidm.Network
  Powsybl_core.Iidm.Variants -. "\`[...]\`" .-> Powsybl_core.Iidm.Network
  Powsybl_core.Sensitivity_api -. "\`discovers provider and reports execution\`" .-> Powsybl_core.Commons
  Powsybl_core.Sensitivity_api -. "\`discovers and runs\`" .-> Powsybl_open_loadflow.Open_sensitivity_provider
  Powsybl_open_loadflow.Open_sensitivity_provider -. "\`uses the configured base-case load-flow provider\`" .-> Powsybl_open_loadflow.Open_loadflow_provider
  Powsybl_open_loadflow.Open_sensitivity_provider -. "\`runs sensitivity calculation\`" .-> Powsybl_open_loadflow.Sensitivity_engines
  Powsybl_core.Iidm.Network -. "\`is adapted by\`" .-> Powsybl_open_loadflow.Lf_network_adapter
  Powsybl_open_loadflow.Open_loadflow_provider -. "\`loads the computation network\`" .-> Powsybl_open_loadflow.Lf_network_adapter
  Powsybl_open_loadflow.Sensitivity_engines -. "\`loads base-case topology\`" .-> Powsybl_open_loadflow.Lf_network_adapter
  Powsybl_open_loadflow.Sensitivity_engines -. "\`computes derivatives on\`" .-> Powsybl_open_loadflow.Lf_network
  Powsybl_open_loadflow.Lf_network_adapter -. "\`builds and configures\`" .-> Powsybl_open_loadflow.Lf_network
`;case`contingency_analysis_interaction`:return'---\ntitle: "Contingency Analysis: powsybl-core to Open Load Flow"\n---\ngraph TB\n  subgraph Powsybl_core["`powsybl-core`"]\n    Powsybl_core.Security_analysis_api@{ shape: rectangle, label: "Security Analysis API" }\n    Powsybl_core.Loadflow_api@{ shape: rectangle, label: "Load Flow API" }\n    Powsybl_core.Contingency_api@{ shape: rectangle, label: "Contingency API" }\n    subgraph Powsybl_core.Iidm["`IIDM API and extensions`"]\n      Powsybl_core.Iidm.Network@{ shape: rectangle, label: "Network" }\n      Powsybl_core.Iidm.Topology@{ shape: rectangle, label: "Topology and containment" }\n    end\n    Powsybl_core.Commons@{ shape: rectangle, label: "Commons services" }\n  end\n  subgraph Powsybl_open_loadflow["`powsybl-open-loadflow`"]\n    Powsybl_open_loadflow.Open_security_provider@{ shape: rectangle, label: "OpenSecurityAnalysisProvider" }\n    Powsybl_open_loadflow.Security_analysis_engines@{ shape: rectangle, label: "Security analysis engines" }\n    Powsybl_open_loadflow.Contingency_propagation@{ shape: rectangle, label: "Contingency propagation" }\n    Powsybl_open_loadflow.Lf_network_adapter@{ shape: rectangle, label: "IIDM to LfNetwork adapter" }\n    Powsybl_open_loadflow.State_and_result_mapping@{ shape: rectangle, label: "IIDM state and core-result mapping" }\n    Powsybl_open_loadflow.Lf_network@{ shape: rectangle, label: "LfNetwork" }\n  end\n  Powsybl_core.Security_analysis_api -. "`uses load-flow parameters`" .-> Powsybl_core.Loadflow_api\n  Powsybl_core.Security_analysis_api -. "`obtains contingencies`" .-> Powsybl_core.Contingency_api\n  Powsybl_core.Security_analysis_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Loadflow_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm.Network\n  Powsybl_core.Iidm.Network -. "`owns electrical topology`" .-> Powsybl_core.Iidm.Topology\n  Powsybl_core.Security_analysis_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n  Powsybl_core.Loadflow_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n  Powsybl_core.Security_analysis_api -. "`discovers and runs`" .-> Powsybl_open_loadflow.Open_security_provider\n  Powsybl_open_loadflow.Open_security_provider -. "`runs pre/post-contingency simulations`" .-> Powsybl_open_loadflow.Security_analysis_engines\n  Powsybl_core.Contingency_api -. "`is propagated by`" .-> Powsybl_open_loadflow.Contingency_propagation\n  Powsybl_open_loadflow.Security_analysis_engines -. "`converts and applies outages`" .-> Powsybl_open_loadflow.Contingency_propagation\n  Powsybl_core.Iidm.Network -. "`is adapted by`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Security_analysis_engines -. "`creates topology-specific networks`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Contingency_propagation -. "`produces LfContingency operations for`" .-> Powsybl_open_loadflow.Lf_network\n  Powsybl_open_loadflow.Lf_network_adapter -. "`builds and configures`" .-> Powsybl_open_loadflow.Lf_network\n  Powsybl_open_loadflow.Security_analysis_engines -. "`maps security results`" .-> Powsybl_open_loadflow.State_and_result_mapping\n  Powsybl_open_loadflow.State_and_result_mapping -. "`returns results through`" .-> Powsybl_core.Security_analysis_api\n';case`core_repository_structure`:return'---\ntitle: "powsybl-core: Repository structure"\n---\ngraph TB\n  subgraph Powsybl_core["`powsybl-core`"]\n    Powsybl_core.Sensitivity_api@{ shape: rectangle, label: "Sensitivity Analysis API" }\n    Powsybl_core.Security_analysis_api@{ shape: rectangle, label: "Security Analysis API" }\n    Powsybl_core.Study_contracts@{ shape: rectangle, label: "Study contracts" }\n    Powsybl_core.Loadflow_api@{ shape: rectangle, label: "Load Flow API" }\n    Powsybl_core.Contingency_api@{ shape: rectangle, label: "Contingency API" }\n    Powsybl_core.Iidm@{ shape: rectangle, label: "IIDM API and extensions" }\n    Powsybl_core.Commons@{ shape: rectangle, label: "Commons services" }\n    Powsybl_core.Math@{ shape: rectangle, label: "Math API" }\n    Powsybl_core.Cgmes@{ shape: rectangle, label: "CGMES conversion" }\n  end\n  Powsybl_core.Iidm -. "`[...]`" .-> Powsybl_core.Cgmes\n  Powsybl_core.Loadflow_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm\n  Powsybl_core.Sensitivity_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm\n  Powsybl_core.Security_analysis_api -. "`accepts Network and working variant`" .-> Powsybl_core.Iidm\n  Powsybl_core.Cgmes -. "`[...]`" .-> Powsybl_core.Iidm\n  Powsybl_core.Sensitivity_api -. "`[...]`" .-> Powsybl_core.Study_contracts\n  Powsybl_core.Security_analysis_api -. "`[...]`" .-> Powsybl_core.Study_contracts\n  Powsybl_core.Loadflow_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n  Powsybl_core.Loadflow_api -. "`supplies matrix capability to providers`" .-> Powsybl_core.Math\n  Powsybl_core.Security_analysis_api -. "`uses load-flow parameters`" .-> Powsybl_core.Loadflow_api\n  Powsybl_core.Sensitivity_api -. "`accepts contingency and action inputs`" .-> Powsybl_core.Contingency_api\n  Powsybl_core.Sensitivity_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n  Powsybl_core.Security_analysis_api -. "`obtains contingencies`" .-> Powsybl_core.Contingency_api\n  Powsybl_core.Security_analysis_api -. "`discovers provider and reports execution`" .-> Powsybl_core.Commons\n';case`fast_restart_and_network_cache`:return`---
title: "Open Load Flow: Fast Restart and NetworkCache"
---
graph LR
  subgraph Powsybl_open_loadflowNetwork_cache["\`NetworkCache\`"]
    Powsybl_open_loadflowNetwork_cache.Iidm_change_events@{ shape: rectangle, label: "IIDM NetworkListener changes" }
    Powsybl_open_loadflowNetwork_cache.Change_classifier@{ shape: rectangle, label: "Cache update classification" }
    Powsybl_open_loadflowNetwork_cache.Network_cache_entry@{ shape: rectangle, label: "NetworkCache.Entry" }
    Powsybl_open_loadflowNetwork_cache.Ac_fast_restart@{ shape: rectangle, label: "AcLoadFlowFromCache" }
  end
  Powsybl_open_loadflowState_and_result_mapping@{ shape: rectangle, label: "IIDM state and core-result mapping" }
  Powsybl_open_loadflowNetwork_cache.Iidm_change_events -. "\`notifies\`" .-> Powsybl_open_loadflowNetwork_cache.Network_cache_entry
  Powsybl_open_loadflowNetwork_cache.Iidm_change_events -. "\`classifies changes through\`" .-> Powsybl_open_loadflowNetwork_cache.Change_classifier
  Powsybl_open_loadflowNetwork_cache.Network_cache_entry -. "\`holds the AcLoadFlowContext reused by\`" .-> Powsybl_open_loadflowNetwork_cache.Ac_fast_restart
  Powsybl_open_loadflowNetwork_cache.Change_classifier -. "\`marks the cached context for update or invalidates\`" .-> Powsybl_open_loadflowNetwork_cache.Network_cache_entry
  Powsybl_open_loadflowNetwork_cache.Ac_fast_restart -. "\`writes completed AC state through\`" .-> Powsybl_open_loadflowState_and_result_mapping
`;case`solver_and_outer_loop_pipeline`:return'---\ntitle: "Open Load Flow: AC Solver and Outer-Loop Pipeline"\n---\ngraph LR\n  subgraph Powsybl_open_loadflowAc_dc_loadflow_engines["`AC/DC load-flow engines`"]\n    Powsybl_open_loadflowAc_dc_loadflow_engines.Load_flow_request@{ shape: rectangle, label: "Load-flow run and OpenLoadFlowParameters" }\n    Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine@{ shape: rectangle, label: "AcloadFlowEngine" }\n    Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory@{ shape: rectangle, label: "AcSolverFactory" }\n    Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_raphson@{ shape: rectangle, label: "NewtonRaphson" }\n    Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_krylov@{ shape: rectangle, label: "NewtonKrylov" }\n    Powsybl_open_loadflowAc_dc_loadflow_engines.Fast_decoupled@{ shape: rectangle, label: "FastDecoupled" }\n    Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain@{ shape: rectangle, label: "AC outer-loop chain" }\n  end\n  subgraph Powsybl_open_loadflowLf_network_adapter["`IIDM to LfNetwork adapter`"]\n    Powsybl_open_loadflowLf_network_adapter.Network_loader@{ shape: rectangle, label: "Networks and LfNetworkLoader" }\n  end\n  Powsybl_open_loadflowLf_network@{ shape: rectangle, label: "LfNetwork" }\n  subgraph Powsybl_open_loadflowEquation_toolkit["`Equation builder toolkits`"]\n    Powsybl_open_loadflowEquation_toolkit.Ac_equation_builder@{ shape: rectangle, label: "AC equation builders" }\n    Powsybl_open_loadflowEquation_toolkit.Equation_system@{ shape: rectangle, label: "EquationSystem and Jacobian infrastructure" }\n  end\n  Powsybl_open_loadflowState_and_result_mapping@{ shape: rectangle, label: "IIDM state and core-result mapping" }\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Load_flow_request -. "`configures`" .-> Powsybl_open_loadflowLf_network_adapter.Network_loader\n  Powsybl_open_loadflowLf_network_adapter.Network_loader -. "`builds and configures`" .-> Powsybl_open_loadflowLf_network\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Load_flow_request -. "`configures`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine\n  Powsybl_open_loadflowLf_network -. "`provides loaded network to`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine -. "`creates and updates AC equations through`" .-> Powsybl_open_loadflowEquation_toolkit.Ac_equation_builder\n  Powsybl_open_loadflowEquation_toolkit.Ac_equation_builder -. "`constructs and updates`" .-> Powsybl_open_loadflowEquation_toolkit.Equation_system\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine -. "`selects a solver through`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory\n  Powsybl_open_loadflowEquation_toolkit.Equation_system -. "`supplies equations to`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_raphson\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory -. "`creates when selected`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_raphson\n  Powsybl_open_loadflowEquation_toolkit.Equation_system -. "`supplies equations to`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_krylov\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory -. "`creates when selected`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_krylov\n  Powsybl_open_loadflowEquation_toolkit.Equation_system -. "`supplies equations to`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Fast_decoupled\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory -. "`creates when selected`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Fast_decoupled\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_raphson -. "`returns state to`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_krylov -. "`returns state to`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Fast_decoupled -. "`returns state to`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain -. "`updates controls and requests another pass from`" .-> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine\n  Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine -. "`writes final state through`" .-> Powsybl_open_loadflowState_and_result_mapping\n';case`open_loadflow_components`:return'---\ntitle: "powsybl-open-loadflow Components"\n---\ngraph TB\n  subgraph Powsybl_open_loadflow["`powsybl-open-loadflow`"]\n    Powsybl_open_loadflow.Coupled_ac_dc_lf_network@{ shape: rectangle, label: "Coupled LfNetwork" }\n    Powsybl_open_loadflow.Network_cache@{ shape: rectangle, label: "NetworkCache" }\n    Powsybl_open_loadflow.Open_security_provider@{ shape: rectangle, label: "OpenSecurityAnalysisProvider" }\n    Powsybl_open_loadflow.Open_sensitivity_provider@{ shape: rectangle, label: "OpenSensitivityAnalysisProvider" }\n    Powsybl_open_loadflow.Security_analysis_engines@{ shape: rectangle, label: "Security analysis engines" }\n    Powsybl_open_loadflow.Sensitivity_engines@{ shape: rectangle, label: "AC/DC sensitivity engines" }\n    Powsybl_open_loadflow.Open_loadflow_provider@{ shape: rectangle, label: "OpenLoadFlowProvider" }\n    Powsybl_open_loadflow.Contingency_propagation@{ shape: rectangle, label: "Contingency propagation" }\n    Powsybl_open_loadflow.Ac_dc_loadflow_engines@{ shape: rectangle, label: "AC/DC load-flow engines" }\n    Powsybl_open_loadflow.Study_execution@{ shape: rectangle, label: "Study execution" }\n    Powsybl_open_loadflow.Lf_network_adapter@{ shape: rectangle, label: "IIDM to LfNetwork adapter" }\n    Powsybl_open_loadflow.Ac_dc_result_mapping@{ shape: rectangle, label: "IIDM state and Core result mapping" }\n    Powsybl_open_loadflow.State_and_result_mapping@{ shape: rectangle, label: "IIDM state and core-result mapping" }\n    Powsybl_open_loadflow.Lf_network@{ shape: rectangle, label: "LfNetwork" }\n    Powsybl_open_loadflow.Equation_toolkit@{ shape: rectangle, label: "Equation builder toolkits" }\n  end\n  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "`configures`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "`produces converged state for`" .-> Powsybl_open_loadflow.Ac_dc_result_mapping\n  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "`returns results for write-back`" .-> Powsybl_open_loadflow.State_and_result_mapping\n  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "`builds AC and DC equations with`" .-> Powsybl_open_loadflow.Equation_toolkit\n  Powsybl_open_loadflow.Ac_dc_loadflow_engines -. "`runs AC or DC calculation on`" .-> Powsybl_open_loadflow.Lf_network\n  Powsybl_open_loadflow.Coupled_ac_dc_lf_network -. "`supplies coupled equations to`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines\n  Powsybl_open_loadflow.Equation_toolkit -. "`supplies equations to`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines\n  Powsybl_open_loadflow.Lf_network -. "`provides loaded network to`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines\n  Powsybl_open_loadflow.Open_loadflow_provider -. "`runs AC or DC calculation`" .-> Powsybl_open_loadflow.Ac_dc_loadflow_engines\n  Powsybl_open_loadflow.Lf_network_adapter -. "`builds`" .-> Powsybl_open_loadflow.Coupled_ac_dc_lf_network\n  Powsybl_open_loadflow.Lf_network_adapter -. "`builds and configures`" .-> Powsybl_open_loadflow.Lf_network\n  Powsybl_open_loadflow.Security_analysis_engines -. "`creates topology-specific networks`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Sensitivity_engines -. "`loads base-case topology`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Open_loadflow_provider -. "`loads the computation network`" .-> Powsybl_open_loadflow.Lf_network_adapter\n  Powsybl_open_loadflow.Study_execution -. "`adds violations to`" .-> Powsybl_open_loadflow.State_and_result_mapping\n  Powsybl_open_loadflow.Contingency_propagation -. "`applies outages for`" .-> Powsybl_open_loadflow.Study_execution\n  Powsybl_open_loadflow.Network_cache -. "`writes completed AC state through`" .-> Powsybl_open_loadflow.State_and_result_mapping\n  Powsybl_open_loadflow.Security_analysis_engines -. "`maps security results`" .-> Powsybl_open_loadflow.State_and_result_mapping\n  Powsybl_open_loadflow.Network_cache -. "`reuses and invalidates`" .-> Powsybl_open_loadflow.Lf_network\n  Powsybl_open_loadflow.Security_analysis_engines -. "`converts and applies outages`" .-> Powsybl_open_loadflow.Contingency_propagation\n  Powsybl_open_loadflow.Open_security_provider -. "`runs pre/post-contingency simulations`" .-> Powsybl_open_loadflow.Security_analysis_engines\n  Powsybl_open_loadflow.Sensitivity_engines -. "`reuses factorized Jacobians from`" .-> Powsybl_open_loadflow.Equation_toolkit\n  Powsybl_open_loadflow.Sensitivity_engines -. "`computes derivatives on`" .-> Powsybl_open_loadflow.Lf_network\n  Powsybl_open_loadflow.Open_sensitivity_provider -. "`runs sensitivity calculation`" .-> Powsybl_open_loadflow.Sensitivity_engines\n  Powsybl_open_loadflow.Lf_network -. "`supplies variables and network state to`" .-> Powsybl_open_loadflow.Equation_toolkit\n  Powsybl_open_loadflow.Contingency_propagation -. "`produces LfContingency operations for`" .-> Powsybl_open_loadflow.Lf_network\n  Powsybl_open_loadflow.Open_sensitivity_provider -. "`uses the configured base-case load-flow provider`" .-> Powsybl_open_loadflow.Open_loadflow_provider\n';case`capability_and_provider_bundle`:return`---
title: "pypowsybl: Capability and Provider Bundle"
---
graph TB
  subgraph Pypowsybl_capability_bundle["\`pypowsybl: capability families\`"]
    Pypowsybl_capability_bundle.Network_and_steady_state@{ shape: rectangle, label: "Network and steady-state analysis" }
    Pypowsybl_capability_bundle.Optimization_and_reac@{ shape: rectangle, label: "Optimization and remedial action" }
    Pypowsybl_capability_bundle.Operational_studies@{ shape: rectangle, label: "Operational studies" }
    Pypowsybl_capability_bundle.Dynamic_and_visualization@{ shape: rectangle, label: "Dynamic simulation and visualization" }
  end
  subgraph Pypowsybl["\`pypowsybl\`"]
    Pypowsybl.Native_image_bridge@{ shape: rectangle, label: "GraalVM native-image bridge" }
  end
  subgraph Pypowsybl_bundled_services["\`pypowsybl: bundled service families\`"]
    Pypowsybl_bundled_services.Core_iidm_and_formats@{ shape: rectangle, label: "Core IIDM, formats, and CGMES" }
    Pypowsybl_bundled_services.Open_loadflow_services@{ shape: rectangle, label: "Open Load Flow providers" }
    Pypowsybl_bundled_services.Optimization_and_reac_services@{ shape: rectangle, label: "Optimization and Open REAC" }
    Pypowsybl_bundled_services.Operational_study_services@{ shape: rectangle, label: "RAO, CRAC, short circuit, and flow decomposition" }
    Pypowsybl_bundled_services.Dynamic_and_diagram_services@{ shape: rectangle, label: "Dynawo, Dynaflow, SLD, and NAD" }
  end
  Pypowsybl_capability_bundle.Network_and_steady_state -. "\`maps DataFrames and handles to\`" .-> Pypowsybl_bundled_services.Core_iidm_and_formats
  Pypowsybl_capability_bundle.Network_and_steady_state -. "\`selects through Core APIs\`" .-> Pypowsybl_bundled_services.Open_loadflow_services
  Pypowsybl_capability_bundle.Optimization_and_reac -. "\`maps to\`" .-> Pypowsybl_bundled_services.Optimization_and_reac_services
  Pypowsybl_capability_bundle.Operational_studies -. "\`maps to\`" .-> Pypowsybl_bundled_services.Operational_study_services
  Pypowsybl_capability_bundle.Dynamic_and_visualization -. "\`maps to\`" .-> Pypowsybl_bundled_services.Dynamic_and_diagram_services
  Pypowsybl.Native_image_bridge -. "\`loads\`" .-> Pypowsybl_bundled_services.Core_iidm_and_formats
  Pypowsybl.Native_image_bridge -. "\`loads\`" .-> Pypowsybl_bundled_services.Open_loadflow_services
  Pypowsybl.Native_image_bridge -. "\`loads\`" .-> Pypowsybl_bundled_services.Optimization_and_reac_services
  Pypowsybl.Native_image_bridge -. "\`loads\`" .-> Pypowsybl_bundled_services.Operational_study_services
  Pypowsybl.Native_image_bridge -. "\`loads\`" .-> Pypowsybl_bundled_services.Dynamic_and_diagram_services
`;case`pypowsybl_binding_layers`:return`---
title: "pypowsybl: Binding and DataFrame layers"
---
graph TB
  subgraph Pypowsybl["\`pypowsybl\`"]
    Pypowsybl.Ac_dc_opf@{ shape: rectangle, label: "AC/DC OPF prototype" }
    Pypowsybl.Python_study_parameters@{ shape: rectangle, label: "Python study parameter facades" }
    Pypowsybl.Python_api@{ shape: rectangle, label: "Python domain APIs" }
    Pypowsybl.Dc_dataframes@{ shape: rectangle, label: "Network DC DataFrames and mutation APIs" }
    Pypowsybl.Python_network@{ shape: rectangle, label: "pypowsybl.network.Network" }
    Pypowsybl.Dataframe_views@{ shape: rectangle, label: "pandas DataFrame adapters" }
    Pypowsybl.Pybind_extension@{ shape: rectangle, label: "_pypowsybl pybind11 extension" }
    Pypowsybl.Native_image_bridge@{ shape: rectangle, label: "GraalVM native-image bridge" }
    Pypowsybl.Pandas_study_results@{ shape: rectangle, label: "pandas study result adapters" }
    subgraph Pypowsybl.Java_bindings["\`Java C entry points\`"]
      Pypowsybl.Java_bindings.Network_c_functions@{ shape: rectangle, label: "NetworkCFunctions" }
      Pypowsybl.Java_bindings.Analysis_c_functions@{ shape: rectangle, label: "LoadFlowCFunctions, SecurityAnalysisCFunctions, SensitivityAnalysisCFunctions" }
    end
    Pypowsybl.Dataframe_mappers@{ shape: rectangle, label: "Java DataFrame mappers" }
    Pypowsybl.Measurement_and_observability_dataframes@{ shape: rectangle, label: "Measurement and observability DataFrames" }
  end
  Pypowsybl.Ac_dc_opf -. "\`reads inputs and writes solved values through\`" .-> Pypowsybl.Dc_dataframes
  Pypowsybl.Python_study_parameters -. "\`marshals through\`" .-> Pypowsybl.Native_image_bridge
  Pypowsybl.Native_image_bridge -. "\`returns result series through\`" .-> Pypowsybl.Pandas_study_results
  Pypowsybl.Pybind_extension -. "\`calls native-image entry points through\`" .-> Pypowsybl.Native_image_bridge
  Pypowsybl.Python_api -. "\`creates and passes Network handles\`" .-> Pypowsybl.Python_network
  Pypowsybl.Python_api -. "\`calls the extension module\`" .-> Pypowsybl.Pybind_extension
  Pypowsybl.Python_api -. "\`accepts and returns pandas DataFrames\`" .-> Pypowsybl.Dataframe_views
  Pypowsybl.Python_network -. "\`passes its opaque handle to\`" .-> Pypowsybl.Pybind_extension
  Pypowsybl.Dataframe_views -. "\`marshals Dataframe and SeriesArray data through\`" .-> Pypowsybl.Pybind_extension
  Pypowsybl.Dataframe_mappers -. "\`registers providers for\`" .-> Pypowsybl.Measurement_and_observability_dataframes
  Pypowsybl.Native_image_bridge -. "\`forwards calls across the isolate to\`" .-> Pypowsybl.Java_bindings
  Pypowsybl.Java_bindings -. "\`maps IIDM elements and result series through\`" .-> Pypowsybl.Dataframe_mappers
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};