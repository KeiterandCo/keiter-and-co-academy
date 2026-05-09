# Keiter & Co. Academy: Kickoff

Project: keiter-and-co-academy
Last updated: 2026-05-09
Status: Build documents complete, ready for execution
Companion docs: `keiter-and-co-academy.decision-log.md`, `keiter-and-co-academy.spec.md`

---

## How to use this kickoff

This kickoff is multi-phase. Every phase is a clearly labeled section below. Each phase is a self-contained instruction set. A build session picks up one phase, executes it, ends with the phase's handoff note, and stops. The next session reads the previous handoff note and picks up the next phase.

Read the preamble before every phase, every time. The preamble is short and the rules in it apply to every phase without exception.

Read the decision log and spec at least once before starting phase 1. The kickoff translates the decisions into work; it does not re-explain them.

---

## Build context

Building the Keiter & Co. Academy at `C:\workspace\keiter-co\keiter-and-co-academy`. Astro static site, Tailwind, Netlify free tier, deployed to `learn.keiterandco.com`. Public-facing curriculum that teaches the Keiter & Co. methodology end to end.

Repo will live at `github.com/KeiterandCo/keiter-and-co-academy`. Local folder name and repo name match.

This build follows the full Keiter & Co. methodology. Three documents complete. Definition of Done checklist applies to this build. WCAG 2.2 AA, SEO, AEO, mobile-first, online personality, font loading, image standards, color contrast, footer, sections, dark mode off, print stylesheet, branded 404, social slots, CTA audit. All items in the spec's Build Standards section are gates, not preferences.

---

## Travel rules

These rules apply to every phase, every output, every line of code, every word of copy.

- No em dashes, ever. Comma, period, or restructure the sentence. This applies to markdown content, code comments, commit messages, and UI copy.
- No contrast framing.
- No engagement bait.
- No therapy speak.
- No AI language.
- US English spelling.
- Women first in references and sign-offs.
- Voice matches Keiter & Co. Warm, direct, unpretentious.
- Never invent information. If a detail is missing, use a clearly described placeholder and flag it in BUILDNOTES.
- Tailwind default spacing scale only. No freehand padding or margins.
- Semantic HTML first. ARIA only when it adds something HTML cannot.
- Accessibility checked at build time, not at launch.

---

## Stack reference

- Astro latest stable
- Tailwind CSS plus a small custom theme
- React islands for interactive widgets (`.tsx` files inside `src/components/interactive/`)
- MDX for module content
- Pagefind for search
- Astro `<Image />` for image optimization
- Google Analytics (default per Keiter & Co. standard, swap if Olivia confirms)
- Netlify CLI for deploys
- NODE_VERSION 18, build command `npx astro build`, publish dir `dist`
- Repo: `github.com/KeiterandCo/keiter-and-co-academy`

---

## Universal stop gates

Every phase ends when:

1. The phase goal is met.
2. The phase quality gates pass.
3. A handoff note is written at the bottom of this file (or in a separate `phase-N-handoff.md` if it gets long), capturing what's done, what's deferred, what the next phase needs to know, and the localhost URL of the current state.
4. Any blocked items are surfaced, not buried.

Do not start a new phase until the previous handoff note exists. If a phase cannot be completed, stop, write a handoff note describing what's blocking it, and surface the block to Olivia.

Every build session response that touches code includes the localhost URL (typically `http://localhost:4321`) so Olivia can preview without hunting.

---

## Open questions baked into this kickoff

The following decisions were made by default in the spec. Each one is flagged here so a phase that touches the decision can surface it before acting.

- Capstone client (Module 22): learner-of-choice with fictional fallback baked in.
- Audio narration provider: ElevenLabs (Phase 10 will surface for confirmation before generating any audio).
- Brand inheritance: Phase 1 pulls colors, type scale, and component patterns from `C:\workspace\keiter-co\keiter-and-co-site`. If the marketing site is mid-evolution, Olivia confirms which version to inherit before applying.
- Alex on the About page: Olivia only by default. Phase 5 (when About is written) flags before adding Alex.
- Analytics: Google Analytics by default. Phase 11 surfaces to confirm before final SEO pass.
- HoneyBook walkthrough (Module 17): Phase 4 surfaces to confirm whether Olivia screenshots and narrates herself or whether the module ships with structural content and a placeholder.
- Month-1 check-in (Module 20): Phase 5 surfaces. If undocumented, Module 20 ships with the section as a flagged placeholder.

---

# PHASE 1: Scaffold and shell

**One-line summary.** Stand up the Astro project, configure Tailwind, write CLAUDE.md, build the base layout and shared components, stub every route, get localhost rendering.

## Inputs

- Decision log present: `keiter-and-co-academy.decision-log.md`
- Spec present: `keiter-and-co-academy.spec.md`
- This kickoff present: `keiter-and-co-academy.kickoff.md`
- Empty target folder: `C:\workspace\keiter-co\keiter-and-co-academy`
- Reference brand source: `C:\workspace\keiter-co\keiter-and-co-site`

## Goal

A running local Astro site at `http://localhost:4321` with the academy brand applied, every route stubbed and rendering placeholder content, CLAUDE.md in the repo root, and a git repo initialized with the first commit.

## Tasks

