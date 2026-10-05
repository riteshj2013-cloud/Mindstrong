import type { NextConfig } from "next";

// Static export for GitHub Pages (served at https://<user>.github.io/Mindstrong/).
// Set NEXT_PUBLIC_BASE_PATH="" to build for a root-domain host instead.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Mindstrong";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
