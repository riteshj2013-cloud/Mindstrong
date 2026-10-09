# Mindstrong Android & iOS apps

Mindstrong ships as a **Next.js static export** wrapped in **Capacitor 8** native shells:

| Platform | Project folder | Open with |
| --- | --- | --- |
| Android | `android/` | Android Studio |
| iOS | `ios/` | Xcode (macOS required) |

App id: `com.mindstrong.app` · App name: **Mindstrong**

The web UI is the same playable app (daily packs + grades 1–10 prep). Native projects load the built files from `./out` (root `basePath`, not `/Mindstrong`).

## Prerequisites

- Node 20+
- **Android:** Android Studio (Giraffe+), SDK 24+, a device or emulator
- **iOS:** macOS + Xcode 16+, CocoaPods / SPM as prompted by Xcode, a simulator or device

This Cloud Agent VM can sync projects; **store signing and iOS builds need your Mac**.

## One-time (already done in repo)

```bash
npm install
NEXT_PUBLIC_BASE_PATH= npm run build   # or: npm run build:mobile
npx cap add android
npx cap add ios
```

## Daily workflow

Rebuild the web app and copy into native projects:

```bash
npm run mobile:sync          # both platforms
# or
npm run mobile:android
npm run mobile:ios
```

Open IDE:

```bash
npm run mobile:open:android  # Android Studio
npm run mobile:open:ios      # Xcode (macOS only)
```

Then **Run** on an emulator / simulator / device from the IDE.

## Web vs mobile builds

| Target | Command | `basePath` |
| --- | --- | --- |
| GitHub Pages | `npm run build` | `/Mindstrong` |
| Capacitor apps | `npm run build:mobile` | `` (root) |

Do **not** sync a Pages build (`/Mindstrong` assets) into Capacitor — deep links and chunks will 404 inside the WebView.

## Store release (next steps for you)

1. Replace default Capacitor icons / splash (`android/app/src/main/res`, `ios/App/App/Assets.xcassets`).
2. Create Play Console + App Store Connect listings (age rating 6+, education).
3. Android: generate a release keystore; configure `android/app/build.gradle` signing.
4. iOS: set Team + Bundle ID in Xcode; enable signing.
5. Optional later: Capacitor plugins (Status Bar, Splash Screen, Push, Keyboard), Firebase Auth deep links for mobile.

## Live web (unchanged)

https://riteshj2013-cloud.github.io/Mindstrong/