1. Init Astro project in the target folder. Use the minimal starter, not a heavy template. Confirm the project structure: `src/pages/`, `src/components/`, `src/layouts/`, `src/content/`, `public/`, `astro.config.mjs`, `package.json`.

2. Install dependencies: `@astrojs/mdx`, `@astrojs/tailwind`, `@astrojs/react`, `astro-pagefind`, `pagefind`. Add Tailwind with a custom config file.

3. Pull brand tokens from the marketing site at `C:\workspace\keiter-co\keiter-and-co-site`. Look for: color palette (primary, accent, neutral, text, background), type scale (display, heading, body, small), font families (heading, body, mono), spacing tokens beyond Tailwind defaults if any, border radius scale, shadow scale, any custom component patterns (button, card, callout). If the marketing site is mid-evolution or the tokens are unclear, stop and ask Olivia which version to inherit.

4. Write `CLAUDE.md` at the repo root. Pull from the business-level CLAUDE.md template in `C:\workspace\keiter-co\business-docs\CLAUDE.md` and adapt for this build. Include: standing principles, hard formatting rule, voice and tone, copy standards, stack reference, build standards summary, the rules that travel with every build, and a one-paragraph project context. Reference this kickoff and the spec for full detail.

5. Build base layout and shared components.
   - `src/layouts/Layout.astro`: head with meta, OpenGraph, font preload, GA snippet, schema slot, and a body that renders Header, slot, Footer.
   - `src/components/Header.astro`: logo, top nav (Curriculum, Resources, Glossary, About), search trigger, mobile hamburger trigger.
   - `src/components/Footer.astro`: minimal per Keiter standard. Business name, two key links, Keiter & Co. credit, copyright, social slots (hidden if no URLs).
   - `src/components/MobileNav.astro`: hamburger overlay with same nav items plus search.
   - `src/pages/404.astro`: branded, voice matches academy, link home.

6. Stub every route in the spec's information architecture.
   - `src/pages/index.astro` (landing)
   - `src/pages/start.astro`
   - `src/pages/curriculum/index.astro`
   - `src/pages/curriculum/[part]/index.astro` (dynamic route placeholder)
   - `src/pages/curriculum/[part]/[module].astro` (dynamic route placeholder)
   - `src/pages/resources.astro`
   - `src/pages/glossary.astro`
   - `src/pages/about.astro`
   - `src/pages/search.astro`
   - Each stub renders a placeholder heading and a "this page is under construction" note that follows copy standards.

7. Set up font loading per the standard. Preload primary fonts in `<link rel="preload">`. Set `font-display: swap`. Define a system fallback stack that closely matches the primary font.

8. Add basic GA snippet to Layout, gated on a config flag so it can be disabled in dev. Use the GA property ID Olivia provides, or a placeholder string until she confirms.

9. Run `npm run dev`, confirm localhost renders. Click through every stubbed route. Confirm mobile nav opens and closes. Check focus states are visible.

10. Initial git commit. Create the GitHub repo via gh CLI under the KeiterandCo org, name `keiter-and-co-academy`. Push main. Do not create a Netlify site yet (defer to Phase 12).

## Quality gates

- All routes from the spec exist as stubs and render without error
- Header, Footer, MobileNav render on every page
- Color contrast on header, nav, footer, body text is checked at desktop and mobile
- Fonts load without FOIT or visible swap
- Hamburger menu visible and functional on mobile
- Focus states visible on every interactive element
- 404 page is branded and follows copy standards
- CLAUDE.md is present, complete, and follows copy standards
- Localhost runs clean
- First commit pushed to GitHub

## Stop conditions

- Brand tokens unclear or marketing site mid-evolution: stop and ask Olivia which version to inherit
- Any route fails to render
- Tailwind not picking up custom theme
- Font loading not working

## Handoff note template for Phase 1

```
## Phase 1 handoff

Done:
- (list every task completed)

Deferred to later phases:
- (anything stubbed or placeholder)

Known issues:
- (anything off, even minor)

State:
- Localhost: http://localhost:4321
- Last commit: (hash and message)
- Next phase: Phase 2 (content infrastructure)

For Olivia:
- (any decision needed before Phase 2 starts)
```

---

# PHASE 2: Content infrastructure

**One-line summary.** Set up Astro content collections, build the page templates that consume them, render placeholder data so every template type works end to end.

## Inputs

- Phase 1 handoff note exists
- Localhost runs clean from Phase 1
- All routes stubbed

## Goal

Every page template renders correctly with placeholder data sourced from Astro content collections. The infrastructure for content is built; the content itself comes in Phases 3 through 7.

## Tasks

1. Create `src/content/config.ts` with three collections:
   - `modules`: schema includes `title`, `partSlug`, `moduleNumber`, `learningGoal`, `learningResourceType`, `estimatedMinutes`, `prerequisites` (array of module slugs), `sourceOfTruth` (array of paths or URLs), `lastReviewed` (date), `audioFile` (optional), `transcriptFile` (optional), `interactiveComponent` (optional).
   - `glossary`: schema includes `term`, `definition`, `seeAlso` (array of term slugs).
   - `resources`: schema includes `title`, `description`, `fileType`, `downloadPath`.

2. Add three placeholder entries per collection so templates have data to render. Make placeholder content follow copy standards. Mark each placeholder with `lastReviewed: 2026-05-09` and a description like "placeholder, real content lands in Phase 3."

