// src/app/api/financing/route.ts
// Saves financing pre-qualification lead to Supabase
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, vehicle, downPayment, employment, shopId, lang } = body as {
      name: string;
      phone: string;
      email?: string;
      vehicle: string;
      downPayment?: string;
      employment: string;
      shopId: string;
      lang: 'fr' | 'en';
    };

    // ── Validate ─────────────────────────────────────────────
    if (!name?.trim() || !phone?.trim() || !vehicle?.trim() || !employment?.trim() || !shopId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!['dynamik', 'radikal'].includes(shopId)) {
      return NextResponse.json({ error: 'Invalid shopId' }, { status: 400 });
    }

    // ── Save to Supabase ──────────────────────────────────────
    const { error: dbError } = await supabase.from('financing_leads').insert({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() ?? null,
      vehicle: vehicle.trim(),
      down_payment: downPayment?.trim() ?? null,
      employment: employment.trim(),
      shop_id: shopId,
      lang: lang ?? 'fr',
    });

    if (dbError) {
      console.error('[financing] Supabase error:', dbError.message);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[financing] Unexpected error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
