# Workplan — Move BeConRx to its own domain (beconrx.io)

**Goal:** Serve the BeConRx page at its own domain, **beconrx.io** (hosted on Vercel), and retire **becongroup.io/rx** with a permanent redirect that preserves any existing links and SEO.

**Date:** 2026‑07‑01
**Owner:** Sasha
**Status:** Draft for review

---

## 1. Situation & key facts

- The BeConRx page is **not a separate site today** — it's the `/rx` route inside the BeConGroup Next.js app (`app/rx/page.tsx`, ~292 lines), sharing the same layout, Nav, Footer, design tokens, and hero asset.
- **beconrx.io** was registered **through Squarespace**, but you want it **hosted on Vercel** — same as becongroup.io. So Squarespace is only the **domain registrar / DNS host**; there is **no Squarespace site to build**.
- Because both sites live on Vercel and share a design system, **the RX content does not need to be rebuilt.** This is a domain + routing + redirect job, not a re-platform.
- becongroup.io is **live**; indexation of `/rx` is **unconfirmed** (verify in Step 5).

### What has to change (the moving parts)

1. **Serving:** beconrx.io must serve the RX content at its root (`beconrx.io/` → the current `/rx` page).
2. **Domain/DNS:** point beconrx.io from Squarespace's DNS to Vercel; provision SSL.
3. **Code:** repoint internal links, fix brand detection (currently keyed on the `/rx` path), and set per‑domain metadata/canonicals.
4. **Shutdown:** 301‑redirect `becongroup.io/rx` (and sub‑paths) to beconrx.io — permanently.
5. **SEO/analytics:** register the new domain, redirect for link equity, update external references.

---

## 2. Architecture decision (make this call first)

Two ways to host beconrx.io on Vercel. **Pick one before starting Phase B.**

### Option A — One project, two domains (recommended)

Keep the single Next.js app. Add beconrx.io to the **same** Vercel project and use **middleware** to route by hostname:
- `beconrx.io/*` → rewrite to serve the `/rx` content at the root.
- `becongroup.io/rx*` → **301** to `https://beconrx.io/`.

**Pros:** No code duplication; one design system, one deploy; fastest to ship; fully reversible.
**Cons:** Requires a middleware layer and two honest refactors (below) because the app currently assumes RX == the `/rx` path:
- **Brand detection** in `components/site/nav.tsx` keys on `pathname.startsWith("/rx")`. When beconrx.io serves RX at `/`, that check fails and the nav would show the *Group* brand. Fix: detect brand by **hostname** (via a header set in middleware) instead of pathname.
- **Metadata/canonical:** `app/layout.tsx` hard‑codes `metadataBase: https://becongroup.io`. Add per‑host `metadataBase` + canonical so beconrx.io pages self‑canonicalize (avoids duplicate‑content signals).

### Option B — Separate Vercel project (choose if BeConRx should be fully independent)

Split the RX page + the components it needs (`Hero`, `SignalStrip`, `ModelCard`, `EngagementRow`, `BuildColumn`, `WhyBlock`, `FluencyBlock`, `CloseCta`, `SectionHeader`, `Section`, Nav, Footer, UI primitives, design tokens, hero image) into their **own repo/project** bound to beconrx.io.

**Pros:** Clean separation; independent deploys, analytics, and roadmap.
**Cons:** Duplicates the design system and shared components → ongoing drift/maintenance; more setup.

### ✅ Decision (locked 2026‑07‑01): Option A — one project, two domains

BeConRx is a subsidiary that shares the whole design system and will evolve alongside BeConGroup, so a single source of truth wins for now. The rest of this plan is written for Option A, with Option‑B deltas noted where they differ. The long‑term trade‑offs below are accepted knowingly, along with the triggers that would prompt a revisit.

### Long‑term trade‑offs of Option A (accepted, with revisit triggers)

Running both brands from one Vercel project is the fastest path and the right call while they stay aligned. These are the standing costs to keep in view — roughly in order of impact:

1. **Coupled deploys / shared blast radius.** One project = one pipeline. Every push redeploys both brands; a broken build or bad deploy takes down becongroup.io *and* beconrx.io together, and you can't roll back one without the other.
2. **Commingled analytics & monitoring.** Vercel Analytics, Speed Insights, GA, and error tools are project‑scoped. Two domains in one project means blended reporting unless you add host‑dimension filtering everywhere — harder to give BeConRx clean, separate numbers.
3. **No access/ownership boundary.** Vercel access is all‑or‑nothing at the project level (shared env vars and secrets). You can't scope a future BeConRx contractor or agency to just the RX site.
4. **Permanent SEO vigilance.** RX content lives internally at `/rx` but serves at beconrx.io's root, so the 301 and canonicals must stay airtight indefinitely. Any future routing refactor risks re‑exposing `/rx` or breaking a canonical → duplicate content.
5. **Divergence pressure.** The appeal of one project is the shared design system. As the brands drift (nav, footer, identity, content model), the codebase fills with `if (brand === 'rx')` forks until a split would have been cleaner. Option A pays off *only while the two stay aligned*.
6. **Middleware as a single point.** Host‑routing middleware runs on every request to both domains, and its rewrites make URL ≠ path — complicating logs, `usePathname`, and some analytics. A middleware bug can misroute both sites.

