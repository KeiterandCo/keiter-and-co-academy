# Keiter & Co. Academy: Decision Log

Project: keiter-and-co-academy
Last updated: 2026-05-09
Status: Build documents in progress (decision log complete, spec pending)

---

## Context

Keiter & Co. is building an internal onboarding curriculum that teaches a new operator how to run a Keiter & Co. build from zero. The starting point is "what is AI." The ending point is running a complete client engagement using the Keiter methodology: intake, three-document workflow, build, launch, Welcome to the Family guide, and ongoing Care Plan support.

The audience is any future Keiter & Co. hire, plus self-learners who find the published version. The curriculum doubles as a personal reference for Olivia and a shareable artifact.

This build uses the Keiter methodology to build the thing that teaches the Keiter methodology. The recursion is intentional. The build itself becomes a worked example future operators can read alongside the Outpost Vending case study.

---

## What we are building

A standalone Astro site at learn.keiterandco.com that hosts the Keiter & Co. operator curriculum. Markdown content as the spine. Interactive components layered where they teach better than prose. Audio companion for learners who absorb material walking the dog or driving to a build. A guided walkthrough of an existing Keiter & Co. build (The Outpost Vending) as the primary case study.

---

## Decision: Full curriculum in v1, no phased scope

**Considered.** A lean v1 of 8 to 10 modules covering Welcome, Tools, How we think, How we build, and the Outpost walkthrough, with business operations, capstone, and audio in later phases. Would have meant a usable curriculum in a shorter window with iterative additions over time.

**Decided.** Ship the comprehensive curriculum in v1. All modules, business operations included, capstone build included.

**Reasoning.** The point of this curriculum is to be all-encompassing. A new operator who can build a site but cannot run intake, write a proposal, or hand over a Welcome guide is not a Keiter & Co. operator. Splitting the curriculum into phases would mean the first version teaches an incomplete operator, which contradicts the premise. The methodology expects multi-phase kickoffs to handle build scope, not multi-phase shipping of the curriculum itself. Audio companion modules stay in v1 with placeholder narration in place that Olivia can replace with real recordings on her schedule.

---

## Decision: Subdomain, separate repo

**Considered.** Hosting the academy as a folder inside the existing keiterandco.com repo. Would have meant one site to maintain, one deploy pipeline.

**Decided.** Separate Astro repo, separate Netlify site, deployed to learn.keiterandco.com via Netlify DNS.

**Reasoning.** The academy will update on a different cadence than the marketing site. Keeping it separate means content edits to the curriculum do not risk breaking the marketing site, and the marketing site staying lean is part of its job. Netlify DNS handles SSL on a subdomain with no extra work. Same operational pattern as a client site, which means the academy build is itself a clean reference example.

---

## Decision: Audience framing is "Keiter & Co. operator"

**Considered.** Building this specifically for Alex as a personal masterclass, since the original ask was a learning guide for him.

**Decided.** Frame the curriculum as Keiter & Co. onboarding for any future operator. Alex is welcome to use it. He is not the target persona.

**Reasoning.** The project instructions name this directly. Claude works with Olivia. Alex has his own Claude. The partnership does not need AI brokering its internal communication. Building the curriculum for "Alex" puts Claude in the position of speaking past Olivia to her husband, which is not how this system works. Building it for "any future Keiter & Co. operator" preserves the original goal of full Olivia-method transfer while keeping the framing clean. Repackaging the curriculum for a wider audience later becomes an obvious next step instead of a structural rewrite.

---

## Decision: Markdown spine, Astro shell, Netlify free tier

**Considered.** A pure markdown knowledge base in a notes app. A static PDF curriculum. A video course platform. A custom React app.

**Decided.** Astro static site with content folders of markdown that compile to pages, interactive widgets where useful, hosted on Netlify free tier.

**Reasoning.** Astro plus Netlify is the Keiter & Co. stack. Updating a module means editing a markdown file and pushing, the same gesture as updating a client site. There is no new toolchain to learn or maintain. The static site loads fast, scales free, and survives any reasonable level of traffic. Astro's MDX support means interactive widgets sit alongside prose without a framework switch. Markdown as the spine keeps content portable, which matters because curriculum content is the kind of thing that gets exported, embedded elsewhere, or printed.

