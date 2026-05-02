# Quiz system

A repeatable architecture for building single-file `.html` onboarding tools using a strict data-driven pattern. The system files in `/system/` are stable across clients. Each client lives in `/clients/{name}/` with their own brief, voice rules, copy dictionary, and build instruction.

## Folder map

### `/system/` (fully reusable across clients)

- **`design-system.html`**: CSS custom properties and component patterns. Source of truth for visual design.
- **`/rules/`**: Universal rules that govern every build.
  - `engine-rules.md`: Engine spec, sanitation, three-part JS structure, the "how to add a new key" test.
  - `writing-rules.md`: Editorial rules. No em dashes, no AI vocabulary, no promotional padding.
- **`/examples/`**: Canonical examples of the architecture, in numbered reading order. Demonstrate the pattern for screens 0, 1, and 2. Apply the pattern to the rest of any build.

### `/clients/{name}/` (per-client artifacts)

- **`prompt.md`**: Build instruction for this client's tool. Specifies screen flow, math, deliverable.
- **`content.js`**: The full `projectContent` dictionary. Source of truth for all user-facing copy.
- **`client-brief.md`**: The client's voice and intent, in their own words.
- **`voice-rules.md`**: Voice rules: required replacements, framing, what to avoid.

Currently active clients: **Marcus Cole** (`/clients/marcus/`), a financial planner running a retirement readiness quiz.

## How to use this system

To build a client's tool: read `CLAUDE.md`, then `/system/`, then the relevant client folder. The client folder's `prompt.md` is the build instruction.

To onboard a new client: copy `/clients/marcus/` to `/clients/{new-name}/`, swap the four files. The `/system/` folder does not change.

## Architecture rules (apply to every build)

1. **Single .html file.** Vanilla CSS, vanilla JS, vanilla HTML. No React, Tailwind, or frameworks. Google Fonts is allowed.
2. **HTML body contains layout only.** Empty tags carry `data-content="keyName"` attributes. No user-facing text is hardcoded inside HTML tags.
3. **JavaScript is structured in three parts, in this order, clearly commented:**
   - PART 1: `projectContent` dictionary
   - PART 2: Template engine (binding logic)
   - PART 3: App logic (transitions, validation, math, slider handlers)
4. **The template engine renders strings via `innerHTML`** so the dictionary can carry inline HTML (`<br>`, `&middot;`, `<span>`). Arrays render into containers by ID. See `/system/examples/04-binding-engine.js`.
5. **Source-of-truth hierarchy:** `design-system.html` for design, the client's `content.js` for copy, `/system/examples/` for the architectural pattern, `/system/rules/writing-rules.md` for editorial standards.

## Win condition

A stranger can read `/system/design-system.html`, the client's `content.js`, and the four files in `/system/examples/` and apply the pattern to build the entire tool without further help. If they can't, the system is not real yet.
