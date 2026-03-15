// src/app/api/financing/route.ts
// Saves financing pre-qualification lead to Supabase + sends Resend notification
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const SHOP_NAMES: Record<string, string> = {
  dynamik: 'Dynamik Performance',
  radikal: 'Radikal Motosport',
};

const SHOP_NOTIFY_EMAILS: Record<string, string | undefined> = {
  dynamik: process.env.DYNAMIK_NOTIFY_EMAIL,
  radikal: process.env.RADIKAL_NOTIFY_EMAIL,
};

const EMPLOYMENT_LABELS: Record<string, string> = {
  'full-time': 'Temps plein / Full-time',
  'part-time': 'Temps partiel / Part-time',
  'self-employed': 'Travailleur autonome / Self-employed',
  retired: 'Retraité / Retired',
  other: 'Autre / Other',
};

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

    // ── Send notification email (optional — skips if no key/email set) ──
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = SHOP_NOTIFY_EMAILS[shopId];
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'noreply@resend.dev';
    const shopName = SHOP_NAMES[shopId];
    const employmentLabel = EMPLOYMENT_LABELS[employment] ?? employment;

    if (resendKey && notifyEmail) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: `Moto Growth Platform <${fromEmail}>`,
          to: notifyEmail,
          subject: `\u{1F4B0} Nouvelle demande de financement \u2014 ${shopName}`,
          html: `
            <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f0f1a;color:#e8e8f0;padding:32px;border-radius:12px;">
              <h2 style="color:#D4AF37;margin:0 0 8px;">Nouvelle demande de financement</h2>
              <p style="color:#a0a0b8;font-size:13px;margin:0 0 24px;">Pr\u00e9-qualification re\u00e7ue via ${shopName}</p>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;width:140px;">Nom</td><td style="padding:8px 0;font-weight:700;">${name.trim()}</td></tr>
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">T\u00e9l\u00e9phone</td><td style="padding:8px 0;"><a href="tel:${phone.trim()}" style="color:#D4AF37;">${phone.trim()}</a></td></tr>
                ${email ? `<tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Courriel</td><td style="padding:8px 0;"><a href="mailto:${email.trim()}" style="color:#D4AF37;">${email.trim()}</a></td></tr>` : ''}
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">V\u00e9hicule</td><td style="padding:8px 0;">${vehicle.trim()}</td></tr>
                ${downPayment ? `<tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Mise de fonds</td><td style="padding:8px 0;">${downPayment}</td></tr>` : ''}
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Emploi</td><td style="padding:8px 0;">${employmentLabel}</td></tr>
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Langue</td><td style="padding:8px 0;">${lang === 'fr' ? 'Fran\u00e7ais' : 'English'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Re\u00e7u le</td><td style="padding:8px 0;">${new Date().toLocaleString('fr-CA', { timeZone: 'America/Toronto' })}</td></tr>
              </table>
              <div style="margin-top:24px;padding:16px;background:#161625;border-radius:8px;border-left:3px solid #D4AF37;">
                <p style="margin:0;font-size:13px;color:#a0a0b8;">&#128161; <strong style="color:#e8e8f0;">Action recommand\u00e9e :</strong> Appelez ce client dans les 2 heures &mdash; les leads chauds convertissent 3&times; mieux.</p>
              </div>
              <p style="margin-top:24px;font-size:12px;color:#3a3a50;">Moto Growth Platform &middot; moto-growth-platform.vercel.app</p>
            </div>
          `,
        });
      } catch (emailErr) {
        // Email failure is non-fatal — lead is already saved to Supabase
        console.error('[financing] Resend error:', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[financing] Unexpected error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
