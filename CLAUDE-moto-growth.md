# CLAUDE.md — Motorcycle Growth Platform Rules
# Updated: March 14, 2026 (evening — post Day 1-2 sprint)

# ============================================================
# PROJECT IDENTITY
# ============================================================
# Project: Motorcycle Growth Platform (moto-growth-platform)
# Owner: Alain Jean-Baptiste / Possibilities IN MIND™ (6702724 Canada Inc.)
# GitHub: github.com/Themagicianinmind/moto-growth-platform
# ⚠️ THIS IS NOT THE SOVEREIGN SELF™ PORTAL. Separate repo, separate Vercel, separate everything.
# Stack: Next.js (upgraded to 16.1.6) + TypeScript + Tailwind CSS
# Hosting: Vercel (edge) — project name: moto-growth-platform
# Live: https://moto-growth-platform.vercel.app
#   /dynamik  — Steve's site
#   /radikal  — Eric's site
#   /exam     — Exam-prep app
# DNS rewrites ready: dynamikperformance.com → /dynamik, radikalmotosport.com → /radikal
# DNS cutover: Point A record to 76.76.21.21 when ready
# Backend (Phase 2): Supabase (own project, NOT sovereign-self Supabase)
# Email (Phase 2): Resend

# ============================================================
# DEPLOYMENT STATUS — WHAT'S LIVE (Updated March 15, 2026 — Day 6-7)
# ============================================================
# ✅ Dynamik homepage + /vespa page
# ✅ Radikal homepage + /fox-racing page
# ✅ Exam app — 50 QC SAAQ questions, bilingual, TTS
# ✅ 13 service pages — all routes + shared ServicePage template (bilingual)
# ✅ About + Contact pages — both shops (4 pages, 0 404s)
# ✅ Supabase backend — bookings, leads, financing_leads, marketplace_listings tables
# ✅ API routes — /api/booking, /api/financing, /api/lead, /api/marketplace, /api/marketplace/[id]
# ✅ Resend email notifications — booking + financing (all 4 env vars set in Vercel)
# ✅ LocalBusiness JSON-LD — MotorcycleDealer (Dynamik) + MotorcycleRepair (Radikal) on all pages
# ✅ Marketplace MVP — /marketplace browse, /marketplace/[id] detail, /marketplace/sell form
# ✅ i18n audit complete — all pages: French default, localStorage persist, toggle present
# ✅ Mobile audit — 23 issues found, critical layout-breaking ones fixed
# ✅ 33 routes total — all compiling clean
#
# ⬜ NEXT: DNS cutover (dynamikperformance.com + radikalmotosport.com → 76.76.21.21)
# ⬜ NEXT: 450-question exam expansion (Phase 2)
# ⬜ NEXT: Marketplace listing activation flow (admin approval → status=active)
# ⬜ NEXT: Resend welcome email for marketplace sellers
# ⬜ NEXT: Google Business Profile optimization + review links

# ============================================================
# BUSINESSES SERVED — STRICT SEPARATION
# ============================================================
#
# Dynamik Performance — Steve Jean-Baptiste
#   - 144 Ch. Freeman, Gatineau, QC J8Z 2B4 — 819-772-9444
#   - REPAIR-FIRST business (motorcycle, scooter repair since 1999)
#   - Exclusive Vespa/Piaggio dealer in Outaouais (sales + OEM parts + accessories)
#   - Vespa/Piaggio content belongs ONLY on Dynamik's site — NEVER on Radikal
#   - Steve can use official Vespa/Piaggio imagery from vespa.com and piaggio.com
#   - Images sourced from CDNs: wlassets.vespa.com + wlassets.piaggio.com (Akamai, no hotlink protection)
#   - AMO Moto member
#   - Accent color: blue #2563eb
#   - CTA: "Réserver" / "Book now" (repair booking focus)
#
# Radikal Motosport — Eric Jean-Baptiste
#   - 156 De Varennes, Gatineau, QC J8T 8G4 — 819-561-6686
#   - REPAIR-FIRST business (all powersports: moto, ATV, UTV, motocross, snowmobile, boat)
#   - Multi-brand parts/accessories/apparel
#   - Authorized Fox Racing dealer
#   - Exclusive police Harley-Davidson repair contract
#   - Brands: Yamaha, Kawasaki, Honda, Suzuki, Harley-Davidson, BMW, Ducati, KTM, Polaris, Aprilia, BRP
#   - NO Vespa/Piaggio on Radikal — that's Steve's
#   - Accent color: gold #9e8a5a
#   - CTA: "Soumission" / "Get a quote" (quote-first flow)
#
# Exam-Prep App — bilingual QC (SAAQ) + ON (M1/M2/M)
#   - NOT a training school — it is an exam-prep app
#   - Includes audio TTS for accessibility (Web Speech API, $0 cost)
#   - Lead capture feeds both shops
#   - Stays dark navy theme (#0f0f1a) for visual differentiation from shop sites
#
# Marketplace — shared across both sites
#   - /marketplace route on both Dynamik and Radikal
#   - Revenue model: Option A — Possibilities IN MIND collects listing fees, shops earn inspection/service revenue
#   - Listing tiers: Standard ($25), Premium ($50), Certified ($75 + inspection)
#   - Supabase: marketplace_listings table

