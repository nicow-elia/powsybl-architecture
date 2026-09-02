#!/usr/bin/env bash

set -euo pipefail

usage() {
  printf 'Usage: %s [source_dir] [port]\n' "$(basename "$0")"
}

case "${1:-}" in
  -h|--help)
    usage
    exit 0
    ;;
esac

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
SOURCE_DIR="${1:-$SCRIPT_DIR}"
PORT="${2:-5173}"
HMR_PORT="${HMR_PORT:-24678}"
LIKEC4_IMAGE="${LIKEC4_IMAGE:-likec4/likec4:1.59.2@sha256:d7ae4a95a488a7727af22f181db26c7804922f3154c317ac81170edd9fc73b12}"

if [[ ! -d "$SOURCE_DIR" ]]; then
  printf 'Architecture source directory not found: %s\n' "$SOURCE_DIR" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  printf 'Docker is required to serve the LikeC4 diagrams.\n' >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  printf 'Docker is installed but its daemon is not available.\n' >&2
  exit 1
fi

SOURCE_DIR="$(cd -- "$SOURCE_DIR" && pwd -P)"
CONTAINER_NAME="powsybl-likec4-${PORT}"

remove_server() {
  docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
}

trap remove_server EXIT INT TERM
remove_server

printf 'Serving %s at http://127.0.0.1:%s\n' "$SOURCE_DIR" "$PORT"

docker run --rm --init \
  --name "$CONTAINER_NAME" \
  -p "${PORT}:${PORT}" \
  -p "${HMR_PORT}:${HMR_PORT}" \
  -v "${SOURCE_DIR}:/workspace:ro" \
  -w /workspace \
  "$LIKEC4_IMAGE" \
  start --port "$PORT" --hmr-port "$HMR_PORT" &

wait "$!"