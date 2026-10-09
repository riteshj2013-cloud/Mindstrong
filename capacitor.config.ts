import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Native shells wrap the Next.js static export in `./out`.
 * Always build for mobile with an empty basePath:
 *   NEXT_PUBLIC_BASE_PATH= npm run build:mobile
 * GitHub Pages keeps using `/Mindstrong` via the default `npm run build`.
 */
const config: CapacitorConfig = {
  appId: "com.mindstrong.app",
  appName: "Mindstrong",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  android: {
    allowMixedContent: false,
  },
  ios: {
    contentInset: "automatic",
    preferredContentMode: "mobile",
  },
};

export default config;