3. Build content components.
   - `src/components/ModuleCard.astro`: renders a module preview card. Title, learning goal one-liner, estimated time, part badge, completion status from localStorage.
   - `src/components/PartIndex.astro`: renders a part landing block with intro and module list.
   - `src/components/Callout.astro`: variants `source-of-truth`, `warning`, `example`, `key-rule`. Each variant has a distinct visual style.
   - `src/components/CodeBlock.astro`: wraps Shiki output with a copy-to-clipboard button.
   - `src/components/GlossaryTerm.astro`: inline term with hover popover sourced from the glossary collection.
   - `src/components/LearningGoals.astro`: small list of goals at the top of a module page.
   - `src/components/ProgressIndicator.astro`: sticky bar showing position in the part and in the curriculum overall.
   - `src/components/LastReviewed.astro`: small footer showing when the module was last reviewed against the source-of-truth doc.

4. Build page templates.
   - Landing page (`/`) renders hero, "Who this is for" cards, curriculum table of contents, "What success looks like."
   - Start page (`/start`) renders the three branching cards.
   - Curriculum index renders all modules as ModuleCards organized by Part, with filter by Part.
   - Part index dynamic route renders a PartIndex with the part's modules.
   - Module page dynamic route renders metadata strip, audio player slot (empty in this phase), learning goals, content slot, source-of-truth callouts, last reviewed, mark-complete toggle, prev/next nav.
   - Glossary renders alphabetical terms.
   - Resources renders a list grouped by type (template, cheat sheet, worked example).
   - About page renders a content slot.

5. Wire up `localStorage` for mark-complete state on module pages. Use a small client-side script that toggles a class and persists the state. Do not require an account.

6. Add Pagefind integration for search at build time. Configure search modal trigger in Header.

7. Confirm every page renders cleanly with placeholder content. Click through all routes. Check mobile.

## Quality gates

- All content collections register and validate
- Every page template renders placeholder content correctly
- Glossary popovers work on hover and on focus (keyboard accessible)
- Mark-complete toggle persists across reloads
- Search returns results from placeholder content
- Mobile nav and module pages render correctly at 375px, 768px, 1280px
- Color contrast checked on Callout variants, ModuleCard, PartIndex
- Focus states visible on every new interactive element

## Stop conditions

- Content collection schema rejects valid placeholder content (debug, do not work around)
- Pagefind integration fails to index

## Handoff note template for Phase 2

Same shape as Phase 1. Include the localhost URL, list every page template that renders correctly, list every component built, note any deferred work, surface anything Olivia needs to decide before Phase 3.

---

# PHASE 3: Self-sourced content batch 1

**Modules in this phase: 01, 02, 06, 09, 10, 11.**

**One-line summary.** Write the first six self-sourced modules from existing Keiter docs. Six modules end up readable end to end after this phase.

## Inputs

- Phase 2 handoff note exists
- Content collections and templates work with placeholder data
- Source-of-truth docs accessible: project instructions, methodology, business-level CLAUDE.md, guide-addendum.md, guide-spec-template.md, the Outpost decision log and spec

## Goal

Six fully written modules in `src/content/modules/`. Each module has prose, callouts, code examples where applicable, source-of-truth references, last-reviewed date set to today, photo placeholders described in detail, and stubbed slots for the interactive component (real component built in Phase 8 or 9).

## Tasks

1. Write Module 01 (Welcome and how to use this curriculum). Source: this spec, decision log, project instructions. Voice: warm, direct, sets expectations. Length: about 8 minutes. Include: what the academy is, who it is for, how to navigate, how long it takes, what success looks like, what to do if you get stuck.

2. Write Module 02 (The Keiter & Co. operating system). Source: project instructions Standing principles, Build roles, About Olivia and Alex, Constraints sections. Voice: name the principles, explain each one in plain language with a real example. Length: about 15 minutes. Stub the principles flashcards interactive component.

3. Write Module 06 (Voice and tone). Source: project instructions Voice and tone, Hard formatting rule, Rules that travel with every build sections. Voice: teach by example. Show the wrong way and the right way. Length: about 15 minutes plus interactive. Stub the copy rewrite practice component.

4. Write Module 09 (The three-document system). Source: project instructions Build workflow section, methodology doc, this academy's own decision log and spec, and the Outpost decision log and spec. Voice: explain why three documents, walk through each one, show real examples from this build and from Outpost side by side. Length: about 30 minutes plus interactive. Stub the kickoff prompt generator and decision log generator components.

5. Write Module 10 (Phased prompts and context window management). Source: project instructions Build workflow, methodology doc, original framing for what context windows are and why they matter. Voice: name the problem (context windows are finite, builds are long, things get lost), then the Keiter solution (phased kickoffs, handoff notes, stop gates). Use this academy's twelve-phase kickoff as a worked example. Length: about 22 minutes plus interactive. Stub the context window visualizer component.

6. Write Module 11 (Build standards I: SEO, AEO, accessibility, mobile). Source: project instructions SEO and AEO as build standards, Accessibility as a build standard, Mobile as a build standard. Voice: each standard is a build-time check, not a launch check. Show the JSON-LD blocks from the project instructions as code examples. Length: about 35 minutes plus interactive. Stub the AEO completeness checker component.

