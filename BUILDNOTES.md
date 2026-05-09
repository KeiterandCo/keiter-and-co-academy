# BUILDNOTES.md

Project: keiter-and-co-academy
Last updated: 2026-05-09

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

### OG default image: /images/og-default.png needed
- Status: OPEN
- Detail: Layout.astro references /public/images/og-default.png as the fallback OG image. Create a simple branded 1200x630 image (cream background, Lora heading, Keiter & Co. Academy wordmark) and place it at public/images/og-default.png.
- Phase where it blocks: Phase 11.

### Favicon: branded favicon needed
- Status: OPEN, Astro default in place
- Detail: Replace the default favicon.svg and favicon.ico with branded versions matching the academy identity.
- Phase where it blocks: Phase 11.

### Audio files: ElevenLabs narration
- Status: DEFERRED to Phase 10
- Detail: Every module needs a companion MP3 at /public/audio/[module-slug].mp3. Provider: ElevenLabs (default, surface to Olivia before generating). Player slot is in the module template but hidden until files exist.

### HoneyBook walkthrough (Module 17): Olivia input needed
- Status: OPEN, flagged in spec
- Detail: Module 17 requires a HoneyBook operational walkthrough. Either Olivia screenshots and narrates herself, or the module ships with structural content and a placeholder. Surface before Phase 4.

### Month-1 check-in (Module 20): documentation needed
- Status: OPEN, flagged in spec
- Detail: Module 20 covers the month-1 check-in process. If undocumented by Phase 5, the section ships as a flagged placeholder.

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

(none yet)
