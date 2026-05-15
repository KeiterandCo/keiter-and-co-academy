# Transcript: tools-04

Audio narration placeholder for this module.

Claude is available in more than one place. Each surface is designed for a different kind of work, and choosing the right one for the task makes the session easier and the output more useful. This module walks through the three surfaces Keiter and Co. uses: Chat, Code, and Cowork.

Why surfaces matter

The context a surface gives Claude changes what it can do. Chat runs in a browser tab without access to your local files. Code runs inside VS Code with full visibility into your active project. Cowork operates on your desktop with access to local documents and folders.

The surface is not just where you type. It is what Claude can see and act on.

Getting the surface wrong is usually recoverable, but it creates friction. A methodology question in Code turns into a session where Claude keeps reaching for files that are not relevant. A build task in Chat produces suggestions Claude cannot apply directly. A document organization task in Code is slower than it needs to be.

Choosing the right surface is one of the small habits that adds up to noticeably better sessions.

Claude Chat

Claude Chat is the conversation surface. You open it in a browser at claude.ai. You type, Claude responds, you continue.

Use Chat when:

- You are working through a question or a decision before any code exists
- You need to review methodology, talk through a client situation, or think through the right approach
- You want to draft copy, review voice, or evaluate a piece of writing
- You need to summarize, translate, or explain something from a document you can paste in
- You are setting up a new project and working through the spec before the repo exists

Chat is where early intake conversations happen, where draft specs get reviewed for gaps, and where you talk through whether a scope decision is the right one before committing it to a decision log.

  Pasting the client's intake notes and asking Claude to identify the gaps before the brief is written.

  Reviewing a draft spec and asking whether the tier recommendation is defensible.

  Talking through a voice sample the client provided and asking Claude to describe the patterns it sees.

Chat does not have access to your local files. If you paste content in, Claude can work with it. If you want Claude to read your codebase, you need Code.

Claude Code

Claude Code is the build surface. It runs inside VS Code as an integrated assistant with direct access to your open project files.

Use Code when:

- You are actively building or editing files in a repo
- You need Claude to read the actual code and respond to what is there
- You are running commands, debugging errors, or adding components
- You are executing a Keiter build phase from a kickoff

Code can read your files, suggest edits with context from the actual codebase, and run terminal commands from within the session. This is what makes a Keiter twelve-phase kickoff tractable. Each phase opens in Code, with the files from the previous phase visible and the handoff note as the opening context.

  Running Phase 1 of the academy kickoff: scaffolding the Astro project, installing dependencies, writing CLAUDE.md.

  Adding a new React component to an existing build and asking Claude to wire it into the module template.

  Debugging a Tailwind v4 configuration issue by letting Claude inspect the actual config file.

  When you start a new build phase from a kickoff, open Code, paste the phase prompt and the previous handoff note, and begin. That is the Keiter pattern. Do not paste build tasks into Chat where Claude cannot see the files.

Cowork mode

Cowork is the desktop file surface. It operates on your local desktop with access to files and folders outside a specific repo.

Use Cowork when:

- You need to organize, rename, or process files across multiple folders
- You are generating documents, templates, or cheat sheets that live outside a specific repo
- You want to produce a document from scratch without building inside a repo
- The work involves your desktop environment rather than a specific project

Cowork fills the gap between Chat (no file access) and Code (scoped to a specific project). It is useful for the kind of work that does not belong inside a repo but still benefits from structured assistance.

  Generating a blank client Welcome to the Family guide template from a filled spec document.

  Reorganizing a client asset folder before a build starts.

  Drafting a new client kickoff document that does not yet belong inside any repo.

Choosing the right surface

The choice is usually straightforward once you know the three surfaces. Ask yourself one question: does this task require working inside a specific project with active files?

- Yes, project files: use Code
- No, working through a question or reviewing a document: use Chat
- No, desktop file tasks outside a specific repo: use Cowork

The surface selector below walks through a few scenarios and shows the reasoning for each recommendation.

Interactive component here. Use the live site to try it.

Switching mid-session

You can start in Chat and move to Code when the conversation produces something you need to apply. That is a normal workflow, not a mistake. Chat is where "what should I build here?" gets resolved. Code is where "build it" happens.

Switching the other direction, from Code to Chat, is rarer. If you find yourself mid-build session wanting to have a strategic conversation that keeps getting tangled up with the open files, it may be easier to pause, open Chat, sort out the question, and bring the answer back.

The goal is a clean context for the work you are doing. Use the surface that gives you that.
