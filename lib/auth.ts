"use client";

/**
 * Auth abstraction — Firebase when NEXT_PUBLIC_FIREBASE_* is set at build time;
 * otherwise local demo (device-only).
 *
 * Firebase (static GitHub Pages OK — client SDK only):
 *   - Google: signInWithPopup
 *   - Email/password: createUserWithEmailAndPassword / signInWithEmailAndPassword
 *   - Email link (magic link): sendSignInLinkToEmail + isSignInWithEmailLink
 *   - NO phone OTP
 *
 * Required env (all public client config — still never commit secrets/service-account):
 *   NEXT_PUBLIC_FIREBASE_API_KEY
 *   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
 *   NEXT_PUBLIC_FIREBASE_PROJECT_ID
 *   NEXT_PUBLIC_FIREBASE_APP_ID
 * Optional:
 *   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
 *   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
 *   NEXT_PUBLIC_AUTH_PROVIDER=firebase|local  (auto-detected if Firebase config present)
 *
 * Authorized domains in Firebase Console must include:
 *   riteshj2013-cloud.github.io
 *   localhost (for local dev)
 *
 * Kid profiles stay local (mindstrong.v1.account kids[]) until a backend/Firestore
 * profile doc is wired. Parent identity comes from Firebase Auth when enabled.
 */

import { useSyncExternalStore } from "react";
import type { ChildAge } from "./types";
import { clampAge } from "./content/age";

export const ACCOUNT_KEY = "mindstrong.v1.account";
const EMAIL_LINK_KEY = "mindstrong.v1.emailLink";
const CHANGE = "mindstrong:account";

export interface KidProfile {
  id: string;
  name: string;
  age: ChildAge;
}

export interface AccountUser {
  id: string;
  parentName: string;
  email: string;
  kids: KidProfile[];
  createdAt: string;
  /** "local" | "firebase" | "google" */
  provider?: string;
  photoURL?: string | null;
  /** Demo local only — hex SHA-256; never shown in UI. */
  passwordHash?: string;
  passwordSalt?: string;
}

export type AuthErrorCode =
  | "invalid_email"
  | "missing_name"
  | "wrong_password"
  | "not_found"
  | "already_exists"
  | "popup_closed"
  | "firebase_unavailable"
  | "link_sent"
  | "unknown";

export interface AuthResult {
  ok: boolean;
  user?: AccountUser;
  error?: AuthErrorCode;
  message?: string;
}

export interface SignUpInput {
  parentName: string;
  email: string;
  /** Optional in local demo; required for Firebase email/password sign-up. */
  password?: string;
  kid?: { name: string; age: ChildAge };
  /** Prefer passwordless email link when Firebase is on. */
  preferEmailLink?: boolean;
}

export interface SignInInput {
  email: string;
  password?: string;
  preferEmailLink?: boolean;
}

export interface AuthProvider {
  readonly id: "local" | "firebase";
  signUp(input: SignUpInput): Promise<AuthResult>;
  signIn(input: SignInInput): Promise<AuthResult>;
  signInWithGoogle(): Promise<AuthResult>;
  signOut(): Promise<void>;
  currentUser(): AccountUser | null;
  updateKids(kids: KidProfile[]): Promise<AuthResult>;
  /** Complete email-link sign-in if the current URL is an email link. */
  completeEmailLinkIfPresent(): Promise<AuthResult | null>;
  googleAvailable(): boolean;
}

// ---------- Firebase config detection ----------

export interface FirebaseWebConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  appId: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

export function readFirebaseConfig(): FirebaseWebConfig | null {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim();
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim();
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.trim();
  if (!apiKey || !authDomain || !projectId || !appId) return null;
  return {
    apiKey,
    authDomain,
    projectId,
    appId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?.trim() || undefined,
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?.trim() || undefined,
  };
}

export function isFirebaseConfigured(): boolean {
  const forced = process.env.NEXT_PUBLIC_AUTH_PROVIDER?.trim().toLowerCase();
  if (forced === "local") return false;
  if (forced === "firebase") return !!readFirebaseConfig();
  return !!readFirebaseConfig();
}

// ---------- Shared helpers ----------

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36).slice(-4)}`;
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function randomSaltHex(): Promise<string> {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return toHex(bytes.buffer);
}

/** SHA-256(saltHex + ":" + password) — local demo only. */
export async function hashPassword(password: string, saltHex: string): Promise<string> {
  const data = new TextEncoder().encode(`${saltHex}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return toHex(digest);
}

