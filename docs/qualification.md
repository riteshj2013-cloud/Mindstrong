# Mindstrong qualification process

Three tracks to treat the product as “ready”: **content quality**, **Google Play**, and **Apple App Store**.  
Do them in parallel where you can; **content blockers** should be green before you call grades exam-ready in store listings.

Live web: https://riteshj2013-cloud.github.io/Mindstrong/  
Native shells: [`docs/mobile.md`](mobile.md) · Quality report: [`docs/quality-report.md`](quality-report.md)

---

## Track A — Content quality

### Goal
Kid-facing packs and olympiad prep pass automated audits and do not leak cheats (e.g. all answers “A”).

### Checklist

| Step | Who | How |
| --- | --- | --- |
| 1. Run audits | Anyone / Quality Reviewer | `node scripts/audit-content.mjs` · `node scripts/check-boilerplate-hints.mjs` · `npx tsc --noEmit` · `npm run build` |
| 2. Inventory | Quality Reviewer | `gradesWithContent()` = 1–10; set sizes G1/G2 ≥16, else 24; Mon–Sun daily packs ready |
| 3. Answer-key balance | Quality Reviewer | Per set aim ~25% A/B/C/D; flag ≥75% one letter as major |
| 4. Spot-check | Quality Reviewer | Sample grades (incl. 1, 5, 7, 8, 10): ₹ not $, no SOF/IMO branding, real stems, item hints |
| 5. Report | Quality Reviewer | Update `docs/quality-report.md` → PASS / PASS WITH NOTES / FAIL |
| 6. Fix blockers | Subject Writers | Rebalance keys, fix stems; Chief of Staff merges |
| 7. Redeploy | Chief of Staff | `npm run build` + `scripts/deploy-gh-pages.sh` · then `npm run mobile:sync` for apps |

### Current status (as of last merges)

- Audits / build / unlocks / daily packs: **green**
- **G7 / G10 all-A keys:** fixed (rebalanced to 6/6/6/6)
- **G4 story-spotters stem leaks + G6 / G1–G2 skew:** fixed
- Remaining: optional re-run of Quality Reviewer to refresh `quality-report.md` to a clean PASS; pictorial SVG polish still optional

### Pass bar for “exam-ready” claims in stores

- Audit + boilerplate = 0 findings  
- No grade with ~100% one answer letter  
- Spot-check notes cleared for grades you advertise  

---

## Track B — Google Play (Android)

### Prerequisites
- [ ] Google Play Console account (~USD 25 one-time)
- [ ] Android Studio installed
- [ ] Repo pulled; `npm install`

### Build & test

```bash
npm run mobile:android
npm run mobile:open:android
```

- [ ] Run on a physical phone (not only emulator)
- [ ] Smoke: home → daily session → prep grade 3 + 10 → parent gate
- [ ] Replace default Capacitor icon / splash under `android/app/src/main/res/`

### Sign release

1. Generate a **upload keystore** (keep offline backup; never commit `*.jks` / `*.keystore`).
2. Configure signing in Android Studio (or `android/app/build.gradle`).
3. Build **Android App Bundle** (`.aab`), not a raw debug APK for production.

### Play Console listing

| Field | Guidance |
| --- | --- |
| Package name | `com.mindstrong.app` |
| Category | Education |
| Age | Complete IARC questionnaire; target families / 6+ |
| Short / full description | Practice + olympiad-style prep; no unearned “guaranteed score” claims |
| Screenshots | Phone + optional 7" tablet; show daily + prep |
| Privacy policy URL | Use live `/legal/privacy/` (finalize legal copy before production) |
| Data safety form | Mostly **on-device** (`localStorage`); declare Firebase Auth only if enabled for users |
| Ads / payments | Declare accurately (INR plans / checkout if live) |

### Qualification path

1. **Internal testing** track → install on your devices  
2. **Closed testing** (friends/family) → gather crashes  
3. Submit **production** (or staged rollout 10% → 100%)  
4. Review: usually hours to a few days; respond to policy questions promptly  

### Common reject reasons
Kids policy incomplete · privacy URL missing/wrong · misleading education claims · broken login · unsigned / wrong package name

---

## Track C — Apple App Store (iOS)

### Prerequisites
- [ ] Apple Developer Program (~USD 99 / year)
- [ ] **Mac** + Xcode 16+
- [ ] Repo pulled; `npm install`

### Build & test

```bash
npm run mobile:ios
npm run mobile:open:ios
```

- [ ] Set **Team** + signing for `com.mindstrong.app` in Xcode
- [ ] Run on Simulator **and** a physical iPhone
- [ ] Replace App Icon / Splash in `ios/App/App/Assets.xcassets/`
- [ ] Same smoke path as Android

### Upload

1. Xcode → **Product → Archive**  
2. Distribute to **App Store Connect**  
3. Create the app record (name, primary category Education, age rating)  
4. Add **TestFlight** internal/external testers first  

### App Store listing

| Field | Guidance |
| --- | --- |
| Bundle ID | `com.mindstrong.app` |
| Privacy Nutrition Labels | Match real behavior (local storage; Auth if used) |
| Privacy policy URL | Same finalized legal page as Play |
| Age rating | Kids/education questionnaire — be consistent with Play |
| Screenshots | 6.7" + 6.1" (and iPad if you claim tablet) |
| Review notes | Explain local-first MVP; test account if login required |

### Qualification path

1. TestFlight → crash-free builds  
2. Submit for **App Review** (often 24–48h)  
3. Fix **Resolution Center** items; resubmit  
4. Release manually or automatically after approval  

### Common reject reasons
Guideline 1.3 kids · 5.1.1 privacy · incomplete metadata · placeholder icons · login without demo account · “beta” feel / broken links

---

## Suggested order (this week)

| Day focus | Actions |
| --- | --- |
| **1** | Content: re-run Quality Reviewer → refresh report → redeploy web if needed |
| **1–2** | Branding: Mindstrong icons/splash for Android + iOS |
| **2–3** | Play: internal test AAB · fill Data safety + listing draft |
| **2–4** | iOS: TestFlight · fill App Privacy + listing draft |
| **5+** | Closed testers → production submit both stores |

## Owners

| Track | Primary owner |
| --- | --- |
| Content audits / report | Quality Reviewer (+ Chief of Staff merges) |
| Answer/stem fixes | Maths / English / Science Writers |
| Capacitor sync / smoke | Frontend Architect or you locally |
| Play / App Store accounts & signing | You (developer accounts cannot be shared with agents) |
| Legal pages finalization | Business Lead / you |

Agents can prepare code, icons pipelines, and listings drafts; **only you** can create store accounts, upload signed binaries, and click Submit.
