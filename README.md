# Powsybl Architecture

This directory contains one LikeC4 project for the repositories checked out beside it. The model has one canonical owner for every element; diagram projections live in `views/`.

`https://nicow-elia.github.io/powsybl-architecture/`

## Factual and Proposed Architecture

- `model/as-is/` and `views/as-is/` document source-confirmed behavior in the checked-out repositories. Their FQNs identify real code or documented public contracts.
- `model/proposals/` and `views/proposals/` describe target architecture only. New target elements use `proposed_*` or a proposal-specific root such as `proposal_a_*`; they must not extend a factual FQN.
- Proposal relationships may point to factual FQNs using intent labels such as `would consume as-is`, `would extract into`, or `would expose support for`. This shows reuse without claiming that the target capability already exists.
- `model/00-specification.c4` is shared LikeC4 vocabulary rather than factual or target architecture.

The source evidence for the State Estimation baseline, including reviewed branches and commits, is recorded in [architecture-evidence.md](architecture-evidence.md).


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

