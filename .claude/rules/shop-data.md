---
glob: "src/app/dynamik/**, src/app/radikal/**, src/components/shop/**"
---

# Shop Data Rules — Dynamik Performance & Radikal Motosport

## ⚠️ These Are Different Businesses — Never Mix Them

## Dynamik Performance (Steve Jean-Baptiste)
- Phone: `819-772-9444` → href: `tel:8197729444`
- Address: `144 Ch. Freeman, Gatineau, QC J8Z 2B4`
- Accent color: `#2563eb` (blue)
- Tagline FR: "Réparation moto experte depuis 1999"
- Business: smaller garage, repair-focused, exclusive Vespa/Piaggio dealer since 1999
- Goal: grow Vespa sales, more repair bookings
- Trust badges: Piaggio / Vespa · Depuis 1999 · AMO Moto
- **NO Police Harley on this page — ever**
- Data source: `shops.dynamik` from `src/lib/shops.ts`

## Radikal Motosport (Eric Jean-Baptiste)
- Phone: `819-561-6686` → href: `tel:8195616686`
- Address: `156 De Varennes, Gatineau, QC J8T 8G4`
- Accent color: `#D4AF37` (gold)
- Tagline FR: "L'autorité powersports de Gatineau"
- Business: broader powersports, Fox Racing dealer, exclusive police Harley-Davidson repair
- Goal: grow parts catalog, boutique/apparel
- Trust badges: 🚔 Police Harley-Davidson · Fox Racing · 11+ marques
- **PoliceTrust component MUST appear on this page**
- Data source: `shops.radikal` from `src/lib/shops.ts`

## PoliceTrust Component Rules
- File: `src/components/shop/PoliceTrust.tsx`
- Rendered in: `/radikal/page.tsx` ONLY
- Tone: restrained, professional. Navy gradient. Gold heading.
- Heading: "Assez fiable pour la police" (FR) / "Reliable Enough for the Police" (EN)
- Do NOT make it flashy or boastful — restraint converts better

## BookingForm Rules
- Phase 1: saves to `localStorage` key `moto-bookings`
- Phase 2: will POST to Supabase `bookings` table + trigger Resend email
- Required fields: name, phone, service (dropdown)
- Optional: message
- Success state: green checkmark, no page reload
- Service dropdown populated from `shop.services` array

## Reviews
- All 3 reviews per shop are real (verified) — never change names or star ratings
- Dynamik: J-R D. ⭐⭐⭐⭐⭐, Janet S. ⭐⭐⭐⭐⭐, Karl L. ⭐⭐⭐⭐⭐
- Radikal: Marc T. ⭐⭐⭐⭐⭐, Dan R. ⭐⭐⭐⭐⭐, Sophie L. ⭐⭐⭐⭐⭐

## Word-of-Mouth Business Reality
- Both shops book far in advance (word of mouth dominant)
- Both offer winter storage (seasonal revenue)
- Steve's priority: Vespa sales + repair capacity
- Eric's priority: parts/boutique growth + Fox Racing
- Neither is running Google Ads immediately — do not assume ad budget

## Fox Racing Note
- Fox Racing marketplace authorization for Amazon: NOT yet confirmed
- Never assume Fox Racing can be sold on Amazon without written confirmation