# ============================================================
# IMAGE STRATEGY — UPDATED MARCH 14, 2026
# ============================================================
#
# ✅ VESPA/PIAGGIO PRODUCT SHOTS (Dynamik only):
#   - Source: wlassets.vespa.com + wlassets.piaggio.com (Akamai CDN)
#   - 8 images downloaded and self-hosted in /public
#   - Steve is authorized dealer — full right to use these images
#   - Used for: hero panel, showcase section, model cards
#
# ✅ LUCIDE REACT ICONS:
#   - Replace all emojis in service cards and navigation
#   - 20-22px, stroke-width 1.5, inherit color from parent
#
# ✅ UNSPLASH API (free tier — 50 req/hr demo, 5000/hr production):
#   - Use for: hero backgrounds, lifestyle shots, vehicle category cards (especially Radikal)
#   - Requires attribution (photographer name + Unsplash link)
#   - Download to /public/images/ and self-host for performance
#   - Add images.unsplash.com to next.config remotePatterns
#
# ✅ GEMINI IMAGE GENERATION (replaces Nano Banana 2):
#   - Use for: marketing campaign visuals, ad creatives, seasonal promo banners,
#     social media posts, email header images for Resend campaigns
#   - Higher quality than Nano Banana 2
#   - Pairs with Pompei for paid ad management (Gemini generates creative, Pompei manages campaigns)
#
# ✅ REAL SHOP PHOTOS (when Steve & Eric provide them):
#   - Replace all placeholder/generated images
#   - One-line swap in AboutOwner component
#   - Priority: Steve portrait, Eric portrait, shop exteriors, Fox Racing wall
#
# ⛔ NANO BANANA 2 — KILLED. Quality not sufficient for brand-level imagery.
#   - Do NOT use Nano Banana 2 for any images
#   - Remove any generated Nano Banana images from /public if present
#
# TOOL STACK:
#   | Source              | Use for                                    |
#   |---------------------|--------------------------------------------|
#   | Vespa/Piaggio CDN   | Product shots (Dynamik only) ✅ Done        |
#   | Lucide React        | Service/UI icons ✅ Available                |
#   | Unsplash API        | Hero/lifestyle backgrounds, category cards  |
#   | Gemini image gen    | Marketing pieces, ad creatives, campaigns   |
#   | Pompei              | Ad campaign management (uses Gemini assets) |
#   | Real shop photos    | Final replacement when provided             |
#   | ~~Nano Banana 2~~   | ❌ KILLED — quality not there                |

