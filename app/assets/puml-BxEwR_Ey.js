var e=e=>{switch(e){case`index`:return`@startuml
title "Powsybl: APIs, Python bindings, and providers"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PypowsyblPython_api>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblJava_bindingsNetwork_c_functions>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblJava_bindingsAnalysis_c_functions>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblDataframe_mappers>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblPython_network>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblDataframe_views>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreSensitivity_api>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreSecurity_analysis_api>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PypowsyblNative_image_bridge>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreLoadflow_api>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreContingency_api>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreCommons>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowOpen_sensitivity_provider>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowOpen_security_provider>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowContingency_propagation>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowOpen_loadflow_provider>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "Java C entry points" <<PypowsyblJava_bindings>> as PypowsyblJava_bindings {
    skinparam RectangleBorderColor<<PypowsyblJava_bindings>> #0284c7
    skinparam RectangleFontColor<<PypowsyblJava_bindings>> #0284c7
    skinparam RectangleBorderStyle<<PypowsyblJava_bindings>> dashed

    rectangle "==NetworkCFunctions" <<PypowsyblJava_bindingsNetwork_c_functions>> as PypowsyblJava_bindingsNetwork_c_functions
    rectangle "==LoadFlowCFunctions, SecurityAnalysisCFunctions, SensitivityAnalysisCFunctions" <<PypowsyblJava_bindingsAnalysis_c_functions>> as PypowsyblJava_bindingsAnalysis_c_functions
  }
  rectangle "==Python domain APIs\\n\\nnetwork, loadflow, security, sensitivity, and other Python facades." <<PypowsyblPython_api>> as PypowsyblPython_api
  rectangle "==Java DataFrame mappers\\n\\nNetworkDataframes, DataframeMapper, adders, and modification mappers over IIDM." <<PypowsyblDataframe_mappers>> as PypowsyblDataframe_mappers
  rectangle "==pypowsybl.network.Network\\n\\nNetwork._handle retains the opaque Java object handle across native calls." <<PypowsyblPython_network>> as PypowsyblPython_network
  rectangle "==pandas DataFrame adapters\\n\\nConvert pandas DataFrames to native dataframes and SeriesArray results back to pandas." <<PypowsyblDataframe_views>> as PypowsyblDataframe_views
  rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
  rectangle "==GraalVM native-image bridge\\n\\nPowsyblCaller and GraalVmGuard cross the native-image isolate boundary." <<PypowsyblNative_image_bridge>> as PypowsyblNative_image_bridge
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Sensitivity Analysis API\\n\\nSensitivityAnalysis.Runner and the SensitivityAnalysisProvider SPI." <<Powsybl_coreSensitivity_api>> as Powsybl_coreSensitivity_api
  rectangle "==Security Analysis API\\n\\nSecurityAnalysis.Runner and the SecurityAnalysisProvider SPI." <<Powsybl_coreSecurity_analysis_api>> as Powsybl_coreSecurity_analysis_api
  rectangle "==Load Flow API\\n\\nLoadFlow.Runner and the LoadFlowProvider SPI." <<Powsybl_coreLoadflow_api>> as Powsybl_coreLoadflow_api
  rectangle "==Contingency API\\n\\nContingency, ContingenciesProvider, and contingency elements." <<Powsybl_coreContingency_api>> as Powsybl_coreContingency_api
  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
  }
  rectangle "==Commons services\\n\\nServiceLoader, ComputationManager, PlatformConfig, ReportNode, and Extension contracts." <<Powsybl_coreCommons>> as Powsybl_coreCommons
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==OpenSensitivityAnalysisProvider\\n\\nImplements SensitivityAnalysisProvider." <<Powsybl_open_loadflowOpen_sensitivity_provider>> as Powsybl_open_loadflowOpen_sensitivity_provider
  rectangle "==OpenSecurityAnalysisProvider\\n\\nImplements SecurityAnalysisProvider." <<Powsybl_open_loadflowOpen_security_provider>> as Powsybl_open_loadflowOpen_security_provider
  rectangle "==Contingency propagation\\n\\nPropagatedContingency, ContingencyTripping, and node/breaker traversal." <<Powsybl_open_loadflowContingency_propagation>> as Powsybl_open_loadflowContingency_propagation
  rectangle "==OpenLoadFlowProvider\\n\\nImplements LoadFlowProvider for AC and DC load flows." <<Powsybl_open_loadflowOpen_loadflow_provider>> as Powsybl_open_loadflowOpen_loadflow_provider
  rectangle "==IIDM to LfNetwork adapter\\n\\nNetworks, LfNetworkLoaderImpl, and equipment-specific Lf* adapters." <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter
}

PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblPython_network : <color:#8D8D8D>creates and passes Network handles
PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblDataframe_views : <color:#8D8D8D>accepts and returns pandas DataFrames
PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>calls the extension module
PypowsyblPython_network .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>passes its opaque handle to
PypowsyblDataframe_views .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>marshals Dataframe and SeriesArray data through
PypowsyblPybind_extension .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridge : <color:#8D8D8D>calls native-image entry points through
PypowsyblJava_bindingsNetwork_c_functions .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>binds Network handles
PypowsyblDataframe_mappers .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>maps IIDM elements through
PypowsyblJava_bindingsAnalysis_c_functions .[#8D8D8D,thickness=2].> Powsybl_coreLoadflow_api : <color:#8D8D8D>binds load-flow APIs
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>accepts Network and working variant
PypowsyblJava_bindingsAnalysis_c_functions .[#8D8D8D,thickness=2].> Powsybl_coreSensitivity_api : <color:#8D8D8D>binds sensitivity APIs
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridge : <color:#8D8D8D>returns through
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>accepts Network and working variant
PypowsyblJava_bindingsAnalysis_c_functions .[#8D8D8D,thickness=2].> Powsybl_coreSecurity_analysis_api : <color:#8D8D8D>binds security-analysis APIs
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridge : <color:#8D8D8D>returns through
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreLoadflow_api : <color:#8D8D8D>uses load-flow parameters
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreContingency_api : <color:#8D8D8D>accepts contingency and action inputs
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreContingency_api : <color:#8D8D8D>obtains contingencies
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>initializes Java services from
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_loadflow_provider : <color:#8D8D8D>discovers and runs
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_sensitivity_provider : <color:#8D8D8D>discovers and runs
Powsybl_open_loadflowOpen_sensitivity_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_loadflow_provider : <color:#8D8D8D>uses the configured base-case load-flow provider
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_security_provider : <color:#8D8D8D>discovers and runs
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>is adapted by
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>loads the computation network
Powsybl_coreContingency_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowContingency_propagation : <color:#8D8D8D>is propagated by
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> PypowsyblJava_bindings : <color:#8D8D8D>forwards calls across the isolate to
PypowsyblJava_bindings .[#8D8D8D,thickness=2].> PypowsyblDataframe_mappers : <color:#8D8D8D>maps IIDM elements and result series through
@enduml
`;case`cgmes_change_export`:return`@startuml
title "CGMES change export: partial SSH and difference models"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsCgmes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_event_recorder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersCgmes_importer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesCgmes_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingPartial_ssh_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingChange_translator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model_format>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
      skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

      rectangle "Supported exchange formats" <<Powsybl_coreIidmIoExchange_formats>> as Powsybl_coreIidmIoExchange_formats {
        skinparam RectangleBorderColor<<Powsybl_coreIidmIoExchange_formats>> #3b82f6
        skinparam RectangleFontColor<<Powsybl_coreIidmIoExchange_formats>> #3b82f6
        skinparam RectangleBorderStyle<<Powsybl_coreIidmIoExchange_formats>> dashed

        rectangle "==CGMES" <<Powsybl_coreIidmIoExchange_formatsCgmes>> as Powsybl_coreIidmIoExchange_formatsCgmes
      }
      rectangle "Importer implementations" <<Powsybl_coreIidmIoImport_providers>> as Powsybl_coreIidmIoImport_providers {
        skinparam RectangleBorderColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
        skinparam RectangleFontColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
        skinparam RectangleBorderStyle<<Powsybl_coreIidmIoImport_providers>> dashed

        rectangle "==CgmesImport" <<Powsybl_coreIidmIoImport_providersCgmes_importer>> as Powsybl_coreIidmIoImport_providersCgmes_importer
      }
    }
    rectangle "Network lifecycle" <<Powsybl_coreIidmVariants>> as Powsybl_coreIidmVariants {
      skinparam RectangleBorderColor<<Powsybl_coreIidmVariants>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmVariants>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmVariants>> dashed

      rectangle "==NetworkEventRecorder\\n\\nNetworkListener collecting the changes applied to a network as a replayable event log." <<Powsybl_coreIidmVariantsNetwork_event_recorder>> as Powsybl_coreIidmVariantsNetwork_event_recorder
    }
    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
  }
  rectangle "CGMES conversion" <<Powsybl_coreCgmes>> as Powsybl_coreCgmes {
    skinparam RectangleBorderColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreCgmes>> dashed

    rectangle "==Triple store (rdf4j)\\n\\nRDF store the CGMES import loads instance files into and queries through SPARQL." <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
    rectangle "==cgmes-model\\n\\nCGMES vocabulary, profiles and metadata models, with no dependency on IIDM." <<Powsybl_coreCgmesCgmes_model>> as Powsybl_coreCgmesCgmes_model
  }
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "==PartialSshExport\\n\\nWrites the objects affected by recorded changes as a partial SSH instance file." <<Proposed_diffstackingPartial_ssh_export>> as Proposed_diffstackingPartial_ssh_export
  rectangle "==CgmesDiffExport\\n\\nWrites the same recorded changes as IEC 61970-552 difference models, one per profile." <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
  rectangle "==CgmesChangeTranslator + IidmStateView\\n\\nMaps one recorded change to CGMES properties of the steady state hypothesis and of the equipment profile (operational limits, voltage level limits, branch impedances), against the current state or against the state the change log says preceded it." <<Proposed_diffstackingChange_translator>> as Proposed_diffstackingChange_translator
  rectangle "==DifferenceModelSet / CgmesStatement\\n\\nForward and reverse RDF statements per profile" <<Proposed_diffstackingDifference_model>> as Proposed_diffstackingDifference_model
  rectangle "==DifferenceSink / DifferenceModelWriter\\n\\nWhere the difference models of one change set are handed over to: a document per profile, or a triple store." <<Proposed_diffstackingDifference_sink>> as Proposed_diffstackingDifference_sink
  rectangle "==CGMES Difference Model\\n\\nIEC 61970-552 difference model document, one per CGMES profile." <<Proposed_diffstackingDifference_model_format>> as Proposed_diffstackingDifference_model_format
}

Powsybl_coreIidmIoExchange_formatsCgmes .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersCgmes_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>loads files into
Powsybl_coreCgmesCgmes_model .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>would extend: defines the profiles and metadata of
Powsybl_coreIidmVariantsNetwork_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstackingPartial_ssh_export : <color:#8D8D8D>would be consumed as-is: provides change log to
Proposed_diffstackingPartial_ssh_export .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsCgmes : <color:#8D8D8D>would consume as-is: writes partial SSH
Powsybl_coreIidmVariantsNetwork_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>would be consumed as-is: provides change log to
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>generates
Proposed_diffstackingPartial_ssh_export .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>map changes with
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>map changes with
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: reads current (and overlaid previous) state of
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>emits EQ statements for limits and impedances into
Proposed_diffstackingDifference_model .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_sink : <color:#8D8D8D>is pushed to
Proposed_diffstackingDifference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model_format : <color:#8D8D8D>writes one file per profile
@enduml
`;case`cgmes_diff_import`:return`@startuml
title "CGMES difference model import: the in-place fast route"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmIoExchange_formats>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersCgmes_importer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model_format>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_diff_applier>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model_parser>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingFast_route_capabilities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_object_dump>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDiff_update_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDirect_eq_applier>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingChange_translator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
      skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

      rectangle "==Supported exchange formats" <<Powsybl_coreIidmIoExchange_formats>> as Powsybl_coreIidmIoExchange_formats
      rectangle "Importer implementations" <<Powsybl_coreIidmIoImport_providers>> as Powsybl_coreIidmIoImport_providers {
        skinparam RectangleBorderColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
        skinparam RectangleFontColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
        skinparam RectangleBorderStyle<<Powsybl_coreIidmIoImport_providers>> dashed

        rectangle "==CgmesImport" <<Powsybl_coreIidmIoImport_providersCgmes_importer>> as Powsybl_coreIidmIoImport_providersCgmes_importer
      }
    }
    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
  }
  rectangle "CGMES conversion" <<Powsybl_coreCgmes>> as Powsybl_coreCgmes {
    skinparam RectangleBorderColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreCgmes>> dashed

    rectangle "==Conversion.update (SSH update workflow)\\n\\nThe ordinary CGMES update: SPARQL queries over the loaded instance files, then XxxConversion.update per equipment." <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
    rectangle "==Triple store (rdf4j)\\n\\nRDF store the CGMES import loads instance files into and queries through SPARQL." <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
  }
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "==CGMES Difference Model\\n\\nIEC 61970-552 difference model document, one per CGMES profile." <<Proposed_diffstackingDifference_model_format>> as Proposed_diffstackingDifference_model_format
  rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
  rectangle "==TripleStoreDiffApplier\\n\\nReplaces the property values a difference states inside one named graph, through SPARQL UPDATE only." <<Proposed_diffstackingTriple_store_diff_applier>> as Proposed_diffstackingTriple_store_diff_applier
  rectangle "==DifferenceModelParser\\n\\nStreaming reader of dm:DifferenceModel documents into statements, tolerant about every shape IEC 61970-552 leaves free." <<Proposed_diffstackingDifference_model_parser>> as Proposed_diffstackingDifference_model_parser
  rectangle "==FastRouteCapabilities + DiffSubjectResolver\\n\\nThe declarative table of what the update workflow can read, and the resolution of difference model subjects to network objects and CIM classes." <<Proposed_diffstackingFast_route_capabilities>> as Proposed_diffstackingFast_route_capabilities
  rectangle "==CgmesObjectDump\\n\\nWhat the change export would write about an object right now, used to complete consistency groups a minimal difference leaves out." <<Proposed_diffstackingCgmes_object_dump>> as Proposed_diffstackingCgmes_object_dump
  rectangle "==DiffUpdateStoreBuilder\\n\\nWrites the planned change as a synthetic partial SSH document into a fresh in-memory triple store." <<Proposed_diffstackingDiff_update_store>> as Proposed_diffstackingDiff_update_store
  rectangle "==DirectEqApplier + CgmesLimitIndex\\n\\nApplies EQ statements (impedances, voltage level limits) with IIDM setters; syncs CIM16 normal values" <<Proposed_diffstackingDirect_eq_applier>> as Proposed_diffstackingDirect_eq_applier
  rectangle "==CgmesChangeTranslator + IidmStateView\\n\\nMaps one recorded change to CGMES properties of the steady state hypothesis and of the equipment profile (operational limits, voltage level limits, branch impedances), against the current state or against the state the change log says preceded it." <<Proposed_diffstackingChange_translator>> as Proposed_diffstackingChange_translator
  rectangle "==DifferenceModelSet / CgmesStatement\\n\\nForward and reverse RDF statements per profile" <<Proposed_diffstackingDifference_model>> as Proposed_diffstackingDifference_model
}

Powsybl_coreIidmIoExchange_formats .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersCgmes_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>loads files into
Proposed_diffstackingDifference_model_format .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model_parser : <color:#8D8D8D>is read by
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model_parser : <color:#8D8D8D>would extend: detects difference model files with
Proposed_diffstackingDifference_model_parser .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>produces
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>would extend: delegates difference models to
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>applies a difference in place, into a variant
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingFast_route_capabilities : <color:#8D8D8D>decides route with
Proposed_diffstackingFast_route_capabilities .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: resolves subjects and types in
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_object_dump : <color:#8D8D8D>completes groups / checks reverse values with
Proposed_diffstackingCgmes_object_dump .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>reuses export mapping of
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: reads current (and overlaid previous) state of
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>emits EQ statements for limits and impedances into
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingDiff_update_store : <color:#8D8D8D>builds synthetic SSH update store
Proposed_diffstackingDiff_update_store .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>would consume as-is: writes into
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>Importer.update: updates with
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>would extend: runs, scoped to the named equipment
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>updates in place
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>queries
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingDirect_eq_applier : <color:#8D8D8D>applies EQ statements with
Proposed_diffstackingDirect_eq_applier .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: sets impedances and limits on
Proposed_diffstackingTriple_store_diff_applier .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>would consume as-is: replaces property values in
@enduml
`;case`cgmes_diff_import_fast_route`:return`@startuml
title "Applying a CGMES difference model in place, step by step"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmIoImport_providersCgmes_importer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model_parser>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingFast_route_capabilities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_object_dump>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingChange_translator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDiff_update_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDirect_eq_applier>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==CgmesImport" <<Powsybl_coreIidmIoImport_providersCgmes_importer>> as Powsybl_coreIidmIoImport_providersCgmes_importer
rectangle "==DifferenceModelParser\\n\\nStreaming reader of dm:DifferenceModel documents into statements, tolerant about every shape IEC 61970-552 leaves free." <<Proposed_diffstackingDifference_model_parser>> as Proposed_diffstackingDifference_model_parser
rectangle "==DifferenceModelSet / CgmesStatement\\n\\nForward and reverse RDF statements per profile" <<Proposed_diffstackingDifference_model>> as Proposed_diffstackingDifference_model
rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==FastRouteCapabilities + DiffSubjectResolver\\n\\nThe declarative table of what the update workflow can read, and the resolution of difference model subjects to network objects and CIM classes." <<Proposed_diffstackingFast_route_capabilities>> as Proposed_diffstackingFast_route_capabilities
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==CgmesObjectDump\\n\\nWhat the change export would write about an object right now, used to complete consistency groups a minimal difference leaves out." <<Proposed_diffstackingCgmes_object_dump>> as Proposed_diffstackingCgmes_object_dump
rectangle "==CgmesChangeTranslator + IidmStateView\\n\\nMaps one recorded change to CGMES properties of the steady state hypothesis and of the equipment profile (operational limits, voltage level limits, branch impedances), against the current state or against the state the change log says preceded it." <<Proposed_diffstackingChange_translator>> as Proposed_diffstackingChange_translator
rectangle "==DiffUpdateStoreBuilder\\n\\nWrites the planned change as a synthetic partial SSH document into a fresh in-memory triple store." <<Proposed_diffstackingDiff_update_store>> as Proposed_diffstackingDiff_update_store
rectangle "==Triple store (rdf4j)\\n\\nRDF store the CGMES import loads instance files into and queries through SPARQL." <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
rectangle "==Conversion.update (SSH update workflow)\\n\\nThe ordinary CGMES update: SPARQL queries over the loaded instance files, then XxxConversion.update per equipment." <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
rectangle "==DirectEqApplier + CgmesLimitIndex\\n\\nApplies EQ statements (impedances, voltage level limits) with IIDM setters; syncs CIM16 normal values" <<Proposed_diffstackingDirect_eq_applier>> as Proposed_diffstackingDirect_eq_applier

Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model_parser : <color:#8D8D8D>reads the first elements of every file of the data source
Proposed_diffstackingDifference_model_parser .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>parses the document into forward and reverse statements
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>hands over the difference models and the import parameters
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingFast_route_capabilities : <color:#8D8D8D>asks whether every property is one an update query reads
Proposed_diffstackingFast_route_capabilities .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>resolves every subject to an object and a CIM class
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_object_dump : <color:#8D8D8D>asks for the properties a touched consistency group is missing
Proposed_diffstackingCgmes_object_dump .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>probes the export mapping with a synthetic change
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>reads the current value
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingDiff_update_store : <color:#8D8D8D>hands over the completed, typed objects
Proposed_diffstackingDiff_update_store .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>loads a synthetic partial SSH document
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>runs the update, restricted to the equipment the difference names
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>runs the update queries
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>sets the new values and registers the difference as the model of its profile
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingDirect_eq_applier : <color:#8D8D8D>hands over the equipment statements no update query reads
Proposed_diffstackingDirect_eq_applier .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>sets the impedances and the voltage level limits, and syncs the CGMES 2.4.15 normal values
@enduml
`;case`cgmes_loading_split`:return`@startuml
title "CGMES loading split in two: files to a database, database to a network"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_database_config>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbCheckpoint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_updater>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_scope>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbModel_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_binding>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersCgmes_importer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_uploader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbTimesteps>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_triple_store_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_sparql>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseScenario_a>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseScenario_b>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_meta_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_checkpoint_copies>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_data_graphs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_diff_graphs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "cgmes-rdfdb" <<Proposed_diffstackingCgmes_rdfdb>> as Proposed_diffstackingCgmes_rdfdb {
    skinparam RectangleBorderColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
    skinparam RectangleFontColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
    skinparam RectangleBorderStyle<<Proposed_diffstackingCgmes_rdfdb>> dashed

    rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
    rectangle "==RdfDatabase\\n\\nImmutable description of a database: endpoint or the in-process memory backend, query mode, fetch and upload parallelism, gzip, cache. Says nothing about which data - that is the scenario, an argument of every call." <<Proposed_diffstackingCgmes_rdfdbRdf_database_config>> as Proposed_diffstackingCgmes_rdfdbRdf_database_config
    rectangle "==RdfDbDifferenceSink / RdfDbExport\\n\\nThe DifferenceSink of the database: a recorded change becomes two immutable named graphs and one metadata node, written by a single guarded INSERT ... WHERE that also carries the linear-chain, duplicate and base-exists rules. Advances the identity of the sender afterwards." <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
    rectangle "==Checkpoint\\n\\nFolds the differences of a snapshot into full graphs on the database: COPY per profile, the three replace operations per difference, a header rewrite, then pdb:full on the existing snapshot. No new root, so the chain stays connected." <<Proposed_diffstackingCgmes_rdfdbCheckpoint>> as Proposed_diffstackingCgmes_rdfdbCheckpoint
    rectangle "==RdfDbProvenance\\n\\nNetwork extension recording the database, the scenario, the graphs and the stored model per profile a network was built from or last updated to. Deliberately not serialised." <<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>> as Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
    rectangle "==DiffUpdatePlanner\\n\\nPure decision over catalogue rows: is the network already there, is it on the chain of the target and how far, is every difference on the way applicable in place. Answers NOOP, DIFF or FULL with the reasons." <<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>> as Proposed_diffstackingCgmes_rdfdbDiff_update_planner
    rectangle "==VariantUpdater + VariantBulkLoader\\n\\nCreate or move one variant, and load a whole day into many. Everything that can refuse runs before anything is created: the scenario check without a query, the one multi-side chain query, the stored pdb:variantSafe flags. A target that cannot be reached inside a variant is VARIANT_REFUSED with reasons and every variant untouched, never a rebuild of the network." <<Proposed_diffstackingCgmes_rdfdbVariant_updater>> as Proposed_diffstackingCgmes_rdfdbVariant_updater
    rectangle "==RdfDbConnection\\n\\nAn open connection: owns the SPARQL repository and the HTTP client, lists the scenarios of the database, uploads CGMES files into one, clears one." <<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>> as Proposed_diffstackingCgmes_rdfdbRdf_db_connection
    rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
    rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
    rectangle "==VariantScope\\n\\nMakes the network be one of its variants for the duration of an operation: the CgmesMetadataModels extension, the case date and the snapshot identity of that variant are swapped in, the working variant is selected, and the primary is put back afterwards. That is why the planner, the exporter and the Supersedes of a written difference are correct for a variant although none of them knows variants exist." <<Proposed_diffstackingCgmes_rdfdbVariant_scope>> as Proposed_diffstackingCgmes_rdfdbVariant_scope
    rectangle "==ModelCatalog (metadata graph per scenario)\\n\\nReads and writes the model nodes of one scenario: which profile, which named graphs, which model is superseded, how deep in the chain, whether every property is applicable in place. The index a client navigates instead of computing graph IRIs." <<Proposed_diffstackingCgmes_rdfdbModel_catalog>> as Proposed_diffstackingCgmes_rdfdbModel_catalog
    rectangle "==GraphFetcher + GraphCache\\n\\nParallel bulk transfer of the named graphs of a scenario into a local in-memory store: one GET per graph, N-Triples parsed while the response arrives, a single overlapped writer, optional reuse of parsed graphs." <<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>> as Proposed_diffstackingCgmes_rdfdbGraph_fetcher
    rectangle "==RdfDbDiffSource + StatementCodec\\n\\nFetches the forward and reverse graphs of a whole chain in one query and decodes the triples back into CgmesStatements, the exact inverse of what the sink encoded." <<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>> as Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
    rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
    rectangle "==VariantBinding\\n\\nWhat one IIDM variant of a network stands for: the snapshot address, its IRI, the stored model per profile, the case date of that moment and which variant it was cloned from. Kept on the provenance, in step with clone, overwrite and remove through a NetworkListener, so a binding never outlives its variant." <<Proposed_diffstackingCgmes_rdfdbVariant_binding>> as Proposed_diffstackingCgmes_rdfdbVariant_binding
    rectangle "==GraphUploader\\n\\nCopies the graphs of a locally parsed model into immutable graphs of the scenario, in parallel. Unreferenced until the guarded metadata write makes them a snapshot." <<Proposed_diffstackingCgmes_rdfdbGraph_uploader>> as Proposed_diffstackingCgmes_rdfdbGraph_uploader
    rectangle "==TripleDiffCalculator\\n\\nThe difference between two graphs of one profile, computed from the triples alone: that is what turns a daily CGMES export into a version, since nobody recorded those changes on a network. Excludes the model header, keys by (local subject, property), compares numeric literals by value so a re-export is not a change, and emits a type plus its properties for an added object." <<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>> as Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator
    rectangle "==Timesteps + SnapshotRef\\n\\nThe keys: a required scenario, a canonical UTC instant per timestep and a free version label. Accepts instants, offset date-times and HH:MM labels, which are resolved against the base day and offset of the addressed scenario." <<Proposed_diffstackingCgmes_rdfdbTimesteps>> as Proposed_diffstackingCgmes_rdfdbTimesteps
  }
  rectangle "==CgmesTripleStoreLoader\\n\\nCGMES files into any triple store, local or remote: the first half of an import, with nothing of IIDM in it." <<Proposed_diffstackingCgmes_triple_store_loader>> as Proposed_diffstackingCgmes_triple_store_loader
  rectangle "==TripleStoreNetworkLoader\\n\\nAny triple store holding CGMES data into an IIDM network: the second half of an import, with nothing of files in it. Works out the CIM namespace and the base URI of a store somebody else filled." <<Proposed_diffstackingTriple_store_network_loader>> as Proposed_diffstackingTriple_store_network_loader
  rectangle "==TripleStoreRDF4JSparql\\n\\nTriple store implementation whose statements live in a remote SPARQL database: rdf4j SPARQLRepository for queries and a Graph Store Protocol client on the JDK HTTP client for whole-graph transfer. Scopes every graph and every query to one scenario." <<Proposed_diffstackingTriple_store_sparql>> as Proposed_diffstackingTriple_store_sparql
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
      skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

      rectangle "Importer implementations" <<Powsybl_coreIidmIoImport_providers>> as Powsybl_coreIidmIoImport_providers {
        skinparam RectangleBorderColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
        skinparam RectangleFontColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
        skinparam RectangleBorderStyle<<Powsybl_coreIidmIoImport_providers>> dashed

        rectangle "==CgmesImport" <<Powsybl_coreIidmIoImport_providersCgmes_importer>> as Powsybl_coreIidmIoImport_providersCgmes_importer
      }
    }
    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
  }
  rectangle "CGMES conversion" <<Powsybl_coreCgmes>> as Powsybl_coreCgmes {
    skinparam RectangleBorderColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreCgmes>> dashed

    rectangle "==Triple store (rdf4j)\\n\\nRDF store the CGMES import loads instance files into and queries through SPARQL." <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
  }
}
rectangle "SPARQL 1.1 graph database" <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database {
  skinparam RectangleBorderColor<<Proposed_diffstacking_rdf_database>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking_rdf_database>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking_rdf_database>> dashed

  rectangle "==Scenario "2016-01-01"\\n\\nThe named graphs of one base grid model: contexts:2016-01-01/<file> per instance file, one metadata graph http://powsybl.org/rdfdb/2016-01-01/meta indexing them, and two immutable graphs per recorded difference." <<Proposed_diffstacking_rdf_databaseScenario_a>> as Proposed_diffstacking_rdf_databaseScenario_a
  rectangle "==Scenario "2016-01-02"\\n\\nAnother day, another base grid model, in the same database. Its metadata graph is a different graph, so a chain, a head and a difference of one scenario can never name a model of the other." <<Proposed_diffstacking_rdf_databaseScenario_b>> as Proposed_diffstacking_rdf_databaseScenario_b
  rectangle "==Metadata graph per scenario\\n\\nhttp://powsybl.org/rdfdb/<scenario>/meta: the catalogue, mutable and small." <<Proposed_diffstacking_rdf_databaseStore_meta_graph>> as Proposed_diffstacking_rdf_databaseStore_meta_graph
  rectangle "==Checkpoint copies\\n\\n.../materialized/...: a diff chain folded once on the server, an extra full starting point." <<Proposed_diffstacking_rdf_databaseStore_checkpoint_copies>> as Proposed_diffstacking_rdf_databaseStore_checkpoint_copies
  rectangle "==Immutable data graphs\\n\\n.../graph/<model id>: one graph per uploaded CGMES file, written once." <<Proposed_diffstacking_rdf_databaseStore_data_graphs>> as Proposed_diffstacking_rdf_databaseStore_data_graphs
  rectangle "==Forward / reverse diff graphs\\n\\n.../graph/<model id>/forward and /reverse: what a difference sets and what it replaced." <<Proposed_diffstacking_rdf_databaseStore_diff_graphs>> as Proposed_diffstacking_rdf_databaseStore_diff_graphs
}

Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>loads files into
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_triple_store_loader : <color:#8D8D8D>reads files with (CgmesModelTripleStore.read delegates, parallelism 1)
Proposed_diffstackingCgmes_triple_store_loader .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>writes contexts to
Proposed_diffstackingTriple_store_network_loader .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Proposed_diffstackingTriple_store_network_loader .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersCgmes_importer : <color:#8D8D8D>converts through CgmesImport.convert / update
Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersCgmes_importer : <color:#8D8D8D>takes TripleStoreOptions from
Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_triple_store_loader : <color:#8D8D8D>uploads a data source with
Proposed_diffstackingCgmes_rdfdbGraph_fetcher .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>fills local MemoryStore
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_network_loader : <color:#8D8D8D>converts fetched graphs with
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_triple_store_loader : <color:#8D8D8D>parses the instance files of a root into a scratch store with
Proposed_diffstackingCgmes_rdfdbRdf_database_config .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_connection : <color:#8D8D8D>is opened into
Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>registers uploaded full models in
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>fetches the scenario with
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>base graphs (cached)
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance : <color:#8D8D8D>records the origin as
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>fetches and composes the chain with
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbDiff_update_planner : <color:#8D8D8D>plans NOOP | DIFF | FULL
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>rebuilds the target with
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>plans and materialises a snapshot with
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>dispatches an opted-in variant update or a bulk load to
Proposed_diffstackingCgmes_rdfdbRdf_db_provenance .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>holds one per bound variant; a NetworkListener keeps them in step with clone, overwrite and remove
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>checks base / linear rule
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>a versioned export targets a snapshot of
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>writes one history per variant inside
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>writes a new version through (snapshot node in the same request)
Proposed_diffstackingCgmes_rdfdbDiff_update_planner .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>chain query
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>fetches the chain with
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>every difference of every accepted path, in one request
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>the first snapshot of a day, converted once
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_uploader : <color:#8D8D8D>uploads the instance files of a root with
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator : <color:#8D8D8D>ingests a timestep from files with
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbTimesteps : <color:#8D8D8D>resolves labels and versions with
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>resolves the address in
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>asks what to fold from
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>one multi-side chain query: the target and every candidate source
Proposed_diffstackingCgmes_rdfdbVariant_scope .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>swaps the identity of, and captures it back
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>applies inside
Proposed_diffstackingCgmes_triple_store_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>uploads N-Triples per graph (GSP PUT)
Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>opens scenario stores on
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>queries the server directly in remote mode
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>guarded SPARQL UPDATE, GSP PUT of graphs
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>plan query; Checkpoint COPY on the server
Proposed_diffstacking_rdf_databaseStore_meta_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_databaseStore_data_graphs : <color:#8D8D8D>indexes
Proposed_diffstacking_rdf_databaseStore_meta_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_databaseStore_diff_graphs : <color:#8D8D8D>indexes
Proposed_diffstacking_rdf_databaseStore_checkpoint_copies .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_databaseStore_diff_graphs : <color:#8D8D8D>folds
Proposed_diffstackingCgmes_rdfdbGraph_fetcher .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>parallel GSP GET
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded SPARQL UPDATE (graphs + metadata)
Proposed_diffstackingCgmes_rdfdbModel_catalog .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>reads and writes the metadata graph of one scenario
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>fetch forward/reverse graphs
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one plan query: UNION of both ends, pdb:parent* to the root
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>COPY, three replace operations per difference, header rewrite, then the metadata
Proposed_diffstackingCgmes_rdfdbGraph_uploader .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one immutable graph per instance file
Proposed_diffstackingTriple_store_sparql .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>SPARQL protocol + Graph Store Protocol
@enduml
`;case`rdfdb_fetch_performance`:return`@startuml
title "Loading a scenario out of the database, step by step"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==RdfDbConnection\\n\\nAn open connection: owns the SPARQL repository and the HTTP client, lists the scenarios of the database, uploads CGMES files into one, clears one." <<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>> as Proposed_diffstackingCgmes_rdfdbRdf_db_connection
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database
rectangle "==GraphFetcher + GraphCache\\n\\nParallel bulk transfer of the named graphs of a scenario into a local in-memory store: one GET per graph, N-Triples parsed while the response arrives, a single overlapped writer, optional reuse of parsed graphs." <<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>> as Proposed_diffstackingCgmes_rdfdbGraph_fetcher
rectangle "==Triple store (rdf4j)\\n\\nRDF store the CGMES import loads instance files into and queries through SPARQL." <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
rectangle "==TripleStoreNetworkLoader\\n\\nAny triple store holding CGMES data into an IIDM network: the second half of an import, with nothing of files in it. Works out the CIM namespace and the base URI of a store somebody else filled." <<Proposed_diffstackingTriple_store_network_loader>> as Proposed_diffstackingTriple_store_network_loader
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==RdfDbProvenance\\n\\nNetwork extension recording the database, the scenario, the graphs and the stored model per profile a network was built from or last updated to. Deliberately not serialised." <<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>> as Proposed_diffstackingCgmes_rdfdbRdf_db_provenance

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_connection : <color:#8D8D8D>asks for the graphs of the scenario
Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>lists the named graphs under the scenario prefix
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>hands over the graph names
Proposed_diffstackingCgmes_rdfdbGraph_fetcher .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>four parallel GET requests, Accept application/n-triples
Proposed_diffstackingCgmes_rdfdbGraph_fetcher .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>adds each finished graph in one transaction, single writer
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_network_loader : <color:#8D8D8D>converts the filled store
Proposed_diffstackingTriple_store_network_loader .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>runs the unchanged CGMES query catalogs
Proposed_diffstackingTriple_store_network_loader .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates the network
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance : <color:#8D8D8D>records database, scenario and graphs on the network
@enduml
`;case`rdfdb_upload`:return`@startuml
title "Uploading CGMES files into a scenario"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_triple_store_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_sparql>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==RdfDbConnection\\n\\nAn open connection: owns the SPARQL repository and the HTTP client, lists the scenarios of the database, uploads CGMES files into one, clears one." <<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>> as Proposed_diffstackingCgmes_rdfdbRdf_db_connection
rectangle "==CgmesTripleStoreLoader\\n\\nCGMES files into any triple store, local or remote: the first half of an import, with nothing of IIDM in it." <<Proposed_diffstackingCgmes_triple_store_loader>> as Proposed_diffstackingCgmes_triple_store_loader
rectangle "==TripleStoreRDF4JSparql\\n\\nTriple store implementation whose statements live in a remote SPARQL database: rdf4j SPARQLRepository for queries and a Graph Store Protocol client on the JDK HTTP client for whole-graph transfer. Scopes every graph and every query to one scenario." <<Proposed_diffstackingTriple_store_sparql>> as Proposed_diffstackingTriple_store_sparql
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database

Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_triple_store_loader : <color:#8D8D8D>hands over the data source and the scenario store
Proposed_diffstackingCgmes_triple_store_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>reads each instance file into the store
Proposed_diffstackingTriple_store_sparql .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>PUT one graph as N-Triples, several files in parallel
Proposed_diffstackingCgmes_triple_store_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>asks whether the model already carries a boundary
Proposed_diffstackingTriple_store_sparql .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>modelProfiles query, restricted to the scenario
Proposed_diffstackingCgmes_triple_store_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>reads the boundary data source if it does not
@enduml
`;case`rdfdb_diff_roundtrip`:return`@startuml
title "A change recorded on one network, applied to another, through the database"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_event_recorder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbModel_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==NetworkEventRecorder\\n\\nNetworkListener collecting the changes applied to a network as a replayable event log." <<Powsybl_coreIidmVariantsNetwork_event_recorder>> as Powsybl_coreIidmVariantsNetwork_event_recorder
rectangle "==CgmesDiffExport\\n\\nWrites the same recorded changes as IEC 61970-552 difference models, one per profile." <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
rectangle "==RdfDbDifferenceSink / RdfDbExport\\n\\nThe DifferenceSink of the database: a recorded change becomes two immutable named graphs and one metadata node, written by a single guarded INSERT ... WHERE that also carries the linear-chain, duplicate and base-exists rules. Advances the identity of the sender afterwards." <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
rectangle "==ModelCatalog (metadata graph per scenario)\\n\\nReads and writes the model nodes of one scenario: which profile, which named graphs, which model is superseded, how deep in the chain, whether every property is applicable in place. The index a client navigates instead of computing graph IRIs." <<Proposed_diffstackingCgmes_rdfdbModel_catalog>> as Proposed_diffstackingCgmes_rdfdbModel_catalog
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==DiffUpdatePlanner\\n\\nPure decision over catalogue rows: is the network already there, is it on the chain of the target and how far, is every difference on the way applicable in place. Answers NOOP, DIFF or FULL with the reasons." <<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>> as Proposed_diffstackingCgmes_rdfdbDiff_update_planner
rectangle "==RdfDbDiffSource + StatementCodec\\n\\nFetches the forward and reverse graphs of a whole chain in one query and decodes the triples back into CgmesStatements, the exact inverse of what the sink encoded." <<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>> as Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork

Powsybl_coreIidmVariantsNetwork_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>hands over the recorded changes
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>one difference model per profile
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>which model does it supersede, and is that model still free
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded INSERT ... WHERE into scenario S: forward graph, reverse graph, metadata node
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>the sender is now at the difference it wrote
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbDiff_update_planner : <color:#8D8D8D>the consumer asks how to reach the head of S
Proposed_diffstackingCgmes_rdfdbDiff_update_planner .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>one chain query for every profile
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>fetch the differences on the path
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one query over all forward and reverse graphs
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>the folded difference, applied in place
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>updates the consumer network
@enduml
`;case`rdfdb_update_decision`:return`@startuml
title "How an update of an unversioned scenario decides: nothing, a difference, or a rebuild"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbModel_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==RdfDbProvenance\\n\\nNetwork extension recording the database, the scenario, the graphs and the stored model per profile a network was built from or last updated to. Deliberately not serialised." <<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>> as Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
rectangle "==DiffUpdatePlanner\\n\\nPure decision over catalogue rows: is the network already there, is it on the chain of the target and how far, is every difference on the way applicable in place. Answers NOOP, DIFF or FULL with the reasons." <<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>> as Proposed_diffstackingCgmes_rdfdbDiff_update_planner
rectangle "==ModelCatalog (metadata graph per scenario)\\n\\nReads and writes the model nodes of one scenario: which profile, which named graphs, which model is superseded, how deep in the chain, whether every property is applicable in place. The index a client navigates instead of computing graph IRIs." <<Proposed_diffstackingCgmes_rdfdbModel_catalog>> as Proposed_diffstackingCgmes_rdfdbModel_catalog
rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
rectangle "==GraphFetcher + GraphCache\\n\\nParallel bulk transfer of the named graphs of a scenario into a local in-memory store: one GET per graph, N-Triples parsed while the response arrives, a single overlapped writer, optional reuse of parsed graphs." <<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>> as Proposed_diffstackingCgmes_rdfdbGraph_fetcher
rectangle "==TripleStoreNetworkLoader\\n\\nAny triple store holding CGMES data into an IIDM network: the second half of an import, with nothing of files in it. Works out the CIM namespace and the base URI of a store somebody else filled." <<Proposed_diffstackingTriple_store_network_loader>> as Proposed_diffstackingTriple_store_network_loader

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance : <color:#8D8D8D>is the network at the target scenario? if not, reload that scenario - no query sent
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbDiff_update_planner : <color:#8D8D8D>which stored model is the network at, per profile
Proposed_diffstackingCgmes_rdfdbDiff_update_planner .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>chain of the target and of the current model, one query
Proposed_diffstackingCgmes_rdfdbDiff_update_planner .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>NOOP, or a path forwards or backwards, or FULL with reasons
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>canApplyInPlace: does the importer accept the folded difference
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>DIFF_APPLIED: the network handed in is updated
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>FULL_RELOAD: materialise the target instead
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>base graphs of the scenario, from the cache when warm
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>applyToGraph: the folded chain, on the local store
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_network_loader : <color:#8D8D8D>the unchanged conversion, on data that is now the target version
@enduml
`;case`rdfdb_versioning_schema`:return`@startuml
title "What one scenario looks like inside the database"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbCheckpoint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_uploader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaScenario_meta_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaStored_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaPdb_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaNamed_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "cgmes-rdfdb" <<Proposed_diffstackingCgmes_rdfdb>> as Proposed_diffstackingCgmes_rdfdb {
  skinparam RectangleBorderColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstackingCgmes_rdfdb>> dashed

  rectangle "==Checkpoint\\n\\nFolds the differences of a snapshot into full graphs on the database: COPY per profile, the three replace operations per difference, a header rewrite, then pdb:full on the existing snapshot. No new root, so the chain stays connected." <<Proposed_diffstackingCgmes_rdfdbCheckpoint>> as Proposed_diffstackingCgmes_rdfdbCheckpoint
  rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
  rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
  rectangle "==GraphUploader\\n\\nCopies the graphs of a locally parsed model into immutable graphs of the scenario, in parallel. Unreferenced until the guarded metadata write makes them a snapshot." <<Proposed_diffstackingCgmes_rdfdbGraph_uploader>> as Proposed_diffstackingCgmes_rdfdbGraph_uploader
}
rectangle "cgmes-rdfdb metadata schema" <<Proposed_diffstackingCgmes_rdfdb_schema>> as Proposed_diffstackingCgmes_rdfdb_schema {
  skinparam RectangleBorderColor<<Proposed_diffstackingCgmes_rdfdb_schema>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstackingCgmes_rdfdb_schema>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstackingCgmes_rdfdb_schema>> dashed

  rectangle "==scenario metadata graph <sc>/meta\\n\\nOne per scenario - one base grid model, in practice one day. Every node of a scenario lives here and nothing in it ever names another scenario, which is what makes isolation a property of the graph scoping rather than of a filter somebody could forget." <<Proposed_diffstackingCgmes_rdfdb_schemaScenario_meta_graph>> as Proposed_diffstackingCgmes_rdfdb_schemaScenario_meta_graph
  rectangle "==pdb:Snapshot\\n\\nA consistent state of every profile at once, addressed by (scenario, timestep, version). pdb:parent points at the previous snapshot along a pdb:VersionEdge, which makes the chain of a scenario a linear list rooted at its one pdb:Full snapshot; pdb:depth counts from that root. pdb:member is what the snapshot adds, pdb:state what a reader is at once it reaches it, pdb:full where a materialisation may start, per profile." <<Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot>> as Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot
  rectangle "==timestep root (pdb:TimestepEdge)\\n\\nThe first snapshot of a timestep of the day: a diff snapshot pinned to a version of the base chain rather than to another timestep, with a pdb:VersionEdge chain of its own below it. That is what keeps every timestep "the base plus a handful of differences" however many study versions the others accumulate." <<Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root>> as Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root
  rectangle "==md:FullModel / dm:DifferenceModel node\\n\\nOne CGMES model the database holds, full or difference: its profile, its graphs, what it supersedes, whether an in-place update can apply it." <<Proposed_diffstackingCgmes_rdfdb_schemaStored_model>> as Proposed_diffstackingCgmes_rdfdb_schemaStored_model
  rectangle "==pdb:Catalog\\n\\nOne node per scenario carrying its base timestep and the zone offset its HH:MM labels are read in. One per scenario and only one: a scenario is one base day, and the next day is another scenario." <<Proposed_diffstackingCgmes_rdfdb_schemaPdb_catalog>> as Proposed_diffstackingCgmes_rdfdb_schemaPdb_catalog
  rectangle "==immutable named graph\\n\\nThe statements themselves: a versioned instance file, the forward or reverse side of a difference, or the copy a checkpoint folded. Written once and never rewritten, which is what makes it cacheable by its IRI." <<Proposed_diffstackingCgmes_rdfdb_schemaNamed_graph>> as Proposed_diffstackingCgmes_rdfdb_schemaNamed_graph
}

Proposed_diffstackingCgmes_rdfdb_schemaScenario_meta_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_catalog : <color:#8D8D8D>one per scenario (base timestep, offset)
Proposed_diffstackingCgmes_rdfdb_schemaScenario_meta_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot : <color:#8D8D8D>contains (never cross-scenario)
Proposed_diffstackingCgmes_rdfdb_schemaScenario_meta_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaStored_model : <color:#8D8D8D>contains
Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_catalog : <color:#8D8D8D>its label is read in the offset of
Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root : <color:#8D8D8D>pdb:timestepRoot
Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaStored_model : <color:#8D8D8D>pdb:member / pdb:state / pdb:full
Proposed_diffstackingCgmes_rdfdb_schemaStored_model .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaNamed_graph : <color:#8D8D8D>pdb:graph / pdb:forwardGraph / pdb:reverseGraph
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root : <color:#8D8D8D>pins a new timestep to the base chain
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot : <color:#8D8D8D>writes and reads
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot : <color:#8D8D8D>walks pdb:parent of
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>resolves the address in
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaNamed_graph : <color:#8D8D8D>copies and folds
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>asks what to fold from
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_uploader : <color:#8D8D8D>uploads the instance files of a root with
Proposed_diffstackingCgmes_rdfdbGraph_uploader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaNamed_graph : <color:#8D8D8D>writes
@enduml
`;case`rdfdb_version_navigation`:return`@startuml
title "Reaching a version: one query, then differences or a rebuild"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
rectangle "==RdfDbProvenance\\n\\nNetwork extension recording the database, the scenario, the graphs and the stored model per profile a network was built from or last updated to. Deliberately not serialised." <<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>> as Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database
rectangle "==RdfDbDiffSource + StatementCodec\\n\\nFetches the forward and reverse graphs of a whole chain in one query and decodes the triples back into CgmesStatements, the exact inverse of what the sink encoded." <<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>> as Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
rectangle "==GraphFetcher + GraphCache\\n\\nParallel bulk transfer of the named graphs of a scenario into a local in-memory store: one GET per graph, N-Triples parsed while the response arrives, a single overlapped writer, optional reuse of parsed graphs." <<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>> as Proposed_diffstackingCgmes_rdfdbGraph_fetcher
rectangle "==TripleStoreNetworkLoader\\n\\nAny triple store holding CGMES data into an IIDM network: the second half of an import, with nothing of files in it. Works out the CIM namespace and the base URI of a store somebody else filled." <<Proposed_diffstackingTriple_store_network_loader>> as Proposed_diffstackingTriple_store_network_loader

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>bring this network to (scenario, timestep, version)
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance : <color:#8D8D8D>which snapshot is the network at, and of which scenario
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>the plan query: both chains in one request
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>NOOP, DIFF with the path, or FULL with the reasons
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>DIFF: every difference of the path, in one request
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>one composed difference per profile, applied or reverted in place
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>FULL: build the snapshot instead
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>the nearest full graph of each profile, cached
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_network_loader : <color:#8D8D8D>the unchanged conversion, on data that is now that version
@enduml
`;case`rdfdb_checkpoint`:return`@startuml
title "Folding a chain into full graphs, on the database"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbCheckpoint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Checkpoint\\n\\nFolds the differences of a snapshot into full graphs on the database: COPY per profile, the three replace operations per difference, a header rewrite, then pdb:full on the existing snapshot. No new root, so the chain stays connected." <<Proposed_diffstackingCgmes_rdfdbCheckpoint>> as Proposed_diffstackingCgmes_rdfdbCheckpoint
rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database
rectangle "==pdb:Snapshot\\n\\nA consistent state of every profile at once, addressed by (scenario, timestep, version). pdb:parent points at the previous snapshot along a pdb:VersionEdge, which makes the chain of a scenario a linear list rooted at its one pdb:Full snapshot; pdb:depth counts from that root. pdb:member is what the snapshot adds, pdb:state what a reader is at once it reaches it, pdb:full where a materialisation may start, per profile." <<Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot>> as Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot

Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>which profiles does this snapshot reach by differences, and from where
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>COPY the full graph of each touched profile
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>per difference: set the forward keys, drop the reverse-only keys, drop the reverse-only objects
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>rewrite the md:FullModel header of the copy to the state model
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_snapshot : <color:#8D8D8D>pdb:full and hasFull true on the existing snapshot
@enduml
`;case`rdfdb_timesteps`:return`@startuml
title "A day: the base chain, its timesteps and the versions inside them"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbTimesteps>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==RdfDbDifferenceSink / RdfDbExport\\n\\nThe DifferenceSink of the database: a recorded change becomes two immutable named graphs and one metadata node, written by a single guarded INSERT ... WHERE that also carries the linear-chain, duplicate and base-exists rules. Advances the identity of the sender afterwards." <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
rectangle "==Timesteps + SnapshotRef\\n\\nThe keys: a required scenario, a canonical UTC instant per timestep and a free version label. Accepts instants, offset date-times and HH:MM labels, which are resolved against the base day and offset of the addressed scenario." <<Proposed_diffstackingCgmes_rdfdbTimesteps>> as Proposed_diffstackingCgmes_rdfdbTimesteps
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database
rectangle "==timestep root (pdb:TimestepEdge)\\n\\nThe first snapshot of a timestep of the day: a diff snapshot pinned to a version of the base chain rather than to another timestep, with a pdb:VersionEdge chain of its own below it. That is what keeps every timestep "the base plus a handful of differences" however many study versions the others accumulate." <<Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root>> as Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph

Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>a recorder at the base head writes (scenario, 08:30, 1.0)
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbTimesteps : <color:#8D8D8D>resolve '8:30' against the base day and offset of this scenario
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>which base version do these differences supersede (the pin)
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdb_schemaPdb_timestep_root : <color:#8D8D8D>one guarded request: the root, its members, a TimestepEdge to the pin
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>a client at 08:30 asks for 08:45
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>undo the 08:30 differences, apply the 08:45 ones: one composed update
@enduml
`;case`rdfdb_timestep_ingestion`:return`@startuml
title "Ingesting a day from its files"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_triple_store_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
rectangle "==CgmesTripleStoreLoader\\n\\nCGMES files into any triple store, local or remote: the first half of an import, with nothing of IIDM in it." <<Proposed_diffstackingCgmes_triple_store_loader>> as Proposed_diffstackingCgmes_triple_store_loader
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database
rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
rectangle "==GraphFetcher + GraphCache\\n\\nParallel bulk transfer of the named graphs of a scenario into a local in-memory store: one GET per graph, N-Triples parsed while the response arrives, a single overlapped writer, optional reuse of parsed graphs." <<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>> as Proposed_diffstackingCgmes_rdfdbGraph_fetcher
rectangle "==TripleDiffCalculator\\n\\nThe difference between two graphs of one profile, computed from the triples alone: that is what turns a daily CGMES export into a version, since nobody recorded those changes on a network. Excludes the model header, keys by (local subject, property), compares numeric literals by value so a re-export is not a change, and emits a type plus its properties for an added object." <<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>> as Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator
rectangle "==RdfDbDifferenceSink / RdfDbExport\\n\\nThe DifferenceSink of the database: a recorded change becomes two immutable named graphs and one metadata node, written by a single guarded INSERT ... WHERE that also carries the linear-chain, duplicate and base-exists rules. Advances the identity of the sender afterwards." <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink

Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_triple_store_loader : <color:#8D8D8D>parse the files of this timestep into a scratch store
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>is the boundary still the scenario's own?
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>the parent state as triples, on a local store
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>its full graphs, from the cache after the first timestep of the day
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator : <color:#8D8D8D>compare EQ and SSH, graph against graph
Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>one difference model per profile that moved
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>the ordinary guarded write, as a timestep root or a version
@enduml
`;case`rdfdb_variant_binding`:return`@startuml
title "A variant of a network standing for a snapshot"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_updater>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_scope>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_binding>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==VariantUpdater + VariantBulkLoader\\n\\nCreate or move one variant, and load a whole day into many. Everything that can refuse runs before anything is created: the scenario check without a query, the one multi-side chain query, the stored pdb:variantSafe flags. A target that cannot be reached inside a variant is VARIANT_REFUSED with reasons and every variant untouched, never a rebuild of the network." <<Proposed_diffstackingCgmes_rdfdbVariant_updater>> as Proposed_diffstackingCgmes_rdfdbVariant_updater
rectangle "==VariantScope\\n\\nMakes the network be one of its variants for the duration of an operation: the CgmesMetadataModels extension, the case date and the snapshot identity of that variant are swapped in, the working variant is selected, and the primary is put back afterwards. That is why the planner, the exporter and the Supersedes of a written difference are correct for a variant although none of them knows variants exist." <<Proposed_diffstackingCgmes_rdfdbVariant_scope>> as Proposed_diffstackingCgmes_rdfdbVariant_scope
rectangle "==VariantBinding\\n\\nWhat one IIDM variant of a network stands for: the snapshot address, its IRI, the stored model per profile, the case date of that moment and which variant it was cloned from. Kept on the provenance, in step with clone, overwrite and remove through a NetworkListener, so a binding never outlives its variant." <<Proposed_diffstackingCgmes_rdfdbVariant_binding>> as Proposed_diffstackingCgmes_rdfdbVariant_binding
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>bring variant '08:30' to (scenario, 08:30, 1.1)
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>enter: lock the provenance, park the primary identity
Proposed_diffstackingCgmes_rdfdbVariant_scope .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>install this variant's models, case date and snapshot
Proposed_diffstackingCgmes_rdfdbVariant_scope .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>select the variant as the working one
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>apply the composed difference, variantSafeOnly
Proposed_diffstackingCgmes_rdfdbVariant_scope .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>close: capture what the operation made the network say
Proposed_diffstackingCgmes_rdfdbVariant_scope .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>reinstall the primary identity, restore the working variant
@enduml
`;case`rdfdb_variants_bulk_load`:return`@startuml
title "A whole day as the variants of one network"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_updater>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_scope>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==VariantUpdater + VariantBulkLoader\\n\\nCreate or move one variant, and load a whole day into many. Everything that can refuse runs before anything is created: the scenario check without a query, the one multi-side chain query, the stored pdb:variantSafe flags. A target that cannot be reached inside a variant is VARIANT_REFUSED with reasons and every variant untouched, never a rebuild of the network." <<Proposed_diffstackingCgmes_rdfdbVariant_updater>> as Proposed_diffstackingCgmes_rdfdbVariant_updater
rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database
rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
rectangle "==RdfDbDiffSource + StatementCodec\\n\\nFetches the forward and reverse graphs of a whole chain in one query and decodes the triples back into CgmesStatements, the exact inverse of what the sink encoded." <<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>> as Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==VariantScope\\n\\nMakes the network be one of its variants for the duration of an operation: the CgmesMetadataModels extension, the case date and the snapshot identity of that variant are swapped in, the working variant is selected, and the primary is put back afterwards. That is why the planner, the exporter and the Supersedes of a written difference are correct for a variant although none of them knows variants exist." <<Proposed_diffstackingCgmes_rdfdbVariant_scope>> as Proposed_diffstackingCgmes_rdfdbVariant_scope
rectangle "==RdfDbProvenance\\n\\nNetwork extension recording the database, the scenario, the graphs and the stored model per profile a network was built from or last updated to. Deliberately not serialised." <<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>> as Proposed_diffstackingCgmes_rdfdbRdf_db_provenance

Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>loadVariants(scenario, version, 96 timesteps)
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>one chains query: 96 sides in one request
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>UNION of the starts, pdb:parent* per side, details once per snapshot
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>the first snapshot becomes the network (no second plan query)
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>every difference of every accepted path, in one request
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>one cloneVariant for every target sourced from the primary
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>per target: apply its path inside its own scope
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance : <color:#8D8D8D>one outcome per request: bound, or refused with reasons
@enduml
`;case`rdfdb_variant_refusal_decision`:return`@startuml
title "Why a variant update refuses instead of reloading"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_updater>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==VariantUpdater + VariantBulkLoader\\n\\nCreate or move one variant, and load a whole day into many. Everything that can refuse runs before anything is created: the scenario check without a query, the one multi-side chain query, the stored pdb:variantSafe flags. A target that cannot be reached inside a variant is VARIANT_REFUSED with reasons and every variant untouched, never a rebuild of the network." <<Proposed_diffstackingCgmes_rdfdbVariant_updater>> as Proposed_diffstackingCgmes_rdfdbVariant_updater
rectangle "==RdfDbProvenance\\n\\nNetwork extension recording the database, the scenario, the graphs and the stored model per profile a network was built from or last updated to. Deliberately not serialised." <<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>> as Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader

Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance : <color:#8D8D8D>another scenario? refuse without a query
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>the path, with pdb:variantSafe on every step
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>a step the store says is unsafe: refuse before cloning or fetching
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>otherwise: plan the composed difference with variantSafeOnly
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>a statement whose IIDM target is shared: SLOW_REQUIRED with the reason
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>remove the variant this call created; every variant is as it was
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>VARIANT_REFUSED with the reasons (or a separate network, if asked)
@enduml
`;case`diffstacking_ipc`:return`@startuml
title "Diffstacking IPC: Python clients exchanging grid states through the RDF database"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PypowsyblPython_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPython_network>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblPython_event_recorder>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_util>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblPython_rdf_database>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_database_config>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbCheckpoint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_updater>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbModel_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_scope>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_binding>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbGraph_uploader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbTimesteps>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==Python domain APIs\\n\\nnetwork, loadflow, security, sensitivity, and other Python facades." <<PypowsyblPython_api>> as PypowsyblPython_api
  rectangle "==pypowsybl.network.Network\\n\\nNetwork._handle retains the opaque Java object handle across native calls." <<PypowsyblPython_network>> as PypowsyblPython_network
  rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
}
rectangle "Diffstacking in pypowsybl (proposal)" <<Proposed_diffstacking_pypowsybl>> as Proposed_diffstacking_pypowsybl {
  skinparam RectangleBorderColor<<Proposed_diffstacking_pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking_pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking_pypowsybl>> dashed

  rectangle "==pypowsybl.network.NetworkEventRecorder\\n\\nContext manager; holds the handle of a Java NetworkEventRecording and exports partial SSH / CGMES difference models as strings, files or zip." <<Proposed_diffstacking_pypowsyblPython_event_recorder>> as Proposed_diffstacking_pypowsyblPython_event_recorder
  rectangle "==RdfDbUtil\\n\\nThe JVM-testable half of the RDF database bindings: option map to RdfDatabase, subset names to CgmesSubset, (scenario, version, timestep) strings to a SnapshotRef, update outcomes to routes (noop | diff | full | refused, and update for the legacy profile replacement), and the catalogue records to dataframes. It also owns the variant surface: loadVariants turns the three string arrays into VariantRequests, variantRows turns the bindings, the variants IIDM holds and the refusals of the last operation into one table with a status column, identity answers for one variant by running inside RdfDbProvenance.inVariant, and the two per-variant exports write each variant history after its own snapshot." <<Proposed_diffstacking_pypowsyblRdf_db_util>> as Proposed_diffstacking_pypowsyblRdf_db_util
  rectangle "==pypowsybl.network.RdfDatabase\\n\\nContext manager over the handle of a Java RdfDbConnection: connect_rdf_db / connect, load_cgmes, checkpoint, clear, and the catalogue views scenarios / snapshots / versions / timesteps / models as dataframes. Every call names the scenario - the base grid model, in practice the day - as its second positional argument, and addresses a state inside it by version and timestep." <<Proposed_diffstacking_pypowsyblPython_rdf_database>> as Proposed_diffstacking_pypowsyblPython_rdf_database
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "cgmes-rdfdb" <<Proposed_diffstackingCgmes_rdfdb>> as Proposed_diffstackingCgmes_rdfdb {
    skinparam RectangleBorderColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
    skinparam RectangleFontColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
    skinparam RectangleBorderStyle<<Proposed_diffstackingCgmes_rdfdb>> dashed

    rectangle "==RdfDatabase\\n\\nImmutable description of a database: endpoint or the in-process memory backend, query mode, fetch and upload parallelism, gzip, cache. Says nothing about which data - that is the scenario, an argument of every call." <<Proposed_diffstackingCgmes_rdfdbRdf_database_config>> as Proposed_diffstackingCgmes_rdfdbRdf_database_config
    rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
    rectangle "==RdfDbDifferenceSink / RdfDbExport\\n\\nThe DifferenceSink of the database: a recorded change becomes two immutable named graphs and one metadata node, written by a single guarded INSERT ... WHERE that also carries the linear-chain, duplicate and base-exists rules. Advances the identity of the sender afterwards." <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
    rectangle "==Checkpoint\\n\\nFolds the differences of a snapshot into full graphs on the database: COPY per profile, the three replace operations per difference, a header rewrite, then pdb:full on the existing snapshot. No new root, so the chain stays connected." <<Proposed_diffstackingCgmes_rdfdbCheckpoint>> as Proposed_diffstackingCgmes_rdfdbCheckpoint
    rectangle "==RdfDbConnection\\n\\nAn open connection: owns the SPARQL repository and the HTTP client, lists the scenarios of the database, uploads CGMES files into one, clears one." <<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>> as Proposed_diffstackingCgmes_rdfdbRdf_db_connection
    rectangle "==RdfDbProvenance\\n\\nNetwork extension recording the database, the scenario, the graphs and the stored model per profile a network was built from or last updated to. Deliberately not serialised." <<Proposed_diffstackingCgmes_rdfdbRdf_db_provenance>> as Proposed_diffstackingCgmes_rdfdbRdf_db_provenance
    rectangle "==DiffUpdatePlanner\\n\\nPure decision over catalogue rows: is the network already there, is it on the chain of the target and how far, is every difference on the way applicable in place. Answers NOOP, DIFF or FULL with the reasons." <<Proposed_diffstackingCgmes_rdfdbDiff_update_planner>> as Proposed_diffstackingCgmes_rdfdbDiff_update_planner
    rectangle "==VariantUpdater + VariantBulkLoader\\n\\nCreate or move one variant, and load a whole day into many. Everything that can refuse runs before anything is created: the scenario check without a query, the one multi-side chain query, the stored pdb:variantSafe flags. A target that cannot be reached inside a variant is VARIANT_REFUSED with reasons and every variant untouched, never a rebuild of the network." <<Proposed_diffstackingCgmes_rdfdbVariant_updater>> as Proposed_diffstackingCgmes_rdfdbVariant_updater
    rectangle "==ModelCatalog (metadata graph per scenario)\\n\\nReads and writes the model nodes of one scenario: which profile, which named graphs, which model is superseded, how deep in the chain, whether every property is applicable in place. The index a client navigates instead of computing graph IRIs." <<Proposed_diffstackingCgmes_rdfdbModel_catalog>> as Proposed_diffstackingCgmes_rdfdbModel_catalog
    rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
    rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
    rectangle "==VariantScope\\n\\nMakes the network be one of its variants for the duration of an operation: the CgmesMetadataModels extension, the case date and the snapshot identity of that variant are swapped in, the working variant is selected, and the primary is put back afterwards. That is why the planner, the exporter and the Supersedes of a written difference are correct for a variant although none of them knows variants exist." <<Proposed_diffstackingCgmes_rdfdbVariant_scope>> as Proposed_diffstackingCgmes_rdfdbVariant_scope
    rectangle "==GraphFetcher + GraphCache\\n\\nParallel bulk transfer of the named graphs of a scenario into a local in-memory store: one GET per graph, N-Triples parsed while the response arrives, a single overlapped writer, optional reuse of parsed graphs." <<Proposed_diffstackingCgmes_rdfdbGraph_fetcher>> as Proposed_diffstackingCgmes_rdfdbGraph_fetcher
    rectangle "==RdfDbDiffSource + StatementCodec\\n\\nFetches the forward and reverse graphs of a whole chain in one query and decodes the triples back into CgmesStatements, the exact inverse of what the sink encoded." <<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>> as Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
    rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
    rectangle "==VariantBinding\\n\\nWhat one IIDM variant of a network stands for: the snapshot address, its IRI, the stored model per profile, the case date of that moment and which variant it was cloned from. Kept on the provenance, in step with clone, overwrite and remove through a NetworkListener, so a binding never outlives its variant." <<Proposed_diffstackingCgmes_rdfdbVariant_binding>> as Proposed_diffstackingCgmes_rdfdbVariant_binding
    rectangle "==GraphUploader\\n\\nCopies the graphs of a locally parsed model into immutable graphs of the scenario, in parallel. Unreferenced until the guarded metadata write makes them a snapshot." <<Proposed_diffstackingCgmes_rdfdbGraph_uploader>> as Proposed_diffstackingCgmes_rdfdbGraph_uploader
    rectangle "==TripleDiffCalculator\\n\\nThe difference between two graphs of one profile, computed from the triples alone: that is what turns a daily CGMES export into a version, since nobody recorded those changes on a network. Excludes the model header, keys by (local subject, property), compares numeric literals by value so a re-export is not a change, and emits a type plus its properties for an added object." <<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>> as Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator
    rectangle "==Timesteps + SnapshotRef\\n\\nThe keys: a required scenario, a canonical UTC instant per timestep and a free version label. Accepts instants, offset date-times and HH:MM labels, which are resolved against the base day and offset of the addressed scenario." <<Proposed_diffstackingCgmes_rdfdbTimesteps>> as Proposed_diffstackingCgmes_rdfdbTimesteps
  }
  rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
  rectangle "==CgmesDiffExport\\n\\nWrites the same recorded changes as IEC 61970-552 difference models, one per profile." <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
}
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database

PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblPython_network : <color:#8D8D8D>creates and passes Network handles
PypowsyblPython_network .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_event_recorder : <color:#8D8D8D>would extend: creates (event_recorder())
PypowsyblPython_api .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_rdf_database : <color:#8D8D8D>would extend: opens (connect_rdf_db / connect)
PypowsyblPython_network .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_rdf_database : <color:#8D8D8D>[...]
Proposed_diffstacking_pypowsyblPython_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_rdf_database : <color:#8D8D8D>to_rdf_updates(db, scenario, version, timestep)
PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>calls the extension module
PypowsyblPython_network .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>passes its opaque handle to
Proposed_diffstacking_pypowsyblPython_event_recorder .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>would extend: start/stop/export calls
Proposed_diffstacking_pypowsyblPython_rdf_database .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>would extend: upload, catalogue, load and update calls
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_database_config : <color:#8D8D8D>builds from the option map
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_connection : <color:#8D8D8D>opens and uploads CGMES files through
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>load / update of one snapshot; another scenario is a full reload
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>RdfDbExport: recorder events become a snapshot of the base scenario
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>per scenario: resolves labels, putFull / putAsDiff, listings
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbCheckpoint : <color:#8D8D8D>checkpoint()
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>variantRows(network): what every variant stands for, plus the refusals of the last operation
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>identity(network, db, scenario, variant) and the per-variant exports run inside RdfDbProvenance.inVariant
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>loadVariants(scenario, requests) and update(..., targetVariant): a day as variants, or one variant moved
Proposed_diffstackingCgmes_rdfdbRdf_database_config .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_connection : <color:#8D8D8D>is opened into
Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>registers uploaded full models in
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>fetches the scenario with
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_fetcher : <color:#8D8D8D>base graphs (cached)
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_provenance : <color:#8D8D8D>records the origin as
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>fetches and composes the chain with
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbDiff_update_planner : <color:#8D8D8D>plans NOOP | DIFF | FULL
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>rebuilds the target with
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>plans and materialises a snapshot with
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>dispatches an opted-in variant update or a bulk load to
Proposed_diffstackingCgmes_rdfdbRdf_db_provenance .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>holds one per bound variant; a NetworkListener keeps them in step with clone, overwrite and remove
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>checks base / linear rule
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>a versioned export targets a snapshot of
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>writes one history per variant inside
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>writes a new version through (snapshot node in the same request)
Proposed_diffstackingCgmes_rdfdbDiff_update_planner .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbModel_catalog : <color:#8D8D8D>chain query
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>fetches the chain with
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>every difference of every accepted path, in one request
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>the first snapshot of a day, converted once
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbGraph_uploader : <color:#8D8D8D>uploads the instance files of a root with
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator : <color:#8D8D8D>ingests a timestep from files with
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbTimesteps : <color:#8D8D8D>resolves labels and versions with
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>resolves the address in
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>asks what to fold from
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>one multi-side chain query: the target and every candidate source
Proposed_diffstackingCgmes_rdfdbVariant_scope .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>swaps the identity of, and captures it back
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>applies inside
Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>produces the DifferenceModel of
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>DifferenceModelSet
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>applies composed diff in place
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>applyToGraph on local store
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>applies with variantSafeOnly, or refuses with the reasons
Proposed_diffstackingCgmes_rdfdbGraph_fetcher .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>parallel GSP GET
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded SPARQL UPDATE (graphs + metadata)
Proposed_diffstackingCgmes_rdfdbModel_catalog .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>reads and writes the metadata graph of one scenario
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>fetch forward/reverse graphs
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one plan query: UNION of both ends, pdb:parent* to the root
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>COPY, three replace operations per difference, header rewrite, then the metadata
Proposed_diffstackingCgmes_rdfdbGraph_uploader .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one immutable graph per instance file
@enduml
`;case`pypowsybl_change_export`:return`@startuml
title "pypowsybl: recording and exporting network changes"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PypowsyblPython_network>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblJava_bindingsNetwork_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblPython_event_recorder>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblNetwork_event_recorder_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblNetwork_event_recording>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblNative_image_bridge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_event_recorder>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_diffstackingPartial_ssh_export>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==pypowsybl.network.Network\\n\\nNetwork._handle retains the opaque Java object handle across native calls." <<PypowsyblPython_network>> as PypowsyblPython_network
  rectangle "==NetworkCFunctions" <<PypowsyblJava_bindingsNetwork_c_functions>> as PypowsyblJava_bindingsNetwork_c_functions
  rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
  rectangle "==GraalVM native-image bridge\\n\\nPowsyblCaller and GraalVmGuard cross the native-image isolate boundary." <<PypowsyblNative_image_bridge>> as PypowsyblNative_image_bridge
}
rectangle "Diffstacking in pypowsybl (proposal)" <<Proposed_diffstacking_pypowsybl>> as Proposed_diffstacking_pypowsybl {
  skinparam RectangleBorderColor<<Proposed_diffstacking_pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking_pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking_pypowsybl>> dashed

  rectangle "==pypowsybl.network.NetworkEventRecorder\\n\\nContext manager; holds the handle of a Java NetworkEventRecording and exports partial SSH / CGMES difference models as strings, files or zip." <<Proposed_diffstacking_pypowsyblPython_event_recorder>> as Proposed_diffstacking_pypowsyblPython_event_recorder
  rectangle "==NetworkEventRecorderCFunctions" <<Proposed_diffstacking_pypowsyblNetwork_event_recorder_c_functions>> as Proposed_diffstacking_pypowsyblNetwork_event_recorder_c_functions
  rectangle "==NetworkEventRecording\\n\\nAttaches a NetworkEventRecorder to the Network, snapshots events, maps string options to export options." <<Proposed_diffstacking_pypowsyblNetwork_event_recording>> as Proposed_diffstacking_pypowsyblNetwork_event_recording
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==NetworkEventRecorder\\n\\nNetworkListener collecting the changes applied to a network as a replayable event log." <<Powsybl_coreIidmVariantsNetwork_event_recorder>> as Powsybl_coreIidmVariantsNetwork_event_recorder
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "==PartialSshExport\\n\\nWrites the objects affected by recorded changes as a partial SSH instance file." <<Proposed_diffstackingPartial_ssh_export>> as Proposed_diffstackingPartial_ssh_export
  rectangle "==CgmesDiffExport\\n\\nWrites the same recorded changes as IEC 61970-552 difference models, one per profile." <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
  rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
}

PypowsyblPython_network .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_event_recorder : <color:#8D8D8D>would extend: creates (event_recorder())
PypowsyblPython_network .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>passes its opaque handle to
Proposed_diffstacking_pypowsyblPython_event_recorder .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>would extend: start/stop/export calls
PypowsyblPybind_extension .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridge : <color:#8D8D8D>calls native-image entry points through
Proposed_diffstacking_pypowsyblNetwork_event_recorder_c_functions .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblNetwork_event_recording : <color:#8D8D8D>delegates to
Proposed_diffstacking_pypowsyblNetwork_event_recording .[#8D8D8D,thickness=2].> Powsybl_coreIidmVariantsNetwork_event_recorder : <color:#8D8D8D>would consume as-is: records with
Proposed_diffstacking_pypowsyblNetwork_event_recording .[#8D8D8D,thickness=2].> Proposed_diffstackingPartial_ssh_export : <color:#8D8D8D>exports partial SSH through
Powsybl_coreIidmVariantsNetwork_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstackingPartial_ssh_export : <color:#8D8D8D>would be consumed as-is: provides change log to
Proposed_diffstacking_pypowsyblNetwork_event_recording .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>exports difference models through
Powsybl_coreIidmVariantsNetwork_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>would be consumed as-is: provides change log to
PypowsyblJava_bindingsNetwork_c_functions .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>would consume as-is: update_from_* reaches it transparently via CgmesImport.update
@enduml
`;case`pypowsybl_rdf_database`:return`@startuml
title "pypowsybl: loading CGMES through an RDF database"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PypowsyblPython_network>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblPython_event_recorder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblPython_rdf_database>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_util>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblNative_image_bridge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_database_config>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbCheckpoint>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_sparql>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==pypowsybl.network.Network\\n\\nNetwork._handle retains the opaque Java object handle across native calls." <<PypowsyblPython_network>> as PypowsyblPython_network
  rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
  rectangle "==GraalVM native-image bridge\\n\\nPowsyblCaller and GraalVmGuard cross the native-image isolate boundary." <<PypowsyblNative_image_bridge>> as PypowsyblNative_image_bridge
}
rectangle "Diffstacking in pypowsybl (proposal)" <<Proposed_diffstacking_pypowsybl>> as Proposed_diffstacking_pypowsybl {
  skinparam RectangleBorderColor<<Proposed_diffstacking_pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking_pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking_pypowsybl>> dashed

  rectangle "==pypowsybl.network.NetworkEventRecorder\\n\\nContext manager; holds the handle of a Java NetworkEventRecording and exports partial SSH / CGMES difference models as strings, files or zip." <<Proposed_diffstacking_pypowsyblPython_event_recorder>> as Proposed_diffstacking_pypowsyblPython_event_recorder
  rectangle "==RdfDbCFunctions\\n\\ncreateRdfDbConnection, loadCgmesToRdfDb, loadNetworkFromRdfDb, updateNetworkFromRdfDb, exportNetworkEventsToRdfDb, createRdfDbCheckpoint, getNetworkRdfDbIdentity and the five catalogue entry points. Each carries the scenario, a version and a timestep. An update answers with the handle of an outcome, read back through getRdfDbUpdateInfo and, on the full route only, getRdfDbUpdateNetwork. The variant half adds three: loadNetworkVariantsFromRdfDb (three parallel string arrays - variant id, version, timestep - an empty string meaning let the library decide), getNetworkRdfDbVariants and exportNetworkEventsToRdfDbPerVariant; the variant of a single update or a single export travels in the option map that is already there, so no other signature moved." <<Proposed_diffstacking_pypowsyblRdf_db_c_functions>> as Proposed_diffstacking_pypowsyblRdf_db_c_functions
  rectangle "==pypowsybl.network.RdfDatabase\\n\\nContext manager over the handle of a Java RdfDbConnection: connect_rdf_db / connect, load_cgmes, checkpoint, clear, and the catalogue views scenarios / snapshots / versions / timesteps / models as dataframes. Every call names the scenario - the base grid model, in practice the day - as its second positional argument, and addresses a state inside it by version and timestep." <<Proposed_diffstacking_pypowsyblPython_rdf_database>> as Proposed_diffstacking_pypowsyblPython_rdf_database
  rectangle "==RdfDbUtil\\n\\nThe JVM-testable half of the RDF database bindings: option map to RdfDatabase, subset names to CgmesSubset, (scenario, version, timestep) strings to a SnapshotRef, update outcomes to routes (noop | diff | full | refused, and update for the legacy profile replacement), and the catalogue records to dataframes. It also owns the variant surface: loadVariants turns the three string arrays into VariantRequests, variantRows turns the bindings, the variants IIDM holds and the refusals of the last operation into one table with a status column, identity answers for one variant by running inside RdfDbProvenance.inVariant, and the two per-variant exports write each variant history after its own snapshot." <<Proposed_diffstacking_pypowsyblRdf_db_util>> as Proposed_diffstacking_pypowsyblRdf_db_util
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "cgmes-rdfdb" <<Proposed_diffstackingCgmes_rdfdb>> as Proposed_diffstackingCgmes_rdfdb {
    skinparam RectangleBorderColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
    skinparam RectangleFontColor<<Proposed_diffstackingCgmes_rdfdb>> #3b82f6
    skinparam RectangleBorderStyle<<Proposed_diffstackingCgmes_rdfdb>> dashed

    rectangle "==RdfDatabase\\n\\nImmutable description of a database: endpoint or the in-process memory backend, query mode, fetch and upload parallelism, gzip, cache. Says nothing about which data - that is the scenario, an argument of every call." <<Proposed_diffstackingCgmes_rdfdbRdf_database_config>> as Proposed_diffstackingCgmes_rdfdbRdf_database_config
    rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
    rectangle "==Checkpoint\\n\\nFolds the differences of a snapshot into full graphs on the database: COPY per profile, the three replace operations per difference, a header rewrite, then pdb:full on the existing snapshot. No new root, so the chain stays connected." <<Proposed_diffstackingCgmes_rdfdbCheckpoint>> as Proposed_diffstackingCgmes_rdfdbCheckpoint
    rectangle "==RdfDbConnection\\n\\nAn open connection: owns the SPARQL repository and the HTTP client, lists the scenarios of the database, uploads CGMES files into one, clears one." <<Proposed_diffstackingCgmes_rdfdbRdf_db_connection>> as Proposed_diffstackingCgmes_rdfdbRdf_db_connection
    rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
    rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
    rectangle "==RdfDbDifferenceSink / RdfDbExport\\n\\nThe DifferenceSink of the database: a recorded change becomes two immutable named graphs and one metadata node, written by a single guarded INSERT ... WHERE that also carries the linear-chain, duplicate and base-exists rules. Advances the identity of the sender afterwards." <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
  }
  rectangle "==TripleStoreRDF4JSparql\\n\\nTriple store implementation whose statements live in a remote SPARQL database: rdf4j SPARQLRepository for queries and a Graph Store Protocol client on the JDK HTTP client for whole-graph transfer. Scopes every graph and every query to one scenario." <<Proposed_diffstackingTriple_store_sparql>> as Proposed_diffstackingTriple_store_sparql
}
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database

PypowsyblPython_network .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_event_recorder : <color:#8D8D8D>would extend: creates (event_recorder())
PypowsyblPython_network .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_rdf_database : <color:#8D8D8D>[...]
Proposed_diffstacking_pypowsyblPython_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_rdf_database : <color:#8D8D8D>to_rdf_updates(db, scenario, version, timestep)
PypowsyblPython_network .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>passes its opaque handle to
Proposed_diffstacking_pypowsyblPython_event_recorder .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>would extend: start/stop/export calls
Proposed_diffstacking_pypowsyblPython_rdf_database .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>would extend: upload, catalogue, load and update calls
PypowsyblPybind_extension .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridge : <color:#8D8D8D>calls native-image entry points through
Proposed_diffstacking_pypowsyblRdf_db_c_functions .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>delegates to
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_database_config : <color:#8D8D8D>builds from the option map
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_connection : <color:#8D8D8D>opens and uploads CGMES files through
Proposed_diffstackingCgmes_rdfdbRdf_database_config .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_connection : <color:#8D8D8D>is opened into
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>load / update of one snapshot; another scenario is a full reload
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>per scenario: resolves labels, putFull / putAsDiff, listings
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>plans and materialises a snapshot with
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>resolves the address in
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>RdfDbExport: recorder events become a snapshot of the base scenario
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>writes a new version through (snapshot node in the same request)
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>a versioned export targets a snapshot of
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbCheckpoint : <color:#8D8D8D>checkpoint()
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>asks what to fold from
Proposed_diffstackingCgmes_rdfdbRdf_db_connection .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>opens scenario stores on
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>queries the server directly in remote mode
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>guarded SPARQL UPDATE, GSP PUT of graphs
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>plan query; Checkpoint COPY on the server
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded SPARQL UPDATE per snapshot; reads the snapshot nodes of one scenario
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one plan query: UNION of both ends, pdb:parent* to the root
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded SPARQL UPDATE (graphs + metadata)
Proposed_diffstackingCgmes_rdfdbCheckpoint .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>COPY, three replace operations per difference, header rewrite, then the metadata
Proposed_diffstackingTriple_store_sparql .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>SPARQL protocol + Graph Store Protocol
@enduml
`;case`pypowsybl_rdf_db_update_flow`:return`@startuml
title "update_from_rdf_db(db, scenario, version, timestep): noop | diff | full"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PypowsyblPython_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_util>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==pypowsybl.network.Network\\n\\nNetwork._handle retains the opaque Java object handle across native calls." <<PypowsyblPython_network>> as PypowsyblPython_network
rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
rectangle "==RdfDbCFunctions\\n\\ncreateRdfDbConnection, loadCgmesToRdfDb, loadNetworkFromRdfDb, updateNetworkFromRdfDb, exportNetworkEventsToRdfDb, createRdfDbCheckpoint, getNetworkRdfDbIdentity and the five catalogue entry points. Each carries the scenario, a version and a timestep. An update answers with the handle of an outcome, read back through getRdfDbUpdateInfo and, on the full route only, getRdfDbUpdateNetwork. The variant half adds three: loadNetworkVariantsFromRdfDb (three parallel string arrays - variant id, version, timestep - an empty string meaning let the library decide), getNetworkRdfDbVariants and exportNetworkEventsToRdfDbPerVariant; the variant of a single update or a single export travels in the option map that is already there, so no other signature moved." <<Proposed_diffstacking_pypowsyblRdf_db_c_functions>> as Proposed_diffstacking_pypowsyblRdf_db_c_functions
rectangle "==RdfDbUtil\\n\\nThe JVM-testable half of the RDF database bindings: option map to RdfDatabase, subset names to CgmesSubset, (scenario, version, timestep) strings to a SnapshotRef, update outcomes to routes (noop | diff | full | refused, and update for the legacy profile replacement), and the catalogue records to dataframes. It also owns the variant surface: loadVariants turns the three string arrays into VariantRequests, variantRows turns the bindings, the variants IIDM holds and the refusals of the last operation into one table with a status column, identity answers for one variant by running inside RdfDbProvenance.inVariant, and the two per-variant exports write each variant history after its own snapshot." <<Proposed_diffstacking_pypowsyblRdf_db_util>> as Proposed_diffstacking_pypowsyblRdf_db_util
rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
rectangle "==RdfDbNetworkLoader\\n\\nBuilds or updates an IIDM network from a scenario, in local query mode (bulk fetch, catalogs run locally) or remote (catalogs run on the server)." <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
rectangle "==RdfDbDiffSource + StatementCodec\\n\\nFetches the forward and reverse graphs of a whole chain in one query and decodes the triples back into CgmesStatements, the exact inverse of what the sink encoded." <<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>> as Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer

PypowsyblPython_network .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>update_network_from_rdf_db(network, db, scenario, version, timestep, ...)
PypowsyblPybind_extension .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_c_functions : <color:#8D8D8D>through the native image bridge
Proposed_diffstacking_pypowsyblRdf_db_c_functions .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>checkScenario, timestepOrNull, RdfDbUpdateOptions
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>resolve(version, timestep) against this scenario base day
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>update(network, db, SnapshotRef, options)
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>plan: one query; another scenario is FULL without a query
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>DIFF branch: fetch every difference of the path in one request
Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>composed difference per profile
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>applied in place; route DIFF_APPLIED
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>FULL branch: base graphs of the target scenario plus the chain
Proposed_diffstackingCgmes_rdfdbRdf_db_materializer .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>a new Java Network; route FULL_RELOAD
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> PypowsyblPython_network : <color:#8D8D8D>UpdateOutcome handle
@enduml
`;case`pypowsybl_rdf_db_export_flow`:return`@startuml
title "to_rdf_updates(db, scenario, version, timestep): recorder -> database snapshot"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstacking_pypowsyblPython_event_recorder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_util>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_rdf_database>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==pypowsybl.network.NetworkEventRecorder\\n\\nContext manager; holds the handle of a Java NetworkEventRecording and exports partial SSH / CGMES difference models as strings, files or zip." <<Proposed_diffstacking_pypowsyblPython_event_recorder>> as Proposed_diffstacking_pypowsyblPython_event_recorder
rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
rectangle "==RdfDbCFunctions\\n\\ncreateRdfDbConnection, loadCgmesToRdfDb, loadNetworkFromRdfDb, updateNetworkFromRdfDb, exportNetworkEventsToRdfDb, createRdfDbCheckpoint, getNetworkRdfDbIdentity and the five catalogue entry points. Each carries the scenario, a version and a timestep. An update answers with the handle of an outcome, read back through getRdfDbUpdateInfo and, on the full route only, getRdfDbUpdateNetwork. The variant half adds three: loadNetworkVariantsFromRdfDb (three parallel string arrays - variant id, version, timestep - an empty string meaning let the library decide), getNetworkRdfDbVariants and exportNetworkEventsToRdfDbPerVariant; the variant of a single update or a single export travels in the option map that is already there, so no other signature moved." <<Proposed_diffstacking_pypowsyblRdf_db_c_functions>> as Proposed_diffstacking_pypowsyblRdf_db_c_functions
rectangle "==RdfDbUtil\\n\\nThe JVM-testable half of the RDF database bindings: option map to RdfDatabase, subset names to CgmesSubset, (scenario, version, timestep) strings to a SnapshotRef, update outcomes to routes (noop | diff | full | refused, and update for the legacy profile replacement), and the catalogue records to dataframes. It also owns the variant surface: loadVariants turns the three string arrays into VariantRequests, variantRows turns the bindings, the variants IIDM holds and the refusals of the last operation into one table with a status column, identity answers for one variant by running inside RdfDbProvenance.inVariant, and the two per-variant exports write each variant history after its own snapshot." <<Proposed_diffstacking_pypowsyblRdf_db_util>> as Proposed_diffstacking_pypowsyblRdf_db_util
rectangle "==CgmesDiffExport\\n\\nWrites the same recorded changes as IEC 61970-552 difference models, one per profile." <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
rectangle "==RdfDbDifferenceSink / RdfDbExport\\n\\nThe DifferenceSink of the database: a recorded change becomes two immutable named graphs and one metadata node, written by a single guarded INSERT ... WHERE that also carries the linear-chain, duplicate and base-exists rules. Advances the identity of the sender afterwards." <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
rectangle "==SPARQL 1.1 graph database\\n\\nAn external RDF store holding CGMES named graphs: Apache Jena Fuseki, RDF4J server or GraphDB. Reached over SPARQL 1.1 Query and Update and, for bulk transfer of a whole named graph, the SPARQL 1.1 Graph Store Protocol. One database holds many scenarios - days, base grid models - side by side." <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database

Proposed_diffstacking_pypowsyblPython_event_recorder .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>export_network_events_to_rdf_db(recorder, db, scenario, version, timestep, options)
PypowsyblPybind_extension .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_c_functions : <color:#8D8D8D>through the native image bridge
Proposed_diffstacking_pypowsyblRdf_db_c_functions .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>reject the options the database decides; resolve the address
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>label-taking RdfDbExport.export(scenario, version, timestepText); core resolves the label against that scenario base day
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>DifferenceModelSet, one model per touched profile
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>one guarded SPARQL UPDATE
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>the stored models
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblPython_event_recorder : <color:#8D8D8D>model ids
@enduml
`;case`pypowsybl_rdf_db_variants_flow`:return`@startuml
title "from_rdf_db(timesteps=[...]): a day as the variants of one network"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PypowsyblPython_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_pypowsyblRdf_db_util>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_updater>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_scope>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVariant_binding>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==pypowsybl.network.Network\\n\\nNetwork._handle retains the opaque Java object handle across native calls." <<PypowsyblPython_network>> as PypowsyblPython_network
rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
rectangle "==RdfDbCFunctions\\n\\ncreateRdfDbConnection, loadCgmesToRdfDb, loadNetworkFromRdfDb, updateNetworkFromRdfDb, exportNetworkEventsToRdfDb, createRdfDbCheckpoint, getNetworkRdfDbIdentity and the five catalogue entry points. Each carries the scenario, a version and a timestep. An update answers with the handle of an outcome, read back through getRdfDbUpdateInfo and, on the full route only, getRdfDbUpdateNetwork. The variant half adds three: loadNetworkVariantsFromRdfDb (three parallel string arrays - variant id, version, timestep - an empty string meaning let the library decide), getNetworkRdfDbVariants and exportNetworkEventsToRdfDbPerVariant; the variant of a single update or a single export travels in the option map that is already there, so no other signature moved." <<Proposed_diffstacking_pypowsyblRdf_db_c_functions>> as Proposed_diffstacking_pypowsyblRdf_db_c_functions
rectangle "==RdfDbUtil\\n\\nThe JVM-testable half of the RDF database bindings: option map to RdfDatabase, subset names to CgmesSubset, (scenario, version, timestep) strings to a SnapshotRef, update outcomes to routes (noop | diff | full | refused, and update for the legacy profile replacement), and the catalogue records to dataframes. It also owns the variant surface: loadVariants turns the three string arrays into VariantRequests, variantRows turns the bindings, the variants IIDM holds and the refusals of the last operation into one table with a status column, identity answers for one variant by running inside RdfDbProvenance.inVariant, and the two per-variant exports write each variant history after its own snapshot." <<Proposed_diffstacking_pypowsyblRdf_db_util>> as Proposed_diffstacking_pypowsyblRdf_db_util
rectangle "==SnapshotCatalog (per scenario)\\n\\nThe snapshots of one scenario: putFull writes the root out of instance files, putDiff a new version on the head of a timestep. One root per scenario, a linear version chain, and every rule enforced by the guard of the write rather than by a check before it. verify() re-checks depth, state and the fact that nothing points out of the scenario." <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
rectangle "==VariantUpdater + VariantBulkLoader\\n\\nCreate or move one variant, and load a whole day into many. Everything that can refuse runs before anything is created: the scenario check without a query, the one multi-side chain query, the stored pdb:variantSafe flags. A target that cannot be reached inside a variant is VARIANT_REFUSED with reasons and every variant untouched, never a rebuild of the network." <<Proposed_diffstackingCgmes_rdfdbVariant_updater>> as Proposed_diffstackingCgmes_rdfdbVariant_updater
rectangle "==VersionGraph (per scenario)\\n\\nThe planner: one query whose UNION binds both ends and whose pdb:parent* walks each of them to the root, then a lowest-common-ancestor on the two chains. Answers NOOP, DIFF with the path, or FULL with the reasons. A snapshot of another scenario is FULL without any query at all." <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
rectangle "==RdfDbMaterializer\\n\\nThe slow route that always works: base graphs into a local store, the differences of the chain folded into one and applied as plain RDF, then the unchanged CGMES conversion. Registers the identity of the target on the result. Per profile: each one starts at the nearest ancestor snapshot holding a full graph of it." <<Proposed_diffstackingCgmes_rdfdbRdf_db_materializer>> as Proposed_diffstackingCgmes_rdfdbRdf_db_materializer
rectangle "==RdfDbDiffSource + StatementCodec\\n\\nFetches the forward and reverse graphs of a whole chain in one query and decodes the triples back into CgmesStatements, the exact inverse of what the sink encoded." <<Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source>> as Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source
rectangle "==VariantScope\\n\\nMakes the network be one of its variants for the duration of an operation: the CgmesMetadataModels extension, the case date and the snapshot identity of that variant are swapped in, the working variant is selected, and the primary is put back afterwards. That is why the planner, the exporter and the Supersedes of a written difference are correct for a variant although none of them knows variants exist." <<Proposed_diffstackingCgmes_rdfdbVariant_scope>> as Proposed_diffstackingCgmes_rdfdbVariant_scope
rectangle "==VariantBinding\\n\\nWhat one IIDM variant of a network stands for: the snapshot address, its IRI, the stored model per profile, the case date of that moment and which variant it was cloned from. Kept on the provenance, in step with clone, overwrite and remove through a NetworkListener, so a binding never outlives its variant." <<Proposed_diffstackingCgmes_rdfdbVariant_binding>> as Proposed_diffstackingCgmes_rdfdbVariant_binding

PypowsyblPython_network .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>load_network_variants_from_rdf_db(db, scenario, variant_ids, versions, timesteps, ...)
PypowsyblPybind_extension .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_c_functions : <color:#8D8D8D>through the native image bridge
Proposed_diffstacking_pypowsyblRdf_db_c_functions .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>checkScenario; the three arrays become VariantRequests
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>resolve(version, timestep) per request, against this scenario base day
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_updater : <color:#8D8D8D>loadVariants(db, scenario, requests, options)
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>one chain query for every requested snapshot at once
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_materializer : <color:#8D8D8D>the first requested snapshot, converted once; it becomes the network and its primary variant
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_diff_source : <color:#8D8D8D>every difference of every accepted path, in one request
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_scope : <color:#8D8D8D>per target: clone the nearest bound variant, then apply inside its scope
Proposed_diffstackingCgmes_rdfdbVariant_scope .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVariant_binding : <color:#8D8D8D>the variant now stands for that snapshot
Proposed_diffstackingCgmes_rdfdbVariant_updater .[#8D8D8D,thickness=2].> Proposed_diffstacking_pypowsyblRdf_db_util : <color:#8D8D8D>the network, with one variant per snapshot that was reached
Proposed_diffstacking_pypowsyblRdf_db_util .[#8D8D8D,thickness=2].> PypowsyblPython_network : <color:#8D8D8D>one Java handle; the working variant is the primary
@enduml
`;case`diffstacking_slow_route`:return`@startuml
title "Diffstacking: what happens to a difference the fast route refuses"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmIoExchange_formats>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_db_merge_fallback>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstacking_opencgmes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingTriple_store_diff_applier>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model_format>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
      skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

      rectangle "==Supported exchange formats" <<Powsybl_coreIidmIoExchange_formats>> as Powsybl_coreIidmIoExchange_formats
    }
  }
  rectangle "CGMES conversion" <<Powsybl_coreCgmes>> as Powsybl_coreCgmes {
    skinparam RectangleBorderColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreCgmes>> dashed

    rectangle "==Conversion.update (SSH update workflow)\\n\\nThe ordinary CGMES update: SPARQL queries over the loaded instance files, then XxxConversion.update per equipment." <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
    rectangle "==Triple store (rdf4j)\\n\\nRDF store the CGMES import loads instance files into and queries through SPARQL." <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
  }
}
rectangle "==RDF database merge fallback (slow route without files)\\n\\nWhen a path of differences cannot be applied in place, the base graphs are already in the RDF database: the differences are merged there and the conversion is run again, so no original file has to be kept anywhere." <<Proposed_diffstacking_db_merge_fallback>> as Proposed_diffstacking_db_merge_fallback
rectangle "==OpenCGMES (general difference model application)\\n\\nThird party RDF tooling that turns an arbitrary difference model into a full model (CimDatasetGraph.differenceModelToFullModel, FastDeltaGraph + CimXmlWriter). The reference the difference model file structure is validated against, and where general difference application belongs." <<Proposed_diffstacking_opencgmes>> as Proposed_diffstacking_opencgmes
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
  rectangle "==TripleStoreDiffApplier\\n\\nReplaces the property values a difference states inside one named graph, through SPARQL UPDATE only." <<Proposed_diffstackingTriple_store_diff_applier>> as Proposed_diffstackingTriple_store_diff_applier
  rectangle "==CGMES Difference Model\\n\\nIEC 61970-552 difference model document, one per CGMES profile." <<Proposed_diffstackingDifference_model_format>> as Proposed_diffstackingDifference_model_format
}

Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>would extend: runs, scoped to the named equipment
Proposed_diffstackingTriple_store_diff_applier .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>would consume as-is: replaces property values in
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>queries
Proposed_diffstacking_db_merge_fallback .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>would be chosen by the decision function of
Proposed_diffstacking_db_merge_fallback .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_diff_applier : <color:#8D8D8D>would reuse as-is
Proposed_diffstacking_db_merge_fallback .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>would reuse as-is
Proposed_diffstacking_opencgmes .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model_format : <color:#8D8D8D>reads and writes the same format as
@enduml
`;case`detailed_ac_dc_grid_lifecycle`:return`@startuml
title "Detailed AC-DC Grid: IIDM, Open Load Flow, and Python"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmDc_gridDc_node>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_ground>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_bus>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_line>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_switch>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmIoDc_format_io>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PypowsyblAc_dc_opf>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblDc_dataframes>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_connectivity>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_terminal>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmHvdcAc_dc_converters>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapterAc_dc_loader>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowCoupled_ac_dc_lf_network>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_network_parameter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_newton_raphson>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_result_mapping>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "DC grid equipment" <<Powsybl_coreIidmDc_grid>> as Powsybl_coreIidmDc_grid {
      skinparam RectangleBorderColor<<Powsybl_coreIidmDc_grid>> #6366f1
      skinparam RectangleFontColor<<Powsybl_coreIidmDc_grid>> #6366f1
      skinparam RectangleBorderStyle<<Powsybl_coreIidmDc_grid>> dashed

      rectangle "==DcNode" <<Powsybl_coreIidmDc_gridDc_node>> as Powsybl_coreIidmDc_gridDc_node
      rectangle "==DcGround" <<Powsybl_coreIidmDc_gridDc_ground>> as Powsybl_coreIidmDc_gridDc_ground
      rectangle "==DcBus" <<Powsybl_coreIidmDc_gridDc_bus>> as Powsybl_coreIidmDc_gridDc_bus
      rectangle "==DcLine" <<Powsybl_coreIidmDc_gridDc_line>> as Powsybl_coreIidmDc_gridDc_line
      rectangle "==DcSwitch" <<Powsybl_coreIidmDc_gridDc_switch>> as Powsybl_coreIidmDc_gridDc_switch
      rectangle "==DC connectivity and mutations\\n\\nDC connection state and topology changes are held on the shared Network." <<Powsybl_coreIidmDc_gridDc_connectivity>> as Powsybl_coreIidmDc_gridDc_connectivity
      rectangle "==DcTerminal" <<Powsybl_coreIidmDc_gridDc_terminal>> as Powsybl_coreIidmDc_gridDc_terminal
    }
    rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
      skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

      rectangle "==DC-capable format I/O\\n\\nCGMES and IIDM format providers construct and serialize detailed DC equipment where supported." <<Powsybl_coreIidmIoDc_format_io>> as Powsybl_coreIidmIoDc_format_io
    }
    rectangle "HVDC equipment" <<Powsybl_coreIidmHvdc>> as Powsybl_coreIidmHvdc {
      skinparam RectangleBorderColor<<Powsybl_coreIidmHvdc>> #6366f1
      skinparam RectangleFontColor<<Powsybl_coreIidmHvdc>> #6366f1
      skinparam RectangleBorderStyle<<Powsybl_coreIidmHvdc>> dashed

      rectangle "==IIDM AC/DC converters\\n\\nLCC and VSC converters couple AC terminals to DC terminals, with control modes, losses, and active-power bounds." <<Powsybl_coreIidmHvdcAc_dc_converters>> as Powsybl_coreIidmHvdcAc_dc_converters
    }
    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
  }
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==AC/DC OPF prototype\\n\\nA separate Python optimization model that adds DC voltages, currents, converter constraints, and an AC/DC objective." <<PypowsyblAc_dc_opf>> as PypowsyblAc_dc_opf
  rectangle "==Network DC DataFrames and mutation APIs\\n\\nExposes DC equipment, converter attributes, connection state, and solved values through pandas DataFrames." <<PypowsyblDc_dataframes>> as PypowsyblDc_dataframes
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "IIDM to LfNetwork adapter" <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowLf_network_adapter>> dashed

    rectangle "==IIDM to coupled LfNetwork loader\\n\\nBuilds AC buses, DC buses, DC branches, and converter representations." <<Powsybl_open_loadflowLf_network_adapterAc_dc_loader>> as Powsybl_open_loadflowLf_network_adapterAc_dc_loader
  }
  rectangle "==Coupled LfNetwork\\n\\nSolver-facing AC and DC state, including synchronous components and converter couplings." <<Powsybl_open_loadflowCoupled_ac_dc_lf_network>> as Powsybl_open_loadflowCoupled_ac_dc_lf_network
  rectangle "AC/DC load-flow engines" <<Powsybl_open_loadflowAc_dc_loadflow_engines>> as Powsybl_open_loadflowAc_dc_loadflow_engines {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowAc_dc_loadflow_engines>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowAc_dc_loadflow_engines>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowAc_dc_loadflow_engines>> dashed

    rectangle "==acDcNetwork parameter\\n\\nSelects the detailed AC/DC load-flow formulation." <<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_network_parameter>> as Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_network_parameter
    rectangle "==AC/DC Newton-Raphson execution\\n\\nSolves the coupled AC/DC equation system. Classic DC load flow and alternate AC solvers are not used in this mode." <<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_newton_raphson>> as Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_newton_raphson
  }
  rectangle "==IIDM state and Core result mapping\\n\\nWrites converged electrical state back to IIDM and creates LoadFlow results." <<Powsybl_open_loadflowAc_dc_result_mapping>> as Powsybl_open_loadflowAc_dc_result_mapping
}

Powsybl_coreIidmDc_gridDc_connectivity .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>changes the active topology of
Powsybl_coreIidmDc_gridDc_terminal .[#8D8D8D,thickness=2].> Powsybl_coreIidmHvdcAc_dc_converters : <color:#8D8D8D>connects DC topology through
Powsybl_coreIidmHvdcAc_dc_converters .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapterAc_dc_loader : <color:#8D8D8D>maps converter controls and limits into
Powsybl_open_loadflowLf_network_adapterAc_dc_loader .[#8D8D8D,thickness=2].> Powsybl_open_loadflowCoupled_ac_dc_lf_network : <color:#8D8D8D>builds
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_network_parameter .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_newton_raphson : <color:#8D8D8D>selects
Powsybl_open_loadflowCoupled_ac_dc_lf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_newton_raphson : <color:#8D8D8D>supplies coupled equations to
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_dc_newton_raphson .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_result_mapping : <color:#8D8D8D>produces converged state for
Powsybl_open_loadflowAc_dc_result_mapping .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>updates the shared Network
PypowsyblDc_dataframes .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>reads and mutates through the native bridge
PypowsyblAc_dc_opf .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>optimizes a separate model over
PypowsyblAc_dc_opf .[#8D8D8D,thickness=2].> PypowsyblDc_dataframes : <color:#8D8D8D>reads inputs and writes solved values through
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmHvdc : <color:#8D8D8D>owns DC equipment
Powsybl_coreIidmIoDc_format_io .[#8D8D8D,thickness=2].> Powsybl_coreIidmDc_grid : <color:#8D8D8D>constructs and serializes
Powsybl_coreIidmDc_grid .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapterAc_dc_loader : <color:#8D8D8D>maps the explicit DC topology into
@enduml
`;case`contingency_and_corrective_action_flow`:return`@startuml
title "Contingency and Corrective-Action State Flow"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreSecurity_analysis_api>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsContingencies_and_contexts>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsAction_definitions>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsOperator_strategies>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsState_monitors>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsSelected_loading_limits>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowContingency_propagation>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionLf_actions_and_strategies>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPre_contingency_state>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPost_contingency_state>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPost_action_state>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionLimit_violation_evaluator>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Security Analysis API\\n\\nSecurityAnalysis.Runner and the SecurityAnalysisProvider SPI." <<Powsybl_coreSecurity_analysis_api>> as Powsybl_coreSecurity_analysis_api
  rectangle "Study contracts" <<Powsybl_coreStudy_contracts>> as Powsybl_coreStudy_contracts {
    skinparam RectangleBorderColor<<Powsybl_coreStudy_contracts>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreStudy_contracts>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreStudy_contracts>> dashed

    rectangle "==Contingencies and contexts\\n\\nContingency lists, N/N-1 contexts, and affected equipment." <<Powsybl_coreStudy_contractsContingencies_and_contexts>> as Powsybl_coreStudy_contractsContingencies_and_contexts
    rectangle "==Action definitions\\n\\nSwitch, terminal connection, generator, load, HVDC, and tap-changer actions." <<Powsybl_coreStudy_contractsAction_definitions>> as Powsybl_coreStudy_contractsAction_definitions
    rectangle "==Operator strategies and conditions\\n\\nConditional actions selected for a contingency context." <<Powsybl_coreStudy_contractsOperator_strategies>> as Powsybl_coreStudy_contractsOperator_strategies
    rectangle "==StateMonitor definitions\\n\\nSelect branches, buses, and three-winding transformers recorded for each context." <<Powsybl_coreStudy_contractsState_monitors>> as Powsybl_coreStudy_contractsState_monitors
    rectangle "==Selected LoadingLimits\\n\\nActive IIDM limit groups and their associated thresholds." <<Powsybl_coreStudy_contractsSelected_loading_limits>> as Powsybl_coreStudy_contractsSelected_loading_limits
  }
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==Contingency propagation\\n\\nPropagatedContingency, ContingencyTripping, and node/breaker traversal." <<Powsybl_open_loadflowContingency_propagation>> as Powsybl_open_loadflowContingency_propagation
  rectangle "Study execution" <<Powsybl_open_loadflowStudy_execution>> as Powsybl_open_loadflowStudy_execution {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowStudy_execution>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowStudy_execution>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowStudy_execution>> dashed

    rectangle "==LfAction and LfOperatorStrategy\\n\\nValidates and translates Core actions and conditional strategies against LfNetwork." <<Powsybl_open_loadflowStudy_executionLf_actions_and_strategies>> as Powsybl_open_loadflowStudy_executionLf_actions_and_strategies
    rectangle "==Pre-contingency N state\\n\\nBase calculation, limit evaluation, and monitored result baseline." <<Powsybl_open_loadflowStudy_executionPre_contingency_state>> as Powsybl_open_loadflowStudy_executionPre_contingency_state
    rectangle "==Post-contingency N-1 state\\n\\nCalculation after the propagated outage." <<Powsybl_open_loadflowStudy_executionPost_contingency_state>> as Powsybl_open_loadflowStudy_executionPost_contingency_state
    rectangle "==Post-action state\\n\\nCalculation after a selected operator strategy applies curative actions." <<Powsybl_open_loadflowStudy_executionPost_action_state>> as Powsybl_open_loadflowStudy_executionPost_action_state
    rectangle "==Limit violation evaluation\\n\\nEvaluates active loading limits and reductions for each calculated state." <<Powsybl_open_loadflowStudy_executionLimit_violation_evaluator>> as Powsybl_open_loadflowStudy_executionLimit_violation_evaluator
  }
  rectangle "IIDM state and core-result mapping" <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowState_and_result_mapping>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowState_and_result_mapping>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowState_and_result_mapping>> dashed

    rectangle "==Core study result mapping\\n\\nBuilds security results and supported sensitivity-context results." <<Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping>> as Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping
  }
}

Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsContingencies_and_contexts : <color:#8D8D8D>accepts
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsAction_definitions : <color:#8D8D8D>accepts
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsOperator_strategies : <color:#8D8D8D>accepts
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsState_monitors : <color:#8D8D8D>accepts
Powsybl_coreStudy_contractsContingencies_and_contexts .[#8D8D8D,thickness=2].> Powsybl_open_loadflowContingency_propagation : <color:#8D8D8D>maps to
Powsybl_coreStudy_contractsAction_definitions .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLf_actions_and_strategies : <color:#8D8D8D>maps to
Powsybl_coreStudy_contractsOperator_strategies .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLf_actions_and_strategies : <color:#8D8D8D>maps to
Powsybl_coreStudy_contractsState_monitors .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPre_contingency_state : <color:#8D8D8D>selects output from
Powsybl_coreStudy_contractsState_monitors .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_contingency_state : <color:#8D8D8D>selects output from
Powsybl_open_loadflowContingency_propagation .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_contingency_state : <color:#8D8D8D>applies outages for
Powsybl_open_loadflowStudy_executionPre_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_contingency_state : <color:#8D8D8D>provides the N baseline for
Powsybl_coreStudy_contractsState_monitors .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_action_state : <color:#8D8D8D>selects output from
Powsybl_open_loadflowStudy_executionLf_actions_and_strategies .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_action_state : <color:#8D8D8D>selects and applies curative actions for
Powsybl_open_loadflowStudy_executionPost_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_action_state : <color:#8D8D8D>provides the N-1 state for
Powsybl_coreStudy_contractsSelected_loading_limits .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLimit_violation_evaluator : <color:#8D8D8D>supplies active groups to
Powsybl_open_loadflowStudy_executionPre_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLimit_violation_evaluator : <color:#8D8D8D>evaluates
Powsybl_open_loadflowStudy_executionPost_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLimit_violation_evaluator : <color:#8D8D8D>evaluates
Powsybl_open_loadflowStudy_executionPost_action_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLimit_violation_evaluator : <color:#8D8D8D>evaluates
Powsybl_open_loadflowStudy_executionLimit_violation_evaluator .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping : <color:#8D8D8D>adds violations to
Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping .[#8D8D8D,thickness=2].> Powsybl_coreSecurity_analysis_api : <color:#8D8D8D>returns results through
@enduml
`;case`analysis_configuration_and_result_selection`:return`@startuml
title "Analysis Configuration and Result Selection"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Study_configuration_sources>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Powsybl_coreSecurity_analysis_api>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreSensitivity_api>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PypowsyblPython_study_parameters>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblNative_image_bridgeNative_parameter_abi>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblPandas_study_results>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreStudy_contractsCommon_study_parameters>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsState_monitors>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsSelected_loading_limits>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreStudy_contractsModified_result_parameters>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionProvider_parameter_extensions>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPre_contingency_state>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPost_contingency_state>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionLimit_violation_evaluator>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "==Configuration sources\\n\\nApplication code, JSON configuration, and PlatformConfig defaults." <<Study_configuration_sources>> as Study_configuration_sources
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Security Analysis API\\n\\nSecurityAnalysis.Runner and the SecurityAnalysisProvider SPI." <<Powsybl_coreSecurity_analysis_api>> as Powsybl_coreSecurity_analysis_api
  rectangle "==Sensitivity Analysis API\\n\\nSensitivityAnalysis.Runner and the SensitivityAnalysisProvider SPI." <<Powsybl_coreSensitivity_api>> as Powsybl_coreSensitivity_api
  rectangle "Study contracts" <<Powsybl_coreStudy_contracts>> as Powsybl_coreStudy_contracts {
    skinparam RectangleBorderColor<<Powsybl_coreStudy_contracts>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreStudy_contracts>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreStudy_contracts>> dashed

    rectangle "==Core study parameters\\n\\nLoadFlowParameters, SecurityAnalysisParameters, and SensitivityAnalysisParameters." <<Powsybl_coreStudy_contractsCommon_study_parameters>> as Powsybl_coreStudy_contractsCommon_study_parameters
    rectangle "==StateMonitor definitions\\n\\nSelect branches, buses, and three-winding transformers recorded for each context." <<Powsybl_coreStudy_contractsState_monitors>> as Powsybl_coreStudy_contractsState_monitors
    rectangle "==Selected LoadingLimits\\n\\nActive IIDM limit groups and their associated thresholds." <<Powsybl_coreStudy_contractsSelected_loading_limits>> as Powsybl_coreStudy_contractsSelected_loading_limits
    rectangle "==Modified monitored-elements parameters\\n\\nPower and voltage deltas that suppress unchanged N-1 monitored results." <<Powsybl_coreStudy_contractsModified_result_parameters>> as Powsybl_coreStudy_contractsModified_result_parameters
  }
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==Python study parameter facades\\n\\nPython load-flow, security-analysis, and sensitivity-analysis parameters." <<PypowsyblPython_study_parameters>> as PypowsyblPython_study_parameters
  rectangle "GraalVM native-image bridge" <<PypowsyblNative_image_bridge>> as PypowsyblNative_image_bridge {
    skinparam RectangleBorderColor<<PypowsyblNative_image_bridge>> #3b82f6
    skinparam RectangleFontColor<<PypowsyblNative_image_bridge>> #3b82f6
    skinparam RectangleBorderStyle<<PypowsyblNative_image_bridge>> dashed

    rectangle "==Native parameter and result ABI\\n\\npybind11, GraalVM C entry points, and Java parameter mappers." <<PypowsyblNative_image_bridgeNative_parameter_abi>> as PypowsyblNative_image_bridgeNative_parameter_abi
  }
  rectangle "==pandas study result adapters\\n\\nDataFrames for monitored state, violations, factors, and statuses." <<PypowsyblPandas_study_results>> as PypowsyblPandas_study_results
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "Study execution" <<Powsybl_open_loadflowStudy_execution>> as Powsybl_open_loadflowStudy_execution {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowStudy_execution>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowStudy_execution>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowStudy_execution>> dashed

    rectangle "==OLF provider parameter extensions\\n\\nOpen Load Flow, security-analysis, and sensitivity-analysis extensions." <<Powsybl_open_loadflowStudy_executionProvider_parameter_extensions>> as Powsybl_open_loadflowStudy_executionProvider_parameter_extensions
    rectangle "==Pre-contingency N state\\n\\nBase calculation, limit evaluation, and monitored result baseline." <<Powsybl_open_loadflowStudy_executionPre_contingency_state>> as Powsybl_open_loadflowStudy_executionPre_contingency_state
    rectangle "==Post-contingency N-1 state\\n\\nCalculation after the propagated outage." <<Powsybl_open_loadflowStudy_executionPost_contingency_state>> as Powsybl_open_loadflowStudy_executionPost_contingency_state
    rectangle "==Limit violation evaluation\\n\\nEvaluates active loading limits and reductions for each calculated state." <<Powsybl_open_loadflowStudy_executionLimit_violation_evaluator>> as Powsybl_open_loadflowStudy_executionLimit_violation_evaluator
  }
  rectangle "IIDM state and core-result mapping" <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowState_and_result_mapping>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowState_and_result_mapping>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowState_and_result_mapping>> dashed

    rectangle "==Core study result mapping\\n\\nBuilds security results and supported sensitivity-context results." <<Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping>> as Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping
  }
}

PypowsyblPython_study_parameters .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridgeNative_parameter_abi : <color:#8D8D8D>marshals through
PypowsyblNative_image_bridgeNative_parameter_abi .[#8D8D8D,thickness=2].> PypowsyblPandas_study_results : <color:#8D8D8D>returns result series through
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridgeNative_parameter_abi : <color:#8D8D8D>returns through
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridgeNative_parameter_abi : <color:#8D8D8D>returns through
Study_configuration_sources .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsCommon_study_parameters : <color:#8D8D8D>sets defaults and JSON values for
PypowsyblNative_image_bridgeNative_parameter_abi .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsCommon_study_parameters : <color:#8D8D8D>maps Python values into
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsCommon_study_parameters : <color:#8D8D8D>runs with
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsCommon_study_parameters : <color:#8D8D8D>runs with
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsState_monitors : <color:#8D8D8D>accepts
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsState_monitors : <color:#8D8D8D>accepts
Powsybl_coreStudy_contractsCommon_study_parameters .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsModified_result_parameters : <color:#8D8D8D>contains
Study_configuration_sources .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionProvider_parameter_extensions : <color:#8D8D8D>sets provider-specific values for
Powsybl_coreStudy_contractsCommon_study_parameters .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionProvider_parameter_extensions : <color:#8D8D8D>carries extensions to
Powsybl_coreStudy_contractsState_monitors .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPre_contingency_state : <color:#8D8D8D>selects output from
Powsybl_open_loadflowStudy_executionProvider_parameter_extensions .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPre_contingency_state : <color:#8D8D8D>configures
Powsybl_coreStudy_contractsState_monitors .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_contingency_state : <color:#8D8D8D>selects output from
Powsybl_open_loadflowStudy_executionPre_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_contingency_state : <color:#8D8D8D>provides the N baseline for
Powsybl_coreStudy_contractsSelected_loading_limits .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLimit_violation_evaluator : <color:#8D8D8D>supplies active groups to
Powsybl_open_loadflowStudy_executionPre_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLimit_violation_evaluator : <color:#8D8D8D>evaluates
Powsybl_open_loadflowStudy_executionPost_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionLimit_violation_evaluator : <color:#8D8D8D>evaluates
Powsybl_open_loadflowStudy_executionLimit_violation_evaluator .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping : <color:#8D8D8D>adds violations to
Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping .[#8D8D8D,thickness=2].> Powsybl_coreSecurity_analysis_api : <color:#8D8D8D>returns results through
Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping .[#8D8D8D,thickness=2].> Powsybl_coreSensitivity_api : <color:#8D8D8D>returns results through
@enduml
`;case`olf_branch_monitored_result_filter`:return`@startuml
title "Open Load Flow branch filter-monitored-results: monitored-result delta filter"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreStudy_contractsCommon_study_parameters>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPre_contingency_state>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Powsybl_coreStudy_contractsModified_result_parameters>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPost_contingency_state>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Powsybl_open_loadflowStudy_executionPost_action_state>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Proposed_olf_branchesMonitored_result_filter>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #737373
  skinparam RectangleFontColor<<Powsybl_core>> #737373
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "Study contracts" <<Powsybl_coreStudy_contracts>> as Powsybl_coreStudy_contracts {
    skinparam RectangleBorderColor<<Powsybl_coreStudy_contracts>> #737373
    skinparam RectangleFontColor<<Powsybl_coreStudy_contracts>> #737373
    skinparam RectangleBorderStyle<<Powsybl_coreStudy_contracts>> dashed

    rectangle "==Core study parameters\\n\\nLoadFlowParameters, SecurityAnalysisParameters, and SensitivityAnalysisParameters." <<Powsybl_coreStudy_contractsCommon_study_parameters>> as Powsybl_coreStudy_contractsCommon_study_parameters
    rectangle "==Modified monitored-elements parameters\\n\\nPower and voltage deltas that suppress unchanged N-1 monitored results." <<Powsybl_coreStudy_contractsModified_result_parameters>> as Powsybl_coreStudy_contractsModified_result_parameters
  }
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #737373
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #737373
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "Study execution" <<Powsybl_open_loadflowStudy_execution>> as Powsybl_open_loadflowStudy_execution {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowStudy_execution>> #737373
    skinparam RectangleFontColor<<Powsybl_open_loadflowStudy_execution>> #737373
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowStudy_execution>> dashed

    rectangle "==Pre-contingency N state\\n\\nBase calculation, limit evaluation, and monitored result baseline." <<Powsybl_open_loadflowStudy_executionPre_contingency_state>> as Powsybl_open_loadflowStudy_executionPre_contingency_state
    rectangle "==Post-contingency N-1 state\\n\\nCalculation after the propagated outage." <<Powsybl_open_loadflowStudy_executionPost_contingency_state>> as Powsybl_open_loadflowStudy_executionPost_contingency_state
    rectangle "==Post-action state\\n\\nCalculation after a selected operator strategy applies curative actions." <<Powsybl_open_loadflowStudy_executionPost_action_state>> as Powsybl_open_loadflowStudy_executionPost_action_state
  }
  rectangle "IIDM state and core-result mapping" <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowState_and_result_mapping>> #737373
    skinparam RectangleFontColor<<Powsybl_open_loadflowState_and_result_mapping>> #737373
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowState_and_result_mapping>> dashed

    rectangle "==Core study result mapping\\n\\nBuilds security results and supported sensitivity-context results." <<Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping>> as Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping
  }
}
rectangle "Open Load Flow pull-request branches (proposal)" <<Proposed_olf_branches>> as Proposed_olf_branches {
  skinparam RectangleBorderColor<<Proposed_olf_branches>> #737373
  skinparam RectangleFontColor<<Proposed_olf_branches>> #737373
  skinparam RectangleBorderStyle<<Proposed_olf_branches>> dashed

  rectangle "==Monitored-result delta filter\\n\\nOmits unchanged monitored branch, bus, and transformer results from N-1 output, configured by the upstream ModifiedMonitoredElementsParameters of powsybl-core. Branch filter-monitored-results." <<Proposed_olf_branchesMonitored_result_filter>> as Proposed_olf_branchesMonitored_result_filter
}

Powsybl_coreStudy_contractsCommon_study_parameters .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contractsModified_result_parameters : <color:#8D8D8D>contains
Powsybl_open_loadflowStudy_executionPre_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_contingency_state : <color:#8D8D8D>provides the N baseline for
Powsybl_open_loadflowStudy_executionPost_contingency_state .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_executionPost_action_state : <color:#8D8D8D>provides the N-1 state for
Powsybl_coreStudy_contractsModified_result_parameters .[#8D8D8D,thickness=2].> Proposed_olf_branchesMonitored_result_filter : <color:#8D8D8D>would be consumed as-is: configures
Powsybl_open_loadflowStudy_executionPre_contingency_state .[#8D8D8D,thickness=2].> Proposed_olf_branchesMonitored_result_filter : <color:#8D8D8D>would extend: compares N results through
Powsybl_open_loadflowStudy_executionPost_contingency_state .[#8D8D8D,thickness=2].> Proposed_olf_branchesMonitored_result_filter : <color:#8D8D8D>would extend: filters N-1 results through
Powsybl_open_loadflowStudy_executionPost_action_state .[#8D8D8D,thickness=2].> Proposed_olf_branchesMonitored_result_filter : <color:#8D8D8D>would extend: filters post-action results through
Proposed_olf_branchesMonitored_result_filter .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mappingStudy_result_mapping : <color:#8D8D8D>would extend: adds selected monitored results to
@enduml
`;case`olf_branch_network_cache`:return`@startuml
title "DC NetworkCache"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_olf_branchesCache_input>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheIidm_change_events>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheChange_classifier>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Proposed_olf_branchesAc_cache_value>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposed_olf_branchesDc_cache_value>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheAc_fast_restart>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
skinparam rectangle<<Proposed_olf_branchesDc_fast_restart>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mapping>>{
  BackgroundColor #737373
  FontColor #fafafa
  BorderColor #525252
}
rectangle "Open Load Flow pull-request branches (proposal)" <<Proposed_olf_branches>> as Proposed_olf_branches {
  skinparam RectangleBorderColor<<Proposed_olf_branches>> #3b82f6
  skinparam RectangleFontColor<<Proposed_olf_branches>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_olf_branches>> dashed

  rectangle "==NetworkCache.LfInput\\n\\nCaptures load-flow and Open Load Flow parameters used to decide whether a cached entry remains valid. Branch dc_lf_network_cache." <<Proposed_olf_branchesCache_input>> as Proposed_olf_branchesCache_input
  rectangle "==NetworkCache.AcLfValue\\n\\nHolds the cached AC load-flow context and LfNetwork value. Branch dc_lf_network_cache." <<Proposed_olf_branchesAc_cache_value>> as Proposed_olf_branchesAc_cache_value
  rectangle "==NetworkCache.DcLfValue\\n\\nHolds the cached DC load-flow context and LfNetwork value. Branch dc_lf_network_cache." <<Proposed_olf_branchesDc_cache_value>> as Proposed_olf_branchesDc_cache_value
  rectangle "==DcLoadFlowFromCache\\n\\nReuses a cached DC computation network and avoids unnecessary state reset and voltage write-back. Branch dc_lf_network_cache." <<Proposed_olf_branchesDc_fast_restart>> as Proposed_olf_branchesDc_fast_restart
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "NetworkCache" <<Powsybl_open_loadflowNetwork_cache>> as Powsybl_open_loadflowNetwork_cache {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowNetwork_cache>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowNetwork_cache>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowNetwork_cache>> dashed

    rectangle "==IIDM NetworkListener changes\\n\\nIIDM mutations notify the cache about changed equipment, parameters, and topology." <<Powsybl_open_loadflowNetwork_cacheIidm_change_events>> as Powsybl_open_loadflowNetwork_cacheIidm_change_events
    rectangle "==Cache update classification\\n\\nClassifies every IIDM change (CacheUpdateStatus): an update the cache can apply in place marks the cached AC context as network-updated, an unsupported one invalidates the entry." <<Powsybl_open_loadflowNetwork_cacheChange_classifier>> as Powsybl_open_loadflowNetwork_cacheChange_classifier
    rectangle "==NetworkCache.Entry\\n\\nOwns the cache lifecycle, working variant cleanup, pause guard, and invalidation state for one IIDM Network." <<Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry>> as Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry
    rectangle "==AcLoadFlowFromCache\\n\\nReuses a cached AC computation network when the input is still compatible." <<Powsybl_open_loadflowNetwork_cacheAc_fast_restart>> as Powsybl_open_loadflowNetwork_cacheAc_fast_restart
  }
  rectangle "==IIDM state and core-result mapping\\n\\nUpdates IIDM state and adapts solver outputs to Core result contracts." <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping
}

Powsybl_open_loadflowNetwork_cacheIidm_change_events .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry : <color:#8D8D8D>notifies
Powsybl_open_loadflowNetwork_cacheIidm_change_events .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheChange_classifier : <color:#8D8D8D>classifies changes through
Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheAc_fast_restart : <color:#8D8D8D>holds the AcLoadFlowContext reused by
Powsybl_open_loadflowNetwork_cacheChange_classifier .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry : <color:#8D8D8D>marks the cached context for update or invalidates
Proposed_olf_branchesCache_input .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry : <color:#8D8D8D>would extend: validates inputs for
Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry .[#8D8D8D,thickness=2].> Proposed_olf_branchesAc_cache_value : <color:#8D8D8D>would extend: owns AC value
Proposed_olf_branchesAc_cache_value .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheAc_fast_restart : <color:#8D8D8D>would extend: reused by
Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry .[#8D8D8D,thickness=2].> Proposed_olf_branchesDc_cache_value : <color:#8D8D8D>would extend: owns DC value
Proposed_olf_branchesDc_cache_value .[#8D8D8D,thickness=2].> Proposed_olf_branchesDc_fast_restart : <color:#8D8D8D>reuses
Powsybl_open_loadflowNetwork_cacheAc_fast_restart .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>writes completed AC state through
Proposed_olf_branchesDc_fast_restart .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>would consume as-is: writes completed DC state through
@enduml
`;case`rdfdb-integration`:return`@startuml
title "Model registry in its own repository, next to powsybl-core"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_event_recorder>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam person<<Rdfdb_integration_tso>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam person<<Rdfdb_integration_study_tool>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam person<<Rdfdb_integration_operator>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam rectangle<<Proposed_rdfdb_scenario_per_mas>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbVersion_graph>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_unified_mappingFamilies>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingTriple_store_sparql>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_meta_graph>>{
  BackgroundColor #D9F0D3
  FontColor #3b4f37
  BorderColor #b1c7ab
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_checkpoint_copies>>{
  BackgroundColor #D9F0D3
  FontColor #3b4f37
  BorderColor #b1c7ab
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_data_graphs>>{
  BackgroundColor #D9F0D3
  FontColor #3b4f37
  BorderColor #b1c7ab
}
skinparam rectangle<<Proposed_diffstacking_rdf_databaseStore_diff_graphs>>{
  BackgroundColor #D9F0D3
  FontColor #3b4f37
  BorderColor #b1c7ab
}
skinparam rectangle<<Rdfdb_integration_legendCore>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Rdfdb_integration_legendRegistry>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Rdfdb_integration_legendStore>>{
  BackgroundColor #D9F0D3
  FontColor #3b4f37
  BorderColor #b1c7ab
}
skinparam rectangle<<Rdfdb_integration_legendProposed>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
rectangle "Actors" <<@gr1>> as @gr1 {
  skinparam RectangleBorderColor<<@gr1>> #737373
  skinparam RectangleFontColor<<@gr1>> #737373
  skinparam RectangleBorderStyle<<@gr1>> dashed

  person "==TSO\\n\\nBase day + 96 SSH file sets" <<Rdfdb_integration_tso>> as Rdfdb_integration_tso
  person "==Study tool\\n\\nWants (scenario, 08:30, v1.1)" <<Rdfdb_integration_study_tool>> as Rdfdb_integration_study_tool
  person "==Operator\\n\\nEdits a variant, writes it back" <<Rdfdb_integration_operator>> as Rdfdb_integration_operator
}
rectangle "Legend" <<@gr5>> as @gr5 {
  skinparam RectangleBorderColor<<@gr5>> #737373
  skinparam RectangleFontColor<<@gr5>> #737373
  skinparam RectangleBorderStyle<<@gr5>> dashed

  rectangle "==Grey: powsybl-core, upstream\\n\\nExists on upstream main" <<Rdfdb_integration_legendCore>> as Rdfdb_integration_legendCore
  rectangle "==Blue: proposal\\n\\nLocal branches, not upstream; registry: separate repository" <<Rdfdb_integration_legendRegistry>> as Rdfdb_integration_legendRegistry
  rectangle "==Green: RDF store\\n\\nAny SPARQL 1.1 + GSP endpoint" <<Rdfdb_integration_legendStore>> as Rdfdb_integration_legendStore
  rectangle "==Dashed: not implemented\\n\\nProposed design, no code yet" <<Rdfdb_integration_legendProposed>> as Rdfdb_integration_legendProposed
}
rectangle "powsybl-core, upstream" <<@gr2>> as @gr2 {
  skinparam RectangleBorderColor<<@gr2>> #737373
  skinparam RectangleFontColor<<@gr2>> #737373
  skinparam RectangleBorderStyle<<@gr2>> dashed

  rectangle "==NetworkEventRecorder\\n\\nChange log of a network" <<Powsybl_coreIidmVariantsNetwork_event_recorder>> as Powsybl_coreIidmVariantsNetwork_event_recorder
  rectangle "==IIDM Network\\n\\nVariants: one per snapshot" <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
}
rectangle "Model registry (separate repository, e.g. powsybl-cgmes-registry)" <<@gr4>> as @gr4 {
  skinparam RectangleBorderColor<<@gr4>> #3b82f6
  skinparam RectangleFontColor<<@gr4>> #3b82f6
  skinparam RectangleBorderStyle<<@gr4>> dashed

  rectangle "==Scenario per ModelingAuthoritySet\\n\\nProposed: multi-TSO CGM = scenarios + boundary" <<Proposed_rdfdb_scenario_per_mas>> as Proposed_rdfdb_scenario_per_mas
  rectangle "==RdfDbNetworkLoader\\n\\nload / update / loadVariants: diff or full route" <<Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader>> as Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader
  rectangle "==VersionGraph + Checkpoint\\n\\nPlan NOOP | DIFF | FULL; fold a chain" <<Proposed_diffstackingCgmes_rdfdbVersion_graph>> as Proposed_diffstackingCgmes_rdfdbVersion_graph
  rectangle "==SnapshotCatalog\\n\\nputFull / putDiff / putAsDiff, (scenario, timestep, version)" <<Proposed_diffstackingCgmes_rdfdbSnapshot_catalog>> as Proposed_diffstackingCgmes_rdfdbSnapshot_catalog
  rectangle "==Ingest\\n\\nIngestParser + TripleDiffCalculator (StatementDiff)" <<Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator>> as Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator
}
rectangle "powsybl-core, proposed (local branches, not upstream)" <<@gr3>> as @gr3 {
  skinparam RectangleBorderColor<<@gr3>> #3b82f6
  skinparam RectangleFontColor<<@gr3>> #3b82f6
  skinparam RectangleBorderStyle<<@gr3>> dashed

  rectangle "==CgmesDiffImport\\n\\nApplies a difference in place" <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
  rectangle "==CGMES import / export\\n\\nConversion (upstream) + families, sink, CgmesDiffExport (proposed)" <<Proposed_unified_mappingFamilies>> as Proposed_unified_mappingFamilies
  rectangle "==triple-store-impl-rdf4j-sparql\\n\\nThin SPARQL + Graph Store client" <<Proposed_diffstackingTriple_store_sparql>> as Proposed_diffstackingTriple_store_sparql
}
rectangle "RDF store: any SPARQL 1.1 + Graph Store endpoint (e.g. Fuseki) or in-process memory:" <<Proposed_diffstacking_rdf_database>> as Proposed_diffstacking_rdf_database {
  skinparam RectangleBorderColor<<Proposed_diffstacking_rdf_database>> #D9F0D3
  skinparam RectangleFontColor<<Proposed_diffstacking_rdf_database>> #D9F0D3
  skinparam RectangleBorderStyle<<Proposed_diffstacking_rdf_database>> dashed

  rectangle "==Metadata graph per scenario\\n\\nMutable catalogue, one per scenario" <<Proposed_diffstacking_rdf_databaseStore_meta_graph>> as Proposed_diffstacking_rdf_databaseStore_meta_graph
  rectangle "==Checkpoint copies\\n\\nA chain folded on the server" <<Proposed_diffstacking_rdf_databaseStore_checkpoint_copies>> as Proposed_diffstacking_rdf_databaseStore_checkpoint_copies
  rectangle "==Immutable data graphs\\n\\nOne per CGMES file, written once" <<Proposed_diffstacking_rdf_databaseStore_data_graphs>> as Proposed_diffstacking_rdf_databaseStore_data_graphs
  rectangle "==Forward / reverse diff graphs\\n\\nWhat a difference sets / replaced" <<Proposed_diffstacking_rdf_databaseStore_diff_graphs>> as Proposed_diffstacking_rdf_databaseStore_diff_graphs
}

Rdfdb_integration_tso .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>putAsDiff ×96 ≈ 53 s IGM
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbTriple_diff_calculator : <color:#8D8D8D>rich timestep ≈ 0.9–1.1 s sv20
Proposed_rdfdb_scenario_per_mas .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>one scenario per TSO
Rdfdb_integration_study_tool .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader : <color:#8D8D8D>load (sc, 08:30, v1.1)
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbVersion_graph : <color:#8D8D8D>plan: one chain query
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>diff route ≈ 0.1 s sv6
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>full route: cold ≈ 2 s IGM
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>96 variants ≈ 4.7 s IGM
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>builds / updates
Rdfdb_integration_operator .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>changes a variant
Powsybl_coreIidmVariantsNetwork_event_recorder .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>difference model ≈ 39 ms sv20
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbSnapshot_catalog : <color:#8D8D8D>putDiff (RdfDbExport)
Proposed_diffstackingCgmes_rdfdbSnapshot_catalog .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>one guarded SPARQL UPDATE
Proposed_diffstackingCgmes_rdfdbVersion_graph .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>chain query; Checkpoint COPY
Proposed_diffstackingCgmes_rdfdbRdf_db_network_loader .[#8D8D8D,thickness=2].> Proposed_diffstackingTriple_store_sparql : <color:#8D8D8D>parallel GSP GET
Proposed_diffstacking_rdf_databaseStore_meta_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_databaseStore_data_graphs : <color:#8D8D8D>indexes
Proposed_diffstacking_rdf_databaseStore_meta_graph .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_databaseStore_diff_graphs : <color:#8D8D8D>indexes
Proposed_diffstacking_rdf_databaseStore_checkpoint_copies .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_databaseStore_diff_graphs : <color:#8D8D8D>folds
Proposed_diffstackingTriple_store_sparql .[#8D8D8D,thickness=2].> Proposed_diffstacking_rdf_database : <color:#8D8D8D>SPARQL 1.1 + GSP
@enduml
`;case`state_estimation_proposed_contracts`:return`@startuml
title "Proposed State Estimation and OpenSteadyState contracts"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_state_estimation_core_api>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapterNetwork_loader>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowEquation_toolkitAc_equation_builder>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<PypowsyblMeasurement_and_observability_dataframes>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_bus_branch_measurement_projection>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowEquation_toolkitEquation_system>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_reusable_ac_measurement_terms>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposed_rectangular_measurement_jacobian>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_coreIidmExtensionsTransformer_estimation_flags>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmExtensionsMeasurements>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmExtensionsObservability>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreMath>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Proposed_retained_factorization>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposed_state_estimation_input_contract>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "IIDM to LfNetwork adapter" <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowLf_network_adapter>> dashed

    rectangle "==Networks and LfNetworkLoader\\n\\nBuilds the solver-facing topology and reconnectable elements from IIDM." <<Powsybl_open_loadflowLf_network_adapterNetwork_loader>> as Powsybl_open_loadflowLf_network_adapterNetwork_loader
  }
  rectangle "Equation builder toolkits" <<Powsybl_open_loadflowEquation_toolkit>> as Powsybl_open_loadflowEquation_toolkit {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowEquation_toolkit>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowEquation_toolkit>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowEquation_toolkit>> dashed

    rectangle "==AC equation builders\\n\\nAcEquationSystemCreator and AcEquationSystemUpdater." <<Powsybl_open_loadflowEquation_toolkitAc_equation_builder>> as Powsybl_open_loadflowEquation_toolkitAc_equation_builder
    rectangle "==EquationSystem and Jacobian infrastructure\\n\\nEquationSystem, EquationTerm, EquationArray, VariableSet, TargetVector, StateVector, JacobianMatrix, and JacobianMatrixFastDecoupled." <<Powsybl_open_loadflowEquation_toolkitEquation_system>> as Powsybl_open_loadflowEquation_toolkitEquation_system
  }
  rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==Measurement and observability DataFrames\\n\\nMeasurementsDataframeProvider, BranchObservabilityDataframeProvider, and InjectionObservabilityDataframeProvider expose existing IIDM extensions to Python." <<PypowsyblMeasurement_and_observability_dataframes>> as PypowsyblMeasurement_and_observability_dataframes
}
rectangle "==Proposed powsybl-core State Estimation API\\n\\nStateEstimation, StateEstimationProvider, StateEstimationParameters, StateEstimationRunParameters, StateEstimationResult, and StateEstimationReport." <<Proposed_state_estimation_core_api>> as Proposed_state_estimation_core_api
rectangle "==Proposed bus/branch measurement projection\\n\\nReduces node/breaker topology to a bus/branch model and maps measurement locations to the bus-voltage state-vector index." <<Proposed_bus_branch_measurement_projection>> as Proposed_bus_branch_measurement_projection
rectangle "==Proposed reusable AC measurement terms\\n\\nPublished h(x) evaluators and derivatives for AC P/Q/I flows." <<Proposed_reusable_ac_measurement_terms>> as Proposed_reusable_ac_measurement_terms
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "IIDM extensions" <<Powsybl_coreIidmExtensions>> as Powsybl_coreIidmExtensions {
    skinparam RectangleBorderColor<<Powsybl_coreIidmExtensions>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidmExtensions>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidmExtensions>> dashed

    rectangle "==Transformer estimation flags\\n\\nTwoWindingsTransformerToBeEstimated and ThreeWindingsTransformerToBeEstimated mark transformer equipment for estimation." <<Powsybl_coreIidmExtensionsTransformer_estimation_flags>> as Powsybl_coreIidmExtensionsTransformer_estimation_flags
    rectangle "==Measurements and discrete measurements extensions\\n\\nMeasurement, Measurements, MeasurementAdder, DiscreteMeasurement, and DiscreteMeasurements attach measured values and properties to IIDM equipment." <<Powsybl_coreIidmExtensionsMeasurements>> as Powsybl_coreIidmExtensionsMeasurements
    rectangle "==Observability extensions\\n\\nObservability, BranchObservability, InjectionObservability, ObservabilityArea, and ObservabilityQuality annotate IIDM equipment and topology." <<Powsybl_coreIidmExtensionsObservability>> as Powsybl_coreIidmExtensionsObservability
  }
  rectangle "==Math API\\n\\nMatrixFactory and shared numerical abstractions." <<Powsybl_coreMath>> as Powsybl_coreMath
  rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
}
rectangle "==Proposed measurement-function and rectangular Jacobian support\\n\\nEquation-toolkit support for building h(x) and a rectangular measurement Jacobian H." <<Proposed_rectangular_measurement_jacobian>> as Proposed_rectangular_measurement_jacobian
rectangle "==Proposed retained factorization access\\n\\nCaller-controlled factorization reuse for batched WLS solves and diagnostics." <<Proposed_retained_factorization>> as Proposed_retained_factorization
rectangle "==Proposed State Estimation input and result contract\\n\\nInput binding for existing Network, Measurements, and Observability extensions; projected bus/branch measurement data; proposed result and report types." <<Proposed_state_estimation_input_contract>> as Proposed_state_estimation_input_contract

Powsybl_coreIidmExtensionsMeasurements .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>attach measurement data to
Powsybl_coreIidmExtensionsObservability .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>annotate equipment and topology on
Powsybl_open_loadflowLf_network_adapterNetwork_loader .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>builds and configures
Powsybl_open_loadflowEquation_toolkitAc_equation_builder .[#8D8D8D,thickness=2].> Powsybl_open_loadflowEquation_toolkitEquation_system : <color:#8D8D8D>constructs and updates
PypowsyblMeasurement_and_observability_dataframes .[#8D8D8D,thickness=2].> Powsybl_coreIidmExtensionsMeasurements : <color:#8D8D8D>maps through
PypowsyblMeasurement_and_observability_dataframes .[#8D8D8D,thickness=2].> Powsybl_coreIidmExtensionsObservability : <color:#8D8D8D>maps through
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would provide Network to
Powsybl_coreIidmExtensionsMeasurements .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would contribute measurements to
Powsybl_coreIidmExtensionsObservability .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would contribute observability metadata to
Powsybl_coreIidmExtensionsTransformer_estimation_flags .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would contribute equipment flags to
PypowsyblMeasurement_and_observability_dataframes .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would marshal Python data through
Proposed_state_estimation_core_api .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would define calls over
Powsybl_open_loadflowLf_network_adapterNetwork_loader .[#8D8D8D,thickness=2].> Proposed_bus_branch_measurement_projection : <color:#8D8D8D>would be extended for
Proposed_bus_branch_measurement_projection .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would derive reduced estimator input for
Powsybl_open_loadflowEquation_toolkitEquation_system .[#8D8D8D,thickness=2].> Proposed_rectangular_measurement_jacobian : <color:#8D8D8D>would be extended for
Proposed_bus_branch_measurement_projection .[#8D8D8D,thickness=2].> Proposed_rectangular_measurement_jacobian : <color:#8D8D8D>would supply topology and state indexing to
Powsybl_coreMath .[#8D8D8D,thickness=2].> Proposed_retained_factorization : <color:#8D8D8D>would expose controlled reuse through
Proposed_rectangular_measurement_jacobian .[#8D8D8D,thickness=2].> Proposed_retained_factorization : <color:#8D8D8D>would form weighted normal equations with
Powsybl_open_loadflowEquation_toolkitAc_equation_builder .[#8D8D8D,thickness=2].> Proposed_reusable_ac_measurement_terms : <color:#8D8D8D>would expose existing terms through
Proposed_reusable_ac_measurement_terms .[#8D8D8D,thickness=2].> Proposed_rectangular_measurement_jacobian : <color:#8D8D8D>would evaluate h(x) and derivatives for
@enduml
`;case`state_estimation_proposal_a`:return`@startuml
title "Proposal A: Separate OpenSteadyState and State Estimation repositories"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_result_mapping>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowOpen_loadflow_provider>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmExtensionsMeasurements>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreIidmExtensionsObservability>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Proposed_state_estimation_core_api>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowEquation_toolkit>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposed_state_estimation_input_contract>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_engines>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapterNetwork_loader>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposal_a_open_loadflowProposal_a_loadflow>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_a_open_steady_stateProposal_a_equation_toolkitProposal_a_measurement_equation_builder>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_state_estimation_provider>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_measurement_preparation>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_observability_analysis>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_bad_data_diagnostics>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
  rectangle "==OpenLoadFlowProvider\\n\\nImplements LoadFlowProvider for AC and DC load flows." <<Powsybl_open_loadflowOpen_loadflow_provider>> as Powsybl_open_loadflowOpen_loadflow_provider
  rectangle "==Equation builder toolkits\\n\\nEquation-system infrastructure and AC/DC builders used by the numerical engines." <<Powsybl_open_loadflowEquation_toolkit>> as Powsybl_open_loadflowEquation_toolkit
  rectangle "==AC/DC load-flow engines\\n\\nAcloadFlowEngine, DcLoadFlowEngine, AC solvers, and outer loops." <<Powsybl_open_loadflowAc_dc_loadflow_engines>> as Powsybl_open_loadflowAc_dc_loadflow_engines
  rectangle "IIDM to LfNetwork adapter" <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter {
    skinparam RectangleBorderColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_open_loadflowLf_network_adapter>> dashed

    rectangle "==Networks and LfNetworkLoader\\n\\nBuilds the solver-facing topology and reconnectable elements from IIDM." <<Powsybl_open_loadflowLf_network_adapterNetwork_loader>> as Powsybl_open_loadflowLf_network_adapterNetwork_loader
  }
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "IIDM extensions" <<Powsybl_coreIidmExtensions>> as Powsybl_coreIidmExtensions {
    skinparam RectangleBorderColor<<Powsybl_coreIidmExtensions>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidmExtensions>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidmExtensions>> dashed

    rectangle "==Measurements and discrete measurements extensions\\n\\nMeasurement, Measurements, MeasurementAdder, DiscreteMeasurement, and DiscreteMeasurements attach measured values and properties to IIDM equipment." <<Powsybl_coreIidmExtensionsMeasurements>> as Powsybl_coreIidmExtensionsMeasurements
    rectangle "==Observability extensions\\n\\nObservability, BranchObservability, InjectionObservability, ObservabilityArea, and ObservabilityQuality annotate IIDM equipment and topology." <<Powsybl_coreIidmExtensionsObservability>> as Powsybl_coreIidmExtensionsObservability
  }
  rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
}
rectangle "Proposed powsybl-state-estimation" <<Proposal_a_state_estimation>> as Proposal_a_state_estimation {
  skinparam RectangleBorderColor<<Proposal_a_state_estimation>> #3b82f6
  skinparam RectangleFontColor<<Proposal_a_state_estimation>> #3b82f6
  skinparam RectangleBorderStyle<<Proposal_a_state_estimation>> dashed

  rectangle "state-estimation" <<Proposal_a_state_estimationProposal_a_state_estimation_module>> as Proposal_a_state_estimationProposal_a_state_estimation_module {
    skinparam RectangleBorderColor<<Proposal_a_state_estimationProposal_a_state_estimation_module>> #A35829
    skinparam RectangleFontColor<<Proposal_a_state_estimationProposal_a_state_estimation_module>> #A35829
    skinparam RectangleBorderStyle<<Proposal_a_state_estimationProposal_a_state_estimation_module>> dashed

    rectangle "==State-estimation result mapping\\n\\nMaps estimated bus/branch state and diagnostics back to IIDM-facing StateEstimationResult and StateEstimationReport." <<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_result_mapping>> as Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_result_mapping
    rectangle "==StateEstimationProvider\\n\\nServiceLoader implementation that coordinates the public State Estimation API." <<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_state_estimation_provider>> as Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_state_estimation_provider
    rectangle "==Measurement and covariance preparation\\n\\nNormalizes projected bus/branch measurements, standard deviations, statuses, z, R, and W = R^-1." <<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_measurement_preparation>> as Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_measurement_preparation
    rectangle "==Observability analysis\\n\\nUses projected bus/branch measurement incidence to partition connected components and select observable bus-voltage states." <<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_observability_analysis>> as Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_observability_analysis
    rectangle "==WLS kernel\\n\\nIterative weighted least-squares estimator." <<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel>> as Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel
    rectangle "==Post-convergence residual and bad-data diagnostics\\n\\nUses residuals, H, weights, and retained factors to compute chi-square, residual-covariance, normalized-residual, and bad-data diagnostics after convergence." <<Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_bad_data_diagnostics>> as Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_bad_data_diagnostics
  }
}
rectangle "==Proposed powsybl-core State Estimation API\\n\\nStateEstimation, StateEstimationProvider, StateEstimationParameters, StateEstimationRunParameters, StateEstimationResult, and StateEstimationReport." <<Proposed_state_estimation_core_api>> as Proposed_state_estimation_core_api
rectangle "==Proposed State Estimation input and result contract\\n\\nInput binding for existing Network, Measurements, and Observability extensions; projected bus/branch measurement data; proposed result and report types." <<Proposed_state_estimation_input_contract>> as Proposed_state_estimation_input_contract
rectangle "Proposed powsybl-open-steady-state" <<Proposal_a_open_steady_state>> as Proposal_a_open_steady_state {
  skinparam RectangleBorderColor<<Proposal_a_open_steady_state>> #3b82f6
  skinparam RectangleFontColor<<Proposal_a_open_steady_state>> #3b82f6
  skinparam RectangleBorderStyle<<Proposal_a_open_steady_state>> dashed

  rectangle "Network toolkit" <<Proposal_a_open_steady_stateProposal_a_network_toolkit>> as Proposal_a_open_steady_stateProposal_a_network_toolkit {
    skinparam RectangleBorderColor<<Proposal_a_open_steady_stateProposal_a_network_toolkit>> #A35829
    skinparam RectangleFontColor<<Proposal_a_open_steady_stateProposal_a_network_toolkit>> #A35829
    skinparam RectangleBorderStyle<<Proposal_a_open_steady_stateProposal_a_network_toolkit>> dashed

    rectangle "==Node/breaker-to-bus/branch measurement projection\\n\\nApplies switch and breaker status, reduces topology, and maps measurement locations to bus-voltage state variables." <<Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection>> as Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection
  }
  rectangle "Equation toolkit" <<Proposal_a_open_steady_stateProposal_a_equation_toolkit>> as Proposal_a_open_steady_stateProposal_a_equation_toolkit {
    skinparam RectangleBorderColor<<Proposal_a_open_steady_stateProposal_a_equation_toolkit>> #A35829
    skinparam RectangleFontColor<<Proposal_a_open_steady_stateProposal_a_equation_toolkit>> #A35829
    skinparam RectangleBorderStyle<<Proposal_a_open_steady_stateProposal_a_equation_toolkit>> dashed

    rectangle "==State Estimation measurement-equation builder\\n\\nBuilds h(x) and differentiates it into H against the indexed bus-voltage state vector." <<Proposal_a_open_steady_stateProposal_a_equation_toolkitProposal_a_measurement_equation_builder>> as Proposal_a_open_steady_stateProposal_a_equation_toolkitProposal_a_measurement_equation_builder
  }
}
rectangle "Proposed powsybl-open-loadflow" <<Proposal_a_open_loadflow>> as Proposal_a_open_loadflow {
  skinparam RectangleBorderColor<<Proposal_a_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Proposal_a_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Proposal_a_open_loadflow>> dashed

  rectangle "==open-loadflow\\n\\nAC/DC load-flow engines, OpenLoadFlowProvider, solver selection, outer loops, and result mapping retained after the toolkit extraction." <<Proposal_a_open_loadflowProposal_a_loadflow>> as Proposal_a_open_loadflowProposal_a_loadflow
}

Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowEquation_toolkit : <color:#8D8D8D>supplies variables and network state to
Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>provides loaded network to
Powsybl_open_loadflowEquation_toolkit .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>supplies equations to
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapterNetwork_loader : <color:#8D8D8D>configures
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would provide Network to
Powsybl_coreIidmExtensionsMeasurements .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would contribute measurements to
Powsybl_coreIidmExtensionsObservability .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would contribute observability metadata to
Proposed_state_estimation_core_api .[#8D8D8D,thickness=2].> Proposed_state_estimation_input_contract : <color:#8D8D8D>would define calls over
Proposed_state_estimation_input_contract .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection : <color:#8D8D8D>would provide IIDM topology, switch status, and measurement metadata to
Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_equation_toolkitProposal_a_measurement_equation_builder : <color:#8D8D8D>would provide reduced topology and measurement mappings to
Proposed_state_estimation_core_api .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_state_estimation_provider : <color:#8D8D8D>would discover through ServiceLoader
Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_measurement_preparation : <color:#8D8D8D>would provide projected measurement locations to
Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_observability_analysis : <color:#8D8D8D>would provide reduced topology and measurement-to-state incidence to
Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel : <color:#8D8D8D>would initialize and index
Proposal_a_open_steady_stateProposal_a_equation_toolkitProposal_a_measurement_equation_builder .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel : <color:#8D8D8D>[...]
Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_network_toolkitProposal_a_topology_measurement_projection : <color:#8D8D8D>would start topology and measurement projection through
Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_result_mapping .[#8D8D8D,thickness=2].> Proposed_state_estimation_core_api : <color:#8D8D8D>would return results through
Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_measurement_preparation .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel : <color:#8D8D8D>[...]
Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_observability_analysis .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel : <color:#8D8D8D>selects observable variables for
Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_bad_data_diagnostics : <color:#8D8D8D>[...]
Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_wls_kernel .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_result_mapping : <color:#8D8D8D>provides estimated state to
Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_bad_data_diagnostics .[#8D8D8D,thickness=2].> Proposal_a_state_estimationProposal_a_state_estimation_moduleProposal_a_result_mapping : <color:#8D8D8D>adds diagnostics to
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Proposal_a_open_loadflowProposal_a_loadflow : <color:#8D8D8D>would remain in
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Proposal_a_open_loadflowProposal_a_loadflow : <color:#8D8D8D>would remain in
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>loads the computation network
Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_network_toolkit : <color:#8D8D8D>would be extracted into
Powsybl_open_loadflowLf_network_adapterNetwork_loader .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_network_toolkit : <color:#8D8D8D>would move with
Powsybl_open_loadflowEquation_toolkit .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_equation_toolkit : <color:#8D8D8D>would be extracted into
Proposal_a_open_loadflowProposal_a_loadflow .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_network_toolkit : <color:#8D8D8D>would use the target network toolkit
Proposal_a_open_loadflowProposal_a_loadflow .[#8D8D8D,thickness=2].> Proposal_a_open_steady_stateProposal_a_equation_toolkit : <color:#8D8D8D>would use the target equation toolkit
@enduml
`;case`state_estimation_proposal_b`:return`@startuml
title "Proposal B: Refactor powsybl-open-loadflow into powsybl-open-simulator"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreMath>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowContingency_propagation>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowEquation_toolkitEquation_system>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimation>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_loadflow>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_grid_reduction>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_core>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_network>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_matrix>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #6366f1
  skinparam RectangleFontColor<<Powsybl_core>> #6366f1
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Math API\\n\\nMatrixFactory and shared numerical abstractions." <<Powsybl_coreMath>> as Powsybl_coreMath
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #428a4f
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #428a4f
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
  rectangle "==IIDM to LfNetwork adapter\\n\\nNetworks, LfNetworkLoaderImpl, and equipment-specific Lf* adapters." <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter
  rectangle "==Contingency propagation\\n\\nPropagatedContingency, ContingencyTripping, and node/breaker traversal." <<Powsybl_open_loadflowContingency_propagation>> as Powsybl_open_loadflowContingency_propagation
  rectangle "==EquationSystem and Jacobian infrastructure\\n\\nEquationSystem, EquationTerm, EquationArray, VariableSet, TargetVector, StateVector, JacobianMatrix, and JacobianMatrixFastDecoupled." <<Powsybl_open_loadflowEquation_toolkitEquation_system>> as Powsybl_open_loadflowEquation_toolkitEquation_system
}
rectangle "Proposed powsybl-open-simulator (renamed from powsybl-open-loadflow)" <<Proposal_b_open_simulator>> as Proposal_b_open_simulator {
  skinparam RectangleBorderColor<<Proposal_b_open_simulator>> #A35829
  skinparam RectangleFontColor<<Proposal_b_open_simulator>> #A35829
  skinparam RectangleBorderStyle<<Proposal_b_open_simulator>> dashed

  rectangle "==powsybl-open-state-estimation\\n\\nNew module: StateEstimationProvider, WLS estimation, observability analysis, bad-data diagnostics, and result mapping." <<Proposal_b_open_simulatorProposal_b_state_estimation>> as Proposal_b_open_simulatorProposal_b_state_estimation
  rectangle "==powsybl-open-loadflow\\n\\nRemaining code from the current repository: load flow (lf), security analysis (sa), and sensitivity analysis (sensi) in AC and DC, including the AC and DC equation terms." <<Proposal_b_open_simulatorProposal_b_loadflow>> as Proposal_b_open_simulatorProposal_b_loadflow
  rectangle "==powsybl-open-grid-reduction\\n\\nNew grid-reduction module." <<Proposal_b_open_simulatorProposal_b_grid_reduction>> as Proposal_b_open_simulatorProposal_b_grid_reduction
  rectangle "==powsybl-open-simulator-core\\n\\nWould contain com.powsybl.openloadflow.equations: EquationSystem, EquationTerm, VariableSet, StateVector, TargetVector, and JacobianMatrix." <<Proposal_b_open_simulatorProposal_b_core>> as Proposal_b_open_simulatorProposal_b_core
  rectangle "==powsybl-open-simulator-network\\n\\nWould contain com.powsybl.openloadflow.network, with LfNetwork renamed OsNetwork." <<Proposal_b_open_simulatorProposal_b_network>> as Proposal_b_open_simulatorProposal_b_network
  rectangle "==powsybl-open-simulator-matrix\\n\\nTransfer of com.powsybl.math.matrix from powsybl-core: Matrix, MatrixFactory, dense and sparse matrices, and LU decompositions." <<Proposal_b_open_simulatorProposal_b_matrix>> as Proposal_b_open_simulatorProposal_b_matrix
}

Powsybl_coreMath .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_matrix : <color:#8D8D8D>com.powsybl.math.matrix would transfer into
Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>would move, renamed OsNetwork, into
Powsybl_open_loadflowLf_network_adapter .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>would move into
Powsybl_open_loadflowContingency_propagation .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>would move into
Powsybl_open_loadflowEquation_toolkitEquation_system .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_core : <color:#8D8D8D>would move into
Proposal_b_open_simulatorProposal_b_state_estimation .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_core : <color:#8D8D8D>would depend on
Proposal_b_open_simulatorProposal_b_network .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_matrix : <color:#8D8D8D>would depend on
Proposal_b_open_simulatorProposal_b_core .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>would depend on
Proposal_b_open_simulatorProposal_b_loadflow .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_core : <color:#8D8D8D>would depend on
Proposal_b_open_simulatorProposal_b_grid_reduction .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_core : <color:#8D8D8D>would depend on
Powsybl_open_loadflow .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_loadflow : <color:#8D8D8D>remaining lf, sa, sensi, AC, and DC code would stay in
@enduml
`;case`state_estimation_proposal_b_sequence_mvp`:return`@startuml
title "Proposal B sequence: MVP State Estimation (observability and WLS)"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_state_estimation_client>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposed_state_estimation_core_api>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_coreIidm>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_network>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_core>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_matrix>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "==Proposed State Estimation client\\n\\nJava application, pypowsybl binding, or operator workflow that starts a State Estimation run." <<Proposed_state_estimation_client>> as Proposed_state_estimation_client
rectangle "==Proposed powsybl-core State Estimation API\\n\\nStateEstimation, StateEstimationProvider, StateEstimationParameters, StateEstimationRunParameters, StateEstimationResult, and StateEstimationReport." <<Proposed_state_estimation_core_api>> as Proposed_state_estimation_core_api
rectangle "==StateEstimationProvider\\n\\nServiceLoader implementation that coordinates the public State Estimation API." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider
rectangle "==IIDM API and extensions\\n\\nThe mutable electrical-network object model, its principal interfaces, extensions, and format providers." <<Powsybl_coreIidm>> as Powsybl_coreIidm
rectangle "==powsybl-open-simulator-network\\n\\nWould contain com.powsybl.openloadflow.network, with LfNetwork renamed OsNetwork." <<Proposal_b_open_simulatorProposal_b_network>> as Proposal_b_open_simulatorProposal_b_network
rectangle "==Observability analysis\\n\\nUses projected bus/branch measurement incidence to partition connected components and select observable bus-voltage states." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis
rectangle "==WLS kernel\\n\\nIterative weighted least-squares estimator." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel
rectangle "==powsybl-open-simulator-core\\n\\nWould contain com.powsybl.openloadflow.equations: EquationSystem, EquationTerm, VariableSet, StateVector, TargetVector, and JacobianMatrix." <<Proposal_b_open_simulatorProposal_b_core>> as Proposal_b_open_simulatorProposal_b_core
rectangle "==powsybl-open-simulator-matrix\\n\\nTransfer of com.powsybl.math.matrix from powsybl-core: Matrix, MatrixFactory, dense and sparse matrices, and LU decompositions." <<Proposal_b_open_simulatorProposal_b_matrix>> as Proposal_b_open_simulatorProposal_b_matrix

Proposed_state_estimation_client .[#8D8D8D,thickness=2].> Proposed_state_estimation_core_api : <color:#8D8D8D>StateEstimation.run(network, variantId, parameters)
Proposed_state_estimation_core_api .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>discover provider through ServiceLoader and run
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>load network variant and measurements
Powsybl_coreIidm .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>topology, switch status, parameters, taps, measurements with standard deviations
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>project to bus/branch model and map measurements
Proposal_b_open_simulatorProposal_b_network .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>islands and measurement mapping
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>prepare z, R, W
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis : <color:#8D8D8D>topological observability per island
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>observable islands, critical measurements
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel : <color:#8D8D8D>estimate each observable island
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_core : <color:#8D8D8D>build h(x) and Jacobian H
Proposal_b_open_simulatorProposal_b_core .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_matrix : <color:#8D8D8D>sparse rectangular H
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_matrix : <color:#8D8D8D>G = H^T W H, sparse factorization, solve for delta x
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel : <color:#8D8D8D>update x, check convergence
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>x hat, residuals, convergence status
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>map bus/branch estimates to IIDM elements
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>optional write-back of state and observability
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposed_state_estimation_core_api : <color:#8D8D8D>StateEstimationResult and StateEstimationReport
Proposed_state_estimation_core_api .[#8D8D8D,thickness=2].> Proposed_state_estimation_client : <color:#8D8D8D>per-island status, estimated state, observability
@enduml
`;case`state_estimation_proposal_b_sequence_followup`:return`@startuml
title "Proposal B sequence: State Estimation with bad-data, topology, and parameter processing"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_state_estimation_client>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposed_state_estimation_core_api>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Powsybl_coreIidm>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_network>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "==Proposed State Estimation client\\n\\nJava application, pypowsybl binding, or operator workflow that starts a State Estimation run." <<Proposed_state_estimation_client>> as Proposed_state_estimation_client
rectangle "==Proposed powsybl-core State Estimation API\\n\\nStateEstimation, StateEstimationProvider, StateEstimationParameters, StateEstimationRunParameters, StateEstimationResult, and StateEstimationReport." <<Proposed_state_estimation_core_api>> as Proposed_state_estimation_core_api
rectangle "==StateEstimationProvider\\n\\nServiceLoader implementation that coordinates the public State Estimation API." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider
rectangle "==IIDM API and extensions\\n\\nThe mutable electrical-network object model, its principal interfaces, extensions, and format providers." <<Powsybl_coreIidm>> as Powsybl_coreIidm
rectangle "==powsybl-open-simulator-network\\n\\nWould contain com.powsybl.openloadflow.network, with LfNetwork renamed OsNetwork." <<Proposal_b_open_simulatorProposal_b_network>> as Proposal_b_open_simulatorProposal_b_network
rectangle "==Observability analysis\\n\\nUses projected bus/branch measurement incidence to partition connected components and select observable bus-voltage states." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis
rectangle "==WLS kernel\\n\\nIterative weighted least-squares estimator." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel
rectangle "==Post-convergence residual and bad-data diagnostics\\n\\nUses residuals, H, weights, and retained factors to compute chi-square, residual-covariance, normalized-residual, and bad-data diagnostics after convergence." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics
rectangle "==Topology error processing\\n\\nBuilds bounded branch-status and substation-configuration hypotheses from an immutable node/breaker snapshot, re-estimates each in a detached calculation variant, and ranks them by normalized residuals, normalized Lagrange multipliers, and observability impact." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing
rectangle "==Network parameter estimation\\n\\nEstimates selected, locally observable transformer taps, phase-shifter settings, and continuous branch parameters with priors, bounds, and uncertainty; results stay detached from the source network unless write-back is requested." <<Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation>> as Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation

Proposed_state_estimation_client .[#8D8D8D,thickness=2].> Proposed_state_estimation_core_api : <color:#8D8D8D>StateEstimation.run(network, variantId, parameters)
Proposed_state_estimation_core_api .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>run with bad-data, topology, and parameter options
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>load immutable node/breaker snapshot and measurements
Powsybl_coreIidm .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>snapshot and source measurements
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>project to bus/branch, keep node/breaker provenance
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>create run-local working measurement set
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis : <color:#8D8D8D>observability and measurement classification
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel : <color:#8D8D8D>WLS estimate
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>x hat, residuals, H, retained factors
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics : <color:#8D8D8D>chi-square test and normalized residuals
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>test outcome, isolated suspects, correlated clusters
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing : <color:#8D8D8D>assess topology-signature clusters before any removal
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>build bounded hypotheses in detached variants
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel : <color:#8D8D8D>re-estimate each hypothesis with breaker flow constraints
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_topology_error_processing .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>ranked candidates or inconclusive
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics : <color:#8D8D8D>identify largest normalized residual
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_bad_data_diagnostics .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis : <color:#8D8D8D>gate: not critical, island stays observable
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel : <color:#8D8D8D>deactivate suspect in working set and re-estimate
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation : <color:#8D8D8D>assess persistent clusters adjacent to a branch
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_observability_analysis : <color:#8D8D8D>parameter observability and local redundancy
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_wls_kernel : <color:#8D8D8D>augmented-state estimate, feasible discrete taps
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_parameter_estimation .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider : <color:#8D8D8D>estimates, uncertainty, update recommendation
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposal_b_open_simulatorProposal_b_network : <color:#8D8D8D>map estimates to IIDM elements
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>opt-in write-back of state and accepted corrections
Proposal_b_open_simulatorProposal_b_state_estimationProposal_b_state_estimation_provider .[#8D8D8D,thickness=2].> Proposed_state_estimation_core_api : <color:#8D8D8D>result, report, and audit trail
Proposed_state_estimation_core_api .[#8D8D8D,thickness=2].> Proposed_state_estimation_client : <color:#8D8D8D>result quality: passed, corrected, inconclusive, or failed
@enduml
`;case`unified_mapping_before`:return`@startuml
title "Unified mapping: before - every path knows the mapping itself"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingPartial_ssh_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingFast_route_capabilities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_object_dump>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingChange_translator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersCgmes_exporter>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingBefore_ssh_writers>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingBefore_probes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "==PartialSshExport\\n\\nWrites the objects affected by recorded changes as a partial SSH instance file." <<Proposed_diffstackingPartial_ssh_export>> as Proposed_diffstackingPartial_ssh_export
  rectangle "==CgmesDiffExport\\n\\nWrites the same recorded changes as IEC 61970-552 difference models, one per profile." <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
  rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
  rectangle "==FastRouteCapabilities + DiffSubjectResolver\\n\\nThe declarative table of what the update workflow can read, and the resolution of difference model subjects to network objects and CIM classes." <<Proposed_diffstackingFast_route_capabilities>> as Proposed_diffstackingFast_route_capabilities
  rectangle "==CgmesObjectDump\\n\\nWhat the change export would write about an object right now, used to complete consistency groups a minimal difference leaves out." <<Proposed_diffstackingCgmes_object_dump>> as Proposed_diffstackingCgmes_object_dump
  rectangle "==CgmesChangeTranslator + IidmStateView\\n\\nMaps one recorded change to CGMES properties of the steady state hypothesis and of the equipment profile (operational limits, voltage level limits, branch impedances), against the current state or against the state the change log says preceded it." <<Proposed_diffstackingChange_translator>> as Proposed_diffstackingChange_translator
  rectangle "==DifferenceModelSet / CgmesStatement\\n\\nForward and reverse RDF statements per profile" <<Proposed_diffstackingDifference_model>> as Proposed_diffstackingDifference_model
  rectangle "==DifferenceSink / DifferenceModelWriter\\n\\nWhere the difference models of one change set are handed over to: a document per profile, or a triple store." <<Proposed_diffstackingDifference_sink>> as Proposed_diffstackingDifference_sink
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "CGMES conversion" <<Powsybl_coreCgmes>> as Powsybl_coreCgmes {
    skinparam RectangleBorderColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreCgmes>> dashed

    rectangle "==Conversion.update (SSH update workflow)\\n\\nThe ordinary CGMES update: SPARQL queries over the loaded instance files, then XxxConversion.update per equipment." <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
  }
  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
    rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
      skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

      rectangle "Exporter implementations" <<Powsybl_coreIidmIoExport_providers>> as Powsybl_coreIidmIoExport_providers {
        skinparam RectangleBorderColor<<Powsybl_coreIidmIoExport_providers>> #3b82f6
        skinparam RectangleFontColor<<Powsybl_coreIidmIoExport_providers>> #3b82f6
        skinparam RectangleBorderStyle<<Powsybl_coreIidmIoExport_providers>> dashed

        rectangle "==CgmesExport" <<Powsybl_coreIidmIoExport_providersCgmes_exporter>> as Powsybl_coreIidmIoExport_providersCgmes_exporter
      }
    }
  }
}
rectangle "Unified mapping (proposal)" <<Proposed_unified_mapping>> as Proposed_unified_mapping {
  skinparam RectangleBorderColor<<Proposed_unified_mapping>> #3b82f6
  skinparam RectangleFontColor<<Proposed_unified_mapping>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_unified_mapping>> dashed

  rectangle "==SteadyStateHypothesisExport writers (before)\\n\\nThe full SSH export wrote every value with code of its own: generator sign, regulating terminal sign, unit multiplier, regulating controls. 13 statements of EnergyConsumer.p and 19 of the generator sign over the branch, 4 and 5 of them here." <<Proposed_unified_mappingBefore_ssh_writers>> as Proposed_unified_mappingBefore_ssh_writers
  rectangle "==DiffProbes + DiffSubjectResolver + CgmesLimitIndex (before)\\n\\nThe in-place import probed the network with property lists of its own to complete a group and to check reverse values, next to the hand-written FastRouteCapabilities table." <<Proposed_unified_mappingBefore_probes>> as Proposed_unified_mappingBefore_probes
}

Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersCgmes_exporter : <color:#8D8D8D>serializes
Proposed_diffstackingPartial_ssh_export .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>map changes with
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>map changes with
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: reads current (and overlaid previous) state of
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>generates
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>emits EQ statements for limits and impedances into
Proposed_diffstackingDifference_model .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_sink : <color:#8D8D8D>is pushed to
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>applies a difference in place, into a variant
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingFast_route_capabilities : <color:#8D8D8D>decides route with
Proposed_diffstackingFast_route_capabilities .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: resolves subjects and types in
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_object_dump : <color:#8D8D8D>completes groups / checks reverse values with
Proposed_diffstackingCgmes_object_dump .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>reuses export mapping of
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>would extend: runs, scoped to the named equipment
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>updates in place
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Proposed_unified_mappingBefore_ssh_writers : <color:#8D8D8D>writes the full SSH with (own rules)
Proposed_unified_mappingBefore_ssh_writers .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>reads
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_unified_mappingBefore_probes : <color:#8D8D8D>completes groups with (own property lists)
Proposed_unified_mappingBefore_probes .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_object_dump : <color:#8D8D8D>asks
@enduml
`;case`unified_mapping_after`:return`@startuml
title "Unified mapping: after - families, one sink, every path a consumer"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Proposed_diffstackingPartial_ssh_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingChange_translator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingFast_route_capabilities>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersCgmes_exporter>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingSubject_index>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingMapping_page>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingFamilies>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingPlain_rows>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingProperty_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_unified_mappingRefusal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_model>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsCgmes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Proposed_diffstackingDifference_sink>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Diffstacking in powsybl-core (proposal)" <<Proposed_diffstacking>> as Proposed_diffstacking {
  skinparam RectangleBorderColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleFontColor<<Proposed_diffstacking>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_diffstacking>> dashed

  rectangle "==PartialSshExport\\n\\nWrites the objects affected by recorded changes as a partial SSH instance file." <<Proposed_diffstackingPartial_ssh_export>> as Proposed_diffstackingPartial_ssh_export
  rectangle "==CgmesDiffExport\\n\\nWrites the same recorded changes as IEC 61970-552 difference models, one per profile." <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
  rectangle "==CgmesDiffImport\\n\\nApplies a difference model to a loaded network in place, decides beforehand whether that is possible, and undoes it again." <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
  rectangle "==CgmesChangeTranslator + IidmStateView\\n\\nMaps one recorded change to CGMES properties of the steady state hypothesis and of the equipment profile (operational limits, voltage level limits, branch impedances), against the current state or against the state the change log says preceded it." <<Proposed_diffstackingChange_translator>> as Proposed_diffstackingChange_translator
  rectangle "==FastRouteCapabilities + DiffSubjectResolver\\n\\nThe declarative table of what the update workflow can read, and the resolution of difference model subjects to network objects and CIM classes." <<Proposed_diffstackingFast_route_capabilities>> as Proposed_diffstackingFast_route_capabilities
  rectangle "==DifferenceModelSet / CgmesStatement\\n\\nForward and reverse RDF statements per profile" <<Proposed_diffstackingDifference_model>> as Proposed_diffstackingDifference_model
  rectangle "==DifferenceSink / DifferenceModelWriter\\n\\nWhere the difference models of one change set are handed over to: a document per profile, or a triple store." <<Proposed_diffstackingDifference_sink>> as Proposed_diffstackingDifference_sink
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "CGMES conversion" <<Powsybl_coreCgmes>> as Powsybl_coreCgmes {
    skinparam RectangleBorderColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreCgmes>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreCgmes>> dashed

    rectangle "==Conversion.update (SSH update workflow)\\n\\nThe ordinary CGMES update: SPARQL queries over the loaded instance files, then XxxConversion.update per equipment." <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
  }
  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
    rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
      skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
      skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

      rectangle "Exporter implementations" <<Powsybl_coreIidmIoExport_providers>> as Powsybl_coreIidmIoExport_providers {
        skinparam RectangleBorderColor<<Powsybl_coreIidmIoExport_providers>> #3b82f6
        skinparam RectangleFontColor<<Powsybl_coreIidmIoExport_providers>> #3b82f6
        skinparam RectangleBorderStyle<<Powsybl_coreIidmIoExport_providers>> dashed

        rectangle "==CgmesExport" <<Powsybl_coreIidmIoExport_providersCgmes_exporter>> as Powsybl_coreIidmIoExport_providersCgmes_exporter
      }
      rectangle "Supported exchange formats" <<Powsybl_coreIidmIoExchange_formats>> as Powsybl_coreIidmIoExchange_formats {
        skinparam RectangleBorderColor<<Powsybl_coreIidmIoExchange_formats>> #3b82f6
        skinparam RectangleFontColor<<Powsybl_coreIidmIoExchange_formats>> #3b82f6
        skinparam RectangleBorderStyle<<Powsybl_coreIidmIoExchange_formats>> dashed

        rectangle "==CGMES" <<Powsybl_coreIidmIoExchange_formatsCgmes>> as Powsybl_coreIidmIoExchange_formatsCgmes
      }
    }
  }
}
rectangle "Unified mapping (proposal)" <<Proposed_unified_mapping>> as Proposed_unified_mapping {
  skinparam RectangleBorderColor<<Proposed_unified_mapping>> #3b82f6
  skinparam RectangleFontColor<<Proposed_unified_mapping>> #3b82f6
  skinparam RectangleBorderStyle<<Proposed_unified_mapping>> dashed

  rectangle "==Families (subject index + describe)\\n\\nWhich network object a CGMES identifier names and what the network says about it, from the aliases and properties the families read." <<Proposed_unified_mappingSubject_index>> as Proposed_unified_mappingSubject_index
  rectangle "==mapping.md (generated)\\n\\nThe documentation page of the mapping: generated by MappingPageTest from the families, the plain rows, FastRouteCapabilities and Refusal; the test fails when it is stale." <<Proposed_unified_mappingMapping_page>> as Proposed_unified_mappingMapping_page
  rectangle "==Family classes (8)\\n\\nSwitchAndTerminal, Load, Machine, TapChangerAndShunt, RegulatingControl, Hvdc, ControlArea, Limit. Each declares the keys a change is dispatched by and the blocks the CGMES update reads; describe* writes an object to a sink, *Updates asks the refusals of a change first." <<Proposed_unified_mappingFamilies>> as Proposed_unified_mappingFamilies
  rectangle "==PlainFamily / PlainRow / Quantity / Block\\n\\nA plain family is data: a CGMES property, the IIDM attribute and the quantity (unit multiplier, sign, sign of the regulating terminal, spelling) once for both directions. The loads are plain families." <<Proposed_unified_mappingPlain_rows>> as Proposed_unified_mappingPlain_rows
  rectangle "==CgmesPropertySink\\n\\nWhere a family writes: the document of the full export, or the buffer of one change." <<Proposed_unified_mappingProperty_sink>> as Proposed_unified_mappingProperty_sink
  rectangle "==Refusal\\n\\nRule, remedy and scope of every refusal: a receiver of changes honours it, a full model states the whole state." <<Proposed_unified_mappingRefusal>> as Proposed_unified_mappingRefusal
}

Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersCgmes_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsCgmes : <color:#8D8D8D>writes
Proposed_diffstackingPartial_ssh_export .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsCgmes : <color:#8D8D8D>would consume as-is: writes partial SSH
Proposed_diffstackingPartial_ssh_export .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>map changes with
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>map changes with
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: reads current (and overlaid previous) state of
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>generates
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>emits EQ statements for limits and impedances into
Proposed_diffstackingDifference_model .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_sink : <color:#8D8D8D>is pushed to
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>applies a difference in place, into a variant
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingFast_route_capabilities : <color:#8D8D8D>decides route with
Proposed_diffstackingFast_route_capabilities .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>would consume as-is: resolves subjects and types in
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>would extend: runs, scoped to the named equipment
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>updates in place
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>writes the full SSH through
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>dispatches a change by key to
Proposed_diffstackingFast_route_capabilities .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>derives its table from the blocks of
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>reads the current or previous state of
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Proposed_unified_mappingPlain_rows : <color:#8D8D8D>sets loads, control areas and switches through
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Proposed_unified_mappingPlain_rows : <color:#8D8D8D>states plain values as
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Proposed_unified_mappingProperty_sink : <color:#8D8D8D>describes objects into
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsCgmes : <color:#8D8D8D>becomes the SSH document of
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingPartial_ssh_export : <color:#8D8D8D>one change: CgmesPropertyBuffer, written by
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>one change: CgmesPropertyBuffer, compared by
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingDifference_model : <color:#8D8D8D>becomes statements of
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Proposed_unified_mappingRefusal : <color:#8D8D8D>refuses with
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_unified_mappingSubject_index : <color:#8D8D8D>resolves subjects and completes groups with
Proposed_unified_mappingSubject_index .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>describes a subject with
Proposed_unified_mappingMapping_page .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>is generated from
Proposed_unified_mappingMapping_page .[#8D8D8D,thickness=2].> Proposed_unified_mappingRefusal : <color:#8D8D8D>lists rule, scope and remedy of
@enduml
`;case`upstream-main-today`:return`@startuml
title "Upstream main today: every direction states the mapping itself"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsCgmes>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersCgmes_importer>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesConversion>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesQuery_catalog>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesElement_conversions>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersCgmes_exporter>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesEq_export>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesSsh_export>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam rectangle<<Powsybl_coreCgmesTp_sv_export>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Unified_mapping_legendUnchanged>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Unified_mapping_legendRule_stated>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
rectangle "==CGMES files\\n\\nEQ, SSH, TP, SV instance files" <<Powsybl_coreIidmIoExchange_formatsCgmes>> as Powsybl_coreIidmIoExchange_formatsCgmes
rectangle "==CgmesImport\\n\\nImporter: Network.read and Importer.update" <<Powsybl_coreIidmIoImport_providersCgmes_importer>> as Powsybl_coreIidmIoImport_providersCgmes_importer
rectangle "==Conversion.convert\\n\\nFull import: EQ objects, then the SSH update" <<Powsybl_coreCgmesConversion>> as Powsybl_coreCgmesConversion
rectangle "==Conversion.update + Update\\n\\nSSH update of an already loaded network" <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
rectangle "==SPARQL catalogue (CIM16*.sparql)\\n\\nNamed queries, e.g. synchronousMachinesForUpdate" <<Powsybl_coreCgmesQuery_catalog>> as Powsybl_coreCgmesQuery_catalog
rectangle "==elements/*Conversion\\n\\nSynchronousMachineConversion.update: targetP = −p, both paths" <<Powsybl_coreCgmesElement_conversions>> as Powsybl_coreCgmesElement_conversions
rectangle "==Triple store (rdf4j)\\n\\nHolds the instance files as RDF" <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
rectangle "==IIDM Network\\n\\nGenerator.targetP, generator sign convention" <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==CgmesExport\\n\\nExporter: one writer per profile" <<Powsybl_coreIidmIoExport_providersCgmes_exporter>> as Powsybl_coreIidmIoExport_providersCgmes_exporter
rectangle "==EquipmentExport\\n\\nOwn IIDM → CGMES rules for EQ" <<Powsybl_coreCgmesEq_export>> as Powsybl_coreCgmesEq_export
rectangle "==SteadyStateHypothesisExport\\n\\nwriteGenerators: RotatingMachine.p = −targetP" <<Powsybl_coreCgmesSsh_export>> as Powsybl_coreCgmesSsh_export
rectangle "==TopologyExport / StateVariablesExport\\n\\nOwn IIDM → CGMES rules for TP, SV" <<Powsybl_coreCgmesTp_sv_export>> as Powsybl_coreCgmesTp_sv_export
rectangle "==Legend: powsybl-core, upstream\\n\\nEvery element of this view: upstream main f3d031b60f" <<Unified_mapping_legendUnchanged>> as Unified_mapping_legendUnchanged
rectangle "==Legend: upstream code stating the rule\\n\\nCode stating RotatingMachine.p = −targetP" <<Unified_mapping_legendRule_stated>> as Unified_mapping_legendRule_stated

Powsybl_coreIidmIoExchange_formatsCgmes .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersCgmes_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>loads files into
Powsybl_coreCgmesQuery_catalog .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>is evaluated on
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion : <color:#8D8D8D>Network.read: converts with
Powsybl_coreCgmesConversion .[#8D8D8D,thickness=2].> Powsybl_coreCgmesQuery_catalog : <color:#8D8D8D>reads the model through
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>Importer.update: updates with
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesQuery_catalog : <color:#8D8D8D>reads the update queries of
Powsybl_coreCgmesConversion .[#8D8D8D,thickness=2].> Powsybl_coreCgmesElement_conversions : <color:#8D8D8D>convert() per object, then update()
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesElement_conversions : <color:#8D8D8D>update() per object
Powsybl_coreCgmesElement_conversions .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates and sets the state of
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersCgmes_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsCgmes : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Powsybl_coreCgmesEq_export : <color:#8D8D8D>writes EQ with
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Powsybl_coreCgmesSsh_export : <color:#8D8D8D>writes SSH with
Powsybl_coreCgmesSsh_export .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>reads
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTp_sv_export : <color:#8D8D8D>writes TP and SV with
@enduml
`;case`families-after`:return`@startuml
title "After the rework: eight families state the mapping once"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsCgmes>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Proposed_diffstackingChange_translator>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_unified_mappingFamiliesLoad_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingFamiliesMachine_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingFamiliesTap_changer_and_shunt_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingFamiliesSwitch_and_terminal_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingFamiliesHvdc_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingFamiliesLimit_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingFamiliesRegulating_control_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingFamiliesControl_area_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingMapping_page>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersCgmes_importer>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesConversion>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingFast_route_capabilities>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_unified_mappingSubject_index>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreCgmesQuery_catalog>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreCgmesElement_conversions>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam rectangle<<Powsybl_coreCgmesTriple_store>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Proposed_unified_mappingPlain_rows>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingRefusal>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_unified_mappingProperty_sink>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreCgmesSsh_export>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingPartial_ssh_export>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Unified_mapping_legendUnchanged>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Unified_mapping_legendReworked>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Unified_mapping_legendRule_stated>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam rectangle<<Unified_mapping_legendRule_stated_proposal>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
rectangle "==CGMES files\\n\\nEQ, SSH, TP, SV instance files" <<Powsybl_coreIidmIoExchange_formatsCgmes>> as Powsybl_coreIidmIoExchange_formatsCgmes
rectangle "==CgmesChangeTranslator\\n\\nDispatches a recorded change by key" <<Proposed_diffstackingChange_translator>> as Proposed_diffstackingChange_translator
rectangle "Family classes" <<Proposed_unified_mappingFamilies>> as Proposed_unified_mappingFamilies {
  skinparam RectangleBorderColor<<Proposed_unified_mappingFamilies>> #94BFE8
  skinparam RectangleFontColor<<Proposed_unified_mappingFamilies>> #94BFE8
  skinparam RectangleBorderStyle<<Proposed_unified_mappingFamilies>> dashed

  rectangle "==LoadFamily\\n\\nLoads, as plain rows" <<Proposed_unified_mappingFamiliesLoad_family>> as Proposed_unified_mappingFamiliesLoad_family
  rectangle "==MachineFamily\\n\\ndescribeSynchronousMachine: p = −targetP" <<Proposed_unified_mappingFamiliesMachine_family>> as Proposed_unified_mappingFamiliesMachine_family
  rectangle "==TapChangerAndShuntFamily\\n\\nTap changers, shunts, SVCs" <<Proposed_unified_mappingFamiliesTap_changer_and_shunt_family>> as Proposed_unified_mappingFamiliesTap_changer_and_shunt_family
  rectangle "==SwitchAndTerminalFamily\\n\\nSwitch.open, Terminal.connected" <<Proposed_unified_mappingFamiliesSwitch_and_terminal_family>> as Proposed_unified_mappingFamiliesSwitch_and_terminal_family
  rectangle "==HvdcFamily\\n\\nConverters: modes and targets" <<Proposed_unified_mappingFamiliesHvdc_family>> as Proposed_unified_mappingFamiliesHvdc_family
  rectangle "==LimitFamily\\n\\nLimits and impedances (EQ)" <<Proposed_unified_mappingFamiliesLimit_family>> as Proposed_unified_mappingFamiliesLimit_family
  rectangle "==RegulatingControlFamily\\n\\nRegulating and tap changer controls" <<Proposed_unified_mappingFamiliesRegulating_control_family>> as Proposed_unified_mappingFamiliesRegulating_control_family
  rectangle "==ControlAreaFamily\\n\\nNet interchange, as plain rows" <<Proposed_unified_mappingFamiliesControl_area_family>> as Proposed_unified_mappingFamiliesControl_area_family
}
rectangle "==mapping.md (generated)\\n\\nMappingPageTest fails when stale" <<Proposed_unified_mappingMapping_page>> as Proposed_unified_mappingMapping_page
rectangle "==CgmesImport\\n\\nImporter: Network.read and Importer.update" <<Powsybl_coreIidmIoImport_providersCgmes_importer>> as Powsybl_coreIidmIoImport_providersCgmes_importer
rectangle "==Conversion\\n\\nFull import, unchanged" <<Powsybl_coreCgmesConversion>> as Powsybl_coreCgmesConversion
rectangle "==In-place import\\n\\nCgmesDiffImport fast route" <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==Conversion.update + UpdateScope\\n\\nUpstream SSH update; the scope to the touched objects is proposed" <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
rectangle "==Capability table\\n\\nFastRouteCapabilities, derived from the blocks" <<Proposed_diffstackingFast_route_capabilities>> as Proposed_diffstackingFast_route_capabilities
rectangle "==Subject index\\n\\nFamilies.resolve: CGMES id to network object" <<Proposed_unified_mappingSubject_index>> as Proposed_unified_mappingSubject_index
rectangle "==SPARQL catalogue (CIM16*.sparql)\\n\\nNamed queries, unchanged" <<Powsybl_coreCgmesQuery_catalog>> as Powsybl_coreCgmesQuery_catalog
rectangle "==elements/*Conversion\\n\\nMachines: SynchronousMachineConversion.update still states targetP = −p" <<Powsybl_coreCgmesElement_conversions>> as Powsybl_coreCgmesElement_conversions
rectangle "==Triple store (rdf4j)\\n\\nHolds the instance files as RDF" <<Powsybl_coreCgmesTriple_store>> as Powsybl_coreCgmesTriple_store
rectangle "==IIDM Network\\n\\nGenerator.targetP, generator sign convention" <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==Quantity / PlainRow / LoadRows\\n\\nUnit, sign, spelling: once, both directions" <<Proposed_unified_mappingPlain_rows>> as Proposed_unified_mappingPlain_rows
rectangle "==Refusal\\n\\nRule, remedy, scope of every refusal" <<Proposed_unified_mappingRefusal>> as Proposed_unified_mappingRefusal
rectangle "==CgmesPropertySink\\n\\nXml writer or buffer of one change" <<Proposed_unified_mappingProperty_sink>> as Proposed_unified_mappingProperty_sink
rectangle "==Full SSH export\\n\\nSteadyStateHypothesisExport, XML writer" <<Powsybl_coreCgmesSsh_export>> as Powsybl_coreCgmesSsh_export
rectangle "==Partial SSH\\n\\nPartialSshExport, from the buffer" <<Proposed_diffstackingPartial_ssh_export>> as Proposed_diffstackingPartial_ssh_export
rectangle "==CGMES difference model\\n\\nCgmesDiffExport, forward and reverse statements" <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
rectangle "==RDF database (cgmes-rdfdb)\\n\\nRdfDbDifferenceSink: two named graphs" <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
rectangle "==Legend: powsybl-core, upstream\\n\\nUpstream main, unchanged: import front end" <<Unified_mapping_legendUnchanged>> as Unified_mapping_legendUnchanged
rectangle "==Legend: proposal\\n\\nLocal branch, not upstream: mapping, consumers, derived artefacts" <<Unified_mapping_legendReworked>> as Unified_mapping_legendReworked
rectangle "==Legend: upstream code stating the rule\\n\\nCode stating RotatingMachine.p = −targetP" <<Unified_mapping_legendRule_stated>> as Unified_mapping_legendRule_stated
rectangle "==Legend: proposal code stating the rule\\n\\nDarker blue: the families state each rule once" <<Unified_mapping_legendRule_stated_proposal>> as Unified_mapping_legendRule_stated_proposal

Powsybl_coreIidmIoExchange_formatsCgmes .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersCgmes_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>loads files into
Powsybl_coreCgmesQuery_catalog .[#8D8D8D,thickness=2].> Powsybl_coreCgmesTriple_store : <color:#8D8D8D>is evaluated on
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion : <color:#8D8D8D>Network.read: converts with
Powsybl_coreCgmesConversion .[#8D8D8D,thickness=2].> Powsybl_coreCgmesQuery_catalog : <color:#8D8D8D>reads the model through
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>Importer.update: updates with
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesQuery_catalog : <color:#8D8D8D>reads the update queries of
Powsybl_coreCgmesConversion .[#8D8D8D,thickness=2].> Powsybl_coreCgmesElement_conversions : <color:#8D8D8D>convert() per object, then update()
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesElement_conversions : <color:#8D8D8D>update() per object
Powsybl_coreCgmesElement_conversions .[#8D8D8D,thickness=2].> Proposed_unified_mappingPlain_rows : <color:#8D8D8D>reads loads, areas, switches through
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Powsybl_coreCgmesSsh_export : <color:#8D8D8D>full model: Xml
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingPartial_ssh_export : <color:#8D8D8D>one change: buffer
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>one change: buffer
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>DifferenceModelSet
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>would extend: delegates difference models to
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>would extend: runs, scoped to the named equipment
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_diffstackingFast_route_capabilities : <color:#8D8D8D>decides route with
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_unified_mappingSubject_index : <color:#8D8D8D>resolves subjects, completes groups with
Powsybl_coreCgmesElement_conversions .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates and sets the state of
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>dispatches a change by key to
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Proposed_unified_mappingPlain_rows : <color:#8D8D8D>states plain values as
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Proposed_unified_mappingRefusal : <color:#8D8D8D>refuses with
Proposed_unified_mappingFamilies .[#8D8D8D,thickness=2].> Proposed_unified_mappingProperty_sink : <color:#8D8D8D>describes objects into
Proposed_diffstackingFast_route_capabilities .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>derives its table from the blocks of
Proposed_unified_mappingSubject_index .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>describes a subject with
Proposed_unified_mappingMapping_page .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamilies : <color:#8D8D8D>is generated from
@enduml
`;case`machine-example`:return`@startuml
title "One change of a generator's active power, both directions"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_event_recorder>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Proposed_diffstackingChange_translator>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_unified_mappingFamiliesMachine_family>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
skinparam rectangle<<Proposed_unified_mappingProperty_sink>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreCgmesSsh_export>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingPartial_ssh_export>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_export>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_diffstackingCgmes_diff_import>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_unified_mappingFast_route_plan>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Proposed_unified_mappingSubject_index>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreCgmesConversion_update>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Powsybl_coreCgmesElement_conversions>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam rectangle<<Unified_mapping_legendUnchanged>>{
  BackgroundColor #E5E7EB
  FontColor #46484b
  BorderColor #bdbfc3
}
skinparam rectangle<<Unified_mapping_legendReworked>>{
  BackgroundColor #CDE4F7
  FontColor #304555
  BorderColor #a5bcce
}
skinparam rectangle<<Unified_mapping_legendRule_stated>>{
  BackgroundColor #F8C9C4
  FontColor #522f2c
  BorderColor #cfa29d
}
skinparam rectangle<<Unified_mapping_legendRule_stated_proposal>>{
  BackgroundColor #94BFE8
  FontColor #000021
  BorderColor #6d98c0
}
rectangle "==IIDM Network\\n\\nGenerator G, targetP" <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "==NetworkEventRecorder\\n\\nRecords the change as an event" <<Powsybl_coreIidmVariantsNetwork_event_recorder>> as Powsybl_coreIidmVariantsNetwork_event_recorder
rectangle "==CgmesChangeTranslator\\n\\nDispatches a change by key" <<Proposed_diffstackingChange_translator>> as Proposed_diffstackingChange_translator
rectangle "==MachineFamily\\n\\nStates RotatingMachine.p = −targetP once" <<Proposed_unified_mappingFamiliesMachine_family>> as Proposed_unified_mappingFamiliesMachine_family
rectangle "==CgmesPropertySink\\n\\nXml writer or buffer of one change" <<Proposed_unified_mappingProperty_sink>> as Proposed_unified_mappingProperty_sink
rectangle "==Full SSH export\\n\\nSteadyStateHypothesisExport" <<Powsybl_coreCgmesSsh_export>> as Powsybl_coreCgmesSsh_export
rectangle "==Partial SSH\\n\\nPartialSshExport" <<Proposed_diffstackingPartial_ssh_export>> as Proposed_diffstackingPartial_ssh_export
rectangle "==CGMES difference model\\n\\nCgmesDiffExport" <<Proposed_diffstackingCgmes_diff_export>> as Proposed_diffstackingCgmes_diff_export
rectangle "==RDF database\\n\\nRdfDbDifferenceSink (cgmes-rdfdb)" <<Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink>> as Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink
rectangle "==CgmesDiffImport\\n\\nIn-place import of a difference" <<Proposed_diffstackingCgmes_diff_import>> as Proposed_diffstackingCgmes_diff_import
rectangle "==FastRoutePlan\\n\\nResolves, checks, completes every subject" <<Proposed_unified_mappingFast_route_plan>> as Proposed_unified_mappingFast_route_plan
rectangle "==Families.resolve\\n\\nCGMES id to network object, class" <<Proposed_unified_mappingSubject_index>> as Proposed_unified_mappingSubject_index
rectangle "==Conversion.update + UpdateScope\\n\\nUpstream SSH update, run with a proposed scope" <<Powsybl_coreCgmesConversion_update>> as Powsybl_coreCgmesConversion_update
rectangle "==SynchronousMachineConversion\\n\\nupdate(): targetP = −p, upstream code" <<Powsybl_coreCgmesElement_conversions>> as Powsybl_coreCgmesElement_conversions
rectangle "==Legend: powsybl-core, upstream\\n\\nUpstream main, unchanged" <<Unified_mapping_legendUnchanged>> as Unified_mapping_legendUnchanged
rectangle "==Legend: proposal\\n\\nLocal branch, not upstream" <<Unified_mapping_legendReworked>> as Unified_mapping_legendReworked
rectangle "==Legend: upstream code stating the rule\\n\\nCode stating RotatingMachine.p = −targetP" <<Unified_mapping_legendRule_stated>> as Unified_mapping_legendRule_stated
rectangle "==Legend: proposal code stating the rule\\n\\nDarker blue: stated once, in MachineFamily" <<Unified_mapping_legendRule_stated_proposal>> as Unified_mapping_legendRule_stated_proposal

Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmVariantsNetwork_event_recorder : <color:#8D8D8D>G.setTargetP(100): event targetP
Powsybl_coreIidmVariantsNetwork_event_recorder .[#8D8D8D,thickness=2].> Proposed_diffstackingChange_translator : <color:#8D8D8D>change log
Proposed_diffstackingChange_translator .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamiliesMachine_family : <color:#8D8D8D>key targetP: generatorUpdates(G)
Proposed_unified_mappingFamiliesMachine_family .[#8D8D8D,thickness=2].> Proposed_unified_mappingProperty_sink : <color:#8D8D8D>describeSynchronousMachine: RotatingMachine.p = −100
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingPartial_ssh_export : <color:#8D8D8D>buffer: SynchronousMachine block
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_export : <color:#8D8D8D>buffer: forward and reverse statements
Proposed_diffstackingCgmes_diff_export .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink : <color:#8D8D8D>DifferenceModelSet: two named graphs
Proposed_unified_mappingProperty_sink .[#8D8D8D,thickness=2].> Powsybl_coreCgmesSsh_export : <color:#8D8D8D>full model: same describe, Xml sink
Proposed_diffstackingCgmes_rdfdbRdf_db_difference_sink .[#8D8D8D,thickness=2].> Proposed_diffstackingCgmes_diff_import : <color:#8D8D8D>RdfDbNetworkLoader: difference RotatingMachine.p = −120
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Proposed_unified_mappingFast_route_plan : <color:#8D8D8D>FastRoutePlan.of(network, diffs)
Proposed_unified_mappingFast_route_plan .[#8D8D8D,thickness=2].> Proposed_unified_mappingSubject_index : <color:#8D8D8D>resolve(id, SynchronousMachine)
Proposed_unified_mappingFast_route_plan .[#8D8D8D,thickness=2].> Proposed_unified_mappingFamiliesMachine_family : <color:#8D8D8D>block SYNCHRONOUS_MACHINE: properties, query
Proposed_unified_mappingFamiliesMachine_family .[#8D8D8D,thickness=2].> Proposed_unified_mappingFast_route_plan : <color:#8D8D8D>describe: completes the block
Proposed_diffstackingCgmes_diff_import .[#8D8D8D,thickness=2].> Powsybl_coreCgmesConversion_update : <color:#8D8D8D>synthetic SSH, scoped update
Powsybl_coreCgmesConversion_update .[#8D8D8D,thickness=2].> Powsybl_coreCgmesElement_conversions : <color:#8D8D8D>synchronousMachinesForUpdate row
Powsybl_coreCgmesElement_conversions .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>update(): targetP = −p = 120
@enduml
`;case`iidm_model`:return`@startuml
title "IIDM: Network model and exchange formats"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreIidmCommon_typesIdentifiable>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmCommon_typesConnectable>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmCommon_typesTerminal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_event_recorder>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTopologyArea>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmInjectionsGenerator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmInjectionsLoad>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmInjectionsBattery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmInjectionsShunt_compensator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmInjectionsStatic_var_compensator>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmInjectionsGround>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmBranchesBranch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmBranchesAc_line>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmBranchesTie_line>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_node>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_ground>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_bus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_line>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_switch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmLimits_and_controlOperational_limits>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmLimits_and_controlReactive_limits>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmLimits_and_controlAutomation_system>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensionsExtension_contract>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensionsSlack_terminal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensionsReference_terminals>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensionsCgmes_extensions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensionsTransformer_estimation_flags>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_factory>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariantsVariant_manager>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariantsNetwork_listener>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_terminal>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmDc_gridDc_connectivity>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensionsMeasurements>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensionsObservability>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsCgmes>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsUcte>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsMatpower>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsPsse>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsIeee_cdf>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsPowerfactory>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsXiidm>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsJiidm>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsBiidm>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersCgmes_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersUcte_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersMatpower_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersPsse_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersIeee_cdf_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersPowerfactory_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersXiidm_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersJiidm_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmIoImport_providersBiidm_importer>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoNetwork_read_write>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoProvider_discovery>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersCgmes_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersUcte_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersMatpower_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersPsse_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersXiidm_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersJiidm_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersBiidm_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmIoExport_providersAmpl_exporter>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_coreIidmTopologySubstation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTransformersTwo_windings_transformer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTransformersThree_windings_transformer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmHvdcHvdc_line>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmHvdcAc_dc_converters>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoImporter_spi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoExporter_spi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmIoExchange_formatsAmpl>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Powsybl_coreIidmTopologyVoltage_level>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTransformersRatio_tap_changer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTransformersPhase_tap_changer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmHvdcVsc_converter_station>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmHvdcLcc_converter_station>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTopologyBus>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTopologyBusbar_section>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTopologySwitch>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTopologyTopology_views>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "Common IIDM contracts" <<Powsybl_coreIidmCommon_types>> as Powsybl_coreIidmCommon_types {
  skinparam RectangleBorderColor<<Powsybl_coreIidmCommon_types>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmCommon_types>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmCommon_types>> dashed

  rectangle "==Identifiable\\n\\nBase contract for named IIDM objects." <<Powsybl_coreIidmCommon_typesIdentifiable>> as Powsybl_coreIidmCommon_typesIdentifiable
  rectangle "==Connectable\\n\\nBase contract for equipment that owns terminals." <<Powsybl_coreIidmCommon_typesConnectable>> as Powsybl_coreIidmCommon_typesConnectable
  rectangle "==Terminal\\n\\nElectrical connection point between equipment and voltage-level topology." <<Powsybl_coreIidmCommon_typesTerminal>> as Powsybl_coreIidmCommon_typesTerminal
}
rectangle "Network lifecycle" <<Powsybl_coreIidmVariants>> as Powsybl_coreIidmVariants {
  skinparam RectangleBorderColor<<Powsybl_coreIidmVariants>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmVariants>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmVariants>> dashed

  rectangle "==NetworkEventRecorder\\n\\nNetworkListener collecting the changes applied to a network as a replayable event log." <<Powsybl_coreIidmVariantsNetwork_event_recorder>> as Powsybl_coreIidmVariantsNetwork_event_recorder
  rectangle "==NetworkFactory\\n\\nCreates an IIDM Network implementation." <<Powsybl_coreIidmVariantsNetwork_factory>> as Powsybl_coreIidmVariantsNetwork_factory
  rectangle "==VariantManager\\n\\nSelects and manages the working variant." <<Powsybl_coreIidmVariantsVariant_manager>> as Powsybl_coreIidmVariantsVariant_manager
  rectangle "==NetworkListener\\n\\nReceives IIDM network changes." <<Powsybl_coreIidmVariantsNetwork_listener>> as Powsybl_coreIidmVariantsNetwork_listener
}
rectangle "Topology and containment" <<Powsybl_coreIidmTopology>> as Powsybl_coreIidmTopology {
  skinparam RectangleBorderColor<<Powsybl_coreIidmTopology>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmTopology>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmTopology>> dashed

  rectangle "==Area and AreaBoundary\\n\\nGroups equipment for operational and geographical purposes." <<Powsybl_coreIidmTopologyArea>> as Powsybl_coreIidmTopologyArea
  rectangle "==Substation\\n\\nContains voltage levels and their equipment." <<Powsybl_coreIidmTopologySubstation>> as Powsybl_coreIidmTopologySubstation
  rectangle "==VoltageLevel\\n\\nOwns bus/breaker and node/breaker topology." <<Powsybl_coreIidmTopologyVoltage_level>> as Powsybl_coreIidmTopologyVoltage_level
  rectangle "==Bus\\n\\nElectrical node in the bus topology." <<Powsybl_coreIidmTopologyBus>> as Powsybl_coreIidmTopologyBus
  rectangle "==BusbarSection\\n\\nPhysical busbar element in node/breaker topology." <<Powsybl_coreIidmTopologyBusbar_section>> as Powsybl_coreIidmTopologyBusbar_section
  rectangle "==Switch\\n\\nCoupler, disconnector, or breaker that changes topology." <<Powsybl_coreIidmTopologySwitch>> as Powsybl_coreIidmTopologySwitch
  rectangle "==VoltageLevel topology views\\n\\nBus, bus/breaker, and node/breaker views expose the resolved topology." <<Powsybl_coreIidmTopologyTopology_views>> as Powsybl_coreIidmTopologyTopology_views
}
rectangle "Injections" <<Powsybl_coreIidmInjections>> as Powsybl_coreIidmInjections {
  skinparam RectangleBorderColor<<Powsybl_coreIidmInjections>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmInjections>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmInjections>> dashed

  rectangle "==Generator" <<Powsybl_coreIidmInjectionsGenerator>> as Powsybl_coreIidmInjectionsGenerator
  rectangle "==Load\\n\\nIncludes ZIP and exponential load models." <<Powsybl_coreIidmInjectionsLoad>> as Powsybl_coreIidmInjectionsLoad
  rectangle "==Battery" <<Powsybl_coreIidmInjectionsBattery>> as Powsybl_coreIidmInjectionsBattery
  rectangle "==ShuntCompensator\\n\\nLinear or non-linear shunt model." <<Powsybl_coreIidmInjectionsShunt_compensator>> as Powsybl_coreIidmInjectionsShunt_compensator
  rectangle "==StaticVarCompensator" <<Powsybl_coreIidmInjectionsStatic_var_compensator>> as Powsybl_coreIidmInjectionsStatic_var_compensator
  rectangle "==Ground" <<Powsybl_coreIidmInjectionsGround>> as Powsybl_coreIidmInjectionsGround
}
rectangle "AC branches" <<Powsybl_coreIidmBranches>> as Powsybl_coreIidmBranches {
  skinparam RectangleBorderColor<<Powsybl_coreIidmBranches>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmBranches>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmBranches>> dashed

  rectangle "==Branch\\n\\nBase branch contract." <<Powsybl_coreIidmBranchesBranch>> as Powsybl_coreIidmBranchesBranch
  rectangle "==Line" <<Powsybl_coreIidmBranchesAc_line>> as Powsybl_coreIidmBranchesAc_line
  rectangle "==TieLine" <<Powsybl_coreIidmBranchesTie_line>> as Powsybl_coreIidmBranchesTie_line
}
rectangle "DC grid equipment" <<Powsybl_coreIidmDc_grid>> as Powsybl_coreIidmDc_grid {
  skinparam RectangleBorderColor<<Powsybl_coreIidmDc_grid>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmDc_grid>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmDc_grid>> dashed

  rectangle "==DcNode" <<Powsybl_coreIidmDc_gridDc_node>> as Powsybl_coreIidmDc_gridDc_node
  rectangle "==DcGround" <<Powsybl_coreIidmDc_gridDc_ground>> as Powsybl_coreIidmDc_gridDc_ground
  rectangle "==DcBus" <<Powsybl_coreIidmDc_gridDc_bus>> as Powsybl_coreIidmDc_gridDc_bus
  rectangle "==DcLine" <<Powsybl_coreIidmDc_gridDc_line>> as Powsybl_coreIidmDc_gridDc_line
  rectangle "==DcSwitch" <<Powsybl_coreIidmDc_gridDc_switch>> as Powsybl_coreIidmDc_gridDc_switch
  rectangle "==DcTerminal" <<Powsybl_coreIidmDc_gridDc_terminal>> as Powsybl_coreIidmDc_gridDc_terminal
  rectangle "==DC connectivity and mutations\\n\\nDC connection state and topology changes are held on the shared Network." <<Powsybl_coreIidmDc_gridDc_connectivity>> as Powsybl_coreIidmDc_gridDc_connectivity
}
rectangle "Limits and automation" <<Powsybl_coreIidmLimits_and_control>> as Powsybl_coreIidmLimits_and_control {
  skinparam RectangleBorderColor<<Powsybl_coreIidmLimits_and_control>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmLimits_and_control>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmLimits_and_control>> dashed

  rectangle "==OperationalLimits and LoadingLimits" <<Powsybl_coreIidmLimits_and_controlOperational_limits>> as Powsybl_coreIidmLimits_and_controlOperational_limits
  rectangle "==ReactiveLimits" <<Powsybl_coreIidmLimits_and_controlReactive_limits>> as Powsybl_coreIidmLimits_and_controlReactive_limits
  rectangle "==AutomationSystem and OverloadManagementSystem" <<Powsybl_coreIidmLimits_and_controlAutomation_system>> as Powsybl_coreIidmLimits_and_controlAutomation_system
}
rectangle "IIDM extensions" <<Powsybl_coreIidmExtensions>> as Powsybl_coreIidmExtensions {
  skinparam RectangleBorderColor<<Powsybl_coreIidmExtensions>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmExtensions>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmExtensions>> dashed

  rectangle "==Extension and Extendable\\n\\nExtension mechanism available on IIDM objects." <<Powsybl_coreIidmExtensionsExtension_contract>> as Powsybl_coreIidmExtensionsExtension_contract
  rectangle "==SlackTerminal" <<Powsybl_coreIidmExtensionsSlack_terminal>> as Powsybl_coreIidmExtensionsSlack_terminal
  rectangle "==ReferenceTerminals" <<Powsybl_coreIidmExtensionsReference_terminals>> as Powsybl_coreIidmExtensionsReference_terminals
  rectangle "==CGMES extensions\\n\\nCGMES-specific data carried beside the IIDM model." <<Powsybl_coreIidmExtensionsCgmes_extensions>> as Powsybl_coreIidmExtensionsCgmes_extensions
  rectangle "==Transformer estimation flags\\n\\nTwoWindingsTransformerToBeEstimated and ThreeWindingsTransformerToBeEstimated mark transformer equipment for estimation." <<Powsybl_coreIidmExtensionsTransformer_estimation_flags>> as Powsybl_coreIidmExtensionsTransformer_estimation_flags
  rectangle "==Measurements and discrete measurements extensions\\n\\nMeasurement, Measurements, MeasurementAdder, DiscreteMeasurement, and DiscreteMeasurements attach measured values and properties to IIDM equipment." <<Powsybl_coreIidmExtensionsMeasurements>> as Powsybl_coreIidmExtensionsMeasurements
  rectangle "==Observability extensions\\n\\nObservability, BranchObservability, InjectionObservability, ObservabilityArea, and ObservabilityQuality annotate IIDM equipment and topology." <<Powsybl_coreIidmExtensionsObservability>> as Powsybl_coreIidmExtensionsObservability
}
rectangle "IIDM I/O and format providers" <<Powsybl_coreIidmIo>> as Powsybl_coreIidmIo {
  skinparam RectangleBorderColor<<Powsybl_coreIidmIo>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmIo>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmIo>> dashed

  rectangle "Supported exchange formats" <<Powsybl_coreIidmIoExchange_formats>> as Powsybl_coreIidmIoExchange_formats {
    skinparam RectangleBorderColor<<Powsybl_coreIidmIoExchange_formats>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidmIoExchange_formats>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidmIoExchange_formats>> dashed

    rectangle "==CGMES" <<Powsybl_coreIidmIoExchange_formatsCgmes>> as Powsybl_coreIidmIoExchange_formatsCgmes
    rectangle "==UCTE" <<Powsybl_coreIidmIoExchange_formatsUcte>> as Powsybl_coreIidmIoExchange_formatsUcte
    rectangle "==MATPOWER" <<Powsybl_coreIidmIoExchange_formatsMatpower>> as Powsybl_coreIidmIoExchange_formatsMatpower
    rectangle "==PSS/E" <<Powsybl_coreIidmIoExchange_formatsPsse>> as Powsybl_coreIidmIoExchange_formatsPsse
    rectangle "==IEEE CDF" <<Powsybl_coreIidmIoExchange_formatsIeee_cdf>> as Powsybl_coreIidmIoExchange_formatsIeee_cdf
    rectangle "==PowerFactory" <<Powsybl_coreIidmIoExchange_formatsPowerfactory>> as Powsybl_coreIidmIoExchange_formatsPowerfactory
    rectangle "==XIIDM XML" <<Powsybl_coreIidmIoExchange_formatsXiidm>> as Powsybl_coreIidmIoExchange_formatsXiidm
    rectangle "==JIIDM JSON" <<Powsybl_coreIidmIoExchange_formatsJiidm>> as Powsybl_coreIidmIoExchange_formatsJiidm
    rectangle "==BIIDM binary" <<Powsybl_coreIidmIoExchange_formatsBiidm>> as Powsybl_coreIidmIoExchange_formatsBiidm
    rectangle "==AMPL" <<Powsybl_coreIidmIoExchange_formatsAmpl>> as Powsybl_coreIidmIoExchange_formatsAmpl
  }
  rectangle "Importer implementations" <<Powsybl_coreIidmIoImport_providers>> as Powsybl_coreIidmIoImport_providers {
    skinparam RectangleBorderColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidmIoImport_providers>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidmIoImport_providers>> dashed

    rectangle "==CgmesImport" <<Powsybl_coreIidmIoImport_providersCgmes_importer>> as Powsybl_coreIidmIoImport_providersCgmes_importer
    rectangle "==UcteImporter" <<Powsybl_coreIidmIoImport_providersUcte_importer>> as Powsybl_coreIidmIoImport_providersUcte_importer
    rectangle "==MatpowerImporter" <<Powsybl_coreIidmIoImport_providersMatpower_importer>> as Powsybl_coreIidmIoImport_providersMatpower_importer
    rectangle "==PsseImporter" <<Powsybl_coreIidmIoImport_providersPsse_importer>> as Powsybl_coreIidmIoImport_providersPsse_importer
    rectangle "==IeeeCdfImporter" <<Powsybl_coreIidmIoImport_providersIeee_cdf_importer>> as Powsybl_coreIidmIoImport_providersIeee_cdf_importer
    rectangle "==PowerFactoryImporter" <<Powsybl_coreIidmIoImport_providersPowerfactory_importer>> as Powsybl_coreIidmIoImport_providersPowerfactory_importer
    rectangle "==XMLImporter" <<Powsybl_coreIidmIoImport_providersXiidm_importer>> as Powsybl_coreIidmIoImport_providersXiidm_importer
    rectangle "==JsonImporter" <<Powsybl_coreIidmIoImport_providersJiidm_importer>> as Powsybl_coreIidmIoImport_providersJiidm_importer
    rectangle "==BinaryImporter" <<Powsybl_coreIidmIoImport_providersBiidm_importer>> as Powsybl_coreIidmIoImport_providersBiidm_importer
  }
  rectangle "Exporter implementations" <<Powsybl_coreIidmIoExport_providers>> as Powsybl_coreIidmIoExport_providers {
    skinparam RectangleBorderColor<<Powsybl_coreIidmIoExport_providers>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidmIoExport_providers>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidmIoExport_providers>> dashed

    rectangle "==CgmesExport" <<Powsybl_coreIidmIoExport_providersCgmes_exporter>> as Powsybl_coreIidmIoExport_providersCgmes_exporter
    rectangle "==UCTE export adapter" <<Powsybl_coreIidmIoExport_providersUcte_exporter>> as Powsybl_coreIidmIoExport_providersUcte_exporter
    rectangle "==MATPOWER export adapter" <<Powsybl_coreIidmIoExport_providersMatpower_exporter>> as Powsybl_coreIidmIoExport_providersMatpower_exporter
    rectangle "==PSS/E export adapter" <<Powsybl_coreIidmIoExport_providersPsse_exporter>> as Powsybl_coreIidmIoExport_providersPsse_exporter
    rectangle "==XIIDM XML export adapter" <<Powsybl_coreIidmIoExport_providersXiidm_exporter>> as Powsybl_coreIidmIoExport_providersXiidm_exporter
    rectangle "==JIIDM JSON export adapter" <<Powsybl_coreIidmIoExport_providersJiidm_exporter>> as Powsybl_coreIidmIoExport_providersJiidm_exporter
    rectangle "==BIIDM binary export adapter" <<Powsybl_coreIidmIoExport_providersBiidm_exporter>> as Powsybl_coreIidmIoExport_providersBiidm_exporter
    rectangle "==AMPL export adapter" <<Powsybl_coreIidmIoExport_providersAmpl_exporter>> as Powsybl_coreIidmIoExport_providersAmpl_exporter
  }
  rectangle "==Network.read / Network.write\\n\\nFacade methods on Network." <<Powsybl_coreIidmIoNetwork_read_write>> as Powsybl_coreIidmIoNetwork_read_write
  rectangle "==Importers/Exporters ServiceLoader\\n\\nDiscovers @AutoService provider implementations." <<Powsybl_coreIidmIoProvider_discovery>> as Powsybl_coreIidmIoProvider_discovery
  rectangle "==Importer and Importers\\n\\nSPI for constructing an IIDM Network from a data source." <<Powsybl_coreIidmIoImporter_spi>> as Powsybl_coreIidmIoImporter_spi
  rectangle "==Exporter and Exporters\\n\\nSPI for writing an IIDM Network to a data sink." <<Powsybl_coreIidmIoExporter_spi>> as Powsybl_coreIidmIoExporter_spi
}
rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
rectangle "Transformers and tap changers" <<Powsybl_coreIidmTransformers>> as Powsybl_coreIidmTransformers {
  skinparam RectangleBorderColor<<Powsybl_coreIidmTransformers>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmTransformers>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmTransformers>> dashed

  rectangle "==TwoWindingsTransformer" <<Powsybl_coreIidmTransformersTwo_windings_transformer>> as Powsybl_coreIidmTransformersTwo_windings_transformer
  rectangle "==ThreeWindingsTransformer" <<Powsybl_coreIidmTransformersThree_windings_transformer>> as Powsybl_coreIidmTransformersThree_windings_transformer
  rectangle "==RatioTapChanger" <<Powsybl_coreIidmTransformersRatio_tap_changer>> as Powsybl_coreIidmTransformersRatio_tap_changer
  rectangle "==PhaseTapChanger" <<Powsybl_coreIidmTransformersPhase_tap_changer>> as Powsybl_coreIidmTransformersPhase_tap_changer
}
rectangle "HVDC equipment" <<Powsybl_coreIidmHvdc>> as Powsybl_coreIidmHvdc {
  skinparam RectangleBorderColor<<Powsybl_coreIidmHvdc>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_coreIidmHvdc>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_coreIidmHvdc>> dashed

  rectangle "==HvdcLine" <<Powsybl_coreIidmHvdcHvdc_line>> as Powsybl_coreIidmHvdcHvdc_line
  rectangle "==IIDM AC/DC converters\\n\\nLCC and VSC converters couple AC terminals to DC terminals, with control modes, losses, and active-power bounds." <<Powsybl_coreIidmHvdcAc_dc_converters>> as Powsybl_coreIidmHvdcAc_dc_converters
  rectangle "==VscConverterStation" <<Powsybl_coreIidmHvdcVsc_converter_station>> as Powsybl_coreIidmHvdcVsc_converter_station
  rectangle "==LccConverterStation" <<Powsybl_coreIidmHvdcLcc_converter_station>> as Powsybl_coreIidmHvdcLcc_converter_station
}

Powsybl_coreIidmVariantsNetwork_factory .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates
Powsybl_coreIidmVariantsVariant_manager .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>selects a working variant on
Powsybl_coreIidmVariantsNetwork_listener .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>observes changes on
Powsybl_coreIidmTopologySubstation .[#8D8D8D,thickness=2].> Powsybl_coreIidmTopologyVoltage_level : <color:#8D8D8D>contains
Powsybl_coreIidmTopologyVoltage_level .[#8D8D8D,thickness=2].> Powsybl_coreIidmTopologyBus : <color:#8D8D8D>contains bus topology
Powsybl_coreIidmTopologyVoltage_level .[#8D8D8D,thickness=2].> Powsybl_coreIidmTopologyBusbar_section : <color:#8D8D8D>contains node/breaker equipment
Powsybl_coreIidmTopologyVoltage_level .[#8D8D8D,thickness=2].> Powsybl_coreIidmTopologySwitch : <color:#8D8D8D>contains switching equipment
Powsybl_coreIidmTopologyVoltage_level .[#8D8D8D,thickness=2].> Powsybl_coreIidmTopologyTopology_views : <color:#8D8D8D>exposes through
Powsybl_coreIidmTransformersTwo_windings_transformer .[#8D8D8D,thickness=2].> Powsybl_coreIidmTransformersRatio_tap_changer : <color:#8D8D8D>may own
Powsybl_coreIidmTransformersTwo_windings_transformer .[#8D8D8D,thickness=2].> Powsybl_coreIidmTransformersPhase_tap_changer : <color:#8D8D8D>may own
Powsybl_coreIidmTransformersThree_windings_transformer .[#8D8D8D,thickness=2].> Powsybl_coreIidmTransformersRatio_tap_changer : <color:#8D8D8D>may own per leg
Powsybl_coreIidmTransformersThree_windings_transformer .[#8D8D8D,thickness=2].> Powsybl_coreIidmTransformersPhase_tap_changer : <color:#8D8D8D>may own per leg
Powsybl_coreIidmHvdcHvdc_line .[#8D8D8D,thickness=2].> Powsybl_coreIidmHvdcVsc_converter_station : <color:#8D8D8D>connects through
Powsybl_coreIidmHvdcHvdc_line .[#8D8D8D,thickness=2].> Powsybl_coreIidmHvdcLcc_converter_station : <color:#8D8D8D>connects through
Powsybl_coreIidmDc_gridDc_terminal .[#8D8D8D,thickness=2].> Powsybl_coreIidmHvdcAc_dc_converters : <color:#8D8D8D>connects DC topology through
Powsybl_coreIidmDc_gridDc_connectivity .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>changes the active topology of
Powsybl_coreIidmExtensionsMeasurements .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>attach measurement data to
Powsybl_coreIidmExtensionsObservability .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>annotate equipment and topology on
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoNetwork_read_write : <color:#8D8D8D>provides facade methods for
Powsybl_coreIidmIoNetwork_read_write .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImporter_spi : <color:#8D8D8D>selects input provider
Powsybl_coreIidmIoNetwork_read_write .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExporter_spi : <color:#8D8D8D>selects output provider
Powsybl_coreIidmIoProvider_discovery .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImporter_spi : <color:#8D8D8D>discovers implementations for
Powsybl_coreIidmIoProvider_discovery .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExporter_spi : <color:#8D8D8D>discovers implementations for
Powsybl_coreIidmIoExchange_formatsCgmes .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersCgmes_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsUcte .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersUcte_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsMatpower .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersMatpower_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsPsse .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersPsse_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsIeee_cdf .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersIeee_cdf_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsPowerfactory .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersPowerfactory_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsXiidm .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersXiidm_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsJiidm .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersJiidm_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoExchange_formatsBiidm .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoImport_providersBiidm_importer : <color:#8D8D8D>loads
Powsybl_coreIidmIoImport_providersCgmes_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersUcte_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersMatpower_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersPsse_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersIeee_cdf_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersPowerfactory_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersXiidm_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersJiidm_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmIoImport_providersBiidm_importer .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>creates or updates
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersCgmes_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersUcte_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersMatpower_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersPsse_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersXiidm_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersJiidm_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersBiidm_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExport_providersAmpl_exporter : <color:#8D8D8D>serializes
Powsybl_coreIidmIoExport_providersCgmes_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsCgmes : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersUcte_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsUcte : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersMatpower_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsMatpower : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersPsse_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsPsse : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersXiidm_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsXiidm : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersJiidm_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsJiidm : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersBiidm_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsBiidm : <color:#8D8D8D>writes
Powsybl_coreIidmIoExport_providersAmpl_exporter .[#8D8D8D,thickness=2].> Powsybl_coreIidmIoExchange_formatsAmpl : <color:#8D8D8D>writes
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmCommon_types : <color:#8D8D8D>is composed of identifiable and connectable objects
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmTopology : <color:#8D8D8D>owns electrical topology
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmInjections : <color:#8D8D8D>owns injections
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmBranches : <color:#8D8D8D>owns AC branches
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmTransformers : <color:#8D8D8D>owns transformers and tap changers
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmHvdc : <color:#8D8D8D>owns DC equipment
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmLimits_and_control : <color:#8D8D8D>owns equipment with limits and automation
Powsybl_coreIidmExtensionsTransformer_estimation_flags .[#8D8D8D,thickness=2].> Powsybl_coreIidmTransformers : <color:#8D8D8D>annotate equipment in
@enduml
`;case`loadflow_interaction`:return`@startuml
title "Load Flow: powsybl-core to Open Load Flow"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreLoadflow_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCommons>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreMath>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmExtensions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowOpen_loadflow_provider>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cache>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_engines>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapter>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mapping>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Load Flow API\\n\\nLoadFlow.Runner and the LoadFlowProvider SPI." <<Powsybl_coreLoadflow_api>> as Powsybl_coreLoadflow_api
  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "==Network lifecycle\\n\\nNetwork creation, variants, and mutation notifications." <<Powsybl_coreIidmVariants>> as Powsybl_coreIidmVariants
    rectangle "==IIDM extensions\\n\\nExtension points and common calculated-state extensions." <<Powsybl_coreIidmExtensions>> as Powsybl_coreIidmExtensions
    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
  }
  rectangle "==Commons services\\n\\nServiceLoader, ComputationManager, PlatformConfig, ReportNode, and Extension contracts." <<Powsybl_coreCommons>> as Powsybl_coreCommons
  rectangle "==Math API\\n\\nMatrixFactory and shared numerical abstractions." <<Powsybl_coreMath>> as Powsybl_coreMath
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==OpenLoadFlowProvider\\n\\nImplements LoadFlowProvider for AC and DC load flows." <<Powsybl_open_loadflowOpen_loadflow_provider>> as Powsybl_open_loadflowOpen_loadflow_provider
  rectangle "==NetworkCache\\n\\nNetworkListener-backed cache for incremental AC load-flow runs (AC only on main)." <<Powsybl_open_loadflowNetwork_cache>> as Powsybl_open_loadflowNetwork_cache
  rectangle "==AC/DC load-flow engines\\n\\nAcloadFlowEngine, DcLoadFlowEngine, AC solvers, and outer loops." <<Powsybl_open_loadflowAc_dc_loadflow_engines>> as Powsybl_open_loadflowAc_dc_loadflow_engines
  rectangle "==IIDM to LfNetwork adapter\\n\\nNetworks, LfNetworkLoaderImpl, and equipment-specific Lf* adapters." <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter
  rectangle "==IIDM state and core-result mapping\\n\\nUpdates IIDM state and adapts solver outputs to Core result contracts." <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping
  rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
}

Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreIidmVariants .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>[...]
Powsybl_coreIidmExtensions .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>enriches state and results on
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreMath : <color:#8D8D8D>supplies matrix capability to providers
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_loadflow_provider : <color:#8D8D8D>discovers and runs
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>runs AC or DC calculation
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>is adapted by
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>loads the computation network
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>configures
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>runs AC or DC calculation on
Powsybl_open_loadflowLf_network_adapter .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>builds and configures
Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>provides loaded network to
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>returns results for write-back
Powsybl_open_loadflowNetwork_cache .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>reuses and invalidates
Powsybl_open_loadflowNetwork_cache .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>writes completed AC state through
@enduml
`;case`sensitivity_interaction`:return`@startuml
title "Sensitivity Analysis: powsybl-core to Open Load Flow"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreSensitivity_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreContingency_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCommons>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmVariants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowOpen_sensitivity_provider>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowOpen_loadflow_provider>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowSensitivity_engines>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapter>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Sensitivity Analysis API\\n\\nSensitivityAnalysis.Runner and the SensitivityAnalysisProvider SPI." <<Powsybl_coreSensitivity_api>> as Powsybl_coreSensitivity_api
  rectangle "==Contingency API\\n\\nContingency, ContingenciesProvider, and contingency elements." <<Powsybl_coreContingency_api>> as Powsybl_coreContingency_api
  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "==Network lifecycle\\n\\nNetwork creation, variants, and mutation notifications." <<Powsybl_coreIidmVariants>> as Powsybl_coreIidmVariants
    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
  }
  rectangle "==Commons services\\n\\nServiceLoader, ComputationManager, PlatformConfig, ReportNode, and Extension contracts." <<Powsybl_coreCommons>> as Powsybl_coreCommons
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==OpenSensitivityAnalysisProvider\\n\\nImplements SensitivityAnalysisProvider." <<Powsybl_open_loadflowOpen_sensitivity_provider>> as Powsybl_open_loadflowOpen_sensitivity_provider
  rectangle "==OpenLoadFlowProvider\\n\\nImplements LoadFlowProvider for AC and DC load flows." <<Powsybl_open_loadflowOpen_loadflow_provider>> as Powsybl_open_loadflowOpen_loadflow_provider
  rectangle "==AC/DC sensitivity engines\\n\\nAcSensitivityAnalysis and DcSensitivityAnalysis." <<Powsybl_open_loadflowSensitivity_engines>> as Powsybl_open_loadflowSensitivity_engines
  rectangle "==IIDM to LfNetwork adapter\\n\\nNetworks, LfNetworkLoaderImpl, and equipment-specific Lf* adapters." <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter
  rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
}

Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreContingency_api : <color:#8D8D8D>accepts contingency and action inputs
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreIidmVariants .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>[...]
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_sensitivity_provider : <color:#8D8D8D>discovers and runs
Powsybl_open_loadflowOpen_sensitivity_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_loadflow_provider : <color:#8D8D8D>uses the configured base-case load-flow provider
Powsybl_open_loadflowOpen_sensitivity_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowSensitivity_engines : <color:#8D8D8D>runs sensitivity calculation
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>is adapted by
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>loads the computation network
Powsybl_open_loadflowSensitivity_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>loads base-case topology
Powsybl_open_loadflowSensitivity_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>computes derivatives on
Powsybl_open_loadflowLf_network_adapter .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>builds and configures
@enduml
`;case`contingency_analysis_interaction`:return`@startuml
title "Contingency Analysis: powsybl-core to Open Load Flow"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreSecurity_analysis_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreLoadflow_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreContingency_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCommons>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmNetwork>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidmTopology>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowOpen_security_provider>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowSecurity_analysis_engines>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowContingency_propagation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapter>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mapping>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Security Analysis API\\n\\nSecurityAnalysis.Runner and the SecurityAnalysisProvider SPI." <<Powsybl_coreSecurity_analysis_api>> as Powsybl_coreSecurity_analysis_api
  rectangle "==Load Flow API\\n\\nLoadFlow.Runner and the LoadFlowProvider SPI." <<Powsybl_coreLoadflow_api>> as Powsybl_coreLoadflow_api
  rectangle "==Contingency API\\n\\nContingency, ContingenciesProvider, and contingency elements." <<Powsybl_coreContingency_api>> as Powsybl_coreContingency_api
  rectangle "IIDM API and extensions" <<Powsybl_coreIidm>> as Powsybl_coreIidm {
    skinparam RectangleBorderColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleFontColor<<Powsybl_coreIidm>> #3b82f6
    skinparam RectangleBorderStyle<<Powsybl_coreIidm>> dashed

    rectangle "==Network\\n\\nIIDM Network and working variant passed by reference to every analysis." <<Powsybl_coreIidmNetwork>> as Powsybl_coreIidmNetwork
    rectangle "==Topology and containment\\n\\nThe AC network hierarchy and its bus/breaker or node/breaker topology." <<Powsybl_coreIidmTopology>> as Powsybl_coreIidmTopology
  }
  rectangle "==Commons services\\n\\nServiceLoader, ComputationManager, PlatformConfig, ReportNode, and Extension contracts." <<Powsybl_coreCommons>> as Powsybl_coreCommons
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==OpenSecurityAnalysisProvider\\n\\nImplements SecurityAnalysisProvider." <<Powsybl_open_loadflowOpen_security_provider>> as Powsybl_open_loadflowOpen_security_provider
  rectangle "==Security analysis engines\\n\\nAcSecurityAnalysis, DcSecurityAnalysis, and WoodburyDcSecurityAnalysis." <<Powsybl_open_loadflowSecurity_analysis_engines>> as Powsybl_open_loadflowSecurity_analysis_engines
  rectangle "==Contingency propagation\\n\\nPropagatedContingency, ContingencyTripping, and node/breaker traversal." <<Powsybl_open_loadflowContingency_propagation>> as Powsybl_open_loadflowContingency_propagation
  rectangle "==IIDM to LfNetwork adapter\\n\\nNetworks, LfNetworkLoaderImpl, and equipment-specific Lf* adapters." <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter
  rectangle "==IIDM state and core-result mapping\\n\\nUpdates IIDM state and adapts solver outputs to Core result contracts." <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping
  rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
}

Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreLoadflow_api : <color:#8D8D8D>uses load-flow parameters
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreContingency_api : <color:#8D8D8D>obtains contingencies
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreIidmNetwork : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_coreIidmTopology : <color:#8D8D8D>owns electrical topology
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_security_provider : <color:#8D8D8D>discovers and runs
Powsybl_open_loadflowOpen_security_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowSecurity_analysis_engines : <color:#8D8D8D>runs pre/post-contingency simulations
Powsybl_coreContingency_api .[#8D8D8D,thickness=2].> Powsybl_open_loadflowContingency_propagation : <color:#8D8D8D>is propagated by
Powsybl_open_loadflowSecurity_analysis_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowContingency_propagation : <color:#8D8D8D>converts and applies outages
Powsybl_coreIidmNetwork .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>is adapted by
Powsybl_open_loadflowSecurity_analysis_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>creates topology-specific networks
Powsybl_open_loadflowContingency_propagation .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>produces LfContingency operations for
Powsybl_open_loadflowLf_network_adapter .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>builds and configures
Powsybl_open_loadflowSecurity_analysis_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>maps security results
Powsybl_open_loadflowState_and_result_mapping .[#8D8D8D,thickness=2].> Powsybl_coreSecurity_analysis_api : <color:#8D8D8D>returns results through
@enduml
`;case`core_repository_structure`:return`@startuml
title "powsybl-core: Repository structure"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_coreSensitivity_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreSecurity_analysis_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreStudy_contracts>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreLoadflow_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreContingency_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreIidm>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_coreCommons>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreMath>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_coreCgmes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-core" <<Powsybl_core>> as Powsybl_core {
  skinparam RectangleBorderColor<<Powsybl_core>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_core>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_core>> dashed

  rectangle "==Sensitivity Analysis API\\n\\nSensitivityAnalysis.Runner and the SensitivityAnalysisProvider SPI." <<Powsybl_coreSensitivity_api>> as Powsybl_coreSensitivity_api
  rectangle "==Security Analysis API\\n\\nSecurityAnalysis.Runner and the SecurityAnalysisProvider SPI." <<Powsybl_coreSecurity_analysis_api>> as Powsybl_coreSecurity_analysis_api
  rectangle "==Study contracts" <<Powsybl_coreStudy_contracts>> as Powsybl_coreStudy_contracts
  rectangle "==Load Flow API\\n\\nLoadFlow.Runner and the LoadFlowProvider SPI." <<Powsybl_coreLoadflow_api>> as Powsybl_coreLoadflow_api
  rectangle "==Contingency API\\n\\nContingency, ContingenciesProvider, and contingency elements." <<Powsybl_coreContingency_api>> as Powsybl_coreContingency_api
  rectangle "==IIDM API and extensions\\n\\nThe mutable electrical-network object model, its principal interfaces, extensions, and format providers." <<Powsybl_coreIidm>> as Powsybl_coreIidm
  rectangle "==Commons services\\n\\nServiceLoader, ComputationManager, PlatformConfig, ReportNode, and Extension contracts." <<Powsybl_coreCommons>> as Powsybl_coreCommons
  rectangle "==Math API\\n\\nMatrixFactory and shared numerical abstractions." <<Powsybl_coreMath>> as Powsybl_coreMath
  rectangle "==CGMES conversion\\n\\nImport and export of CGMES grid models." <<Powsybl_coreCgmes>> as Powsybl_coreCgmes
}

Powsybl_coreIidm .[#8D8D8D,thickness=2].> Powsybl_coreCgmes : <color:#8D8D8D>[...]
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>accepts Network and working variant
Powsybl_coreCgmes .[#8D8D8D,thickness=2].> Powsybl_coreIidm : <color:#8D8D8D>[...]
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contracts : <color:#8D8D8D>[...]
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreStudy_contracts : <color:#8D8D8D>[...]
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreLoadflow_api .[#8D8D8D,thickness=2].> Powsybl_coreMath : <color:#8D8D8D>supplies matrix capability to providers
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreLoadflow_api : <color:#8D8D8D>uses load-flow parameters
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreContingency_api : <color:#8D8D8D>accepts contingency and action inputs
Powsybl_coreSensitivity_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreContingency_api : <color:#8D8D8D>obtains contingencies
Powsybl_coreSecurity_analysis_api .[#8D8D8D,thickness=2].> Powsybl_coreCommons : <color:#8D8D8D>discovers provider and reports execution
@enduml
`;case`fast_restart_and_network_cache`:return`@startuml
title "Open Load Flow: Fast Restart and NetworkCache"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheIidm_change_events>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheChange_classifier>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cacheAc_fast_restart>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mapping>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
rectangle "NetworkCache" <<Powsybl_open_loadflowNetwork_cache>> as Powsybl_open_loadflowNetwork_cache {
  skinparam RectangleBorderColor<<Powsybl_open_loadflowNetwork_cache>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflowNetwork_cache>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflowNetwork_cache>> dashed

  rectangle "==IIDM NetworkListener changes\\n\\nIIDM mutations notify the cache about changed equipment, parameters, and topology." <<Powsybl_open_loadflowNetwork_cacheIidm_change_events>> as Powsybl_open_loadflowNetwork_cacheIidm_change_events
  rectangle "==Cache update classification\\n\\nClassifies every IIDM change (CacheUpdateStatus): an update the cache can apply in place marks the cached AC context as network-updated, an unsupported one invalidates the entry." <<Powsybl_open_loadflowNetwork_cacheChange_classifier>> as Powsybl_open_loadflowNetwork_cacheChange_classifier
  rectangle "==NetworkCache.Entry\\n\\nOwns the cache lifecycle, working variant cleanup, pause guard, and invalidation state for one IIDM Network." <<Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry>> as Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry
  rectangle "==AcLoadFlowFromCache\\n\\nReuses a cached AC computation network when the input is still compatible." <<Powsybl_open_loadflowNetwork_cacheAc_fast_restart>> as Powsybl_open_loadflowNetwork_cacheAc_fast_restart
}
rectangle "==IIDM state and core-result mapping\\n\\nUpdates IIDM state and adapts solver outputs to Core result contracts." <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping

Powsybl_open_loadflowNetwork_cacheIidm_change_events .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry : <color:#8D8D8D>notifies
Powsybl_open_loadflowNetwork_cacheIidm_change_events .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheChange_classifier : <color:#8D8D8D>classifies changes through
Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheAc_fast_restart : <color:#8D8D8D>holds the AcLoadFlowContext reused by
Powsybl_open_loadflowNetwork_cacheChange_classifier .[#8D8D8D,thickness=2].> Powsybl_open_loadflowNetwork_cacheNetwork_cache_entry : <color:#8D8D8D>marks the cached context for update or invalidates
Powsybl_open_loadflowNetwork_cacheAc_fast_restart .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>writes completed AC state through
@enduml
`;case`solver_and_outer_loop_pipeline`:return`@startuml
title "Open Load Flow: AC Solver and Outer-Loop Pipeline"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesLoad_flow_request>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapterNetwork_loader>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_solver_factory>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mapping>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Powsybl_open_loadflowEquation_toolkitAc_equation_builder>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_open_loadflowEquation_toolkitEquation_system>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_raphson>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_krylov>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesFast_decoupled>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_enginesOuter_loop_chain>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "AC/DC load-flow engines" <<Powsybl_open_loadflowAc_dc_loadflow_engines>> as Powsybl_open_loadflowAc_dc_loadflow_engines {
  skinparam RectangleBorderColor<<Powsybl_open_loadflowAc_dc_loadflow_engines>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflowAc_dc_loadflow_engines>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflowAc_dc_loadflow_engines>> dashed

  rectangle "==Load-flow run and OpenLoadFlowParameters\\n\\nSelects the AC solver, topology options, controls, and reporting level." <<Powsybl_open_loadflowAc_dc_loadflow_enginesLoad_flow_request>> as Powsybl_open_loadflowAc_dc_loadflow_enginesLoad_flow_request
  rectangle "==AcloadFlowEngine\\n\\nCoordinates AC equation construction, solver calls, outer loops, and final status." <<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine>> as Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine
  rectangle "==AcSolverFactory\\n\\nValidates parameter compatibility and selects the configured AC solver." <<Powsybl_open_loadflowAc_dc_loadflow_enginesAc_solver_factory>> as Powsybl_open_loadflowAc_dc_loadflow_enginesAc_solver_factory
  rectangle "==NewtonRaphson\\n\\nDefault nonlinear AC solver." <<Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_raphson>> as Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_raphson
  rectangle "==NewtonKrylov\\n\\nNonlinear AC solver using Krylov methods." <<Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_krylov>> as Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_krylov
  rectangle "==FastDecoupled\\n\\nAC solver that separates active/angle and reactive/voltage-magnitude iterations." <<Powsybl_open_loadflowAc_dc_loadflow_enginesFast_decoupled>> as Powsybl_open_loadflowAc_dc_loadflow_enginesFast_decoupled
  rectangle "==AC outer-loop chain\\n\\nVoltage, reactive-limit, phase-shifter, and active-power-distribution controls that may request another solve." <<Powsybl_open_loadflowAc_dc_loadflow_enginesOuter_loop_chain>> as Powsybl_open_loadflowAc_dc_loadflow_enginesOuter_loop_chain
}
rectangle "IIDM to LfNetwork adapter" <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter {
  skinparam RectangleBorderColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflowLf_network_adapter>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflowLf_network_adapter>> dashed

  rectangle "==Networks and LfNetworkLoader\\n\\nBuilds the solver-facing topology and reconnectable elements from IIDM." <<Powsybl_open_loadflowLf_network_adapterNetwork_loader>> as Powsybl_open_loadflowLf_network_adapterNetwork_loader
}
rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
rectangle "Equation builder toolkits" <<Powsybl_open_loadflowEquation_toolkit>> as Powsybl_open_loadflowEquation_toolkit {
  skinparam RectangleBorderColor<<Powsybl_open_loadflowEquation_toolkit>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflowEquation_toolkit>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflowEquation_toolkit>> dashed

  rectangle "==AC equation builders\\n\\nAcEquationSystemCreator and AcEquationSystemUpdater." <<Powsybl_open_loadflowEquation_toolkitAc_equation_builder>> as Powsybl_open_loadflowEquation_toolkitAc_equation_builder
  rectangle "==EquationSystem and Jacobian infrastructure\\n\\nEquationSystem, EquationTerm, EquationArray, VariableSet, TargetVector, StateVector, JacobianMatrix, and JacobianMatrixFastDecoupled." <<Powsybl_open_loadflowEquation_toolkitEquation_system>> as Powsybl_open_loadflowEquation_toolkitEquation_system
}
rectangle "==IIDM state and core-result mapping\\n\\nUpdates IIDM state and adapts solver outputs to Core result contracts." <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping

Powsybl_open_loadflowAc_dc_loadflow_enginesLoad_flow_request .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapterNetwork_loader : <color:#8D8D8D>configures
Powsybl_open_loadflowLf_network_adapterNetwork_loader .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>builds and configures
Powsybl_open_loadflowAc_dc_loadflow_enginesLoad_flow_request .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine : <color:#8D8D8D>configures
Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine : <color:#8D8D8D>provides loaded network to
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine .[#8D8D8D,thickness=2].> Powsybl_open_loadflowEquation_toolkitAc_equation_builder : <color:#8D8D8D>creates and updates AC equations through
Powsybl_open_loadflowEquation_toolkitAc_equation_builder .[#8D8D8D,thickness=2].> Powsybl_open_loadflowEquation_toolkitEquation_system : <color:#8D8D8D>constructs and updates
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesAc_solver_factory : <color:#8D8D8D>selects a solver through
Powsybl_open_loadflowEquation_toolkitEquation_system .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_raphson : <color:#8D8D8D>supplies equations to
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_solver_factory .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_raphson : <color:#8D8D8D>creates when selected
Powsybl_open_loadflowEquation_toolkitEquation_system .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_krylov : <color:#8D8D8D>supplies equations to
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_solver_factory .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_krylov : <color:#8D8D8D>creates when selected
Powsybl_open_loadflowEquation_toolkitEquation_system .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesFast_decoupled : <color:#8D8D8D>supplies equations to
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_solver_factory .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesFast_decoupled : <color:#8D8D8D>creates when selected
Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_raphson .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesOuter_loop_chain : <color:#8D8D8D>returns state to
Powsybl_open_loadflowAc_dc_loadflow_enginesNewton_krylov .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesOuter_loop_chain : <color:#8D8D8D>returns state to
Powsybl_open_loadflowAc_dc_loadflow_enginesFast_decoupled .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesOuter_loop_chain : <color:#8D8D8D>returns state to
Powsybl_open_loadflowAc_dc_loadflow_enginesOuter_loop_chain .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine : <color:#8D8D8D>updates controls and requests another pass from
Powsybl_open_loadflowAc_dc_loadflow_enginesAc_load_flow_engine .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>writes final state through
@enduml
`;case`open_loadflow_components`:return`@startuml
title "powsybl-open-loadflow Components"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Powsybl_open_loadflowCoupled_ac_dc_lf_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowNetwork_cache>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowOpen_security_provider>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowOpen_sensitivity_provider>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowSecurity_analysis_engines>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowSensitivity_engines>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowOpen_loadflow_provider>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowContingency_propagation>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_loadflow_engines>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowStudy_execution>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network_adapter>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowAc_dc_result_mapping>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowState_and_result_mapping>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowLf_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Powsybl_open_loadflowEquation_toolkit>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "powsybl-open-loadflow" <<Powsybl_open_loadflow>> as Powsybl_open_loadflow {
  skinparam RectangleBorderColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleFontColor<<Powsybl_open_loadflow>> #3b82f6
  skinparam RectangleBorderStyle<<Powsybl_open_loadflow>> dashed

  rectangle "==Coupled LfNetwork\\n\\nSolver-facing AC and DC state, including synchronous components and converter couplings." <<Powsybl_open_loadflowCoupled_ac_dc_lf_network>> as Powsybl_open_loadflowCoupled_ac_dc_lf_network
  rectangle "==NetworkCache\\n\\nNetworkListener-backed cache for incremental AC load-flow runs (AC only on main)." <<Powsybl_open_loadflowNetwork_cache>> as Powsybl_open_loadflowNetwork_cache
  rectangle "==OpenSecurityAnalysisProvider\\n\\nImplements SecurityAnalysisProvider." <<Powsybl_open_loadflowOpen_security_provider>> as Powsybl_open_loadflowOpen_security_provider
  rectangle "==OpenSensitivityAnalysisProvider\\n\\nImplements SensitivityAnalysisProvider." <<Powsybl_open_loadflowOpen_sensitivity_provider>> as Powsybl_open_loadflowOpen_sensitivity_provider
  rectangle "==Security analysis engines\\n\\nAcSecurityAnalysis, DcSecurityAnalysis, and WoodburyDcSecurityAnalysis." <<Powsybl_open_loadflowSecurity_analysis_engines>> as Powsybl_open_loadflowSecurity_analysis_engines
  rectangle "==AC/DC sensitivity engines\\n\\nAcSensitivityAnalysis and DcSensitivityAnalysis." <<Powsybl_open_loadflowSensitivity_engines>> as Powsybl_open_loadflowSensitivity_engines
  rectangle "==OpenLoadFlowProvider\\n\\nImplements LoadFlowProvider for AC and DC load flows." <<Powsybl_open_loadflowOpen_loadflow_provider>> as Powsybl_open_loadflowOpen_loadflow_provider
  rectangle "==Contingency propagation\\n\\nPropagatedContingency, ContingencyTripping, and node/breaker traversal." <<Powsybl_open_loadflowContingency_propagation>> as Powsybl_open_loadflowContingency_propagation
  rectangle "==AC/DC load-flow engines\\n\\nAcloadFlowEngine, DcLoadFlowEngine, AC solvers, and outer loops." <<Powsybl_open_loadflowAc_dc_loadflow_engines>> as Powsybl_open_loadflowAc_dc_loadflow_engines
  rectangle "==Study execution" <<Powsybl_open_loadflowStudy_execution>> as Powsybl_open_loadflowStudy_execution
  rectangle "==IIDM to LfNetwork adapter\\n\\nNetworks, LfNetworkLoaderImpl, and equipment-specific Lf* adapters." <<Powsybl_open_loadflowLf_network_adapter>> as Powsybl_open_loadflowLf_network_adapter
  rectangle "==IIDM state and Core result mapping\\n\\nWrites converged electrical state back to IIDM and creates LoadFlow results." <<Powsybl_open_loadflowAc_dc_result_mapping>> as Powsybl_open_loadflowAc_dc_result_mapping
  rectangle "==IIDM state and core-result mapping\\n\\nUpdates IIDM state and adapts solver outputs to Core result contracts." <<Powsybl_open_loadflowState_and_result_mapping>> as Powsybl_open_loadflowState_and_result_mapping
  rectangle "==LfNetwork\\n\\nSolver-facing electrical network, topology, equations, and state." <<Powsybl_open_loadflowLf_network>> as Powsybl_open_loadflowLf_network
  rectangle "==Equation builder toolkits\\n\\nEquation-system infrastructure and AC/DC builders used by the numerical engines." <<Powsybl_open_loadflowEquation_toolkit>> as Powsybl_open_loadflowEquation_toolkit
}

Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>configures
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_result_mapping : <color:#8D8D8D>produces converged state for
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>returns results for write-back
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowEquation_toolkit : <color:#8D8D8D>builds AC and DC equations with
Powsybl_open_loadflowAc_dc_loadflow_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>runs AC or DC calculation on
Powsybl_open_loadflowCoupled_ac_dc_lf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>supplies coupled equations to
Powsybl_open_loadflowEquation_toolkit .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>supplies equations to
Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>provides loaded network to
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowAc_dc_loadflow_engines : <color:#8D8D8D>runs AC or DC calculation
Powsybl_open_loadflowLf_network_adapter .[#8D8D8D,thickness=2].> Powsybl_open_loadflowCoupled_ac_dc_lf_network : <color:#8D8D8D>builds
Powsybl_open_loadflowLf_network_adapter .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>builds and configures
Powsybl_open_loadflowSecurity_analysis_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>creates topology-specific networks
Powsybl_open_loadflowSensitivity_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>loads base-case topology
Powsybl_open_loadflowOpen_loadflow_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network_adapter : <color:#8D8D8D>loads the computation network
Powsybl_open_loadflowStudy_execution .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>adds violations to
Powsybl_open_loadflowContingency_propagation .[#8D8D8D,thickness=2].> Powsybl_open_loadflowStudy_execution : <color:#8D8D8D>applies outages for
Powsybl_open_loadflowNetwork_cache .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>writes completed AC state through
Powsybl_open_loadflowSecurity_analysis_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowState_and_result_mapping : <color:#8D8D8D>maps security results
Powsybl_open_loadflowNetwork_cache .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>reuses and invalidates
Powsybl_open_loadflowSecurity_analysis_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowContingency_propagation : <color:#8D8D8D>converts and applies outages
Powsybl_open_loadflowOpen_security_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowSecurity_analysis_engines : <color:#8D8D8D>runs pre/post-contingency simulations
Powsybl_open_loadflowSensitivity_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowEquation_toolkit : <color:#8D8D8D>reuses factorized Jacobians from
Powsybl_open_loadflowSensitivity_engines .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>computes derivatives on
Powsybl_open_loadflowOpen_sensitivity_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowSensitivity_engines : <color:#8D8D8D>runs sensitivity calculation
Powsybl_open_loadflowLf_network .[#8D8D8D,thickness=2].> Powsybl_open_loadflowEquation_toolkit : <color:#8D8D8D>supplies variables and network state to
Powsybl_open_loadflowContingency_propagation .[#8D8D8D,thickness=2].> Powsybl_open_loadflowLf_network : <color:#8D8D8D>produces LfContingency operations for
Powsybl_open_loadflowOpen_sensitivity_provider .[#8D8D8D,thickness=2].> Powsybl_open_loadflowOpen_loadflow_provider : <color:#8D8D8D>uses the configured base-case load-flow provider
@enduml
`;case`capability_and_provider_bundle`:return`@startuml
title "pypowsybl: Capability and Provider Bundle"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Pypowsybl_capability_bundleNetwork_and_steady_state>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Pypowsybl_capability_bundleOptimization_and_reac>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Pypowsybl_capability_bundleOperational_studies>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Pypowsybl_capability_bundleDynamic_and_visualization>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PypowsyblNative_image_bridge>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Pypowsybl_bundled_servicesCore_iidm_and_formats>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Pypowsybl_bundled_servicesOpen_loadflow_services>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Pypowsybl_bundled_servicesOptimization_and_reac_services>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Pypowsybl_bundled_servicesOperational_study_services>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Pypowsybl_bundled_servicesDynamic_and_diagram_services>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "pypowsybl: capability families" <<Pypowsybl_capability_bundle>> as Pypowsybl_capability_bundle {
  skinparam RectangleBorderColor<<Pypowsybl_capability_bundle>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl_capability_bundle>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl_capability_bundle>> dashed

  rectangle "==Network and steady-state analysis\\n\\nIIDM creation, formats, extensions, load flow, security analysis, and sensitivity analysis." <<Pypowsybl_capability_bundleNetwork_and_steady_state>> as Pypowsybl_capability_bundleNetwork_and_steady_state
  rectangle "==Optimization and remedial action\\n\\nThe Python AC/ACDC OPF prototype and bindings to Open REAC services." <<Pypowsybl_capability_bundleOptimization_and_reac>> as Pypowsybl_capability_bundleOptimization_and_reac
  rectangle "==Operational studies\\n\\nRAO and CRAC, short circuit, flow decomposition, and GLSK operations." <<Pypowsybl_capability_bundleOperational_studies>> as Pypowsybl_capability_bundleOperational_studies
  rectangle "==Dynamic simulation and visualization\\n\\nDynawo/Dynaflow workflows and single-line/network-area diagrams." <<Pypowsybl_capability_bundleDynamic_and_visualization>> as Pypowsybl_capability_bundleDynamic_and_visualization
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==GraalVM native-image bridge\\n\\nPowsyblCaller and GraalVmGuard cross the native-image isolate boundary." <<PypowsyblNative_image_bridge>> as PypowsyblNative_image_bridge
}
rectangle "pypowsybl: bundled service families" <<Pypowsybl_bundled_services>> as Pypowsybl_bundled_services {
  skinparam RectangleBorderColor<<Pypowsybl_bundled_services>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl_bundled_services>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl_bundled_services>> dashed

  rectangle "==Core IIDM, formats, and CGMES\\n\\nIIDM API/implementation, conversion, serde, format providers, and topology tools." <<Pypowsybl_bundled_servicesCore_iidm_and_formats>> as Pypowsybl_bundled_servicesCore_iidm_and_formats
  rectangle "==Open Load Flow providers\\n\\nLoad flow, security analysis, and sensitivity analysis providers." <<Pypowsybl_bundled_servicesOpen_loadflow_services>> as Pypowsybl_bundled_servicesOpen_loadflow_services
  rectangle "==Optimization and Open REAC\\n\\nOpen REAC services plus PyOptInterface and native solver backends used by the Python OPF prototype." <<Pypowsybl_bundled_servicesOptimization_and_reac_services>> as Pypowsybl_bundled_servicesOptimization_and_reac_services
  rectangle "==RAO, CRAC, short circuit, and flow decomposition\\n\\nOpen RAO/CRAC readers, writers, monitoring, short-circuit providers, flow decomposition, and UCTE GLSK support." <<Pypowsybl_bundled_servicesOperational_study_services>> as Pypowsybl_bundled_servicesOperational_study_services
  rectangle "==Dynawo, Dynaflow, SLD, and NAD\\n\\nDynamic simulation, dynamic security analysis, single-line diagrams, and network-area diagrams." <<Pypowsybl_bundled_servicesDynamic_and_diagram_services>> as Pypowsybl_bundled_servicesDynamic_and_diagram_services
}

Pypowsybl_capability_bundleNetwork_and_steady_state .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesCore_iidm_and_formats : <color:#8D8D8D>maps DataFrames and handles to
Pypowsybl_capability_bundleNetwork_and_steady_state .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesOpen_loadflow_services : <color:#8D8D8D>selects through Core APIs
Pypowsybl_capability_bundleOptimization_and_reac .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesOptimization_and_reac_services : <color:#8D8D8D>maps to
Pypowsybl_capability_bundleOperational_studies .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesOperational_study_services : <color:#8D8D8D>maps to
Pypowsybl_capability_bundleDynamic_and_visualization .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesDynamic_and_diagram_services : <color:#8D8D8D>maps to
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesCore_iidm_and_formats : <color:#8D8D8D>loads
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesOpen_loadflow_services : <color:#8D8D8D>loads
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesOptimization_and_reac_services : <color:#8D8D8D>loads
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesOperational_study_services : <color:#8D8D8D>loads
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> Pypowsybl_bundled_servicesDynamic_and_diagram_services : <color:#8D8D8D>loads
@enduml
`;case`pypowsybl_binding_layers`:return`@startuml
title "pypowsybl: Binding and DataFrame layers"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<PypowsyblAc_dc_opf>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPython_study_parameters>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPython_api>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblDc_dataframes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPython_network>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblDataframe_views>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPybind_extension>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblNative_image_bridge>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblPandas_study_results>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblDataframe_mappers>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblMeasurement_and_observability_dataframes>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblJava_bindingsNetwork_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<PypowsyblJava_bindingsAnalysis_c_functions>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "pypowsybl" <<Pypowsybl>> as Pypowsybl {
  skinparam RectangleBorderColor<<Pypowsybl>> #3b82f6
  skinparam RectangleFontColor<<Pypowsybl>> #3b82f6
  skinparam RectangleBorderStyle<<Pypowsybl>> dashed

  rectangle "==AC/DC OPF prototype\\n\\nA separate Python optimization model that adds DC voltages, currents, converter constraints, and an AC/DC objective." <<PypowsyblAc_dc_opf>> as PypowsyblAc_dc_opf
  rectangle "==Python study parameter facades\\n\\nPython load-flow, security-analysis, and sensitivity-analysis parameters." <<PypowsyblPython_study_parameters>> as PypowsyblPython_study_parameters
  rectangle "==Python domain APIs\\n\\nnetwork, loadflow, security, sensitivity, and other Python facades." <<PypowsyblPython_api>> as PypowsyblPython_api
  rectangle "==Network DC DataFrames and mutation APIs\\n\\nExposes DC equipment, converter attributes, connection state, and solved values through pandas DataFrames." <<PypowsyblDc_dataframes>> as PypowsyblDc_dataframes
  rectangle "==pypowsybl.network.Network\\n\\nNetwork._handle retains the opaque Java object handle across native calls." <<PypowsyblPython_network>> as PypowsyblPython_network
  rectangle "==pandas DataFrame adapters\\n\\nConvert pandas DataFrames to native dataframes and SeriesArray results back to pandas." <<PypowsyblDataframe_views>> as PypowsyblDataframe_views
  rectangle "==_pypowsybl pybind11 extension\\n\\nThe C++ extension module used by the Python API." <<PypowsyblPybind_extension>> as PypowsyblPybind_extension
  rectangle "==GraalVM native-image bridge\\n\\nPowsyblCaller and GraalVmGuard cross the native-image isolate boundary." <<PypowsyblNative_image_bridge>> as PypowsyblNative_image_bridge
  rectangle "==pandas study result adapters\\n\\nDataFrames for monitored state, violations, factors, and statuses." <<PypowsyblPandas_study_results>> as PypowsyblPandas_study_results
  rectangle "Java C entry points" <<PypowsyblJava_bindings>> as PypowsyblJava_bindings {
    skinparam RectangleBorderColor<<PypowsyblJava_bindings>> #3b82f6
    skinparam RectangleFontColor<<PypowsyblJava_bindings>> #3b82f6
    skinparam RectangleBorderStyle<<PypowsyblJava_bindings>> dashed

    rectangle "==NetworkCFunctions" <<PypowsyblJava_bindingsNetwork_c_functions>> as PypowsyblJava_bindingsNetwork_c_functions
    rectangle "==LoadFlowCFunctions, SecurityAnalysisCFunctions, SensitivityAnalysisCFunctions" <<PypowsyblJava_bindingsAnalysis_c_functions>> as PypowsyblJava_bindingsAnalysis_c_functions
  }
  rectangle "==Java DataFrame mappers\\n\\nNetworkDataframes, DataframeMapper, adders, and modification mappers over IIDM." <<PypowsyblDataframe_mappers>> as PypowsyblDataframe_mappers
  rectangle "==Measurement and observability DataFrames\\n\\nMeasurementsDataframeProvider, BranchObservabilityDataframeProvider, and InjectionObservabilityDataframeProvider expose existing IIDM extensions to Python." <<PypowsyblMeasurement_and_observability_dataframes>> as PypowsyblMeasurement_and_observability_dataframes
}

PypowsyblAc_dc_opf .[#8D8D8D,thickness=2].> PypowsyblDc_dataframes : <color:#8D8D8D>reads inputs and writes solved values through
PypowsyblPython_study_parameters .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridge : <color:#8D8D8D>marshals through
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> PypowsyblPandas_study_results : <color:#8D8D8D>returns result series through
PypowsyblPybind_extension .[#8D8D8D,thickness=2].> PypowsyblNative_image_bridge : <color:#8D8D8D>calls native-image entry points through
PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblPython_network : <color:#8D8D8D>creates and passes Network handles
PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>calls the extension module
PypowsyblPython_api .[#8D8D8D,thickness=2].> PypowsyblDataframe_views : <color:#8D8D8D>accepts and returns pandas DataFrames
PypowsyblPython_network .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>passes its opaque handle to
PypowsyblDataframe_views .[#8D8D8D,thickness=2].> PypowsyblPybind_extension : <color:#8D8D8D>marshals Dataframe and SeriesArray data through
PypowsyblDataframe_mappers .[#8D8D8D,thickness=2].> PypowsyblMeasurement_and_observability_dataframes : <color:#8D8D8D>registers providers for
PypowsyblNative_image_bridge .[#8D8D8D,thickness=2].> PypowsyblJava_bindings : <color:#8D8D8D>forwards calls across the isolate to
PypowsyblJava_bindings .[#8D8D8D,thickness=2].> PypowsyblDataframe_mappers : <color:#8D8D8D>maps IIDM elements and result series through
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};