---

## Decision: Curriculum structure

The curriculum is organized into six parts, approximately 18 modules total. Module count is a working figure and may consolidate or expand as the spec is written.

**Part 1: Welcome to Keiter & Co.**
Who we are, what we believe, the standing principles, the partnership structure, the constraints. The curriculum opens with the philosophy because every later decision is downstream of it.

**Part 2: The tools**
What AI is, what Claude is, the difference between Claude Chat, Claude Code, and Cowork mode, and when to reach for each. This is the foundational tooling layer that lets a learner with zero AI exposure operate the rest of the curriculum.

**Part 3: How we think**
Voice and tone, the hard formatting rules, the rules that travel with every build, how to hold the standing principles when a client asks for something that violates them. The "thinking like Olivia" layer.

**Part 4: How we build**
The three-document system (decision log, spec, kickoff), phased prompts and context window management, the build standards (SEO, AEO, accessibility, mobile, online personality, font loading, image standards, color contrast, footer, sections, CTA, dark mode, print, 404, social), the full Definition of Done checklist, BUILDNOTES.md, the agent fleet, the Live and Scoped automation queues.

**Part 5: How we run the business**
Intake, voice discovery, pricing tiers, Care Plans, no-upfront payment plan, proposals, contracts, payment flow, infrastructure setup (domain, hosting, DNS, GitHub, Netlify), launch handoff, the Welcome to the Family guide, ongoing client communication, month-1 check-ins, offboarding.

**Part 6: Practice**
A guided, step-by-step walkthrough of The Outpost Vending build using the real spec and decision log already in the workspace. A capstone sandbox build where the learner runs intake, produces the three documents, and builds a small site solo with Claude as their partner. Reference templates and cheat sheets.

---

## Decision: Lean on existing methodology docs as the source of truth

**Considered.** Rewriting all the standards and operational rules in curriculum-friendly prose inside each module.

**Decided.** Reference the project instructions, `keiter-co-build-methodology.md`, and the relevant CLAUDE.md files as the canonical sources. Curriculum modules teach how to read, apply, and operate from those docs. They do not duplicate them.

**Reasoning.** Two copies of any rule means one of them goes stale. Keiter & Co. policy lives in one place and the curriculum trains operators to find it, read it, and apply it. The curriculum modules become the "how to use this" layer on top of the source-of-truth docs. Updating policy in one place updates the curriculum's authority by reference. Each module includes a "Source of truth" link to the relevant doc and a "Last reviewed" date.

---

## Decision: Interactive components scoped to where they teach

**Considered.** Building interactive components throughout because they look impressive. Building no interactive components and keeping the curriculum text-only.

**Decided.** Build interactive components only where they teach better than prose. Specifically:

- A kickoff prompt generator. Fill-in-the-blank for a hypothetical business, output is a Keiter-format kickoff.
- A surface selector. Branching scenario asking the learner what tool to reach for in a given situation, with reasoning.
- A context window visualizer. Animated illustration showing why phased kickoffs exist using a real example.
- A decision log generator. Same fill-in-the-blank pattern as the kickoff generator.
- A voice discovery prompt deck. Clickable card stack of the questions Olivia actually asks in intake.
- An AEO completeness checker. Paste a meta description, get scored against the schema requirements.
- A Definition of Done checklist tool. Interactive checklist the learner can run against their own work.
- A "pick the next move" scenario library. Covers the gap topics: client off-tier, scope creep, voice falling flat, accessibility issues found late, deployment failure mid-launch, contrast check failure on a hero overlay, client wants something that violates a standing principle.

**Reasoning.** Interactive components are expensive to build and maintain. They earn the cost when they teach a skill prose cannot, like learning by doing or branching decision-making. Decoration interactivity is a maintenance tax with no return.

---

## Decision: Audio companion ships in v1 with placeholder narration

**Considered.** Cutting audio from v1 entirely.

**Decided.** Ship audio companion infrastructure in v1 with AI-generated placeholder narration that Olivia can replace with her own voice on her schedule.

**Reasoning.** Audio is meaningful for learners who absorb material walking the dog or driving to a build. Building the infrastructure (audio player component, file storage, transcripts) in v1 means the upgrade path is "record over the placeholder" instead of "build the audio system from scratch." Placeholder audio is functional, and a learner who prefers reading skips it anyway.

