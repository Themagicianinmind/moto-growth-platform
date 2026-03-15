// src/app/api/marketplace/route.ts
// GET: list active listings (with optional filters)
// POST: create a new listing (status=pending, awaiting approval)
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

    return NextResponse.json({ success: true, id: data.id }, { status: 201 });
  } catch (err) {
    console.error('[marketplace POST] Unexpected:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
