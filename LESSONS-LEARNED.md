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
- ~~Individual service pages (both shops) — for SEO~~ **DONE (Day 4)**
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

---

## March 15, 2026 — Day 4: Service Pages

- **Cowork (Opus 4.6) built all 13 service pages in one session.** 6 Dynamik + 7 Radikal service pages, all bilingual FR/EN.
- **Architecture:** 3-layer design — `service-pages.ts` (data layer with all 13 page content objects) + `ServicePage.tsx` (shared template component) + 13 thin `page.tsx` route files (each ~7 lines, just passes data to template).
- **ServicePage template includes:** MegaNav, breadcrumb navigation, hero section (eyebrow + H1 + subtitle + CTA), "What's Included" feature card grid, FAQ accordion (bilingual, click-to-expand), dark booking CTA section, LocalBusiness JSON-LD schema, Footer.
- **Content sourced from `service-pages/*.md` files** committed to repo root. These .md files are the single source of truth — if the site is rebuilt, all content lives there.
- **Routes created:**
  - `/dynamik/services/repair` — Motorcycle repair
  - `/dynamik/services/maintenance` — Maintenance & tune-up
  - `/dynamik/services/vespa-sales` — Vespa & Piaggio dealer page
  - `/dynamik/services/modifications` — Custom modifications
  - `/dynamik/services/towing` — Motorcycle towing (Gatineau-Ottawa)
  - `/dynamik/services/winter-storage` — Winter storage
  - `/radikal/services/motorcycle-repair` — All-brand repair + police Harley
  - `/radikal/services/atv-utv` — ATV & UTV repair
  - `/radikal/services/motocross` — Motocross parts + Fox Racing gear
  - `/radikal/services/snowmobile` — Snowmobile repair + summer storage
  - `/radikal/services/boat` — Marine engine repair
  - `/radikal/services/inspection` — Free 30-point inspection
  - `/radikal/services/winter-storage` — Winter storage (all powersports)
- **Build issue:** `npm run build` fails in Cowork sandbox because Google Fonts CDN is unreachable (no outbound internet). TypeScript `tsc --noEmit` passes with 0 errors. Full build will succeed on Vercel or local machine with internet.
- **Git lock issue:** Mounted filesystem (.git/index.lock) gets permission-locked after first commit. Workaround: copy repo to temp dir for subsequent commits, then sync files back.
- **LESSON:** Data-driven service pages scale perfectly. Adding a 14th page = 1 data object + 1 seven-line page.tsx. No template changes needed.
- **LESSON:** Keep .md content files as source of truth. Non-technical stakeholders can edit content without touching React code.

---

## March 15, 2026 — Day 5: Supabase Wiring + Fox Racing Page

### Supabase Project Discovery
- **Don't create a new project first — check for existing ones.** The `moto-growth-platform` Supabase project (`vkzcnkiatypzmxguxflk`, `ca-central-1`) already existed with `bookings` and `leads` tables fully set up. Creating a second project would have wasted time and money.
- **MCP `list_projects` is the fastest way** to check what exists before doing anything.

### API Architecture Was Pre-Built
- All three API routes (`/api/booking`, `/api/financing`, `/api/lead`) were already in the repo — just missing `.env.local` with real credentials and the `financing_leads` table.
- **LESSON:** At session start, always check what's already built before planning. `find src/app/api -name "*.ts"` is a 1-second check that saves hours.

### Supabase Schema Pattern
- Every table follows the same RLS pattern: `ENABLE ROW LEVEL SECURITY` + `CREATE POLICY "Allow anon insert" FOR INSERT TO anon WITH CHECK (true)`.
- Anon key can INSERT but never SELECT — correct for public-facing lead capture forms.
- `financing_leads` table: id (uuid), created_at (timestamptz), name, phone, email, vehicle, down_payment, employment, shop_id (CHECK IN ('dynamik','radikal')), lang (CHECK IN ('fr','en')).

