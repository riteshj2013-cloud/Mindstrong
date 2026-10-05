/**
 * Sanitize writer-authored inline SVG before rendering.
 * Keeps safe <style> class rules; strips scripts, event handlers, external refs.
 */

const ALLOWED_TAGS = new Set([
  "svg",
  "g",
  "path",
  "rect",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",
  "text",
  "tspan",
  "title",
  "desc",
  "defs",
  "clippath",
  "mask",
  "marker",
  "lineargradient",
  "radialgradient",
  "stop",
  "use",
  "style",
]);

const EVENT_ATTR = /^on/i;
const DANGEROUS_URL = /^\s*(javascript|data|vbscript):/i;

function sanitizeCss(css: string): string {
  return css
    .replace(/@import[^;]*;?/gi, "")
    .replace(/expression\s*\([^)]*\)/gi, "")
    .replace(/javascript\s*:/gi, "")
    .replace(/vbscript\s*:/gi, "")
    .replace(/behavior\s*:/gi, "")
    .replace(/-moz-binding\s*:/gi, "")
    .replace(/<\/?style\b[^>]*>/gi, "")
    .replace(/<\/?script\b[^>]*>/gi, "");
}

/** Return safe SVG markup, or empty string if nothing usable remains. */
export function sanitizeSvg(raw: string): string {
  if (!raw || typeof raw !== "string") return "";
  let s = raw.trim();
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  // Unwrap CDATA, keep contents (writer <style><![CDATA[…]]>)
  s = s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1");
  // Scrub style bodies
  s = s.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, (_m, css: string) => {
    return `<style>${sanitizeCss(css)}</style>`;
  });
  s = s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  // Remove dangerous elements (style already scrubbed and kept)
  s = s.replace(
    /<\/?(?:script|foreignObject|foreignobject|iframe|object|embed|link|meta|image|animate(?:Transform|Motion)?|set|audio|video|handler)\b[^>]*>/gi,
    "",
  );
  s = s.replace(
    /\s([a-zA-Z_:][-a-zA-Z0-9_:]*)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/g,
    (full, name: string) => {
      const n = name.toLowerCase();
      if (EVENT_ATTR.test(n)) return "";
      if (n === "href" || n === "xlink:href" || n === "src") {
        const val = full.split("=").slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");
        if (DANGEROUS_URL.test(val)) return "";
        if (n !== "src" && val.startsWith("#")) return full;
        return "";
      }
      if (n === "style" && /expression\s*\(/i.test(full)) return "";
      return full;
    },
  );
  const m = s.match(/<svg\b[^>]*>[\s\S]*<\/svg>/i);
  if (!m) return "";
  s = m[0];
  s = s.replace(/<\/?([a-zA-Z][\w:-]*)\b[^>]*\/?>/g, (tag, name: string) => {
    const n = name.toLowerCase();
    if (ALLOWED_TAGS.has(n)) return tag;
    return "";
  });
  return s.trim();
}
