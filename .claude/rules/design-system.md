---
glob: "**/*.tsx, **/*.css"
---

# Design System Rules

## Approved Colors Only
- Background: `#0f0f1a`
- Card: `#161625` with `1px solid #1e1e35`, `border-radius: 12px`
- Gold CTA: `bg-[#D4AF37]` or `background: '#D4AF37'`, text `#1a1a2e`, `font-weight: 800`
- Gold secondary: `background: '#D4AF3715'`, `border: '1px solid #D4AF3780'`, `color: '#D4AF37'`
- Text: `#e8e8f0` (primary) · `#a0a0b8` (mid) · `#6b6b80` (dim)
- Dynamik accent: `#2563eb` (blue)
- Radikal accent: `#D4AF37` (gold)
- Exam accent: `#16a34a` (green)

## ⛔ BANNED COLORS
Never use: pink, purple, pastel, rose, fuchsia, violet, lavender, magenta.
No Tailwind `pink-*`, `purple-*`, `violet-*`, `rose-*`, `fuchsia-*`.

## Component Patterns
- Use `GlassCard` (`src/components/ui/GlassCard.tsx`) for all card containers
- Use `SectionHeader` for label + heading combos (11px uppercase label ABOVE bold heading)
- Use `CTAButton` for all CTA links and buttons — never raw `<a>` or `<button>` for CTAs
- Inline styles are preferred over Tailwind for hex colors to guarantee no purge

## Font
- DM Sans via `next/font/google` — variable: `--font-dm-sans`
- Weights: 400, 500, 600, 700, 800
- Always pass `fontFamily: 'inherit'` to button/input elements

## Mobile First
- Design for 375px minimum width
- Touch targets: minimum 44px height for buttons
- Use `flexWrap: 'wrap'` for horizontal layouts that must collapse on mobile
- `clamp()` for responsive font sizes: `fontSize: 'clamp(22px, 5vw, 36px)'`

## Service Icon Squares
Colored background squares for service cards:
- Blue: `#2563eb15` | Green: `#16a34a15` | Teal: `#0d948815`
- Gold: `#D4AF3715` | Steel: `#64748b15` | Navy: `#1e3a5f20` | Orange: `#c2410c12`