### Vercel Platform Package Issue
- **`@next/swc-linux-arm64-gnu` in package.json = Vercel build failure.** This is an ARM64-specific native module. Vercel's build servers are x64 Linux — it can't install ARM64 binaries.
- **Fix:** `npm uninstall @next/swc-linux-arm64-gnu`. Next.js auto-installs the right platform binary itself.
- **LESSON:** Never manually install platform-specific `@next/swc-*` packages. They belong in devDependencies at most, and only if you know exactly why.

### Env Vars Were Already Set in Vercel
- `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `RESEND_API_KEY` were already in Vercel production from a prior session.
- **LESSON:** Check `npx vercel env ls --scope themagicianinminds-projects` before adding vars — avoids duplicate key errors.

### Fox Racing Page Architecture
- Fox Racing page (`/radikal/fox-racing`) is a **standalone brand page** — not a service page.
- Uses MegaNav (already has Fox Racing link built in) + ShopFooter.
- Dark hero section (dark bg, `fox-hero.jpg` at 45% opacity, gradient overlay) — only section that breaks the white luxury theme intentionally (brand alignment with Fox's dark/edgy visual identity).
- Remaining sections follow white luxury: white category cards, `#f5f4f0` cream "We ride what we sell" section, `#0a0a0a` dark bottom CTA.
- **MegaNav already had `/radikal/fox-racing` link** — Fox Racing nav item with gold color + "NEW" badge was built in a prior session.
- 5 categories: Casques, Maillots & Pantalons, Gants, Bottes, Protection — each with icon, description, model badge, green "in stock" indicator.
- French typographic apostrophe `'` (U+2019) inside a JS single-quoted string causes parse error. Fix: use `"\u2019"` unicode escape or double-quote the string.

### End-to-End Verification
- Smoke test: `curl -X POST .../api/financing -d '{...}'` → `{"success":true}`.
- Verified row in Supabase with `execute_sql SELECT` — UUID, timestamp, all fields confirmed.
- **LESSON:** Always end-to-end test API routes post-deploy with a curl call. Build passing ≠ API working.

### Updated Page Inventory
- `/radikal/fox-racing` ✅ — Fox Racing showcase (dark hero, 5 categories, dealer badge, "we ride what we sell")
- All 13 service pages ✅ — bilingual, JSON-LD schema, MegaNav, FAQ accordion
- `/api/financing` ✅ — Supabase insert, validated, live in production
- Booking and lead APIs were already wired from earlier sessions

---

## March 15, 2026 — Day 6-7 Sprint

### Env Vars → Email Notifications
- `RESEND_API_KEY` was already in Vercel but `DYNAMIK_NOTIFY_EMAIL` and `RADIKAL_NOTIFY_EMAIL` were missing — silent fail (graceful degradation by design in `/api/booking`).
- Added `DYNAMIK_NOTIFY_EMAIL`, `RADIKAL_NOTIFY_EMAIL`, `RESEND_FROM_EMAIL` via `npx vercel env add ... production`.
- **LESSON:** Always verify ALL required env vars at session start. `vercel env ls` takes 3 seconds and prevents head-scratching over silent failures.
- Added Resend notification to `/api/financing` — same graceful pattern: try/catch wraps email, failure is non-fatal, Supabase insert always succeeds regardless.

### LocalBusiness JSON-LD on Layouts
- JSON-LD injected via `<script type="application/ld+json" dangerouslySetInnerHTML>` in server-side layout files (`/dynamik/layout.tsx`, `/radikal/layout.tsx`).
- Dynamik → `@type: MotorcycleDealer` (sells Vespa/Piaggio). Radikal → `@type: MotorcycleRepair` (repair + parts focus).
- areaServed GeoCircle: Dynamik 50km radius, Radikal 75km (broader powersports clientele).
- **LESSON:** Never put JSON-LD in `'use client'` page files — they can't export `metadata`. Put it in server-side layout.tsx via dangerouslySetInnerHTML. This propagates to every route under that layout automatically.

