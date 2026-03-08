# LESSONS-LEARNED.md — Motorcycle Growth Platform
# Institutional memory — update after every phase
# Seeded from universal patterns (Sovereign Self™ Portal, 18 phases, 3200+ lines)

---

## UNIVERSAL NEXT.JS PATTERNS (Proven across 18+ phases)

### Build Discipline
- ALWAYS run `npm run build` between every component — never batch
- A clean build after each step catches errors immediately; batching creates cascading failures
- If build fails, fix it BEFORE moving to the next component — never skip
- TypeScript strict mode catches bugs at build time that would be runtime disasters

### Import Patterns
- Use `@/` path aliases (configured in tsconfig.json) — never relative `../../` paths
- Named imports over default imports for tree-shaking
- Always verify imports resolve before committing — phantom imports cause build failures
- When importing from lib files, match the exact export name

### Component Patterns
- One component per file — never bundle multiple components
- 'use client' directive at the TOP of any file using useState, useEffect, or browser APIs
- Server components are the default in App Router — only add 'use client' when needed
- Props interfaces defined in the same file, not in a separate types file (for small projects)

### App Router (Next.js 14)
- `layout.tsx` wraps all children — use for shared UI, metadata, fonts
- `page.tsx` is the route entry point — this is what renders
- Dynamic routes: `[slug]/page.tsx` — bracket syntax
- Loading states: `loading.tsx` in any route folder
- Error boundaries: `error.tsx` with 'use client' directive
- Metadata: export `metadata` object from layout.tsx or page.tsx (not both in same route)

---

## TAILWIND CSS PATTERNS

### Custom Colors
- Bracket syntax works: `bg-[#161625]` `text-[#D4AF37]` `border-[#1e1e35]`
- BUT: if Tailwind purges them, switch to inline styles as fallback
- For reusable colors, add to `tailwind.config.ts` under `theme.extend.colors`
- Example: `colors: { navy: '#0f0f1a', gold: '#D4AF37', card: '#161625' }`

### Common Gotchas
- `rounded-xl` = 12px, `rounded-lg` = 8px, `rounded-full` = 50%
- Grid: `grid grid-cols-3 gap-4` — always specify gap
- Flex: `flex items-center gap-4` — use gap not margins between flex children
- Dark backgrounds need explicit text colors — Tailwind defaults won't contrast
- `truncate` for text overflow — requires `max-w-*` or width constraint on parent

### Responsive
- Mobile-first: write base styles for 375px, then add `md:` and `lg:` breakpoints
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for responsive grids
- Test at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px+ (desktop)
- Touch targets: minimum 44px x 44px for buttons on mobile

---

## VERCEL DEPLOYMENT PATTERNS

### First Deploy
- `npx vercel` for preview, `npx vercel --prod` for production
- When asked "Link to existing project?" — say NO for new projects
- Framework: Next.js (auto-detected)
- Build command: `npm run build` (default)
- Output directory: `.next` (default)

### Custom Domains
- Vercel dashboard → Project → Settings → Domains → Add domain
- A record: point to `76.76.21.21`
- CNAME for www: point to `cname.vercel-dns.com`
- SSL certificate auto-generates — takes 1-5 minutes
- Domain stays registered with the original registrar (GoDaddy, etc.)
- Steve and Eric keep dynamikperformance.com and radikalmotosport.com — just update DNS

### Environment Variables
- Add via Vercel dashboard → Project → Settings → Environment Variables
- NEVER commit .env files to git
- For Supabase: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- For Resend: `RESEND_API_KEY` (server-side only, no NEXT_PUBLIC_ prefix)
- After adding env vars, redeploy: `npx vercel --prod`

### Common Vercel Issues
- "Module not found" — usually case-sensitive import (macOS ignores case, Linux doesn't)
- "Page changed from static to dynamic" — add `export const dynamic = 'force-dynamic'`
- Deployment hangs — check if `npm run build` works locally first
- Preview deployments are per-commit; production needs explicit `--prod` flag

---

## SUPABASE PATTERNS (Phase 2)

### Schema Discipline
- ALWAYS verify schema before writing SQL — never assume a table exists
- Keep a `supabase-schema-snapshot.md` as source of truth
- Schema drift is the #1 cause of migration failures
- Test SQL in the Supabase SQL Editor before committing as a migration

### RLS (Row Level Security)
- ALWAYS enable RLS on every table — no exceptions
- Test RLS policies from the client, not the SQL editor (editor bypasses RLS)
- Common pattern: `auth.uid() = user_id` for user-owned data
- For public-read data: policy with `FOR SELECT` and `USING (true)`

### Common Issues
- "relation does not exist" — case-sensitive table name or wrong schema
- "violates row-level security" — missing INSERT policy
- "JWT expired" — client needs session refresh
- Foreign key constraints — insert parent rows before child rows

### Auth
- Use `@supabase/ssr` for Next.js 14 App Router (not old auth-helpers)
- Create middleware.ts for session refresh on every request
- Store user preferences (language, audio) in profiles table, not just localStorage

---

## RESEND EMAIL PATTERNS (Phase 2)

### Setup
- Create API key at resend.com → API Keys
- Verify sending domain (add DNS records)
- Server-side only (API route or server action) — never expose key to client

### Templates
- Booking confirmation: trigger on form submit → API route → Resend
- Review request: trigger 24h after service (Supabase cron or edge function)
- Spring reminder: batch send in March to all customers with language preference
- Always include unsubscribe link (CASL compliance for Canada)

---

## GIT WORKFLOW

- Commit after EVERY component — never batch
- Descriptive messages: "Phase 1.5: ServiceGrid component with colored icon backgrounds"
- Never commit broken code — `npm run build` must pass first
- Pull before starting work: `git pull origin main`
- main = production (deployed to Vercel)

---

## WEB SPEECH API PATTERNS

### Voice Loading
- Voices load ASYNC — use `speechSynthesis.onvoiceschanged` callback
- Always call `preloadVoices()` on app mount
- French Canadian: look for `fr-CA` first → `fr-FR` → `fr`
- Chrome has different voices than Safari — test both

### Common Issues
- `speak()` fails silently if called before voices load — always preload
- Mobile Safari requires user gesture (button tap) first — can't auto-play
- Multiple `speak()` calls queue up — always `cancel()` before new speech
- Some Android devices have very limited voices
- Rate 0.85-0.95 is the sweet spot for learning (below 0.5 sounds robotic)

### Pattern
```typescript
speechSynthesis.cancel(); // prevent overlap
const utterance = new SpeechSynthesisUtterance(text);
utterance.lang = 'fr-CA';
utterance.rate = 0.9;
speechSynthesis.speak(utterance);
```

---

## OQLF / BILL 96 COMPLIANCE

- French MUST be the default language on load — not English
- Store language preference in localStorage (Supabase profiles in Phase 2)
- Every user-facing string needs both FR and EN in i18n.ts
- Marketing materials: French with "marked predominance"
- Transactional emails: send in user's preferred language
- Language toggle in top-right corner of every page

---

## PHONE NUMBER PATTERNS

- Always clickable: `<a href="tel:8197729444">819-772-9444</a>`
- Display format: `819-772-9444` (human readable)
- Href format: `tel:8197729444` (no dashes)
- Minimum 44px tap target height on mobile
- Phone CTA above the fold on every shop page

---

## Phase 1 Findings
(to be filled during first build session)

## Errors Discovered
(to be filled as errors are found)

## Decisions Made
(to be filled as decisions are confirmed)

---

*Seeded March 2026 from 18 phases of Sovereign Self™ Portal development*
*Update after every session and every phase completion*
