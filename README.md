# Powsybl Architecture

This directory is a LikeC4 workspace for the repositories checked out beside it.

`https://nicow-elia.github.io/powsybl-architecture/`


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