---

## Decision: This build follows Keiter & Co. methodology

**Considered.** Treating this as a personal Olivia project that does not need to follow the formal Keiter & Co. workflow.

**Decided.** Run this build the same as a client build. Three-document system. Multi-phase kickoff. CLAUDE.md in the repo before any code. BUILDNOTES.md as the final artifact. WCAG 2.2 AA accessibility. SEO and AEO. The full Definition of Done checklist applied to the academy site itself.

**Reasoning.** The curriculum teaches the methodology. The curriculum is built using the methodology. If a Keiter operator looks at the academy site and sees a build that violated the standards it teaches, the credibility of the curriculum drops to zero. Plus, the academy build itself becomes a worked example. Future operators can read the academy's spec and decision log as a reference alongside the Outpost spec and decision log.

---

## Decision: Naming convention

`keiter-and-co-academy` is the project name. Files follow the methodology's hyphen-separated, lowercase, period-before-document-type convention. Repo name matches: `keiter-and-co-academy`. Local folder matches.

Build documents:
- `keiter-and-co-academy.decision-log.md` (this file)
- `keiter-and-co-academy.spec.md`
- `keiter-and-co-academy.kickoff.md`
- `BUILDNOTES.md`
- `CLAUDE.md`

---

## Out of scope for v1

- Integration with the Keiter & Co. dashboard. The academy is a standalone site for v1. Learner progress tracking, certificates, or admin views become a v2 conversation if they earn it.
- Authentication and gating. The academy is publicly accessible in v1. If parts of the curriculum get gated later (premium content, internal-only modules), that is a v2 decision.
- A learning management system backend. Learner progress in v1 is local (browser localStorage) and only enables resume-where-you-left-off. No accounts, no server-side tracking.
- Live community features (forums, chat, office hours).
- Translation or localization beyond US English.
- Search infrastructure beyond what Astro plus a basic Pagefind integration provides.

---

## Flags and open questions

**Build doc naming discrepancy.** The May 2026 project instructions name the three build documents as decision log, spec, and kickoff. The business-level CLAUDE.md in the workspace names them as brief, spec, and kickoff. The Outpost folder has a decision log and a spec, no separate brief or kickoff named. Following the project instructions for this build. Flagging because Olivia may want to reconcile across the older docs at some point.

**Methodology evolution.** The curriculum will reference the project instructions and methodology as they exist on the date of each module's "Last reviewed" stamp. As those docs evolve, the curriculum needs a process for catching changes and updating dependent modules. A "Last reviewed" date per module plus a CHANGELOG section is the v1 approach. A more rigorous sync process can be designed later if needed.

**Capstone sandbox client.** The capstone build asks the learner to run a small site solo. Open question: does the capstone use a real local business as the practice client (with permission), a fictional business defined in the curriculum, or a learner-of-choice option. Resolving in the spec.

**Voice discovery and design decisions modules.** These two modules are the largest tribal-knowledge gaps. They require Olivia to either record or write a working session that captures the actual thinking pattern, not just the principles. Flagging as a content-production task that lives outside the build itself. Curriculum infrastructure ships without it. The modules sit in placeholder state until the working session happens.

**Audio narration source for placeholders.** AI text-to-speech is the v1 placeholder plan. Specific provider (ElevenLabs, OpenAI, Cartesia, or one of the Anthropic-friendly options) gets resolved in the spec. Voice and tone of the placeholder narration should match the curriculum voice: warm, direct, unpretentious. Not corporate.

---

## Handoff note

Decision log written and saved to `C:\workspace\keiter-co\keiter-and-co-academy\keiter-and-co-academy.decision-log.md`. Architecture and scope decisions captured. Open flags listed above either resolve before the spec or get carried into the spec as named open questions.

Next phase: the spec. The spec translates these decisions into a buildable plan. Information architecture, page structure for the academy site, full module list with learning goals and content sources per module, component inventory, content production plan, the first cut at the multi-phase kickoff structure, and the Definition of Done checklist applied to this specific build.

Pending Olivia's review of the decision log before the spec is written.
