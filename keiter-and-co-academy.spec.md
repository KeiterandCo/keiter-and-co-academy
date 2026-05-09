# Keiter & Co. Academy: Build Spec

Project: keiter-and-co-academy
Last updated: 2026-05-09
Status: In progress
Companion docs: `keiter-and-co-academy.decision-log.md`

---

## Purpose

The Keiter & Co. Academy is a public, self-paced curriculum that teaches a new operator how to run a Keiter & Co. build from zero. Starting point is no AI exposure. Ending point is operating a complete client engagement using the Keiter methodology: intake, three-document workflow, build, launch, Welcome to the Family guide, and ongoing Care Plan support.

The academy site doubles as Olivia's personal reference and as a shareable artifact for future hires, contractors, and the public.

---

## Audience

**Primary.** Any future Keiter & Co. operator. Hires, contractors, anyone Olivia decides to onboard into the methodology.

**Secondary.** Self-learners who find the published version. Small business owners curious about the build process. People learning to work with AI for real work. Other solo builders who want a sober operating system.

**Not the audience.** Engineers looking for code tutorials. Agency operators looking for templates to repackage. Anyone trying to extract the methodology to compete.

---

## Success criteria

A learner who completes the curriculum can:

- Explain what AI is, what Claude is, and choose between Claude Chat, Claude Code, and Cowork mode for a given task.
- Hold the five standing principles and the rules that travel with every build, without prompting.
- Run a Keiter-format intake conversation and produce a brief.
- Write a decision log, a spec, and a multi-phase kickoff for a small client site.
- Operate a build session inside the methodology: phase-by-phase, with handoff notes, against the full Definition of Done checklist.
- Build to WCAG 2.2 AA, SEO, AEO, and the online personality standards.
- Hand off a finished site with a Welcome to the Family guide.
- Support a Care Plan client month over month.

A learner who completes only Parts 1 through 3 understands the philosophy and voice. A learner who completes through Part 4 can build. A learner who completes through Part 6 can run a Keiter & Co. engagement end to end.

---

## Core principles for the academy itself

The five Keiter & Co. standing principles apply to this build. Two additional principles are specific to the academy.

**Source-of-truth gravity.** Every module references the canonical doc (project instructions, methodology, CLAUDE.md) and points back to it. Modules teach how to read, apply, and operate from those docs. They do not duplicate them. When the source updates, the module's "Last reviewed" date catches the drift.

**Built using what it teaches.** The academy follows the Keiter methodology in its own build. Three documents, multi-phase kickoff, full Definition of Done checklist, WCAG 2.2 AA, SEO and AEO, online personality. The academy site is itself a worked example future operators can read alongside the Outpost Vending build.

---

## Voice and tone

The academy speaks in the Keiter & Co. voice. Warm, direct, unpretentious. Write like you are talking to someone you trust at the auto shop or the farmers market. Real, not casual to the point of sloppy.

The tone is slightly more pedagogical than a client site because the job is to teach, but it never tips into lecture or condescension. The reader is a smart adult who is new to this specific thing, not new to thinking.

Sign off as Olivia and Alex Keiter, or Keiter & Co., depending on context. Women first, always.

---

## Copy standards

These rules apply to every word on the academy site. They are not implied. They are named.

- No em dashes, ever. Comma, period, or restructure.
- No contrast framing ("this isn't X, it's Y").
- No engagement bait or false suspense.
- No therapy speak.
- No AI language. If it would not come out of your mouth in a real conversation, rewrite it.
- No "Best," sign-offs. Use "Best wishes" or "Thank you."
- No corporate or agency tone.
- US English spelling and conventions.
- Women first in references and sign-offs.
- Voice matches Keiter & Co., not a generic small business template.
- Never invent information. If a detail is unclear, flag it. Detailed placeholder is acceptable. Making something up is not.
- Plain language for technical concepts. The reader may have zero exposure to AI when they start. Define every term the first time it appears, and link it to the glossary.

---

## Information architecture

```
/
├── /                            (landing)
├── /start                       (start-here flow, decision tree for where to begin)
├── /curriculum                  (full module catalog)
├── /curriculum/welcome          (Part 1 index)
├── /curriculum/welcome/01       (module pages)
├── /curriculum/welcome/02
├── /curriculum/tools            (Part 2 index)
├── /curriculum/tools/03
├── ... (repeat per part)
├── /curriculum/practice/22
├── /resources                   (downloads, templates, cheat sheets)
├── /glossary                    (alphabetical terms with plain-language definitions)
├── /about                       (about the curriculum, about Keiter & Co.)
├── /search                      (Pagefind search results page)
└── /404                         (branded 404)
```

