var e=e=>{switch(e){case`index`:return`direction: right

Pypowsybl: {
  label: "pypowsybl"

  Java_bindings: {
    label: "Java C entry points"

    Network_c_functions: {
      label: "NetworkCFunctions"
    }
    Analysis_c_functions: {
      label: "LoadFlowCFunctions, SecurityAnalysisCFunctions, SensitivityAnalysisCFunctions"
    }
  }
  Python_api: {
    label: "Python domain APIs"
  }
  Dataframe_mappers: {
    label: "Java DataFrame mappers"
  }
  Python_network: {
    label: "pypowsybl.network.Network"
  }
  Dataframe_views: {
    label: "pandas DataFrame adapters"
  }
  Pybind_extension: {
    label: "_pypowsybl pybind11 extension"
  }
  Native_image_bridge: {
    label: "GraalVM native-image bridge"
  }
}
Powsybl_core: {
  label: "powsybl-core"

  Sensitivity_api: {
    label: "Sensitivity Analysis API"
  }
  Security_analysis_api: {
    label: "Security Analysis API"
  }
  Loadflow_api: {
    label: "Load Flow API"
  }
  Contingency_api: {
    label: "Contingency API"
  }
  Iidm: {
    label: "IIDM API and extensions"

    Network: {
      label: "Network"
    }
  }
  Commons: {
    label: "Commons services"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Open_sensitivity_provider: {
    label: "OpenSensitivityAnalysisProvider"
  }
  Open_security_provider: {
    label: "OpenSecurityAnalysisProvider"
  }
  Contingency_propagation: {
    label: "Contingency propagation"
  }
  Open_loadflow_provider: {
    label: "OpenLoadFlowProvider"
  }
  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"
  }
}

Pypowsybl.Python_api -> Pypowsybl.Python_network: "creates and passes Network handles"
Pypowsybl.Python_api -> Pypowsybl.Dataframe_views: "accepts and returns pandas DataFrames"
Pypowsybl.Python_api -> Pypowsybl.Pybind_extension: "calls the extension module"
Pypowsybl.Python_network -> Pypowsybl.Pybind_extension: "passes its opaque handle to"
Pypowsybl.Dataframe_views -> Pypowsybl.Pybind_extension: "marshals Dataframe and SeriesArray data through"
Pypowsybl.Pybind_extension -> Pypowsybl.Native_image_bridge: "calls native-image entry points through"
Pypowsybl.Java_bindings.Network_c_functions -> Powsybl_core.Iidm.Network: "binds Network handles"
Pypowsybl.Dataframe_mappers -> Powsybl_core.Iidm.Network: "maps IIDM elements through"
Pypowsybl.Java_bindings.Analysis_c_functions -> Powsybl_core.Loadflow_api: "binds load-flow APIs"
Powsybl_core.Loadflow_api -> Powsybl_core.Iidm.Network: "accepts Network and working variant"
Pypowsybl.Java_bindings.Analysis_c_functions -> Powsybl_core.Sensitivity_api: "binds sensitivity APIs"
Powsybl_core.Sensitivity_api -> Pypowsybl.Native_image_bridge: "returns through"
Powsybl_core.Sensitivity_api -> Powsybl_core.Iidm.Network: "accepts Network and working variant"
Pypowsybl.Java_bindings.Analysis_c_functions -> Powsybl_core.Security_analysis_api: "binds security-analysis APIs"
Powsybl_core.Security_analysis_api -> Pypowsybl.Native_image_bridge: "returns through"
Powsybl_core.Security_analysis_api -> Powsybl_core.Iidm.Network: "accepts Network and working variant"
Powsybl_core.Security_analysis_api -> Powsybl_core.Loadflow_api: "uses load-flow parameters"
Powsybl_core.Sensitivity_api -> Powsybl_core.Contingency_api: "accepts contingency and action inputs"
Powsybl_core.Security_analysis_api -> Powsybl_core.Contingency_api: "obtains contingencies"
Pypowsybl.Native_image_bridge -> Powsybl_core.Commons: "initializes Java services from"
Powsybl_core.Loadflow_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Sensitivity_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Security_analysis_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Loadflow_api -> Powsybl_open_loadflow.Open_loadflow_provider: "discovers and runs"
Powsybl_core.Sensitivity_api -> Powsybl_open_loadflow.Open_sensitivity_provider: "discovers and runs"
Powsybl_open_loadflow.Open_sensitivity_provider -> Powsybl_open_loadflow.Open_loadflow_provider: "uses the configured base-case load-flow provider"
Powsybl_core.Security_analysis_api -> Powsybl_open_loadflow.Open_security_provider: "discovers and runs"
Powsybl_core.Iidm.Network -> Powsybl_open_loadflow.Lf_network_adapter: "is adapted by"
Powsybl_open_loadflow.Open_loadflow_provider -> Powsybl_open_loadflow.Lf_network_adapter: "loads the computation network"
Powsybl_core.Contingency_api -> Powsybl_open_loadflow.Contingency_propagation: "is propagated by"
Pypowsybl.Native_image_bridge -> Pypowsybl.Java_bindings: "forwards calls across the isolate to"
Pypowsybl.Java_bindings -> Pypowsybl.Dataframe_mappers: "maps IIDM elements and result series through"
`;case`cgmes_change_export`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Iidm: {
    label: "IIDM API and extensions"

    Io: {
      label: "IIDM I/O and format providers"

      Exchange_formats: {
        label: "Supported exchange formats"

        Cgmes: {
          label: "CGMES"
        }
      }
      Import_providers: {
        label: "Importer implementations"

        Cgmes_importer: {
          label: "CgmesImport"
        }
      }
    }
    Variants: {
      label: "Network lifecycle"

      Network_event_recorder: {
        label: "NetworkEventRecorder"
      }
    }
    Network: {
      label: "Network"
    }
  }
  Cgmes: {
    label: "CGMES conversion"

    Triple_store: {
      label: "Triple store (rdf4j)"
    }
    Cgmes_model: {
      label: "cgmes-model"
    }
  }
}
Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Partial_ssh_export: {
    label: "PartialSshExport"
  }
  Cgmes_diff_export: {
    label: "CgmesDiffExport"
  }
  Change_translator: {
    label: "CgmesChangeTranslator + IidmStateView"
  }
  Difference_model: {
    label: "DifferenceModelSet / CgmesStatement"
  }
  Difference_sink: {
    label: "DifferenceSink / DifferenceModelWriter"
  }
  Difference_model_format: {
    label: "CGMES Difference Model"
  }
}

