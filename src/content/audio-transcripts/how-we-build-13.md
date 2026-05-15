# Transcript: how-we-build-13

Audio narration placeholder for this module.

Most unfinished builds do not look unfinished to the person who built them. That is exactly why the Definition of Done exists.

The checklist is not bureaucracy. It is the only honest way to confirm the work is complete. Without it, the builder remembers the big work and forgets the quiet work, the contrast check on the tinted card, the missing OG image, the unlabeled form field, the font files that were supposed to be self-hosted later.

This module covers two things that travel together: the Definition of Done, and BUILDNOTES.md.

What the Definition of Done is for

The Definition of Done is the full list of gates a build must pass before launch. Not the builder's feeling. Not the client's initial reaction. The actual gates.

For the academy, those gates are written directly into the spec. Copy standards, accessibility, mobile, online personality, font loading, image standards, layout standards, color contrast, print, 404, social slots, CTA audit, SEO and AEO, BUILDNOTES, and CLAUDE.md itself.

  "Every item must pass before launch." That is the controlling sentence. The checklist is not a suggestion list and it is not a launch-day cleanup task.

The force of the DOD is simple. It turns vague confidence into named checks.

Run the checklist by category

The easiest way to miss something is to jump around. Run the checklist in categories.

Copy standards

Read for the voice rules first. No em dashes. No contrast framing. No engagement bait. No therapy speak. No AI language. Women first in references and sign-offs. No invented information.

This is the category where you catch things that still sound a little canned, even after the layout is beautiful.

Accessibility and mobile

Check semantic HTML, alt text, keyboard navigation, focus states, labels, target size, text resize, mobile views at 375px, 768px, and 1280px.

This is where many "almost done" builds fail.

Personality and polish

Check motion, hover states, SVG, section variety, hero treatment, footer treatment, contrast on styled elements, and CTA clarity.

This is where many technically fine builds still reveal themselves as first drafts.

SEO and AEO

Check meta titles and descriptions, OpenGraph tags, schema, canonical URLs, plain-language service descriptions, and location signals.

Final project files

Check that CLAUDE.md exists. Check BUILDNOTES.md exists and is current. Check anything deferred is written down.

BUILDNOTES.md is where unfinished truth lives

BUILDNOTES.md exists so unresolved items stay visible. It is not a scrap pile and it is not a private note to yourself. It is the formal record of what still needs attention, what was deferred, and what blocks later phases.

The academy's own BUILDNOTES.md is a good working example. It already includes:

- missing self-hosted font files
- missing hero and About photos
- the Alex-on-About-page decision
- missing GA property ID
- missing OG image and branded favicon
- deferred audio files
- open content gaps around HoneyBook, month-one check-in, capstone framing, and working-session modules

That list is not a failure. It is the build staying honest.

  If a detail is unclear and you cannot resolve it from the source docs, do not invent it. Flag it in BUILDNOTES.md with a specific description of what is needed and stop.

What belongs in BUILDNOTES

Good BUILDNOTES entries are concrete.

Bad entry:

> Need images.

Good entry:

> Landing page hero slot. Wide shot of Olivia at her desk in the farmhouse. Soft natural light, real and unposed, work in progress on screen, kids' artwork on the wall behind her. Aspect ratio 16:9.

The good version tells the next phase exactly what is missing and what the standard is.

Each note should name:

- status, open or deferred
- detail, specific enough to act on
- phase where it blocks, if it blocks one

That structure is what makes BUILDNOTES useful across context windows and across people.

A build can be good and still not be done

This is one of the harder habits for new operators to learn. A page can look strong, read well, and still not pass the DOD.

Examples:

- fonts still fall back because self-hosted files are missing
- the default OG image path exists in code but the actual file has not been created yet
- a 404 page works but still uses generic copy
- the search field works but lacks a visible label
- the mobile nav works at one breakpoint but not another

Those are not "small enough to ignore." They are the actual difference between close and done.

How to run a real DOD pass

Use a fixed order.

1. Build and open localhost.
2. Click every route.
3. Check desktop, tablet, and mobile widths.
4. Tab through every interactive element.
5. Read key pages out loud for copy standards.
6. Check metadata and schema.
7. Review BUILDNOTES and either resolve or confirm each open item.
8. Only after that write the phase handoff note.

If a gate fails, fix it before moving on. If it cannot be fixed because an external input is missing, write it down in BUILDNOTES and surface it clearly.

BUILDNOTES and handoff notes are different

They work together, but they are not the same file.

The handoff note says what happened in this phase, what is deferred, what the next phase needs to know, and what Olivia needs to decide.

BUILDNOTES is the persistent build ledger of unresolved items across phases.

If Phase 4 ends with a missing font file, the Phase 4 handoff note should mention it if it matters to Phase 5. BUILDNOTES should keep the durable record until the file is actually added.

Use the academy build as the model

One reason this academy is useful is that it is following the same method it teaches. The DOD checklist in the spec is the full launch bar. BUILDNOTES at the repo root is the running unresolved-item ledger. The kickoff handoff notes show how each phase records what changed.

That means you do not have to guess what these documents should look like. You can read them.

Interactive component here. Use the live site to try it.
