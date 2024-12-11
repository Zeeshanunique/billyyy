// Create a new file: app/api/submit-form/route.ts
import { connectDB } from '@/lib/mongodb';
import { Form } from '@/models/Form';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const form = await Form.create(body);
    return NextResponse.json({ success: true, data: form });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  }
}