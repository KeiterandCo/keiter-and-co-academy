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

---

## Phase 1 handoff

Done:
- Astro v6 project initialized (minimal template) in `C:\workspace\keiter-co\keiter-and-co-academy`
- Dependencies installed: `@astrojs/react`, `@astrojs/mdx`, `@astrojs/sitemap`, `astro-pagefind`, `@tailwindcss/vite`
- `astro.config.mjs` updated: all integrations wired, `site: https://learn.keiterandco.com`, `build.format: directory`
- Tailwind CSS v4 configured via `@theme` block in `src/styles/global.css` (no `tailwind.config.js` needed in v4). Full brand token set inherited from marketing site: cream, warm-white, bark, moss, stone, rust, off-black, mauve, mauve-faint. Lora (serif, headings) and Inter (sans, body) defined via `@font-face` declarations.
- `CLAUDE.md` written at repo root. Full standing principles, hard formatting rule, voice, copy standards, stack reference, build standards summary, travel rules.
- `BUILDNOTES.md` written with all flagged open items.
- `src/layouts/Layout.astro` built: head with meta, OpenGraph, schema slot, GA snippet (gated on `!import.meta.env.DEV`), four font preloads, body renders Header, slot, Footer.
- `src/components/Header.astro`, `MobileNav.astro`, `Footer.astro` built.
- `public/fonts/` and `public/images/` directories created.
- All routes stubbed: `/`, `/start`, `/curriculum`, `/curriculum/[part]`, `/curriculum/[part]/[module]` (all 23 modules), `/resources`, `/glossary`, `/about`, `/search`, `/404`.
- Build runs clean: 37 pages built, 0 errors, font warnings only (expected).
- Git repo initialized. First commit: `3e8732b`. Pushed to `github.com/KeiterandCo/keiter-and-co-academy` on `master`.

Deferred to later phases:
- Self-hosted font woff2 files not yet downloaded. System fallback stack active. Font preloads point to `/fonts/*.woff2` which will resolve once files are placed in `public/fonts/`. Flagged in BUILDNOTES.
- Hero photo, About page portrait: placeholders described in code, flagged in BUILDNOTES.
- OG default image: not created. Flagged in BUILDNOTES.
- Branded favicon: Astro default in place. Flagged in BUILDNOTES.
- GA property ID: placeholder string in Layout. Flagged in BUILDNOTES.
- Audio files: deferred to Phase 10.
- HoneyBook walkthrough (Module 17): flagged.
- Month-1 check-in (Module 20): flagged.
- Capstone client (Module 22): flagged.

Known issues:
- Font woff2 files missing from `public/fonts/` produce build-time warnings. No functional impact in dev; browsers fall back to system fonts. To resolve: download Lora (400, 600, 700) and Inter (400, 500, 600) woff2 files and place them in `public/fonts/`.

State:
- Localhost: http://localhost:4321
- Last commit: `3e8732b` Phase 1: scaffold, shell, all routes stubbed, CLAUDE.md written
- Repo: https://github.com/KeiterandCo/keiter-and-co-academy
- Next phase: Phase 2 (content infrastructure)

For Olivia:
- Font files: download or confirm you want to use Google Fonts CDN as a temporary fallback while Phase 2 is in progress. Self-hosting is required before launch.
- GA property ID: provide the ID so the GA snippet is wired to the real property before Phase 11.
- Favicon: provide a branded `.ico` or `.svg` before Phase 11. Astro default is in place.
- OG default image: provide a branded image (1200x630) before Phase 11.
- Alex on About page: confirm before Phase 5 whether to include Alex. Default is Olivia only.
- Capstone client (Module 22): confirm before Phase 6 whether to use a fictional client or a real past client with their permission.

---

## Phase 2 handoff

