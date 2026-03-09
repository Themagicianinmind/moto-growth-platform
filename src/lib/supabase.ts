// src/lib/supabase.ts — server-side Supabase client (moto-growth-platform)
// Uses SUPABASE_URL + SUPABASE_ANON_KEY (no NEXT_PUBLIC_ — server-only)
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);