7. For every module: add the front matter (title, partSlug, moduleNumber, learningGoal, learningResourceType, estimatedMinutes, prerequisites, sourceOfTruth, lastReviewed). Add Last Reviewed component to footer. Add audio file slot (empty until Phase 10).

8. For every photo placeholder in any module, write a detailed description per the Image standard. Include subject, lighting, framing, aspect ratio. No "image goes here" anywhere.

9. Click through every new module on localhost. Confirm rendering, popovers, prev/next, mark-complete toggle.

## Quality gates

- All six modules render correctly on localhost at desktop, tablet, mobile
- Copy standards pass on every module (no em dashes, no AI language, no contrast framing, no engagement bait)
- Source-of-truth callouts present and link to canonical doc
- Photo placeholders have detailed descriptions and aspect ratios
- Last reviewed dates set
- Interactive component stubs render the "interactive widget here" placeholder cleanly
- Glossary terms used inline link to the glossary entry

## Stop conditions

- A source-of-truth doc cannot be located: stop and ask Olivia
- Voice doesn't match the rest of the curriculum on review (stop, rewrite, surface for Olivia review)

## Handoff note template for Phase 3

Standard shape. List the six modules complete. Flag any voice or content questions for Olivia review before Phase 4.

---

# PHASE 4: Self-sourced content batch 2

**Modules in this phase: 12, 13, 14, 16, 17, 18.**

**One-line summary.** Write six more self-sourced modules. Twelve modules readable after this phase.

## Inputs

- Phase 3 handoff note exists
- Six modules from Phase 3 readable and reviewed
- Source docs as before, plus HoneyBook process notes if Olivia provides them

## Goal

Six more fully written modules. Same standards as Phase 3.

## Tasks

1. Write Module 12 (Build standards II: the personality and polish layer). Source: project instructions Online personality, Font loading, Image standards, Footer, Section and layout, Color contrast, Dark mode, Print, 404, Social, CTA audit sections. Voice: every site has personality, build it in from the first draft, do not bolt it on later. Length: about 40 minutes plus interactive. Stub the first-draft quality bar component.

2. Write Module 13 (Definition of Done and BUILDNOTES.md). Source: project instructions Definition of done section. Voice: a checklist is the only honest way to confirm a build is done. Show the full DOD with explanations of why each item matters. Length: about 18 minutes plus interactive. Stub the DOD checklist tool.

3. Write Module 14 (The agent fleet and automation queue). Source: project instructions Automation section. Voice: agents recommend, build, and automate as far as possible, humans push go. Walk through each Live agent (Intake Agent, Business Radar) with what they do and how they fit. Walk through the Scoped queue. Length: about 18 minutes. No interactive component.

4. Write Module 16 (Pricing, tiers, Care Plans, and the no-upfront plan). Source: project instructions Service tiers, Care Plans, No-upfront payment plan sections. Voice: explain every tier and plan in plain language, the kind a small business owner can read once and understand. Length: about 22 minutes plus interactive. Stub the tier selector tool.

5. Write Module 17 (Proposals, contracts, and payment). Source: project instructions plus HoneyBook process notes. Surface to Olivia before writing: confirm whether Olivia screenshots and narrates the HoneyBook flow herself, or whether the module ships with structural content and a placeholder for the operational walkthrough. Voice: a proposal in the Keiter format is one page or less, three sections, warm and clear. Length: about 25 minutes plus interactive. Stub the proposal template tool.

6. Write Module 18 (Infrastructure). Source: project instructions Infrastructure, Build workflow Operational conventions sections. Voice: domain at Namecheap, hosting at Netlify, DNS at Netlify, GitHub repo under KeiterandCo. Show the actual setup steps for a new client site, including Netlify CLI commands. Length: about 30 minutes plus interactive. Stub the infrastructure checklist tool.

7. Same front matter, photo placeholder, and quality requirements as Phase 3.

## Quality gates

Same as Phase 3, applied to these six modules.

## Stop conditions

- HoneyBook walkthrough decision unresolved: surface to Olivia before writing Module 17 content
- Source-of-truth gap on operational details: surface to Olivia

## Handoff note template for Phase 4

Standard shape. Twelve modules complete after this phase.

---

# PHASE 5: Self-sourced content batch 3

**Modules in this phase: 19, 20, 23.**

**One-line summary.** Final batch of self-sourced modules. Fifteen modules readable after this phase.

## Inputs

- Phase 4 handoff note exists
- Twelve modules from Phases 3 and 4 readable
- Source docs include `guide-spec-template.md` and `guide-addendum.md` for Module 19

## Goal

Three more fully written modules.

## Tasks

1. Write Module 19 (Launch and the Welcome to the Family guide). Source: project instructions Welcome to the Family guide section, `guide-spec-template.md`, `guide-addendum.md`. Voice: a launch is a real moment, in person where possible, the guide is the artifact that says "you own this." Walk through every section of the Welcome guide with explanations. Length: about 25 minutes plus interactive. Stub the guide spec walkthrough component.

