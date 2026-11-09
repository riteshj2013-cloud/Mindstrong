#!/usr/bin/env node
/**
 * Required merge gate: fail while a PR has the HOLD label, or while the
 * tester sign-off checkbox in the PR body is unticked.
 *
 * Env (set by GitHub Actions):
 *   GH_TOKEN or GITHUB_TOKEN
 *   PR_NUMBER or GITHUB_EVENT_PATH
 *   GITHUB_REPOSITORY (owner/repo)
 *
 * Locally: pass --pr N  (uses `gh` CLI) or SKIP_HOLD_CHECK=1 to skip.
 */
import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";

if (process.env.SKIP_HOLD_CHECK === "1") {
  console.log("check-pr-hold: skipped (SKIP_HOLD_CHECK=1)");
  process.exit(0);
}

function ghJson(args) {
  const out = execSync(`gh ${args}`, { encoding: "utf8" });
  return JSON.parse(out);
}

let prNumber = process.env.PR_NUMBER || process.argv.find((a, i, arr) => arr[i - 1] === "--pr");
if (!prNumber && process.env.GITHUB_EVENT_PATH && existsSync(process.env.GITHUB_EVENT_PATH)) {
  const ev = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, "utf8"));
  prNumber = ev.pull_request?.number || ev.issue?.number;
}
if (!prNumber) {
  // Not a PR context — allow (e.g. local main audit). Warn only.
  console.log("check-pr-hold: no PR number; nothing to enforce");
  process.exit(0);
}

const repo = process.env.GITHUB_REPOSITORY;
const repoFlag = repo ? `-R ${repo}` : "";
const pr = ghJson(`pr view ${prNumber} ${repoFlag} --json labels,body,title,url`);
const labels = (pr.labels || []).map((l) => l.name);
const hasHold = labels.some((n) => n.toUpperCase() === "HOLD");
const body = pr.body || "";
const signedOff = /-\s*\[[xX]\]\s*Logic Tester passed/i.test(body);
const unticked = /-\s*\[\s\]\s*Logic Tester passed/i.test(body);

const failures = [];
if (hasHold) failures.push("PR has the HOLD label — remove it only after Logic Tester passes");
if (!signedOff) {
  if (unticked || !/Logic Tester passed/i.test(body)) {
    failures.push('Tester sign-off box is unticked — tick "- [x] Logic Tester passed" in the PR body before merge');
  }
}

if (failures.length) {
  console.error(`check-pr-hold: BLOCKED for ${pr.url}`);
  for (const f of failures) console.error(" -", f);
  process.exit(1);
}
console.log(`check-pr-hold: OK for ${pr.url} (no HOLD; sign-off ticked)`);
