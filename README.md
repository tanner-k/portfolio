# Portfolio

Static site. Astro + Tailwind 4, no client framework.

## Commands

| Command | What |
|---|---|
| `npm run dev` | Dev server on :4321 |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the built output |

## Adding content

**A project:** drop a `.md` file in `src/content/projects/`. It appears on `/work`,
the home page, and the marquee automatically. Frontmatter schema is in
`src/content.config.ts` — the build fails loudly if a field is missing or wrong.

**A post:** drop a `.md` file in `src/content/posts/`. Set `draft: true` to keep it
off the index while you work on it.

Filename becomes the URL slug.

## Design tokens

All colors live as CSS custom properties at the top of `src/styles/global.css`,
with a dark-mode block right below. Change them there, not in components.
Tailwind utilities (`bg-bg`, `text-ink`, `border-line`, `text-accent`) map to them.

## The three motion effects

1. **Scroll reveal** — add `class="reveal"` to any element. Pure CSS
   (`animation-timeline: view()`), runs off the main thread. Firefox doesn't
   support it, so the rule is wrapped in `@supports` and those visitors just see
   the content with no fade. Nothing breaks.
2. **Cursor glow** — add `class="cursor-glow"` to a `relative overflow-hidden`
   container. The listener lives in `src/layouts/Base.astro`.
3. **Marquee** — `src/components/Marquee.astro`. Pads short lists so a single
   project still fills the width; delete the padding once there are 6+ projects.

All three are off under `prefers-reduced-motion: reduce`.

## Colour system

Ten tokens, defined once in `src/styles/global.css`:

| Token | Job |
|---|---|
| `bg` / `surface` / `surface-alt` | Three background depths: page, cards, tinted bands |
| `ink` / `ink-muted` / `line` | Text and structure |
| `primary` / `primary-soft` | Lead colour and its tint — CTAs, links, panels |
| `secondary` / `secondary-soft` | Supporting colour and its tint — tags, labels, marquee |

Use the Tailwind utilities (`bg-surface-alt`, `text-primary`,
`bg-secondary-soft`) rather than raw hex anywhere in a component.

## Choosing a palette (temporary)

`src/styles/themes.css` holds two alternates, `/palette` shows every token as a
swatch with live hex values, and `ThemeSwitcher.astro` renders the picker.

| Palette | Ground | Primary | Secondary |
|---|---|---|---|
| Ink (default) | Off-white | Blue | Graphite |
| Grove | Ivory | Deep forest green | Walnut brown |
| Harvest | Cream | Walnut brown | Olive |

Once you've picked: copy the winning values into `:root` and the dark-mode
block in `global.css`, then delete `themes.css`, `ThemeSwitcher.astro`,
`src/pages/palette.astro`, the import in `global.css`, and the two references
in `Base.astro`.

## Gotchas

- `prose-measure` caps line length at 34rem. Body text should stay inside it.
- The marquee is `aria-hidden` on purpose — it duplicates links that already
  exist on the page, so screen readers skip it.
- Search the repo for `TODO` before publishing. The copy is placeholder.

## Deploying (not set up yet)

No git remote, no CI. When ready: push to GitHub, add a Pages workflow, set
Settings → Pages → Source to GitHub Actions. Pages on a **private** repo needs
GitHub Pro; a public repo is free.