2. Write Module 20 (Care Plans in practice, ongoing comms, offboarding). Source: project instructions Care Plans, Hosting model sections, plus the offboarding checklist that exists in keiter-and-co-instructions. Surface to Olivia before writing the month-1 check-in section: confirm whether to ship as a flagged placeholder (no documented process exists) or to capture the process in a working session before this module finalizes. Voice: a Care Plan is a relationship, not a service line item. Length: about 25 minutes plus interactive. Stub the monthly snapshot template component.

3. Write Module 23 (Reference, templates, and cheat sheets). Source: this spec's Resources page section, project instructions, methodology. This module is the index for the Resources page. List every downloadable template (decision log, spec, kickoff, BUILDNOTES, CLAUDE.md, Welcome guide spec) and every cheat sheet (hard rules, build standards summary, DOD checklist). Length: about 5 minutes to skim, ongoing reference. No interactive component.

4. Build the actual downloadable templates as markdown files in `public/templates/`. Each one is a blank version of the corresponding document with section headers, placeholder text, and inline guidance. Filenames follow the methodology naming convention.

5. Build the cheat sheets as compact one-pagers, downloadable as both markdown and PDF. The hard rules cheat sheet is the highest-priority and gets the most polish.

6. Same front matter, photo placeholder, and quality requirements as previous phases.