Powsybl_core.Iidm.Io.Exchange_formats.Cgmes -> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer: "loads"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Powsybl_core.Iidm.Network: "creates or updates"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Powsybl_core.Cgmes.Triple_store: "loads files into"
Powsybl_core.Cgmes.Cgmes_model -> Proposed_diffstacking.Difference_model: "would extend: defines the profiles and metadata of"
Powsybl_core.Iidm.Variants.Network_event_recorder -> Proposed_diffstacking.Partial_ssh_export: "would be consumed as-is: provides change log to"
Proposed_diffstacking.Partial_ssh_export -> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes: "would consume as-is: writes partial SSH"
Powsybl_core.Iidm.Variants.Network_event_recorder -> Proposed_diffstacking.Cgmes_diff_export: "would be consumed as-is: provides change log to"
Proposed_diffstacking.Cgmes_diff_export -> Proposed_diffstacking.Difference_model: "generates"
Proposed_diffstacking.Partial_ssh_export -> Proposed_diffstacking.Change_translator: "map changes with"
Proposed_diffstacking.Cgmes_diff_export -> Proposed_diffstacking.Change_translator: "map changes with"
Proposed_diffstacking.Change_translator -> Powsybl_core.Iidm.Network: "would consume as-is: reads current (and overlaid previous) state of"
Proposed_diffstacking.Change_translator -> Proposed_diffstacking.Difference_model: "emits EQ statements for limits and impedances into"
Proposed_diffstacking.Difference_model -> Proposed_diffstacking.Difference_sink: "is pushed to"
Proposed_diffstacking.Difference_sink -> Proposed_diffstacking.Difference_model_format: "writes one file per profile"
`;case`cgmes_diff_import`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Iidm: {
    label: "IIDM API and extensions"

    Io: {
      label: "IIDM I/O and format providers"

      Exchange_formats: {
        label: "Supported exchange formats"
      }
      Import_providers: {
        label: "Importer implementations"

        Cgmes_importer: {
          label: "CgmesImport"
        }
      }
    }
    Network: {
      label: "Network"
    }
  }
  Cgmes: {
    label: "CGMES conversion"

    Conversion_update: {
      label: "Conversion.update (SSH update workflow)"
    }
    Triple_store: {
      label: "Triple store (rdf4j)"
    }
  }
}
Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Difference_model_format: {
    label: "CGMES Difference Model"
  }
  Cgmes_diff_import: {
    label: "CgmesDiffImport"
  }
  Triple_store_diff_applier: {
    label: "TripleStoreDiffApplier"
  }
  Difference_model_parser: {
    label: "DifferenceModelParser"
  }
  Fast_route_capabilities: {
    label: "FastRouteCapabilities + DiffSubjectResolver"
  }
  Cgmes_object_dump: {
    label: "CgmesObjectDump"
  }
  Diff_update_store: {
    label: "DiffUpdateStoreBuilder"
  }
  Direct_eq_applier: {
    label: "DirectEqApplier + CgmesLimitIndex"
  }
  Change_translator: {
    label: "CgmesChangeTranslator + IidmStateView"
  }
  Difference_model: {
    label: "DifferenceModelSet / CgmesStatement"
  }
}

Powsybl_core.Iidm.Io.Exchange_formats -> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer: "loads"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Powsybl_core.Iidm.Network: "creates or updates"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Powsybl_core.Cgmes.Triple_store: "loads files into"
Proposed_diffstacking.Difference_model_format -> Proposed_diffstacking.Difference_model_parser: "is read by"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Proposed_diffstacking.Difference_model_parser: "would extend: detects difference model files with"
Proposed_diffstacking.Difference_model_parser -> Proposed_diffstacking.Difference_model: "produces"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Proposed_diffstacking.Cgmes_diff_import: "would extend: delegates difference models to"
Proposed_diffstacking.Cgmes_diff_import -> Powsybl_core.Iidm.Network: "applies a difference in place, into a variant"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_diffstacking.Fast_route_capabilities: "decides route with"
Proposed_diffstacking.Fast_route_capabilities -> Powsybl_core.Iidm.Network: "would consume as-is: resolves subjects and types in"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_diffstacking.Cgmes_object_dump: "completes groups / checks reverse values with"
Proposed_diffstacking.Cgmes_object_dump -> Proposed_diffstacking.Change_translator: "reuses export mapping of"
Proposed_diffstacking.Change_translator -> Powsybl_core.Iidm.Network: "would consume as-is: reads current (and overlaid previous) state of"
Proposed_diffstacking.Change_translator -> Proposed_diffstacking.Difference_model: "emits EQ statements for limits and impedances into"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_diffstacking.Diff_update_store: "builds synthetic SSH update store"
Proposed_diffstacking.Diff_update_store -> Powsybl_core.Cgmes.Triple_store: "would consume as-is: writes into"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Powsybl_core.Cgmes.Conversion_update: "Importer.update: updates with"
Proposed_diffstacking.Cgmes_diff_import -> Powsybl_core.Cgmes.Conversion_update: "would extend: runs, scoped to the named equipment"
Powsybl_core.Cgmes.Conversion_update -> Powsybl_core.Iidm.Network: "updates in place"
Powsybl_core.Cgmes.Conversion_update -> Powsybl_core.Cgmes.Triple_store: "queries"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_diffstacking.Direct_eq_applier: "applies EQ statements with"
Proposed_diffstacking.Direct_eq_applier -> Powsybl_core.Iidm.Network: "would consume as-is: sets impedances and limits on"
Proposed_diffstacking.Triple_store_diff_applier -> Powsybl_core.Cgmes.Triple_store: "would consume as-is: replaces property values in"
`;case`cgmes_diff_import_fast_route`:return`direction: right

Powsybl_coreIidmIoImport_providersCgmes_importer: {
  label: "CgmesImport"
}
Proposed_diffstackingDifference_model_parser: {
  label: "DifferenceModelParser"
}
Proposed_diffstackingDifference_model: {
  label: "DifferenceModelSet / CgmesStatement"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}
Proposed_diffstackingFast_route_capabilities: {
  label: "FastRouteCapabilities + DiffSubjectResolver"
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}
Proposed_diffstackingCgmes_object_dump: {
  label: "CgmesObjectDump"
}
Proposed_diffstackingChange_translator: {
  label: "CgmesChangeTranslator + IidmStateView"
}
Proposed_diffstackingDiff_update_store: {
  label: "DiffUpdateStoreBuilder"
}
Powsybl_coreCgmesTriple_store: {
  label: "Triple store (rdf4j)"
}
Powsybl_coreCgmesConversion_update: {
  label: "Conversion.update (SSH update workflow)"
}
Proposed_diffstackingDirect_eq_applier: {
  label: "DirectEqApplier + CgmesLimitIndex"
}

Powsybl_coreIidmIoImport_providersCgmes_importer -> Proposed_diffstackingDifference_model_parser: "reads the first elements of every file of the data source"
Proposed_diffstackingDifference_model_parser -> Proposed_diffstackingDifference_model: "parses the document into forward and reverse statements"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Proposed_diffstackingCgmes_diff_import: "hands over the difference models and the import parameters"
Proposed_diffstackingCgmes_diff_import -> Proposed_diffstackingFast_route_capabilities: "asks whether every property is one an update query reads"
Proposed_diffstackingFast_route_capabilities -> Powsybl_coreIidmNetwork: "resolves every subject to an object and a CIM class"
Proposed_diffstackingCgmes_diff_import -> Proposed_diffstackingCgmes_object_dump: "asks for the properties a touched consistency group is missing"
Proposed_diffstackingCgmes_object_dump -> Proposed_diffstackingChange_translator: "probes the export mapping with a synthetic change"
Proposed_diffstackingChange_translator -> Powsybl_coreIidmNetwork: "reads the current value"
Proposed_diffstackingCgmes_diff_import -> Proposed_diffstackingDiff_update_store: "hands over the completed, typed objects"
Proposed_diffstackingDiff_update_store -> Powsybl_coreCgmesTriple_store: "loads a synthetic partial SSH document"
Proposed_diffstackingCgmes_diff_import -> Powsybl_coreCgmesConversion_update: "runs the update, restricted to the equipment the difference names"
Powsybl_coreCgmesConversion_update -> Powsybl_coreCgmesTriple_store: "runs the update queries"
Powsybl_coreCgmesConversion_update -> Powsybl_coreIidmNetwork: "sets the new values and registers the difference as the model of its profile"
Proposed_diffstackingCgmes_diff_import -> Proposed_diffstackingDirect_eq_applier: "hands over the equipment statements no update query reads"
Proposed_diffstackingDirect_eq_applier -> Powsybl_coreIidmNetwork: "sets the impedances and the voltage level limits, and syncs the CGMES 2.4.15 normal values"
`;case`cgmes_loading_split`:return`direction: right

Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Cgmes_rdfdb: {
    label: "cgmes-rdfdb"

    Rdf_db_network_loader: {
      label: "RdfDbNetworkLoader"
    }
    Rdf_database_config: {
      label: "RdfDatabase"
    }
    Rdf_db_difference_sink: {
      label: "RdfDbDifferenceSink / RdfDbExport"
    }
    Checkpoint: {
      label: "Checkpoint"
    }
    Rdf_db_provenance: {
      label: "RdfDbProvenance"
    }
    Diff_update_planner: {
      label: "DiffUpdatePlanner"
    }
    Variant_updater: {
      label: "VariantUpdater + VariantBulkLoader"
    }
    Rdf_db_connection: {
      label: "RdfDbConnection"
    }
    Rdf_db_materializer: {
      label: "RdfDbMaterializer"
    }
    Version_graph: {
      label: "VersionGraph (per scenario)"
    }
    Variant_scope: {
      label: "VariantScope"
    }
    Model_catalog: {
      label: "ModelCatalog (metadata graph per scenario)"
    }
    Graph_fetcher: {
      label: "GraphFetcher + GraphCache"
    }
    Rdf_db_diff_source: {
      label: "RdfDbDiffSource + StatementCodec"
    }
    Snapshot_catalog: {
      label: "SnapshotCatalog (per scenario)"
    }
    Variant_binding: {
      label: "VariantBinding"
    }
    Graph_uploader: {
      label: "GraphUploader"
    }
    Triple_diff_calculator: {
      label: "TripleDiffCalculator"
    }
    Timesteps: {
      label: "Timesteps + SnapshotRef"
    }
  }
  Cgmes_triple_store_loader: {
    label: "CgmesTripleStoreLoader"
  }
  Triple_store_network_loader: {
    label: "TripleStoreNetworkLoader"
  }
  Triple_store_sparql: {
    label: "TripleStoreRDF4JSparql"
  }
}
Powsybl_core: {
  label: "powsybl-core"

  Iidm: {
    label: "IIDM API and extensions"

    Io: {
      label: "IIDM I/O and format providers"

      Import_providers: {
        label: "Importer implementations"

        Cgmes_importer: {
          label: "CgmesImport"
        }
      }
    }
    Network: {
      label: "Network"
    }
  }
  Cgmes: {
    label: "CGMES conversion"

    Triple_store: {
      label: "Triple store (rdf4j)"
    }
  }
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"

  Scenario_a: {
    label: "Scenario \\"2016-01-01\\""
  }
  Scenario_b: {
    label: "Scenario \\"2016-01-02\\""
  }
  Store_meta_graph: {
    label: "Metadata graph per scenario"
  }
  Store_checkpoint_copies: {
    label: "Checkpoint copies"
  }
  Store_data_graphs: {
    label: "Immutable data graphs"
  }
  Store_diff_graphs: {
    label: "Forward / reverse diff graphs"
  }
}

Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Powsybl_core.Iidm.Network: "creates or updates"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Powsybl_core.Cgmes.Triple_store: "loads files into"
Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer -> Proposed_diffstacking.Cgmes_triple_store_loader: "reads files with (CgmesModelTripleStore.read delegates, parallelism 1)"
Proposed_diffstacking.Cgmes_triple_store_loader -> Powsybl_core.Cgmes.Triple_store: "writes contexts to"
Proposed_diffstacking.Triple_store_network_loader -> Powsybl_core.Iidm.Network: "creates or updates"
Proposed_diffstacking.Triple_store_network_loader -> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer: "converts through CgmesImport.convert / update"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -> Powsybl_core.Iidm.Io.Import_providers.Cgmes_importer: "takes TripleStoreOptions from"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -> Proposed_diffstacking.Cgmes_triple_store_loader: "uploads a data source with"
Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher -> Powsybl_core.Cgmes.Triple_store: "fills local MemoryStore"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Triple_store_network_loader: "converts fetched graphs with"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_triple_store_loader: "parses the instance files of a root into a scratch store with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection: "is opened into"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog: "registers uploaded full models in"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher: "fetches the scenario with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher: "base graphs (cached)"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance: "records the origin as"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source: "fetches and composes the chain with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner: "plans NOOP | DIFF | FULL"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer: "rebuilds the target with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "plans and materialises a snapshot with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Variant_updater: "dispatches an opted-in variant update or a bulk load to"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance -> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding: "holds one per bound variant; a NetworkListener keeps them in step with clone, overwrite and remove"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog: "checks base / linear rule"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "a versioned export targets a snapshot of"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope: "writes one history per variant inside"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink: "writes a new version through (snapshot node in the same request)"
Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner -> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog: "chain query"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source: "fetches the chain with"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source: "every difference of every accepted path, in one request"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer: "the first snapshot of a day, converted once"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader: "uploads the instance files of a root with"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator: "ingests a timestep from files with"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Timesteps: "resolves labels and versions with"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "resolves the address in"
Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "asks what to fold from"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "one multi-side chain query: the target and every candidate source"
Proposed_diffstacking.Cgmes_rdfdb.Variant_scope -> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding: "swaps the identity of, and captures it back"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope: "applies inside"
Proposed_diffstacking.Cgmes_triple_store_loader -> Proposed_diffstacking.Triple_store_sparql: "uploads N-Triples per graph (GSP PUT)"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -> Proposed_diffstacking.Triple_store_sparql: "opens scenario stores on"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Triple_store_sparql: "queries the server directly in remote mode"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Triple_store_sparql: "guarded SPARQL UPDATE, GSP PUT of graphs"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking.Triple_store_sparql: "plan query; Checkpoint COPY on the server"
Proposed_diffstacking_rdf_database.Store_meta_graph -> Proposed_diffstacking_rdf_database.Store_data_graphs: "indexes"
Proposed_diffstacking_rdf_database.Store_meta_graph -> Proposed_diffstacking_rdf_database.Store_diff_graphs: "indexes"
Proposed_diffstacking_rdf_database.Store_checkpoint_copies -> Proposed_diffstacking_rdf_database.Store_diff_graphs: "folds"
Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher -> Proposed_diffstacking_rdf_database: "parallel GSP GET"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking_rdf_database: "one guarded SPARQL UPDATE (graphs + metadata)"
Proposed_diffstacking.Cgmes_rdfdb.Model_catalog -> Proposed_diffstacking_rdf_database: "reads and writes the metadata graph of one scenario"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source -> Proposed_diffstacking_rdf_database: "fetch forward/reverse graphs"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking_rdf_database: "one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking_rdf_database: "one plan query: UNION of both ends, pdb:parent* to the root"
Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -> Proposed_diffstacking_rdf_database: "COPY, three replace operations per difference, header rewrite, then the metadata"
Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader -> Proposed_diffstacking_rdf_database: "one immutable graph per instance file"
Proposed_diffstacking.Triple_store_sparql -> Proposed_diffstacking_rdf_database: "SPARQL protocol + Graph Store Protocol"
`;case`rdfdb_fetch_performance`:return`direction: right

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_connection: {
  label: "RdfDbConnection"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}
Proposed_diffstackingCgmes_rdfdbGraph_fetcher: {
  label: "GraphFetcher + GraphCache"
}
Powsybl_coreCgmesTriple_store: {
  label: "Triple store (rdf4j)"
}
Proposed_diffstackingTriple_store_network_loader: {
  label: "TripleStoreNetworkLoader"
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: {
  label: "RdfDbProvenance"
}

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_connection: "asks for the graphs of the scenario"
Proposed_diffstackingCgmes_rdfdbRdf_db_connection -> Proposed_diffstacking_rdf_database: "lists the named graphs under the scenario prefix"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbGraph_fetcher: "hands over the graph names"
Proposed_diffstackingCgmes_rdfdbGraph_fetcher -> Proposed_diffstacking_rdf_database: "four parallel GET requests, Accept application/n-triples"
Proposed_diffstackingCgmes_rdfdbGraph_fetcher -> Powsybl_coreCgmesTriple_store: "adds each finished graph in one transaction, single writer"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingTriple_store_network_loader: "converts the filled store"
Proposed_diffstackingTriple_store_network_loader -> Powsybl_coreCgmesTriple_store: "runs the unchanged CGMES query catalogs"
Proposed_diffstackingTriple_store_network_loader -> Powsybl_coreIidmNetwork: "creates the network"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: "records database, scenario and graphs on the network"
`;case`rdfdb_upload`:return`direction: right

Proposed_diffstackingCgmes_rdfdbRdf_db_connection: {
  label: "RdfDbConnection"
}
Proposed_diffstackingCgmes_triple_store_loader: {
  label: "CgmesTripleStoreLoader"
}
Proposed_diffstackingTriple_store_sparql: {
  label: "TripleStoreRDF4JSparql"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}

Proposed_diffstackingCgmes_rdfdbRdf_db_connection -> Proposed_diffstackingCgmes_triple_store_loader: "hands over the data source and the scenario store"
Proposed_diffstackingCgmes_triple_store_loader -> Proposed_diffstackingTriple_store_sparql: "reads each instance file into the store"
Proposed_diffstackingTriple_store_sparql -> Proposed_diffstacking_rdf_database: "PUT one graph as N-Triples, several files in parallel"
Proposed_diffstackingCgmes_triple_store_loader -> Proposed_diffstackingTriple_store_sparql: "asks whether the model already carries a boundary"
Proposed_diffstackingTriple_store_sparql -> Proposed_diffstacking_rdf_database: "modelProfiles query, restricted to the scenario"
Proposed_diffstackingCgmes_triple_store_loader -> Proposed_diffstackingTriple_store_sparql: "reads the boundary data source if it does not"
`;case`rdfdb_diff_roundtrip`:return`direction: right

Powsybl_coreIidmVariantsNetwork_event_recorder: {
  label: "NetworkEventRecorder"
}
Proposed_diffstackingCgmes_diff_export: {
  label: "CgmesDiffExport"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: {
  label: "RdfDbDifferenceSink / RdfDbExport"
}
Proposed_diffstackingCgmes_rdfdbModel_catalog: {
  label: "ModelCatalog (metadata graph per scenario)"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbDiff_update_planner: {
  label: "DiffUpdatePlanner"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: {
  label: "RdfDbDiffSource + StatementCodec"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}

Powsybl_coreIidmVariantsNetwork_event_recorder -> Proposed_diffstackingCgmes_diff_export: "hands over the recorded changes"
Proposed_diffstackingCgmes_diff_export -> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: "one difference model per profile"
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -> Proposed_diffstackingCgmes_rdfdbModel_catalog: "which model does it supersede, and is that model still free"
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -> Proposed_diffstacking_rdf_database: "one guarded INSERT ... WHERE into scenario S: forward graph, reverse graph, metadata node"
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -> Proposed_diffstackingCgmes_diff_export: "the sender is now at the difference it wrote"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbDiff_update_planner: "the consumer asks how to reach the head of S"
Proposed_diffstackingCgmes_rdfdbDiff_update_planner -> Proposed_diffstackingCgmes_rdfdbModel_catalog: "one chain query for every profile"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: "fetch the differences on the path"
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source -> Proposed_diffstacking_rdf_database: "one query over all forward and reverse graphs"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_diff_import: "the folded difference, applied in place"
Proposed_diffstackingCgmes_diff_import -> Powsybl_coreIidmNetwork: "updates the consumer network"
`;case`rdfdb_update_decision`:return`direction: right

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: {
  label: "RdfDbProvenance"
}
Proposed_diffstackingCgmes_rdfdbDiff_update_planner: {
  label: "DiffUpdatePlanner"
}
Proposed_diffstackingCgmes_rdfdbModel_catalog: {
  label: "ModelCatalog (metadata graph per scenario)"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: {
  label: "RdfDbMaterializer"
}
Proposed_diffstackingCgmes_rdfdbGraph_fetcher: {
  label: "GraphFetcher + GraphCache"
}
Proposed_diffstackingTriple_store_network_loader: {
  label: "TripleStoreNetworkLoader"
}

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: "is the network at the target scenario? if not, reload that scenario - no query sent"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbDiff_update_planner: "which stored model is the network at, per profile"
Proposed_diffstackingCgmes_rdfdbDiff_update_planner -> Proposed_diffstackingCgmes_rdfdbModel_catalog: "chain of the target and of the current model, one query"
Proposed_diffstackingCgmes_rdfdbDiff_update_planner -> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: "NOOP, or a path forwards or backwards, or FULL with reasons"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_diff_import: "canApplyInPlace: does the importer accept the folded difference"
Proposed_diffstackingCgmes_diff_import -> Powsybl_coreIidmNetwork: "DIFF_APPLIED: the network handed in is updated"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: "FULL_RELOAD: materialise the target instead"
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -> Proposed_diffstackingCgmes_rdfdbGraph_fetcher: "base graphs of the scenario, from the cache when warm"
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -> Proposed_diffstackingCgmes_diff_import: "applyToGraph: the folded chain, on the local store"
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -> Proposed_diffstackingTriple_store_network_loader: "the unchanged conversion, on data that is now the target version"
`;case`rdfdb_versioning_schema`:return`direction: down

Proposed_diffstackingCgmes_rdfdb: {
  label: "cgmes-rdfdb"

  Checkpoint: {
    label: "Checkpoint"
  }
  Version_graph: {
    label: "VersionGraph (per scenario)"
  }
  Snapshot_catalog: {
    label: "SnapshotCatalog (per scenario)"
  }
  Graph_uploader: {
    label: "GraphUploader"
  }
}
Proposed_diffstackingCgmes_rdfdb_schema: {
  label: "cgmes-rdfdb metadata schema"

  Scenario_meta_graph: {
    label: "scenario metadata graph <sc>/meta"
  }
  Pdb_snapshot: {
    label: "pdb:Snapshot"
  }
  Pdb_timestep_root: {
    label: "timestep root (pdb:TimestepEdge)"
  }
  Stored_model: {
    label: "md:FullModel / dm:DifferenceModel node"
  }
  Pdb_catalog: {
    label: "pdb:Catalog"
  }
  Named_graph: {
    label: "immutable named graph"
  }
}

Proposed_diffstackingCgmes_rdfdb_schema.Scenario_meta_graph -> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_catalog: "one per scenario (base timestep, offset)"
Proposed_diffstackingCgmes_rdfdb_schema.Scenario_meta_graph -> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot: "contains (never cross-scenario)"
Proposed_diffstackingCgmes_rdfdb_schema.Scenario_meta_graph -> Proposed_diffstackingCgmes_rdfdb_schema.Stored_model: "contains"
Proposed_diffstackingCgmes_rdfdb_schema.Pdb_timestep_root -> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_catalog: "its label is read in the offset of"
Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot -> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_timestep_root: "pdb:timestepRoot"
Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot -> Proposed_diffstackingCgmes_rdfdb_schema.Stored_model: "pdb:member / pdb:state / pdb:full"
Proposed_diffstackingCgmes_rdfdb_schema.Stored_model -> Proposed_diffstackingCgmes_rdfdb_schema.Named_graph: "pdb:graph / pdb:forwardGraph / pdb:reverseGraph"
Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog -> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_timestep_root: "pins a new timestep to the base chain"
Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog -> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot: "writes and reads"
Proposed_diffstackingCgmes_rdfdb.Version_graph -> Proposed_diffstackingCgmes_rdfdb_schema.Pdb_snapshot: "walks pdb:parent of"
Proposed_diffstackingCgmes_rdfdb.Version_graph -> Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog: "resolves the address in"
Proposed_diffstackingCgmes_rdfdb.Checkpoint -> Proposed_diffstackingCgmes_rdfdb_schema.Named_graph: "copies and folds"
Proposed_diffstackingCgmes_rdfdb.Checkpoint -> Proposed_diffstackingCgmes_rdfdb.Version_graph: "asks what to fold from"
Proposed_diffstackingCgmes_rdfdb.Snapshot_catalog -> Proposed_diffstackingCgmes_rdfdb.Graph_uploader: "uploads the instance files of a root with"
Proposed_diffstackingCgmes_rdfdb.Graph_uploader -> Proposed_diffstackingCgmes_rdfdb_schema.Named_graph: "writes"
`;case`rdfdb_version_navigation`:return`direction: right

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbVersion_graph: {
  label: "VersionGraph (per scenario)"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: {
  label: "RdfDbProvenance"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: {
  label: "RdfDbDiffSource + StatementCodec"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: {
  label: "RdfDbMaterializer"
}
Proposed_diffstackingCgmes_rdfdbGraph_fetcher: {
  label: "GraphFetcher + GraphCache"
}
Proposed_diffstackingTriple_store_network_loader: {
  label: "TripleStoreNetworkLoader"
}

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbVersion_graph: "bring this network to (scenario, timestep, version)"
Proposed_diffstackingCgmes_rdfdbVersion_graph -> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: "which snapshot is the network at, and of which scenario"
Proposed_diffstackingCgmes_rdfdbVersion_graph -> Proposed_diffstacking_rdf_database: "the plan query: both chains in one request"
Proposed_diffstackingCgmes_rdfdbVersion_graph -> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: "NOOP, DIFF with the path, or FULL with the reasons"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: "DIFF: every difference of the path, in one request"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_diff_import: "one composed difference per profile, applied or reverted in place"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: "FULL: build the snapshot instead"
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -> Proposed_diffstackingCgmes_rdfdbGraph_fetcher: "the nearest full graph of each profile, cached"
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -> Proposed_diffstackingTriple_store_network_loader: "the unchanged conversion, on data that is now that version"
`;case`rdfdb_checkpoint`:return`direction: right

Proposed_diffstackingCgmes_rdfdbCheckpoint: {
  label: "Checkpoint"
}
Proposed_diffstackingCgmes_rdfdbVersion_graph: {
  label: "VersionGraph (per scenario)"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}
Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot: {
  label: "pdb:Snapshot"
}

Proposed_diffstackingCgmes_rdfdbCheckpoint -> Proposed_diffstackingCgmes_rdfdbVersion_graph: "which profiles does this snapshot reach by differences, and from where"
Proposed_diffstackingCgmes_rdfdbCheckpoint -> Proposed_diffstacking_rdf_database: "COPY the full graph of each touched profile"
Proposed_diffstackingCgmes_rdfdbCheckpoint -> Proposed_diffstacking_rdf_database: "per difference: set the forward keys, drop the reverse-only keys, drop the reverse-only objects"
Proposed_diffstackingCgmes_rdfdbCheckpoint -> Proposed_diffstacking_rdf_database: "rewrite the md:FullModel header of the copy to the state model"
Proposed_diffstackingCgmes_rdfdbCheckpoint -> Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot: "pdb:full and hasFull true on the existing snapshot"
`;case`rdfdb_timesteps`:return`direction: right

Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: {
  label: "RdfDbDifferenceSink / RdfDbExport"
}
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: {
  label: "SnapshotCatalog (per scenario)"
}
Proposed_diffstackingCgmes_rdfdbTimesteps: {
  label: "Timesteps + SnapshotRef"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}
Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root: {
  label: "timestep root (pdb:TimestepEdge)"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbVersion_graph: {
  label: "VersionGraph (per scenario)"
}

Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: "a recorder at the base head writes (scenario, 08:30, 1.0)"
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstackingCgmes_rdfdbTimesteps: "resolve \\"8:30\\" against the base day and offset of this scenario"
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstacking_rdf_database: "which base version do these differences supersede (the pin)"
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root: "one guarded request: the root, its members, a TimestepEdge to the pin"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbVersion_graph: "a client at 08:30 asks for 08:45"
Proposed_diffstackingCgmes_rdfdbVersion_graph -> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: "undo the 08:30 differences, apply the 08:45 ones: one composed update"
`;case`rdfdb_timestep_ingestion`:return`direction: right

Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: {
  label: "SnapshotCatalog (per scenario)"
}
Proposed_diffstackingCgmes_triple_store_loader: {
  label: "CgmesTripleStoreLoader"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: {
  label: "RdfDbMaterializer"
}
Proposed_diffstackingCgmes_rdfdbGraph_fetcher: {
  label: "GraphFetcher + GraphCache"
}
Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator: {
  label: "TripleDiffCalculator"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: {
  label: "RdfDbDifferenceSink / RdfDbExport"
}

Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstackingCgmes_triple_store_loader: "parse the files of this timestep into a scratch store"
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstacking_rdf_database: "is the boundary still the scenario's own?"
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: "the parent state as triples, on a local store"
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -> Proposed_diffstackingCgmes_rdfdbGraph_fetcher: "its full graphs, from the cache after the first timestep of the day"
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator: "compare EQ and SSH, graph against graph"
Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator -> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: "one difference model per profile that moved"
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog -> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: "the ordinary guarded write, as a timestep root or a version"
`;case`rdfdb_variant_binding`:return`direction: right

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbVariant_updater: {
  label: "VariantUpdater + VariantBulkLoader"
}
Proposed_diffstackingCgmes_rdfdbVariant_scope: {
  label: "VariantScope"
}
Proposed_diffstackingCgmes_rdfdbVariant_binding: {
  label: "VariantBinding"
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbVariant_updater: "bring variant \\"08:30\\" to (scenario, 08:30, 1.1)"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbVariant_scope: "enter: lock the provenance, park the primary identity"
Proposed_diffstackingCgmes_rdfdbVariant_scope -> Proposed_diffstackingCgmes_rdfdbVariant_binding: "install this variant's models, case date and snapshot"
Proposed_diffstackingCgmes_rdfdbVariant_scope -> Powsybl_coreIidmNetwork: "select the variant as the working one"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_diff_import: "apply the composed difference, variantSafeOnly"
Proposed_diffstackingCgmes_rdfdbVariant_scope -> Proposed_diffstackingCgmes_rdfdbVariant_binding: "close: capture what the operation made the network say"
Proposed_diffstackingCgmes_rdfdbVariant_scope -> Powsybl_coreIidmNetwork: "reinstall the primary identity, restore the working variant"
`;case`rdfdb_variants_bulk_load`:return`direction: right

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbVariant_updater: {
  label: "VariantUpdater + VariantBulkLoader"
}
Proposed_diffstackingCgmes_rdfdbVersion_graph: {
  label: "VersionGraph (per scenario)"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: {
  label: "RdfDbMaterializer"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: {
  label: "RdfDbDiffSource + StatementCodec"
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}
Proposed_diffstackingCgmes_rdfdbVariant_scope: {
  label: "VariantScope"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: {
  label: "RdfDbProvenance"
}

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbVariant_updater: "loadVariants(scenario, version, 96 timesteps)"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbVersion_graph: "one chains query: 96 sides in one request"
Proposed_diffstackingCgmes_rdfdbVersion_graph -> Proposed_diffstacking_rdf_database: "UNION of the starts, pdb:parent* per side, details once per snapshot"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: "the first snapshot becomes the network (no second plan query)"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: "every difference of every accepted path, in one request"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Powsybl_coreIidmNetwork: "one cloneVariant for every target sourced from the primary"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbVariant_scope: "per target: apply its path inside its own scope"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: "one outcome per request: bound, or refused with reasons"
`;case`rdfdb_variant_refusal_decision`:return`direction: right

Proposed_diffstackingCgmes_rdfdbVariant_updater: {
  label: "VariantUpdater + VariantBulkLoader"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: {
  label: "RdfDbProvenance"
}
Proposed_diffstackingCgmes_rdfdbVersion_graph: {
  label: "VersionGraph (per scenario)"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}

Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance: "another scenario? refuse without a query"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbVersion_graph: "the path, with pdb:variantSafe on every step"
Proposed_diffstackingCgmes_rdfdbVersion_graph -> Proposed_diffstackingCgmes_rdfdbVariant_updater: "a step the store says is unsafe: refuse before cloning or fetching"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_diff_import: "otherwise: plan the composed difference with variantSafeOnly"
Proposed_diffstackingCgmes_diff_import -> Proposed_diffstackingCgmes_rdfdbVariant_updater: "a statement whose IIDM target is shared: SLOW_REQUIRED with the reason"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Powsybl_coreIidmNetwork: "remove the variant this call created; every variant is as it was"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: "VARIANT_REFUSED with the reasons (or a separate network, if asked)"
`;case`diffstacking_ipc`:return`direction: right

Pypowsybl: {
  label: "pypowsybl"

  Python_api: {
    label: "Python domain APIs"
  }
  Python_network: {
    label: "pypowsybl.network.Network"
  }
  Pybind_extension: {
    label: "_pypowsybl pybind11 extension"
  }
}
Proposed_diffstacking_pypowsybl: {
  label: "Diffstacking in pypowsybl (proposal)"

  Python_event_recorder: {
    label: "pypowsybl.network.NetworkEventRecorder"
  }
  Rdf_db_util: {
    label: "RdfDbUtil"
  }
  Python_rdf_database: {
    label: "pypowsybl.network.RdfDatabase"
  }
}
Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Cgmes_rdfdb: {
    label: "cgmes-rdfdb"

    Rdf_database_config: {
      label: "RdfDatabase"
    }
    Rdf_db_network_loader: {
      label: "RdfDbNetworkLoader"
    }
    Rdf_db_difference_sink: {
      label: "RdfDbDifferenceSink / RdfDbExport"
    }
    Checkpoint: {
      label: "Checkpoint"
    }
    Rdf_db_connection: {
      label: "RdfDbConnection"
    }
    Rdf_db_provenance: {
      label: "RdfDbProvenance"
    }
    Diff_update_planner: {
      label: "DiffUpdatePlanner"
    }
    Variant_updater: {
      label: "VariantUpdater + VariantBulkLoader"
    }
    Model_catalog: {
      label: "ModelCatalog (metadata graph per scenario)"
    }
    Rdf_db_materializer: {
      label: "RdfDbMaterializer"
    }
    Version_graph: {
      label: "VersionGraph (per scenario)"
    }
    Variant_scope: {
      label: "VariantScope"
    }
    Graph_fetcher: {
      label: "GraphFetcher + GraphCache"
    }
    Rdf_db_diff_source: {
      label: "RdfDbDiffSource + StatementCodec"
    }
    Snapshot_catalog: {
      label: "SnapshotCatalog (per scenario)"
    }
    Variant_binding: {
      label: "VariantBinding"
    }
    Graph_uploader: {
      label: "GraphUploader"
    }
    Triple_diff_calculator: {
      label: "TripleDiffCalculator"
    }
    Timesteps: {
      label: "Timesteps + SnapshotRef"
    }
  }
  Cgmes_diff_import: {
    label: "CgmesDiffImport"
  }
  Cgmes_diff_export: {
    label: "CgmesDiffExport"
  }
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}

Pypowsybl.Python_api -> Pypowsybl.Python_network: "creates and passes Network handles"
Pypowsybl.Python_network -> Proposed_diffstacking_pypowsybl.Python_event_recorder: "would extend: creates (event_recorder())"
Pypowsybl.Python_api -> Proposed_diffstacking_pypowsybl.Python_rdf_database: "would extend: opens (connect_rdf_db / connect)"
Pypowsybl.Python_network -> Proposed_diffstacking_pypowsybl.Python_rdf_database: "[...]"
Proposed_diffstacking_pypowsybl.Python_event_recorder -> Proposed_diffstacking_pypowsybl.Python_rdf_database: "to_rdf_updates(db, scenario, version, timestep)"
Pypowsybl.Python_api -> Pypowsybl.Pybind_extension: "calls the extension module"
Pypowsybl.Python_network -> Pypowsybl.Pybind_extension: "passes its opaque handle to"
Proposed_diffstacking_pypowsybl.Python_event_recorder -> Pypowsybl.Pybind_extension: "would extend: start/stop/export calls"
Proposed_diffstacking_pypowsybl.Python_rdf_database -> Pypowsybl.Pybind_extension: "would extend: upload, catalogue, load and update calls"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config: "builds from the option map"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection: "opens and uploads CGMES files through"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader: "load / update of one snapshot; another scenario is a full reload"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink: "RdfDbExport: recorder events become a snapshot of the base scenario"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "per scenario: resolves labels, putFull / putAsDiff, listings"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Checkpoint: "checkpoint()"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding: "variantRows(network): what every variant stands for, plus the refusals of the last operation"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope: "identity(network, db, scenario, variant) and the per-variant exports run inside RdfDbProvenance.inVariant"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Variant_updater: "loadVariants(scenario, requests) and update(..., targetVariant): a day as variants, or one variant moved"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection: "is opened into"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog: "registers uploaded full models in"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher: "fetches the scenario with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -> Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher: "base graphs (cached)"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance: "records the origin as"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source: "fetches and composes the chain with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner: "plans NOOP | DIFF | FULL"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer: "rebuilds the target with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "plans and materialises a snapshot with"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Variant_updater: "dispatches an opted-in variant update or a bulk load to"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_provenance -> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding: "holds one per bound variant; a NetworkListener keeps them in step with clone, overwrite and remove"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog: "checks base / linear rule"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "a versioned export targets a snapshot of"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope: "writes one history per variant inside"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink: "writes a new version through (snapshot node in the same request)"
Proposed_diffstacking.Cgmes_rdfdb.Diff_update_planner -> Proposed_diffstacking.Cgmes_rdfdb.Model_catalog: "chain query"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source: "fetches the chain with"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source: "every difference of every accepted path, in one request"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer: "the first snapshot of a day, converted once"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader: "uploads the instance files of a root with"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator: "ingests a timestep from files with"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Timesteps: "resolves labels and versions with"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "resolves the address in"
Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "asks what to fold from"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "one multi-side chain query: the target and every candidate source"
Proposed_diffstacking.Cgmes_rdfdb.Variant_scope -> Proposed_diffstacking.Cgmes_rdfdb.Variant_binding: "swaps the identity of, and captures it back"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_rdfdb.Variant_scope: "applies inside"
Proposed_diffstacking.Cgmes_rdfdb.Triple_diff_calculator -> Proposed_diffstacking.Cgmes_diff_export: "produces the DifferenceModel of"
Proposed_diffstacking.Cgmes_diff_export -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink: "DifferenceModelSet"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_diff_import: "applies composed diff in place"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_materializer -> Proposed_diffstacking.Cgmes_diff_import: "applyToGraph on local store"
Proposed_diffstacking.Cgmes_rdfdb.Variant_updater -> Proposed_diffstacking.Cgmes_diff_import: "applies with variantSafeOnly, or refuses with the reasons"
Proposed_diffstacking.Cgmes_rdfdb.Graph_fetcher -> Proposed_diffstacking_rdf_database: "parallel GSP GET"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking_rdf_database: "one guarded SPARQL UPDATE (graphs + metadata)"
Proposed_diffstacking.Cgmes_rdfdb.Model_catalog -> Proposed_diffstacking_rdf_database: "reads and writes the metadata graph of one scenario"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_diff_source -> Proposed_diffstacking_rdf_database: "fetch forward/reverse graphs"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking_rdf_database: "one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking_rdf_database: "one plan query: UNION of both ends, pdb:parent* to the root"
Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -> Proposed_diffstacking_rdf_database: "COPY, three replace operations per difference, header rewrite, then the metadata"
Proposed_diffstacking.Cgmes_rdfdb.Graph_uploader -> Proposed_diffstacking_rdf_database: "one immutable graph per instance file"
`;case`pypowsybl_change_export`:return`direction: right

Pypowsybl: {
  label: "pypowsybl"

  Python_network: {
    label: "pypowsybl.network.Network"
  }
  Java_bindingsNetwork_c_functions: {
    label: "NetworkCFunctions"
  }
  Pybind_extension: {
    label: "_pypowsybl pybind11 extension"
  }
  Native_image_bridge: {
    label: "GraalVM native-image bridge"
  }
}
Proposed_diffstacking_pypowsybl: {
  label: "Diffstacking in pypowsybl (proposal)"

  Python_event_recorder: {
    label: "pypowsybl.network.NetworkEventRecorder"
  }
  Network_event_recorder_c_functions: {
    label: "NetworkEventRecorderCFunctions"
  }
  Network_event_recording: {
    label: "NetworkEventRecording"
  }
}
Powsybl_core: {
  label: "powsybl-core"

  IidmVariantsNetwork_event_recorder: {
    label: "NetworkEventRecorder"
  }
}
Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Partial_ssh_export: {
    label: "PartialSshExport"
  }
  Cgmes_diff_export: {
    label: "CgmesDiffExport"
  }
  Cgmes_diff_import: {
    label: "CgmesDiffImport"
  }
}

Pypowsybl.Python_network -> Proposed_diffstacking_pypowsybl.Python_event_recorder: "would extend: creates (event_recorder())"
Pypowsybl.Python_network -> Pypowsybl.Pybind_extension: "passes its opaque handle to"
Proposed_diffstacking_pypowsybl.Python_event_recorder -> Pypowsybl.Pybind_extension: "would extend: start/stop/export calls"
Pypowsybl.Pybind_extension -> Pypowsybl.Native_image_bridge: "calls native-image entry points through"
Proposed_diffstacking_pypowsybl.Network_event_recorder_c_functions -> Proposed_diffstacking_pypowsybl.Network_event_recording: "delegates to"
Proposed_diffstacking_pypowsybl.Network_event_recording -> Powsybl_core.IidmVariantsNetwork_event_recorder: "would consume as-is: records with"
Proposed_diffstacking_pypowsybl.Network_event_recording -> Proposed_diffstacking.Partial_ssh_export: "exports partial SSH through"
Powsybl_core.IidmVariantsNetwork_event_recorder -> Proposed_diffstacking.Partial_ssh_export: "would be consumed as-is: provides change log to"
Proposed_diffstacking_pypowsybl.Network_event_recording -> Proposed_diffstacking.Cgmes_diff_export: "exports difference models through"
Powsybl_core.IidmVariantsNetwork_event_recorder -> Proposed_diffstacking.Cgmes_diff_export: "would be consumed as-is: provides change log to"
Pypowsybl.Java_bindingsNetwork_c_functions -> Proposed_diffstacking.Cgmes_diff_import: "would consume as-is: update_from_* reaches it transparently via CgmesImport.update"
`;case`pypowsybl_rdf_database`:return`direction: right

Pypowsybl: {
  label: "pypowsybl"

  Python_network: {
    label: "pypowsybl.network.Network"
  }
  Pybind_extension: {
    label: "_pypowsybl pybind11 extension"
  }
  Native_image_bridge: {
    label: "GraalVM native-image bridge"
  }
}
Proposed_diffstacking_pypowsybl: {
  label: "Diffstacking in pypowsybl (proposal)"

  Python_event_recorder: {
    label: "pypowsybl.network.NetworkEventRecorder"
  }
  Rdf_db_c_functions: {
    label: "RdfDbCFunctions"
  }
  Python_rdf_database: {
    label: "pypowsybl.network.RdfDatabase"
  }
  Rdf_db_util: {
    label: "RdfDbUtil"
  }
}
Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Cgmes_rdfdb: {
    label: "cgmes-rdfdb"

    Rdf_database_config: {
      label: "RdfDatabase"
    }
    Rdf_db_network_loader: {
      label: "RdfDbNetworkLoader"
    }
    Checkpoint: {
      label: "Checkpoint"
    }
    Rdf_db_connection: {
      label: "RdfDbConnection"
    }
    Version_graph: {
      label: "VersionGraph (per scenario)"
    }
    Snapshot_catalog: {
      label: "SnapshotCatalog (per scenario)"
    }
    Rdf_db_difference_sink: {
      label: "RdfDbDifferenceSink / RdfDbExport"
    }
  }
  Triple_store_sparql: {
    label: "TripleStoreRDF4JSparql"
  }
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}

Pypowsybl.Python_network -> Proposed_diffstacking_pypowsybl.Python_event_recorder: "would extend: creates (event_recorder())"
Pypowsybl.Python_network -> Proposed_diffstacking_pypowsybl.Python_rdf_database: "[...]"
Proposed_diffstacking_pypowsybl.Python_event_recorder -> Proposed_diffstacking_pypowsybl.Python_rdf_database: "to_rdf_updates(db, scenario, version, timestep)"
Pypowsybl.Python_network -> Pypowsybl.Pybind_extension: "passes its opaque handle to"
Proposed_diffstacking_pypowsybl.Python_event_recorder -> Pypowsybl.Pybind_extension: "would extend: start/stop/export calls"
Proposed_diffstacking_pypowsybl.Python_rdf_database -> Pypowsybl.Pybind_extension: "would extend: upload, catalogue, load and update calls"
Pypowsybl.Pybind_extension -> Pypowsybl.Native_image_bridge: "calls native-image entry points through"
Proposed_diffstacking_pypowsybl.Rdf_db_c_functions -> Proposed_diffstacking_pypowsybl.Rdf_db_util: "delegates to"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config: "builds from the option map"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection: "opens and uploads CGMES files through"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_database_config -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection: "is opened into"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader: "load / update of one snapshot; another scenario is a full reload"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "per scenario: resolves labels, putFull / putAsDiff, listings"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "plans and materialises a snapshot with"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "resolves the address in"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink: "RdfDbExport: recorder events become a snapshot of the base scenario"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink: "writes a new version through (snapshot node in the same request)"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog: "a versioned export targets a snapshot of"
Proposed_diffstacking_pypowsybl.Rdf_db_util -> Proposed_diffstacking.Cgmes_rdfdb.Checkpoint: "checkpoint()"
Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -> Proposed_diffstacking.Cgmes_rdfdb.Version_graph: "asks what to fold from"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_connection -> Proposed_diffstacking.Triple_store_sparql: "opens scenario stores on"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_network_loader -> Proposed_diffstacking.Triple_store_sparql: "queries the server directly in remote mode"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking.Triple_store_sparql: "guarded SPARQL UPDATE, GSP PUT of graphs"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking.Triple_store_sparql: "plan query; Checkpoint COPY on the server"
Proposed_diffstacking.Cgmes_rdfdb.Snapshot_catalog -> Proposed_diffstacking_rdf_database: "one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario"
Proposed_diffstacking.Cgmes_rdfdb.Version_graph -> Proposed_diffstacking_rdf_database: "one plan query: UNION of both ends, pdb:parent* to the root"
Proposed_diffstacking.Cgmes_rdfdb.Rdf_db_difference_sink -> Proposed_diffstacking_rdf_database: "one guarded SPARQL UPDATE (graphs + metadata)"
Proposed_diffstacking.Cgmes_rdfdb.Checkpoint -> Proposed_diffstacking_rdf_database: "COPY, three replace operations per difference, header rewrite, then the metadata"
Proposed_diffstacking.Triple_store_sparql -> Proposed_diffstacking_rdf_database: "SPARQL protocol + Graph Store Protocol"
`;case`pypowsybl_rdf_db_update_flow`:return`direction: right

PypowsyblPython_network: {
  label: "pypowsybl.network.Network"
}
PypowsyblPybind_extension: {
  label: "_pypowsybl pybind11 extension"
}
Proposed_diffstacking_pypowsyblRdf_db_c_functions: {
  label: "RdfDbCFunctions"
}
Proposed_diffstacking_pypowsyblRdf_db_util: {
  label: "RdfDbUtil"
}
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: {
  label: "SnapshotCatalog (per scenario)"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
  label: "RdfDbNetworkLoader"
}
Proposed_diffstackingCgmes_rdfdbVersion_graph: {
  label: "VersionGraph (per scenario)"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: {
  label: "RdfDbDiffSource + StatementCodec"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: {
  label: "RdfDbMaterializer"
}

PypowsyblPython_network -> PypowsyblPybind_extension: "update_network_from_rdf_db(network, db, scenario, version, timestep, ...)"
PypowsyblPybind_extension -> Proposed_diffstacking_pypowsyblRdf_db_c_functions: "through the native image bridge"
Proposed_diffstacking_pypowsyblRdf_db_c_functions -> Proposed_diffstacking_pypowsyblRdf_db_util: "checkScenario, timestepOrNull, RdfDbUpdateOptions"
Proposed_diffstacking_pypowsyblRdf_db_util -> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: "resolve(version, timestep) against this scenario base day"
Proposed_diffstacking_pypowsyblRdf_db_util -> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader: "update(network, db, SnapshotRef, options)"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbVersion_graph: "plan: one query; another scenario is FULL without a query"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: "DIFF branch: fetch every difference of the path in one request"
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source -> Proposed_diffstackingCgmes_diff_import: "composed difference per profile"
Proposed_diffstackingCgmes_diff_import -> Proposed_diffstacking_pypowsyblRdf_db_util: "applied in place; route DIFF_APPLIED"
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader -> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: "FULL branch: base graphs of the target scenario plus the chain"
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer -> Proposed_diffstacking_pypowsyblRdf_db_util: "a new Java Network; route FULL_RELOAD"
Proposed_diffstacking_pypowsyblRdf_db_util -> PypowsyblPython_network: "UpdateOutcome handle"
`;case`pypowsybl_rdf_db_export_flow`:return`direction: right

Proposed_diffstacking_pypowsyblPython_event_recorder: {
  label: "pypowsybl.network.NetworkEventRecorder"
}
PypowsyblPybind_extension: {
  label: "_pypowsybl pybind11 extension"
}
Proposed_diffstacking_pypowsyblRdf_db_c_functions: {
  label: "RdfDbCFunctions"
}
Proposed_diffstacking_pypowsyblRdf_db_util: {
  label: "RdfDbUtil"
}
Proposed_diffstackingCgmes_diff_export: {
  label: "CgmesDiffExport"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: {
  label: "RdfDbDifferenceSink / RdfDbExport"
}
Proposed_diffstacking_rdf_database: {
  label: "SPARQL 1.1 graph database"
}

Proposed_diffstacking_pypowsyblPython_event_recorder -> PypowsyblPybind_extension: "export_network_events_to_rdf_db(recorder, db, scenario, version, timestep, options)"
PypowsyblPybind_extension -> Proposed_diffstacking_pypowsyblRdf_db_c_functions: "through the native image bridge"
Proposed_diffstacking_pypowsyblRdf_db_c_functions -> Proposed_diffstacking_pypowsyblRdf_db_util: "reject the options the database decides; resolve the address"
Proposed_diffstacking_pypowsyblRdf_db_util -> Proposed_diffstackingCgmes_diff_export: "label-taking RdfDbExport.export(scenario, version, timestepText); core resolves the label against that scenario base day"
Proposed_diffstackingCgmes_diff_export -> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: "DifferenceModelSet, one model per touched profile"
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -> Proposed_diffstacking_rdf_database: "one guarded SPARQL UPDATE"
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -> Proposed_diffstacking_pypowsyblRdf_db_util: "the stored models"
Proposed_diffstacking_pypowsyblRdf_db_util -> Proposed_diffstacking_pypowsyblPython_event_recorder: "model ids"
`;case`pypowsybl_rdf_db_variants_flow`:return`direction: right

PypowsyblPython_network: {
  label: "pypowsybl.network.Network"
}
PypowsyblPybind_extension: {
  label: "_pypowsybl pybind11 extension"
}
Proposed_diffstacking_pypowsyblRdf_db_c_functions: {
  label: "RdfDbCFunctions"
}
Proposed_diffstacking_pypowsyblRdf_db_util: {
  label: "RdfDbUtil"
}
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: {
  label: "SnapshotCatalog (per scenario)"
}
Proposed_diffstackingCgmes_rdfdbVariant_updater: {
  label: "VariantUpdater + VariantBulkLoader"
}
Proposed_diffstackingCgmes_rdfdbVersion_graph: {
  label: "VersionGraph (per scenario)"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: {
  label: "RdfDbMaterializer"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: {
  label: "RdfDbDiffSource + StatementCodec"
}
Proposed_diffstackingCgmes_rdfdbVariant_scope: {
  label: "VariantScope"
}
Proposed_diffstackingCgmes_rdfdbVariant_binding: {
  label: "VariantBinding"
}

PypowsyblPython_network -> PypowsyblPybind_extension: "load_network_variants_from_rdf_db(db, scenario, variant_ids, versions, timesteps, ...)"
PypowsyblPybind_extension -> Proposed_diffstacking_pypowsyblRdf_db_c_functions: "through the native image bridge"
Proposed_diffstacking_pypowsyblRdf_db_c_functions -> Proposed_diffstacking_pypowsyblRdf_db_util: "checkScenario; the three arrays become VariantRequests"
Proposed_diffstacking_pypowsyblRdf_db_util -> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog: "resolve(version, timestep) per request, against this scenario base day"
Proposed_diffstacking_pypowsyblRdf_db_util -> Proposed_diffstackingCgmes_rdfdbVariant_updater: "loadVariants(db, scenario, requests, options)"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbVersion_graph: "one chain query for every requested snapshot at once"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer: "the first requested snapshot, converted once; it becomes the network and its primary variant"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source: "every difference of every accepted path, in one request"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstackingCgmes_rdfdbVariant_scope: "per target: clone the nearest bound variant, then apply inside its scope"
Proposed_diffstackingCgmes_rdfdbVariant_scope -> Proposed_diffstackingCgmes_rdfdbVariant_binding: "the variant now stands for that snapshot"
Proposed_diffstackingCgmes_rdfdbVariant_updater -> Proposed_diffstacking_pypowsyblRdf_db_util: "the network, with one variant per snapshot that was reached"
Proposed_diffstacking_pypowsyblRdf_db_util -> PypowsyblPython_network: "one Java handle; the working variant is the primary"
`;case`diffstacking_slow_route`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Iidm: {
    label: "IIDM API and extensions"

    Io: {
      label: "IIDM I/O and format providers"

      Exchange_formats: {
        label: "Supported exchange formats"
      }
    }
  }
  Cgmes: {
    label: "CGMES conversion"

    Conversion_update: {
      label: "Conversion.update (SSH update workflow)"
    }
    Triple_store: {
      label: "Triple store (rdf4j)"
    }
  }
}
Proposed_diffstacking_db_merge_fallback: {
  label: "RDF database merge fallback (slow route without files)"
}
Proposed_diffstacking_opencgmes: {
  label: "OpenCGMES (general difference model application)"
}
Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Cgmes_diff_import: {
    label: "CgmesDiffImport"
  }
  Triple_store_diff_applier: {
    label: "TripleStoreDiffApplier"
  }
  Difference_model_format: {
    label: "CGMES Difference Model"
  }
}

