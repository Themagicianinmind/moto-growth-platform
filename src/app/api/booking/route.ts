// src/app/api/booking/route.ts
// Saves booking to Supabase + sends notification email via Resend
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, message, shopId } = body as {
      name: string;
      phone: string;
      service: string;
      message?: string;
      shopId: string;
    };

    // ── 1. Validate ──────────────────────────────────────────
    if (!name?.trim() || !phone?.trim() || !service?.trim() || !shopId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!['dynamik', 'radikal'].includes(shopId)) {
      return NextResponse.json({ error: 'Invalid shopId' }, { status: 400 });
    }

    // ── 2. Save to Supabase ──────────────────────────────────
    const { error: dbError } = await supabase.from('bookings').insert({
      name: name.trim(),
      phone: phone.trim(),
      service: service.trim(),
      message: message?.trim() ?? '',
      shop_id: shopId,
    });

    if (dbError) {
      console.error('[booking] Supabase error:', dbError.message);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // ── 3. Send notification email (optional — skips if no key) ──
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = SHOP_NOTIFY_EMAILS[shopId];
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'noreply@resend.dev';
    const shopName = SHOP_NAMES[shopId];

    if (resendKey && notifyEmail) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: `Moto Growth Platform <${fromEmail}>`,
          to: notifyEmail,
          subject: `📋 Nouvelle demande de service — ${shopName}`,
          html: `
            <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f0f1a;color:#e8e8f0;padding:32px;border-radius:12px;">
              <h2 style="color:#D4AF37;margin:0 0 24px;">Nouvelle demande de service</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;width:120px;">Boutique</td><td style="padding:8px 0;font-weight:700;">${shopName}</td></tr>
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Nom</td><td style="padding:8px 0;">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Téléphone</td><td style="padding:8px 0;"><a href="tel:${phone}" style="color:#D4AF37;">${phone}</a></td></tr>
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Service</td><td style="padding:8px 0;">${service}</td></tr>
                ${message ? `<tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;vertical-align:top;">Message</td><td style="padding:8px 0;">${message}</td></tr>` : ''}
                <tr><td style="padding:8px 0;color:#6b6b80;font-size:13px;">Date</td><td style="padding:8px 0;">${new Date().toLocaleString('fr-CA', { timeZone: 'America/Toronto' })}</td></tr>
              </table>
              <p style="margin-top:24px;font-size:12px;color:#3a3a50;">Moto Growth Platform · moto-growth-platform.vercel.app</p>
            </div>
          `,
        });
      } catch (emailErr) {
        // Email failure is non-fatal — booking is already saved
        console.error('[booking] Resend error:', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[booking] Unexpected error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
