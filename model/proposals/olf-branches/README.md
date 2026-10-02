# Proposal: Open Load Flow pull-request branches

**What it proposes.** Two pieces of powsybl-open-loadflow that open pull-request branches add and main does not have:
a generic NetworkCache entry with one value per load-flow type, which gives the DC load flow a fast restart next to the
AC one (`NetworkCache.LfInput`, `AcLfValue`, `DcLfValue`, `DcLoadFlowFromCache`), and a security-analysis filter that
omits unchanged monitored results, configured by the `ModifiedMonitoredElementsParameters` that powsybl-core main
already carries.

**Status:** upstream pull-request branches, not on main. The branches are remote branches of
`powsybl/powsybl-open-loadflow` fetched into the local clone: `origin/dc_lf_network_cache` (`d8110945`) and
`origin/refactor_network_cache` for the cache, `origin/filter-monitored-results` for the filter; main is `bb19987a`.
These elements were in `model/as-is/` until the upstream audit of 2026-10-02 moved them here (rows
`powsybl_open_loadflow.network_cache.*` and `...study_execution.monitored_result_filter` of the audit in
[architecture-evidence.md](../../../architecture-evidence.md)). The as-is NetworkCache view now shows main: an AC-only
cache whose entry holds the `AcLoadFlowContext` that `AcLoadFlowFromCache` reuses.

| | |
| --- | --- |
| Model | [branches.c4](branches.c4) (root `proposed_olf_branches`) |
| Views | [views/proposals/olf-branches/branches.c4](../../../views/proposals/olf-branches/branches.c4) |
| View ids | `olf_branch_network_cache`, `olf_branch_monitored_result_filter` |
| Evidence | the upstream audit in [architecture-evidence.md](../../../architecture-evidence.md) |
| Exported PNGs | none |
