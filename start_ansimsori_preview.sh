#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
python3 -m http.server 5180 --bind 0.0.0.0
