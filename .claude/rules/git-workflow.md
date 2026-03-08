---
glob: "**/*"
---

# Git Workflow Rules

## Build Before Every Commit
```bash
npm run build   # MUST pass with zero errors
git add -A
git commit -m "Phase X.Y: [component name — what it does]"
```

Never commit broken code. If `npm run build` fails, fix it before committing.

## Commit Message Format
```
Phase 1.X: ComponentName — brief description of what it does
```

Examples:
- `Phase 1.6: UI components — GlassCard, SectionHeader, CTAButton, LanguageToggle, AudioButton`
- `Phase 1.8: BookingForm — localStorage save with success state and service dropdown`
- `Phase 2.1: Supabase schema — bookings + leads tables with RLS policies`

## One Component Per Commit (Preferred)
- Commit after EACH component — never batch multiple components
- Exception: small utility files (design.ts, types) can be batched if trivially related
- This makes git history useful for debugging and rollback

## Phase Numbering
- `Phase 1.X` — Next.js frontend, localStorage, Vercel deploy
- `Phase 2.X` — Supabase backend, Resend email
- `Phase 3.X` — School QR codes, e-commerce, Shopify eval

## Branch Strategy
- `main` = production (deployed to Vercel automatically)
- No feature branches needed for Phase 1 (solo dev, fast iteration)
- Phase 2+: consider `feature/supabase` branch for backend work

## Never Do
- `git commit -m "fix"` or `git commit -m "wip"` — always descriptive
- Commit `.env` files (in .gitignore already)
- Commit `.vercel/` directory (in .gitignore already)
- Skip `npm run build` between commits
- Amend published commits on main

## Current Project Status
- Repo: `~/projects/moto-growth-platform`
- Branch: `main`
- Phase 1: COMPLETE (14 commits)
- Phase 2: QUEUED