**Escape hatch / middle path.** Choosing A now does **not** lock us in: the RX code already exists, so an A→B split later is "extract into its own project and repoint the domain," not a rewrite. If BeConRx grows, the best long‑term structure is a **monorepo (e.g. Turborepo) with a shared design‑system package but two Vercel projects / two domains** — DRY components *plus* independent deploys, separate analytics, and clean access boundaries.

**Revisit the decision when any of these become true:** BeConRx needs its own team/contractor with scoped access · it needs separate analytics/reporting ownership · its visual identity or content model diverges materially · independent release cadence becomes important · duplicate‑content or deploy‑coupling incidents start costing time.

---

## 3. Phased workplan

Legend: **[You]** = Sasha · **[Claude]** = I can do this in the repo · **[Vercel]/[Squarespace]** = dashboard action.

### Phase A — Prep & decision (Day 1)
- [x] **Architecture confirmed: Option A** — one project, two domains (decided 2026‑07‑01, Section 2).
- [ ] **[You]** Confirm you have access to the **Vercel project** and the **Squarespace domain DNS** panel.
- [ ] **[You]** Confirm the desired canonical host: **`beconrx.io`** vs **`www.beconrx.io`** (recommend the apex `beconrx.io`, with `www` redirecting to it).
- [ ] **[Claude]** Create a **redirect map** (see Appendix A) — every old `/rx*` URL → its new target.

### Phase B — Build the new serving path in code (Day 1–2)
*(All changes shipped behind a preview deploy first — nothing goes live until Phase D.)*
- [ ] **[Claude]** Add `middleware.ts`: rewrite `beconrx.io/*` → RX content at root; set an `x-brand: rx` header for beconrx.io requests; 301 `becongroup.io/rx*` → `https://beconrx.io/`.
- [ ] **[Claude]** Refactor **brand detection** in `components/site/nav.tsx` to read hostname/header instead of `pathname.startsWith("/rx")`.
- [ ] **[Claude]** Update **RX nav anchors** (`RX_LINKS` in `nav.tsx`) from `/rx#model`, `/rx#engage`, `/rx#deliver`, `/rx#why` → root anchors `/#model`, etc. (they now live at beconrx.io root).
- [ ] **[Claude]** Update **cross‑brand links**: on becongroup.io the "BeCon Rx" nav item (`GROUP_LINKS`) and the footer "BeCon Rx" link → absolute `https://beconrx.io`; on beconrx.io the "BeCon Group" link → `https://becongroup.io`.
- [ ] **[Claude]** Add **per‑host metadata/canonical** in `app/layout.tsx` (+ RX page) so beconrx.io self‑canonicalizes.
- [ ] **[Claude]** Add **`sitemap.ts`** and **`robots.ts`** (neither exists today): beconrx.io sitemap lists its own URLs; becongroup.io sitemap **drops** `/rx`.
- [ ] **[Claude]** `npm run build` + `npm run typecheck` + `npm run lint` clean.

*Option B delta:* instead of middleware, scaffold the new project, port components, and set beconrx.io as its root. The becongroup side still needs the 301 + link/sitemap edits.

### Phase C — Connect the domain (Day 2, ~1 hr work + DNS propagation)
- [ ] **[Vercel]** Add `beconrx.io` **and** `www.beconrx.io` as domains to the project; set the apex as primary and `www` → 301 to apex.
- [ ] **[Squarespace]** In the beconrx.io **DNS settings**, add the exact records Vercel shows (typically apex **A → 76.76.21.21** and **CNAME `www` → `cname.vercel-dns.com`**). *Use the values in the Vercel dashboard as the source of truth — they can change.*
  - Make sure beconrx.io is **not** pointed at a Squarespace parking/site page.
