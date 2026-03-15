# SPRINT-PROMPTS.md — Daily Claude Code Prompts
# Operation: Motorcycle Growth Architect
# Keep this in the repo root. Each day's prompt is documented here.
# If you ever need to rebuild or re-run a day, the exact prompt is here.

---

## Day 1-2 Prompt (March 14-15)

```
Read CLAUDE-moto-growth.md and BUILD-PLAN-moto-growth.md.
Start Phase 1 Week 1 Day 1-2: Build the shared design system
components (MegaNav, Footer, ServiceCard, LanguageToggle, StatsStrip,
SectionHeader) then build the Dynamik homepage.
```

---

## Day 3 Prompt (March 15)

```
Read CLAUDE-moto-growth.md and BUILD-PLAN-moto-growth.md.

Day 3 sprint — two tasks:

1. Radikal full homepage — needs to match Dynamik's level. Build all sections:
   - Hero (dark cinematic, full-width, "L'autorité powersports de Gatineau")
   - Police Harley trust strip (navy bg, gold icon, restrained single sentence)
   - StatsStrip (11+ brands, 6 vehicle types, Fox Racing dealer, Free inspection)
   - Services grid (6 cards: Motorcycle repair, Free inspection, Parts, Maintenance, Modifications, Winter storage)
   - Vehicle categories (6 visual cards: Motorcycles, ATV/UTV, Motocross, Snowmobiles, Boats, Free Inspection CTA)
   - Fox Racing showcase section (badge + features + CTA)
   - Parts categories (8 tiles: Brakes, Engine, Suspension, Electrical, Body, Tires, Exhaust, Rider Gear)
   - Brands bar (all 11 brand names)
   - About Eric (already built — integrate with full page)
   - Booking CTA (dark section, gold CTA, phone)
   - Footer

   Use Unsplash for hero background and vehicle category card images.
   Download to /public/images/ and self-host.

2. Dynamik /vespa page — model grid with official imagery already in /public.
   Sprint, Primavera, GTS cards with specs + "Explore" + "Request Info" dual CTA.

npm run build between each component. git commit after each.
```

---

## Day 4 Prompt (March 15 — Cowork)

```
The 13 service page .md files are in the parent directory (../) — one level
above the repo root. Copy them into the repo with proper folder structure:

mkdir -p service-pages/dynamik service-pages/radikal

cp ../SERVICE-PAGES-INDEX.md service-pages/
cp ../repair.md service-pages/dynamik/
cp ../maintenance.md service-pages/dynamik/
cp ../vespa-sales.md service-pages/dynamik/
cp ../modifications.md service-pages/dynamik/
cp ../towing.md service-pages/dynamik/
cp ../winter-storage.md service-pages/dynamik/winter-storage.md
cp ../motorcycle-repair.md service-pages/radikal/
cp ../atv-utv.md service-pages/radikal/
cp ../motocross.md service-pages/radikal/
cp ../snowmobile.md service-pages/radikal/
cp ../boat.md service-pages/radikal/
cp ../inspection.md service-pages/radikal/
cp ../winter-storage.md service-pages/radikal/winter-storage.md

git add service-pages/
git commit -m "Add service page content files (13 pages, bilingual FR/EN)"
git push origin main

Then read SERVICE-PAGES-INDEX.md and build all 13 service pages.
Create a shared ServicePage template component.
npm run build between each. git commit after each. git push when done.
```

---

## Day 5 Prompt (March 15)

```
Read CLAUDE-moto-growth.md, BUILD-PLAN-moto-growth.md, LESSONS-LEARNED.md.
git pull.

Verify Day 4: run npm run build. Check that all 13 service pages compile.
Fix any errors.

Then Day 5 sprint — two tasks:

TASK 1: Wire booking/quote forms to Supabase.
- Create a new Supabase project for moto-growth-platform (NOT sovereign-self)
- Create table: service_requests (id uuid PK, created_at timestamp, name text, 
  phone text, email text, service_type text, message text, 
  shop text [dynamik/radikal], language text [fr/en])
- Wire the existing BookingForm on Dynamik homepage to insert into Supabase
- Wire the existing BookingForm on Radikal homepage to insert into Supabase
- Wire the Dynamik financing pre-qualification form to insert into a 
  financing_leads table (name, phone, email, vehicle, down_payment, 
  employment, shop, language, created_at)
- Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_ANON_KEY to .env.local
- Add same env vars to Vercel project settings
- Show success toast after form submission (bilingual)
- Form validation: name and phone required

TASK 2: Fox Racing showcase page at /radikal/fox-racing
- Hero with Fox Racing lifestyle image (Unsplash: "fox racing motocross gear")
- Category grid: Helmets, Jerseys & Pants, Gloves, Boots, Protection
- Each category card with image + name + "See in store" CTA
- Authorized dealer badge section
- "We ride what we sell" messaging
- Link from Radikal nav Fox Racing dropdown
- Bilingual FR/EN

npm run build between each component. git commit after each.
git push when done. Append lessons to LESSONS-LEARNED.md.
```

---

## Day 6-7 Prompt (queued)

```
Read CLAUDE-moto-growth.md, BUILD-PLAN-moto-growth.md, LESSONS-LEARNED.md.
git pull.

Day 6-7 sprint:

TASK 1: Marketplace MVP
- Create /marketplace route (shared between Dynamik and Radikal)
- Supabase table: marketplace_listings (see schema in BUILD-PLAN)
- Browse page with filters: vehicle type, price range, make, year
- Individual listing page (/marketplace/[id])
- Create listing page (/marketplace/sell) with photo upload, vehicle details, tier selection
- Bilingual FR/EN

TASK 2: Bilingual i18n audit
- Check every page for missing FR/EN translations
- Verify French is default on every page
- Language toggle works on every page and persists

TASK 3: Mobile testing
- Test every page at 375px width
- Fix any overflow, text wrapping, or layout issues
- Verify touch targets are 44px minimum

npm run build between each. git commit after each.
git push when done. Append lessons to LESSONS-LEARNED.md.
```

---

## Day 8+ Prompts (Week 2)

```
To be written as we get there. See BUILD-PLAN-moto-growth.md for the full
Week 2 schedule: Resend email, schema markup, final content pass, DNS cutover.
```
