# Transcript: business-18

Audio narration placeholder for this module.

Infrastructure is where a build becomes real. Domain, repo, hosting, DNS, deploy, all the pieces that make the site live somewhere trustworthy.

Keiter uses a steady pattern here. Domain at Namecheap. Hosting on Netlify. DNS on Netlify. Repo under the KeiterandCo GitHub organization. First deploy through the CLI. The point is not novelty. The point is repeatability.

The basic stack

The academy's own build documents show the default stack clearly:

- Astro for the site
- GitHub for the repo
- Netlify free tier for hosting
- Netlify DNS for domain management
- Node 18
- build command npx astro build
- publish directory dist

That same pattern applies to Keiter client builds unless there is a documented reason to do something else.

  The stack reference in the kickoff names Netlify CLI for deploys and Netlify DNS for the custom domain. The academy uses the same infrastructure pattern it teaches future operators to use.

Step 1, secure the domain

The domain is usually registered at Namecheap. Confirm the exact domain spelling with the client before purchasing or transferring anything. Typos here are expensive and annoying.

What to confirm:

- exact domain name
- whether the client already owns it
- which email address and account currently control it
- whether any existing records or services need to stay in place during the move

If ownership is messy, stop and sort that out before the rest of the stack starts piling on top.

Step 2, create the GitHub repo

Create the project repo under the KeiterandCo organization. The repo name should match the project naming convention so the build documents, local folder, and repo all line up.

For example:

- local folder: client-name-site
- repo: KeiterandCo/client-name-site
- build documents: client-name-site.decision-log.md, client-name-site.spec.md, client-name-site.kickoff.md

That consistency matters later when the work gets picked up again.

Step 3, connect the project to Netlify

Netlify is the hosting layer. The clean path is to connect the repo and keep deploys tied to version control.

The CLI flow usually looks like this:

Code example follows. See the page for the full block.

During setup, confirm:

- linked GitHub repository
- build command: npx astro build
- publish directory: dist
- Node version: 18

If the project already has a netlify.toml, make sure the settings match before the first production deploy.

Step 4, first deploy

Use a preview deploy first when possible, then ship production once the smoke test passes.

Typical commands:

Code example follows. See the page for the full block.

The preview deploy gives you a stable URL for review. The production deploy is for when the build is ready to represent the business publicly.

Step 5, move DNS to Netlify

Keiter's standard is Netlify DNS. Once the site exists on Netlify, add the custom domain there and point DNS through the same platform.

For the academy, that means learn.keiterandco.com lives as a Netlify-managed subdomain. For a client build, it means the business domain or subdomain is pointed to the Netlify site the same way.

Why this pattern helps:

- SSL is handled in the same place
- DNS records live beside the hosting setup
- troubleshooting stays simpler because fewer vendors are involved in the day-to-day path

Step 6, environment variables and project settings

Before calling the infrastructure complete, check whether the site depends on any environment variables.

Examples from the academy build:

- GA_ID for analytics
- any future API keys or gated integrations

Do not assume the Netlify site inherited what the local machine had. Confirm the values exist in Netlify and that production behavior matches expectation.

First smoke test checklist

Once the first deploy is up, test the real URL.

- home page loads
- internal navigation works
- forms, if present, work as intended
- favicon, OG image, and metadata resolve
- mobile nav works on a real phone width
- no obvious console or 404 asset errors
- SSL is active

This is not the full launch pass, but it is enough to confirm the infrastructure is functioning.

Common failure points

Build command or publish directory mismatch

If Netlify is configured with the wrong build command or points at the wrong publish directory, the deploy may succeed and still serve nothing useful.

For Astro, the standard is still:

- build command: npx astro build
- publish directory: dist

Wrong Node version

If the local build works and Netlify fails unexpectedly, check the configured Node version. The academy standard is Node 18.

Missing environment variables

The build may pass locally and behave differently in production if a required environment variable is missing from Netlify.

DNS lag or incorrect records

If the deploy is healthy but the domain is not resolving, check the DNS records and give propagation a little time before assuming the hosting is broken.

Wrong repo linked to Netlify

This sounds obvious until it happens. Confirm the site is attached to the right repository and branch.

Why infrastructure belongs in the operator curriculum

Infrastructure work is easy to underestimate because a lot of it looks like setup clicking. It is not just setup clicking. It is the foundation that determines whether a site is actually live, maintainable, and recoverable.

If the repo naming is sloppy, handoff gets harder.

If DNS is unclear, launch gets stressful.

If hosting config is inconsistent, repeatability disappears.

The whole Keiter method depends on repeatable, legible systems. Infrastructure is one of those systems.

Keep the path boring on purpose

There is value in a boring infrastructure standard. Same host. Same DNS pattern. Same repo shape. Same deploy habit. Same smoke test.

That is how you build a method a future operator can actually inherit.

Interactive component here. Use the live site to try it.
