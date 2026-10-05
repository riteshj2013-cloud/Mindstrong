"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import {
  ALL_GRADES,
  ALL_SUBJECTS,
  SUBJECT_META,
  getChapterProgress,
  getPrepPack,
  gradeLabel,
  gradeSubtitle,
  isGradeReady,
  READY_GRADES,
  packKey,
  clearPrepActive,
  rememberPrepChoice,
  readPrepActive,
  savePrepActive,
  usePrepProgress,
  ageToGrade,
  type Grade,
  type PrepSubject,
} from "@/lib/prep";
import { clampAge } from "@/lib/content/age";
import { useProfile } from "@/lib/storage";

type Stage = "subject" | "grade" | "path" | "chapters" | "chapter";

export default function PrepHubPage() {
  const router = useRouter();
  const profile = useProfile();
  const progress = usePrepProgress();
  const suggestedGrade = ageToGrade(clampAge(profile?.age ?? 8));

  const [stage, setStage] = useState<Stage>("subject");
  const [subject, setSubject] = useState<PrepSubject | null>(null);
  const [grade, setGrade] = useState<Grade | null>(null);
  const [chapterId, setChapterId] = useState<string | null>(null);

  // Recover from a stuck/corrupt prep.active left by an older bug.
  useEffect(() => {
    const a = readPrepActive();
    if (!a) return;
    if (a.kind !== "lesson" && a.kind !== "set" && a.kind !== "paper") {
      clearPrepActive();
    }
  }, []);

  const pack = useMemo(
    () => (subject && grade ? getPrepPack(subject, grade) : null),
    [subject, grade],
  );
  const chapter = pack?.chapters.find((c) => c.id === chapterId);

  if (profile === undefined || progress === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  function startLesson(sub: PrepSubject, g: Grade, chId: string) {
    rememberPrepChoice(sub, g);
    savePrepActive({
      v: 1,
      kind: "lesson",
      subject: sub,
      grade: g,
      chapterId: chId,
      index: 0,
      startedAt: new Date().toISOString(),
      answers: {},
      hinted: [],
      tried: [],
    });
    router.push("/prep/lesson");
  }

  function startSet(sub: PrepSubject, g: Grade, chId: string, setId: string) {
    rememberPrepChoice(sub, g);
    savePrepActive({
      v: 1,
      kind: "set",
      subject: sub,
      grade: g,
      chapterId: chId,
      setId,
      index: 0,
      startedAt: new Date().toISOString(),
      answers: {},
      hinted: [],
      tried: [],
    });
    router.push("/prep/quiz");
  }

  function startPaper(sub: PrepSubject, g: Grade) {
    rememberPrepChoice(sub, g);
    savePrepActive({
      v: 1,
      kind: "paper",
      subject: sub,
      grade: g,
      index: 0,
      startedAt: new Date().toISOString(),
      answers: {},
      hinted: [],
      tried: [],
    });
    router.push("/prep/paper");
  }

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between">
        <Brand />
        <Link
          href="/"
          className="rounded-full bg-white px-3 py-2 text-sm font-bold text-ink/55 shadow-soft"
        >
          Home
        </Link>
      </header>

      {stage === "subject" && (
        <>
          <div>
            <h1 className="text-3xl font-semibold">Test prep · SOF</h1>
            <p className="text-base font-semibold text-ink/60">
              Pick a subject. Lessons are optional — practice sets are always open.
            </p>
          </div>
          <div className="grid gap-3">
            {ALL_SUBJECTS.map((s) => {
              const meta = SUBJECT_META[s];
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSubject(s);
                    setGrade(suggestedGrade);
                    setStage("grade");
                  }}
                  className={`flex items-center gap-4 rounded-[2rem] p-5 text-left shadow-chunky ${meta.tone}`}
                >
                  <span className="text-4xl">{meta.emoji}</span>
                  <span>
                    <span className="block font-display text-2xl font-semibold">{meta.label}</span>
                    <span className="text-sm font-bold text-ink/55">
                      {meta.exam} · {meta.blurb}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {stage === "grade" && subject && (
        <>
          <button
            type="button"
            className="text-left text-sm font-bold text-ink/50"
            onClick={() => setStage("subject")}
          >
            ← Subjects
          </button>
          <div>
            <h1 className="text-3xl font-semibold">{SUBJECT_META[subject].label}</h1>
            <p className="text-base font-semibold text-ink/60">
              Choose your grade (suggested from age: {gradeLabel(suggestedGrade)})
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {ALL_GRADES.map((g) => {
              const ready = isGradeReady(g) && getPrepPack(subject, g).ready;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => {
                    setGrade(g);
                    if (ready) setStage("path");
                  }}
                  className={`min-h-14 rounded-2xl font-display text-lg font-semibold ${
                    ready
                      ? grade === g
                        ? "bg-coral text-white shadow-chunky"
                        : "bg-white shadow-soft"
                      : "bg-ink/5 text-ink/35"
                  }`}
                  title={ready ? gradeSubtitle(g) : "Coming soon"}
                >
                  {g}
                  {!ready && <span className="mt-0.5 block text-[9px]">soon</span>}
                </button>
              );
            })}
          </div>
          <p className="text-xs font-semibold text-ink/45">
            Grades {READY_GRADES.join(", ")} are playable now. More grades coming soon.
          </p>
        </>
      )}

      {stage === "path" && subject && grade && pack && (
        <>
          <button
            type="button"
            className="text-left text-sm font-bold text-ink/50"
            onClick={() => setStage("grade")}
          >
            ← Grades
          </button>
          <div>
            <h1 className="text-3xl font-semibold">
              {SUBJECT_META[subject].emoji} {gradeLabel(grade)}
            </h1>
            <p className="font-semibold text-ink/60">{pack.paperTitle}</p>
          </div>
          <button
            type="button"
            onClick={() => startPaper(subject, grade)}
            className="rounded-[2rem] bg-gradient-to-br from-sun to-coral/70 p-5 text-left shadow-chunky"
          >
            <p className="font-display text-2xl font-semibold">Entire test paper 📋</p>
            <p className="text-sm font-bold text-ink/70">
              {pack.paperCount} olympiad-style MCQs · mock paper flow
            </p>
          </button>
          <button
            type="button"
            onClick={() => setStage("chapters")}
            className="rounded-[2rem] bg-white p-5 text-left shadow-chunky"
          >
            <p className="font-display text-2xl font-semibold">By chapter 📚</p>
            <p className="text-sm font-bold text-ink/55">
              Optional interactive lesson → practice sets (20–25 Qs each)
            </p>
          </button>
        </>
      )}

      {stage === "chapters" && subject && grade && pack && (
        <>
          <button
            type="button"
            className="text-left text-sm font-bold text-ink/50"
            onClick={() => setStage("path")}
          >
            ← Paths
          </button>
          <h1 className="text-3xl font-semibold">Chapters</h1>
          <div className="grid gap-3">
            {pack.chapters.map((c) => {
              const cp = getChapterProgress(progress, subject, grade, c.id);
              const setsDone = Object.keys(cp.sets).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setChapterId(c.id);
                    setStage("chapter");
                  }}
                  className="flex items-start gap-3 rounded-[1.75rem] bg-white p-4 text-left shadow-soft"
                >
                  <span className="text-3xl">{c.emoji}</span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-semibold">{c.title}</span>
                    <span className="text-sm font-semibold text-ink/55">{c.blurb}</span>
                    <span className="mt-1 block text-xs font-bold text-ink/40">
                      {cp.lessonDone ? "Lesson done · " : "Lesson optional · "}
                      {setsDone}/{c.sets.length} sets tried
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {stage === "chapter" && subject && grade && chapter && (
        <>
          <button
            type="button"
            className="text-left text-sm font-bold text-ink/50"
            onClick={() => setStage("chapters")}
          >
            ← Chapters
          </button>
          <div className="rounded-[2rem] bg-gradient-to-br from-plum/20 to-sky/20 p-5 shadow-soft">
            <p className="text-4xl">{chapter.emoji}</p>
            <h1 className="text-3xl font-semibold">{chapter.title}</h1>
            <p className="font-semibold text-ink/65">{chapter.blurb}</p>
          </div>

          <section className="space-y-2 rounded-[1.75rem] border-2 border-dashed border-coral/40 bg-white p-4">
            <p className="text-sm font-bold uppercase tracking-wide text-coral">
              Recommended · optional
            </p>
            <h2 className="font-display text-xl font-semibold">Interactive lesson</h2>
            <p className="text-sm font-semibold text-ink/60">
              Stepped demos, tap-to-reveal, mini tries + read-aloud. You can skip and practice
              anyway.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={() => startLesson(subject, grade, chapter.id)}>
                {getChapterProgress(progress, subject, grade, chapter.id).lessonDone
                  ? "Replay lesson"
                  : "Start lesson"}
              </Button>
              <Button variant="secondary" onClick={() => { /* stay; sets below */ }}>
                Skip — use sets below
              </Button>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Practice sets</h2>
            {chapter.sets.map((s) => {
              const score = getChapterProgress(progress, subject, grade, chapter.id).sets[s.id];
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => startSet(subject, grade, chapter.id, s.id)}
                  className="flex w-full items-center justify-between rounded-2xl bg-white px-4 py-4 text-left shadow-soft"
                >
                  <span>
                    <span className="block font-display text-lg font-semibold">{s.title}</span>
                    <span className="text-xs font-bold text-ink/45">
                      {s.questionCount} MCQs · olympiad style
                    </span>
                  </span>
                  <span className="font-display text-lg font-semibold text-coral">
                    {score ? `${score.correct}/${score.total}` : "▶"}
                  </span>
                </button>
              );
            })}
          </section>

          {progress.paperScores[packKey(subject, grade)] && (
            <p className="text-center text-xs font-bold text-ink/40">
              Last mock paper: {progress.paperScores[packKey(subject, grade)].correct}/
              {progress.paperScores[packKey(subject, grade)].total}
            </p>
          )}
        </>
      )}
    </main>
  );
}