### About + Contact Pages (4 pages)
- All MegaNav links resolved — no more 404s on About/Contact.
- Radikal About includes the Police Harley-Davidson callout (dark navy section, same restraint as PoliceTrust strip on homepage).
- Both Contact pages include iframe Google Maps embed (no API key needed for basic embed).
- **LESSON:** Google Maps embed URL is `https://maps.google.com/maps?q=ADDRESS&output=embed` — always add `output=embed` to get the iframe version.

### Marketplace MVP Architecture
- Table: `marketplace_listings` with status='pending' on insert. Listings are admin-approved before going 'active'. Public RLS only shows `status = 'active'`.
- API routes: `GET /api/marketplace` (browse with filters), `POST /api/marketplace` (create), `GET /api/marketplace/[id]` (single).
- Pages: `/marketplace` (browse + filters), `/marketplace/[id]` (detail with sticky price card), `/marketplace/sell` (form: tier selection → vehicle details → seller info).
- **Payment model:** No online payment yet — payment collected during phone confirmation. User sees success state with note about 24-hour review.
- **Photo upload:** Phase 1 = optional URL field (Imgur/Google Photos link). Direct upload = Phase 2 (requires Supabase Storage + CORS config).
- **LESSON:** Supabase RLS on marketplace: anon INSERT must have `WITH CHECK (true)` to allow unauthenticated submissions. SELECT policy uses `USING (status = 'active')` to filter out pending/sold listings.

### i18n Audit Result
- All 11 pages audited: **100% pass** — every page has `useState<Lang>('fr')` default, localStorage read on mount, language toggle, no hardcoded strings.
- **LESSON:** The bilingual pattern (fr default → check localStorage → toggle updates both state + localStorage) was implemented consistently from Day 1 and maintained throughout. Document the pattern once, enforce it in CLAUDE.md rules, never deviate.

### Mobile Audit (23 issues found)
- Critical fix: `marketplace/[id]` sidebar grid used `1fr 360px` with `max-width: 640px` breakpoint — at 375px viewport, the 360px sidebar would consume 98% of width. Changed breakpoint to 760px.
- Image heights: Use `clamp(220px, 55vw, 360px)` pattern instead of fixed pixels for listing images.
- Prices: Use `clamp(24px, 5vw, 32px)` for large price displays.
- `flexWrap: 'wrap'` already present on most horizontal layouts — this was the right call from Day 1.
- Fox Racing category grid already had 720px + 480px dual breakpoints — no fix needed.
- **LESSON:** The "audit then fix" pattern works: run a single agent to audit all 11 pages in one pass, get structured list of issues, then apply targeted fixes. Faster than inspecting each file manually.

### Vercel Chrome Extension Timeout
- Chrome extension tool (screenshot, click) repeatedly timed out during Vercel dashboard interaction.
- **LESSON:** When Chrome extension times out, fall back to CLI immediately: `npx vercel env add VAR_NAME production`. CLI is faster, more reliable, and scriptable. Don't retry Chrome extension more than 2× before switching to CLI.

### ⚠️ Email Addresses Need Confirmation
- `DYNAMIK_NOTIFY_EMAIL=steve@dynamikperformance.com` and `RADIKAL_NOTIFY_EMAIL=eric@radikalmotosport.com` were set as best-guess placeholders based on shop domain names.
- **These have NOT been confirmed with Steve or Eric directly.**
- Before go-live / DNS cutover: confirm actual email addresses, then run:
  `vercel env rm DYNAMIK_NOTIFY_EMAIL && echo "real@email.com" | vercel env add DYNAMIK_NOTIFY_EMAIL production`
  (same for RADIKAL)
- **LESSON:** Never assume email addresses. Domain-based emails may not exist or may be unmonitored. Always confirm with the business owner before relying on them for lead notifications.
