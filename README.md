# Powsybl Architecture

This directory is a LikeC4 workspace for the repositories checked out beside it.
Each immediate subdirectory with a `likec4.config.json` file is a separate
LikeC4 project. The `powsybl-core` project imports the top-level
`powsybl-open-loadflow` element and owns the cross-project workflow views.

The workspace currently contains projects for `powsybl-core`,
`powsybl-open-loadflow`, and `pypowsybl`.

## Views

- `powsybl-core/index`: Repository structure for powsybl-core.
- `powsybl-core/iidm-model`: IIDM `Network`, principal model interfaces, and
  supported format-provider paths for loading and saving networks.
- `powsybl-core/loadflow-interaction`: Core Load Flow API and the Open Load
  Flow AC/DC execution path.
- `powsybl-core/sensitivity-interaction`: Core Sensitivity Analysis API and
  the Open Load Flow sensitivity engines.
- `powsybl-core/contingency-analysis-interaction`: Core Security Analysis and
  contingency APIs through Open Load Flow contingency propagation.
- `powsybl-core/iidm-network-interaction`: IIDM `Network` composition and its
  role as the shared object passed to all computations.
- `pypowsybl/index`: Python facades, pandas DataFrame adapters, pybind11,
  GraalVM native-image bridge, and Java C entry points.

The models describe source-level public interfaces and principal implementation
components, rather than Maven modules or every Java package. Keep relationships
aligned with the provider SPI contracts and the IIDM-to-`LfNetwork` adapter.

## Preview Locally

The included launcher uses the pinned LikeC4 Docker image, so it does not add a
Node.js dependency to any of the repositories. From this directory, run:

```sh
./serve_architecture_diagrams.sh
```

Open <http://127.0.0.1:5173> in a browser. LikeC4 shows the project overview at
the root of this multi-project workspace; select a repository to browse its
views. The server watches the LikeC4 source files and updates the diagrams when
they change. The script requires a running Docker daemon. Its optional arguments
are the source directory and HTTP port:

```sh
./serve_architecture_diagrams.sh . 5174
```

Set `HMR_PORT` when running more than one server, for example
`HMR_PORT=24679 ./serve_architecture_diagrams.sh . 5174`.

With Node.js and npm available, the same server can instead be started directly:

```sh
npx likec4 start
```

## Publish to GitHub Pages

On every push to `main`, [publish-pages.yml](.github/workflows/publish-pages.yml)
builds the static LikeC4 app and publishes it to the `gh-pages` branch. The
published root page links directly to the `powsybl-core/index` view, avoiding the
multi-project picker as the public entry point.

Enable GitHub Pages once in the repository settings with `Deploy from a branch`,
branch `gh-pages`, and folder `/(root)`. The standard public URL is
`https://nicow-elia.github.io/powsybl-architecture/`.

Build the same static site locally with:

```sh
./build_architecture_app.sh
```

The generated site is written to `site/` and is intentionally not committed.

## Open

Open the `architecture` folder in the LikeC4 extension, or validate from this
directory with a LikeC4 CLI installation:

```sh
likec4 validate .
```

See <https://likec4.dev/dsl/config/multi-projects/> for the multi-project
configuration model.