# Architecture Evidence

This ledger records the source-backed evidence for the State Estimation as-is baseline. It documents what exists in the checked-out repositories; it is not evidence for any element in `model/proposals/`.

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
| No factual State Estimation API, provider, module, WLS kernel, result type, or report | powsybl-core and powsybl-open-loadflow | `powsybl-core/pom.xml`; Java source trees in both repositories searched for State Estimation and WLS terminology | Core `feat/parallel-switchflow` / `936fa1d20c`; OLF `main` / `bb19987a` | 2026-09-02 |

The final row is a negative finding from source and module-list searches. It does not rule out work on unreviewed branches, stashes, or external repositories.