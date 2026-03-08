---
glob: "src/components/**/*.tsx, src/app/**/*.tsx"
---

# Bilingual Rules — OQLF / Bill 96 Compliance

## French is ALWAYS Default
- Every page loads in French on first visit
- Never default to English — this violates OQLF / Bill 96
- `useState<Lang>('fr')` — always initialize to `'fr'`
- On mount, check `localStorage.getItem('moto-lang')` and only switch if `=== 'en'`

## Language Persistence
```typescript
// Read on mount
const saved = localStorage.getItem('moto-lang') as Lang | null;
if (saved === 'en') setLang('en');

// Write on toggle (handled in LanguageToggle.tsx)
localStorage.setItem('moto-lang', next);
```

## i18n Pattern
- All user-facing strings live in `src/lib/i18n.ts`
- Import: `import { Lang, tr } from '@/lib/i18n'`
- Usage: `{tr('yourKey', lang)}`
- Never hardcode French or English strings directly in components
- When adding new strings, add BOTH `fr` and `en` to `i18n.ts` first

## Language Toggle
- Use `<LanguageToggle lang={lang} onToggle={setLang} />` from `src/components/ui/LanguageToggle.tsx`
- Position: `position: 'fixed', top: 16, right: 16, zIndex: 100`
- Must appear on EVERY page

## HTML Lang Attribute
- Root layout sets `<html lang="fr">` — do not change this
- Phase 2: update dynamically per user language preference

## Metadata
- Default metadata in `layout.tsx` uses French titles and descriptions
- Each shop layout overrides with shop-specific French metadata
- `locale: 'fr_CA'` in OpenGraph

## CASL Email Compliance (Phase 2)
- All transactional emails sent in user's preferred language
- Unsubscribe link required in every marketing email
