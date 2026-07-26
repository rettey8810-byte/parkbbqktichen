import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, bookingNumber, employeeName, bookingDate, slot } = body;

    console.log('Email request received:', { email, bookingNumber, employeeName, bookingDate, slot });

    // Check if API key is configured
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    if (!sendgridApiKey || sendgridApiKey === 'your_sendgrid_api_key_here') {
      console.warn('SendGrid API key not configured. Skipping email send.');
      return NextResponse.json({ success: false, error: 'API key not configured' }, { status: 200 });
    }

    console.log('Sending email with SendGrid');

    sgMail.setApiKey(sendgridApiKey);

    const msg = {
      to: email,
      from: 'villaparkbbqkitchen@gmail.com',
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
    };

    const data = await sgMail.send(msg);
    console.log('SendGrid response:', JSON.stringify(data));
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