# ============================================================
# DESIGN SYSTEM — UPDATED MARCH 2026
# ============================================================
#
# ⛔ OLD RULE (dark navy for everything) is RETIRED for shop sites
#
# SHOP SITES (Dynamik + Radikal): WHITE LUXURY AESTHETIC
# Inspired by: vespa.com, piaggio.com, storeusa.vespa.com, powersports.honda.com
# Think: Porsche configurator, Mercedes showroom — class and elegance for motorcycles
#
#   Background: #ffffff (white) / #fafaf8 (off-white) / #f5f4f0 (cream)
#   Text: #0a0a0a (black) / #1a1a1a (charcoal) / #555 (body) / #888 (muted)
#   Borders: #efefec (light) / #e0e0dd (medium) / #ccc (emphasis)
#   Gold accent: #9e8a5a (muted Hermès-tier — NOT bright gold)
#   Dynamik blue accent: #2563eb
#   Navy (for trust strip on Radikal + booking CTA sections): #0f1a2e
#   Serif: Cormorant Garamond (headings — elegant, editorial, Italian luxury)
#   Sans: DM Sans (body — clean, modern, confident)
#   Pill-shaped buttons: border-radius: 100px
#   Full-bleed product imagery — the vehicle/product IS the hero
#   Generous whitespace — sections breathe, nothing cramped
#   Gold accent used sparingly — one color for CTAs and eyebrow labels, never splashed
#
# EXAM APP: Stays dark navy (#0f0f1a) for differentiation
#   This creates a visual boundary — shop = premium white, exam = study mode dark
#
# ⛔ BANNED EVERYWHERE: pink, purple, pastel, rose, fuchsia, violet, lavender, magenta

# ============================================================
# NAVIGATION — HORIZONTAL MEGA-MENU (MANDATORY)
# ============================================================
# Both shop sites MUST use horizontal top navigation with mega-menu dropdowns.
# This is industry standard for powersports/motorcycle sites.
# Reference: vespa.com, piaggio.com, powersports.honda.com, storeusa.vespa.com
#
# STRUCTURE:
# 1. Utility bar (top): Phone, address, seasonal promo, FR/EN toggle
# 2. Main nav bar: Logo left, horizontal mega-menu links center, CTA right
# 3. Mega-dropdown on hover: Multi-column with category headers, links, featured promo cards
# 4. Mobile: Hamburger → full-screen nav with section labels
#
# DYNAMIK NAV ITEMS:
#   Services (dropdown: Repair, Maintenance, Modifications, Towing, Storage)
#   Vespa & Piaggio (dropdown: Vespa models, Piaggio models, Accessories, OEM parts)
#   Marketplace
#   About
#   Contact
#   CTA: "Réserver"
#
# RADIKAL NAV ITEMS:
#   Services (dropdown: Repair by vehicle type, Maintenance, Brands)
#   Parts & Accessories (dropdown: By category, By vehicle, By brand — dual-filter)
#   Fox Racing (highlighted gold — dropdown: Gear categories, Collections)
#   Marketplace
#   Exam (link to exam app)
#   About
#   CTA: "Soumission"

# ============================================================
# SITE ARCHITECTURE
# ============================================================
#
# DYNAMIK PERFORMANCE (dynamikperformance.com)
#   /                  Homepage ✅ BUILT
#   /services          Service landing page
#   /services/[slug]   Individual service pages (repair, maintenance, modifications, towing, storage)
#   /vespa             Vespa model showcase (Sprint, Primavera, GTS — with official imagery) 🔄 NEXT
#   /vespa/[model]     Individual model page (images, specs, "Request Info" CTA)
#   /accessories       Vespa/Piaggio accessories (dual-filter: by category + by model)
#   /marketplace       Vehicle marketplace (shared component)
#   /about             Steve's story, trust badges, team
#   /contact           Booking form + Google Maps + hours
#   /promotions        Seasonal offers (spring tune-up, winter storage)
#
# RADIKAL MOTOSPORT (radikalmotosport.com)
#   /                  Homepage (about Eric section done, full homepage 🔄 NEXT)
#   /services          Service landing page
#   /services/[slug]   Individual service pages (by vehicle type: moto, ATV, motocross, snowmobile, boat)
#   /parts             Parts catalog (dual-filter: by category + by vehicle + by brand)
#   /parts/[category]  Category pages (brakes, engine, suspension, electrical, exhaust, body, tires, transmission)
#   /fox-racing        Fox Racing apparel/gear showcase (lookbook style)
#   /fox-racing/[cat]  Fox category pages (helmets, jerseys, gloves, boots, protection)
#   /marketplace       Vehicle marketplace (shared component)
#   /exam              Exam-prep app (existing, bilingual) ✅ BUILT
#   /about             Eric's story, police Harley credibility
#   /contact           Quote request form + Google Maps + hours
#   /promotions        Seasonal offers + free inspection promo

