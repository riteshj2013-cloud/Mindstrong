"use client";

import { useState } from "react";
import type { StoryPage } from "@/lib/reading-champ/types";
import { BubbleText } from "./BubbleText";
import { PanelArt } from "./PanelArt";

export function pageBubbleOrder(page: StoryPage) {
  return page.panels.flatMap((panel) =>
    panel.bubbles.map((bubble) => ({
      bubbleId: bubble.id,
      text: bubble.text,
    })),
  );
}

export function StoryPageView({
  page,
  book,
  textSize,
  dyslexia,
  heard,
  onWord,
}: {
  page: StoryPage;
  book: boolean;
  textSize: "sm" | "md" | "lg";
  dyslexia: boolean;
  heard: { bubbleId: string; index: number } | null;
  onWord: (word: string) => void;
}) {
  const [focusId, setFocusId] = useState<string | null>(null);
  const focus = page.panels.find((panel) => panel.id === focusId) ?? null;
  return (
    <div className="w-full">
      {book ? (
        <article className="mx-auto w-full max-w-[65ch] space-y-5 rounded-[1.5rem] border-4 border-ink bg-white px-4 py-5 shadow-chunky">
          {page.panels.map((panel) => (
            <section key={panel.id} className="space-y-3">
              <button
                type="button"
                className="block w-full overflow-hidden rounded-2xl border-2 border-ink"
                onClick={() => setFocusId(panel.id)}
                aria-label="Enlarge this picture"
              >
                <PanelArt scene={panel.scene} characters={panel.characters} />
              </button>
              <p className="leading-loose">
                {panel.bubbles.map((bubble) => (
                  <span key={bubble.id}>
                    {bubble.kind === "speech" && bubble.speaker ? (
                      <span className="font-bold">{bubble.speaker}: </span>
                    ) : null}
                    <BubbleText
                      inline
                      text={bubble.text}
                      textSize={textSize}
                      dyslexia={dyslexia}
                      activeIndex={heard?.bubbleId === bubble.id ? heard.index : null}
                      onWord={onWord}
                    />{" "}
                  </span>
                ))}
              </p>
            </section>
          ))}
        </article>
      ) : (
        <div className="rounded-[1.25rem] border-4 border-ink bg-white p-2 shadow-chunky">
          <div className={`grid gap-2 ${page.panels.length >= 4 ? "grid-cols-2" : "grid-cols-1"}`}>
            {page.panels.map((panel, index) => {
              const wide = page.panels.length === 3 && index === 0;
              const lastWide = page.panels.length === 5 && index === page.panels.length - 1;
              return (
                <section
                  key={panel.id}
                  className={`flex flex-col overflow-hidden rounded-xl border-2 border-ink bg-white ${wide || lastWide ? "col-span-2" : ""}`}
                >
                  <button
                    type="button"
                    className="block w-full"
                    onClick={() => setFocusId(panel.id)}
                    aria-label="Enlarge this panel"
                  >
                    <PanelArt scene={panel.scene} characters={panel.characters} />
                  </button>
                  <div className="space-y-2 border-t-2 border-ink bg-white p-2">
                    {panel.bubbles.map((bubble) => (
                      <div key={bubble.id}>
                        <p className="text-xs font-bold text-ink/50">
                          {bubble.kind === "speech" || bubble.kind === "thought"
                            ? bubble.speaker
                            : bubble.kind === "narration"
                              ? "Narration"
                              : "Caption"}
                        </p>
                        <BubbleText
                          text={bubble.text}
                          textSize={textSize}
                          dyslexia={dyslexia}
                          activeIndex={heard?.bubbleId === bubble.id ? heard.index : null}
                          onWord={onWord}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      )}
      {focus && (
        <div className="fixed inset-0 z-30 flex items-end justify-center bg-ink/70 p-4 sm:items-center" role="dialog" aria-label="Enlarged panel">
          <div className="w-full max-w-lg space-y-3 rounded-[1.5rem] bg-white p-3 shadow-chunky">
            <PanelArt scene={focus.scene} characters={focus.characters} />
            {focus.bubbles.map((bubble) => (
              <BubbleText
                key={bubble.id}
                text={bubble.text}
                textSize={textSize}
                dyslexia={dyslexia}
                activeIndex={heard?.bubbleId === bubble.id ? heard.index : null}
                onWord={onWord}
              />
            ))}
            <button type="button" className="min-h-12 w-full rounded-2xl bg-cream font-bold" onClick={() => setFocusId(null)}>
              Back to the page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
