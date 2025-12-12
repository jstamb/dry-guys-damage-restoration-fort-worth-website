import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
  source: z.string().optional(),
  page: z.string().optional(),
  type: z.enum(['contact', 'quote']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = leadSchema.parse(body);

    // Log the lead
    console.log('[Lead] New submission:', {
      ...validated,
      timestamp: new Date().toISOString(),
    });

    // Send to webhook if configured
    if (process.env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEAD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...validated,
            timestamp: new Date().toISOString(),
            ip: request.headers.get('x-forwarded-for'),
            userAgent: request.headers.get('user-agent'),
          }),
        });
      } catch (webhookError) {
        console.error('[Lead] Webhook error:', webhookError);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error('[Lead] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
