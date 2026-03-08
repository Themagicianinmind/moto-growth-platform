---
glob: "vercel.json, next.config.*, .vercel/**, **/*.env*"
---

# Deployment Rules — Vercel + Domains

## Project Identity
- Project name: `moto-growth-platform`
- Vercel team/scope: `themagicianinminds-projects`
- Production URL: https://moto-growth-platform.vercel.app
- ⚠️ This is NOT connected to sovereign-self-portal — completely separate Vercel project

## Deploy Commands
```bash
# First deploy (creates .vercel/ link)
npx vercel --prod --yes --scope themagicianinminds-projects

# Subsequent deploys (scope stored in .vercel/project.json)
npx vercel --prod --scope themagicianinminds-projects

# Preview deploy (for testing before prod)
npx vercel --scope themagicianinminds-projects
```

## Custom Domains (Future)
Steve and Eric already own their domains — just update DNS:
- `dynamikperformance.com` → A record: `76.76.21.21`
- `radikalmotosport.com` → A record: `76.76.21.21`
- www CNAME → `cname.vercel-dns.com`
- SSL auto-generates in 1-5 minutes after DNS propagation

To add domains: Vercel dashboard → moto-growth-platform → Settings → Domains

## Environment Variables (Phase 2)
Add via Vercel dashboard → Project → Settings → Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=        (public — own Supabase project, NOT sovereign-self)
NEXT_PUBLIC_SUPABASE_ANON_KEY=   (public — anon key only)
RESEND_API_KEY=                  (server-side only — NO NEXT_PUBLIC_ prefix)
```

After adding env vars: `npx vercel --prod --scope themagicianinminds-projects`

## Common Issues
- "missing_scope" error → add `--scope themagicianinminds-projects` flag
- "Module not found" on Vercel but not locally → case-sensitive import path (Linux ≠ macOS)
- Build passes locally but fails on Vercel → run `npm run build` fresh before deploying
- Stale deployment → force redeploy: `npx vercel redeploy --prod`

## Never Do
- Deploy to sovereign-self Vercel project — this is a completely separate project
- Connect to sovereign-self Supabase — Phase 2 needs its own Supabase project
- Commit `.env` files — add via Vercel dashboard only
- Use `--force` on any Vercel command without understanding consequences

## Next.js Config Notes
- Framework auto-detected by Vercel as Next.js
- Build command: `npm run build` (default, no override needed)
- Output: `.next` (default)
- Static export NOT used — keep SSR/ISR capability for Phase 2