Proposed_diffstacking.Cgmes_diff_import -> Powsybl_core.Cgmes.Conversion_update: "would extend: runs, scoped to the named equipment"
Proposed_diffstacking.Triple_store_diff_applier -> Powsybl_core.Cgmes.Triple_store: "would consume as-is: replaces property values in"
Powsybl_core.Cgmes.Conversion_update -> Powsybl_core.Cgmes.Triple_store: "queries"
Proposed_diffstacking_db_merge_fallback -> Proposed_diffstacking.Cgmes_diff_import: "would be chosen by the decision function of"
Proposed_diffstacking_db_merge_fallback -> Proposed_diffstacking.Triple_store_diff_applier: "would reuse as-is"
Proposed_diffstacking_db_merge_fallback -> Powsybl_core.Cgmes.Conversion_update: "would reuse as-is"
Proposed_diffstacking_opencgmes -> Proposed_diffstacking.Difference_model_format: "reads and writes the same format as"
`;case`detailed_ac_dc_grid_lifecycle`:return`direction: right

Powsybl_core: {
  label: "powsybl-core"

  Iidm: {
    label: "IIDM API and extensions"

    Dc_grid: {
      label: "DC grid equipment"

      Dc_node: {
        label: "DcNode"
      }
      Dc_ground: {
        label: "DcGround"
      }
      Dc_bus: {
        label: "DcBus"
      }
      Dc_line: {
        label: "DcLine"
      }
      Dc_switch: {
        label: "DcSwitch"
      }
      Dc_connectivity: {
        label: "DC connectivity and mutations"
      }
      Dc_terminal: {
        label: "DcTerminal"
      }
    }
    Io: {
      label: "IIDM I/O and format providers"

      Dc_format_io: {
        label: "DC-capable format I/O"
      }
    }
    Hvdc: {
      label: "HVDC equipment"

      Ac_dc_converters: {
        label: "IIDM AC/DC converters"
      }
    }
    Network: {
      label: "Network"
    }
  }
}
Pypowsybl: {
  label: "pypowsybl"

  Ac_dc_opf: {
    label: "AC/DC OPF prototype"
  }
  Dc_dataframes: {
    label: "Network DC DataFrames and mutation APIs"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"

    Ac_dc_loader: {
      label: "IIDM to coupled LfNetwork loader"
    }
  }
  Coupled_ac_dc_lf_network: {
    label: "Coupled LfNetwork"
  }
  Ac_dc_loadflow_engines: {
    label: "AC/DC load-flow engines"

    Ac_dc_network_parameter: {
      label: "acDcNetwork parameter"
    }
    Ac_dc_newton_raphson: {
      label: "AC/DC Newton-Raphson execution"
    }
  }
  Ac_dc_result_mapping: {
    label: "IIDM state and Core result mapping"
  }
}