# ============================================================
# BEST PRACTICES — POWERSPORTS WEBSITE PATTERNS
# ============================================================
# Learned from Honda Powersports, Vespa, Piaggio, storeusa.vespa.com
# Apply these by default — don't wait to be told.
#
# PRODUCT CARDS (always include):
#   - Product image (real photo, not placeholder)
#   - Name + category label above
#   - Price or "Call for pricing"
#   - Dual CTA: "Explore" + "Request Info" or "Get Quote"
#   - Delivery estimate on e-commerce cards
#
# CATALOG FILTERING (dual-filter pattern):
#   - Filter by CATEGORY (brakes, engine, suspension...) AND by VEHICLE (moto, ATV...) AND by BRAND
#   - Vespa accessories: filter by category + by Vespa model
#   - Radikal parts: filter by category + by vehicle type + by brand
#
# CONFIGURATOR / LEAD CAPTURE:
#   - Dynamik: "Choose your Vespa → Pick color → Request quote" (simplified build tool)
#   - Every "Request Info" button = lead capture into Supabase
#
# FINANCING & PROMOTIONS:
#   - Visible in nav utility bar and on key pages
#   - Seasonal campaign pages (spring tune-up, winter storage, Daytona prep)
#   - Reusable year after year
#
# TRUST SIGNALS:
#   - Google review stars/count displayed on site
#   - Trust badges (AMO Moto, Authorized Dealer, Police Harley)
#   - Owner story/photo (Steve and Eric)
#   - "Since 1999" as a hero element, not buried
#
# SCHEMA & SEO:
#   - LocalBusiness JSON-LD on every page
#   - Individual service pages for SEO targeting
#   - Bilingual meta tags and OG images

# ============================================================
# RULE 0: SESSION START PROTOCOL — READ BEFORE BUILDING
# ============================================================
# At the START of every new session, Claude Code MUST:
# 1. Read CLAUDE-moto-growth.md (this file) — project rules + current state
# 2. Read BUILD-PLAN-moto-growth.md — what needs to be built
# 3. Read LESSONS-LEARNED.md — institutional memory (~3200+ lines)
#    - Contains past mistakes, solutions, patterns, and hard-won knowledge
#    - If LESSONS-LEARNED.md doesn't exist yet for this project, create it
#    - Append new lessons at the end of every session
# 4. Check deployment status — what's live, what's broken, what's next
# 5. Run git pull to ensure latest code
# 6. THEN start building
#
# NEVER skip LESSONS-LEARNED.md. It exists to prevent repeating mistakes.
# If you hit a problem that took time to solve, append it to LESSONS-LEARNED.md
# before ending the session.

# ============================================================
# RULE 1: DEFAULT TO ACTION
# ============================================================
# When the task is clear, implement it without asking permission.
# If you see something broken, fix it.
# git commit after each step with descriptive message.
# Run npm run build between every component.

# ============================================================
# RULE 2: INVESTIGATE BEFORE ANSWERING
# ============================================================
# Never speculate about code you haven't opened.
# Read relevant files BEFORE answering questions.
# Never assume a file or component exists — verify it.

# ============================================================
# RULE 3: BUILD ORDER
# ============================================================
# 1. Build one component at a time
# 2. npm run build after each component (stop on errors)
# 3. git commit with descriptive message after each
# 4. Test at 375px mobile width
# 5. Verify French is default language

# ============================================================
# RULE 4: LANGUAGE — FRENCH FIRST
# ============================================================
# - French is ALWAYS the default language on load (OQLF / Bill 96)
# - Every user-facing string needs FR and EN in i18n.ts
# - Store language preference in localStorage
# - Toggle in nav utility bar (top-right)

# ============================================================
# RULE 5: AUDIO SYSTEM (EXAM APP ONLY)
# ============================================================
# - Uses browser Web Speech API (free, no API keys)
# - French Canadian voice priority: fr-CA → fr-FR → fr
# - English: en-CA → en-US → en-GB → en
# - AudioButton component: 🔊 play / ⏹️ stop toggle
# - Rate: 0.9 (slightly slower for learning)
# - NOT on shop pages — audio is for the exam app only