- [ ] **[Vercel]** Wait for domain **verification** and **SSL** to auto‑provision (Let's Encrypt). DNS propagation: minutes to a few hours.

### Phase D — Cutover (single, sequenced switch — no downtime)
**Order matters** so there's never a moment where `/rx` is dead but beconrx.io isn't ready:
1. [ ] **[You/Claude]** Deploy Phase B to a **Vercel preview**; verify RX renders correctly with the new root routing + brand.
2. [ ] **[Vercel]** Confirm beconrx.io resolves over **HTTPS** and serves the RX content (Phase C complete).
3. [ ] **[You/Claude]** **Promote to production.** The same deploy simultaneously (a) serves beconrx.io and (b) turns on the `becongroup.io/rx` → beconrx.io 301.
4. [ ] Run the **verification checklist** (Phase F) immediately.

### Phase E — SEO & external references (Day 2–3, after cutover)
- [ ] **[You]** In **Google Search Console**: check `site:becongroup.io/rx` to see if `/rx` is indexed; add **beconrx.io** as a new property; submit its sitemap; use **Change of Address / URL Inspection** to prompt re‑crawl.
- [ ] **[You/Claude]** Confirm 301s pass link equity (they do when permanent) and canonicals point to beconrx.io.
- [ ] **[You]** Update external references pointing at becongroup.io/rx: **LinkedIn**, email signatures, decks/one‑pagers, directory/listing profiles, any partner links.
- [ ] **[You]** (Optional) Set up **info@ / contact email** on the beconrx.io domain if BeConRx should have its own address.

### Phase F — Verify (immediately after cutover) — *do not skip*
- [ ] `curl -I https://becongroup.io/rx` → **301** to `https://beconrx.io/`.
- [ ] `curl -I https://becongroup.io/rx#model` behavior confirmed (hash isn't sent to the server; lands on beconrx.io root — acceptable).
- [ ] beconrx.io/ shows RX content, **RX brand** in nav/logo, valid **SSL**, working **/contact**.
- [ ] `www.beconrx.io` → 301 → apex.
- [ ] Every in‑app anchor works on beconrx.io (`/#model`, `/#engage`, `/#deliver`, `/#why`).
- [ ] No stray `/rx` links remain: grep the repo (Appendix A) → zero except the intentional 301 rule.
- [ ] becongroup.io home + /contact unaffected; footer/nav "BeCon Rx" now goes to beconrx.io.
- [ ] Open‑graph/social preview for beconrx.io renders with correct title/canonical.
- [ ] Analytics receiving beconrx.io pageviews.

### Phase G — Cleanup (after ~1–2 weeks of stable traffic)
- [ ] Keep the `/rx` → beconrx.io **301 permanently** (old bookmarks/backlinks depend on it — do **not** remove it).
- [ ] Remove now‑dead RX anchors/labels from the Group nav if any linger.
- [ ] Confirm Search Console shows beconrx.io indexed and `/rx` dropping out.

---

## 4. Risks & mitigations

- **Downtime gap** (`/rx` removed before beconrx.io live). → Sequenced single cutover in Phase D; beconrx.io verified live *before* promoting.
- **Wrong brand on beconrx.io** (nav shows "Group"). → Host‑based brand detection (Phase B); explicit check in Phase F.
- **Duplicate content** (RX reachable at both domains). → 301 from becongroup.io/rx + per‑host canonical to beconrx.io.
- **Lost SEO/backlinks.** → Permanent 301s + Search Console change‑of‑address + updated external links.
- **DNS pointed at a Squarespace page** instead of Vercel. → Explicit DNS record check in Phase C.
- **Anchor deep‑links lose their hash** on redirect. → Accepted (redirect to root); low impact.

## 5. Rollback

Everything here is reversible: DNS records revert, the Vercel domain can be removed, and the 301 rule + code changes live on a git branch. If beconrx.io misbehaves post‑cutover, revert the deploy (restores `/rx` serving) and pull beconrx.io from the project until fixed.

---

## 6. Recommended improvements (optional, low effort)

- **Automated redirect test:** a tiny script that hits each old `/rx*` URL and asserts a 301 to the right target — run it in CI so a future refactor can't silently break the redirect.
- **Link‑checker in CI:** fail the build if any internal `/rx` link reappears (guards the "shutdown").
- **Parity check:** snapshot beconrx.io vs the old `/rx` render to confirm nothing dropped in the move.
- I can implement all of Phase B (middleware, nav/brand refactor, link + metadata + sitemap/robots edits) directly in the repo on a branch, so your only manual steps are the Vercel/Squarespace dashboard actions in Phase C and the Search Console work in Phase E.

---

## Appendix A — /rx link inventory (from the current repo)

Every reference to fix (grep‑verified 2026‑07‑01):

| File | Line | Current | Change to |
|---|---|---|---|
| `components/site/nav.tsx` | 21 | `GROUP_LINKS`: `{ href: "/rx", label: "BeCon Rx", external: true }` | `https://beconrx.io` |
| `components/site/nav.tsx` | 25–28 | `RX_LINKS`: `/rx#model`, `/rx#engage`, `/rx#deliver`, `/rx#why` | `/#model`, `/#engage`, `/#deliver`, `/#why` |
| `components/site/nav.tsx` | 64 | brand = `pathname?.startsWith("/rx") ? "rx" : "group"` | detect by **hostname/header** |
| `components/site/footer.tsx` | 26 | footer link `href="/rx"` | `https://beconrx.io` |
| `app/layout.tsx` | — | `metadataBase: https://becongroup.io` | per‑host base + canonical |
| `app/rx/page.tsx` | — | RX content served at `/rx` | served at beconrx.io root via middleware rewrite (Option A) |

*New files to add:* `middleware.ts`, `app/sitemap.ts`, `app/robots.ts`.

## Appendix B — Key DNS/redirect reference

- Apex A record (verify in Vercel): `beconrx.io` → **76.76.21.21**
- WWW CNAME (verify in Vercel): `www.beconrx.io` → **cname.vercel-dns.com**
- Redirect rule: `becongroup.io/rx*` → **301** → `https://beconrx.io/`
- Canonical host: **beconrx.io** (apex); `www` redirects to apex.