Powsybl_core.Iidm.Dc_grid.Dc_connectivity -> Powsybl_core.Iidm.Network: "changes the active topology of"
Powsybl_core.Iidm.Dc_grid.Dc_terminal -> Powsybl_core.Iidm.Hvdc.Ac_dc_converters: "connects DC topology through"
Powsybl_core.Iidm.Hvdc.Ac_dc_converters -> Powsybl_open_loadflow.Lf_network_adapter.Ac_dc_loader: "maps converter controls and limits into"
Powsybl_open_loadflow.Lf_network_adapter.Ac_dc_loader -> Powsybl_open_loadflow.Coupled_ac_dc_lf_network: "builds"
Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_network_parameter -> Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_newton_raphson: "selects"
Powsybl_open_loadflow.Coupled_ac_dc_lf_network -> Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_newton_raphson: "supplies coupled equations to"
Powsybl_open_loadflow.Ac_dc_loadflow_engines.Ac_dc_newton_raphson -> Powsybl_open_loadflow.Ac_dc_result_mapping: "produces converged state for"
Powsybl_open_loadflow.Ac_dc_result_mapping -> Powsybl_core.Iidm.Network: "updates the shared Network"
Pypowsybl.Dc_dataframes -> Powsybl_core.Iidm.Network: "reads and mutates through the native bridge"
Pypowsybl.Ac_dc_opf -> Powsybl_core.Iidm.Network: "optimizes a separate model over"
Pypowsybl.Ac_dc_opf -> Pypowsybl.Dc_dataframes: "reads inputs and writes solved values through"
Powsybl_core.Iidm.Network -> Powsybl_core.Iidm.Hvdc: "owns DC equipment"
Powsybl_core.Iidm.Io.Dc_format_io -> Powsybl_core.Iidm.Dc_grid: "constructs and serializes"
Powsybl_core.Iidm.Dc_grid -> Powsybl_open_loadflow.Lf_network_adapter.Ac_dc_loader: "maps the explicit DC topology into"
`;case`contingency_and_corrective_action_flow`:return`direction: right

Powsybl_core: {
  label: "powsybl-core"

  Security_analysis_api: {
    label: "Security Analysis API"
  }
  Study_contracts: {
    label: "Study contracts"

    Contingencies_and_contexts: {
      label: "Contingencies and contexts"
    }
    Action_definitions: {
      label: "Action definitions"
    }
    Operator_strategies: {
      label: "Operator strategies and conditions"
    }
    State_monitors: {
      label: "StateMonitor definitions"
    }
    Selected_loading_limits: {
      label: "Selected LoadingLimits"
    }
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Contingency_propagation: {
    label: "Contingency propagation"
  }
  Study_execution: {
    label: "Study execution"

    Lf_actions_and_strategies: {
      label: "LfAction and LfOperatorStrategy"
    }
    Pre_contingency_state: {
      label: "Pre-contingency N state"
    }
    Post_contingency_state: {
      label: "Post-contingency N-1 state"
    }
    Post_action_state: {
      label: "Post-action state"
    }
    Limit_violation_evaluator: {
      label: "Limit violation evaluation"
    }
  }
  State_and_result_mapping: {
    label: "IIDM state and core-result mapping"

    Study_result_mapping: {
      label: "Core study result mapping"
    }
  }
}

Powsybl_core.Security_analysis_api -> Powsybl_core.Study_contracts.Contingencies_and_contexts: "accepts"
Powsybl_core.Security_analysis_api -> Powsybl_core.Study_contracts.Action_definitions: "accepts"
Powsybl_core.Security_analysis_api -> Powsybl_core.Study_contracts.Operator_strategies: "accepts"
Powsybl_core.Security_analysis_api -> Powsybl_core.Study_contracts.State_monitors: "accepts"
Powsybl_core.Study_contracts.Contingencies_and_contexts -> Powsybl_open_loadflow.Contingency_propagation: "maps to"
Powsybl_core.Study_contracts.Action_definitions -> Powsybl_open_loadflow.Study_execution.Lf_actions_and_strategies: "maps to"
Powsybl_core.Study_contracts.Operator_strategies -> Powsybl_open_loadflow.Study_execution.Lf_actions_and_strategies: "maps to"
Powsybl_core.Study_contracts.State_monitors -> Powsybl_open_loadflow.Study_execution.Pre_contingency_state: "selects output from"
Powsybl_core.Study_contracts.State_monitors -> Powsybl_open_loadflow.Study_execution.Post_contingency_state: "selects output from"
Powsybl_open_loadflow.Contingency_propagation -> Powsybl_open_loadflow.Study_execution.Post_contingency_state: "applies outages for"
Powsybl_open_loadflow.Study_execution.Pre_contingency_state -> Powsybl_open_loadflow.Study_execution.Post_contingency_state: "provides the N baseline for"
Powsybl_core.Study_contracts.State_monitors -> Powsybl_open_loadflow.Study_execution.Post_action_state: "selects output from"
Powsybl_open_loadflow.Study_execution.Lf_actions_and_strategies -> Powsybl_open_loadflow.Study_execution.Post_action_state: "selects and applies curative actions for"
Powsybl_open_loadflow.Study_execution.Post_contingency_state -> Powsybl_open_loadflow.Study_execution.Post_action_state: "provides the N-1 state for"
Powsybl_core.Study_contracts.Selected_loading_limits -> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator: "supplies active groups to"
Powsybl_open_loadflow.Study_execution.Pre_contingency_state -> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator: "evaluates"
Powsybl_open_loadflow.Study_execution.Post_contingency_state -> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator: "evaluates"
Powsybl_open_loadflow.Study_execution.Post_action_state -> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator: "evaluates"
Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator -> Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping: "adds violations to"
Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping -> Powsybl_core.Security_analysis_api: "returns results through"
`;case`analysis_configuration_and_result_selection`:return`direction: right

Study_configuration_sources: {
  label: "Configuration sources"
}
Powsybl_core: {
  label: "powsybl-core"

  Security_analysis_api: {
    label: "Security Analysis API"
  }
  Sensitivity_api: {
    label: "Sensitivity Analysis API"
  }
  Study_contracts: {
    label: "Study contracts"

    Common_study_parameters: {
      label: "Core study parameters"
    }
    State_monitors: {
      label: "StateMonitor definitions"
    }
    Selected_loading_limits: {
      label: "Selected LoadingLimits"
    }
    Modified_result_parameters: {
      label: "Modified monitored-elements parameters"
    }
  }
}
Pypowsybl: {
  label: "pypowsybl"

  Python_study_parameters: {
    label: "Python study parameter facades"
  }
  Native_image_bridge: {
    label: "GraalVM native-image bridge"

    Native_parameter_abi: {
      label: "Native parameter and result ABI"
    }
  }
  Pandas_study_results: {
    label: "pandas study result adapters"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Study_execution: {
    label: "Study execution"

    Provider_parameter_extensions: {
      label: "OLF provider parameter extensions"
    }
    Pre_contingency_state: {
      label: "Pre-contingency N state"
    }
    Post_contingency_state: {
      label: "Post-contingency N-1 state"
    }
    Limit_violation_evaluator: {
      label: "Limit violation evaluation"
    }
  }
  State_and_result_mapping: {
    label: "IIDM state and core-result mapping"

    Study_result_mapping: {
      label: "Core study result mapping"
    }
  }
}

Pypowsybl.Python_study_parameters -> Pypowsybl.Native_image_bridge.Native_parameter_abi: "marshals through"
Pypowsybl.Native_image_bridge.Native_parameter_abi -> Pypowsybl.Pandas_study_results: "returns result series through"
Powsybl_core.Security_analysis_api -> Pypowsybl.Native_image_bridge.Native_parameter_abi: "returns through"
Powsybl_core.Sensitivity_api -> Pypowsybl.Native_image_bridge.Native_parameter_abi: "returns through"
Study_configuration_sources -> Powsybl_core.Study_contracts.Common_study_parameters: "sets defaults and JSON values for"
Pypowsybl.Native_image_bridge.Native_parameter_abi -> Powsybl_core.Study_contracts.Common_study_parameters: "maps Python values into"
Powsybl_core.Security_analysis_api -> Powsybl_core.Study_contracts.Common_study_parameters: "runs with"
Powsybl_core.Sensitivity_api -> Powsybl_core.Study_contracts.Common_study_parameters: "runs with"
Powsybl_core.Security_analysis_api -> Powsybl_core.Study_contracts.State_monitors: "accepts"
Powsybl_core.Sensitivity_api -> Powsybl_core.Study_contracts.State_monitors: "accepts"
Powsybl_core.Study_contracts.Common_study_parameters -> Powsybl_core.Study_contracts.Modified_result_parameters: "contains"
Study_configuration_sources -> Powsybl_open_loadflow.Study_execution.Provider_parameter_extensions: "sets provider-specific values for"
Powsybl_core.Study_contracts.Common_study_parameters -> Powsybl_open_loadflow.Study_execution.Provider_parameter_extensions: "carries extensions to"
Powsybl_core.Study_contracts.State_monitors -> Powsybl_open_loadflow.Study_execution.Pre_contingency_state: "selects output from"
Powsybl_open_loadflow.Study_execution.Provider_parameter_extensions -> Powsybl_open_loadflow.Study_execution.Pre_contingency_state: "configures"
Powsybl_core.Study_contracts.State_monitors -> Powsybl_open_loadflow.Study_execution.Post_contingency_state: "selects output from"
Powsybl_open_loadflow.Study_execution.Pre_contingency_state -> Powsybl_open_loadflow.Study_execution.Post_contingency_state: "provides the N baseline for"
Powsybl_core.Study_contracts.Selected_loading_limits -> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator: "supplies active groups to"
Powsybl_open_loadflow.Study_execution.Pre_contingency_state -> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator: "evaluates"
Powsybl_open_loadflow.Study_execution.Post_contingency_state -> Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator: "evaluates"
Powsybl_open_loadflow.Study_execution.Limit_violation_evaluator -> Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping: "adds violations to"
Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping -> Powsybl_core.Security_analysis_api: "returns results through"
Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping -> Powsybl_core.Sensitivity_api: "returns results through"
`;case`olf_branch_monitored_result_filter`:return`direction: right

Powsybl_core: {
  label: "powsybl-core"

  Study_contracts: {
    label: "Study contracts"

    Common_study_parameters: {
      label: "Core study parameters"
    }
    Modified_result_parameters: {
      label: "Modified monitored-elements parameters"
    }
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Study_execution: {
    label: "Study execution"

    Pre_contingency_state: {
      label: "Pre-contingency N state"
    }
    Post_contingency_state: {
      label: "Post-contingency N-1 state"
    }
    Post_action_state: {
      label: "Post-action state"
    }
  }
  State_and_result_mapping: {
    label: "IIDM state and core-result mapping"

    Study_result_mapping: {
      label: "Core study result mapping"
    }
  }
}
Proposed_olf_branches: {
  label: "Open Load Flow pull-request branches (proposal)"

  Monitored_result_filter: {
    label: "Monitored-result delta filter"
  }
}

Powsybl_core.Study_contracts.Common_study_parameters -> Powsybl_core.Study_contracts.Modified_result_parameters: "contains"
Powsybl_open_loadflow.Study_execution.Pre_contingency_state -> Powsybl_open_loadflow.Study_execution.Post_contingency_state: "provides the N baseline for"
Powsybl_open_loadflow.Study_execution.Post_contingency_state -> Powsybl_open_loadflow.Study_execution.Post_action_state: "provides the N-1 state for"
Powsybl_core.Study_contracts.Modified_result_parameters -> Proposed_olf_branches.Monitored_result_filter: "would be consumed as-is: configures"
Powsybl_open_loadflow.Study_execution.Pre_contingency_state -> Proposed_olf_branches.Monitored_result_filter: "would extend: compares N results through"
Powsybl_open_loadflow.Study_execution.Post_contingency_state -> Proposed_olf_branches.Monitored_result_filter: "would extend: filters N-1 results through"
Powsybl_open_loadflow.Study_execution.Post_action_state -> Proposed_olf_branches.Monitored_result_filter: "would extend: filters post-action results through"
Proposed_olf_branches.Monitored_result_filter -> Powsybl_open_loadflow.State_and_result_mapping.Study_result_mapping: "would extend: adds selected monitored results to"
`;case`olf_branch_network_cache`:return`direction: right

Proposed_olf_branches: {
  label: "Open Load Flow pull-request branches (proposal)"

  Cache_input: {
    label: "NetworkCache.LfInput"
  }
  Ac_cache_value: {
    label: "NetworkCache.AcLfValue"
  }
  Dc_cache_value: {
    label: "NetworkCache.DcLfValue"
  }
  Dc_fast_restart: {
    label: "DcLoadFlowFromCache"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Network_cache: {
    label: "NetworkCache"

    Iidm_change_events: {
      label: "IIDM NetworkListener changes"
    }
    Change_classifier: {
      label: "Cache update classification"
    }
    Network_cache_entry: {
      label: "NetworkCache.Entry"
    }
    Ac_fast_restart: {
      label: "AcLoadFlowFromCache"
    }
  }
  State_and_result_mapping: {
    label: "IIDM state and core-result mapping"
  }
}

Powsybl_open_loadflow.Network_cache.Iidm_change_events -> Powsybl_open_loadflow.Network_cache.Network_cache_entry: "notifies"
Powsybl_open_loadflow.Network_cache.Iidm_change_events -> Powsybl_open_loadflow.Network_cache.Change_classifier: "classifies changes through"
Powsybl_open_loadflow.Network_cache.Network_cache_entry -> Powsybl_open_loadflow.Network_cache.Ac_fast_restart: "holds the AcLoadFlowContext reused by"
Powsybl_open_loadflow.Network_cache.Change_classifier -> Powsybl_open_loadflow.Network_cache.Network_cache_entry: "marks the cached context for update or invalidates"
Proposed_olf_branches.Cache_input -> Powsybl_open_loadflow.Network_cache.Network_cache_entry: "would extend: validates inputs for"
Powsybl_open_loadflow.Network_cache.Network_cache_entry -> Proposed_olf_branches.Ac_cache_value: "would extend: owns AC value"
Proposed_olf_branches.Ac_cache_value -> Powsybl_open_loadflow.Network_cache.Ac_fast_restart: "would extend: reused by"
Powsybl_open_loadflow.Network_cache.Network_cache_entry -> Proposed_olf_branches.Dc_cache_value: "would extend: owns DC value"
Proposed_olf_branches.Dc_cache_value -> Proposed_olf_branches.Dc_fast_restart: "reuses"
Powsybl_open_loadflow.Network_cache.Ac_fast_restart -> Powsybl_open_loadflow.State_and_result_mapping: "writes completed AC state through"
Proposed_olf_branches.Dc_fast_restart -> Powsybl_open_loadflow.State_and_result_mapping: "would consume as-is: writes completed DC state through"
`;case`rdfdb-integration`:return`direction: down

@gr1: {
  label: "Actors"

  _integration_tso: {
    label: "TSO"
    shape: c4-person
  }
  _integration_study_tool: {
    label: "Study tool"
    shape: c4-person
  }
  _integration_operator: {
    label: "Operator"
    shape: c4-person
  }
}
@gr5: {
  label: "Legend"

  _integration_legendCore: {
    label: "Grey: powsybl-core, upstream"
  }
  _integration_legendRegistry: {
    label: "Blue: proposal"
  }
  _integration_legendStore: {
    label: "Green: RDF store"
  }
  _integration_legendProposed: {
    label: "Dashed: not implemented"
  }
}
@gr2: {
  label: "powsybl-core, upstream"

  Bl_coreIidmVariantsNetwork_event_recorder: {
    label: "NetworkEventRecorder"
  }
  Bl_coreIidmNetwork: {
    label: "IIDM Network"
  }
}
@gr4: {
  label: "Model registry (separate repository, e.g. powsybl-cgmes-registry)"

  Sed_rdfdb_scenario_per_mas: {
    label: "Scenario per ModelingAuthoritySet"
  }
  Sed_diffstackingCgmes_rdfdbRdf_db_network_loader: {
    label: "RdfDbNetworkLoader"
  }
  Sed_diffstackingCgmes_rdfdbVersion_graph: {
    label: "VersionGraph + Checkpoint"
  }
  Sed_diffstackingCgmes_rdfdbSnapshot_catalog: {
    label: "SnapshotCatalog"
  }
  Sed_diffstackingCgmes_rdfdbTriple_diff_calculator: {
    label: "Ingest"
  }
}
@gr3: {
  label: "powsybl-core, proposed (local branches, not upstream)"

  Sed_diffstackingCgmes_diff_import: {
    label: "CgmesDiffImport"
  }
  Sed_unified_mappingFamilies: {
    label: "CGMES import / export"
  }
  Sed_diffstackingTriple_store_sparql: {
    label: "triple-store-impl-rdf4j-sparql"
  }
}
Proposed_diffstacking_rdf_database: {
  label: "RDF store: any SPARQL 1.1 + Graph Store endpoint (e.g. Fuseki) or in-process memory:"

  Store_meta_graph: {
    label: "Metadata graph per scenario"
  }
  Store_checkpoint_copies: {
    label: "Checkpoint copies"
  }
  Store_data_graphs: {
    label: "Immutable data graphs"
  }
  Store_diff_graphs: {
    label: "Forward / reverse diff graphs"
  }
}

@gr1._integration_tso -> @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog: "putAsDiff ×96 ≈ 53 s IGM"
@gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog -> @gr4.Sed_diffstackingCgmes_rdfdbTriple_diff_calculator: "rich timestep ≈ 0.9–1.1 s sv20"
@gr4.Sed_rdfdb_scenario_per_mas -> @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog: "one scenario per TSO"
@gr1._integration_study_tool -> @gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader: "load (sc, 08:30, v1.1)"
@gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -> @gr4.Sed_diffstackingCgmes_rdfdbVersion_graph: "plan: one chain query"
@gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -> @gr3.Sed_diffstackingCgmes_diff_import: "diff route ≈ 0.1 s sv6"
@gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -> @gr3.Sed_unified_mappingFamilies: "full route: cold ≈ 2 s IGM"
@gr3.Sed_diffstackingCgmes_diff_import -> @gr2.Bl_coreIidmNetwork: "96 variants ≈ 4.7 s IGM"
@gr3.Sed_unified_mappingFamilies -> @gr2.Bl_coreIidmNetwork: "builds / updates"
@gr1._integration_operator -> @gr2.Bl_coreIidmNetwork: "changes a variant"
@gr2.Bl_coreIidmVariantsNetwork_event_recorder -> @gr3.Sed_unified_mappingFamilies: "difference model ≈ 39 ms sv20"
@gr3.Sed_unified_mappingFamilies -> @gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog: "putDiff (RdfDbExport)"
@gr4.Sed_diffstackingCgmes_rdfdbSnapshot_catalog -> @gr3.Sed_diffstackingTriple_store_sparql: "one guarded SPARQL UPDATE"
@gr4.Sed_diffstackingCgmes_rdfdbVersion_graph -> @gr3.Sed_diffstackingTriple_store_sparql: "chain query; Checkpoint COPY"
@gr4.Sed_diffstackingCgmes_rdfdbRdf_db_network_loader -> @gr3.Sed_diffstackingTriple_store_sparql: "parallel GSP GET"
Proposed_diffstacking_rdf_database.Store_meta_graph -> Proposed_diffstacking_rdf_database.Store_data_graphs: "indexes"
Proposed_diffstacking_rdf_database.Store_meta_graph -> Proposed_diffstacking_rdf_database.Store_diff_graphs: "indexes"
Proposed_diffstacking_rdf_database.Store_checkpoint_copies -> Proposed_diffstacking_rdf_database.Store_diff_graphs: "folds"
@gr3.Sed_diffstackingTriple_store_sparql -> Proposed_diffstacking_rdf_database: "SPARQL 1.1 + GSP"
`;case`state_estimation_proposed_contracts`:return`direction: right

Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"

    Network_loader: {
      label: "Networks and LfNetworkLoader"
    }
  }
  Equation_toolkit: {
    label: "Equation builder toolkits"

    Ac_equation_builder: {
      label: "AC equation builders"
    }
    Equation_system: {
      label: "EquationSystem and Jacobian infrastructure"
    }
  }
  Lf_network: {
    label: "LfNetwork"
  }
}
Pypowsybl: {
  label: "pypowsybl"

  Measurement_and_observability_dataframes: {
    label: "Measurement and observability DataFrames"
  }
}
Proposed_state_estimation_core_api: {
  label: "Proposed powsybl-core State Estimation API"
}
Proposed_bus_branch_measurement_projection: {
  label: "Proposed bus/branch measurement projection"
}
Proposed_reusable_ac_measurement_terms: {
  label: "Proposed reusable AC measurement terms"
}
Powsybl_core: {
  label: "powsybl-core"

  IidmExtensions: {
    label: "IIDM extensions"

    Transformer_estimation_flags: {
      label: "Transformer estimation flags"
    }
    Measurements: {
      label: "Measurements and discrete measurements extensions"
    }
    Observability: {
      label: "Observability extensions"
    }
  }
  Math: {
    label: "Math API"
  }
  IidmNetwork: {
    label: "Network"
  }
}
Proposed_rectangular_measurement_jacobian: {
  label: "Proposed measurement-function and rectangular Jacobian support"
}
Proposed_retained_factorization: {
  label: "Proposed retained factorization access"
}
Proposed_state_estimation_input_contract: {
  label: "Proposed State Estimation input and result contract"
}

Powsybl_core.IidmExtensions.Measurements -> Powsybl_core.IidmNetwork: "attach measurement data to"
Powsybl_core.IidmExtensions.Observability -> Powsybl_core.IidmNetwork: "annotate equipment and topology on"
Powsybl_open_loadflow.Lf_network_adapter.Network_loader -> Powsybl_open_loadflow.Lf_network: "builds and configures"
Powsybl_open_loadflow.Equation_toolkit.Ac_equation_builder -> Powsybl_open_loadflow.Equation_toolkit.Equation_system: "constructs and updates"
Pypowsybl.Measurement_and_observability_dataframes -> Powsybl_core.IidmExtensions.Measurements: "maps through"
Pypowsybl.Measurement_and_observability_dataframes -> Powsybl_core.IidmExtensions.Observability: "maps through"
Powsybl_core.IidmNetwork -> Proposed_state_estimation_input_contract: "would provide Network to"
Powsybl_core.IidmExtensions.Measurements -> Proposed_state_estimation_input_contract: "would contribute measurements to"
Powsybl_core.IidmExtensions.Observability -> Proposed_state_estimation_input_contract: "would contribute observability metadata to"
Powsybl_core.IidmExtensions.Transformer_estimation_flags -> Proposed_state_estimation_input_contract: "would contribute equipment flags to"
Pypowsybl.Measurement_and_observability_dataframes -> Proposed_state_estimation_input_contract: "would marshal Python data through"
Proposed_state_estimation_core_api -> Proposed_state_estimation_input_contract: "would define calls over"
Powsybl_open_loadflow.Lf_network_adapter.Network_loader -> Proposed_bus_branch_measurement_projection: "would be extended for"
Proposed_bus_branch_measurement_projection -> Proposed_state_estimation_input_contract: "would derive reduced estimator input for"
Powsybl_open_loadflow.Equation_toolkit.Equation_system -> Proposed_rectangular_measurement_jacobian: "would be extended for"
Proposed_bus_branch_measurement_projection -> Proposed_rectangular_measurement_jacobian: "would supply topology and state indexing to"
Powsybl_core.Math -> Proposed_retained_factorization: "would expose controlled reuse through"
Proposed_rectangular_measurement_jacobian -> Proposed_retained_factorization: "would form weighted normal equations with"
Powsybl_open_loadflow.Equation_toolkit.Ac_equation_builder -> Proposed_reusable_ac_measurement_terms: "would expose existing terms through"
Proposed_reusable_ac_measurement_terms -> Proposed_rectangular_measurement_jacobian: "would evaluate h(x) and derivatives for"
`;case`state_estimation_proposal_a`:return`direction: down

Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Lf_network: {
    label: "LfNetwork"
  }
  Open_loadflow_provider: {
    label: "OpenLoadFlowProvider"
  }
  Equation_toolkit: {
    label: "Equation builder toolkits"
  }
  Ac_dc_loadflow_engines: {
    label: "AC/DC load-flow engines"
  }
  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"

    Network_loader: {
      label: "Networks and LfNetworkLoader"
    }
  }
}
Powsybl_core: {
  label: "powsybl-core"

  IidmExtensions: {
    label: "IIDM extensions"

    Measurements: {
      label: "Measurements and discrete measurements extensions"
    }
    Observability: {
      label: "Observability extensions"
    }
  }
  IidmNetwork: {
    label: "Network"
  }
}
Proposal_a_state_estimation: {
  label: "Proposed powsybl-state-estimation"

  Proposal_a_state_estimation_module: {
    label: "state-estimation"

    Proposal_a_result_mapping: {
      label: "State-estimation result mapping"
    }
    Proposal_a_state_estimation_provider: {
      label: "StateEstimationProvider"
    }
    Proposal_a_measurement_preparation: {
      label: "Measurement and covariance preparation"
    }
    Proposal_a_observability_analysis: {
      label: "Observability analysis"
    }
    Proposal_a_wls_kernel: {
      label: "WLS kernel"
    }
    Proposal_a_bad_data_diagnostics: {
      label: "Post-convergence residual and bad-data diagnostics"
    }
  }
}
Proposed_state_estimation_core_api: {
  label: "Proposed powsybl-core State Estimation API"
}
Proposed_state_estimation_input_contract: {
  label: "Proposed State Estimation input and result contract"
}
Proposal_a_open_steady_state: {
  label: "Proposed powsybl-open-steady-state"

  Proposal_a_network_toolkit: {
    label: "Network toolkit"

    Proposal_a_topology_measurement_projection: {
      label: "Node/breaker-to-bus/branch measurement projection"
    }
  }
  Proposal_a_equation_toolkit: {
    label: "Equation toolkit"

    Proposal_a_measurement_equation_builder: {
      label: "State Estimation measurement-equation builder"
    }
  }
}
Proposal_a_open_loadflow: {
  label: "Proposed powsybl-open-loadflow"

  Proposal_a_loadflow: {
    label: "open-loadflow"
  }
}

