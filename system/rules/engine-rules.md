# Engine rules

The actual engine code is in `/system/examples/04-binding-engine.js`. This file holds the surrounding spec: sanitation, structure, and the test of whether the system is real.

## Three-part JS structure (required)

```javascript
// PART 1: Content dictionary
const projectContent = { /* ... */ };

// PART 2: Template engine (see examples/04-binding-engine.js)
function renderContent() { /* maps projectContent to DOM */ }

// PART 3: App logic
// Screen transitions, validation, math, slider handlers, action card behavior

document.addEventListener('DOMContentLoaded', () => {
  renderContent();
  // wire up part 3 handlers
});
```

## Why innerHTML, not textContent

The dictionary carries inline HTML: `<br>` for line breaks, `&middot;` for separators, `<span style='...'>` for color highlights. `textContent` would render those as literal strings.

## Sanitation note

`projectContent` is author-controlled, not user input. `innerHTML` is acceptable here. **Never** use `innerHTML` for any value derived from user input. Those go through `textContent` or a sanitized formatter.

## Adding new content keys

This is the test of whether the system is real. To add a new piece of copy:

1. Add the key and value to the client's `projectContent`.
2. Add an empty HTML element with `data-content="keyName"`.
3. Done. The engine handles the rest.

If a copy change requires touching the engine or the HTML structure, the system has leaked. Fix the leak.
