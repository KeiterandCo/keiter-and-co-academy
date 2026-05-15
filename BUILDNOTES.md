# BUILDNOTES.md

Project: keiter-and-co-academy
Last updated: 2026-05-15

Check this file at the start of every build session. Add to it freely. Never delete an entry without resolving it.

---

## Open items

### Fonts: self-hosted files needed
- Status: OPEN
- Detail: Layout.astro preloads /fonts/lora-v400.woff2, lora-v600.woff2, lora-v700.woff2, inter-v400.woff2, inter-v500.woff2, inter-v600.woff2. These files need to be downloaded and placed in public/fonts/ before the font loading standard passes. Download Lora (400, 600, 700) and Inter (400, 500, 600), Latin subset, from Google Fonts or a trusted CDN. Self-host them.
- Phase where it blocks: Launch (fonts fall back to system stack in dev, which works but is not the final design).

### Hero image: photo needed
- Status: OPEN, placeholder in place
- Detail: Landing page hero slot. Wide shot of Olivia at her desk in the farmhouse. Soft natural light, real and unposed, work in progress on screen, kids' artwork on the wall behind her. Aspect ratio 16:9.
- Phase where it blocks: Phase 7 (photography pass).

### About-Olivia photo: portrait needed
- Status: OPEN, placeholder in place
- Detail: About page portrait. Olivia, warm lighting, 1:1 aspect ratio.
- Phase where it blocks: Phase 7.

### Alex on About page: decision needed
- Status: OPEN
- Detail: Spec flags this as Olivia-only by default. Phase 5 surfaces to Olivia before adding Alex.
- Phase where it blocks: Phase 5.

### GA_ID: property ID needed
- Status: OPEN
- Detail: GA snippet is gated on the GA_ID env var in Netlify. Add the GA property ID to Netlify environment variables when the project is confirmed.
- Phase where it blocks: Phase 11 (analytics pass).

### Audio files: placeholder narration follow-up
- Status: PARTIAL, Phase 10 placeholder pass complete
- Detail: Audio player is now live. Placeholder MP3 and transcript files exist for all currently finalized modules in `public/audio/` and `src/content/audio-transcripts/`. Remaining no-audio modules are by design placeholders (07, 08, 15, 22) plus missing content files (05, 21). ElevenLabs-specific generation is still pending because no API key is configured in this environment.
- Phase where it blocks: Final pre-launch polish if ElevenLabs voice consistency is required before Olivia's human re-record.

### HoneyBook walkthrough (Module 17): Olivia input needed
- Status: OPEN, flagged in spec
- Detail: Module 17 requires a HoneyBook operational walkthrough. Either Olivia screenshots and narrates herself, or the module ships with structural content and a placeholder. Surface before Phase 4.

### Month-1 check-in (Module 20): documentation needed
- Status: OPEN, flagged in spec
- Detail: Module 20 covers the month-1 check-in process. The module now ships with a clearly flagged placeholder because the process is still undocumented.

### Cheat sheet PDFs: generation approach needed
- Status: OPEN
- Detail: Phase 5 ships the cheat sheets as Markdown downloads. Before final PDF generation, Olivia needs to confirm whether the PDFs should come from a styled browser print flow or a programmatic export path. Resources page copy now says PDF downloads appear where available.
- Phase where it blocks: Phase 11.

### Capstone client (Module 22): decision needed
- Status: OPEN, flagged in spec
- Detail: Capstone uses a learner-of-choice business with a fictional fallback baked in. Surface to Olivia in Phase 4 or Phase 5.

### Voice discovery working session (Modules 07 and 08): Olivia input needed
- Status: OPEN, flagged in spec
- Detail: Modules 07 and 08 require a working session with Olivia to capture the actual skill, not just the questions. Schedule before Phase 4 reaches those modules.

### Intake working session (Module 15): Olivia input needed
- Status: OPEN, flagged in spec
- Detail: Module 15 (Intake) requires the intake-in-action piece from Olivia. Surface before Phase 4.

---

## Resolved items

- Phase 12 launch complete: site is live at https://learn.keiterandco.com with custom domain attached and SSL valid.
- Netlify production deploy confirmed at https://keiter-and-co-academy.netlify.app and custom domain routing verified.
- Launch smoke checks completed on production routes, search route, audio assets, and 404 behavior.
- Phase 10 audio infrastructure is complete in code: conditional player rendering, transcripts, and module front matter wiring are in place.
- OG default image is in place at `public/images/og-default.svg` and wired as the sitewide fallback in `Layout.astro`.
- Branded `favicon.svg` replaced the Astro default icon.
- Phase 11 schema and SEO pass completed: LocalBusiness, Course, and LearningResource JSON-LD blocks now render across the site.
- Phase 11 accessibility audits completed: axe scans show 0 violations on representative routes.
