# CLAUDE.md — project notes for BeConGroup / BeConRx

Context for Claude (and humans) working in this repo.

## What this is

Marketing site for **BeConGroup** (biopharma commercial consultancy) and its subsidiary **BeConRx** (intelligence-led healthcare communications). Next.js 15 (App Router) + TypeScript + Tailwind v3, deployed on Vercel.

## ⚠️ Where this repo should live

**Do NOT keep or edit this project inside OneDrive** (or any cloud-sync folder). Git times out there with errors like `fatal: .git/index: unable to map index file: Operation timed out` and `Resource deadlock avoided`, because OneDrive virtualizes the `.git` files.

The active working copy is **`~/Developer/becongroup-website`** (outside OneDrive). An older copy may still exist under OneDrive as a backup — ignore it for development.

## Two brands, one deployment

Both brands are served from a **single Vercel project** (`becongroup-website`, team "BeConGroup") using **host-aware routing** — no separate site/repo:

- `becongroup.io` → BeConGroup home; `beconrx.io` → BeConRx page.
- `app/page.tsx` reads the request host and renders the BeConGroup home or the BeConRx page accordingly.
- `middleware.ts` 301-redirects the retired `/rx` path (on any host) to `https://www.beconrx.io/`.
- `lib/brand.ts` holds the host→brand mapping (`isRxHost`, `brandFromHost`, `originFromHost`) used by the layout, page, sitemap, and robots.
- `app/layout.tsx` sets per-host metadata (title template, canonical origin, OG) and passes the brand to `Nav`/`Footer`.

**`www` is the canonical host on both domains** (apex 308-redirects to www, handled by Vercel). Middleware must NOT redirect www→apex, or it forms a loop.

## Local development

```bash
npm install
npm run dev
```

- `http://localhost:3000` → BeConGroup
- `http://beconrx.localhost:3000` → BeConRx (the `beconrx.localhost` alias is recognized by `lib/brand.ts` for local preview)

## Deploy

Auto-deploys from GitHub **`SashaBeCon/becongroup-website`**:

- Push a branch → Vercel **preview** build.
- Merge/push to **`main`** → **production** (becongroup.io + beconrx.io update together).
- Roll back instantly via Vercel → Deployments → previous deployment → Instant Rollback.

## DNS

`beconrx.io` is registered at Squarespace (DNS managed there), pointed at Vercel: A `@` → `216.198.79.1`, CNAME `www` → `cname.vercel-dns.com`, plus a Google `TXT` verification record.

## More detail

See `MIGRATION_PLAN.md` (the /rx → beconrx.io migration plan) and `CUTOVER_GUIDE.md` (the publish/go-live steps).
