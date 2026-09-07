---
name: Fahad Ali — Portfolio
description: A single-page live burn-in/validation console — status tiles, monospace host data, and a status-key legend standing in for a resume.
colors:
  console-ground: "#121212"
  console-ground-raised: "#1a1a1a"
  console-ground-sunken: "#0c0c0c"
  panel-dark: "#17181a"
  panel-border-dark: "#2b2c2e"
  panel-border-strong-dark: "#3a3b3d"
  text-primary-dark: "#f3f3f0"
  text-secondary-dark: "#b6b6b1"
  text-tertiary-dark: "#8c8b85"
  status-active: "#e8a33d"
  status-active-strong: "#f3bd66"
  status-complete: "#3ecf6e"
  status-complete-strong: "#6bdb8f"
  status-idle: "#6a6a66"
  paper-light: "#eceeee"
  panel-light: "#ffffff"
  panel-border-light: "#d5d9d9"
  text-primary-light: "#14171a"
  text-secondary-light: "#494f4e"
  status-active-light: "#8f570a"
  status-complete-light: "#157a3d"
typography:
  display:
    fontFamily: "Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Overpass, sans-serif"
    fontSize: "clamp(1.6rem, 3.2vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Overpass, sans-serif"
    fontSize: "0.95rem — 1.3rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Overpass, sans-serif"
    fontSize: "0.82rem — 1.05rem"
    fontWeight: 400
    lineHeight: 1.4 — 1.55
  label:
    fontFamily: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
    fontSize: "0.7rem — 0.95rem"
    fontWeight: 500
    letterSpacing: "0.04em — 0.06em"
rounded:
  sm: "5px"
  md: "6px"
  lg: "10px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.25rem"
  lg: "1.75rem"
  xl: "3rem"
components:
  tile:
    backgroundColor: "{colors.panel-dark}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.lg}"
    padding: "1.75rem"
  tile-active:
    backgroundColor: "{colors.panel-dark}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.lg}"
    padding: "1.75rem"
  button-primary:
    backgroundColor: "{colors.status-active}"
    textColor: "#16130a"
    rounded: "{rounded.lg}"
    padding: "0.8rem 1.4rem"
  status-badge-complete:
    backgroundColor: "rgba(62, 207, 110, 0.12)"
    textColor: "{colors.status-complete-strong}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.6rem"
  status-badge-active:
    backgroundColor: "rgba(232, 163, 61, 0.12)"
    textColor: "{colors.status-active-strong}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.6rem"
  skill-tag:
    backgroundColor: "{colors.console-ground}"
    textColor: "{colors.text-secondary-dark}"
    rounded: "{rounded.md}"
    padding: "0.4rem 0.7rem"
---

# Design System: Fahad Ali — Portfolio

## Overview

**Creative North Star: "The Burn-In Dashboard"**

The page reads as a live burn-in/validation console — the screen a hardware validation engineer watches while stress-testing a fleet before deployment, repurposed to present a career. A grid of status tiles carries the content: experience, projects, education, and skills each render as one or more panels bearing a status badge (CURRENT, ACTIVE, COMPLETE), monospace metadata, and — where it's earned by real numbers — a stat-readout row. The world is near-black by default, quiet at rest, and reserves its one warm accent (amber) for exactly one thing: whatever is currently live. Everything else is muted gray-green success or idle gray, never decorative.

This is explicitly not the generic hero-plus-card-grid portfolio, and it refuses invented dashboard flourish for its own sake: there is no sparkline, gauge, or chart standing in for a number that isn't real. The single animated flourish — HeroField's faint grid of pulsing status dots behind the headline — uses the same three status colors as the tiles and fades via a radial mask so it never competes with the name it sits behind. The hero itself was pared back this round to name, role, an inline location tag, and the CTA/social row only — the summary paragraph and a separate status-key legend that used to sit beneath it were both removed; the tile grid now teaches its own color coding directly, with no separate legend component.

**Key Characteristics:**
- Near-black console ground with three-state status color coding (idle gray / active amber / complete green), consistent across dark and light themes
- Monospace (JetBrains Mono) for every piece of system/meta data — dates, stats, tags, status badges, nav mark; a warm humanist sans (Overpass) for names, headings, and body prose
- Flat panels with a single hairline border and one ambient shadow; the current-role/current-status tile gets a one-time "power-on" animation and a sustained amber glow that no other tile inherits
- Every section is literally named (Experience/Skills/Projects/Education/Contact) — the tile grammar carries the identity, not invented flavor copy or kickers

## Colors