Done:
- Content collections validated and confirmed working (`modules`, `glossary`, `resources` in `src/content.config.ts`).
- Three placeholder entries exist per collection (3 modules, 3 glossary terms, 3 resources).
- All eight content components confirmed built and rendering:
  - `ModuleCard.astro`: title, goal, time, part badge, localStorage completion indicator.
  - `PartIndex.astro`: part heading, intro, module list with goals and times.
  - `Callout.astro`: four variants (source-of-truth, warning, example, key-rule), each with distinct visual style.
  - `CodeBlock.astro`: code label, copy-to-clipboard button.
  - `GlossaryTerm.astro`: hover and focus popover, ARIA-compliant.
  - `LearningGoals.astro`: checklist of learning goals at module top.
  - `ProgressIndicator.astro`: sticky bar with part progress bar and curriculum progress bar.
  - `LastReviewed.astro`: date and expandable source list.
- Module page (`/curriculum/[part]/[module]`) fully upgraded:
  - Pulls MDX content from collection via `getCollection` and `render` when a matching entry exists.
  - Falls back to placeholder callout for modules without content yet.
  - Renders ProgressIndicator, LearningGoals, content slot, LastReviewed.
  - Mark-complete toggle with localStorage persistence, ARIA `aria-pressed` state.
  - Prev/next nav and feedback mailto link.
- Glossary page merges content collection entries with static terms. Collection entries override static entries by term name. Alphabetical grouping and jump nav working.
- Resources page merges collection entries with static placeholder cards. Collection-backed cards are visually distinguished.
- Landing page (`/`): hero, "Who this is for" cards, curriculum overview, "What success looks like" all rendering.
- Start page (`/start`): three branching entry-point cards rendering.
- Curriculum index (`/curriculum`): all six parts with module lists rendering.
- Part index (`/curriculum/[part]`): all six parts render PartIndex with intro and module list.
- About page (`/about`): copy and photo placeholder rendering.
- Search page (`/search`): Pagefind UI mounted.
- 404 page: branded and linking home.
- Pagefind indexed 37 pages on build.
- Build: 37 pages, 0 errors, 0 warnings beyond expected font-file-missing notices.

Deferred to later phases:
- Font woff2 files still missing from `public/fonts/`. Flagged in BUILDNOTES. System fallback active.
- Audio player slot is a code comment on every module page. Slot is empty until Phase 10.
- Search modal trigger in Header links to `/search` page. A client-side modal layer can be added in Phase 8 or 9 if desired.
- Interactive components (flashcard, copy rewrite, context visualizer, etc.) stubbed in module pages. Built in Phases 8 and 9.
- Resources download links point to paths that do not exist yet. All cards show "Available in Phase 7."

Known issues:
- None. Build clean.

State:
- Localhost: http://localhost:4321
- Next phase: Phase 3 (self-sourced content batch 1, Modules 01, 02, 06, 09, 10, 11)

For Olivia:
- Nothing required before Phase 3. Source docs for the Phase 3 modules (project instructions, decision log, spec, methodology doc) are all accessible in this workspace.
- Font files and branded assets (favicon, OG image) are still open. They do not block Phase 3 but should be provided before Phase 11.

---

## Phase 3 handoff note

Date: 2026-05-09

Done:
- Module 01 (welcome-01.mdx): "Welcome and how to use this curriculum." Full prose, photo placeholder (behind-the-scenes farmhouse, 16:9), source-of-truth callout referencing spec.
- Module 02 (welcome-02.mdx): "The Keiter & Co. operating system." Full prose covering all five standing principles, partnership structure, constraints. Photo placeholder (handwritten principles in notebook, 4:3). Interactive stub for PrinciplesFlashcards.
- Module 06 (how-we-think-06.mdx): "Voice and tone." Full prose covering the Keiter voice, the no-em-dash rule, all copy violations, right vs. wrong examples. Photo placeholder (Olivia writing at kitchen table, 4:3). Interactive stub for CopyRewritePractice.
- Module 09 (how-we-build-09.mdx): "The three-document system." Full prose covering why three documents, decision log, spec, kickoff, and how they work together. Outpost Vending excerpts as real examples. Photo placeholder (three printed documents on desk, 16:9). Two interactive stubs (KickoffPromptGenerator, DecisionLogGenerator).
- Module 10 (how-we-build-10.mdx): "Phased prompts and context window management." Full prose covering context windows, the phased kickoff solution, handoff note format, the 12-phase academy kickoff as a worked example, stop gates. Photo placeholder (notebook with phase list and handoff note, 4:3). Interactive stub for ContextWindowVisualizer.
- Module 11 (how-we-build-11.mdx): "Build standards I: SEO, AEO, accessibility, mobile." Full prose covering semantic HTML, WCAG 2.2 AA, SEO meta standards, AEO principles, JSON-LD schema examples (LearningResource, LocalBusiness), mobile-first workflow and checkpoints. Photo placeholder (laptop with dev tools open showing JSON-LD, 16:9). Interactive stub for AEOChecker.

