// src/app/api/marketplace/route.ts
// GET: list active listings (with optional filters)
// POST: create a new listing + send seller confirmation + internal notification
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const TIER_PRICES: Record<string, string> = {
  standard: '25 $',
  premium: '50 $',
  certified: '75 $',
};

const TIER_LABELS_FR: Record<string, string> = {
  standard: 'Standard',
  premium: 'Premium',
  certified: 'Certifié',
};

const TIER_LABELS_EN: Record<string, string> = {
  standard: 'Standard',
  premium: 'Premium',
  certified: 'Certified',
};

const CONDITION_LABELS_FR: Record<string, string> = {
  excellent: 'Excellent',
  good: 'Bon état',
  fair: 'Passable',
  parts: 'Pour pièces',
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const vehicleType = searchParams.get('vehicle_type');
    const minPrice = searchParams.get('min_price');
    const maxPrice = searchParams.get('max_price');
    const make = searchParams.get('make');

    let query = supabase
      .from('marketplace_listings')
      .select('id,title,price,vehicle_type,make,model,year,mileage,condition,tier,image_url,created_at')
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(50);

    if (vehicleType) query = query.eq('vehicle_type', vehicleType);
    if (minPrice) query = query.gte('price', parseInt(minPrice));
    if (maxPrice) query = query.lte('price', parseInt(maxPrice));
    if (make) query = query.ilike('make', `%${make}%`);

    const { data, error } = await query;
    if (error) {
      console.error('[marketplace GET]', error.message);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
    return NextResponse.json({ listings: data ?? [] });
  } catch (err) {
    console.error('[marketplace GET] Unexpected:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title, description, price, vehicleType, make, model, year,
      mileage, condition, tier, sellerName, sellerPhone, sellerEmail,
      shopId, lang, imageUrl,
    } = body as {
      title: string; description?: string; price: number;
      vehicleType: string; make: string; model: string; year: number;
      mileage?: number; condition: string; tier: string;
      sellerName: string; sellerPhone: string; sellerEmail?: string;
      shopId?: string; lang: 'fr' | 'en'; imageUrl?: string;
    };

    // Validate required
    if (!title?.trim() || !price || !vehicleType || !make?.trim() || !model?.trim() || !year || !condition || !tier || !sellerName?.trim() || !sellerPhone?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('marketplace_listings')
      .insert({
        title: title.trim(),
        description: description?.trim() ?? null,
        price,
        vehicle_type: vehicleType,
        make: make.trim(),
        model: model.trim(),
        year,
        mileage: mileage ?? null,
        condition,
        tier,
        seller_name: sellerName.trim(),
        seller_phone: sellerPhone.trim(),
        seller_email: sellerEmail?.trim() ?? null,
        shop_id: shopId ?? null,
        lang: lang ?? 'fr',
        image_url: imageUrl?.trim() ?? null,
        status: 'pending',
      })
      .select('id')
      .single();

    if (error) {
      console.error('[marketplace POST]', error.message);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // ── Send emails (non-fatal) ───────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'noreply@resend.dev';
    const isFr = lang !== 'en';
    const tierLabel = isFr ? (TIER_LABELS_FR[tier] ?? tier) : (TIER_LABELS_EN[tier] ?? tier);
    const tierPrice = TIER_PRICES[tier] ?? '';
    const conditionLabel = CONDITION_LABELS_FR[condition] ?? condition;

    if (resendKey) {
      const resend = new Resend(resendKey);

      // 1) Seller confirmation (only if they provided email)
      if (sellerEmail?.trim()) {
        try {
          await resend.emails.send({
            from: `Moto Marketplace <${fromEmail}>`,
            to: sellerEmail.trim(),
            subject: isFr
              ? `\u2705 Annonce re\u00e7ue \u2014 ${title.trim()}`
              : `\u2705 Listing received \u2014 ${title.trim()}`,
            html: isFr
              ? `
                <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f0f1a;color:#e8e8f0;padding:32px;border-radius:12px;">
                  <h2 style="color:#9e8a5a;margin:0 0 8px;">Annonce re\u00e7ue !</h2>
                  <p style="color:#a0a0b8;font-size:14px;margin:0 0 24px;">Bonjour ${sellerName.trim()}, votre annonce a bien \u00e9t\u00e9 re\u00e7ue et sera publi\u00e9e dans les 24 heures.</p>
                  <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;width:130px;">V\u00e9hicule</td><td style="padding:8px 0;font-weight:700;">${year} ${make.trim()} ${model.trim()}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Titre</td><td style="padding:8px 0;">${title.trim()}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Prix demand\u00e9</td><td style="padding:8px 0;font-weight:700;">${price.toLocaleString('fr-CA')} $</td></tr>
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Formule</td><td style="padding:8px 0;">${tierLabel} \u2014 ${tierPrice}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">\u00c9tat</td><td style="padding:8px 0;">${conditionLabel}</td></tr>
                  </table>
                  <div style="margin-top:24px;padding:16px;background:#161625;border-radius:8px;border-left:3px solid #9e8a5a;">
                    <p style="margin:0;font-size:13px;color:#a0a0b8;">\ud83d\udcde Notre \u00e9quipe vous appellera au <strong style="color:#e8e8f0;">${sellerPhone.trim()}</strong> dans les prochaines 24h pour confirmer et collecter le paiement.</p>
                  </div>
                  <p style="margin-top:24px;font-size:11px;color:#3a3a50;">Moto Marketplace by Possibilities IN MIND \u00b7 moto-growth-platform.vercel.app</p>
                </div>
              `
              : `
                <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f0f1a;color:#e8e8f0;padding:32px;border-radius:12px;">
                  <h2 style="color:#9e8a5a;margin:0 0 8px;">Listing received!</h2>
                  <p style="color:#a0a0b8;font-size:14px;margin:0 0 24px;">Hi ${sellerName.trim()}, your listing has been received and will be published within 24 hours.</p>
                  <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;width:130px;">Vehicle</td><td style="padding:8px 0;font-weight:700;">${year} ${make.trim()} ${model.trim()}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Title</td><td style="padding:8px 0;">${title.trim()}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Asking price</td><td style="padding:8px 0;font-weight:700;">$${price.toLocaleString('en-CA')}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Plan</td><td style="padding:8px 0;">${tierLabel} \u2014 ${tierPrice}</td></tr>
                  </table>
                  <div style="margin-top:24px;padding:16px;background:#161625;border-radius:8px;border-left:3px solid #9e8a5a;">
                    <p style="margin:0;font-size:13px;color:#a0a0b8;">\ud83d\udcde Our team will call you at <strong style="color:#e8e8f0;">${sellerPhone.trim()}</strong> within 24 hours to confirm and collect payment.</p>
                  </div>
                  <p style="margin-top:24px;font-size:11px;color:#3a3a50;">Moto Marketplace by Possibilities IN MIND \u00b7 moto-growth-platform.vercel.app</p>
                </div>
              `,
          });
        } catch (e) {
          console.error('[marketplace POST] seller email error:', e);
        }
      }

      // 2) Internal notification to platform admin
      const adminEmail = process.env.ADMIN_NOTIFY_EMAIL;
      if (adminEmail) {
        try {
          await resend.emails.send({
            from: `Moto Marketplace <${fromEmail}>`,
            to: adminEmail,
            subject: `\ud83c\udfce\ufe0f Nouvelle annonce \u2014 ${tierLabel} \u2014 ${year} ${make.trim()} ${model.trim()} \u2014 ${price.toLocaleString('fr-CA')} $`,
            html: `
              <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f0f1a;color:#e8e8f0;padding:32px;border-radius:12px;">
                <h2 style="color:#9e8a5a;margin:0 0 24px;">Nouvelle annonce \u2014 en attente d\u2019approbation</h2>
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;width:130px;">V\u00e9hicule</td><td style="padding:8px 0;font-weight:700;">${year} ${make.trim()} ${model.trim()}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Titre</td><td style="padding:8px 0;">${title.trim()}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Prix</td><td style="padding:8px 0;font-weight:700;">${price.toLocaleString('fr-CA')} $</td></tr>
                  <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Formule</td><td style="padding:8px 0;">${tierLabel} \u2014 ${tierPrice}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Vendeur</td><td style="padding:8px 0;">${sellerName.trim()}</td></tr>
                  <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">T\u00e9l\u00e9phone</td><td style="padding:8px 0;"><a href="tel:${sellerPhone.trim().replace(/\D/g, '')}" style="color:#9e8a5a;">${sellerPhone.trim()}</a></td></tr>
                  ${sellerEmail ? `<tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Courriel</td><td style="padding:8px 0;"><a href="mailto:${sellerEmail}" style="color:#9e8a5a;">${sellerEmail}</a></td></tr>` : ''}
                  <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">ID Supabase</td><td style="padding:8px 0;font-size:11px;color:#555;">${data.id}</td></tr>
                </table>
                <div style="margin-top:20px;padding:12px 16px;background:#161625;border-radius:8px;">
                  <p style="margin:0;font-size:13px;color:#a0a0b8;">\u26a0\ufe0f \u00c0 approuver : mettez status='active' dans Supabase pour publier l\u2019annonce.</p>
                </div>
              </div>
            `,
          });
        } catch (e) {
          console.error('[marketplace POST] admin email error:', e);
        }
      }
    }

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err) {
    console.error('[marketplace POST] Unexpected:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
