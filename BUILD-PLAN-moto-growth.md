# OPERATION: MOTORCYCLE GROWTH ARCHITECT
# COMPLETE BUILD PLAN — March 2026
# Target: Live by March 28 (hard) / April 4 (buffer)

---

## DESIGN SYSTEM (shared foundation)

### Design Tokens
- Background: #ffffff / #fafaf8 / #f5f4f0
- Text: #0a0a0a / #1a1a1a / #555 / #888 / #aaa
- Borders: #efefec / #e0e0dd / #ccc
- Gold: #9e8a5a (muted, luxury)
- Dynamik blue: #2563eb
- Navy (trust strip + booking CTA): #0f1a2e
- Serif: Cormorant Garamond
- Sans: DM Sans
- Buttons: pill-shaped (border-radius: 100px)
- Cards: border-radius: 4px, 1px solid border
- Mobile-first: 375px minimum

### Shared Components to Build
| Component | Description | Status |
|---|---|---|
| `MegaNav` | Horizontal nav with utility bar + mega-dropdown on hover + mobile hamburger | DESIGNED |
| `Footer` | 4-column footer with brand, services, products, contact + bottom bar | DESIGNED |
| `ServiceCard` | Icon + name + description + hover arrow, 3-col grid | DESIGNED |
| `BookingForm` | Quote/booking request form → Supabase + Resend notification | TO BUILD |
| `LanguageToggle` | FR/EN toggle in utility bar, persists to localStorage, French default | DESIGNED |
| `StatsStrip` | 4-column stat bar with serif numbers | DESIGNED |
| `SectionHeader` | Eyebrow label + serif heading + subtitle + optional CTA | DESIGNED |
| `ReviewCard` | Stars + quote + author + source | DESIGNED |
| `TrustBadge` | Icon + label pill (AMO Moto, Authorized Dealer, etc.) | DESIGNED |
| `ProductCard` | Image + name + category + price + dual CTA ("Explore" + "Get Quote") | TO BUILD |
| `CategoryCard` | Overlay image card with label + subtitle (vehicle categories) | DESIGNED |
| `MarketplaceListing` | Photo grid + vehicle details + price + seller info + badge | TO BUILD |
| `SchemaMarkup` | LocalBusiness JSON-LD for both shops | TO BUILD |
| `OGImage` | Dynamic Open Graph images for social sharing | TO BUILD |

---

## DYNAMIK PERFORMANCE — Page-by-Page Build List

### Homepage (/)
| Section | Content | Assets Needed |
|---|---|---|
| MegaNav | Services, Vespa & Piaggio, Marketplace, About, Contact | — |
| Utility bar | Phone, address, seasonal promo, FR/EN | — |
| Hero (split layout) | Text left + full-bleed Vespa image right | Vespa lifestyle image from vespa.com |
| Stats strip | 25+ years, 5/5 Google, #1 Vespa Outaouais, 100% satisfaction | Verify Google review count |
| Services grid | 6 cards: Repair, Maintenance, Vespa Sales, Modifications, Towing, Winter Storage | Service icons |
| Vespa showcase (full-bleed) | Massive Vespa image + overlay text + CTA | Image from vespa.com |
| Vespa models | 3 cards: Sprint, Primavera, GTS with images + "Discover" CTA | Product images from vespa.com |
| About Steve | Photo + quote + story + trust badges | REAL PHOTO of Steve needed |
| Booking CTA | Dark section, gold CTA, phone number | — |
| Reviews | 3 review cards (placeholder until real reviews gathered) | Real Google reviews |
| Footer | Full 4-column footer | — |

### Vespa & Piaggio Page (/vespa)
| Element | Description |
|---|---|
| Hero | Full-bleed Vespa lifestyle image + "The Range" heading |
| Model grid | All current Vespa + Piaggio models, each with: official image, name, tagline, "Explore" + "Request Info" dual CTA |
| Accessories teaser | Link to /accessories with category preview cards |
| "Why buy from us" | Authorized dealer badge, OEM parts guarantee, full service lifecycle |

### Vespa Model Pages (/vespa/[model])
| Element | Description |
|---|---|
| Hero image | Full-bleed product shot from vespa.com |
| Specs grid | Key specifications (engine, top speed, fuel, etc.) |
| Color selector | Color swatches with corresponding images (if available from Vespa) |
| Features list | Key features with icons |
| Accessories for this model | Filtered accessories |
| "Request Info" form | Lead capture → Supabase |

### Accessories Page (/accessories)
| Element | Description |
|---|---|
| Category tiles | Visual category cards: Top cases, Helmets, Protection, Parts, Tech, Graphics |
| Dual-filter | Filter by category + filter by Vespa/Piaggio model |
| Product cards | Image + name + price (MSRP or "Call for pricing") + "Request Info" CTA |
| OEM parts link | Link to Piaggio genuine parts catalog for part-number lookup |

