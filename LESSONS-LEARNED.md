# LESSONS-LEARNED.md — Motorcycle Growth Platform
# Institutional memory. Append new lessons at the end of every session.
# Format: Date — Category — Lesson
# ⚠️ READ THIS FILE AT THE START OF EVERY SESSION. See Rule 0 in CLAUDE-moto-growth.md.

---

## March 14, 2026 — Design System Overhaul

- **Dark navy design RETIRED for shop sites.** Original CLAUDE.md specified #0f0f1a dark navy for everything. Client showed vespa.com, piaggio.com, and powersports.honda.com as references — all white/cream luxury aesthetic. Dark navy was wrong for shop sites.
- **New shop site palette:** #ffffff (white) / #fafaf8 (off-white) / #f5f4f0 (cream). Text: #0a0a0a / #1a1a1a / #555 / #888.
- **Gold accent changed:** From bright #D4AF37 to muted #9e8a5a (Hermès-tier, not Las Vegas). Bright gold stayed for exam app only.
- **Typography:** Cormorant Garamond (serif for headings — elegant, editorial, Italian luxury) + DM Sans (body — clean, modern). Previously only DM Sans was specified.
- **Pill-shaped buttons:** border-radius: 100px. Matches Porsche/Vespa configurator energy.
- **Exam app stays dark navy (#0f0f1a)** for visual differentiation from shop sites. This creates a clear boundary — shop = premium white, exam = study mode dark.
- **LESSON:** Always study the client's aspirational reference sites BEFORE building. Don't default to a design system from another project.

## March 14, 2026 — Navigation Pattern

- **Horizontal mega-menu is MANDATORY.** First build used minimal vertical nav with a few inline links. Client correctly pointed out every site he showed (Vespa, Piaggio, Honda) uses horizontal top navigation with mega-menu dropdowns.
- **Structure:** Utility bar (phone, address, promo, FR/EN) → Main nav bar (logo, mega-menu links, CTA) → Mega-dropdown on hover (multi-column, featured cards).
- **Mobile:** Hamburger → full-screen nav with section labels.
- **LESSON:** For service/retail business sites, horizontal mega-menu is industry standard. Never default to minimal nav — that's for portfolios and blogs.

## March 14, 2026 — Business Ownership Separation

- **Vespa/Piaggio = Dynamik (Steve) ONLY.** Never show Vespa/Piaggio on Radikal's site.
- **Fox Racing = Radikal (Eric) ONLY.** Never show Fox Racing on Dynamik's site.
- **Police Harley trust signal = Radikal (Eric) ONLY.** Never on Dynamik's site.
- **Both businesses are REPAIR-FIRST.** Repair pays the bills. Everything else (Vespa sales, Fox Racing boutique, parts) layers on top.
- **Steve CTA:** "Réserver" / "Book now" (repair booking focus).
- **Eric CTA:** "Soumission" / "Get a quote" (quote-first flow).
- **LESSON:** These are two separate businesses with different positioning. Crossed wires (showing Vespa on Radikal, etc.) would damage credibility with both brothers.

## March 14, 2026 — Marketplace Addition

- **New feature added mid-sprint:** Marketplace tab for both sites where people can list motorcycles/ATVs for sale (like AutoTrader but local + shop-backed trust).
- **Revenue model:** Option A — Possibilities IN MIND collects listing fees, shops earn inspection/service revenue.
- **Listing tiers:** Standard ($25/30 days), Premium ($50), Certified ($75 + inspection fee to shop).
- **Supabase table:** marketplace_listings with seller info, vehicle details, tier, payment/approval status, shop affiliation, inspection status.
- **LESSON:** Revenue features can be added to the architecture without disrupting the core build if the Supabase schema is designed for it upfront.

## March 14, 2026 — Best Practices from Brand Sites

- **Studied:** vespa.com, piaggio.com, storeusa.vespa.com, powersports.honda.com
- **Product cards must always include:** image, name, category label, price (or "Call for pricing"), dual CTA ("Explore" + "Get Quote").
- **Dual-filter pattern:** For any catalog, filter by CATEGORY + VEHICLE + BRAND simultaneously. Vespa Store USA does category + model. Radikal needs category + vehicle type + brand.
- **Honda Powersports nav pattern:** Products mega-menu shows every model with image + starting price + "Explore" + "Build" CTAs visible in the dropdown.
- **Financing/promotions visible in nav** — not buried on a sub-page.
- **"Find a Dealer" always visible** — for Dynamik, this becomes "Visit Us" since Steve IS the dealer.
- **LESSON:** Study the actual manufacturer sites before building dealer/shop sites. The patterns are proven and customers expect them.

## March 14, 2026 — Piaggio/Vespa Clarification

- Client said "I want their site to look like Porsche or Mercedes but for motorcycles." This was about DESIGN CLASS, not the automobile industry. They don't sell cars.
- Vespa and Piaggio are scooters/motorcycles, not automobiles. The reference was aspirational design quality.
- **LESSON:** Clarify aspirational references before building. "Like Porsche" means luxury UX, not automotive industry.

## March 14, 2026 — Timeline Pressure

- **Summer season in Outaouais is time-sensitive.** Riders buy NOW. Every week without a real site = lost Vespa sales and bookings.
- **2-week hard target (March 28), 3-week buffer (April 4).**
- **DNS cutover from GoDaddy:** Point A record to 76.76.21.21. Plan for Tuesday/Wednesday (not weekend) due to 24-48hr propagation.
- **LESSON:** Seasonal businesses need sites live BEFORE the season starts. The build timeline is driven by revenue timing, not feature completeness.

---

## March 15, 2026 — Image Strategy

### Nano Banana 2: KILLED
- Attempted to generate a brand hero image for Dynamik using Nano Banana 2.
- **Quality was awful.** Not sufficient for brand-level imagery on a premium site.
- **Decision:** Nano Banana 2 is permanently removed from the image toolchain. Do NOT use it for any images.
- **LESSON:** AI image generation quality varies wildly. Test before committing to a tool for brand work. Always have a fallback.

### Vespa/Piaggio CDN Discovery
- Both vespa.com and piaggio.com render client-side (Vue.js SPA) — static HTML fetching returns empty shells.
- Claude Code used Chrome tool to render pages fully and extract actual image URLs.
- **Found CDNs:** `wlassets.vespa.com` and `wlassets.piaggio.com` (Akamai CDN).
- **No hotlink protection.** HTTP 200, fully accessible.
- **Downloaded 8 images** (200KB–760KB each) to /public — self-hosted to avoid broken URLs if CDN cache expires.
- **LESSON:** For JS-rendered brand sites, use a browser tool (not just fetch) to extract real asset URLs. Always self-host downloaded images rather than hotlinking.

### Updated Image Stack
| Source | Use for | Status |
|---|---|---|
| Vespa/Piaggio CDN (wlassets) | Product shots (Dynamik only) | ✅ Done — 8 images |
| Lucide React | Service/UI icons (replace emojis) | ✅ Available in stack |
| Unsplash API (free) | Hero/lifestyle backgrounds, category cards | Use for Radikal |
| Gemini image gen | Marketing pieces, ad creatives, campaigns | Replaces Nano Banana 2 |
| Pompei | Ad campaign management | Uses Gemini-generated assets |
| Real shop photos | Final replacement when provided | Waiting on Steve & Eric |
| ~~Nano Banana 2~~ | ~~Brand imagery~~ | ❌ KILLED |

### Image Sourcing Rules
- Steve can use official Vespa/Piaggio imagery — he's an authorized dealer.
- Download and self-host in /public — never hotlink in production.
- Add images.unsplash.com to next.config remotePatterns if using Unsplash.
- Unsplash requires attribution (photographer name).
- Use Gemini for marketing/campaign visuals, NOT for product shots on the site.

---

## March 15, 2026 — Day 1-2 Sprint Results

### What Was Built
- **Shared design system:** MegaNav (utility bar + mega-dropdown + mobile hamburger), Footer (4-column dark luxury), StatsStrip (4-column navy with Cormorant serif), ServiceCard (hover-animated with accent color)
- **Updated components:** SectionHeader (+ subtitle, cta, centered props), LanguageToggle (pill-shaped, light/dark theme prop)
- **Dynamik homepage:** 9 sections — hero (split layout), stats, services, Vespa showcase, model cards, about Steve, booking CTA, reviews, booking form
- **Radikal:** About Eric section (portrait placeholder, Police HD + Fox Racing badges, quote, bio)

### What Claude Code Built That Wasn't Spec'd
- **Financing section with OPC compliance** — TD Auto, Desjardins, LendCare with legal disclaimers referencing Loi sur la protection du consommateur (RLRQ c P-40.1). Full Quebec consumer protection compliance.
- **Pre-qualification form** — name, phone, email, vehicle selection, down payment range, employment status. Real financing lead funnel.
- **Hours of operation** on both sites (Lun–Ven 8h–17h · Sam 9h–14h).
- **LESSON:** A well-written CLAUDE.md with business context enables Claude Code to infer and build features that weren't explicitly spec'd but make business sense. The financing section is a major Vespa sales conversion tool.

---

## March 15, 2026 — Day 3 Sprint Results

### Radikal Full Homepage (13 sections)
- Dark cinematic hero with hero.jpg at 45% opacity + deep gradient + gold CTAs + trust badges
- Police Harley trust strip (navy, "Assez fiable pour la police")
- StatsStrip (11+ brands, 6 vehicle types, Fox Racing dealer, Free inspection)
- Services grid (6 cards)
- Vehicle categories (6 visual cards with image overlays — motos, ATV, motocross, snowmobile, marine, inspection)
- Fox Racing showcase (2-col layout, fox-gear.jpg, Fox orange branding, 4 feature tiles, authorized dealer badge)
- Parts categories (8 tiles)
- Brands bar (11 brand pills)
- Reviews (3 verified)
- About Eric (with Police/Fox/Powersports badges)
- BookingForm
- Dark booking CTA (navy gradient, radial gold glow)
- Footer

### Dynamik /vespa Page
- Hero with cream gradient + official dealer badge
- 3 alternating model cards (Sprint / Primavera / GTS) — hero image, description, 5-spec grid, starting price, dual CTA
- "Why Buy From Us" — 5 trust point cards + blue contact strip with phone
- Fully responsive (720px breakpoint)

### Unsplash Images for Radikal
- Used for hero background and vehicle category card images
- Downloaded to /public/images/ and self-hosted

---

## March 15, 2026 — Complete Page Inventory (What's Actually Live)

### Root
- `/` — Landing page (shop selector: Dynamik, Radikal, Exam)

### Dynamik (/dynamik)
- `/dynamik` — Full homepage (15+ sections including financing + pre-qual form)
- `/dynamik/vespa` — Full Vespa range page (3 models + specs + trust section)
- `/dynamik/vespa/sprint` — Individual model page (linked)
- `/dynamik/vespa/primavera` — Individual model page (linked)
- `/dynamik/vespa/gts` — Individual model page (linked)
- `/dynamik/about` — (linked in nav)
- `/dynamik/contact` — (linked in nav)
- `/dynamik/promotions` — (linked in nav)
- `/dynamik/marketplace` — (linked in nav)

### Radikal (/radikal)
- `/radikal` — Full homepage (13 sections)

### Exam (/exam)
- `/exam` — 50 QC SAAQ questions, bilingual, TTS audio

### Still Need Building
- Individual service pages (both shops) — for SEO
- Booking/quote forms wired to Supabase
- Radikal /fox-racing page
- Radikal /parts page
- Marketplace pages (/marketplace, /marketplace/sell, /marketplace/[id])
- Schema markup (LocalBusiness JSON-LD)
- Radikal sub-pages (about, contact, promotions)

---

## Patterns & Anti-Patterns

### DO
- Read CLAUDE-moto-growth.md + BUILD-PLAN + LESSONS-LEARNED.md at session start
- Download and self-host external images (never hotlink in production)
- Use Lucide React icons (not emojis) for service cards and UI
- Build one component at a time, npm run build between each
- French default on every page (OQLF / Bill 96)
- Test at 375px mobile width
- Commit with descriptive messages after each step

### DON'T
- Don't use Nano Banana 2 (killed for poor quality)
- Don't use dark navy background on shop sites (white luxury is the standard)
- Don't use minimal/vertical navigation (horizontal mega-menu mandatory)
- Don't show Vespa/Piaggio on Radikal or Fox Racing on Dynamik
- Don't skip LESSONS-LEARNED.md at session start
- Don't assume features from Sovereign Self™ Portal apply here (separate project)
- Don't tell the user to do manual browser steps
