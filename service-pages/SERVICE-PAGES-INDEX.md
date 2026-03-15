# SERVICE-PAGES-INDEX.md
# Maps all service page content files to routes + SEO targets
# These .md files are the single source of truth for all service page content.
# If the site is ever rebuilt or migrated, these files contain everything needed.

---

## How to Use
- Each .md file contains: meta tags, hero content, "what's included" cards, FAQ, and CTA — all bilingual FR/EN
- Claude Code reads these files to build the actual Next.js pages
- Content can be updated in these files and re-deployed without touching code
- Format is consistent across all pages for easy templating

---

## Dynamik Performance — Service Pages

| File | Route | SEO Target (FR) | SEO Target (EN) | Status |
|---|---|---|---|---|
| `dynamik/repair.md` | /dynamik/services/repair | réparation moto Gatineau | motorcycle repair Gatineau | ⬜ TO BUILD |
| `dynamik/maintenance.md` | /dynamik/services/maintenance | entretien moto Gatineau | motorcycle maintenance Gatineau | ⬜ TO BUILD |
| `dynamik/vespa-sales.md` | /dynamik/services/vespa-sales | concessionnaire Vespa Gatineau | Vespa dealer Gatineau | ⬜ TO BUILD |
| `dynamik/modifications.md` | /dynamik/services/modifications | modification moto Gatineau | motorcycle modifications Gatineau | ⬜ TO BUILD |
| `dynamik/towing.md` | /dynamik/services/towing | remorquage moto Gatineau | motorcycle towing Gatineau | ⬜ TO BUILD |
| `dynamik/winter-storage.md` | /dynamik/services/winter-storage | entreposage moto Gatineau | motorcycle winter storage Gatineau | ⬜ TO BUILD |

## Radikal Motosport — Service Pages

| File | Route | SEO Target (FR) | SEO Target (EN) | Status |
|---|---|---|---|---|
| `radikal/motorcycle-repair.md` | /radikal/services/motorcycle-repair | réparation moto Gatineau | motorcycle repair Gatineau | ⬜ TO BUILD |
| `radikal/atv-utv.md` | /radikal/services/atv-utv | réparation VTT Gatineau | ATV repair Gatineau | ⬜ TO BUILD |
| `radikal/motocross.md` | /radikal/services/motocross | motocross pièces Gatineau | motocross parts Gatineau | ⬜ TO BUILD |
| `radikal/snowmobile.md` | /radikal/services/snowmobile | réparation motoneige Gatineau | snowmobile repair Gatineau | ⬜ TO BUILD |
| `radikal/boat.md` | /radikal/services/boat | réparation moteur bateau Gatineau | boat engine repair Gatineau | ⬜ TO BUILD |
| `radikal/inspection.md` | /radikal/services/inspection | inspection moto gratuite Gatineau | free motorcycle inspection Gatineau | ⬜ TO BUILD |
| `radikal/winter-storage.md` | /radikal/services/winter-storage | entreposage moto Gatineau | motorcycle storage Gatineau | ⬜ TO BUILD |

---

## Template Structure (shared across all pages)
```
ServicePage
├── MegaNav (shop-specific)
├── Hero (eyebrow + heading + sub + CTA)
├── WhatsIncluded (3-5 feature cards)
├── FAQ (3-4 questions, bilingual, accordion)
├── BookingCTA (phone + form link)
├── SchemaMarkup (LocalBusiness JSON-LD)
└── Footer (shop-specific)
```

## SEO Requirements (every page)
- LocalBusiness JSON-LD schema
- Bilingual meta title + description (FR default)
- Open Graph tags
- Canonical URL
- H1 = page heading (one per page)
- Alt text on all images (bilingual)
- Internal links to homepage + other services
- Breadcrumb navigation
