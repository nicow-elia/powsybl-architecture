# Powsybl Architecture

This directory is a LikeC4 workspace for the repositories checked out beside it.

`https://nicow-elia.github.io/powsybl-architecture/`

## Cross-Project Views

The `toplevel` LikeC4 project owns views that span repository boundaries. Its
`index` view, **Powsybl: APIs, Python bindings, and providers**, describes how
pypowsybl exposes the powsybl-core contracts and how Core discovers the Open
Load Flow providers.

The same project also contains the state-estimation placement alternatives:

- `state_estimation_proposal_a`: standalone `powsybl-open-steady-state` and
	`powsybl-state-estimation` repositories.
- `state_estimation_proposal_b`: one OLF repository split into open-steady-state,
	load-flow, and state-estimation modules.
- `shared_steady_state_boundary`: the reusable topology, equation, derivative,
	and matrix contracts common to both proposals.
- `shared_steady_state_interfaces`: the named OpenSteadyState helper and matrix
	interfaces on that reusable boundary.

Both placement views highlight the same `powsybl-core` State Estimation API:
`StateEstimation`, `StateEstimationProvider`, `StateEstimationParameters`,
`StateEstimationRunParameters`, `StateEstimationResult`, and
`StateEstimationReport`. Only the provider implementation's placement differs.

## Preview Locally

The included launcher uses the pinned LikeC4 Docker image, so it does not add a
Node.js dependency to any of the repositories. From this directory, run:

```sh
./serve_architecture_diagrams.sh
```

With Node.js and npm available, the same server can instead be started directly:

```sh
npx likec4 start
```