Powsybl_open_loadflow.Lf_network -> Powsybl_open_loadflow.Equation_toolkit: "supplies variables and network state to"
Powsybl_open_loadflow.Lf_network -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "provides loaded network to"
Powsybl_open_loadflow.Equation_toolkit -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "supplies equations to"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.Lf_network_adapter.Network_loader: "configures"
Powsybl_core.IidmNetwork -> Proposed_state_estimation_input_contract: "would provide Network to"
Powsybl_core.IidmExtensions.Measurements -> Proposed_state_estimation_input_contract: "would contribute measurements to"
Powsybl_core.IidmExtensions.Observability -> Proposed_state_estimation_input_contract: "would contribute observability metadata to"
Proposed_state_estimation_core_api -> Proposed_state_estimation_input_contract: "would define calls over"
Proposed_state_estimation_input_contract -> Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection: "would provide IIDM topology, switch status, and measurement metadata to"
Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -> Proposal_a_open_steady_state.Proposal_a_equation_toolkit.Proposal_a_measurement_equation_builder: "would provide reduced topology and measurement mappings to"
Proposed_state_estimation_core_api -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_state_estimation_provider: "would discover through ServiceLoader"
Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_measurement_preparation: "would provide projected measurement locations to"
Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_observability_analysis: "would provide reduced topology and measurement-to-state incidence to"
Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel: "would initialize and index"
Proposal_a_open_steady_state.Proposal_a_equation_toolkit.Proposal_a_measurement_equation_builder -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel: "[...]"
Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_state_estimation_provider -> Proposal_a_open_steady_state.Proposal_a_network_toolkit.Proposal_a_topology_measurement_projection: "would start topology and measurement projection through"
Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_result_mapping -> Proposed_state_estimation_core_api: "would return results through"
Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_measurement_preparation -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel: "[...]"
Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_observability_analysis -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel: "selects observable variables for"
Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_bad_data_diagnostics: "[...]"
Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_wls_kernel -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_result_mapping: "provides estimated state to"
Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_bad_data_diagnostics -> Proposal_a_state_estimation.Proposal_a_state_estimation_module.Proposal_a_result_mapping: "adds diagnostics to"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Proposal_a_open_loadflow.Proposal_a_loadflow: "would remain in"
Powsybl_open_loadflow.Open_loadflow_provider -> Proposal_a_open_loadflow.Proposal_a_loadflow: "would remain in"
Powsybl_open_loadflow.Open_loadflow_provider -> Powsybl_open_loadflow.Lf_network_adapter: "loads the computation network"
Powsybl_open_loadflow.Lf_network -> Proposal_a_open_steady_state.Proposal_a_network_toolkit: "would be extracted into"
Powsybl_open_loadflow.Lf_network_adapter.Network_loader -> Proposal_a_open_steady_state.Proposal_a_network_toolkit: "would move with"
Powsybl_open_loadflow.Equation_toolkit -> Proposal_a_open_steady_state.Proposal_a_equation_toolkit: "would be extracted into"
Proposal_a_open_loadflow.Proposal_a_loadflow -> Proposal_a_open_steady_state.Proposal_a_network_toolkit: "would use the target network toolkit"
Proposal_a_open_loadflow.Proposal_a_loadflow -> Proposal_a_open_steady_state.Proposal_a_equation_toolkit: "would use the target equation toolkit"
`;case`state_estimation_proposal_b`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Math: {
    label: "Math API"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Lf_network: {
    label: "LfNetwork"
  }
  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"
  }
  Contingency_propagation: {
    label: "Contingency propagation"
  }
  Equation_toolkitEquation_system: {
    label: "EquationSystem and Jacobian infrastructure"
  }
}
Proposal_b_open_simulator: {
  label: "Proposed powsybl-open-simulator (renamed from powsybl-open-loadflow)"

  Proposal_b_state_estimation: {
    label: "powsybl-open-state-estimation"
  }
  Proposal_b_loadflow: {
    label: "powsybl-open-loadflow"
  }
  Proposal_b_grid_reduction: {
    label: "powsybl-open-grid-reduction"
  }
  Proposal_b_core: {
    label: "powsybl-open-simulator-core"
  }
  Proposal_b_network: {
    label: "powsybl-open-simulator-network"
  }
  Proposal_b_matrix: {
    label: "powsybl-open-simulator-matrix"
  }
}

Powsybl_core.Math -> Proposal_b_open_simulator.Proposal_b_matrix: "com.powsybl.math.matrix would transfer into"
Powsybl_open_loadflow.Lf_network -> Proposal_b_open_simulator.Proposal_b_network: "would move, renamed OsNetwork, into"
Powsybl_open_loadflow.Lf_network_adapter -> Proposal_b_open_simulator.Proposal_b_network: "would move into"
Powsybl_open_loadflow.Contingency_propagation -> Proposal_b_open_simulator.Proposal_b_network: "would move into"
Powsybl_open_loadflow.Equation_toolkitEquation_system -> Proposal_b_open_simulator.Proposal_b_core: "would move into"
Proposal_b_open_simulator.Proposal_b_state_estimation -> Proposal_b_open_simulator.Proposal_b_core: "would depend on"
Proposal_b_open_simulator.Proposal_b_network -> Proposal_b_open_simulator.Proposal_b_matrix: "would depend on"
Proposal_b_open_simulator.Proposal_b_core -> Proposal_b_open_simulator.Proposal_b_network: "would depend on"
Proposal_b_open_simulator.Proposal_b_loadflow -> Proposal_b_open_simulator.Proposal_b_core: "would depend on"
Proposal_b_open_simulator.Proposal_b_grid_reduction -> Proposal_b_open_simulator.Proposal_b_core: "would depend on"
Powsybl_open_loadflow -> Proposal_b_open_simulator.Proposal_b_loadflow: "remaining lf, sa, sensi, AC, and DC code would stay in"
`;case`state_estimation_proposal_b_sequence_mvp`:return`direction: right

Proposed_state_estimation_client: {
  label: "Proposed State Estimation client"
}
Proposed_state_estimation_core_api: {
  label: "Proposed powsybl-core State Estimation API"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: {
  label: "StateEstimationProvider"
}
Powsybl_coreIidm: {
  label: "IIDM API and extensions"
}
Proposal_b_open_simulatorProposal_b_network: {
  label: "powsybl-open-simulator-network"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis: {
  label: "Observability analysis"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: {
  label: "WLS kernel"
}
Proposal_b_open_simulatorProposal_b_core: {
  label: "powsybl-open-simulator-core"
}
Proposal_b_open_simulatorProposal_b_matrix: {
  label: "powsybl-open-simulator-matrix"
}

Proposed_state_estimation_client -> Proposed_state_estimation_core_api: "StateEstimation.run(network, variantId, parameters)"
Proposed_state_estimation_core_api -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "discover provider through ServiceLoader and run"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Powsybl_coreIidm: "load network variant and measurements"
Powsybl_coreIidm -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "topology, switch status, parameters, taps, measurements with standard deviations"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_network: "project to bus/branch model and map measurements"
Proposal_b_open_simulatorProposal_b_network -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "islands and measurement mapping"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "prepare z, R, W"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis: "topological observability per island"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "observable islands, critical measurements"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: "estimate each observable island"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -> Proposal_b_open_simulatorProposal_b_core: "build h(x) and Jacobian H"
Proposal_b_open_simulatorProposal_b_core -> Proposal_b_open_simulatorProposal_b_matrix: "sparse rectangular H"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -> Proposal_b_open_simulatorProposal_b_matrix: "G = H^T W H, sparse factorization, solve for delta x"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: "update x, check convergence"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "x hat, residuals, convergence status"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_network: "map bus/branch estimates to IIDM elements"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Powsybl_coreIidm: "optional write-back of state and observability"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposed_state_estimation_core_api: "StateEstimationResult and StateEstimationReport"
Proposed_state_estimation_core_api -> Proposed_state_estimation_client: "per-island status, estimated state, observability"
`;case`state_estimation_proposal_b_sequence_followup`:return`direction: right

Proposed_state_estimation_client: {
  label: "Proposed State Estimation client"
}
Proposed_state_estimation_core_api: {
  label: "Proposed powsybl-core State Estimation API"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: {
  label: "StateEstimationProvider"
}
Powsybl_coreIidm: {
  label: "IIDM API and extensions"
}
Proposal_b_open_simulatorProposal_b_network: {
  label: "powsybl-open-simulator-network"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis: {
  label: "Observability analysis"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: {
  label: "WLS kernel"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics: {
  label: "Post-convergence residual and bad-data diagnostics"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing: {
  label: "Topology error processing"
}
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation: {
  label: "Network parameter estimation"
}

Proposed_state_estimation_client -> Proposed_state_estimation_core_api: "StateEstimation.run(network, variantId, parameters)"
Proposed_state_estimation_core_api -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "run with bad-data, topology, and parameter options"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Powsybl_coreIidm: "load immutable node/breaker snapshot and measurements"
Powsybl_coreIidm -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "snapshot and source measurements"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_network: "project to bus/branch, keep node/breaker provenance"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "create run-local working measurement set"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis: "observability and measurement classification"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: "WLS estimate"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "x hat, residuals, H, retained factors"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics: "chi-square test and normalized residuals"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "test outcome, isolated suspects, correlated clusters"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing: "assess topology-signature clusters before any removal"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing -> Proposal_b_open_simulatorProposal_b_network: "build bounded hypotheses in detached variants"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: "re-estimate each hypothesis with breaker flow constraints"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "ranked candidates or inconclusive"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics: "identify largest normalized residual"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis: "gate: not critical, island stays observable"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: "deactivate suspect in working set and re-estimate"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation: "assess persistent clusters adjacent to a branch"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis: "parameter observability and local redundancy"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel: "augmented-state estimate, feasible discrete taps"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation -> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider: "estimates, uncertainty, update recommendation"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposal_b_open_simulatorProposal_b_network: "map estimates to IIDM elements"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Powsybl_coreIidm: "opt-in write-back of state and accepted corrections"
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider -> Proposed_state_estimation_core_api: "result, report, and audit trail"
Proposed_state_estimation_core_api -> Proposed_state_estimation_client: "result quality: passed, corrected, inconclusive, or failed"
`;case`unified_mapping_before`:return`direction: down

Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Partial_ssh_export: {
    label: "PartialSshExport"
  }
  Cgmes_diff_export: {
    label: "CgmesDiffExport"
  }
  Cgmes_diff_import: {
    label: "CgmesDiffImport"
  }
  Fast_route_capabilities: {
    label: "FastRouteCapabilities + DiffSubjectResolver"
  }
  Cgmes_object_dump: {
    label: "CgmesObjectDump"
  }
  Change_translator: {
    label: "CgmesChangeTranslator + IidmStateView"
  }
  Difference_model: {
    label: "DifferenceModelSet / CgmesStatement"
  }
  Difference_sink: {
    label: "DifferenceSink / DifferenceModelWriter"
  }
}
Powsybl_core: {
  label: "powsybl-core"

  Cgmes: {
    label: "CGMES conversion"

    Conversion_update: {
      label: "Conversion.update (SSH update workflow)"
    }
  }
  Iidm: {
    label: "IIDM API and extensions"

    Network: {
      label: "Network"
    }
    Io: {
      label: "IIDM I/O and format providers"

      Export_providers: {
        label: "Exporter implementations"

        Cgmes_exporter: {
          label: "CgmesExport"
        }
      }
    }
  }
}
Proposed_unified_mapping: {
  label: "Unified mapping (proposal)"

  Before_ssh_writers: {
    label: "SteadyStateHypothesisExport writers (before)"
  }
  Before_probes: {
    label: "DiffProbes + DiffSubjectResolver + CgmesLimitIndex (before)"
  }
}

Powsybl_core.Iidm.Network -> Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter: "serializes"
Proposed_diffstacking.Partial_ssh_export -> Proposed_diffstacking.Change_translator: "map changes with"
Proposed_diffstacking.Cgmes_diff_export -> Proposed_diffstacking.Change_translator: "map changes with"
Proposed_diffstacking.Change_translator -> Powsybl_core.Iidm.Network: "would consume as-is: reads current (and overlaid previous) state of"
Proposed_diffstacking.Cgmes_diff_export -> Proposed_diffstacking.Difference_model: "generates"
Proposed_diffstacking.Change_translator -> Proposed_diffstacking.Difference_model: "emits EQ statements for limits and impedances into"
Proposed_diffstacking.Difference_model -> Proposed_diffstacking.Difference_sink: "is pushed to"
Proposed_diffstacking.Cgmes_diff_import -> Powsybl_core.Iidm.Network: "applies a difference in place, into a variant"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_diffstacking.Fast_route_capabilities: "decides route with"
Proposed_diffstacking.Fast_route_capabilities -> Powsybl_core.Iidm.Network: "would consume as-is: resolves subjects and types in"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_diffstacking.Cgmes_object_dump: "completes groups / checks reverse values with"
Proposed_diffstacking.Cgmes_object_dump -> Proposed_diffstacking.Change_translator: "reuses export mapping of"
Proposed_diffstacking.Cgmes_diff_import -> Powsybl_core.Cgmes.Conversion_update: "would extend: runs, scoped to the named equipment"
Powsybl_core.Cgmes.Conversion_update -> Powsybl_core.Iidm.Network: "updates in place"
Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter -> Proposed_unified_mapping.Before_ssh_writers: "writes the full SSH with (own rules)"
Proposed_unified_mapping.Before_ssh_writers -> Powsybl_core.Iidm.Network: "reads"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_unified_mapping.Before_probes: "completes groups with (own property lists)"
Proposed_unified_mapping.Before_probes -> Proposed_diffstacking.Cgmes_object_dump: "asks"
`;case`unified_mapping_after`:return`direction: down

Proposed_diffstacking: {
  label: "Diffstacking in powsybl-core (proposal)"

  Partial_ssh_export: {
    label: "PartialSshExport"
  }
  Cgmes_diff_export: {
    label: "CgmesDiffExport"
  }
  Cgmes_diff_import: {
    label: "CgmesDiffImport"
  }
  Change_translator: {
    label: "CgmesChangeTranslator + IidmStateView"
  }
  Fast_route_capabilities: {
    label: "FastRouteCapabilities + DiffSubjectResolver"
  }
  Difference_model: {
    label: "DifferenceModelSet / CgmesStatement"
  }
  Difference_sink: {
    label: "DifferenceSink / DifferenceModelWriter"
  }
}
Powsybl_core: {
  label: "powsybl-core"

  Cgmes: {
    label: "CGMES conversion"

    Conversion_update: {
      label: "Conversion.update (SSH update workflow)"
    }
  }
  Iidm: {
    label: "IIDM API and extensions"

    Network: {
      label: "Network"
    }
    Io: {
      label: "IIDM I/O and format providers"

      Export_providers: {
        label: "Exporter implementations"

        Cgmes_exporter: {
          label: "CgmesExport"
        }
      }
      Exchange_formats: {
        label: "Supported exchange formats"

        Cgmes: {
          label: "CGMES"
        }
      }
    }
  }
}
Proposed_unified_mapping: {
  label: "Unified mapping (proposal)"

  Subject_index: {
    label: "Families (subject index + describe)"
  }
  Mapping_page: {
    label: "mapping.md (generated)"
  }
  Families: {
    label: "Family classes (8)"
  }
  Plain_rows: {
    label: "PlainFamily / PlainRow / Quantity / Block"
  }
  Property_sink: {
    label: "CgmesPropertySink"
  }
  Refusal: {
    label: "Refusal"
  }
}

Powsybl_core.Iidm.Network -> Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter: "serializes"
Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter -> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes: "writes"
Proposed_diffstacking.Partial_ssh_export -> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes: "would consume as-is: writes partial SSH"
Proposed_diffstacking.Partial_ssh_export -> Proposed_diffstacking.Change_translator: "map changes with"
Proposed_diffstacking.Cgmes_diff_export -> Proposed_diffstacking.Change_translator: "map changes with"
Proposed_diffstacking.Change_translator -> Powsybl_core.Iidm.Network: "would consume as-is: reads current (and overlaid previous) state of"
Proposed_diffstacking.Cgmes_diff_export -> Proposed_diffstacking.Difference_model: "generates"
Proposed_diffstacking.Change_translator -> Proposed_diffstacking.Difference_model: "emits EQ statements for limits and impedances into"
Proposed_diffstacking.Difference_model -> Proposed_diffstacking.Difference_sink: "is pushed to"
Proposed_diffstacking.Cgmes_diff_import -> Powsybl_core.Iidm.Network: "applies a difference in place, into a variant"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_diffstacking.Fast_route_capabilities: "decides route with"
Proposed_diffstacking.Fast_route_capabilities -> Powsybl_core.Iidm.Network: "would consume as-is: resolves subjects and types in"
Proposed_diffstacking.Cgmes_diff_import -> Powsybl_core.Cgmes.Conversion_update: "would extend: runs, scoped to the named equipment"
Powsybl_core.Cgmes.Conversion_update -> Powsybl_core.Iidm.Network: "updates in place"
Powsybl_core.Iidm.Io.Export_providers.Cgmes_exporter -> Proposed_unified_mapping.Families: "writes the full SSH through"
Proposed_diffstacking.Change_translator -> Proposed_unified_mapping.Families: "dispatches a change by key to"
Proposed_diffstacking.Fast_route_capabilities -> Proposed_unified_mapping.Families: "derives its table from the blocks of"
Proposed_unified_mapping.Families -> Powsybl_core.Iidm.Network: "reads the current or previous state of"
Powsybl_core.Cgmes.Conversion_update -> Proposed_unified_mapping.Plain_rows: "sets loads, control areas and switches through"
Proposed_unified_mapping.Families -> Proposed_unified_mapping.Plain_rows: "states plain values as"
Proposed_unified_mapping.Families -> Proposed_unified_mapping.Property_sink: "describes objects into"
Proposed_unified_mapping.Property_sink -> Powsybl_core.Iidm.Io.Exchange_formats.Cgmes: "becomes the SSH document of"
Proposed_unified_mapping.Property_sink -> Proposed_diffstacking.Partial_ssh_export: "one change: CgmesPropertyBuffer, written by"
Proposed_unified_mapping.Property_sink -> Proposed_diffstacking.Cgmes_diff_export: "one change: CgmesPropertyBuffer, compared by"
Proposed_unified_mapping.Property_sink -> Proposed_diffstacking.Difference_model: "becomes statements of"
Proposed_unified_mapping.Families -> Proposed_unified_mapping.Refusal: "refuses with"
Proposed_diffstacking.Cgmes_diff_import -> Proposed_unified_mapping.Subject_index: "resolves subjects and completes groups with"
Proposed_unified_mapping.Subject_index -> Proposed_unified_mapping.Families: "describes a subject with"
Proposed_unified_mapping.Mapping_page -> Proposed_unified_mapping.Families: "is generated from"
Proposed_unified_mapping.Mapping_page -> Proposed_unified_mapping.Refusal: "lists rule, scope and remedy of"
`;case`upstream-main-today`:return`direction: down

Powsybl_coreIidmIoExchange_formatsCgmes: {
  label: "CGMES files"
}
Powsybl_coreIidmIoImport_providersCgmes_importer: {
  label: "CgmesImport"
}
Powsybl_coreCgmesConversion: {
  label: "Conversion.convert"
}
Powsybl_coreCgmesConversion_update: {
  label: "Conversion.update + Update"
}
Powsybl_coreCgmesQuery_catalog: {
  label: "SPARQL catalogue (CIM16*.sparql)"
}
Powsybl_coreCgmesElement_conversions: {
  label: "elements/*Conversion"
}
Powsybl_coreCgmesTriple_store: {
  label: "Triple store (rdf4j)"
}
Powsybl_coreIidmNetwork: {
  label: "IIDM Network"
}
Powsybl_coreIidmIoExport_providersCgmes_exporter: {
  label: "CgmesExport"
}
Powsybl_coreCgmesEq_export: {
  label: "EquipmentExport"
}
Powsybl_coreCgmesSsh_export: {
  label: "SteadyStateHypothesisExport"
}
Powsybl_coreCgmesTp_sv_export: {
  label: "TopologyExport / StateVariablesExport"
}
Unified_mapping_legendUnchanged: {
  label: "Legend: powsybl-core, upstream"
}
Unified_mapping_legendRule_stated: {
  label: "Legend: upstream code stating the rule"
}

Powsybl_coreIidmIoExchange_formatsCgmes -> Powsybl_coreIidmIoImport_providersCgmes_importer: "loads"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Powsybl_coreCgmesTriple_store: "loads files into"
Powsybl_coreCgmesQuery_catalog -> Powsybl_coreCgmesTriple_store: "is evaluated on"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Powsybl_coreCgmesConversion: "Network.read: converts with"
Powsybl_coreCgmesConversion -> Powsybl_coreCgmesQuery_catalog: "reads the model through"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Powsybl_coreCgmesConversion_update: "Importer.update: updates with"
Powsybl_coreCgmesConversion_update -> Powsybl_coreCgmesQuery_catalog: "reads the update queries of"
Powsybl_coreCgmesConversion -> Powsybl_coreCgmesElement_conversions: "convert() per object, then update()"
Powsybl_coreCgmesConversion_update -> Powsybl_coreCgmesElement_conversions: "update() per object"
Powsybl_coreCgmesElement_conversions -> Powsybl_coreIidmNetwork: "creates and sets the state of"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIoExport_providersCgmes_exporter: "serializes"
Powsybl_coreIidmIoExport_providersCgmes_exporter -> Powsybl_coreIidmIoExchange_formatsCgmes: "writes"
Powsybl_coreIidmIoExport_providersCgmes_exporter -> Powsybl_coreCgmesEq_export: "writes EQ with"
Powsybl_coreIidmIoExport_providersCgmes_exporter -> Powsybl_coreCgmesSsh_export: "writes SSH with"
Powsybl_coreCgmesSsh_export -> Powsybl_coreIidmNetwork: "reads"
Powsybl_coreIidmIoExport_providersCgmes_exporter -> Powsybl_coreCgmesTp_sv_export: "writes TP and SV with"
`;case`families-after`:return`direction: down

Powsybl_coreIidmIoExchange_formatsCgmes: {
  label: "CGMES files"
}
Proposed_diffstackingChange_translator: {
  label: "CgmesChangeTranslator"
}
Proposed_unified_mappingFamilies: {
  label: "Family classes"

  Load_family: {
    label: "LoadFamily"
  }
  Machine_family: {
    label: "MachineFamily"
  }
  Tap_changer_and_shunt_family: {
    label: "TapChangerAndShuntFamily"
  }
  Switch_and_terminal_family: {
    label: "SwitchAndTerminalFamily"
  }
  Hvdc_family: {
    label: "HvdcFamily"
  }
  Limit_family: {
    label: "LimitFamily"
  }
  Regulating_control_family: {
    label: "RegulatingControlFamily"
  }
  Control_area_family: {
    label: "ControlAreaFamily"
  }
}
Proposed_unified_mappingMapping_page: {
  label: "mapping.md (generated)"
}
Powsybl_coreIidmIoImport_providersCgmes_importer: {
  label: "CgmesImport"
}
Powsybl_coreCgmesConversion: {
  label: "Conversion"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "In-place import"
}
Powsybl_coreCgmesConversion_update: {
  label: "Conversion.update + UpdateScope"
}
Proposed_diffstackingFast_route_capabilities: {
  label: "Capability table"
}
Proposed_unified_mappingSubject_index: {
  label: "Subject index"
}
Powsybl_coreCgmesQuery_catalog: {
  label: "SPARQL catalogue (CIM16*.sparql)"
}
Powsybl_coreCgmesElement_conversions: {
  label: "elements/*Conversion"
}
Powsybl_coreCgmesTriple_store: {
  label: "Triple store (rdf4j)"
}
Powsybl_coreIidmNetwork: {
  label: "IIDM Network"
}
Proposed_unified_mappingPlain_rows: {
  label: "Quantity / PlainRow / LoadRows"
}
Proposed_unified_mappingRefusal: {
  label: "Refusal"
}
Proposed_unified_mappingProperty_sink: {
  label: "CgmesPropertySink"
}
Powsybl_coreCgmesSsh_export: {
  label: "Full SSH export"
}
Proposed_diffstackingPartial_ssh_export: {
  label: "Partial SSH"
}
Proposed_diffstackingCgmes_diff_export: {
  label: "CGMES difference model"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: {
  label: "RDF database (cgmes-rdfdb)"
}
Unified_mapping_legendUnchanged: {
  label: "Legend: powsybl-core, upstream"
}
Unified_mapping_legendReworked: {
  label: "Legend: proposal"
}
Unified_mapping_legendRule_stated: {
  label: "Legend: upstream code stating the rule"
}
Unified_mapping_legendRule_stated_proposal: {
  label: "Legend: proposal code stating the rule"
}

Powsybl_coreIidmIoExchange_formatsCgmes -> Powsybl_coreIidmIoImport_providersCgmes_importer: "loads"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Powsybl_coreCgmesTriple_store: "loads files into"
Powsybl_coreCgmesQuery_catalog -> Powsybl_coreCgmesTriple_store: "is evaluated on"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Powsybl_coreCgmesConversion: "Network.read: converts with"
Powsybl_coreCgmesConversion -> Powsybl_coreCgmesQuery_catalog: "reads the model through"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Powsybl_coreCgmesConversion_update: "Importer.update: updates with"
Powsybl_coreCgmesConversion_update -> Powsybl_coreCgmesQuery_catalog: "reads the update queries of"
Powsybl_coreCgmesConversion -> Powsybl_coreCgmesElement_conversions: "convert() per object, then update()"
Powsybl_coreCgmesConversion_update -> Powsybl_coreCgmesElement_conversions: "update() per object"
Powsybl_coreCgmesElement_conversions -> Proposed_unified_mappingPlain_rows: "reads loads, areas, switches through"
Proposed_unified_mappingProperty_sink -> Powsybl_coreCgmesSsh_export: "full model: Xml"
Proposed_unified_mappingProperty_sink -> Proposed_diffstackingPartial_ssh_export: "one change: buffer"
Proposed_unified_mappingProperty_sink -> Proposed_diffstackingCgmes_diff_export: "one change: buffer"
Proposed_diffstackingCgmes_diff_export -> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: "DifferenceModelSet"
Powsybl_coreIidmIoImport_providersCgmes_importer -> Proposed_diffstackingCgmes_diff_import: "would extend: delegates difference models to"
Proposed_diffstackingCgmes_diff_import -> Powsybl_coreCgmesConversion_update: "would extend: runs, scoped to the named equipment"
Proposed_diffstackingCgmes_diff_import -> Proposed_diffstackingFast_route_capabilities: "decides route with"
Proposed_diffstackingCgmes_diff_import -> Proposed_unified_mappingSubject_index: "resolves subjects, completes groups with"
Powsybl_coreCgmesElement_conversions -> Powsybl_coreIidmNetwork: "creates and sets the state of"
Proposed_diffstackingChange_translator -> Proposed_unified_mappingFamilies: "dispatches a change by key to"
Proposed_unified_mappingFamilies -> Proposed_unified_mappingPlain_rows: "states plain values as"
Proposed_unified_mappingFamilies -> Proposed_unified_mappingRefusal: "refuses with"
Proposed_unified_mappingFamilies -> Proposed_unified_mappingProperty_sink: "describes objects into"
Proposed_diffstackingFast_route_capabilities -> Proposed_unified_mappingFamilies: "derives its table from the blocks of"
Proposed_unified_mappingSubject_index -> Proposed_unified_mappingFamilies: "describes a subject with"
Proposed_unified_mappingMapping_page -> Proposed_unified_mappingFamilies: "is generated from"
`;case`machine-example`:return`direction: down

Powsybl_coreIidmNetwork: {
  label: "IIDM Network"
}
Powsybl_coreIidmVariantsNetwork_event_recorder: {
  label: "NetworkEventRecorder"
}
Proposed_diffstackingChange_translator: {
  label: "CgmesChangeTranslator"
}
Proposed_unified_mappingFamiliesMachine_family: {
  label: "MachineFamily"
}
Proposed_unified_mappingProperty_sink: {
  label: "CgmesPropertySink"
}
Powsybl_coreCgmesSsh_export: {
  label: "Full SSH export"
}
Proposed_diffstackingPartial_ssh_export: {
  label: "Partial SSH"
}
Proposed_diffstackingCgmes_diff_export: {
  label: "CGMES difference model"
}
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: {
  label: "RDF database"
}
Proposed_diffstackingCgmes_diff_import: {
  label: "CgmesDiffImport"
}
Proposed_unified_mappingFast_route_plan: {
  label: "FastRoutePlan"
}
Proposed_unified_mappingSubject_index: {
  label: "Families.resolve"
}
Powsybl_coreCgmesConversion_update: {
  label: "Conversion.update + UpdateScope"
}
Powsybl_coreCgmesElement_conversions: {
  label: "SynchronousMachineConversion"
}
Unified_mapping_legendUnchanged: {
  label: "Legend: powsybl-core, upstream"
}
Unified_mapping_legendReworked: {
  label: "Legend: proposal"
}
Unified_mapping_legendRule_stated: {
  label: "Legend: upstream code stating the rule"
}
Unified_mapping_legendRule_stated_proposal: {
  label: "Legend: proposal code stating the rule"
}

Powsybl_coreIidmNetwork -> Powsybl_coreIidmVariantsNetwork_event_recorder: "G.setTargetP(100): event targetP"
Powsybl_coreIidmVariantsNetwork_event_recorder -> Proposed_diffstackingChange_translator: "change log"
Proposed_diffstackingChange_translator -> Proposed_unified_mappingFamiliesMachine_family: "key targetP: generatorUpdates(G)"
Proposed_unified_mappingFamiliesMachine_family -> Proposed_unified_mappingProperty_sink: "describeSynchronousMachine: RotatingMachine.p = −100"
Proposed_unified_mappingProperty_sink -> Proposed_diffstackingPartial_ssh_export: "buffer: SynchronousMachine block"
Proposed_unified_mappingProperty_sink -> Proposed_diffstackingCgmes_diff_export: "buffer: forward and reverse statements"
Proposed_diffstackingCgmes_diff_export -> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink: "DifferenceModelSet: two named graphs"
Proposed_unified_mappingProperty_sink -> Powsybl_coreCgmesSsh_export: "full model: same describe, Xml sink"
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink -> Proposed_diffstackingCgmes_diff_import: "RdfDbNetworkLoader: difference RotatingMachine.p = −120"
Proposed_diffstackingCgmes_diff_import -> Proposed_unified_mappingFast_route_plan: "FastRoutePlan.of(network, diffs)"
Proposed_unified_mappingFast_route_plan -> Proposed_unified_mappingSubject_index: "resolve(id, SynchronousMachine)"
Proposed_unified_mappingFast_route_plan -> Proposed_unified_mappingFamiliesMachine_family: "block SYNCHRONOUS_MACHINE: properties, query"
Proposed_unified_mappingFamiliesMachine_family -> Proposed_unified_mappingFast_route_plan: "describe: completes the block"
Proposed_diffstackingCgmes_diff_import -> Powsybl_coreCgmesConversion_update: "synthetic SSH, scoped update"
Powsybl_coreCgmesConversion_update -> Powsybl_coreCgmesElement_conversions: "synchronousMachinesForUpdate row"
Powsybl_coreCgmesElement_conversions -> Powsybl_coreIidmNetwork: "update(): targetP = −p = 120"
`;case`iidm_model`:return`direction: down

Powsybl_coreIidmCommon_types: {
  label: "Common IIDM contracts"

  Identifiable: {
    label: "Identifiable"
  }
  Connectable: {
    label: "Connectable"
  }
  Terminal: {
    label: "Terminal"
  }
}
Powsybl_coreIidmVariants: {
  label: "Network lifecycle"

  Network_event_recorder: {
    label: "NetworkEventRecorder"
  }
  Network_factory: {
    label: "NetworkFactory"
  }
  Variant_manager: {
    label: "VariantManager"
  }
  Network_listener: {
    label: "NetworkListener"
  }
}
Powsybl_coreIidmTopology: {
  label: "Topology and containment"

  Area: {
    label: "Area and AreaBoundary"
  }
  Substation: {
    label: "Substation"
  }
  Voltage_level: {
    label: "VoltageLevel"
  }
  Bus: {
    label: "Bus"
  }
  Busbar_section: {
    label: "BusbarSection"
  }
  Switch: {
    label: "Switch"
  }
  Topology_views: {
    label: "VoltageLevel topology views"
  }
}
Powsybl_coreIidmInjections: {
  label: "Injections"

  Generator: {
    label: "Generator"
  }
  Load: {
    label: "Load"
  }
  Battery: {
    label: "Battery"
  }
  Shunt_compensator: {
    label: "ShuntCompensator"
  }
  Static_var_compensator: {
    label: "StaticVarCompensator"
  }
  Ground: {
    label: "Ground"
  }
}
Powsybl_coreIidmBranches: {
  label: "AC branches"

  Branch: {
    label: "Branch"
  }
  Ac_line: {
    label: "Line"
  }
  Tie_line: {
    label: "TieLine"
  }
}
Powsybl_coreIidmDc_grid: {
  label: "DC grid equipment"

  Dc_node: {
    label: "DcNode"
  }
  Dc_ground: {
    label: "DcGround"
  }
  Dc_bus: {
    label: "DcBus"
  }
  Dc_line: {
    label: "DcLine"
  }
  Dc_switch: {
    label: "DcSwitch"
  }
  Dc_terminal: {
    label: "DcTerminal"
  }
  Dc_connectivity: {
    label: "DC connectivity and mutations"
  }
}
Powsybl_coreIidmLimits_and_control: {
  label: "Limits and automation"

  Operational_limits: {
    label: "OperationalLimits and LoadingLimits"
  }
  Reactive_limits: {
    label: "ReactiveLimits"
  }
  Automation_system: {
    label: "AutomationSystem and OverloadManagementSystem"
  }
}
Powsybl_coreIidmExtensions: {
  label: "IIDM extensions"

  Extension_contract: {
    label: "Extension and Extendable"
  }
  Slack_terminal: {
    label: "SlackTerminal"
  }
  Reference_terminals: {
    label: "ReferenceTerminals"
  }
  Cgmes_extensions: {
    label: "CGMES extensions"
  }
  Transformer_estimation_flags: {
    label: "Transformer estimation flags"
  }
  Measurements: {
    label: "Measurements and discrete measurements extensions"
  }
  Observability: {
    label: "Observability extensions"
  }
}
Powsybl_coreIidmIo: {
  label: "IIDM I/O and format providers"

  Exchange_formats: {
    label: "Supported exchange formats"

    Cgmes: {
      label: "CGMES"
    }
    Ucte: {
      label: "UCTE"
    }
    Matpower: {
      label: "MATPOWER"
    }
    Psse: {
      label: "PSS/E"
    }
    Ieee_cdf: {
      label: "IEEE CDF"
    }
    Powerfactory: {
      label: "PowerFactory"
    }
    Xiidm: {
      label: "XIIDM XML"
    }
    Jiidm: {
      label: "JIIDM JSON"
    }
    Biidm: {
      label: "BIIDM binary"
    }
    Ampl: {
      label: "AMPL"
    }
  }
  Import_providers: {
    label: "Importer implementations"

    Cgmes_importer: {
      label: "CgmesImport"
    }
    Ucte_importer: {
      label: "UcteImporter"
    }
    Matpower_importer: {
      label: "MatpowerImporter"
    }
    Psse_importer: {
      label: "PsseImporter"
    }
    Ieee_cdf_importer: {
      label: "IeeeCdfImporter"
    }
    Powerfactory_importer: {
      label: "PowerFactoryImporter"
    }
    Xiidm_importer: {
      label: "XMLImporter"
    }
    Jiidm_importer: {
      label: "JsonImporter"
    }
    Biidm_importer: {
      label: "BinaryImporter"
    }
  }
  Export_providers: {
    label: "Exporter implementations"

    Cgmes_exporter: {
      label: "CgmesExport"
    }
    Ucte_exporter: {
      label: "UCTE export adapter"
    }
    Matpower_exporter: {
      label: "MATPOWER export adapter"
    }
    Psse_exporter: {
      label: "PSS/E export adapter"
    }
    Xiidm_exporter: {
      label: "XIIDM XML export adapter"
    }
    Jiidm_exporter: {
      label: "JIIDM JSON export adapter"
    }
    Biidm_exporter: {
      label: "BIIDM binary export adapter"
    }
    Ampl_exporter: {
      label: "AMPL export adapter"
    }
  }
  Network_read_write: {
    label: "Network.read / Network.write"
  }
  Provider_discovery: {
    label: "Importers/Exporters ServiceLoader"
  }
  Importer_spi: {
    label: "Importer and Importers"
  }
  Exporter_spi: {
    label: "Exporter and Exporters"
  }
}
Powsybl_coreIidmNetwork: {
  label: "Network"
}
Powsybl_coreIidmTransformers: {
  label: "Transformers and tap changers"

  Two_windings_transformer: {
    label: "TwoWindingsTransformer"
  }
  Three_windings_transformer: {
    label: "ThreeWindingsTransformer"
  }
  Ratio_tap_changer: {
    label: "RatioTapChanger"
  }
  Phase_tap_changer: {
    label: "PhaseTapChanger"
  }
}
Powsybl_coreIidmHvdc: {
  label: "HVDC equipment"

  Hvdc_line: {
    label: "HvdcLine"
  }
  Ac_dc_converters: {
    label: "IIDM AC/DC converters"
  }
  Vsc_converter_station: {
    label: "VscConverterStation"
  }
  Lcc_converter_station: {
    label: "LccConverterStation"
  }
}

Powsybl_coreIidmVariants.Network_factory -> Powsybl_coreIidmNetwork: "creates"
Powsybl_coreIidmVariants.Variant_manager -> Powsybl_coreIidmNetwork: "selects a working variant on"
Powsybl_coreIidmVariants.Network_listener -> Powsybl_coreIidmNetwork: "observes changes on"
Powsybl_coreIidmTopology.Substation -> Powsybl_coreIidmTopology.Voltage_level: "contains"
Powsybl_coreIidmTopology.Voltage_level -> Powsybl_coreIidmTopology.Bus: "contains bus topology"
Powsybl_coreIidmTopology.Voltage_level -> Powsybl_coreIidmTopology.Busbar_section: "contains node/breaker equipment"
Powsybl_coreIidmTopology.Voltage_level -> Powsybl_coreIidmTopology.Switch: "contains switching equipment"
Powsybl_coreIidmTopology.Voltage_level -> Powsybl_coreIidmTopology.Topology_views: "exposes through"
Powsybl_coreIidmTransformers.Two_windings_transformer -> Powsybl_coreIidmTransformers.Ratio_tap_changer: "may own"
Powsybl_coreIidmTransformers.Two_windings_transformer -> Powsybl_coreIidmTransformers.Phase_tap_changer: "may own"
Powsybl_coreIidmTransformers.Three_windings_transformer -> Powsybl_coreIidmTransformers.Ratio_tap_changer: "may own per leg"
Powsybl_coreIidmTransformers.Three_windings_transformer -> Powsybl_coreIidmTransformers.Phase_tap_changer: "may own per leg"
Powsybl_coreIidmHvdc.Hvdc_line -> Powsybl_coreIidmHvdc.Vsc_converter_station: "connects through"
Powsybl_coreIidmHvdc.Hvdc_line -> Powsybl_coreIidmHvdc.Lcc_converter_station: "connects through"
Powsybl_coreIidmDc_grid.Dc_terminal -> Powsybl_coreIidmHvdc.Ac_dc_converters: "connects DC topology through"
Powsybl_coreIidmDc_grid.Dc_connectivity -> Powsybl_coreIidmNetwork: "changes the active topology of"
Powsybl_coreIidmExtensions.Measurements -> Powsybl_coreIidmNetwork: "attach measurement data to"
Powsybl_coreIidmExtensions.Observability -> Powsybl_coreIidmNetwork: "annotate equipment and topology on"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Network_read_write: "provides facade methods for"
Powsybl_coreIidmIo.Network_read_write -> Powsybl_coreIidmIo.Importer_spi: "selects input provider"
Powsybl_coreIidmIo.Network_read_write -> Powsybl_coreIidmIo.Exporter_spi: "selects output provider"
Powsybl_coreIidmIo.Provider_discovery -> Powsybl_coreIidmIo.Importer_spi: "discovers implementations for"
Powsybl_coreIidmIo.Provider_discovery -> Powsybl_coreIidmIo.Exporter_spi: "discovers implementations for"
Powsybl_coreIidmIo.Exchange_formats.Cgmes -> Powsybl_coreIidmIo.Import_providers.Cgmes_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Ucte -> Powsybl_coreIidmIo.Import_providers.Ucte_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Matpower -> Powsybl_coreIidmIo.Import_providers.Matpower_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Psse -> Powsybl_coreIidmIo.Import_providers.Psse_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Ieee_cdf -> Powsybl_coreIidmIo.Import_providers.Ieee_cdf_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Powerfactory -> Powsybl_coreIidmIo.Import_providers.Powerfactory_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Xiidm -> Powsybl_coreIidmIo.Import_providers.Xiidm_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Jiidm -> Powsybl_coreIidmIo.Import_providers.Jiidm_importer: "loads"
Powsybl_coreIidmIo.Exchange_formats.Biidm -> Powsybl_coreIidmIo.Import_providers.Biidm_importer: "loads"
Powsybl_coreIidmIo.Import_providers.Cgmes_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Ucte_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Matpower_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Psse_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Ieee_cdf_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Powerfactory_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Xiidm_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Jiidm_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmIo.Import_providers.Biidm_importer -> Powsybl_coreIidmNetwork: "creates or updates"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Cgmes_exporter: "serializes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Ucte_exporter: "serializes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Matpower_exporter: "serializes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Psse_exporter: "serializes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Xiidm_exporter: "serializes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Jiidm_exporter: "serializes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Biidm_exporter: "serializes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmIo.Export_providers.Ampl_exporter: "serializes"
Powsybl_coreIidmIo.Export_providers.Cgmes_exporter -> Powsybl_coreIidmIo.Exchange_formats.Cgmes: "writes"
Powsybl_coreIidmIo.Export_providers.Ucte_exporter -> Powsybl_coreIidmIo.Exchange_formats.Ucte: "writes"
Powsybl_coreIidmIo.Export_providers.Matpower_exporter -> Powsybl_coreIidmIo.Exchange_formats.Matpower: "writes"
Powsybl_coreIidmIo.Export_providers.Psse_exporter -> Powsybl_coreIidmIo.Exchange_formats.Psse: "writes"
Powsybl_coreIidmIo.Export_providers.Xiidm_exporter -> Powsybl_coreIidmIo.Exchange_formats.Xiidm: "writes"
Powsybl_coreIidmIo.Export_providers.Jiidm_exporter -> Powsybl_coreIidmIo.Exchange_formats.Jiidm: "writes"
Powsybl_coreIidmIo.Export_providers.Biidm_exporter -> Powsybl_coreIidmIo.Exchange_formats.Biidm: "writes"
Powsybl_coreIidmIo.Export_providers.Ampl_exporter -> Powsybl_coreIidmIo.Exchange_formats.Ampl: "writes"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmCommon_types: "is composed of identifiable and connectable objects"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmTopology: "owns electrical topology"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmInjections: "owns injections"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmBranches: "owns AC branches"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmTransformers: "owns transformers and tap changers"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmHvdc: "owns DC equipment"
Powsybl_coreIidmNetwork -> Powsybl_coreIidmLimits_and_control: "owns equipment with limits and automation"
Powsybl_coreIidmExtensions.Transformer_estimation_flags -> Powsybl_coreIidmTransformers: "annotate equipment in"
`;case`loadflow_interaction`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Loadflow_api: {
    label: "Load Flow API"
  }
  Iidm: {
    label: "IIDM API and extensions"

    Variants: {
      label: "Network lifecycle"
    }
    Extensions: {
      label: "IIDM extensions"
    }
    Network: {
      label: "Network"
    }
  }
  Commons: {
    label: "Commons services"
  }
  Math: {
    label: "Math API"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Open_loadflow_provider: {
    label: "OpenLoadFlowProvider"
  }
  Network_cache: {
    label: "NetworkCache"
  }
  Ac_dc_loadflow_engines: {
    label: "AC/DC load-flow engines"
  }
  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"
  }
  State_and_result_mapping: {
    label: "IIDM state and core-result mapping"
  }
  Lf_network: {
    label: "LfNetwork"
  }
}

