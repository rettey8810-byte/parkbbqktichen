import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, bookingNumber, employeeName, bookingDate, slot } = body;

    console.log('Email request received:', { email, bookingNumber, employeeName, bookingDate, slot });

    // Check if API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey || resendApiKey === 'your_resend_api_key_here') {
      console.warn('Resend API key not configured. Skipping email send.');
      return NextResponse.json({ success: false, error: 'API key not configured' }, { status: 200 });
    }

    console.log('Sending email with API key:', resendApiKey.substring(0, 10) + '...');

    const resend = new Resend(resendApiKey);
    const data = await resend.emails.send({
      from: 'Park BBQ Kitchen <villaparkbbqkitchen@gmail.com>',
      to: [email],
      subject: 'Your Park BBQ Kitchen Booking Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Park BBQ Kitchen</h1>
            <p style="color: white; margin: 10px 0 0 0;">Booking Confirmation</p>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <p style="font-size: 16px; color: #333;">Dear ${employeeName},</p>
            <p style="font-size: 16px; color: #333;">Your booking has been successfully created!</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <p style="font-size: 14px; color: #666; margin: 0 0 5px 0;">Your Booking Number:</p>
              <p style="font-size: 24px; font-weight: bold; color: #333; margin: 0;">${bookingNumber}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="font-size: 14px; color: #666; margin: 5px 0;"><strong>Date:</strong> ${bookingDate}</p>
              <p style="font-size: 14px; color: #666; margin: 5px 0;"><strong>Time Slot:</strong> ${slot}</p>
            </div>
            
            <p style="font-size: 14px; color: #333; margin: 20px 0;">Please save your booking number. You can use it to manage your booking through the app.</p>
            
            <p style="font-size: 14px; color: #666; margin: 20px 0;">If you have any questions, please contact support.</p>
            
            <p style="font-size: 14px; color: #333; margin: 30px 0;">Best regards,<br>Park BBQ Kitchen Team</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
