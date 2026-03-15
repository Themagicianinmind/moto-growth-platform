// src/lib/supabase.ts — server-side Supabase client (moto-growth-platform)
// Uses SUPABASE_URL + SUPABASE_ANON_KEY (no NEXT_PUBLIC_ — server-only)
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL ?? 'https://placeholder.supabase.co';
const key = process.env.SUPABASE_ANON_KEY ?? 'placeholder-key';

export const supabase = createClient(url, key);