Powsybl_core.Loadflow_api -> Powsybl_core.Iidm.Network: "accepts Network and working variant"
Powsybl_core.Iidm.Variants -> Powsybl_core.Iidm.Network: "[...]"
Powsybl_core.Iidm.Extensions -> Powsybl_core.Iidm.Network: "enriches state and results on"
Powsybl_core.Loadflow_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Loadflow_api -> Powsybl_core.Math: "supplies matrix capability to providers"
Powsybl_core.Loadflow_api -> Powsybl_open_loadflow.Open_loadflow_provider: "discovers and runs"
Powsybl_open_loadflow.Open_loadflow_provider -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "runs AC or DC calculation"
Powsybl_core.Iidm.Network -> Powsybl_open_loadflow.Lf_network_adapter: "is adapted by"
Powsybl_open_loadflow.Open_loadflow_provider -> Powsybl_open_loadflow.Lf_network_adapter: "loads the computation network"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.Lf_network_adapter: "configures"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.Lf_network: "runs AC or DC calculation on"
Powsybl_open_loadflow.Lf_network_adapter -> Powsybl_open_loadflow.Lf_network: "builds and configures"
Powsybl_open_loadflow.Lf_network -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "provides loaded network to"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.State_and_result_mapping: "returns results for write-back"
Powsybl_open_loadflow.Network_cache -> Powsybl_open_loadflow.Lf_network: "reuses and invalidates"
Powsybl_open_loadflow.Network_cache -> Powsybl_open_loadflow.State_and_result_mapping: "writes completed AC state through"
`;case`sensitivity_interaction`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Sensitivity_api: {
    label: "Sensitivity Analysis API"
  }
  Contingency_api: {
    label: "Contingency API"
  }
  Iidm: {
    label: "IIDM API and extensions"

    Variants: {
      label: "Network lifecycle"
    }
    Network: {
      label: "Network"
    }
  }
  Commons: {
    label: "Commons services"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Open_sensitivity_provider: {
    label: "OpenSensitivityAnalysisProvider"
  }
  Open_loadflow_provider: {
    label: "OpenLoadFlowProvider"
  }
  Sensitivity_engines: {
    label: "AC/DC sensitivity engines"
  }
  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"
  }
  Lf_network: {
    label: "LfNetwork"
  }
}

Powsybl_core.Sensitivity_api -> Powsybl_core.Contingency_api: "accepts contingency and action inputs"
Powsybl_core.Sensitivity_api -> Powsybl_core.Iidm.Network: "accepts Network and working variant"
Powsybl_core.Iidm.Variants -> Powsybl_core.Iidm.Network: "[...]"
Powsybl_core.Sensitivity_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Sensitivity_api -> Powsybl_open_loadflow.Open_sensitivity_provider: "discovers and runs"
Powsybl_open_loadflow.Open_sensitivity_provider -> Powsybl_open_loadflow.Open_loadflow_provider: "uses the configured base-case load-flow provider"
Powsybl_open_loadflow.Open_sensitivity_provider -> Powsybl_open_loadflow.Sensitivity_engines: "runs sensitivity calculation"
Powsybl_core.Iidm.Network -> Powsybl_open_loadflow.Lf_network_adapter: "is adapted by"
Powsybl_open_loadflow.Open_loadflow_provider -> Powsybl_open_loadflow.Lf_network_adapter: "loads the computation network"
Powsybl_open_loadflow.Sensitivity_engines -> Powsybl_open_loadflow.Lf_network_adapter: "loads base-case topology"
Powsybl_open_loadflow.Sensitivity_engines -> Powsybl_open_loadflow.Lf_network: "computes derivatives on"
Powsybl_open_loadflow.Lf_network_adapter -> Powsybl_open_loadflow.Lf_network: "builds and configures"
`;case`contingency_analysis_interaction`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Security_analysis_api: {
    label: "Security Analysis API"
  }
  Loadflow_api: {
    label: "Load Flow API"
  }
  Contingency_api: {
    label: "Contingency API"
  }
  Iidm: {
    label: "IIDM API and extensions"

    Network: {
      label: "Network"
    }
    Topology: {
      label: "Topology and containment"
    }
  }
  Commons: {
    label: "Commons services"
  }
}
Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Open_security_provider: {
    label: "OpenSecurityAnalysisProvider"
  }
  Security_analysis_engines: {
    label: "Security analysis engines"
  }
  Contingency_propagation: {
    label: "Contingency propagation"
  }
  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"
  }
  State_and_result_mapping: {
    label: "IIDM state and core-result mapping"
  }
  Lf_network: {
    label: "LfNetwork"
  }
}