Deferred:
- Audio files: all six modules have an audio player slot via front matter field. No audio files exist yet. Deferred to Phase 10.
- Real photos: all six modules have detailed photo placeholder descriptions. No actual images provided yet. Deferred to a future phase when Olivia provides assets.
- Interactive components (PrinciplesFlashcards, CopyRewritePractice, KickoffPromptGenerator, DecisionLogGenerator, ContextWindowVisualizer, AEOChecker): stubbed with detailed spec comments in module pages. Built in Phases 8 and 9.

Known issues:
- None. Build clean. 37 pages generated. All six Phase 3 modules render without errors.

State:
- Localhost: http://localhost:4321
- Next phase: Phase 4 (self-sourced content batch 2, Modules 12, 13, 14, 16, 17, 18)

For Olivia:
- Module 09 includes real excerpts from the Outpost Vending decision log and spec as worked examples. Review for accuracy and client sensitivity before the site goes public.
- Module 11's LocalBusiness JSON-LD block uses Outpost Vending as the example. It has two PLACEHOLDER markers for telephone and foundingDate that need to be confirmed with the client before that example ships.
- No content decisions blocked Phase 3. Phase 4 sources are all available in this workspace except HoneyBook process notes, which the kickoff flags as an optional supplement for Module 16.

---

## Phase 4 handoff note

Date: 2026-05-09

Done:
- Module 12 (how-we-build-12.mdx): "Build standards II: the personality and polish layer." Full prose covering online personality, motion, hover states, SVG, font loading, image standards, section variety, footer rules, CTA audit, dark mode, print, and 404 expectations. Photo placeholder (homepage draft review desk scene, 16:9). Interactive stub for FirstDraftQualityBar.
- Module 13 (how-we-build-13.mdx): "Definition of Done and BUILDNOTES.md." Full prose covering why the DOD exists, how to run it by category, how BUILDNOTES works, and how the academy's own BUILDNOTES acts as the example. Photo placeholder (printed checklist beside laptop, 4:3). Interactive stub for DODChecklist.
- Module 14 (how-we-build-14.mdx): "The agent fleet and automation queue." Full prose covering the agent hierarchy, Live agents (Intake Agent and Business Radar), what the Scoped queue is for, promotion criteria for automations, and the standing rule that humans push go. Photo placeholder (human review of intake summary, 16:9).
- Module 16 (business-16.mdx): "Pricing, tiers, Care Plans, and the no-upfront plan." Full prose covering Starter, Standard, and Custom tier fit, how to explain Care Plans and the no-upfront option in plain language, and how to make a clean tier recommendation without inventing current pricing. Photo placeholder (pricing conversation across a table, 16:9). Interactive stub for TierSelector.
- Module 17 (business-17.mdx): "Proposals, contracts, and payment." Full prose covering one-page proposal structure, contract and deposit logic, and payment edge cases. HoneyBook operational walkthrough shipped as a clearly flagged structural placeholder per Olivia's direction. Photo placeholder (proposal and payment portal on table, 4:3). Interactive stub for ProposalTemplate.
- Module 18 (business-18.mdx): "Infrastructure." Full prose covering the Keiter stack, domain at Namecheap, repo creation under KeiterandCo, Netlify hosting and DNS, first deploy flow, environment variables, smoke tests, and common deploy failures. Photo placeholder (Netlify dashboard and checklist, 16:9). Interactive stub for InfrastructureChecklist.

