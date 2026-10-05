import { Fragment, type ReactNode } from "react";

/**
 * Safe inline markdown for quiz copy: **bold** and *italic* only.
 * No raw HTML, links, or nested markup — writers use light emphasis in stems.
 */
export function stripInlineMd(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "$1");
}

export function RichText({
  text,
  as: Tag = "span",
  className,
}: {
  text: string;
  as?: "span" | "p";
  className?: string;
}) {
  return <Tag className={className}>{parseInlineMd(text)}</Tag>;
}

function parseInlineMd(text: string): ReactNode[] {
  if (!text) return [];
  // Tokenize **bold** first, then *italic* inside remaining plain segments.
  const boldSplit = text.split(/(\*\*[^*]+\*\*)/g);
  const out: ReactNode[] = [];
  boldSplit.forEach((seg, i) => {
    const bold = /^\*\*([^*]+)\*\*$/.exec(seg);
    if (bold) {
      out.push(<strong key={`b${i}`}>{bold[1]}</strong>);
      return;
    }
    const italSplit = seg.split(/(\*[^*]+\*)/g);
    italSplit.forEach((piece, j) => {
      const ital = /^\*([^*]+)\*$/.exec(piece);
      if (ital) {
        out.push(<em key={`i${i}-${j}`}>{ital[1]}</em>);
      } else if (piece) {
        out.push(<Fragment key={`t${i}-${j}`}>{piece}</Fragment>);
      }
    });
  });
  return out;
}
