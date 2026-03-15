# Design System Rules

## TWO DISTINCT THEMES — Never Mix Them

### SHOP SITES (Dynamik + Radikal) — Luxury White/Cream
Inspired by vespa.com, piaggio.com, Porsche configurator. Vehicle IS the hero.

| Token | Value | Usage |
|---|---|---|
| Page bg | `#ffffff` | Body background |
| Section alt | `#fafaf8` | ReviewCards section |
| Section cream | `#f5f4f0` | Hero + BookingForm |
| Card bg | `#ffffff` | All cards |
| Card border | `#e8e3d8` | All card borders |
| Card shadow | `0 1px 4px rgba(0,0,0,0.05)` | Subtle lift |
| Input border | `#ddd8cc` | Form fields |
| Text primary | `#0a0a0a` | Headings |
| Text body | `#1a1a1a` | Paragraph text |
| Text dim | `#555` | Secondary text, labels |
| Text muted | `#888` | Metadata, hours, address |
| Footer bg | `#1a1a1a` | Dark luxury anchor |
| Dynamik accent | `#2563eb` | Blue (unchanged) |
| Radikal accent | `#9e8a5a` | Muted Hermès-tier gold |
| Stars | `#9e8a5a` | Review stars (both shops) |
| Navbar bg | `rgba(255,255,255,0.92)` | Frosted glass |
| Navbar border | `#e8e3d8` | Bottom border |

**Fonts (shop only):**
- Headings (h1, h2, section headers): `var(--font-cormorant), Georgia, serif` — weight 300
- Body: DM Sans (inherited, unchanged)
- Font variable set in layout: `Cormorant_Garamond({ weight: ['300','400','600'], variable: '--font-cormorant' })`

**⛔ OLD DARK RULE RETIRED for shop sites:**
- Do NOT use `#0f0f1a`, `#161625`, `#1e1e35`, `#a0a0b8` on shop pages
- GlassCard is NOT used on shop pages — use plain divs with inline card styles
- SectionHeader on shop pages MUST pass `textColor="#0a0a0a"` and `headingStyle` with Cormorant

---

### EXAM APP — Dark Navy (unchanged)
| Token | Value |
|---|---|
| Background | `#0f0f1a` |
| Card | `#161625`, border `1px solid #1e1e35` |
| Gold CTA | `#D4AF37`, text `#1a1a2e` |
| Text primary | `#e8e8f0` |
| Text mid | `#a0a0b8` |
| Text dim | `#6b6b80` |
| Exam accent | `#16a34a` (green) |

---

## ⛔ BANNED COLORS (both themes)
Never use: pink, purple, pastel, rose, fuchsia, violet, lavender, magenta.

## Section Alternation Pattern (Shop)
1. Hero → `#f5f4f0` cream gradient
2. Services → `#ffffff` white
3. PoliceTrust → navy gradient (dark chapter break — Radikal only)
4. Reviews → `#fafaf8` warm off-white
5. About → `#ffffff` white
6. Booking → `#f5f4f0` cream
7. Footer → `#1a1a1a` dark luxury anchor

## Mobile First
- Design for 375px minimum width
- Touch targets: minimum 44px height for buttons
- Use `flexWrap: 'wrap'` for horizontal layouts
- `clamp()` for responsive font sizes

## Inline Styles Rule
Inline styles preferred over Tailwind for hex colors to guarantee no purge.