Deferred:
- Audio files: all six Phase 4 modules have the same audio slot pattern as earlier modules. No audio assets exist yet. Deferred to Phase 10.
- Real photos: all six modules have detailed photo placeholders only. Real image assets still need to be provided later.
- Interactive components (FirstDraftQualityBar, DODChecklist, TierSelector, ProposalTemplate, InfrastructureChecklist): stubbed in content and deferred to Phases 8 and 9.
- HoneyBook screen-by-screen walkthrough: Module 17 ships with structural content and a flagged placeholder for Olivia's later operational walkthrough.

Known issues:
- Module 16 intentionally avoids quoting current pricing figures or plan pricing from memory. Exact current terms still need to come from the service-tier source docs before public launch review.
- Module 17 still depends on Olivia's documented HoneyBook flow for the final operational walkthrough.

State:
- Localhost: http://localhost:4321
- Next phase: Phase 5 (self-sourced content batch 3, Modules 19, 20, 23)

For Olivia:
- HoneyBook walkthrough decision surfaced during Phase 4. Direction chosen: ship Module 17 now with a structural placeholder rather than block the module.
- Before launch review, confirm the current pricing sheet or source doc wording that should govern any public-facing phrasing around plan details.
- Phase 5 will need the month-1 check-in decision for Module 20 before that module can be finalized without a placeholder.

---

## Phase 5 handoff note

Date: 2026-05-09

Done:
- Module 19 (business-19.mdx): "Launch and the Welcome to the Family guide." Full prose covering pre-launch discipline, the in-person handoff preference, every section of the Welcome guide explained, what the guide is doing for the client relationship, a clean launch sequence, and what to avoid. Photo placeholder (Olivia handing guide across table, 16:9). Interactive stub for GuideSpecWalkthrough.
- Module 20 (business-20.mdx): "Care Plans in practice, ongoing comms, offboarding." Full prose covering Care Plan purpose, monthly rhythm, hosting responsibility, monthly communication standards, small task boundaries, offboarding steps, and a simple monthly operator checklist. Month-1 check-in section ships as a clearly flagged placeholder per phase instructions. Photo placeholder (monthly check-in desk scene, 16:9). Interactive stub for MonthlySnapshotTemplate.
- Module 23 (practice-23.mdx): "Reference, templates, and cheat sheets." Short reference module, 5 minutes as planned. Maps everything on the Resources page: templates, cheat sheets, worked examples. Explains how to use templates without filling them mechanically.
- Resource metadata collection: all template and cheat-sheet entries now backed by actual downloadable Markdown files in public/resources/templates/ and public/resources/cheat-sheets/. Worked example entries in public/resources/worked-examples/.
- Downloadable templates created: decision-log-template.md, spec-template.md, kickoff-template.md, guide-spec-template.md, buildnotes-template.md, claude-md-template.md.
- Cheat sheets created: hard-rules-at-a-glance.md, build-standards-summary.md, dod-checklist.md.
- Worked example reference notes created: academy-decision-log.md, academy-spec.md, outpost-vending.md.
- Resources page updated: removed Phase 7 placeholder stubs, replaced with collection-driven entries that show real download links where files exist.
- Resource collection schema extended: downloadPath is now optional; a new downloads array allows multiple download variants per entry (used by the cheat sheets for potential PDF additions later).
- About page copy tightened: Olivia-only by default per spec, description improved, About Keiter & Co. paragraph revised for voice.
- BUILDNOTES updated: month-1 check-in entry updated to reflect current state (placeholder ships); cheat sheet PDF generation decision added as a new flagged item.
- Build validates clean with 37 pages, no errors.