Two hues carry meaning; everything else is neutral gray. The palette is nearly monochrome at rest, so the status-color pair reads immediately when it appears.

### Primary
- **Signal Amber** (`#e8a33d`, strong `#f3bd66`): the single warm accent — the current-role/active-project tile, hero CTA, hero role label, hero-field pulse dots, stat numbers, focus outline, and text selection. Reserved for "this is active/live/current," never used decoratively.

### Secondary
- **Validated Green** (`#3ecf6e`, strong `#6bdb8f`): the "complete/passed validation" signal — status badges on finished roles, shipped projects, and finished education.

### Tertiary
- **Idle Gray** (`#6a6a66`): the un-highlighted history state — used sparingly, mainly in the hero-field dot field as the majority (non-signal) dot color.

### Neutral
- **Console Ground** (`#121212`, dark default `body`/`.App` background): the base surface everything sits on.
- **Raised Panel** (`#17181a`, `--panel`): every tile/card background — one step lighter than ground.
- **Sunken Well** (`#0c0c0c`, `--bg-sunken`): project-card and featured-tile image/media placeholder background, one step darker than ground.
- **Hairline Border** (`#2b2c2e` default, `#3a3b3d` strong/hover): the only border color in the system; strong variant appears only on hover.
- **Primary Text** (`#f3f3f0`): headings and names.
- **Secondary Text** (`#b6b6b1`): body copy, descriptions, org/role lines.
- **Tertiary Text** (`#8c8b85`): dates, stat labels, footer, location tag, least-emphasis metadata.
- **Cool Paper** (light theme background, `#eceeee`): a deliberately cool neutral gray, corrected mid-build from a warmer cream specifically to avoid a "generic AI-generated portfolio" look. This is a confirmed, load-bearing choice — do not warm it back up.

### Named Rules
**The One Amber Rule.** Amber (`--accent-active`) marks exactly one thing at a time: whatever is presently live (current role, active project, primary CTA). It never appears as generic decoration or a second "also important" accent.

**The Status-Color-Only Rule.** Color communicates status (idle/active/complete), not brand decoration or arbitrary variety. If a new element isn't reporting a state, it stays neutral.

## Typography

**Display/Body Font:** Overpass (self-hosted variable woff2, weights 100–900), falling back to the system UI sans stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif`).
**Label/Mono Font:** JetBrains Mono (self-hosted variable woff2), falling back to `SFMono-Regular, Consolas, monospace`.

**Character:** A confident geometric-humanist sans for names and prose, paired with a mono face for every piece of data the console "reads out" — dates, host counts, tags, status badges. The pairing is the entire mechanism that makes the dashboard metaphor legible: mono = machine-reported fact, sans = human-authored statement.

### Hierarchy
- **Display** (weight 800, `clamp(2.75rem, 7vw, 5.25rem)`, line-height 1.02, letter-spacing -0.03em): the hero name only.
- **Headline** (weight 700, `clamp(1.6rem, 3.2vw, 2.1rem)`, letter-spacing -0.015em): section headings (Experience, Skills, Projects, Education, "Let's talk").
- **Title** (weight 700, 0.95–1.3rem): tile/card titles — role/school/project names. Featured project tiles sit at 1.2rem, compact experience tiles at 1.3rem, compact project-grid cards at 0.95rem — the same weight and family scaled down as density increases.
- **Body** (weight 400, 0.82–1.05rem, line-height 1.4–1.55): descriptions, bullet copy, "What I learned" lines, contact copy (max ~46–52ch), tightening toward the smaller end in the denser compact project-card grid.
- **Label** (mono, weight 500–600, 0.7–0.95rem, letter-spacing 0.04–0.06em, uppercase for status badges and group labels): dates, stat values/labels, status badges, skill tags, nav mark, footer.

### Named Rules
**The Mono-Reports-Data Rule.** Any value that reads as a fact the system observed — a date range, a count, a tag, a status word — renders in JetBrains Mono. Overpass is reserved for names, headings, and authored prose. Never mix the two roles.

## Layout

Single scrolling page, anchor-linked from a sticky top bar (`Experience / Skills / Projects / Education / Contact`). Content sits in a `1180px` max-width container (`--container-width`) with `1.5rem` horizontal padding (`--container-padding`), centered.

Sections use fluid vertical rhythm via `clamp()` (`clamp(1.75rem, 4vw, 3rem)` per section, tighter on the first section so the tile grid is visible near the first viewport — this was a confirmed finish-review fix, not incidental). The hero is now deliberately minimal (name, role + inline location tag, CTA/social row) so it clears quickly into content.

Grids are explicit, and asymmetry is used only where the content still justifies it. Experience is now a uniform 12-column grid where **both** the current and past role tiles span the full 12 columns as stacked full-width rows, current role on top — the earlier 8/4 (large/regular) split was removed in favor of equal-width stacked tiles. Skills uses a 3-column label/tag grid (1 column under `720px`). Projects opens with a 2-column featured-project row (both tiles now carrying a media header image, `.featured-grid` using plain `grid` with default stretch since both tiles' content is comparably rich), then a 4-column grid of smaller project cards (2 columns under `900px`, 1 column under `520px`). Education is a single centered tile capped at `640px`.

Within both the featured tiles and the compact project-card grid, internal rows (title, description, "What I learned") carry explicit `min-height` values (in `em`, tied to each element's own font-size) so equivalent rows land at the same y-position across a grid of cards with varying text length — a deliberate readability fix, not incidental. Card/tile bodies are flex columns with the Code/Live link row pinned to the bottom via `margin-top: auto`, so the link row bottom-aligns consistently regardless of content length above it.

The top bar is sticky, blurred (`backdrop-filter: blur(10px)`), and collapses its inline nav to a hamburger toggle under `720px`, expanding a stacked mobile menu with divider rules between links.

## Elevation & Depth

Flat panels at rest with one shared ambient shadow (`--shadow-panel`), not a multi-tier elevation scale. Depth is conveyed by border color and a single accent glow, not by shadow height — this is a console, not a stack of physical cards.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 2px 10px -4px rgba(0,0,0,0.4)`, light theme: `0 2px 10px -6px rgba(23,24,26,0.12)`): the resting shadow on every tile, card, and the top bar's blurred backdrop.
- **Active Glow** (`box-shadow: 0 10px 32px -8px rgba(232,163,61,0.35)`, light theme: `0 10px 28px -10px rgba(168,102,12,0.25)`): layered on top of Panel, exclusive to the current/active-status tile and the hero CTA hover/rest state. Signals "this is live" the same way the amber color does.