function publicUser(raw: AccountUser): AccountUser {
  const { passwordHash: _h, passwordSalt: _s, ...rest } = raw;
  return { ...rest, kids: raw.kids ?? [] };
}

type LocalBundle = {
  /** Full stored record (may include password hash for local provider). */
  record: AccountUser;
  /** Session: when false, currentUser returns null but record stays (local). */
  signedIn: boolean;
};

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(ACCOUNT_KEY);
  } catch {
    return null;
  }
}

function parseBundle(raw: string | null): LocalBundle | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as AccountUser & { signedIn?: boolean };
    if (!parsed?.email || !parsed?.id) return null;
    const record: AccountUser = {
      id: parsed.id,
      parentName: parsed.parentName ?? "",
      email: parsed.email,
      kids: Array.isArray(parsed.kids) ? parsed.kids : [],
      createdAt: parsed.createdAt ?? new Date().toISOString(),
      provider: parsed.provider,
      photoURL: parsed.photoURL,
      passwordHash: parsed.passwordHash,
      passwordSalt: parsed.passwordSalt,
    };
    return { record, signedIn: parsed.signedIn !== false };
  } catch {
    return null;
  }
}

const cache: { raw: string | null; value: LocalBundle | null } = {
  raw: null,
  value: null,
};
let cacheReady = false;

function readBundle(): LocalBundle | null {
  if (typeof window === "undefined") return null;
  const raw = readRaw();
  if (cacheReady && cache.raw === raw) return cache.value;
  const value = parseBundle(raw);
  cache.raw = raw;
  cache.value = value;
  cacheReady = true;
  return value;
}

function writeBundle(bundle: LocalBundle | null) {
  try {
    if (bundle === null) {
      window.localStorage.removeItem(ACCOUNT_KEY);
    } else {
      const payload = { ...bundle.record, signedIn: bundle.signedIn };
      window.localStorage.setItem(ACCOUNT_KEY, JSON.stringify(payload));
    }
  } catch {
    /* quota / private mode */
  }
  const raw =
    bundle === null
      ? null
      : JSON.stringify({ ...bundle.record, signedIn: bundle.signedIn });
  cache.raw = raw;
  cache.value = bundle;
  cacheReady = true;
  window.dispatchEvent(new Event(CHANGE));
}

function mergeKidsFromLocal(userId: string, email: string): KidProfile[] {
  const b = readBundle();
  if (b && (b.record.id === userId || normalizeEmail(b.record.email) === normalizeEmail(email))) {
    return b.record.kids ?? [];
  }
  return [];
}

function persistProfileOverlay(user: AccountUser, signedIn: boolean) {
  writeBundle({ record: user, signedIn });
}

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE, cb);
  };
}

function getSnapshotUser(): AccountUser | null {
  const b = readBundle();
  if (!b || !b.signedIn) return null;
  return publicUser(b.record);
}

/** Reactive current user (undefined while hydrating). */
export function useCurrentUser(): AccountUser | null | undefined {
  return useSyncExternalStore(subscribe, getSnapshotUser, () => undefined);
}

// ---------- Local provider ----------

class LocalAuthProvider implements AuthProvider {
  readonly id = "local" as const;

  googleAvailable(): boolean {
    return false;
  }

  currentUser(): AccountUser | null {
    return getSnapshotUser();
  }

  async completeEmailLinkIfPresent(): Promise<AuthResult | null> {
    return null;
  }

  async signInWithGoogle(): Promise<AuthResult> {
    return {
      ok: false,
      error: "firebase_unavailable",
      message: "Google sign-in needs Firebase config. Using demo login on this build.",
    };
  }