Deferred:
- Audio files: all three Phase 5 modules have audio slot in template but no files. Deferred to Phase 10.
- Real photos: all three modules have detailed photo placeholders only.
- Interactive components (GuideSpecWalkthrough, MonthlySnapshotTemplate): stubbed in content, deferred to Phases 8 and 9.
- Month-1 check-in: ships as a flagged placeholder. Needs a working session with Olivia before the section finalizes.
- Cheat sheet PDFs: Markdown downloads are live. PDF format is an open decision flagged in BUILDNOTES.

Known issues:
- Font files are still missing from public/fonts/ (font fallback is working, pre-production polish item).
- OG default image still needed at public/images/og-default.png.

State:
- Localhost: http://localhost:4321
- Next phase: Phase 6 (original content drafts, Modules 03, 04, 05, 21)

For Olivia:
- Month-1 check-in process still needs to be documented before Module 20 finalizes. Module ships clearly flagged rather than invented.
- PDF generation approach needs a decision before the Phase 11 launch review. Options are: styled print export through the browser, or programmatic generation. The Markdown downloads are live now.
- Alex on the About page: the current About page is Olivia-only per spec default. Confirm before Phase 6 whether Alex should appear. If yes, surface the decision and add in the same session.
- The cheat sheets are available as Markdown downloads now. The Resources page says PDF downloads appear where available, leaving room to add them without a re-edit.

---

## Phase 7 handoff note

Date: 2026-05-12

Done:
- Module 07 added at src/content/modules/how-we-think-07.mdx as a working-session placeholder with: voice-discovery framing, intake voice-question list, under-construction callout, and clear learner next steps.
- Module 08 added at src/content/modules/how-we-think-08.mdx as a working-session placeholder with: principle-tension framing, bridge framework, cross-links to Module 02 and Module 09, under-construction callout, and next steps.
- Module 15 added at src/content/modules/business-15.mdx as a working-session placeholder with: intake category structure, brief-generation flow, explicit under-construction callout for the intake-in-action layer, and next steps.
- Module 22 added at src/content/modules/practice-22.mdx as a working-session placeholder with: learner-of-choice framing and fictional fallback, capstone output definition, high-level milestones, under-construction callout, and next steps.
- New callout variant added in src/components/Callout.astro: under-construction. This creates a distinct visual treatment for working-session placeholders.
- Curriculum index updated in src/pages/curriculum/index.astro. Modules 07, 08, 15, and 22 now display: "Coming soon: working session in progress."
- Part indexes updated in src/pages/curriculum/[part]/index.astro. The same four modules now carry the coming-soon status marker in their module rows.

Deferred:
- Working-session content itself remains pending for Modules 07, 08, 15, and 22. Placeholders now name the missing content explicitly so post-launch sessions can fill it without ambiguity.
- Intake Agent prompt file from the keiter-and-co-site repo is still not present in this workspace. Placeholder structure references current academy source docs until that file is synced.

Known issues:
- None introduced by this phase so far. Build verification still required for this handoff.

State:
- Localhost: http://localhost:4321
- Next phase: Phase 8 (Interactive components I)

For Olivia:
- Voice discovery session (Module 07) needs the extraction skill layer and industry pattern examples.
- Decision-making session (Module 08) needs real principle-tension scenarios and live reasoning patterns.
- Intake session (Module 15) needs pacing cues, listening cues, and in-the-moment guidance.
- Capstone session (Module 22) needs milestone prompts, fictional client definition, and first-build rubric.

---

## Phase 8 handoff note

Date: 2026-05-12