# ============================================================
# RULE 6: NEVER DO THESE THINGS
# ============================================================
# - Never reference Sovereign Self™ Portal code or repos
# - Never connect to sovereign-self Supabase or Vercel project
# - Never use pink, purple, pastel, rose, fuchsia, violet, or magenta
# - Never describe the exam-prep as a "training school"
# - Never assume Fox Racing can be sold on Amazon without written confirmation
# - Never assume Steve and Eric will run Google Ads immediately
# - Never treat Dynamik and Radikal as the same business
# - Never show Vespa/Piaggio content on Radikal's site
# - Never show police Harley trust signal on Dynamik's site
# - Never show Fox Racing as a Dynamik brand — it's Eric's
# - Never skip npm run build between components
# - Never commit without a descriptive message
# - Never tell the user to do manual browser steps
# - Never use dark navy as background on shop sites (use white/cream)
# - Never default to vertical/minimal nav — always horizontal mega-menu for shop sites
# - Never use Nano Banana 2 for image generation — it's killed
# - Never hotlink images from external CDNs in production — download and self-host

# ============================================================
# RULE 7: POLICE HARLEY TRUST SIGNAL
# ============================================================
# Eric's police Harley-Davidson contract is a major credibility asset.
# USE IT on Radikal's site as a quiet, professional trust signal.
# Navy background strip, gold icon, restrained single sentence.
# Do NOT make it flashy or boastful. Restraint converts better than bragging.
# NEVER show it on Dynamik's site — it's Eric's, not Steve's.

# ============================================================
# RULE 8: EXAM APP RULES
# ============================================================
# - Disclaimer required: "Not affiliated with SAAQ or MTO. Educational purposes only."
# - Questions are ORIGINAL, based on official handbooks (not copied)
# - Sources: SAAQ "Operating a Motorcycle" + "Driver's Handbook", MTO Motorcycle Handbook
# - Quiz pass threshold: 80%
# - Lead capture after quiz: "15% off first helmet at Radikal"
# - Province selector: Quebec (SAAQ Class 6) / Ontario (M1/M2/M)
# - Weak area tracking by category
# - Stays dark navy theme for visual differentiation

# ============================================================
# BUILD TIMELINE — 2-3 WEEK SPRINT (Target: Live by March 28-April 4)
# ============================================================
# ⚠️ SUMMER SEASON IS TIME-SENSITIVE — Outaouais riders buy NOW
#
# WEEK 1 (March 15-21): Build & Wire
#   Day 1-2: ✅ DONE — Shared design system (MegaNav, Footer, ServiceCard, StatsStrip,
#            SectionHeader, LanguageToggle) + Dynamik homepage (9 sections, Vespa images,
#            financing, about Steve) + Radikal about section
#   Day 3:   ✅ DONE — Radikal full homepage (13 sections: dark hero, PoliceTrust, StatsStrip,
#            ServiceGrid, VehicleCategories, FoxRacingShowcase, PartsCategories, BrandsBar,
#            ReviewCards, AboutOwner, BookingForm, DarkBookingCTA, ShopFooter)
#            + Dynamik /vespa page (Sprint, Primavera, GTS cards + specs + dual CTA)
#   Day 4:   Individual service pages for both shops (for SEO)
#            Booking/quote form component → Supabase → Resend notification
#   Day 5:   Fox Racing showcase page for Radikal
#            Reviews sections for both
#   Day 6-7: Bilingual i18n pass (every string FR/EN)
#            Mobile testing at 375px
#            Vercel deployment verification
#
# WEEK 2 (March 22-28): Connect, Polish & Launch
#   Day 8:   Marketplace MVP (Supabase schema + listing form + card grid + filters)
#   Day 9:   Marketplace browse page (type/price/make filters, bilingual)
#   Day 10:  Resend email setup (booking confirmations, quote notifications)
#   Day 11:  Schema markup (LocalBusiness JSON-LD), meta tags, OG images
#   Day 12:  Final content pass (real photos if available, clickable phones, Google Maps)
#   Day 13:  DNS cutover (dynamikperformance.com + radikalmotosport.com → Vercel)
#   Day 14:  Launch day — smoke test, verify forms, verify emails
#
# WEEK 3 (March 29-April 4): Buffer + Optimize
#   - Google Business Profile optimization (both shops)
#   - Review generation cards (QR code → Google review)
#   - Exam app link from Radikal
#   - First 5 marketplace test listings
#   - Social media launch posts (bilingual)
#   - Seasonal promo pages (spring tune-up)
#
# NEEDS REAL PHOTOS BEFORE SHOWING STEVE & ERIC:
#   - Shop exterior/interior (both)
#   - Steve working on a bike
#   - Eric's boutique / Fox Racing wall
#   - Vespa/Piaggio inventory at Dynamik (supplemented with official imagery ✅)
#   - Actual parts shelves at Radikal