### Service Pages (/services/[slug])
| Page | SEO Target |
|---|---|
| /services/repair | "motorcycle repair Gatineau", "réparation moto Gatineau" |
| /services/maintenance | "motorcycle maintenance Gatineau", "entretien moto" |
| /services/vespa-sales | "Vespa dealer Gatineau", "concessionnaire Vespa Outaouais" |
| /services/modifications | "motorcycle modifications Gatineau" |
| /services/towing | "motorcycle towing Gatineau", "remorquage moto" |
| /services/winter-storage | "motorcycle winter storage Gatineau", "entreposage moto" |

Each page: hero image, service description, what's included, pricing guidance, booking CTA, FAQ.

### About Page (/about)
Steve's full story, shop history, team, certifications, AMO Moto badge, Google reviews.

### Contact Page (/contact)
Booking form, Google Maps embed, hours of operation, phone (clickable), address.

### Promotions Page (/promotions)
Seasonal offers — spring tune-up, winter storage deals. Reusable template.

---

## RADIKAL MOTOSPORT — Page-by-Page Build List

### Homepage (/)
| Section | Content | Assets Needed |
|---|---|---|
| MegaNav | Services, Parts & Accessories, Fox Racing (gold), Marketplace, Exam, About | — |
| Utility bar | Phone, address, "★ Free inspection" in gold, FR/EN | — |
| Hero (dark cinematic) | Full-width dark bg + overlay text + "Quote" CTA | REAL shop photo or dramatic motorcycle shot |
| Police Harley trust strip | Navy bg, gold icon, single restrained sentence | — |
| Stats strip | 11+ brands, 6 vehicle types, Fox Racing dealer, Free inspection | — |
| Services grid | 6 cards: Motorcycle repair, Free inspection, Parts, Maintenance, Modifications, Winter storage | Service icons |
| Vehicle categories | 6 visual cards: Motorcycles, ATV/UTV, Motocross, Snowmobiles, Boats, Free Inspection CTA | Action photos needed |
| Fox Racing showcase | Image + badge + features + CTA | REAL photo of Fox Racing gear wall |
| Parts categories | 8 tiles: Brakes, Engine, Suspension, Electrical, Body, Tires, Exhaust, Rider Gear | Part icons |
| Brands bar | All 11 supported brand names in clean strip | — |
| About Eric | Photo + quote (references police Harley) + story | REAL PHOTO of Eric needed |
| Booking CTA | Dark section, gold CTA, phone number | — |
| Footer | Full 4-column footer + exam app link | — |

### Parts Catalog (/parts)
| Element | Description |
|---|---|
| Dual-filter header | Filter by: Category, Vehicle type, Brand (3 dropdown/toggle filters) |
| Category tiles | Visual category cards with icon + name + count |
| Product grid | Image + name + price or "Call for pricing" + "Get Quote" CTA |
| Search bar | Search by part name or number (Phase 2: VIN lookup) |

### Parts Category Pages (/parts/[category])
| Page | Examples |
|---|---|
| /parts/brakes | Pads, rotors, levers, lines — filtered by vehicle type and brand |
| /parts/engine | Filters, oils, gaskets, pistons |
| /parts/suspension | Shocks, springs, fork seals |
| /parts/electrical | Batteries, lighting, wiring, starters |
| /parts/body | Fairings, fenders, mirrors, windshields |
| /parts/tires | Tires and wheels, all sizes |
| /parts/exhaust | Mufflers, headers, full systems |
| /parts/rider-gear | Helmets, gloves, boots, jackets (non-Fox) |

### Fox Racing Page (/fox-racing)
| Element | Description |
|---|---|
| Hero | Full-bleed Fox Racing lifestyle image or gear wall photo |
| Category grid | Helmets, Jerseys, Gloves, Boots, Protection |
| Collection grid | Motocross, Enduro, ATV, Lifestyle |
| Product cards | Image + name + price + "See in store" or "Call for pricing" |
| Dealer badge | "Authorized Fox Racing dealer — Gatineau" |

### Service Pages (/services/[slug])
| Page | SEO Target |
|---|---|
| /services/motorcycle-repair | "motorcycle repair Gatineau", "Harley repair Gatineau" |
| /services/atv-utv | "ATV repair Gatineau", "UTV service Outaouais" |
| /services/motocross | "motocross parts Gatineau" |
| /services/snowmobile | "snowmobile repair Gatineau", "motoneige réparation" |
| /services/boat | "boat engine repair Gatineau" |
| /services/inspection | "free motorcycle inspection Gatineau" |
| /services/winter-storage | "motorcycle storage Gatineau" |

### About Page (/about)
Eric's story, police Harley credibility (restrained), shop history, team, brand list.