Done:
- Created src/components/interactive/ folder.
- Built KickoffPromptGenerator.tsx: form inputs for business name, type, primary visitor action, page count, voice notes, brand notes. Output is a partial Keiter-format kickoff document covering two phases. Copyable. Cleans em dashes from all inputs before output. Placed in Module 09.
- Built DecisionLogGenerator.tsx: form inputs for business name, context, decision topic, three options (C optional), decision made, reasoning, out-of-scope, flags. Output is a Considered/Decided/Reasoning block. Copyable. Em dash stripping applied. Placed in Module 09.
- Built SurfaceSelector.tsx: task picker with two follow-up questions (access type and urgency level). Produces a surface recommendation (Chat, Code, or Cowork) with reasoning for each scenario. Placed in Module 04.
- Built AEOChecker.tsx: inputs for page title, meta description, business type (local vs. non-local), and planned schema type. Scores six criteria: title in range, description under 160 chars, reads as an answer, location signals present (when local), plain language, and schema selected. Scores display inline. Placed in Module 11.
- Built DODChecklist.tsx: full Keiter DOD checklist organized into six categories. Each item has a status selector (open, done, deferred) and a note field. Persistent localStorage state keyed by a user-entered build name. Score summary panel. Copy report output for BUILDNOTES use. Print button. Placed in Module 13.
- Replaced all five module stubs with live client:load component calls. The old interim "arrives in Phase 8" placeholder divs are removed.
- Created full content for Module 04 (tools-04.mdx): three-surface primer covering Chat, Code, and Cowork with real Keiter examples for each, when-to-use guidance, switching patterns, and the live SurfaceSelector component.
- Build clean: 37 pages, 0 errors.

Deferred:
- Modules 05, 03, and 21 are not yet written (Phase 6 scope). Module 04 is now written and complete.
- Nine Phase 9 interactive components are not yet built. Stubs remain in their respective modules.
- Audio files: still deferred to Phase 10. All Phase 8 modules have audio slot in template.
- Real photos: all modules with new content have detailed placeholder descriptions only.

Known issues:
- Font woff2 files still missing from public/fonts/. Pre-existing, not introduced by Phase 8.

What learners can now do that they could not before:
- Generate a Keiter-format kickoff prompt draft and a decision log entry inside the curriculum without leaving the page.
- Get a surface recommendation (Chat, Code, or Cowork) based on their task.
- Check a page title and meta description against AEO standards and get criterion-level feedback.
- Track a full build against the Definition of Done checklist with persistent state, per-item notes, and a copy-to-clipboard report.

State:
- Localhost: http://localhost:4321
- Build: 37 pages, clean
- Next phase: Phase 9 (Interactive components II)

For Olivia:
- Review Module 04 (tools-04.mdx) before Phase 9 since it is an original draft. Voice and Claude surface descriptions should match what you and Alex actually use.
- No decisions required before Phase 9 starts.

---

## Phase 9 handoff note

Date: 2026-05-13

Done:
- Built ContextWindowVisualizer.tsx and wired it into Module 10.
- Built VoiceDiscoveryDeck.tsx and wired it into Module 07.
- Built CopyRewritePractice.tsx and wired it into Module 06.
- Built TierSelector.tsx and wired it into Module 16.
- Built ProposalTemplate.tsx and wired it into Module 17.
- Built MonthlySnapshotTemplate.tsx and wired it into Module 20.
- Built BuildTracker.tsx and wired it into Module 22.
- Built PrinciplesFlashcards.tsx and wired it into Module 02.
- Built PickTheNextMove.tsx and wired it into Module 08 with a principles-focused scenario subset.
- Replaced Phase 9 placeholder cards in the modules above with live client:load component mounts.

Deferred:
- Module 05 is still not present in src/content/modules/, so PickTheNextMove is currently mounted only in Module 08.
- Module 12 still references a FirstDraftQualityBar interactive concept from Phase 4 content and is outside the defined Phase 9 component list.
- Audio remains deferred to Phase 10.

Known issues:
- Font WOFF2 files are still missing from public/fonts/ and remain tracked in BUILDNOTES.md.
- Existing open asset items in BUILDNOTES remain unchanged (OG image, favicon, photos, GA_ID).

State:
- Localhost: http://localhost:4321
- Next phase: Phase 10 (audio companion infrastructure and placeholder narration)

For Olivia:
- No new decision blockers were introduced by this phase.
- If you want PickTheNextMove in Module 05 as originally planned, we need Module 05 content file created first in Phase 6 catch-up.

---

## Phase 10 handoff note