Top-level navigation: Curriculum, Resources, Glossary, About. Mobile nav is a hamburger menu with the same items, plus a search trigger.

The "Start" page is a short branching tool: complete beginner, some AI exposure, experienced builder. Each branch lands the learner on the right entry module.

Module pages link forward to the next module, back to the previous, and up to the part index. Sticky progress indicator shows where the learner is in the part and in the curriculum overall.

---

## Module catalog

Twenty-three modules organized into six parts. Module count is the working figure. Consolidation or expansion happens during the kickoff phases if a module either bloats past one focused reading session or shrinks below a meaningful learning unit.

Each module entry below names the title, the learning goal, the source-of-truth doc, the interactive component (where applicable), and any open content gaps.

### Part 1: Welcome to Keiter & Co.

**Module 01: Welcome and how to use this curriculum**
Goal: Reader understands what the academy is, who it is for, how to navigate it, and how long it takes. Source: this spec, decision log, project instructions. No interactive component. Estimated read: 8 minutes.

**Module 02: The Keiter & Co. operating system**
Goal: Reader can recite the five standing principles, name the partnership structure, and explain the constraints in plain language. Source: project instructions (Standing principles, Build roles, About Olivia and Alex, Constraints sections). Interactive component: standing principles flashcards. Estimated read: 15 minutes.

### Part 2: The tools

**Module 03: AI 101**
Goal: Reader can define AI, LLM, and Claude in plain language, and explain why Keiter & Co. uses Claude specifically. Source: original content, plus links to Anthropic's public docs. No interactive component. Estimated read: 12 minutes. Content gap: original writeup needed.

**Module 04: The three Claude surfaces**
Goal: Reader can choose between Claude Chat, Claude Code, and Cowork mode for a given task and explain why. Source: original content (this is one of the documented gaps from the curriculum scrub). Interactive component: surface selector branching scenario. Estimated read: 18 minutes plus interactive. Content gap: original writeup needed, with input from Olivia on her actual decision pattern.

**Module 05: Working with Claude as your build partner**
Goal: Reader can run a productive Claude session: confirming scope before deliverables, automating instead of clicking, ending phases with handoff notes, recovering from a context window crash. Source: project instructions ("How Claude works with Olivia" section), original content. Interactive component: "pick the next move" scenarios for stuck-builder situations. Estimated read: 20 minutes plus interactive.

### Part 3: How we think

**Module 06: Voice and tone**
Goal: Reader can identify when copy violates the Keiter rules and rewrite it. Reader internalizes the hard formatting rule (no em dashes) and the rules that travel with every build. Source: project instructions (Voice and tone, Hard formatting rule, Rules that travel with every build sections). Interactive component: copy-rewrite practice with grading against the rules. Estimated read: 15 minutes plus interactive.

**Module 07: Voice discovery**
Goal: Reader can run a voice discovery conversation with a client and extract the language patterns, values, and tone the client actually uses. Source: project instructions and methodology, plus original content from a working session with Olivia. Interactive component: voice discovery prompt deck (clickable card stack of the questions Olivia asks in intake). Estimated read: 25 minutes plus interactive. Content gap: working session with Olivia required to capture the actual extraction skill, not just the questions.

