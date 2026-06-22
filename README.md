# BeConGroup Website

Marketing site for BeConGroup (biopharma commercial consultancy) and its subsidiary **BeConRx** (intelligence-led healthcare communications). Built with Next.js 15, TypeScript, Tailwind v3. Deployed to Vercel.

- **Live**: https://becongroup.io _(pending)_
- **Routes**: `/` (BeConGroup home) · `/rx` (BeConRx) · `/contact`

---

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run dev server (http://localhost:3000)
npm run dev

# 3. Production build (verify before deploy)
npm run build && npm start
```

Requires Node 20+.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 App Router | SSR/SEO, RSC, image optimization, Vercel-native |
| Language | TypeScript 5 (strict) | Catch errors at build, refactor with confidence |
| Styling | Tailwind 3.4 + design tokens | Design system encoded in `tailwind.config.ts` + `app/globals.css` |
| Type | Inter Tight via `next/font` | One variable family, zero CLS, weight 300–800 |
| Lint/format | ESLint flat config + Prettier + `prettier-plugin-tailwindcss` | Consistent code, sorted classes |

---

## Folder structure

```
.
├── app/                  Next.js App Router pages + globals.css
│   ├── layout.tsx        Root layout, Inter Tight, metadata
│   ├── globals.css       Design tokens + section background utilities
│   ├── page.tsx          BeConGroup home (scaffold)
│   ├── rx/page.tsx       BeConRx home (scaffold)
│   └── contact/page.tsx  Contact (scaffold)
├── components/           Reusable UI primitives (Nav, Footer, Card, …) — TBD
├── lib/                  Helpers (cn, etc.)
├── public/               Static assets (hero-rain.jpg, favicon, OG images)
├── mockups/              Static HTML mockups — not shipped, ignored by build/lint
├── about-me.md           Claude collaboration guide (Sasha)
├── about-team.md         Claude collaboration guide (team)
├── tailwind.config.ts    Design tokens
├── next.config.ts        Next config (image formats, package optim.)
├── eslint.config.mjs     Flat ESLint config (next/core-web-vitals + typescript)
├── tsconfig.json
└── package.json
```

---

## Design system

The design system is encoded in two places that mirror each other:

1. **`tailwind.config.ts`** — colors, fonts, type scale, radii, shadows. Use via Tailwind classes (`bg-orange-400`, `text-h1`, `rounded-lg`, `shadow-md`).
2. **`app/globals.css`** — same tokens as CSS variables (`--orange-400`, `--blue-500`, `--shadow-md`, `--logo-gradient`, …) for runtime use. Plus section-background utility classes (`.bg-section-orange`, `.bg-section-blue-bold`, …) that pair background + text-color shifts for AA contrast.

See `mockups/01-design-system.html` for the rendered spec sheet (colors, type, hero, sections, controls).

A more formal spec doc (`DESIGN_SYSTEM.md`) will be added in task #10.

---

## Content sources

- Site copy: drafted in `mockups/01-design-system.html` and the BeConRx unpacked draft. Not yet in CMS.
- Hero image: licensed iStock raindrop photo. Original kept at `mockups/assets/iStock-*.jpg` (gitignored); web-optimized variants will live at `public/hero-rain.jpg` and `public/hero-rain-md.jpg`.

---

## Deploy (Vercel)

Not yet connected. When ready:

```bash
# Install Vercel CLI once
npm i -g vercel

# From repo root
vercel link        # link this folder to a new project
vercel             # preview deploy
vercel --prod      # production deploy to becongroup.io
```

Domain (`becongroup.io`) → add in Vercel dashboard after first deploy.