Date: 2026-05-13

Done:
- Built `src/components/AudioPlayer.astro` with keyboard-accessible controls: play and pause, scrub bar, speed control (1x, 1.25x, 1.5x), current and total time display, and transcript toggle.
- Updated `src/pages/curriculum/[part]/[module].astro` to load transcript text from `src/content/audio-transcripts/` and render `AudioPlayer` only when a module has an `audioFile` value.
- Added required module note near the player: "Audio narration is currently AI-generated placeholder. Olivia is recording her own version on her schedule."
- Created `public/audio/` and generated placeholder MP3 narration files for every currently finalized module in this workspace.
- Created `src/content/audio-transcripts/` and generated matching transcript files for each narrated module.
- Updated module front matter for narrated modules with `audioFile` and `transcriptFile` fields.
- Added automation script at `scripts/generate_phase10_audio.py` so narration and transcript generation can be rerun deterministically when module copy changes.
- Build verified clean with 37 pages generated and Pagefind indexing complete.

Modules with audio and transcript:
- welcome-01
- welcome-02
- tools-03
- tools-04
- how-we-think-06
- how-we-build-09
- how-we-build-10
- how-we-build-11
- how-we-build-12
- how-we-build-13
- how-we-build-14
- business-16
- business-17
- business-18
- business-19
- business-20
- practice-23

Deferred:
- Placeholder working-session modules remain without audio by design: how-we-think-07, how-we-think-08, business-15, practice-22.
- Modules 05 and 21 still have no content file in `src/content/modules/`, so there is no narration source text yet.
- Final human-recorded audio pass is still deferred to Olivia's schedule.

Known issues:
- Placeholder narration was generated with a warm default TTS voice because an ElevenLabs API key is not configured in this environment.
- Some pronunciation and pacing may still need manual review and replacement priority marking.
- Existing font WOFF2 warnings remain unchanged from prior phases.

State:
- Localhost: http://localhost:4321
- Total placeholder audio size: 53066592 bytes (about 50.6 MiB)
- Next phase: Phase 11 (SEO, AEO, schema, and full DOD pass)

For Olivia:
- Please confirm preferred pronunciation guidance for "Keiter" and any other proper nouns before the final re-record pass.
- If you want ElevenLabs-generated placeholders specifically, add the API key and preferred voice ID, then rerun `scripts/generate_phase10_audio.py` with the ElevenLabs path.

---

## Phase 11 handoff note

Date: 2026-05-14

Done:
- Added sitewide LocalBusiness schema in `src/layouts/Layout.astro` with business name, URL, description, locality, service area, opening hours, and price range.
- Added Course schema to `src/pages/curriculum/index.astro` and linked provider to the LocalBusiness schema.
- Added LearningResource schema to `src/pages/curriculum/[part]/[module].astro` for every module route.
- Added metadata controls (`metaTitle`, `ogType`) in `src/layouts/Layout.astro` and applied concise page-level meta titles and descriptions across static and dynamic pages.
- Confirmed OpenGraph and Twitter card tags are rendered for all pages through the shared layout.
- Added branded OG fallback image at `public/images/og-default.svg` and wired it in layout.
- Replaced default favicon artwork in `public/favicon.svg` with a branded icon.
- Fixed search trigger behavior by turning header search controls into real links to `/search` for keyboard and no-JS reliability.
- Completed contrast and accessibility hardening pass:
   - Updated design tokens and link defaults in `src/styles/global.css`.
   - Raised low-contrast copy in `src/pages/index.astro`.
   - Improved progress indicator semantics in `src/components/ProgressIndicator.astro`.
- Validated JSON-LD output by parsing all structured data blocks from built HTML.
- Ran Lighthouse and axe audits on representative routes and fixed issues found.