7. Surface to Olivia before generating the PDFs: confirm a PDF generation approach (manual export from a styled markdown render, or programmatic via a library like Puppeteer or Astro's print stylesheet exported through a headless browser).

## Quality gates

Same as previous content phases. Plus: every downloadable template renders correctly and is downloadable from the Resources page.

## Stop conditions

- Month-1 check-in decision unresolved: surface to Olivia before finalizing Module 20
- PDF generation approach unresolved: surface to Olivia before Phase 11

## Handoff note template for Phase 5

Standard shape. Fifteen modules complete after this phase.

---

# PHASE 6: Original content drafts

**Modules in this phase: 03, 04, 05, 21.**

**One-line summary.** Draft the modules that need original writing rather than synthesis from existing docs. Stop at the end of each module for Olivia review before continuing.

## Inputs

- Phase 5 handoff note exists
- Self-sourced modules complete
- Anthropic public documentation accessible for AI 101 references

## Goal

Four drafted modules ready for Olivia's voice and accuracy review. After review and revision, these modules join the readable set.

## Tasks

1. Draft Module 03 (AI 101). Voice: explain AI, LLM, and Claude in plain language someone with zero AI exposure can read once and understand. No marketing language, no mystifying. Use real examples from a Keiter & Co. context (an Astro spec written with Claude, a kickoff prompt). Length: about 12 minutes. After drafting, stop and request Olivia review before moving to Module 04.

2. Draft Module 04 (The three Claude surfaces). Voice: Chat is the conversation surface, Code is the build surface, Cowork is the desktop file surface. Each one fits a different kind of work. Show real Keiter examples for each (Chat for early conversation and methodology questions, Code for actual builds in VSCode, Cowork for file tasks and document generation). Length: about 18 minutes plus interactive (surface selector stubbed). After drafting, stop and request Olivia review.

3. Draft Module 05 (Working with Claude as your build partner). Voice: confirm before deliverables, automate instead of clicking, end phases with handoff notes, recover from a context window crash. Show real Keiter patterns. Length: about 20 minutes plus interactive (pick the next move stubbed). After drafting, stop and request Olivia review.

4. Draft Module 21 (The Outpost Vending walkthrough). Voice: walk through the build from intake notes through launched site. Show the real decision log next to its rationale. Show the real spec next to the page output it produced. Show the build phases. Tie every artifact back to the methodology. Length: about 45 minutes. After drafting, stop and request Olivia review.

5. After Olivia review of each module, apply edits. Final pass before moving on.

## Quality gates

Same as previous content phases, plus: Olivia has reviewed and signed off on each module before phase ends.

## Stop conditions

- Olivia review surfaces a voice or accuracy issue that requires more than a quick edit: stop, capture the feedback, write a sub-plan, surface to Olivia for direction
- Outpost source materials missing: stop and ask

## Handoff note template for Phase 6

Standard shape. Note any modules that needed substantial rewrite based on review.

---

# PHASE 7: Working session placeholder modules

**Modules in this phase: 07, 08, 15, 22.**

**One-line summary.** Stub the four modules that require Olivia working sessions to capture tribal knowledge. Each placeholder is well-designed, not empty.

## Inputs

- Phase 6 handoff note exists
- Olivia has reviewed and signed off on the original draft modules

## Goal

Four module pages exist with clear "this module is under construction" notes that match the academy voice, list what the working session needs to capture, link to existing related content, and offer the learner a path forward (skip ahead, read related modules, come back later).

## Tasks

1. Stub Module 07 (Voice discovery). Placeholder content: a one-paragraph framing of why voice discovery matters, a list of questions Olivia asks in intake (sourced from the project instructions and the Intake Agent prompt file), a "this module is under construction" callout naming what the working session needs to capture (the actual extraction skill, real examples of voice discovery in past builds, common voice patterns by industry).

2. Stub Module 08 (Decision-making and the standing principles in action). Placeholder: a one-paragraph framing, a callout pointing to Module 02 (the principles) and Module 09 (the three documents) as the foundation, an "under construction" callout naming the working session content needed (real principle-tension scenarios, how Olivia thinks through them, framework for novel situations).

3. Stub Module 15 (Intake). Placeholder: structural content from the Intake Agent prompt file, the intake question categories, the brief generation flow. The "under construction" piece is "how Olivia actually runs an intake conversation": pacing, listening cues, what she does when notes get vague, the live guidance she gives herself.

4. Stub Module 22 (Capstone build). Placeholder: the capstone framing (default is learner-of-choice with a fictional fallback), a description of what the capstone produces, a high-level milestone list. The "under construction" piece is the detailed prompts, the fictional client definition, the milestone-by-milestone guidance, the rubric for what "good enough" looks like for a first solo build.

5. For each placeholder, the page is fully styled and follows copy standards. The "under construction" callout is a distinct visual variant of the source-of-truth callout, clearly marked, not embarrassing.

6. Add a row to the curriculum index marking these modules as "Coming soon: working session in progress." Modules render but the content area shows the placeholder layout.

## Quality gates

- All four placeholder modules render cleanly
- Voice matches the rest of the academy
- Learner has a clear next step from each placeholder
- "Under construction" callout is honest, not apologetic, and follows copy standards

## Stop conditions

- Capstone client decision (learner-of-choice with fictional fallback is the default): surface to Olivia for confirmation before stubbing Module 22

## Handoff note template for Phase 7

Standard shape. List what each working session needs to cover so Olivia and Claude can plan the post-launch sessions.

---

# PHASE 8: Interactive components I (high-impact widgets)

**Components in this phase: KickoffPromptGenerator, DecisionLogGenerator, SurfaceSelector, AEOChecker, DODChecklist.**

**One-line summary.** Build the five interactive widgets that carry the most teaching weight. Replace the stubs in the corresponding modules.

## Inputs

- Phase 7 handoff note exists
- Modules that consume these widgets are written: 04, 09, 11, 13

## Goal

Five working interactive components that teach by doing. Each one tested for keyboard accessibility and color contrast before being marked done.

## Tasks

1. Build `KickoffPromptGenerator.tsx` in `src/components/interactive/`. Inputs: business name, business type, primary visitor action, page count target, voice notes, brand notes. Output: a Keiter-format kickoff document the learner can copy. Use real format from the Hickory Hill kickoff as the structural template. Place in Module 09.

2. Build `DecisionLogGenerator.tsx`. Same input pattern, generates a Keiter-format decision log with sections for context, key decisions with reasoning, out of scope, flags. Place in Module 09.

3. Build `SurfaceSelector.tsx`. Branching scenario tool. Learner picks a task ("I'm starting a new build," "I need to talk through methodology," "I have a long file to organize"), the tool walks them through 1 or 2 follow-up questions, lands on a recommendation (Chat, Code, or Cowork) with reasoning. Place in Module 04.

4. Build `AEOChecker.tsx`. Inputs: meta description, page title, business type. Output: a score against the Keiter AEO standards with specific feedback (location signals present, plain language, schema referenced, length under 160 chars, written as an answer). Place in Module 11.

5. Build `DODChecklist.tsx`. Renders the full Definition of Done checklist as an interactive list with persistent state in localStorage keyed by a build name the learner enters. Items can be checked, partially noted, or marked deferred. Print-friendly export. Place in Module 13.

6. For every component: keyboard accessible, focus indicators visible, color contrast checked, screen-reader-friendly labels, mobile responsive at 375px.

## Quality gates

- Each component renders inside its module
- Each component works with keyboard only
- Color contrast passes WCAG 2.2 AA in default, hover, and focus states
- Mobile experience is usable
- Generators produce output that follows copy standards (no em dashes, etc., even when the user input has them, the generator strips or restructures)

## Stop conditions

- A component cannot be made keyboard accessible: stop, rework
- Generator output violates copy standards: stop, fix the generator

## Handoff note template for Phase 8

Standard shape. List the five components built, any deferred features, what learners can now do that they could not before.

---

# PHASE 9: Interactive components II

**Components in this phase: ContextWindowVisualizer, VoiceDiscoveryDeck, CopyRewritePractice, TierSelector, ProposalTemplate, MonthlySnapshotTemplate, BuildTracker, PrinciplesFlashcards, PickTheNextMove.**

**One-line summary.** Build the remaining interactive widgets. Replace the stubs.

## Inputs

- Phase 8 handoff note exists
- Modules that consume these widgets are written: 02, 06, 07 (placeholder), 08 (placeholder), 10, 12, 16, 17, 20, 22 (placeholder)

## Goal

Nine more working interactive components.

## Tasks

1. Build `ContextWindowVisualizer.tsx`. Animated illustration showing a single-context build vs. a multi-phase build. Use a real example: scaffolding a 7-page Astro site. Show context filling up as work progresses, then the phased version where each phase fits in a fresh context with handoffs in between. Place in Module 10.

2. Build `VoiceDiscoveryDeck.tsx`. Clickable card stack of the questions Olivia asks in intake. Each card flips to show why the question matters and what to listen for in the answer. Place in Module 07 (the placeholder still uses this component, the working session adds the deeper content around it).

3. Build `CopyRewritePractice.tsx`. Shows a piece of bad copy that violates one or more rules. Learner picks which rules it violates from a checklist. Then learner rewrites. Tool grades the rewrite against the rules. Place in Module 06.

4. Build `TierSelector.tsx`. Inputs: client business type, page count, e-commerce yes/no, voice support needed yes/no, custom functionality yes/no. Output: tier recommendation with reasoning. Place in Module 16.

5. Build `ProposalTemplate.tsx`. Inputs: client name, build summary, tier, Care Plan choice, deposit amount, balance due, go-live target. Output: one-page proposal in the Keiter format. Place in Module 17.

6. Build `MonthlySnapshotTemplate.tsx`. Inputs: traffic numbers, search terms surfaced, AEO performance signals, top pages, any small task done that month. Output: a plain-language client-facing snapshot. Place in Module 20.

7. Build `BuildTracker.tsx`. A capstone progress logger. Lets the learner mark phase completion, log decisions made, write phase handoffs. Persists in localStorage. Place in Module 22 (the placeholder still uses this component).

8. Build `PrinciplesFlashcards.tsx`. Five cards, one per standing principle. Front: principle in short form. Back: principle in full plus a real example of it in action. Place in Module 02.

9. Build `PickTheNextMove.tsx`. A scenario player. Library of scenarios: client wants something off-tier, scope creep mid-build, voice falling flat, accessibility issue found late, deployment failure mid-launch, contrast check failure on a hero overlay, client wants something that violates a standing principle. Each scenario presents the situation, asks the learner to pick the next move from 3 to 4 options, then explains the right answer. Place in Modules 05 and 08 (both consume different scenario subsets).

10. Same accessibility, contrast, and mobile requirements as Phase 8.

## Quality gates

Same as Phase 8, applied to these nine components.

## Stop conditions

Same as Phase 8.

## Handoff note template for Phase 9

Standard shape. After this phase, every module that has an interactive component is complete except for the four placeholder modules waiting on working sessions.

---

# PHASE 10: Audio companion infrastructure and placeholder narration

**One-line summary.** Build the audio player, generate placeholder narration via ElevenLabs (default) for every module with finalized content, save MP3s and transcripts.

## Inputs

- Phase 9 handoff note exists
- Modules with finalized content: 01, 02, 03, 04, 05, 06, 09, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23 (and the four placeholder modules ship without audio in v1)
- Olivia has confirmed audio narration provider (default ElevenLabs)

## Goal

Every finalized module has an audio companion file and a transcript. The audio player renders on every module page that has a file, and hides cleanly on modules that do not.

## Tasks

1. Surface to Olivia before generating any audio: confirm provider (ElevenLabs is the spec default), confirm voice profile (warm, direct, unpretentious, not corporate, not robotic), confirm any specific pronunciation guidance for "Keiter" and other proper nouns.

2. Build `AudioPlayer.astro`. HTML5 audio with custom UI. Play/pause, scrub, speed control (1x, 1.25x, 1.5x), transcript toggle, current time, total time. Keyboard accessible. Mobile responsive. Color contrast passes on the player.

3. For each finalized module, extract a script from the markdown content. Strip interactive components and code blocks. Replace each with a one-line summary like "interactive component here, use the live site to try it" or "code example follows, see the page for the full block." Strip front matter. Confirm the script follows copy standards.

4. Run each script through the chosen TTS provider with the chosen voice profile. Save output as `public/audio/[module-slug].mp3`. Save the script (cleaned up for human reading) as `src/content/audio-transcripts/[module-slug].md`.

5. Wire each module's front matter to point at the audio file and transcript. Update the module page template to render the audio player when a file exists, and hide the slot cleanly when not.

6. Add a brief note to each module page near the audio player: "Audio narration is currently AI-generated placeholder. Olivia is recording her own version on her schedule." Voice match Keiter standards.

## Quality gates

- Audio player renders on every module with a file, hides cleanly on modules without
- Player is keyboard accessible and screen reader friendly
- Audio files load from the same domain (no external CDN for the v1 placeholder)
- Transcripts are accurate to the audio
- No em dashes in scripts (and TTS does not introduce them via prosody)
- Color contrast on player passes

## Stop conditions

- TTS provider produces audio that does not follow copy standards (corporate tone, AI language, em-dash-like pauses): stop, adjust voice profile or script, regenerate
- Audio file size is large enough to slow page load: revisit format or compression

## Handoff note template for Phase 10

Standard shape. List every module with audio. Note total audio size. Flag any modules where the placeholder narration has odd pronunciation or pacing for Olivia to flag for re-recording priority.

---

# PHASE 11: SEO, AEO, schema, and full DOD pass

**One-line summary.** Add all schema, write meta titles and descriptions for every page, run the full Definition of Done checklist, fix everything that fails.

## Inputs

- Phase 10 handoff note exists
- All modules and pages content-complete or placeholder-complete
- Audio companion infrastructure done

## Goal

The site passes the full Keiter & Co. Definition of Done checklist. Every schema block is in place. Every meta is written. Every accessibility, mobile, contrast, and personality check passes.

## Tasks

1. Add LocalBusiness schema to the base Layout. Pull values from project instructions: business name "Keiter & Co.", URL `https://learn.keiterandco.com`, description (plain-language one-liner about the academy and the business), address (Petersburg, NY area), area served (US, primary upstate NY and western New England), telephone if Olivia provides, email if Olivia provides, opening hours (Mon-Fri 9-4), price range, sameAs links if available.

2. Add Course schema to the curriculum index page. Include name, description, provider (LocalBusiness reference), educational level, learning outcomes (pulled from this spec).

3. Add LearningResource schema to every module page. Include name, description, learningResourceType, educationalLevel, timeRequired (from estimatedMinutes), in language (en-US), about (subject of the module).

4. Add FAQ schema to the About page if FAQ content lands there. If not, skip.

5. Write meta title and description for every page. Use the SEO/AEO anchors from the spec as the starting point. Confirm titles are under 60 chars, descriptions under 160 chars, both written as answers, both follow copy standards.

6. Add OpenGraph tags to every page: og:title, og:description, og:image (default to a branded fallback if no specific image), og:url, og:type.

7. Add Twitter card tags. Same content, twitter format.

8. Surface to Olivia before this step: confirm Google Analytics or swap to Plausible / Netlify Analytics. Apply the chosen approach.

9. Run the full Definition of Done checklist from the spec. Every item. Every page. Document each item's status. Fix every failure.

10. Run a Lighthouse audit. Aim for Performance, Accessibility, Best Practices, SEO scores all 90 or above. Fix what falls short.

11. Run an axe-core accessibility scan. Fix every violation.

12. Verify every interactive component renders, runs, and stays accessible.

13. Confirm the print stylesheet works on a representative module page.

14. Confirm the 404 page renders when hitting a non-existent route.

15. Verify social slots are present in code and hidden cleanly when no URLs are provided.

16. Confirm CTA audit: every page has at least one clear next action.

## Quality gates

- Full DOD checklist passes
- Lighthouse 90+ on Performance, Accessibility, Best Practices, SEO
- axe-core scan clean
- All schema validates against schema.org
- Meta titles and descriptions follow copy standards
- Color contrast passes on every page including the new schema and meta visibility (when checked via tools that render the head)

## Stop conditions

- A DOD item fails after multiple fix attempts: stop, write the issue into BUILDNOTES, surface to Olivia
- Lighthouse score below 90 after optimization: same

## Handoff note template for Phase 11

Standard shape. Include the final DOD checklist with status per item. Include Lighthouse scores. Include any deferred items going into BUILDNOTES.

---

# PHASE 12: Deploy and launch

**One-line summary.** First deploy via Netlify CLI, DNS setup for `learn.keiterandco.com`, SSL verification, final smoke test, BUILDNOTES.md, launch.

## Inputs

- Phase 11 handoff note exists
- DOD checklist passing
- Lighthouse scores 90+
- All content and components in place

## Goal

`learn.keiterandco.com` is live, SSL is valid, the site is accessible from any device, BUILDNOTES.md is written, the curriculum is shareable.

## Tasks

1. Use Netlify CLI to create a new Netlify site linked to the GitHub repo at `KeiterandCo/keiter-and-co-academy`. Configure auto-deploy from main.

2. First production build runs on Netlify. Confirm the build succeeds. Confirm the site renders at the Netlify-provided URL.

3. Set up the custom domain. Add `learn.keiterandco.com` as a custom domain in the Netlify site settings. Add the DNS record at Netlify DNS (the keiterandco.com domain is on Netlify DNS per the Keiter standard) pointing the subdomain to the site.

4. Wait for SSL provisioning. Confirm SSL is active and the site loads at `https://learn.keiterandco.com` without certificate warnings.

5. Final smoke test on the live site:
   - Every page loads
   - Every interactive component works
   - Audio plays
   - Search returns results
   - Mobile rendering at 375px is correct
   - Mark-complete state persists across page loads (localStorage on production domain)
   - 404 page renders for a non-existent route
   - Print stylesheet renders correctly

6. Write `BUILDNOTES.md` at the repo root. Include:
   - What's working (the full module list with status)
   - What's deferred (the four working-session modules, any DOD items pushed to v1.1)
   - Known issues
   - Suggested next priorities (the working sessions, audio re-recording, any v2 items from the spec's Out of scope section)
   - The final localhost URL is no longer relevant; use the live URL
   - The launch handoff note as the closing section

7. Final git commit with message "Launch v1." Push main. Confirm the deploy.

8. Announce internally to Olivia. The academy is live.

## Quality gates

- `https://learn.keiterandco.com` loads cleanly
- SSL valid
- Every page accessible from the live URL
- BUILDNOTES.md present in repo root and complete
- Final commit pushed

## Stop conditions

- DNS or SSL fails to provision after a reasonable wait: stop, debug, surface to Olivia
- Live site shows differences from the local build: stop, debug, redeploy

## Handoff note template for Phase 12

This is the final handoff note. Cover:
- Launch status (live or pending)
- Live URL
- Deferred items entering the post-launch backlog
- Working sessions to schedule
- Anything Olivia should know before sharing the URL externally

---

## Closing note for the kickoff

This kickoff is the build plan for the academy. It does not replace the spec or the decision log; it operationalizes them. If something in this kickoff conflicts with the spec, the spec wins and this kickoff gets corrected. If something in the spec conflicts with the project instructions, the project instructions win and the spec gets corrected.

The methodology calls for handoff notes at the end of every phase. Take them seriously. They are the spine of multi-context builds.

When the build is complete, this kickoff itself becomes a worked example future operators read alongside the Hickory Hill kickoff and the Outpost kickoff.

Push go when ready.
