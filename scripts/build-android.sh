#!/usr/bin/env bash
# Build Mindstrong Android debug APK (+ optional release AAB).
# Requires Android SDK (ANDROID_HOME or ANDROID_SDK_ROOT).
set -euo pipefail
cd "$(dirname "$0")/.."

SDK_ROOT="${ANDROID_SDK_ROOT:-${ANDROID_HOME:-}}"
if [ -z "$SDK_ROOT" ] || [ ! -d "$SDK_ROOT" ]; then
  echo "Set ANDROID_HOME / ANDROID_SDK_ROOT to your Android SDK path." >&2
  exit 1
fi

printf 'sdk.dir=%s\n' "$SDK_ROOT" > android/local.properties

npm run mobile:android

mkdir -p dist
cd android
chmod +x gradlew
./gradlew assembleDebug --no-daemon
./gradlew bundleRelease --no-daemon

APK=$(find app/build/outputs/apk/debug -name '*.apk' | head -1)
AAB=$(find app/build/outputs/bundle/release -name '*.aab' | head -1)
cp -f "$APK" ../dist/Mindstrong-debug.apk
cp -f "$AAB" ../dist/Mindstrong-release-unsigned.aab
cd ..
ls -lh dist/Mindstrong-debug.apk dist/Mindstrong-release-unsigned.aab
echo "Install debug APK: adb install -r dist/Mindstrong-debug.apk"
echo "Release AAB is unsigned — sign before Play upload (see docs/qualification.md)."
