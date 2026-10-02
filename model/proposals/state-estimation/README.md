# Proposal: State Estimation

**What it proposes.** Two alternative target structures for a State Estimation in PowSyBl. Proposal A extracts the
reusable network and equation toolkits of Open Load Flow into a new `powsybl-open-steady-state` repository next to a
State Estimation repository; Proposal B refactors `powsybl-open-loadflow` into `powsybl-open-simulator`. Both share the
proposed powsybl-core API/SPI contracts and the runtime sequences (MVP: observability and WLS; follow-up: bad data,
topology errors, network parameters).

**Status:** proposed – no State Estimation API, provider or WLS implementation exists in the checked-out code.

| | |
| --- | --- |
| Model | [targets.c4](targets.c4) (Proposal A and B structures), [contracts.c4](contracts.c4) (API/SPI), [sequences.c4](sequences.c4) (elements of the sequences) |
| Views | [views/proposals/state-estimation/](../../../views/proposals/state-estimation/): `proposals-a-b.c4`, `contracts.c4`, `sequences.c4` |
| View ids | `state_estimation_proposal_a`, `state_estimation_proposal_b`, `state_estimation_proposed_contracts`, `state_estimation_proposal_b_sequence_mvp`, `state_estimation_proposal_b_sequence_followup` |
| Evidence | the State Estimation as-is baseline (and the absence of an estimator) in the ledger of [architecture-evidence.md](../../../architecture-evidence.md) |
| Exported PNGs | none committed yet (see [exports/README.md](../../../exports/README.md) to generate them) |
