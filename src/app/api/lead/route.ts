// src/app/api/lead/route.ts
// Saves exam-app lead to Supabase + sends welcome email with 15% promo via Resend
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, lang, source } = body as {
      email: string;
      lang: 'fr' | 'en';
      source?: string;
    };

    // ── 1. Validate ──────────────────────────────────────────
    if (!email?.trim() || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // ── 2. Save to Supabase ──────────────────────────────────
    const { error: dbError } = await supabase.from('leads').insert({
      email: email.trim().toLowerCase(),
      lang: lang ?? 'fr',
      source: source ?? 'exam-lead-capture',
    });

    if (dbError) {
      console.error('[lead] Supabase error:', dbError.message);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // ── 3. Send welcome email with 15% promo (optional) ──────
    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'noreply@resend.dev';

    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        const isFr = lang !== 'en';

        await resend.emails.send({
          from: `Radikal Motosport <${fromEmail}>`,
          to: email.trim(),
          subject: isFr
            ? '🏍️ Votre code promo 15% chez Radikal Motosport'
            : '🏍️ Your 15% promo code at Radikal Motosport',
          html: isFr
            ? `
              <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f0f1a;color:#e8e8f0;padding:32px;border-radius:12px;">
                <h2 style="color:#D4AF37;margin:0 0 8px;">Félicitations !</h2>
                <p style="color:#a0a0b8;margin:0 0 24px;font-size:15px;">Vous avez complété l'examen préparatoire Moto Growth Platform.</p>
                <div style="background:#161625;border:1px solid #D4AF3730;border-radius:10px;padding:24px;text-align:center;margin-bottom:24px;">
                  <p style="color:#6b6b80;font-size:13px;margin:0 0 8px;">Votre code promo exclusif</p>
                  <p style="font-size:32px;font-weight:900;color:#D4AF37;letter-spacing:4px;margin:0 0 8px;">MOTO15</p>
                  <p style="color:#6b6b80;font-size:13px;margin:0;">15% de rabais sur votre premier casque chez Radikal</p>
                </div>
                <a href="https://moto-growth-platform.vercel.app/radikal" style="display:block;background:#D4AF37;color:#1a1a2e;text-align:center;padding:14px 24px;border-radius:8px;font-weight:800;font-size:16px;text-decoration:none;margin-bottom:24px;">
                  Visiter Radikal Motosport →
                </a>
                <p style="color:#a0a0b8;font-size:14px;margin:0 0 4px;">📍 156 De Varennes, Gatineau, QC J8T 8G4</p>
                <p style="color:#a0a0b8;font-size:14px;margin:0 0 24px;">📞 <a href="tel:8195616686" style="color:#D4AF37;">819-561-6686</a></p>
                <p style="font-size:11px;color:#3a3a50;">Moto Growth Platform — Outil de préparation aux examens SAAQ &amp; MTO. Non affilié à la SAAQ ou au MTO.</p>
              </div>
            `
            : `
              <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0f0f1a;color:#e8e8f0;padding:32px;border-radius:12px;">
                <h2 style="color:#D4AF37;margin:0 0 8px;">Congratulations!</h2>
                <p style="color:#a0a0b8;margin:0 0 24px;font-size:15px;">You completed the Moto Growth Platform practice exam.</p>
                <div style="background:#161625;border:1px solid #D4AF3730;border-radius:10px;padding:24px;text-align:center;margin-bottom:24px;">
                  <p style="color:#6b6b80;font-size:13px;margin:0 0 8px;">Your exclusive promo code</p>
                  <p style="font-size:32px;font-weight:900;color:#D4AF37;letter-spacing:4px;margin:0 0 8px;">MOTO15</p>
                  <p style="color:#6b6b80;font-size:13px;margin:0;">15% off your first helmet at Radikal Motosport</p>
                </div>
                <a href="https://moto-growth-platform.vercel.app/radikal" style="display:block;background:#D4AF37;color:#1a1a2e;text-align:center;padding:14px 24px;border-radius:8px;font-weight:800;font-size:16px;text-decoration:none;margin-bottom:24px;">
                  Visit Radikal Motosport →
                </a>
                <p style="color:#a0a0b8;font-size:14px;margin:0 0 4px;">📍 156 De Varennes, Gatineau, QC J8T 8G4</p>
                <p style="color:#a0a0b8;font-size:14px;margin:0 0 24px;">📞 <a href="tel:8195616686" style="color:#D4AF37;">819-561-6686</a></p>
                <p style="font-size:11px;color:#3a3a50;">Moto Growth Platform — Exam prep tool for SAAQ &amp; MTO. Not affiliated with SAAQ or MTO.</p>
              </div>
            `,
        });
      } catch (emailErr) {
        // Email failure is non-fatal — lead is already saved
        console.error('[lead] Resend error:', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[lead] Unexpected error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