### Named Rules
**The Glow-Is-Status Rule.** The amber box-shadow glow is not a generic hover embellishment — it only ever appears on the one currently-live tile and the primary CTA (which shares the tile's visual language). A second simultaneous glow would contradict the "one thing is live" premise.

## Shapes

Rounded rectangles throughout, one consistent radius scale, no sharp corners and no pill shapes except status badges/tags.

- **Tile/panel/button radius** (`10px`, `--tile-radius`): every tile, card, and the primary CTA.
- **Small control radius** (`10px`): theme/nav toggle buttons, matching the tile radius exactly (grown this round from an earlier 36px/8px pairing to 44px/10px specifically to align with `--tile-radius` and improve the touch target).
- **Skill tag radius** (`6px`).
- **Status badge radius** (`5px`): the small uppercase status pills in the corner of each tile.
- **Border weight:** a consistent `1px` hairline (`--tile-border-width`) on every bordered surface — tiles, project cards, skill tags, top bar bottom edge. No heavier or double borders anywhere in the system.

## Components

### Buttons
- **Shape:** `10px` radius, matching the tile radius exactly — this was a confirmed finish-review fix so the CTA reads as "one more tile-family object," not a generic pill.
- **Primary (hero CTA / "Email me"):** amber background (`--accent-active`), near-black text (`#16130a`), `1px` border in the stronger amber tone, Panel shadow at rest.
- **Hover / Focus:** CTA lifts `-1px` and gains the Active Glow shadow; focus-visible uses a `2px` amber outline with `2px` offset site-wide.
- **Secondary (social/GitHub/LinkedIn/Code/Live links):** plain text links in tertiary/secondary gray, transitioning to primary text color on hover — no border, no fill.

### Tiles (signature component)
The core unit of the whole system. Every content block — a job, a project, a degree — is a `Tile`: a bordered rounded panel with an optional absolute-positioned status badge in the top-right corner (`CURRENT` amber / `ACTIVE` amber / `COMPLETE` green), entering with a staggered fade-and-rise reveal on scroll (`opacity 0→1`, `translateY(14px→0)`, `700ms`, staggered per-tile delay via `--reveal-delay`).

Tiles now support an optional `media` header: a `.tile-media` block (16:8 aspect ratio, `overflow: hidden`, clipped to the tile's own border-radius) bleeds edge-to-edge above the content, which now lives in a `.tile-body` padding wrapper (`1.75rem`, flex column, `height: 100%`) rather than padding sitting directly on `.tile`. Both featured project tiles currently use this to show a composed logo-collage image; not every tile carries media — Experience and Education tiles remain text-only.

**Distinctive behavior:** a tile with `status="active"` additionally plays a one-time `tile-power-on` keyframe animation on reveal (border-color and box-shadow ramp through a brighter mid-point before settling, with a `brightness(1.1)` flash at 62%) and keeps a sustained amber-tinted border and Active Glow shadow afterward. No other tile status gets this treatment — it is reserved for the currently-live tile(s) alone, reinforcing "this one is live" without adding a second color.

All motion respects `prefers-reduced-motion`: reveal/power-on animation and transition are suppressed to an instant border-color-only transition.

### Chips / Tags
- **Style:** mono font, `1px` hairline border, `6px` radius, transparent/ground background, secondary-gray text. Used for skills, project tech tags, and coursework — always plural, never a single isolated chip.
- **State:** static/informational only — no selected/unselected toggle state exists in the shipped system.

### Cards (Compact Project Cards)
- **Corner Style:** `10px` radius, matching tiles.
- **Background:** Raised Panel; image area sits on Sunken Well until the image loads.
- **Shadow Strategy:** none at rest beyond the border; only the border brightens (`panel-border` → `panel-border-strong`) on hover — cards are quieter than tiles, correctly signaling they're a denser, secondary grid.
- **Border:** `1px` hairline, matching tile border.
- **Internal Padding:** `1rem` card body, `16:10` aspect-ratio image crop above it.
- **Title:** `<h3>`, consistent with the featured tiles' `<h3>` titles under the shared `<h2>Projects</h2>` — the earlier `<h4>` on compact cards was a heading-hierarchy inconsistency, now fixed.
- **"What I learned" line:** every card that has a `learned` field in its data renders a bordered-off (featured tiles) or inline (compact cards) "What I learned:" paragraph after the description/bullets — `<span>What I learned:</span>` in primary text weight, remainder in secondary. Compact cards reserve `min-height` on this row for grid alignment; featured tiles do not (their row is bordered-top instead and sits at a larger font).

### Navigation
Sticky top bar, blurred translucent background over the console ground, mono wordmark, plain-text section links (secondary gray → primary text on hover), circular icon-button toggles (theme + mobile nav) in `44px` squares with `10px` radius and hairline border (grown this round from `36px`/`8px` to meet touch-target sizing and align exactly with the tile radius scale). Collapses to a hamburger below `720px`, opening a stacked full-width link list with divider rules — no slide/overlay animation beyond the existing reveal system.

### Hero Location Tag
A small inline tag (`FaMapMarkerAlt` icon + city/region text, tertiary gray, `0.8rem`) sitting inline with the mono role label via `.hero-role { display: flex; align-items: baseline; gap: 0.75rem; }`. Reads as a secondary, lower-emphasis fact next to the role — not a badge, no border or background.

## Do's and Don'ts

### Do:
- **Do** reserve amber exclusively for "currently live" — the current/active tile(s), one CTA, never a second simultaneous decorative accent.
- **Do** render dates, counts, tags, and status words in JetBrains Mono; render names and prose in Overpass.
- **Do** give every tile a `1px` hairline border and the shared Panel shadow at rest; let border-color and the Active Glow — not added shadow layers — communicate emphasis.
- **Do** keep the light theme's background a cool neutral gray (`#eceeee`), not a warm cream — this was a corrected defect, not a stylistic option to revert.
- **Do** respect `prefers-reduced-motion` on every animated element (tile reveal, power-on keyframe, hero-field pulse, smooth scroll).
- **Do** reserve `min-height` row alignment for grids of repeating cards with variable text length (project cards, featured tiles) — it is a legibility fix, not a general layout habit to apply everywhere.

### Don't:
- **Don't** add a second glowing/animated tile alongside the currently-live tile(s); the power-on animation and sustained glow are reserved for the "active" status only.
- **Don't** introduce a decorative chart, gauge, or sparkline to imply a trend that isn't backed by a real number — the floor explicitly rejected a fake trend line in favor of the real stat-readout row.
- **Don't** give buttons a pill/fully-rounded shape; every interactive surface shares the tile family's `10px` radius.
- **Don't** add drop shadows heavier than the two-tier Panel/Active Glow vocabulary; this system stays flat-with-one-glow, not a layered card stack.
- **Don't** reintroduce a hero summary paragraph or a separate status-key legend component; both were deliberately removed to keep the hero to name/role/location/CTA and let the tile grid teach its own color coding directly.