Powsybl_core.Security_analysis_api -> Powsybl_core.Loadflow_api: "uses load-flow parameters"
Powsybl_core.Security_analysis_api -> Powsybl_core.Contingency_api: "obtains contingencies"
Powsybl_core.Security_analysis_api -> Powsybl_core.Iidm.Network: "accepts Network and working variant"
Powsybl_core.Loadflow_api -> Powsybl_core.Iidm.Network: "accepts Network and working variant"
Powsybl_core.Iidm.Network -> Powsybl_core.Iidm.Topology: "owns electrical topology"
Powsybl_core.Security_analysis_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Loadflow_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Security_analysis_api -> Powsybl_open_loadflow.Open_security_provider: "discovers and runs"
Powsybl_open_loadflow.Open_security_provider -> Powsybl_open_loadflow.Security_analysis_engines: "runs pre/post-contingency simulations"
Powsybl_core.Contingency_api -> Powsybl_open_loadflow.Contingency_propagation: "is propagated by"
Powsybl_open_loadflow.Security_analysis_engines -> Powsybl_open_loadflow.Contingency_propagation: "converts and applies outages"
Powsybl_core.Iidm.Network -> Powsybl_open_loadflow.Lf_network_adapter: "is adapted by"
Powsybl_open_loadflow.Security_analysis_engines -> Powsybl_open_loadflow.Lf_network_adapter: "creates topology-specific networks"
Powsybl_open_loadflow.Contingency_propagation -> Powsybl_open_loadflow.Lf_network: "produces LfContingency operations for"
Powsybl_open_loadflow.Lf_network_adapter -> Powsybl_open_loadflow.Lf_network: "builds and configures"
Powsybl_open_loadflow.Security_analysis_engines -> Powsybl_open_loadflow.State_and_result_mapping: "maps security results"
Powsybl_open_loadflow.State_and_result_mapping -> Powsybl_core.Security_analysis_api: "returns results through"
`;case`core_repository_structure`:return`direction: down

