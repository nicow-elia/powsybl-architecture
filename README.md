# Powsybl Architecture

This directory contains one LikeC4 project for the repositories checked out beside it. The model has one canonical owner for every element; diagram projections live in `views/`.

`https://nicow-elia.github.io/powsybl-architecture/`

## Factual and Proposed Architecture

- `model/as-is/` and `views/as-is/` document only what exists on the upstream main branches: powsybl-core
  `powsybl/powsybl-core` main, pypowsybl `powsybl/pypowsybl` main and powsybl-open-loadflow
  `powsybl/powsybl-open-loadflow` main. Their FQNs identify real code or documented public contracts there. Code that
  exists only on a branch - a local branch of this machine (the diffstacking work on `feat/vibestacker`, the family
  rework on `feat/diffstacking-unified-mapping`) or an unmerged upstream pull-request branch - is a proposal, however
  complete it is. An as-is view shows no proposal element (the as-is views that `include *` exclude every proposal root). The audit that applied this rule, element by element, is
  in [architecture-evidence.md](architecture-evidence.md), "Upstream audit of `model/as-is/`".
- `model/proposals/` and `views/proposals/` describe target architecture and code that exists only on a branch. Proposal elements use `proposed_*` or a proposal-specific root such as `proposal_a_*` or `rdfdb_integration_*`; they must not extend a factual FQN. Branch code moved out of the as-is tree keeps its internal structure under such a root (for example `proposed_diffstacking.cgmes_rdfdb.*` for the module `cgmes-rdfdb` of the diffstacking branch, which the model registry proposal moves to a repository of its own).
- Each proposal has its own folder in both trees: `model/proposals/<proposal>/` (elements and a `README.md` saying what it proposes, its status, view ids and evidence) and `views/proposals/<proposal>/` (its views). [PROPOSALS.md](PROPOSALS.md) lists all proposals; exported PNGs of their views are under `exports/proposals/<proposal>/` (see [exports/README.md](exports/README.md)).
- Proposal relationships may point to factual FQNs using intent labels such as `would consume as-is`, `would extend`, `would extract into`, or `would expose support for`. This shows reuse without claiming that the target capability already exists. `would extend` marks an upstream element the branch changes (for example `CgmesImport` delegating difference models), `would consume as-is` one it uses unchanged.
- `model/00-specification.c4` is shared LikeC4 vocabulary rather than factual or target architecture. Its element
  kinds are `repository, module, api, provider, engine, adapter, model, component, binding, library, format,
  database`; `database` names an external data store that Powsybl talks to over a wire protocol rather than a
  piece of Powsybl itself.

The source evidence for the as-is elements (the upstream audit), for the factual State Estimation building blocks and the absence of an estimator, and the branch evidence of the proposals is recorded in [architecture-evidence.md](architecture-evidence.md).

## Factual Documentation Links

Every factual element with a public reference carries an external `link` in its
LikeC4 declaration:

- Named Java classes, interfaces, providers, and APIs link to their published
	Javadoc pages.
- Intentional architecture aggregates link to the closest Powsybl ReadTheDocs
	page that describes the represented capability or concept.
- Implementation-only bridge, mapper, and ABI details remain unlinked when no
	specific public Javadoc or ReadTheDocs page exists. This avoids presenting a
	broad or unrelated page as authoritative documentation.


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