### Contact Page (/contact)
Quote request form, Google Maps embed, hours, phone, address.

### Promotions Page (/promotions)
Free inspection promo, seasonal tune-up deals, Fox Racing seasonal sales.

---

## MARKETPLACE — Shared Build

### Supabase Schema
```
marketplace_listings
  id (uuid, PK)
  created_at (timestamp)
  updated_at (timestamp)
  seller_name (text)
  seller_email (text)
  seller_phone (text)
  title (text)
  description (text)
  year (int)
  make (text)
  model (text)
  vehicle_type (enum: motorcycle, atv, utv, snowmobile, boat, other)
  mileage (int, nullable)
  price (decimal)
  photos (text[] — array of URLs)
  listing_tier (enum: standard, premium, certified)
  payment_status (enum: pending, paid, expired)
  approval_status (enum: pending, approved, rejected)
  shop_affiliation (enum: dynamik, radikal, none)
  inspection_status (enum: none, pending, passed, failed)
  language (enum: fr, en)
  province (text)
  expires_at (timestamp)
  featured (boolean, default false)
```

### Pages
| Route | Description |
|---|---|
| /marketplace | Browse listings with filters (type, price range, make, year) |
| /marketplace/[id] | Individual listing detail page |
| /marketplace/sell | Create listing form (photo upload, vehicle details, tier selection) |

### Revenue
- Standard: $25/30 days
- Premium: $50/30 days (8 photos, featured, social share by shop)
- Certified: $75/30 days + inspection fee ($75-150 to shop)
- Featured upgrade: $20 for 7-day pin
- Phase 1: manual e-transfer payment
- Phase 2: Stripe integration

---

## SUPABASE TABLES (Phase 1 MVP)

| Table | Purpose |
|---|---|
| service_requests | Booking/quote form submissions (name, email, phone, vehicle, service type, message, shop, language) |
| contact_leads | General contact form submissions |
| marketplace_listings | Vehicle marketplace (see schema above) |
| newsletter_subscribers | Email capture (feeds Resend) |

---

## RESEND EMAIL FLOWS (Phase 2)

| Flow | Trigger |
|---|---|
| Booking confirmation | Service request submitted → email to customer + notification to Steve/Eric |
| Quote confirmation | Quote request submitted → email to customer + notification to Eric |
| Marketplace listing confirmation | Listing submitted → email to seller |
| Marketplace renewal reminder | Day 25 → email to seller ("Your listing expires in 5 days") |
| Review request | 3 days after service → email asking for Google review |
| Seasonal reminder | Spring (March) → "Time for your tune-up" to all contacts |
| Winter storage reminder | October → "Book your winter storage" to all contacts |

---

## SEO REQUIREMENTS (Every Page)

- [ ] LocalBusiness JSON-LD schema
- [ ] Bilingual meta title + description (FR default)
- [ ] Open Graph tags + dynamic OG image
- [ ] Canonical URLs
- [ ] H1 hierarchy (one per page)
- [ ] Alt text on all images (bilingual)
- [ ] Internal linking between service pages
- [ ] Sitemap.xml
- [ ] robots.txt

---

## WHAT NEEDS REAL PHOTOS (Placeholders OK for launch, replace within 1 week)

| Photo | For | Priority |
|---|---|---|
| Steve portrait in workshop | Dynamik About section | HIGH |
| Eric portrait in shop/boutique | Radikal About section | HIGH |
| Dynamik shop exterior | Homepage, Contact | HIGH |
| Radikal shop exterior | Homepage, Contact | HIGH |
| Fox Racing gear wall at Radikal | Fox Racing section | HIGH |
| Bikes on lift / being repaired | Service pages, hero images | MEDIUM |
| Vespa/Piaggio inventory at Dynamik | Can supplement with official imagery | MEDIUM |
| Parts shelves at Radikal | Parts catalog headers | MEDIUM |

---

## RISKS & BLOCKERS

| Risk | Impact | Mitigation |
|---|---|---|
| Real photos not ready | Sites look like templates | Launch with official brand imagery + Nano Banana AI for lifestyle shots; replace with real photos within 1 week |
| DNS propagation delay | 24-48hr downtime during GoDaddy → Vercel cutover | Cut over on Tuesday/Wednesday, not weekend |
| Google reviews too few | Review section looks empty | Use placeholder "Client vérifié" cards; start review generation workflow same week |
| Fox Racing dealer terms unclear | Can't build e-commerce for Fox | Build showcase page only; add e-commerce when written confirmation received |
| Supabase not ready for Phase 1 | Forms don't work | Can use simple email (mailto:) or Google Form as temporary fallback |

---

*Build Plan — Operation: Motorcycle Growth Architect*
*Possibilities IN MIND™ — March 2026*
