import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Enhanced debugging
    console.log('=== CONTACT API DEBUG START ===');
    console.log('Request method:', request.method);
    console.log('Request URL:', request.url);
    
    // Environment variable debugging
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length || 0);
    console.log('RESEND_API_KEY first 10 chars:', process.env.RESEND_API_KEY?.substring(0, 10) || 'N/A');
    console.log('RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL);
    
    // Check if Resend is properly initialized
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: API key missing' },
        { status: 500 }
      );
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend instance created successfully');
    
    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log('Request body parsed successfully:', { 
        name: body.name ? 'present' : 'missing',
        email: body.email ? 'present' : 'missing', 
        subject: body.subject ? 'present' : 'missing',
        message: body.message ? 'present' : 'missing'
      });
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request body format' },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message } = body;

    // Validation with detailed logging
    console.log('Validating fields...');
    if (!name || !email || !subject || !message) {
      console.log('Missing fields:', { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    console.log('All validations passed, preparing to send email...');

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: 'enezgubeljic@gmail.com', 
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your portfolio contact form.
      `,
    });

    console.log('Email sent successfully via Resend:', data);
    console.log('=== CONTACT API DEBUG END ===');

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== CONTACT API ERROR ===');
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('Full error object:', error);
    console.error('=== END ERROR LOG ===');
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
