# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Arman Sheikhhosseini (Cloud and DevOps Engineer), built with Astro and
Tailwind CSS v4. The design is "technical editorial": magazine-style layout discipline (large display
type, generous whitespace, hairline rules instead of cards) with monospace used only for metadata.
All content lives in a single configuration file.

## Tech Stack

- **Astro**: Static site generator, zero client framework
- **Tailwind CSS v4**: via the `@tailwindcss/vite` plugin
- **TypeScript**: for the typed content config

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

- **Components** (`src/components/`): `Header`, `Hero`, `About`, `Projects`, `Experience`,
  `Credentials` (education + certifications), `Footer` (also the contact section)
- **Page** (`src/pages/index.astro`): single page that composes all components, plus SEO/OG tags,
  JSON-LD, the no-flash theme script, and the scroll-reveal observer
- **Configuration** (`src/config.ts`): single source of truth for all content
- **Design system** (`src/styles/global.css`): tokens, typography scale, and shared classes

### Key Architectural Decisions

1. **Single configuration file**: all copy is in `src/config.ts`; components never hardcode content
2. **Conditional rendering**: sections hide themselves when their config data is empty
3. **Token-driven theming**: light and dark palettes are CSS custom properties; `siteConfig.accentColor`
   is injected as `--accent-base` on `<html>` and lightened automatically for dark mode via `color-mix`
4. **Performance budget**: no animation loops. The only JS is the theme toggle, the mobile menu, a
   nav scroll-spy, and a one-shot `IntersectionObserver` that unobserves each element after revealing
   it. Scroll progress is pure CSS (`animation-timeline: scroll()`)

## Styling Rules — read before editing CSS

- **Cascade layers matter.** Shared classes in `global.css` are wrapped in `@layer base` and
  `@layer components` so Tailwind utilities still win when applied to the same element. Keep new
  shared classes inside those layers.
- **Astro scoped styles are unlayered**, which means they beat *every* Tailwind utility regardless of
  specificity. Do not use utilities like `md:hidden` on an element whose `display` is also set in a
  component `<style>` block — handle it with a media query in that same scoped block instead (see the
  responsive rules at the bottom of `Header.astro`).
- Within a scoped block, later rules win over earlier ones at equal specificity — put responsive
  overrides after the base rule they modify.

## Design Tokens

Defined in `src/styles/global.css`:

- Colour: `--bg`, `--bg-elev`, `--ink`, `--ink-2`, `--muted`, `--hairline`, `--hairline-soft`,
  `--accent`, `--accent-contrast`, `--accent-wash`
- Fonts (registered in `@theme`): `--font-display` (Instrument Serif), `--font-sans` (Inter),
  `--font-mono` (IBM Plex Mono)
- Shared classes: `.wrap`, `.section`, `.section-head`, `.section-index`, `.display`, `.h2`, `.h3`,
  `.lede`, `.eyebrow`, `.meta`, `.prose-body`, `.tag`, `.btn`, `.link`, `.row`, `.bullet`, `.reveal`

Dark mode is applied in two places that must stay in sync: `:root[data-theme="dark"]` (explicit
choice, persisted in `localStorage`) and `@media (prefers-color-scheme: dark)` scoped to
`:root:not([data-theme="light"])` (system default).

## Configuration Structure

`src/config.ts` exports `siteConfig`:

- Basic: `name`, `title`, `description`, `tagline`, `yearsExperience`, `accentColor`, `cvUrl`
- `social`: `email`, `phone`, `location`, `linkedin`, `twitter`, `telegram`, `github`, `website`
- `aboutMe`: string
- `highlights`: `{ value, label }[]` — the stat strip under the hero
- `skills`: `{ group, items[] }[]` — rendered as a definition list, not chips
- `projects`: `{ name, description, link, skills[] }[]`
- `experience`: `{ company, title, dateRange, location, metrics[], bullets[] }[]`
- `education`: `{ school, degree, dateRange, note }[]`
- `certifications`: `{ name, issuer, year }[]`
- `languages`: `{ name, level }[]`

## Content Accuracy

Site copy mirrors the CV in `public/` — `ARMAN_SHEIKHHOSSEINI_CV.pdf`, its plain-text twin
`ARMAN_SHEIKHHOSSEINI_Resume.txt`, and the LaTeX source `main.tex`. When experience, skills, or
certifications change, update the config **and** those three files so they do not drift apart.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to
`main`. Pages is configured with `build_type: workflow` — do not switch it back to "deploy from a
branch" or GitHub will also run its legacy Jekyll builder, which fails on this project.