  async signUp(input: SignUpInput): Promise<AuthResult> {
    const email = normalizeEmail(input.email);
    const parentName = input.parentName.trim().slice(0, 48);
    if (!parentName) {
      return { ok: false, error: "missing_name", message: "Please enter your name." };
    }
    if (!isValidEmail(email)) {
      return { ok: false, error: "invalid_email", message: "Enter a valid email." };
    }

    const existing = readBundle();
    if (existing && normalizeEmail(existing.record.email) === email && existing.signedIn) {
      return {
        ok: false,
        error: "already_exists",
        message: "An account with this email is already on this device. Sign in instead.",
      };
    }

    const kids: KidProfile[] = [];
    if (input.kid?.name?.trim()) {
      kids.push({
        id: uid("kid"),
        name: input.kid.name.trim().slice(0, 24),
        age: clampAge(input.kid.age),
      });
    } else if (existing && normalizeEmail(existing.record.email) === email) {
      kids.push(...(existing.record.kids ?? []));
    }

    const user: AccountUser = {
      id: existing && normalizeEmail(existing.record.email) === email
        ? existing.record.id
        : uid("parent"),
      parentName,
      email,
      kids,
      createdAt:
        existing && normalizeEmail(existing.record.email) === email
          ? existing.record.createdAt
          : new Date().toISOString(),
      provider: "local",
    };

    const pw = input.password?.trim();
    if (pw && pw.length >= 6) {
      const salt = await randomSaltHex();
      user.passwordSalt = salt;
      user.passwordHash = await hashPassword(pw, salt);
    }

    writeBundle({ record: user, signedIn: true });
    return { ok: true, user: publicUser(user) };
  }

  async signIn(input: SignInInput): Promise<AuthResult> {
    const email = normalizeEmail(input.email);
    if (!isValidEmail(email)) {
      return { ok: false, error: "invalid_email", message: "Enter a valid email." };
    }

    const stored = readBundle();
    if (!stored || normalizeEmail(stored.record.email) !== email) {
      return {
        ok: false,
        error: "not_found",
        message:
          "No demo account on this device for that email. Create one with Sign up — data stays on this browser only.",
      };
    }

    const rec = stored.record;
    if (rec.passwordHash && rec.passwordSalt) {
      const pw = input.password ?? "";
      if (!pw) {
        return {
          ok: false,
          error: "wrong_password",
          message: "This account has a password. Enter it to continue.",
        };
      }
      const digest = await hashPassword(pw, rec.passwordSalt);
      if (digest !== rec.passwordHash) {
        return { ok: false, error: "wrong_password", message: "Incorrect password." };
      }
    }

    writeBundle({ record: rec, signedIn: true });
    return { ok: true, user: publicUser(rec) };
  }

  async signOut(): Promise<void> {
    const stored = readBundle();
    if (stored) {
      writeBundle({ record: stored.record, signedIn: false });
    } else {
      writeBundle(null);
    }
  }

  async updateKids(kids: KidProfile[]): Promise<AuthResult> {
    const stored = readBundle();
    if (!stored || !stored.signedIn) {
      return { ok: false, error: "not_found", message: "Sign in first." };
    }
    const next: AccountUser = {
      ...stored.record,
      kids: kids.map((k) => ({
        id: k.id || uid("kid"),
        name: k.name.trim().slice(0, 24),
        age: clampAge(k.age),
      })),
    };
    writeBundle({ record: next, signedIn: true });
    return { ok: true, user: publicUser(next) };
  }
}

// ---------- Firebase provider ----------

type FirebaseAuthMod = typeof import("firebase/auth");
type FirebaseAppMod = typeof import("firebase/app");

let firebaseInit:
  | {
      auth: import("firebase/auth").Auth;
      authMod: FirebaseAuthMod;
    }
  | null
  | undefined;

async function ensureFirebase() {
  if (firebaseInit !== undefined) return firebaseInit;
  const cfg = readFirebaseConfig();
  if (!cfg) {
    firebaseInit = null;
    return null;
  }
  try {
    const appMod = (await import("firebase/app")) as FirebaseAppMod;
    const authMod = (await import("firebase/auth")) as FirebaseAuthMod;
    const app =
      appMod.getApps().length > 0 ? appMod.getApps()[0]! : appMod.initializeApp(cfg);
    const auth = authMod.getAuth(app);
    firebaseInit = { auth, authMod };
    return firebaseInit;
  } catch {
    firebaseInit = null;
    return null;
  }
}

function mapFirebaseError(code: string | undefined): { error: AuthErrorCode; message: string } {
  switch (code) {
    case "auth/email-already-in-use":
      return { error: "already_exists", message: "That email already has an account. Sign in instead." };
    case "auth/invalid-email":
      return { error: "invalid_email", message: "Enter a valid email." };
    case "auth/wrong-password":
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
      return { error: "wrong_password", message: "Incorrect email or password." };
    case "auth/user-not-found":
      return { error: "not_found", message: "No account found for that email." };
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return { error: "popup_closed", message: "Google sign-in was closed before finishing." };
    case "auth/weak-password":
      return { error: "wrong_password", message: "Password must be at least 6 characters." };
    default:
      return { error: "unknown", message: "Something went wrong. Please try again." };
  }
}