**Module 08: Decision-making and the standing principles in action**
Goal: Reader can hold the standing principles when a client asks for something that violates them, and can navigate ambiguous build decisions using a documented framework. Source: project instructions (Standing principles, Constraints), original content. Interactive component: "pick the next move" scenarios for principle-tension situations (client wants a hard upsell on the homepage, client requests dark patterns on a CTA, client's voice is at odds with their target audience). Estimated read: 20 minutes plus interactive. Content gap: working session with Olivia required.

### Part 4: How we build

**Module 09: The three-document system**
Goal: Reader can explain why Keiter & Co. produces a decision log, a spec, and a kickoff before any code, and can write each one for a small build. Source: project instructions (Build workflow), methodology, the academy's own decision log and spec as worked examples, the Outpost decision log and spec. Interactive component: kickoff prompt generator (fill-in-the-blank for a hypothetical business, output is a Keiter-format kickoff). Decision log generator follows the same pattern. Estimated read: 30 minutes plus interactive.

**Module 10: Phased prompts and context window management**
Goal: Reader can split a build into phases, write phase prompts that survive context window limits, and end every phase with a handoff note. Source: project instructions (Build workflow), methodology, original content. Interactive component: context window visualizer (animated illustration showing why phased kickoffs exist using a real example). Estimated read: 22 minutes plus interactive.

**Module 11: Build standards I (SEO, AEO, accessibility, mobile)**
Goal: Reader can implement WCAG 2.2 AA, semantic HTML, schema markup, AEO content principles, and mobile-first layout. Source: project instructions (SEO and AEO as build standards, Accessibility as a build standard, Mobile as a build standard). Interactive component: AEO completeness checker (paste a meta description, get scored). Estimated read: 35 minutes plus interactive.

**Module 12: Build standards II (the personality and polish layer)**
Goal: Reader can build a site with a real personality. Online personality (animations, hover states, SVG), font loading, image standards, color contrast, sections, hero requirements, footer rules, dark mode, print, 404, social, CTA. Source: project instructions (Online personality, Font loading, Image standards, Footer, Section and layout, Color contrast, Dark mode, Print, 404, Social, CTA audit sections). Interactive component: a "first draft quality bar" tool that checks a hypothetical page description against the personality requirements. Estimated read: 40 minutes plus interactive.

**Module 13: Definition of Done and BUILDNOTES.md**
Goal: Reader can run the full DOD checklist against their own build and document remaining items in BUILDNOTES.md. Source: project instructions (Build workflow, Definition of done section). Interactive component: live DOD checklist tool the learner can use against their own work. Estimated read: 18 minutes plus interactive.

**Module 14: The agent fleet and automation queue**
Goal: Reader understands what each Live agent does (Intake Agent, Business Radar), what's in the Scoped queue, and how new automation gets added. Source: project instructions (Automation section). No interactive component. Estimated read: 18 minutes.

### Part 5: How we run the business

**Module 15: Intake**
Goal: Reader can run a full Keiter intake conversation, produce a build brief, and recognize when intake notes are too vague to proceed. Source: project instructions (Build roles, AI Intake Agent), Intake Agent prompt file in the keiter-and-co-site repo. Interactive component: a "run the intake" simulation where the learner picks questions and gets feedback on what they missed. Estimated read: 28 minutes plus interactive. Content gap: working session with Olivia for the intake-in-action piece.

**Module 16: Pricing, tiers, Care Plans, and the no-upfront plan**
Goal: Reader can explain every tier, every Care Plan, the no-upfront option, and the grandfather clause to a prospect in plain language. Reader can scope a project to the right tier. Source: project instructions (Service tiers, Care Plans, No-upfront payment plan sections). Interactive component: tier selector tool that recommends a tier based on a hypothetical client's needs. Estimated read: 22 minutes plus interactive.

**Module 17: Proposals, contracts, and payment**
Goal: Reader can produce a one-page proposal in the Keiter format, run a HoneyBook contract and deposit flow, and handle payment edge cases (late payments, refunds, scope changes). Source: project instructions (Service tiers, payment-related content), HoneyBook process notes (content gap, see flag). Interactive component: proposal template with fill-in-the-blank guidance. Estimated read: 25 minutes plus interactive. Content gap: HoneyBook operational walkthrough needs documenting.

**Module 18: Infrastructure**
Goal: Reader can stand up a client site infrastructure: domain registration at Namecheap, Netlify hosting and DNS, GitHub repo creation, first deploy. Reader can also troubleshoot the most common deploy failures. Source: project instructions (Infrastructure, Build workflow Operational conventions). Interactive component: a step-by-step infrastructure checklist tool. Estimated read: 30 minutes plus interactive.

**Module 19: Launch and the Welcome to the Family guide**
Goal: Reader can take a build from "ready to ship" to "client is live and has their guide in hand." Reader can produce a Welcome to the Family guide spec and operate the guide template. Source: project instructions (Welcome to the Family guide section), `guide-spec-template.md`, `guide-addendum.md`. Interactive component: guide spec walkthrough (interactive form that produces a draft guide spec). Estimated read: 25 minutes plus interactive.

**Module 20: Care Plans in practice, ongoing comms, offboarding**
Goal: Reader can run a Care Plan client month over month: monthly analytics snapshot, monthly small task, review monitoring, scope-change conversations, and clean offboarding when a relationship ends. Source: project instructions (Care Plans, Hosting model, Constraints around offboarding). Interactive component: monthly snapshot template with plain-language guidance. Estimated read: 25 minutes plus interactive. Content gap: month-1 check-in process not currently documented.

### Part 6: Practice

**Module 21: The Outpost Vending walkthrough**
Goal: Reader walks through a real Keiter & Co. build from intake notes through launched site, with the actual decision log, spec, and final code as reference material. Source: `the-outpost-vending-decision-log.md`, `the-outpost-vending-spec.md`, the live site, plus narration that ties the artifacts to the methodology. Interactive component: side-by-side reader showing the spec section and the rendered page output for each section. Estimated read: 45 minutes.

**Module 22: Capstone build**
Goal: Reader runs a complete build solo: intake, three documents, multi-phase kickoff, build, launch checklist. Output is a small site they can show in a portfolio or use as their own first reference. Source: original content (the capstone framing, prompts, milestones). Interactive component: a build tracker the learner uses to log their progress through the capstone. Estimated read: variable, capstone takes hours not minutes. Open question: capstone client (real local business with permission, fictional, or learner choice). See open questions section.

**Module 23: Reference, templates, and cheat sheets**
Goal: Reader has the templates, checklists, and cheat sheets they need to operate without re-reading the curriculum. Source: project instructions, methodology, CLAUDE.md, the academy's own templates. No interactive component (this module is the resources page index). Estimated read: 5 minutes to skim, ongoing reference.

---

## Page templates

**Landing page (`/`).** Hero section with headline, subheadline, primary CTA ("Start the curriculum"), warm intro paragraph, and a hero image (placeholder description: a wide shot of Olivia at her desk in the farmhouse, soft natural light, real and unposed, work in progress on the screen, kids' artwork on the wall behind her, 16:9 aspect ratio). Below the hero, a "Who this is for" section with three short cards. Below that, the curriculum table of contents organized by Part. Below that, a "What success looks like" section. Footer is minimal.

**Start page (`/start`).** Branching decision tool. Three cards: complete beginner, some AI exposure, experienced builder. Each card explains what that branch is and links to the right starting module.

**Curriculum index (`/curriculum`).** Full module catalog. Each module shown as a card with title, part, learning goal, estimated time, and a "Mark as started" or "Mark as complete" toggle (state stored in localStorage). Filterable by part.

**Part index (`/curriculum/[part]`).** Part name, intro paragraph (what this part teaches and why it matters), list of modules in the part with descriptions, total estimated time. Mobile-friendly card layout.

**Module page (`/curriculum/[part]/[module]`).** Module number and title at the top. Quick metadata strip: part, estimated read time, last reviewed date. Learning goals as a short list. Prerequisites if any. Audio companion player at the top for learners who prefer audio. Then the actual content (mix of prose, callouts, code examples, exercises, interactive components). Source-of-truth callouts inline. Glossary terms get popovers on hover. At the bottom: a "Mark complete" toggle, an "On to the next" CTA, a "Back to part index" link, and a "Found something off" link to a feedback form.

**Resources page (`/resources`).** Downloadable templates: blank decision log, blank spec, blank kickoff, blank Welcome guide spec, BUILDNOTES template, CLAUDE.md template. Cheat sheets: hard rules at a glance, build standards summary, DOD checklist. Worked examples: Outpost docs as reference, the academy's own decision log and spec as a second worked example.

**Glossary page (`/glossary`).** Alphabetical terms with plain-language definitions. Linked from inline mentions throughout the curriculum. Search-friendly.

**About page (`/about`).** About Keiter & Co. (pulled from project instructions, abbreviated). About the curriculum (this spec's Purpose section, abbreviated). About Olivia (and Alex if she opts in). Last reviewed dates listed.

**Search page (`/search`).** Pagefind-powered search across the full curriculum, glossary, and resources.

**404 page (`/404`).** Branded, friendly, navigation back. Voice matches the curriculum.

---

## Component inventory

**Layout components.**
- `Header.astro` (logo, nav, search trigger, mobile hamburger)
- `Footer.astro` (minimal: business name, key links, Keiter & Co. credit, copyright, social slots hidden if no URLs provided)
- `Layout.astro` (base layout with head, schema, GA, font preload)
- `MobileNav.astro` (hamburger overlay)

**Content components.**
- `ModuleCard.astro`
- `PartIndex.astro`
- `Callout.astro` (variants: source-of-truth, warning, example, key-rule)
- `CodeBlock.astro` (Shiki-powered syntax highlighting)
- `GlossaryTerm.astro` (inline term with hover popover)
- `LearningGoals.astro`
- `ProgressIndicator.astro` (sticky in-page progress for the current part)
- `LastReviewed.astro`

**Interactive components (custom widgets, all reactive).**
- `KickoffPromptGenerator.tsx` (or `.astro` with islands, fill-in-the-blank to Keiter-format kickoff)
- `DecisionLogGenerator.tsx` (same pattern)
- `SurfaceSelector.tsx` (branching scenario)
- `ContextWindowVisualizer.tsx` (animated illustration)
- `VoiceDiscoveryDeck.tsx` (clickable card stack)
- `AEOChecker.tsx` (input field, scoring against schema requirements)
- `DODChecklist.tsx` (interactive checklist with localStorage persistence per learner build)
- `PickTheNextMove.tsx` (scenario player)
- `CopyRewritePractice.tsx` (input, grading)
- `TierSelector.tsx`
- `ProposalTemplate.tsx`
- `MonthlySnapshotTemplate.tsx`
- `BuildTracker.tsx` (capstone progress logger)
- `PrinciplesFlashcards.tsx`

**Audio.**
- `AudioPlayer.astro` (HTML5 audio with custom UI: play/pause, scrub, speed, transcript toggle)

**Utility.**
- `MarkComplete.tsx` (localStorage-backed completion toggle)
- `SearchModal.tsx` (Pagefind UI)
- `FeedbackLink.astro` (mailto or simple form)

---

## Visual direction

The academy inherits the keiterandco.com brand. Colors, typography, and core layout patterns match. Anything specific to the academy is additive, not replacing.

**To resolve in kickoff phase 1.** The current keiterandco.com brand colors, type scale, and any existing component patterns. The kickoff phase pulls these from the live site (or from the marketing site repo at `C:\workspace\keiter-co\keiter-and-co-site`) and confirms before applying.

**Specific to the academy.**
- Module pages have a clear reading-width constraint (about 70 to 75 characters per line) to support long-form content.
- Progress indicators are warm and unobtrusive. A thin bar at the top of the page or a sidebar dot pattern, not a percentage gauge that screams "you have 73% to go."
- Interactive widgets sit inside a visually distinct container (a soft border, slight background tint, "Try it" label) so they are obviously interactive without yelling.
- The "Source of truth" callout has its own clear style so a learner can spot canonical references from teaching content at a glance.
- Audio player is a horizontal strip at the top of each module, collapsible.
- Animations are present but not noisy. Scroll-triggered fade-ins on key sections, subtle hover lifts on cards, and one or two SVG personality moments per module index page.

**Imagery.** At minimum, the site uses the photo slots described in the project instructions (4 to 5 photo slots per landed page). Detailed placeholder descriptions live in this spec for every photo slot until real photography arrives. No generic stock.

Specific photo slots needed:

- Landing hero (described above): wide shot of Olivia at her desk, real and unposed, 16:9.
- About-Olivia photo: portrait, warm lighting, 1:1.
- About-Alex photo (optional, opt-in): portrait, warm lighting, 1:1.
- "Behind the scenes" photo for the welcome module: Olivia at her desk with the chickens visible through a window or a kid in the background, shows the real life around the work, 3:2.
- Outpost walkthrough photos: three to five real screenshots from the live Outpost site at key milestones. 16:9 for full-page, 4:3 for component close-ups.
- Capstone module: a photo of a finished Keiter & Co. build's Welcome guide handed over in person if Olivia has one, or a placeholder description for a future photo.

---

## Audio companion

Every module has a companion audio track. v1 ships with AI text-to-speech narration that Olivia can replace with her own recordings on her schedule. No module is gated on the audio existing; the player simply hides if there is no audio file.

**Format.** MP3, hosted in `/public/audio/[module-slug].mp3`. Transcript file alongside each audio at `/src/content/audio-transcripts/[module-slug].md`. Transcript is shown when the learner clicks "Show transcript" on the player.

**Provider for placeholder narration.** Open question, see flags. Default proposal: ElevenLabs with a voice profile that approximates the warm, direct, unpretentious Keiter tone. Olivia can override to OpenAI TTS, Cartesia, or another option in the kickoff phase.

**Voice match.** Placeholder narration must follow the same copy standards as written content. No em dashes (the script has none, but if the TTS engine adds prosodic pauses that sound like em dashes, restructure the script). No AI language. Plain words.

**Production flow.** Module written, reviewed, finalized. Script extracted from the module markdown by stripping interactive components and code blocks, replacing them with a one-line summary like "interactive component here, use the live site to try it." Script run through TTS. Output saved to `/public/audio`. Transcript saved alongside.

---

## Tech stack

Confirming and extending the Keiter & Co. defaults.

- **Framework.** Astro (latest stable). Content as markdown and MDX in `src/content/`. Components in `.astro` and `.tsx` (React islands for the interactive widgets).
- **Styling.** Tailwind CSS plus a small custom theme matching keiterandco.com.
- **Search.** Pagefind, integrated at build time.
- **Image optimization.** Astro's built-in `<Image />` component.
- **Analytics.** Google Analytics by default (per Keiter & Co. standard for client builds), with an option to swap for Plausible or Netlify Analytics if Olivia prefers for an internal property.
- **Hosting.** Netlify free tier via GitHub.
- **DNS.** Netlify DNS, subdomain `learn.keiterandco.com`, SSL handled by Netlify.
- **Build command.** `npx astro build`. Publish directory: `dist`. NODE_VERSION: 18.
- **Repo.** GitHub org `KeiterandCo`, repo `keiter-and-co-academy`.
- **Local dev.** `npm run dev`, default localhost at `http://localhost:4321`. Localhost URL included in every build session response.

---

## Build standards (Definition of Done applied)

This build follows every Keiter & Co. build standard. The Definition of Done checklist below is the full master list with academy-specific notes. Every item must pass before launch.

**Copy standards.**
- [ ] No em dashes anywhere in the live site or in the markdown source
- [ ] No contrast framing
- [ ] No engagement bait or false suspense
- [ ] No therapy speak
- [ ] No AI language
- [ ] No "Best," sign-offs anywhere
- [ ] Voice matches Keiter & Co.
- [ ] US English spelling throughout
- [ ] Women first in references and sign-offs
- [ ] No invented information; every detail traces to a source

**Accessibility (WCAG 2.2 AA).**
- [ ] Semantic HTML throughout
- [ ] All images have descriptive alt text; decorative images marked
- [ ] Color contrast checked on every text-on-background combination including hero overlays, cards, nav, and audio player
- [ ] Keyboard navigation works for every interactive widget
- [ ] Focus indicators visible and high-contrast
- [ ] Form fields (search, feedback) have labels and error messages
- [ ] Target sizes 24x24 minimum (44x44 for mobile nav)
- [ ] Resizable text up to 200% without layout breaks
- [ ] ARIA used correctly and sparingly

**Mobile.**
- [ ] Mobile-first build, previewed at 375px, 768px, 1280px
- [ ] Hamburger menu visible and recognizable on mobile
- [ ] Mobile nav contrast checked
- [ ] Touch targets meet 44x44 minimum
- [ ] Responsive typography via clamp() or responsive utilities

**Online personality.**
- [ ] Scroll-triggered entrance animations on key sections
- [ ] Hover states on all interactive elements
- [ ] At least one SVG animation appropriate to the academy (a quill drawing, a stack of pages flipping, a checklist that ticks itself off, something that fits)
- [ ] Cards, tags, badges where content supports them
- [ ] Section variety: no two consecutive sections with the same background treatment

**Font loading.**
- [ ] Primary fonts preloaded in head
- [ ] `font-display: swap` on all @font-face
- [ ] Well-matched system fallback stack

**Image standards.**
- [ ] Every photo slot has a detailed description and aspect ratio
- [ ] At least 4 to 5 photo slots present
- [ ] No generic stock without description

**Section and layout standards.**
- [ ] Minimum four sections per page (academy module pages have many more)
- [ ] Hero on landing page has headline, subheadline, CTA, non-flat background
- [ ] Tailwind default spacing scale used throughout

**Color contrast.** Build-time check on:
- [ ] Body text on page background
- [ ] Heading text on any background
- [ ] Nav text on nav background, desktop and mobile
- [ ] Button text in default, hover, focus states
- [ ] Card text on card background
- [ ] Text rendered over images or gradients

**Dark mode.** Off by default. Not specced in v1. Do not add silently.

**Print stylesheet.**
- [ ] Hide nav, hide footer flourishes
- [ ] Body text black on white
- [ ] Phone numbers and addresses visible (for contact page if added)

**404.**
- [ ] Branded, voice matches academy, link home, basic site nav

**Social link slots.**
- [ ] Slots present in code, hidden if no URLs provided

**CTA audit.**
- [ ] Every page has at least one clear next action

**SEO and AEO.**
- [ ] Meta titles and descriptions written as answers, not keyword strings
- [ ] OpenGraph tags on every page
- [ ] LocalBusiness schema on the site (representing Keiter & Co.)
- [ ] Course schema on the curriculum index
- [ ] LearningResource schema on each module page
- [ ] FAQ schema on the About page if FAQ content lands there
- [ ] Plain-language service descriptions
- [ ] Strong location signals (Petersburg NY, Capital Region, rural upstate NY)
- [ ] Clean semantic markup AI parsers can cite

**BUILDNOTES.md.**
- [ ] Written at the end of the final phase
- [ ] Documents working state, deferred items, known issues, suggested next priorities

**CLAUDE.md.**
- [ ] Present in repo root before any build session begins

---

## SEO and AEO content anchors per page

**Landing.** Title: "Keiter & Co. Academy: Operator training for the way we build" or similar. Meta description (under 160 chars, written as an answer): "Self-paced curriculum that teaches the Keiter & Co. methodology from zero AI experience through running a full client engagement." Schema: LocalBusiness, Course.

**Curriculum index.** Title: "The Keiter & Co. Academy curriculum." Meta: "Twenty-three modules across six parts. From AI 101 to running a Care Plan client month over month." Schema: Course with `hasCourseInstance`.

**Module page.** Title: "[Module title] | Keiter & Co. Academy." Meta: derived from the module's learning goal. Schema: LearningResource with educationalLevel, learningResourceType, timeRequired.

**Glossary.** Title: "Plain-language glossary | Keiter & Co. Academy." Meta: "Every term used in the Keiter methodology, defined the way Olivia would say it at the farmers market."

**About.** Title: "About the Academy | Keiter & Co." Meta: "Why this curriculum exists and who is behind it."

**Resources.** Title: "Templates and cheat sheets | Keiter & Co. Academy." Meta: "Downloadable Keiter-format templates: decision log, spec, kickoff, BUILDNOTES, Welcome to the Family guide spec."

---

## Schema (JSON-LD)

The base layout includes a LocalBusiness block for Keiter & Co. matching the standard from the project instructions. The curriculum index page adds a Course block. Each module page adds a LearningResource block. The About page adds an FAQPage block if FAQ content lands there.

Detailed schema templates with placeholders pulled from the project instructions and methodology get filled in during the kickoff phase that handles SEO and AEO setup.

---

## Content production plan

Content production is the long pole. The academy has 23 modules and an estimated 7 to 9 hours of reading content plus 25-plus interactive components. The plan below distributes the work across kickoff phases and flags the modules that depend on Olivia working sessions.

**Self-sourcing content (Claude can write from existing docs).** Modules 01, 02, 06, 09, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 23. Source material exists in project instructions, methodology, CLAUDE.md, guide-addendum.md, guide-spec-template.md, and the Outpost build artifacts.

**Original content (Claude drafts, Olivia reviews).** Modules 03, 04, 05, 21. AI 101, the three Claude surfaces, working with Claude as a build partner, and the Outpost walkthrough. Claude drafts these from a combination of public documentation, the project instructions, and the existing Outpost artifacts. Olivia reviews and edits for voice and accuracy.

**Working session content (requires Olivia input before completion).** Modules 07, 08, 15, 22. Voice discovery, decision-making, intake in action, capstone framing. These modules ship in placeholder state in the v1 launch with a clear "this module is under construction, working session pending" note. Olivia and Claude work through the content in a series of focused conversations after launch.

---

## Multi-phase kickoff preview

The kickoff document breaks the build into the following phases. Each phase ends with a handoff note. The next phase does not start until the handoff note exists. Final phase produces BUILDNOTES.md.

**Phase 1: Scaffold and shell.**
Init Astro project. Configure Tailwind. Pull keiterandco.com brand tokens (colors, type scale, components). Build base layout, header, footer, mobile nav, 404. Stub all routes. CLAUDE.md present in repo root before phase starts. End with handoff note covering what's stubbed and what's deferred.

**Phase 2: Content infrastructure.**
Set up `src/content/` collections for modules, glossary, and resources. Build the module page template, part index template, curriculum index, glossary, resources, and about page templates. No content yet, just templates rendering placeholder data. End with handoff note.

**Phase 3: Self-sourced content (Modules 01, 02, 06, 09, 10, 11).**
Write content for the modules that source directly from existing Keiter docs. Each module gets prose, callouts, code examples where applicable. Interactive components are stubbed but not built yet. End with handoff note. After this phase, six modules are readable end to end.

**Phase 4: Self-sourced content (Modules 12, 13, 14, 16, 17, 18).**
Continue writing the rest of the self-sourced modules. Same pattern. End with handoff note. After this phase, 12 modules are readable.

**Phase 5: Self-sourced content (Modules 19, 20, 23).**
Final batch of self-sourced modules. End with handoff note. 15 modules readable.

**Phase 6: Original content drafts (Modules 03, 04, 05, 21).**
Claude drafts the AI 101, three surfaces, working with Claude, and Outpost walkthrough modules. Olivia reviews voice and accuracy. End with handoff note flagging anything Olivia wants rewritten.

**Phase 7: Working session placeholders (Modules 07, 08, 15, 22).**
Stub these modules with the clear "under construction, working session pending" note. List what the working session needs to capture. End with handoff note.

**Phase 8: Interactive components I (high-impact widgets).**
Build the kickoff prompt generator, decision log generator, surface selector, AEO checker, DOD checklist tool. End with handoff note.

**Phase 9: Interactive components II (the rest).**
Build the remaining widgets: context window visualizer, voice discovery deck, copy rewrite practice, tier selector, proposal template, monthly snapshot template, build tracker, principles flashcards, pick-the-next-move scenarios. End with handoff note.

**Phase 10: Audio companion infrastructure and placeholder narration.**
Build the audio player component. Generate AI placeholder narration for every module that has finalized content. Save MP3s and transcripts. End with handoff note.

**Phase 11: SEO, AEO, schema, and full DOD pass.**
Add LocalBusiness, Course, LearningResource, FAQ schema. Write meta titles and descriptions for every page. Run the full DOD checklist. Fix everything that fails. End with handoff note.

**Phase 12: Deploy and launch.**
First deploy via Netlify CLI. DNS setup for learn.keiterandco.com. Verify SSL. Final smoke test. Write BUILDNOTES.md. End with the launch handoff note.

Phase count is the working figure. The kickoff phase splits the work for context window survival, not for any external constraint. Phases consolidate or split during the kickoff write-up depending on what fits in a focused session.

---

## Open questions and flags

**Capstone client (Module 22).** Real local business with permission, fictional business defined in the curriculum, or learner-of-choice option. Default proposal: learner-of-choice with a fictional fallback ("if you do not have a real client to practice on, here is a fictional one we built for this purpose: a small business in a town like yours, with these characteristics"). Pending Olivia's call.

**Audio narration provider for placeholder voice.** Default proposal: ElevenLabs with a warm, direct, unpretentious voice profile. Pending Olivia's call.

**Voice discovery and decision-making working sessions (Modules 07, 08).** Two modules ship as placeholders in v1, marked clearly. Working sessions to capture the actual extraction skill happen post-launch. Pending Olivia's call on whether this is acceptable or whether v1 blocks on these.

**Intake-in-action working session (Module 15).** Same situation. Module ships with the documented intake structure but the "how Olivia actually runs an intake conversation" piece needs a working session. Default: ship the module with the structural content and a placeholder for the in-action section.

**Brand tokens for the academy.** Pulled from keiterandco.com in kickoff phase 1. If the marketing site brand is mid-evolution, Olivia tells me which version to inherit.

**Google Analytics on an internal property.** GA is the Keiter & Co. standard for client builds. Open whether to use it on an internal property or swap for Plausible or Netlify Analytics. Pending Olivia's call.

**Alex opt-in for About page.** The About page can include Alex if Olivia wants. Default: include Olivia only unless Olivia confirms Alex is in.

**HoneyBook walkthrough (Module 17).** The proposal and contract module needs a walkthrough of the HoneyBook flow. Open whether Olivia screenshots and narrates this herself, or whether Claude documents it from observation in a working session. Pending Olivia's call.

**Month-1 check-in process (Module 20).** Not currently documented anywhere. Either Olivia writes it as part of post-launch backfill, or we ship Module 20 with a placeholder for the check-in section.

---

## Handoff note

Spec written and saved to `C:\workspace\keiter-co\keiter-and-co-academy\keiter-and-co-academy.spec.md`. Architecture, audience, success criteria, voice, copy standards, information architecture, full module catalog, page templates, component inventory, visual direction, audio approach, tech stack, build standards (full DOD), SEO and AEO anchors, schema approach, content production plan, and multi-phase kickoff preview captured. Open questions listed for Olivia's call before the kickoff is written.

Next phase: the kickoff. The kickoff is one markdown file with twelve labeled phases. Each phase has its own focused instruction set so a build session can pick up at any phase, run only that phase, and end with a handoff note. CLAUDE.md drafting also happens in the kickoff phase setup.

Pending Olivia's review of the spec and any open-question resolutions before the kickoff is written.
