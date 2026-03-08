---
glob: "src/app/exam/**, src/components/exam/**, src/lib/speech.ts, src/lib/exam-data.ts"
---

# Exam App Rules

## Identity
- This is an EXAM-PREP app — NOT a training school
- Schools (Tecnic, Ottawa Safety Council) are referral PARTNERS, not competitors
- Disclaimer required on every exam-related page:
  - FR: "Cette application n'est pas affiliée à la SAAQ ni au MTO. À des fins éducatives seulement."
  - EN: "This app is not affiliated with SAAQ or MTO. For educational purposes only."

## Provinces
- Quebec: SAAQ · Class 6 (`province: 'qc'`)
- Ontario: MTO · M1/M2/M (`province: 'on'`)
- Phase 1: 12 QC + 6 ON questions
- Phase 2: 450 questions from official handbooks

## Quiz Rules
- Pass threshold: 80%
- Questions are ORIGINAL — inspired by official handbooks, not copied verbatim
- Sources: SAAQ "Conduire une moto", MTO "Motorcycle Handbook"
- Show explanation immediately after each answer (not end-of-quiz)
- Track weak categories: rules, safety, gear, skills, signs, licensing
- Score display shows: percentage, pass/fail, weak area chips
- Restart resets province selection and all state

## Audio System (Web Speech API — $0/month)
- Uses `src/lib/speech.ts` — no API keys, no server, no cost
- French: fr-CA → fr-FR → fr (priority order)
- English: en-CA → en-US → en-GB → en (priority order)
- Rate: 0.9 (slightly slow for learning)
- Call `preloadVoices()` on exam page mount — voices load async in some browsers
- Always call `speechSynthesis.cancel()` before new utterance (prevents overlap)

## AudioButton Rules
- File: `src/components/ui/AudioButton.tsx`
- 🔊 = playing, ⏹️ = stop toggle
- Required on: every quiz question, every answer explanation, every gear item, every licensing step
- NOT on shop pages (HeroSection, ServiceGrid, etc.)
- Props: `text` (string to speak), `lang` ('fr' | 'en'), `size` ('sm' | 'md')

## Global Audio Toggle
- Located in exam page top bar
- State: `audioEnabled` (boolean), default `true`
- localStorage key: `moto-audio` (string 'true' or 'false')
- When OFF: AudioButton components are hidden (not rendered)
- When ON: AudioButton appears next to every question and explanation
- Display: `tr('audioOn', lang)` / `tr('audioOff', lang)` from i18n.ts

## Lead Capture
- Appears after quiz score display
- Offer: "15% off first helmet at Radikal Motosport" — code: `MOTO15`
- Phase 1: saves to `localStorage` key `moto-leads`
- Phase 2: POST to Supabase `leads` table + trigger Resend welcome email
- Links to `/radikal` after submission
- Address shown: 156 De Varennes, Gatineau · 819-561-6686

## GearChecklist
- 8 items: 4 critical (Obligatoire) + 4 recommended (Recommandé)
- Critical: helmet (full-face), jacket, gloves, boots
- Recommended: pants, eye protection, hi-viz vest, ear plugs
- Each item has icon, name, badge (critical/optional), description, AudioButton

## LicensingSteps
- 5 steps per province (QC + ON = 10 total)
- Visual timeline: step number circle + connector line + GlassCard
- Each step has AudioButton (reads title + description)
- QC steps: SAAQ theory → cours reconnu → 12 months → road test → classe 6
- ON steps: M1 written → M1 practice → M2 road test → M2 period → M full test
