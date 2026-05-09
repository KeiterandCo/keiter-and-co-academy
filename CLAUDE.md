# Keiter & Co. Academy — CLAUDE.md

Project: keiter-and-co-academy
Repo: github.com/KeiterandCo/keiter-and-co-academy
Site: learn.keiterandco.com
Last updated: 2026-05-09

This file governs every build session for the Keiter & Co. Academy. Read it before touching a single file. The full spec and kickoff live at:
- `keiter-and-co-academy.spec.md`
- `keiter-and-co-academy.kickoff.md`
- `keiter-and-co-academy.decision-log.md`

---

## Project context

The Keiter & Co. Academy is a public, self-paced curriculum that teaches a new operator how to run a Keiter & Co. build from zero. Starting point is no AI exposure. Ending point is operating a complete client engagement using the Keiter methodology: intake, three-document workflow, build, launch, Welcome to the Family guide, and ongoing Care Plan support.

The site is built using the Keiter methodology. It is itself a worked example. The build follows every Keiter & Co. standard listed below. There are no exceptions for internal projects.

---

## Standing principles

1. We build for people we know and care about. The work reflects on us and on our community.
2. We work with AI. It does not work for us.
3. Agents recommend, build, and automate as far as possible. Humans push go. Always.
4. We are not lawyers. When anything feels legally adjacent, stop and verify.
5. No AI language, ever. If it would not come out of your mouth in a real conversation, rewrite it.

---

## Hard formatting rule

No em dashes. Ever. Use a comma, a period, or restructure the sentence. This applies to every word on the site, every content file, every comment, every commit message.

---

## Rules that travel with every build

- No em dashes, ever
- No contrast framing ("this isn't X, it's Y")
- No engagement bait or false suspense
- No therapy speak
- No AI language
- US English spelling and conventions
- Women first in references and sign-offs
- Voice matches Keiter & Co.: warm, direct, unpretentious
- Never invent information. Flag it, use a detailed placeholder, or stop and ask
- Tailwind default spacing scale only. No freehand padding or margins
- Semantic HTML first. ARIA only when it adds something HTML cannot
- Accessibility checked at build time, not at launch

---

## Voice and tone

Warm, direct, unpretentious. Write like you are talking to someone you trust at the auto shop or the farmers market. Real, not casual to the point of sloppy.

The tone is slightly more pedagogical than a client site because the job is to teach. It never tips into lecture or condescension. The reader is a smart adult who is new to this specific thing, not new to thinking.

Sign off as Olivia and Alex Keiter, or Keiter & Co., depending on context. Women first, always.

---

## Copy standards

- No em dashes, ever
- No contrast framing
- No engagement bait or false suspense
- No therapy speak
- No AI language
- No "Best," sign-offs. Use "Best wishes" or "Thank you"
- No corporate or agency tone
- US English spelling and conventions
- Women first in references and sign-offs
- Voice matches Keiter & Co., not a generic small business template
- Never invent information. Detailed placeholder is acceptable. Making something up is not
- Plain language for technical concepts. Define every term the first time it appears. Link it to the glossary

---

## Tech stack

- Framework: Astro (latest stable)
- Styling: Tailwind CSS plus custom brand theme
- Interactive components: React islands, .tsx files in `src/components/interactive/`
- Content: MDX in `src/content/`
- Search: Pagefind (build-time indexing)
- Images: Astro `<Image />` component
- Analytics: Google Analytics (gated on GA_ID env var, disabled in dev by default)
- Hosting: Netlify free tier via GitHub
- DNS: Netlify DNS, subdomain learn.keiterandco.com
- Build command: `npx astro build`
- Publish directory: dist
- NODE_VERSION: 18
- Repo: github.com/KeiterandCo/keiter-and-co-academy

---

## Build standards summary

Every item below is a gate, not a preference.

**Copy:** no em dashes, no contrast framing, no engagement bait, no therapy speak, no AI language, US English, women first, no invented information.

**Accessibility:** WCAG 2.2 AA. Semantic HTML. Descriptive alt text. Color contrast on every text-on-background combination. Keyboard navigation for every interactive widget. Focus indicators visible. Form fields labeled. Target sizes 24x24 minimum (44x44 on mobile). ARIA used correctly and sparingly.

**Mobile:** mobile-first. Preview at 375px, 768px, 1280px. Hamburger menu. Touch targets 44x44 minimum. Responsive typography.

**Online personality:** scroll-triggered entrance animations on key sections. Hover states on all interactive elements. At least one SVG animation. Cards, tags, badges where content supports them. Section variety.

**Font loading:** primary fonts preloaded in head. `font-display: swap`. System fallback stack.

**Images:** every photo slot has a detailed description and aspect ratio. At least 4 to 5 photo slots per landing page. No generic stock without description.

**SEO and AEO:** semantic HTML. Meta titles and descriptions written as answers. OpenGraph on every page. Schema markup. Plain language service descriptions.

**Dark mode:** off. Do not add silently.

**Print:** body text black on white. Nav and footer flourishes hidden.

**404:** branded, voice matches academy, link home.

---

## File and folder conventions

- Content: `src/content/modules/`, `src/content/glossary/`, `src/content/resources/`
- Interactive components: `src/components/interactive/`
- Layout components: `src/layouts/`
- Shared components: `src/components/`
- Audio files: `public/audio/`
- Audio transcripts: `src/content/audio-transcripts/`
- Images: `public/images/`
- Fonts: `public/fonts/`

---

## What to do if a detail is missing

1. Check the spec first.
2. Check the decision log second.
3. If still unclear, write a flagged placeholder in BUILDNOTES.md with a specific description of what is needed and stop. Do not invent.

---

## BUILDNOTES.md

BUILDNOTES.md lives at the repo root. Any detail that is unclear, any gap that cannot be resolved from the three build documents, and any item deferred from a quality gate goes in BUILDNOTES.md. Check it at the start of every session. Add to it freely. Never delete an entry without resolving it.

---

## Session discipline

- Read this file before starting.
- Check BUILDNOTES.md before starting.
- Check which phase is current in the kickoff before starting.
- End every session with a handoff note in the kickoff file (or a separate phase-N-handoff.md if long).
- Localhost URL in every response that touches code: http://localhost:4321
- Never start a new phase without the previous handoff note written.
