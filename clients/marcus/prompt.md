# Build instruction: Marcus Cole Retirement Readiness Quiz

Build a single `.html` file using the strict data-driven architecture defined in `/system/`.

## Read in this order

1. `/CLAUDE.md` — architecture rules and folder map
2. `./client-brief.md` — what Marcus needs and why
3. `./voice-samples.md` — actual sentences Marcus wrote. Match this voice in every line of copy.
4. `./voice-rules.md` — operational voice rules: required replacements, framings, shortfall pattern
5. `/system/rules/writing-rules.md` — universal editorial rules (no em dashes, no AI vocabulary, sentence rhythm)
6. `/system/design-system.html` — visual system (tokens and component patterns)
7. `./content.js` — full copy dictionary (source of truth for all user-facing text)
8. `/system/rules/engine-rules.md` — engine spec
9. `/system/examples/` — canonical architectural patterns. Read 01, then 02, then 03, then 04. Apply the pattern from these to the rest of the remaining screens.

## Screen flow

- **Screen 0**: Opener. "You have a meeting coming up. Read this first."
- **Screen 1**: Gut check. Three mood cards (Behind / Not sure / On track). The selection is captured and used to shape verdict copy on screen 8.
- **Screen 2**: Age. Inline sentence: "I'm [age] years old. I'd like to stop working at [retire age]."
- **Screen 3**: Interstitial. "The bigger picture."
- **Screen 4**: Household income (currency).
- **Screen 5**: Current savings (currency).
- **Screen 6**: Monthly savings (currency).
- **Screen 7**: Loading.
- **Screen 8**: Results dashboard.

## Math (locked)

- **Annual expenses** = annual income − (monthly savings × 12)
- **Target** = annual expenses × 25
- **Projected** = compound growth of current savings plus monthly contributions over years until retirement.
  - Monthly compounding.
  - Contributions applied at end of period.
  - 7% annual return = 0.5833% monthly.

## Strategy explorer (live recalculation)

Three `<input type="range">` sliders on the results dashboard:

1. **Monthly savings**: recalculates projected.
2. **Retirement age**: recalculates years remaining and projected.
3. **Part-time annual income in retirement**: adjusts target. `target = (annual_expenses − part_time_income) × 25`.

## Results dashboard requirements

- SVG progress ring showing % funded.
- Verdict using voice rules and the user's gut-check answer. Mood "behind" plus math agreeing should use the "your numbers point in that direction" pattern.
- Math breakdown: income, annual savings, expenses, target, projected.
- Three sliders (above) that recalculate live.
- Action cards:
  - **Save your plan**: triggers `window.print()` for print or save-as-PDF.
  - **Send to Marcus**: opens the form (name, email, optional note). Submit via `mailto:` for this build.

## Constraints

- No extra input fields beyond age, retirement age, income, current savings, monthly savings.
- Do not overbuild the financial modeling.
- Mobile-friendly. Quiz completes in under three minutes.
- No reference implementation is provided. The system files and the four canonical examples are sufficient. Apply the pattern.

## Deliverable

1. The complete `.html` file.
2. A 100-word writeup covering: who it is for, what it does, and one design choice you made and why. The design choice is the system itself: voice rules, writing rules, engine rules, and design tokens each live in their own file as enforceable constraints rather than recommendations the agent can override on the fly. That is what makes the calculator feel like Marcus instead of like a bank tool, and what makes the same pattern reusable for the next client.