function userFromFirebase(
  fbUser: import("firebase/auth").User,
  parentName?: string,
): AccountUser {
  const email = fbUser.email ?? "";
  const kids = mergeKidsFromLocal(fbUser.uid, email);
  const existing = readBundle();
  const name =
    parentName?.trim() ||
    fbUser.displayName ||
    (existing && existing.record.id === fbUser.uid ? existing.record.parentName : "") ||
    (email ? email.split("@")[0]! : "Parent");
  return {
    id: fbUser.uid,
    parentName: name.slice(0, 48),
    email,
    kids,
    createdAt:
      existing && existing.record.id === fbUser.uid
        ? existing.record.createdAt
        : new Date().toISOString(),
    provider: fbUser.providerData.some((p) => p.providerId === "google.com")
      ? "google"
      : "firebase",
    photoURL: fbUser.photoURL,
  };
}

class FirebaseAuthProvider implements AuthProvider {
  readonly id = "firebase" as const;
  private listened = false;

  googleAvailable(): boolean {
    return true;
  }

  private attachListener(
    auth: import("firebase/auth").Auth,
    authMod: FirebaseAuthMod,
  ) {
    if (this.listened) return;
    this.listened = true;
    authMod.onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const overlay = userFromFirebase(fbUser);
        persistProfileOverlay(overlay, true);
      } else {
        const b = readBundle();
        if (b && (b.record.provider === "firebase" || b.record.provider === "google")) {
          writeBundle({ record: b.record, signedIn: false });
        }
      }
    });
  }

  currentUser(): AccountUser | null {
    return getSnapshotUser();
  }

  async completeEmailLinkIfPresent(): Promise<AuthResult | null> {
    if (typeof window === "undefined") return null;
    const fb = await ensureFirebase();
    if (!fb) return null;
    this.attachListener(fb.auth, fb.authMod);
    const { auth, authMod } = fb;
    if (!authMod.isSignInWithEmailLink(auth, window.location.href)) return null;

    let email = "";
    try {
      email = window.localStorage.getItem(EMAIL_LINK_KEY) ?? "";
    } catch {
      email = "";
    }
    if (!email) {
      email = window.prompt("Confirm your email to finish signing in") ?? "";
    }
    if (!email || !isValidEmail(normalizeEmail(email))) {
      return { ok: false, error: "invalid_email", message: "Email required to finish the magic link." };
    }
    try {
      const cred = await authMod.signInWithEmailLink(auth, normalizeEmail(email), window.location.href);
      try {
        window.localStorage.removeItem(EMAIL_LINK_KEY);
      } catch {}
      const user = userFromFirebase(cred.user);
      persistProfileOverlay(user, true);
      // Clean URL query params from the email link
      try {
        const url = new URL(window.location.href);
        url.search = "";
        url.hash = "";
        window.history.replaceState({}, "", url.pathname);
      } catch {}
      return { ok: true, user: publicUser(user) };
    } catch (e) {
      const code = (e as { code?: string })?.code;
      const mapped = mapFirebaseError(code);
      return { ok: false, ...mapped };
    }
  }

  private async sendEmailLink(email: string): Promise<AuthResult> {
    const fb = await ensureFirebase();
    if (!fb) {
      return {
        ok: false,
        error: "firebase_unavailable",
        message: "Firebase is not configured in this build.",
      };
    }
    this.attachListener(fb.auth, fb.authMod);
    const continueUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${process.env.NEXT_PUBLIC_BASE_PATH ?? "/Mindstrong"}/login/`
        : "https://riteshj2013-cloud.github.io/Mindstrong/login/";
    try {
      await fb.authMod.sendSignInLinkToEmail(fb.auth, email, {
        url: continueUrl,
        handleCodeInApp: true,
      });
      try {
        window.localStorage.setItem(EMAIL_LINK_KEY, email);
      } catch {}
      return {
        ok: false,
        error: "link_sent",
        message: `Magic link sent to ${email}. Open it on this device to finish signing in.`,
      };
    } catch (e) {
      const mapped = mapFirebaseError((e as { code?: string })?.code);
      return { ok: false, ...mapped };
    }
  }

  async signUp(input: SignUpInput): Promise<AuthResult> {
    const email = normalizeEmail(input.email);
    const parentName = input.parentName.trim().slice(0, 48);
    if (!parentName) {
      return { ok: false, error: "missing_name", message: "Please enter your name." };
    }
    if (!isValidEmail(email)) {
      return { ok: false, error: "invalid_email", message: "Enter a valid email." };
    }

    if (input.preferEmailLink || !input.password?.trim()) {
      return this.sendEmailLink(email);
    }

    const fb = await ensureFirebase();
    if (!fb) {
      return {
        ok: false,
        error: "firebase_unavailable",
        message: "Firebase is not configured in this build.",
      };
    }
    this.attachListener(fb.auth, fb.authMod);

    try {
      const cred = await fb.authMod.createUserWithEmailAndPassword(
        fb.auth,
        email,
        input.password.trim(),
      );
      try {
        await fb.authMod.updateProfile(cred.user, { displayName: parentName });
      } catch {
        /* displayName is best-effort */
      }
      const kids: KidProfile[] = [];
      if (input.kid?.name?.trim()) {
        kids.push({
          id: uid("kid"),
          name: input.kid.name.trim().slice(0, 24),
          age: clampAge(input.kid.age),
        });
      }
      const user = { ...userFromFirebase(cred.user, parentName), kids };
      persistProfileOverlay(user, true);
      return { ok: true, user: publicUser(user) };
    } catch (e) {
      const mapped = mapFirebaseError((e as { code?: string })?.code);
      return { ok: false, ...mapped };
    }
  }

  async signIn(input: SignInInput): Promise<AuthResult> {
    const email = normalizeEmail(input.email);
    if (!isValidEmail(email)) {
      return { ok: false, error: "invalid_email", message: "Enter a valid email." };
    }

    if (input.preferEmailLink || !input.password?.trim()) {
      return this.sendEmailLink(email);
    }

    const fb = await ensureFirebase();
    if (!fb) {
      return {
        ok: false,
        error: "firebase_unavailable",
        message: "Firebase is not configured in this build.",
      };
    }
    this.attachListener(fb.auth, fb.authMod);

    try {
      const cred = await fb.authMod.signInWithEmailAndPassword(
        fb.auth,
        email,
        input.password.trim(),
      );
      const user = userFromFirebase(cred.user);
      persistProfileOverlay(user, true);
      return { ok: true, user: publicUser(user) };
    } catch (e) {
      const mapped = mapFirebaseError((e as { code?: string })?.code);
      return { ok: false, ...mapped };
    }
  }

  async signInWithGoogle(): Promise<AuthResult> {
    const fb = await ensureFirebase();
    if (!fb) {
      return {
        ok: false,
        error: "firebase_unavailable",
        message: "Firebase is not configured in this build.",
      };
    }
    this.attachListener(fb.auth, fb.authMod);
    try {
      const provider = new fb.authMod.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const cred = await fb.authMod.signInWithPopup(fb.auth, provider);
      const user = userFromFirebase(cred.user);
      persistProfileOverlay(user, true);
      return { ok: true, user: publicUser(user) };
    } catch (e) {
      const mapped = mapFirebaseError((e as { code?: string })?.code);
      return { ok: false, ...mapped };
    }
  }

  async signOut(): Promise<void> {
    const fb = await ensureFirebase();
    if (fb) {
      try {
        await fb.authMod.signOut(fb.auth);
      } catch {
        /* ignore */
      }
    }
    const stored = readBundle();
    if (stored) writeBundle({ record: stored.record, signedIn: false });
  }

  async updateKids(kids: KidProfile[]): Promise<AuthResult> {
    const stored = readBundle();
    if (!stored || !stored.signedIn) {
      return { ok: false, error: "not_found", message: "Sign in first." };
    }
    const next: AccountUser = {
      ...stored.record,
      kids: kids.map((k) => ({
        id: k.id || uid("kid"),
        name: k.name.trim().slice(0, 24),
        age: clampAge(k.age),
      })),
    };
    writeBundle({ record: next, signedIn: true });
    return { ok: true, user: publicUser(next) };
  }
}

// ---------- Factory ----------

function createAuthProvider(): AuthProvider {
  if (isFirebaseConfigured()) return new FirebaseAuthProvider();
  return new LocalAuthProvider();
}

export const auth: AuthProvider = createAuthProvider();

export function authModeLabel(): string {
  if (auth.id === "firebase") {
    return "Firebase sign-in · Google or email";
  }
  return "Demo login — saved on this device only";
}

export function authIsDemo(): boolean {
  return auth.id === "local";
}
