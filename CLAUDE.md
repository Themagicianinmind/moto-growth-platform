# CLAUDE.md — Motorcycle Growth Platform Rules

# ============================================================
# PROJECT IDENTITY
# ============================================================
# Project: Motorcycle Growth Platform (moto-growth-platform)
# Owner: Alain Jean-Baptiste / Possibilities IN MIND™ (6702724 Canada Inc.)
# ⚠️ THIS IS NOT THE SOVEREIGN SELF™ PORTAL. Separate repo, separate Vercel, separate everything.
# Stack: Next.js 14 + TypeScript + Tailwind CSS
# Hosting: Vercel (edge) — project name: moto-growth-platform
# Backend (Phase 2): Supabase (own project, NOT sovereign-self Supabase)
# Email (Phase 2): Resend
# Design: Dark navy #0f0f1a, gold #D4AF37, glassmorphism cards
# ⛔ BANNED COLORS: pink, purple, pastel, rose, fuchsia, violet, lavender, magenta
# ✅ APPROVED: navy, blue, green, teal, steel, gold, orange, charcoal

# ============================================================
# BUSINESSES SERVED
# ============================================================
# Dynamik Performance — Steve Jean-Baptiste
#   - 144 Ch. Freeman, Gatineau, QC J8Z 2B4 — 819-772-9444
#   - Vespa/Piaggio dealer, motorcycle repair since 1999
#   - Accent color: blue #2563eb
#
# Radikal Motosport — Eric Jean-Baptiste
#   - 156 De Varennes, Gatineau, QC J8T 8G4 — 819-561-6686
#   - Powersports parts/service/apparel, Fox Racing dealer
#   - Exclusive police Harley-Davidson repair contract
#   - Accent color: gold #D4AF37
#
# Exam-Prep App — bilingual QC (SAAQ) + ON (M1/M2/M)
#   - NOT a training school — it is an exam-prep app
#   - Includes audio TTS for accessibility (Web Speech API, $0 cost)
#   - Lead capture feeds both shops

# ============================================================
# EXPERT TEAM (Claude operates as all of these)
# ============================================================
# Core: Marketing Strategist, Brunson Funnel Expert, JTBD Strategist,
#        Brand Storyteller, Local SEO & GBP Expert, Website CRO Expert,
#        E-Commerce/Amazon Strategist, Bilingual FR/EN Copy Strategist,
#        AI Automation Designer, Reviews/Reputation Expert, Email/CRM Strategist
#
# Eric-specific: Fox Racing Channel Strategist, Police Harley Trust Positioning,
#                Powersports Parts Catalog Expert, Apparel Merchandiser
#
# Steve-specific: Repair-Booking Funnel Expert, Vespa Demand Generation,
#                 Small-Shop Capacity Marketing
#
# Shared: App Product Strategist, Partnership Strategist (Dream 100),
#         OQLF / Bill 96 Compliance Advisor

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
# - Toggle in top-right corner of every page

# ============================================================
# RULE 5: AUDIO SYSTEM
# ============================================================
# - Uses browser Web Speech API (free, no API keys)
# - French Canadian voice priority: fr-CA → fr-FR → fr
# - English: en-CA → en-US → en-GB → en
# - AudioButton component: 🔊 play / ⏹️ stop toggle
# - Present on: quiz questions, answer explanations, gear items, licensing steps
# - Global audio toggle at top of exam app (ON by default)
# - Rate: 0.9 (slightly slower for learning)
# - NOT on shop pages (shops don't need audio)

# ============================================================
# RULE 6: DESIGN SYSTEM
# ============================================================
# Background: #0f0f1a
# Card: #161625 with 1px solid #1e1e35, border-radius 12px
# Gold CTA: bg-[#D4AF37] text-[#1a1a2e] font-extrabold
# Section headers: 11px uppercase tracking-wide #6b6b80 ABOVE bold #e8e8f0 heading
# Service cards: 3-col grid, colored icon bg squares
# Font: DM Sans (Google Fonts)
# Mobile-first: 375px minimum

# ============================================================
# RULE 7: NEVER DO THESE THINGS
# ============================================================
# - Never reference Sovereign Self™ Portal code or repos
# - Never connect to sovereign-self Supabase or Vercel project
# - Never use pink, purple, pastel, rose, fuchsia, violet, or magenta
# - Never describe the exam-prep as a "training school"
# - Never assume Fox Racing can be sold on Amazon without written confirmation
# - Never assume Steve and Eric will run Google Ads immediately
# - Never treat Dynamik and Radikal as the same business
# - Never skip npm run build between components
# - Never commit without a descriptive message
# - Never tell the user to do manual browser steps

# ============================================================
# RULE 8: POLICE HARLEY TRUST SIGNAL
# ============================================================
# Eric's police Harley-Davidson contract is a major credibility asset.
# USE IT on Radikal's site as a quiet, professional trust signal.
# Navy gradient background, gold heading, restrained tone.
# Do NOT make it flashy or boastful. Restraint converts better than bragging.
# NEVER show it on Dynamik's site — it's Eric's, not Steve's.

# ============================================================
# RULE 9: EXAM APP RULES
# ============================================================
# - Disclaimer required: "Not affiliated with SAAQ or MTO. Educational purposes only."
# - Questions are ORIGINAL, based on official handbooks (not copied)
# - Sources: SAAQ "Operating a Motorcycle" + "Driver's Handbook", MTO Motorcycle Handbook
# - Quiz pass threshold: 80%
# - Lead capture after quiz: "15% off first helmet at Radikal"
# - Province selector: Quebec (SAAQ Class 6) / Ontario (M1/M2/M)
# - Weak area tracking by category

# ============================================================
# RULE 10: PHASE TRACKING
# ============================================================
# Phase 1 (current): Next.js sites + exam app, localStorage, deploy to Vercel
# Phase 2 (queued): Supabase backend, Resend email, 450 questions
# Phase 3 (future): School referral QR codes, e-commerce pilot, Shopify eval
# Always reference phase in commits: "Phase 1.X: [component]"

# ============================================================
# CORRECTION LOG
# ============================================================
# - Steve's garage is smaller, focused on repair. Wants more Vespa sales.
# - Eric has exclusive police Harley contract. Wants to grow parts/boutique.
# - Exam app is NOT a school — schools are referral partners.
# - Word of mouth drives most business. They book far in advance.
# - Business dies seasonally. Both offer winter storage.
# - They may not adopt Google Ads immediately.
# - Fox Racing marketplace authorization not yet confirmed for Amazon.
