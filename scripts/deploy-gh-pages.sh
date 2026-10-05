#!/usr/bin/env bash
# Publish ./out (static export, basePath /Mindstrong) to gh-pages as a normal
# fast-forward commit on top of the current remote gh-pages (no force-push).
# Usage: scripts/deploy-gh-pages.sh "message"   (run `npm run build` first)
set -euo pipefail
cd "$(dirname "$0")/.."
MSG="${1:-Deploy}"
[ -f out/index.html ] || { echo "out/ missing - run npm run build"; exit 1; }
SRC_SHA=$(git rev-parse --short HEAD)
TMP=$(mktemp -d)
git fetch -q origin gh-pages
git worktree add -q --detach "$TMP" origin/gh-pages
# Wipe everything except hashed assets in _next/static: keeping old chunks means
# a browser holding stale (cached) HTML can still load its JS/CSS after a deploy
# instead of blanking on 404s. Chunk names are content-hashed, so no collisions.
find "$TMP" -mindepth 1 -maxdepth 1 ! -name .git ! -name _next -exec rm -rf {} +
[ -d "$TMP/_next" ] && find "$TMP/_next" -mindepth 1 -maxdepth 1 ! -name static -exec rm -rf {} +
cp -a out/. "$TMP"/
touch "$TMP/.nojekyll"
git -C "$TMP" add -A
git -C "$TMP" commit -q -m "Deploy: $MSG (main $SRC_SHA) $(date -Iseconds)" || echo "no changes"
git -C "$TMP" push -q origin HEAD:gh-pages
git -C "$TMP" rev-parse HEAD
git worktree remove --force "$TMP"
