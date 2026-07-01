# Going Live — Publish & Cutover Guide (plain English)

**Where things stand (2026‑07‑01)**

- ✅ The code changes are written and proven on your local machine (localhost).
- ✅ **beconrx.io is connected and live** on Vercel (currently shows the BeConGroup home — it flips to BeConRx the moment the new code publishes).
- ⬜ The code changes are still **only on your Mac**. They need to reach GitHub for the live sites to update.

**How your site publishes:** automatically from GitHub. Your repo `SashaBeCon/becongroup-website` is wired to Vercel — when code lands on the **`main`** branch, Vercel rebuilds and your live sites update. That's the "publish button."

**Why we do it in this order:** the new code makes `becongroup.io/rx` redirect to beconrx.io and makes beconrx.io show the BeConRx page. beconrx.io is already live, so we're clear to go. We publish to a **preview** first (safe — doesn't touch the live site), confirm it builds, then flip to production. If anything looks off after going live, Vercel has **one‑click rollback**.

---

## Step 1 — Get the changes onto GitHub

**Easiest option: GitHub Desktop** (a visual app — no typing commands).

1. If you don't have it: download from **desktop.github.com**, install, and sign in with the GitHub account that owns `SashaBeCon`.
2. Open it and choose the **becongroup-website** repository. You'll see a list of **Changed Files** on the left — it should be roughly these:
   - New: `middleware.ts`, `lib/brand.ts`, `app/sitemap.ts`, `app/robots.ts`, `MIGRATION_PLAN.md`, `CUTOVER_GUIDE.md`
   - Changed: `app/layout.tsx`, `app/page.tsx`, `components/site/nav.tsx`, `components/site/footer.tsx`
3. Top bar → **Current Branch** → **New Branch** → name it `beconrx-domain-migration` → **Create Branch**.
4. Bottom‑left, type a summary: `Move BeConRx to beconrx.io; retire /rx` → click **Commit to beconrx-domain-migration**.
5. Click **Push origin** (top right).

<details>
<summary>Alternative: Terminal (if you prefer)</summary>

```bash
cd "/Users/sasha/Library/CloudStorage/OneDrive-BeConPartners/BeconGroup/05_CLAUDE/PROJECTS/01_Becongroup_website/Becongroup_website"
git checkout -b beconrx-domain-migration
git add -A
git commit -m "Move BeConRx to beconrx.io; retire /rx"
git push -u origin beconrx-domain-migration
```
</details>

## Step 2 — Check the preview (safe — live site untouched)

Pushing the branch makes Vercel build a **Preview** automatically.

1. Go to **github.com** → your repo → click **Compare & pull request** → **Create pull request**.
2. On the pull request, Vercel posts a **build check** and a **Preview link**.
   - ❌ **Build fails (red X):** nothing is live or harmed. Copy the error Vercel shows and send it to me — I'll fix it. *(This preview is exactly how we catch any build problem safely.)*
   - ✅ **Build succeeds:** open the Preview link and check the BeConGroup home looks normal.
   - Note: the preview is a `…vercel.app` address, so it **can't** show the beconrx.io behavior (the domain‑based switching only fires on the real domains). We already proved that part on your localhost and we verify it live in Step 4 — with rollback ready.

## Step 3 — Go live

On the pull request, click **Merge pull request** → **Confirm**. Vercel deploys `main` to production automatically (about 1–2 minutes).

*(In GitHub Desktop you can instead switch Current Branch to `main`, then Branch → Merge into current branch → pick `beconrx-domain-migration`, then Push.)*

## Step 4 — Verify live (right after it deploys)

Check these four things in your browser:

1. **www.beconrx.io** → now shows the **BeConRx** page (not BeConGroup).
2. On beconrx.io, click the **logo and menu** → you stay on the RX site.
3. **www.becongroup.io/rx** (and becongroup.io/rx) → **redirects to www.beconrx.io**.
4. **www.becongroup.io** → BeConGroup home still normal; the **"BeCon Rx"** menu link now points to beconrx.io.

Tell me when it's deployed and I'll independently verify all four from my side too.

## Step 5 — If something looks wrong: instant rollback

Vercel → project **becongroup-website** → **Deployments** → the previous working deployment → **⋯** → **Instant Rollback** (or "Promote to Production"). Your live site reverts in seconds. Then we fix and re‑publish — no pressure.

---

## After go‑live (later, not urgent)

- **Google Search Console:** add **beconrx.io** as a property, submit its sitemap (`https://www.beconrx.io/sitemap.xml`), and (optional) use Change of Address / URL Inspection so Google re‑crawls.
- **Update external links:** LinkedIn, email signatures, any decks or directories that point to becongroup.io/rx.
- Keep the `/rx` → beconrx.io redirect **permanently** (old bookmarks depend on it).

I can walk you through the Search Console steps whenever you're ready.
