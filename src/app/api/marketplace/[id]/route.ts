// src/app/api/marketplace/[id]/route.ts
// GET: single listing by ID (active only for public)
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { data, error } = await supabase
      .from('marketplace_listings')
      .select('*')
      .eq('id', id)
      .eq('status', 'active')
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }

    return NextResponse.json({ listing: data });
  } catch (err) {
    console.error('[marketplace/[id] GET] Unexpected:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