Powsybl_core: {
  label: "powsybl-core"

  Sensitivity_api: {
    label: "Sensitivity Analysis API"
  }
  Security_analysis_api: {
    label: "Security Analysis API"
  }
  Study_contracts: {
    label: "Study contracts"
  }
  Loadflow_api: {
    label: "Load Flow API"
  }
  Contingency_api: {
    label: "Contingency API"
  }
  Iidm: {
    label: "IIDM API and extensions"
  }
  Commons: {
    label: "Commons services"
  }
  Math: {
    label: "Math API"
  }
  Cgmes: {
    label: "CGMES conversion"
  }
}

Powsybl_core.Iidm -> Powsybl_core.Cgmes: "[...]"
Powsybl_core.Loadflow_api -> Powsybl_core.Iidm: "accepts Network and working variant"
Powsybl_core.Sensitivity_api -> Powsybl_core.Iidm: "accepts Network and working variant"
Powsybl_core.Security_analysis_api -> Powsybl_core.Iidm: "accepts Network and working variant"
Powsybl_core.Cgmes -> Powsybl_core.Iidm: "[...]"
Powsybl_core.Sensitivity_api -> Powsybl_core.Study_contracts: "[...]"
Powsybl_core.Security_analysis_api -> Powsybl_core.Study_contracts: "[...]"
Powsybl_core.Loadflow_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Loadflow_api -> Powsybl_core.Math: "supplies matrix capability to providers"
Powsybl_core.Security_analysis_api -> Powsybl_core.Loadflow_api: "uses load-flow parameters"
Powsybl_core.Sensitivity_api -> Powsybl_core.Contingency_api: "accepts contingency and action inputs"
Powsybl_core.Sensitivity_api -> Powsybl_core.Commons: "discovers provider and reports execution"
Powsybl_core.Security_analysis_api -> Powsybl_core.Contingency_api: "obtains contingencies"
Powsybl_core.Security_analysis_api -> Powsybl_core.Commons: "discovers provider and reports execution"
`;case`fast_restart_and_network_cache`:return`direction: right

Powsybl_open_loadflowNetwork_cache: {
  label: "NetworkCache"

  Iidm_change_events: {
    label: "IIDM NetworkListener changes"
  }
  Change_classifier: {
    label: "Cache update classification"
  }
  Network_cache_entry: {
    label: "NetworkCache.Entry"
  }
  Ac_fast_restart: {
    label: "AcLoadFlowFromCache"
  }
}
Powsybl_open_loadflowState_and_result_mapping: {
  label: "IIDM state and core-result mapping"
}

Powsybl_open_loadflowNetwork_cache.Iidm_change_events -> Powsybl_open_loadflowNetwork_cache.Network_cache_entry: "notifies"
Powsybl_open_loadflowNetwork_cache.Iidm_change_events -> Powsybl_open_loadflowNetwork_cache.Change_classifier: "classifies changes through"
Powsybl_open_loadflowNetwork_cache.Network_cache_entry -> Powsybl_open_loadflowNetwork_cache.Ac_fast_restart: "holds the AcLoadFlowContext reused by"
Powsybl_open_loadflowNetwork_cache.Change_classifier -> Powsybl_open_loadflowNetwork_cache.Network_cache_entry: "marks the cached context for update or invalidates"
Powsybl_open_loadflowNetwork_cache.Ac_fast_restart -> Powsybl_open_loadflowState_and_result_mapping: "writes completed AC state through"
`;case`solver_and_outer_loop_pipeline`:return`direction: right

Powsybl_open_loadflowAc_dc_loadflow_engines: {
  label: "AC/DC load-flow engines"

  Load_flow_request: {
    label: "Load-flow run and OpenLoadFlowParameters"
  }
  Ac_load_flow_engine: {
    label: "AcloadFlowEngine"
  }
  Ac_solver_factory: {
    label: "AcSolverFactory"
  }
  Newton_raphson: {
    label: "NewtonRaphson"
  }
  Newton_krylov: {
    label: "NewtonKrylov"
  }
  Fast_decoupled: {
    label: "FastDecoupled"
  }
  Outer_loop_chain: {
    label: "AC outer-loop chain"
  }
}
Powsybl_open_loadflowLf_network_adapter: {
  label: "IIDM to LfNetwork adapter"

  Network_loader: {
    label: "Networks and LfNetworkLoader"
  }
}
Powsybl_open_loadflowLf_network: {
  label: "LfNetwork"
}
Powsybl_open_loadflowEquation_toolkit: {
  label: "Equation builder toolkits"

  Ac_equation_builder: {
    label: "AC equation builders"
  }
  Equation_system: {
    label: "EquationSystem and Jacobian infrastructure"
  }
}
Powsybl_open_loadflowState_and_result_mapping: {
  label: "IIDM state and core-result mapping"
}

Powsybl_open_loadflowAc_dc_loadflow_engines.Load_flow_request -> Powsybl_open_loadflowLf_network_adapter.Network_loader: "configures"
Powsybl_open_loadflowLf_network_adapter.Network_loader -> Powsybl_open_loadflowLf_network: "builds and configures"
Powsybl_open_loadflowAc_dc_loadflow_engines.Load_flow_request -> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine: "configures"
Powsybl_open_loadflowLf_network -> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine: "provides loaded network to"
Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine -> Powsybl_open_loadflowEquation_toolkit.Ac_equation_builder: "creates and updates AC equations through"
Powsybl_open_loadflowEquation_toolkit.Ac_equation_builder -> Powsybl_open_loadflowEquation_toolkit.Equation_system: "constructs and updates"
Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine -> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory: "selects a solver through"
Powsybl_open_loadflowEquation_toolkit.Equation_system -> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_raphson: "supplies equations to"
Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory -> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_raphson: "creates when selected"
Powsybl_open_loadflowEquation_toolkit.Equation_system -> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_krylov: "supplies equations to"
Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory -> Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_krylov: "creates when selected"
Powsybl_open_loadflowEquation_toolkit.Equation_system -> Powsybl_open_loadflowAc_dc_loadflow_engines.Fast_decoupled: "supplies equations to"
Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_solver_factory -> Powsybl_open_loadflowAc_dc_loadflow_engines.Fast_decoupled: "creates when selected"
Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_raphson -> Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain: "returns state to"
Powsybl_open_loadflowAc_dc_loadflow_engines.Newton_krylov -> Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain: "returns state to"
Powsybl_open_loadflowAc_dc_loadflow_engines.Fast_decoupled -> Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain: "returns state to"
Powsybl_open_loadflowAc_dc_loadflow_engines.Outer_loop_chain -> Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine: "updates controls and requests another pass from"
Powsybl_open_loadflowAc_dc_loadflow_engines.Ac_load_flow_engine -> Powsybl_open_loadflowState_and_result_mapping: "writes final state through"
`;case`open_loadflow_components`:return`direction: down

Powsybl_open_loadflow: {
  label: "powsybl-open-loadflow"

  Coupled_ac_dc_lf_network: {
    label: "Coupled LfNetwork"
  }
  Network_cache: {
    label: "NetworkCache"
  }
  Open_security_provider: {
    label: "OpenSecurityAnalysisProvider"
  }
  Open_sensitivity_provider: {
    label: "OpenSensitivityAnalysisProvider"
  }
  Security_analysis_engines: {
    label: "Security analysis engines"
  }
  Sensitivity_engines: {
    label: "AC/DC sensitivity engines"
  }
  Open_loadflow_provider: {
    label: "OpenLoadFlowProvider"
  }
  Contingency_propagation: {
    label: "Contingency propagation"
  }
  Ac_dc_loadflow_engines: {
    label: "AC/DC load-flow engines"
  }
  Study_execution: {
    label: "Study execution"
  }
  Lf_network_adapter: {
    label: "IIDM to LfNetwork adapter"
  }
  Ac_dc_result_mapping: {
    label: "IIDM state and Core result mapping"
  }
  State_and_result_mapping: {
    label: "IIDM state and core-result mapping"
  }
  Lf_network: {
    label: "LfNetwork"
  }
  Equation_toolkit: {
    label: "Equation builder toolkits"
  }
}

Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.Lf_network_adapter: "configures"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.Ac_dc_result_mapping: "produces converged state for"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.State_and_result_mapping: "returns results for write-back"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.Equation_toolkit: "builds AC and DC equations with"
Powsybl_open_loadflow.Ac_dc_loadflow_engines -> Powsybl_open_loadflow.Lf_network: "runs AC or DC calculation on"
Powsybl_open_loadflow.Coupled_ac_dc_lf_network -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "supplies coupled equations to"
Powsybl_open_loadflow.Equation_toolkit -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "supplies equations to"
Powsybl_open_loadflow.Lf_network -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "provides loaded network to"
Powsybl_open_loadflow.Open_loadflow_provider -> Powsybl_open_loadflow.Ac_dc_loadflow_engines: "runs AC or DC calculation"
Powsybl_open_loadflow.Lf_network_adapter -> Powsybl_open_loadflow.Coupled_ac_dc_lf_network: "builds"
Powsybl_open_loadflow.Lf_network_adapter -> Powsybl_open_loadflow.Lf_network: "builds and configures"
Powsybl_open_loadflow.Security_analysis_engines -> Powsybl_open_loadflow.Lf_network_adapter: "creates topology-specific networks"
Powsybl_open_loadflow.Sensitivity_engines -> Powsybl_open_loadflow.Lf_network_adapter: "loads base-case topology"
Powsybl_open_loadflow.Open_loadflow_provider -> Powsybl_open_loadflow.Lf_network_adapter: "loads the computation network"
Powsybl_open_loadflow.Study_execution -> Powsybl_open_loadflow.State_and_result_mapping: "adds violations to"
Powsybl_open_loadflow.Contingency_propagation -> Powsybl_open_loadflow.Study_execution: "applies outages for"
Powsybl_open_loadflow.Network_cache -> Powsybl_open_loadflow.State_and_result_mapping: "writes completed AC state through"
Powsybl_open_loadflow.Security_analysis_engines -> Powsybl_open_loadflow.State_and_result_mapping: "maps security results"
Powsybl_open_loadflow.Network_cache -> Powsybl_open_loadflow.Lf_network: "reuses and invalidates"
Powsybl_open_loadflow.Security_analysis_engines -> Powsybl_open_loadflow.Contingency_propagation: "converts and applies outages"
Powsybl_open_loadflow.Open_security_provider -> Powsybl_open_loadflow.Security_analysis_engines: "runs pre/post-contingency simulations"
Powsybl_open_loadflow.Sensitivity_engines -> Powsybl_open_loadflow.Equation_toolkit: "reuses factorized Jacobians from"
Powsybl_open_loadflow.Sensitivity_engines -> Powsybl_open_loadflow.Lf_network: "computes derivatives on"
Powsybl_open_loadflow.Open_sensitivity_provider -> Powsybl_open_loadflow.Sensitivity_engines: "runs sensitivity calculation"
Powsybl_open_loadflow.Lf_network -> Powsybl_open_loadflow.Equation_toolkit: "supplies variables and network state to"
Powsybl_open_loadflow.Contingency_propagation -> Powsybl_open_loadflow.Lf_network: "produces LfContingency operations for"
Powsybl_open_loadflow.Open_sensitivity_provider -> Powsybl_open_loadflow.Open_loadflow_provider: "uses the configured base-case load-flow provider"
`;case`capability_and_provider_bundle`:return`direction: down

Pypowsybl_capability_bundle: {
  label: "pypowsybl: capability families"

  Network_and_steady_state: {
    label: "Network and steady-state analysis"
  }
  Optimization_and_reac: {
    label: "Optimization and remedial action"
  }
  Operational_studies: {
    label: "Operational studies"
  }
  Dynamic_and_visualization: {
    label: "Dynamic simulation and visualization"
  }
}
Pypowsybl: {
  label: "pypowsybl"

  Native_image_bridge: {
    label: "GraalVM native-image bridge"
  }
}
Pypowsybl_bundled_services: {
  label: "pypowsybl: bundled service families"

  Core_iidm_and_formats: {
    label: "Core IIDM, formats, and CGMES"
  }
  Open_loadflow_services: {
    label: "Open Load Flow providers"
  }
  Optimization_and_reac_services: {
    label: "Optimization and Open REAC"
  }
  Operational_study_services: {
    label: "RAO, CRAC, short circuit, and flow decomposition"
  }
  Dynamic_and_diagram_services: {
    label: "Dynawo, Dynaflow, SLD, and NAD"
  }
}

Pypowsybl_capability_bundle.Network_and_steady_state -> Pypowsybl_bundled_services.Core_iidm_and_formats: "maps DataFrames and handles to"
Pypowsybl_capability_bundle.Network_and_steady_state -> Pypowsybl_bundled_services.Open_loadflow_services: "selects through Core APIs"
Pypowsybl_capability_bundle.Optimization_and_reac -> Pypowsybl_bundled_services.Optimization_and_reac_services: "maps to"
Pypowsybl_capability_bundle.Operational_studies -> Pypowsybl_bundled_services.Operational_study_services: "maps to"
Pypowsybl_capability_bundle.Dynamic_and_visualization -> Pypowsybl_bundled_services.Dynamic_and_diagram_services: "maps to"
Pypowsybl.Native_image_bridge -> Pypowsybl_bundled_services.Core_iidm_and_formats: "loads"
Pypowsybl.Native_image_bridge -> Pypowsybl_bundled_services.Open_loadflow_services: "loads"
Pypowsybl.Native_image_bridge -> Pypowsybl_bundled_services.Optimization_and_reac_services: "loads"
Pypowsybl.Native_image_bridge -> Pypowsybl_bundled_services.Operational_study_services: "loads"
Pypowsybl.Native_image_bridge -> Pypowsybl_bundled_services.Dynamic_and_diagram_services: "loads"
`;case`pypowsybl_binding_layers`:return`direction: down

Pypowsybl: {
  label: "pypowsybl"

  Ac_dc_opf: {
    label: "AC/DC OPF prototype"
  }
  Python_study_parameters: {
    label: "Python study parameter facades"
  }
  Python_api: {
    label: "Python domain APIs"
  }
  Dc_dataframes: {
    label: "Network DC DataFrames and mutation APIs"
  }
  Python_network: {
    label: "pypowsybl.network.Network"
  }
  Dataframe_views: {
    label: "pandas DataFrame adapters"
  }
  Pybind_extension: {
    label: "_pypowsybl pybind11 extension"
  }
  Native_image_bridge: {
    label: "GraalVM native-image bridge"
  }
  Pandas_study_results: {
    label: "pandas study result adapters"
  }
  Java_bindings: {
    label: "Java C entry points"

    Network_c_functions: {
      label: "NetworkCFunctions"
    }
    Analysis_c_functions: {
      label: "LoadFlowCFunctions, SecurityAnalysisCFunctions, SensitivityAnalysisCFunctions"
    }
  }
  Dataframe_mappers: {
    label: "Java DataFrame mappers"
  }
  Measurement_and_observability_dataframes: {
    label: "Measurement and observability DataFrames"
  }
}

Pypowsybl.Ac_dc_opf -> Pypowsybl.Dc_dataframes: "reads inputs and writes solved values through"
Pypowsybl.Python_study_parameters -> Pypowsybl.Native_image_bridge: "marshals through"
Pypowsybl.Native_image_bridge -> Pypowsybl.Pandas_study_results: "returns result series through"
Pypowsybl.Pybind_extension -> Pypowsybl.Native_image_bridge: "calls native-image entry points through"
Pypowsybl.Python_api -> Pypowsybl.Python_network: "creates and passes Network handles"
Pypowsybl.Python_api -> Pypowsybl.Pybind_extension: "calls the extension module"
Pypowsybl.Python_api -> Pypowsybl.Dataframe_views: "accepts and returns pandas DataFrames"
Pypowsybl.Python_network -> Pypowsybl.Pybind_extension: "passes its opaque handle to"
Pypowsybl.Dataframe_views -> Pypowsybl.Pybind_extension: "marshals Dataframe and SeriesArray data through"
Pypowsybl.Dataframe_mappers -> Pypowsybl.Measurement_and_observability_dataframes: "registers providers for"
Pypowsybl.Native_image_bridge -> Pypowsybl.Java_bindings: "forwards calls across the isolate to"
Pypowsybl.Java_bindings -> Pypowsybl.Dataframe_mappers: "maps IIDM elements and result series through"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};