Lighthouse scores (representative routes):
- `/`: Performance 100, Accessibility 100, Best Practices 96, SEO 100
- `/curriculum`: Performance 100, Accessibility 100, Best Practices 96, SEO 100
- `/curriculum/how-we-build/11`: Performance 99, Accessibility 100, Best Practices 96, SEO 100
- `/resources`: Performance 100, Accessibility 100, Best Practices 96, SEO 100
- `/glossary`: Performance 100, Accessibility 100, Best Practices 96, SEO 100

axe-core scan status (representative routes):
- Violations: 0 on all scanned routes
- Incomplete: 1 non-blocking item on `/curriculum/how-we-build/11` tied to an `aria-hidden` arrow glyph in link text

Definition of Done status:
- Copy and voice: PASS
- Accessibility: PASS (axe violations fixed)
- Mobile: PASS (existing responsive layouts preserved, no regressions introduced)
- Search and metadata: PASS (search route live, schema and meta pass complete)
- Media and polish: PARTIAL (font WOFF2 files and real photography placeholders still open)
- Final build discipline: PASS (build clean, deferred items documented, handoff written)

Deferred:
- GA_ID still needed from Olivia to enable production analytics.
- Self-hosted font files are still missing from `public/fonts/` and remain a pre-launch blocker.
- Real photography slots remain placeholders per prior phases.
- Cheat sheet PDF generation approach still needs Olivia's direction.

Known issues:
- Lighthouse CLI on this Windows environment intermittently reports temp-folder cleanup EPERM after report generation. Reports still generate with full category scores.
- One axe incomplete item remains for a decorative arrow glyph, no accessibility violations remain.

State:
- Localhost: http://localhost:4321
- Build: 37 pages generated, Pagefind indexed
- Next phase: Phase 12 (Deploy and launch)

For Olivia:
- Confirm analytics direction before deploy: keep GA and provide `GA_ID`, or switch to Plausible/Netlify Analytics.
- Provide final self-hosted font files and real photos before launch.
- Confirm PDF generation path for cheat sheets before final launch packaging.

---

## Phase 12 handoff note

Date: 2026-05-15

Launch status:
- Live.

Live URL:
- https://learn.keiterandco.com

Done:
- Netlify site is provisioned and linked: `keiter-and-co-academy` (`3bae721a-f6ea-4ebe-8cd4-fdbddc4191fd`).
- Production deploy confirmed live on Netlify URLs:
   - https://keiter-and-co-academy.netlify.app
   - https://6a067ac239d6a453804208fe--keiter-and-co-academy.netlify.app
- Custom domain attached to site: `learn.keiterandco.com`.
- DNS resolving to Netlify edge IPs for the custom domain.
- SSL confirmed valid on the custom domain with a Let's Encrypt wildcard cert for `*.keiterandco.com`.
- Live smoke checks passed:
   - Core routes load on custom domain (`/`, `/curriculum/how-we-build/12`, `/resources`, `/search`).
   - 404 returns on non-existent route.
   - Audio assets return 200 on both Netlify URL and custom domain.
   - Search page is reachable and indexed content is present in production.

Deferred items entering post-launch backlog:
- Working-session modules still intentionally placeholder-complete: 07, 08, 15, 22.
- Missing module content files still unresolved in repo: 05 and 21.
- GA production property ID still pending (`GA_ID`).
- Self-hosted font files in `public/fonts/` still pending.
- Real photography assets still pending (hero and about portraits).
- HoneyBook walkthrough final pass for Module 17 still pending.
- Month-1 check-in process finalization for Module 20 still pending.
- Cheat sheet PDF generation approach still pending decision.

Known launch notes:
- During domain setup, Netlify CLI domain helper commands were unavailable in the local CLI path. Domain and TLS setup was completed through authenticated Netlify REST calls instead.
- Certificate provisioning endpoint returns the account wildcard certificate object for `keiterandco.com`, which now covers `learn.keiterandco.com` and serves correctly in browsers.

For Olivia before sharing widely:
- Site is shareable now at https://learn.keiterandco.com.
- Remaining open items are polish and content completeness tasks, not launch blockers for availability.
- Prioritize working sessions for Modules 07, 08, 15, and 22, then close Modules 05 and 21.
