import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Lets node:test import extensionless TypeScript, including folder indexes. */
export async function resolve(specifier, context, nextResolve) {
  const relative = specifier.startsWith("./") || specifier.startsWith("../");
  const hasExt = /\.(ts|tsx|js|mjs|cjs|json|css)$/.test(specifier);
  if (relative && !hasExt && context.parentURL) {
    const parent = fileURLToPath(context.parentURL);
    const base = path.resolve(path.dirname(parent), specifier);
    if (existsSync(`${base}.ts`)) return nextResolve(`${specifier}.ts`, context);
    if (existsSync(path.join(base, "index.ts"))) return nextResolve(`${specifier}/index.ts`, context);
  }
  return nextResolve(specifier, context);
}