# ============================================================
# PHASE TRACKING
# ============================================================
# Phase 1 (CURRENT — 2-week sprint):
#   ✅ Dynamik homepage (white luxury design, Vespa images, financing)
#   ✅ Shared design system components (MegaNav, Footer, StatsStrip, ServiceCard, etc.)
#   ✅ Vespa/Piaggio product images downloaded and self-hosted
#   ✅ Exam app (50 QC questions, bilingual, TTS)
#   ✅ Radikal full homepage (police Harley trust, Fox Racing, vehicle categories, all 13 sections)
#   ✅ Dynamik /vespa page (model grid + specs + dual CTA)
#   ⬜ Booking/quote forms → Supabase
#   ⬜ Parts catalog MVP (Radikal)
#   ⬜ Fox Racing showcase (Radikal)
#   ⬜ Marketplace MVP
#   ⬜ Service pages for SEO
#   ⬜ Schema markup
#   ⬜ DNS migration from GoDaddy to Vercel
#
# Phase 2 (April):
#   - Supabase backend fully wired
#   - Resend email sequences (booking confirmations, review requests, seasonal reminders)
#   - Vespa/Piaggio accessories catalog with dual-filter (Dynamik)
#   - Multi-brand parts catalog with dual-filter (Radikal)
#   - Marketplace Stripe integration
#   - Google Business Profile optimization
#   - Review generation workflow
#   - Exam app: additional question batches (50-100 per batch)
#
# Phase 3 (May-June):
#   - Simplified Vespa configurator / lead capture (Dynamik)
#   - Fox Racing e-commerce pilot (pending dealer authorization)
#   - School referral QR codes for exam app
#   - Seasonal campaign pages (spring/summer)
#   - Owner portal / MyGarage service history
#   - Dream 100 outreach
#   - Shopify evaluation for e-commerce
#   - Gemini-generated marketing visuals for campaigns
#
# Always reference phase in commits: "Phase 1.X: [component]"

# ============================================================
# CORRECTION LOG
# ============================================================
# - Steve's garage is smaller, focused on repair. Wants more Vespa sales.
# - Eric has exclusive police Harley contract. Wants to grow parts/boutique.
# - BOTH businesses are REPAIR-FIRST. Repair pays the bills.
# - Vespa/Piaggio = Dynamik ONLY. Never on Radikal's site.
# - Fox Racing = Radikal ONLY. Never on Dynamik's site.
# - Police Harley = Radikal ONLY. Never on Dynamik's site.
# - Exam app is NOT a school — schools are referral partners.
# - Word of mouth drives most business. They book far in advance.
# - Business dies seasonally. Both offer winter storage.
# - They may not adopt Google Ads immediately.
# - Fox Racing marketplace authorization not yet confirmed for Amazon.
# - Steve can use official Vespa/Piaggio imagery (not just redirect URLs).
# - Vespa/Piaggio images hosted on wlassets.vespa.com + wlassets.piaggio.com (Akamai CDN, no hotlink protection).
# - Piaggio/Vespa reference was about design CLASS, not selling automobiles.
# - Dark navy design system RETIRED for shop sites — white luxury is the standard.
# - Navigation MUST be horizontal mega-menu, not minimal/vertical.
# - Summer season in Outaouais is time-sensitive — sites must be live within 2-3 weeks.
# - Marketplace revenue: Option A (Possibilities IN MIND collects listing fees, shops earn service revenue).
# - Nano Banana 2 KILLED — image quality not sufficient for brand-level work.
# - Gemini image generation replaces Nano Banana 2 for marketing visuals.
# - Pompei handles ad campaign management, uses Gemini-generated creative assets.
# - AboutOwner component supports one-line photo swap when real portraits are provided.
