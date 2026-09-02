#!/usr/bin/env bash

set -euo pipefail

usage() {
  printf 'Usage: %s [source_dir] [output_dir]\n' "$(basename "$0")"
}

case "${1:-}" in
  -h|--help)
    usage
    exit 0
    ;;
esac

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
SOURCE_DIR="${1:-$SCRIPT_DIR}"
OUTPUT_DIR="${2:-$SCRIPT_DIR/site}"
LIKEC4_IMAGE="${LIKEC4_IMAGE:-likec4/likec4:1.59.2@sha256:d7ae4a95a488a7727af22f181db26c7804922f3154c317ac81170edd9fc73b12}"
LANDING_PAGE="$SCRIPT_DIR/pages/index.html"

if [[ ! -d "$SOURCE_DIR" ]]; then
  printf 'Architecture source directory not found: %s\n' "$SOURCE_DIR" >&2
  exit 1
fi

if [[ ! -f "$LANDING_PAGE" ]]; then
  printf 'GitHub Pages landing page not found: %s\n' "$LANDING_PAGE" >&2
  exit 1
fi

if [[ -z "$OUTPUT_DIR" || "$OUTPUT_DIR" == "/" ]]; then
  printf 'Refusing to use output directory: %s\n' "$OUTPUT_DIR" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  printf 'Docker is required to build the LikeC4 site.\n' >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  printf 'Docker is installed but its daemon is not available.\n' >&2
  exit 1
fi

SOURCE_DIR="$(cd -- "$SOURCE_DIR" && pwd -P)"
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
OUTPUT_DIR="$(cd -- "$OUTPUT_DIR" && pwd -P)"

printf 'Building LikeC4 site into %s\n' "$OUTPUT_DIR"

docker run --rm --init \
  -v "${SOURCE_DIR}:/workspace:ro" \
  -v "${OUTPUT_DIR}:/out" \
  -w /workspace \
  --entrypoint sh \
  "$LIKEC4_IMAGE" \
  -c "
    set -eu
    likec4 build \
      --base ./ \
      --use-hash-history \
      --title 'Powsybl Architecture' \
      -o /out/app \
      /workspace
    chown -R $(id -u):$(id -g) /out
  "

cp "$LANDING_PAGE" "$OUTPUT_DIR/index.html"
touch "$OUTPUT_DIR/.nojekyll"
test -f "$OUTPUT_DIR/app/index.html"

printf 'Built GitHub Pages site: %s\n' "$OUTPUT_DIR"