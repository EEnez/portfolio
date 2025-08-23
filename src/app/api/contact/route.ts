import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== CONTACT API DEBUG START ===');
    console.log('Request method:', request.method);
    console.log('Request URL:', request.url);
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));
    
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    
    console.log('RESEND_API_KEY exists:', !!apiKey);
    console.log('RESEND_API_KEY length:', apiKey?.length || 0);
    console.log('RESEND_API_KEY first 10 chars:', apiKey?.substring(0, 10) || 'N/A');
    console.log('RESEND_FROM_EMAIL:', fromEmail);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables');
      return NextResponse.json(
        { 
          error: 'Server configuration error: API key missing',
          details: 'Please check your environment configuration'
        },
        { status: 500 }
      );
    }
    
    if (apiKey.length < 20) {
      console.error('RESEND_API_KEY appears to be invalid (too short)');
      return NextResponse.json(
        { 
          error: 'Server configuration error: Invalid API key format',
          details: 'API key appears to be malformed'
        },
        { status: 500 }
      );
    }
    
    const resend = new Resend(apiKey);
    console.log('Resend instance created successfully');
    
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
        { 
          error: 'Invalid request body format',
          details: 'Request must contain valid JSON'
        },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message } = body;

    console.log('Validating fields...');
    const validationErrors = [];
    
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      validationErrors.push('Name is required and must be a non-empty string');
    }
    
    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      validationErrors.push('Email is required and must be a non-empty string');
    }
    
    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      validationErrors.push('Subject is required and must be a non-empty string');
    }
    
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      validationErrors.push('Message is required and must be a non-empty string');
    }
    
    if (validationErrors.length > 0) {
      console.log('Validation errors:', validationErrors);
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationErrors
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.log('Invalid email format:', email);
      return NextResponse.json(
        { 
          error: 'Invalid email format',
          details: 'Please provide a valid email address'
        },
        { status: 400 }
      );
    }
    
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedSubject = subject.trim();
    const sanitizedMessage = message.trim();
    
    console.log('All validations passed, preparing to send email...');
    console.log('Sanitized data:', {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      messageLength: sanitizedMessage.length
    });

    const fromEmailAddress = fromEmail || 'onboarding@resend.dev';
    
    const data = await resend.emails.send({
      from: fromEmailAddress,
      to: 'enezgubeljic@gmail.com', 
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${sanitizedMessage}</p>
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

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
This email was sent from your portfolio contact form.
      `,
    });

    console.log('Email sent successfully via Resend:', data);
    console.log('=== CONTACT API DEBUG END ===');

    return NextResponse.json(
      { 
        message: 'Email sent successfully', 
        data,
        timestamp: new Date().toISOString()
      },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error('=== CONTACT API ERROR ===');
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('Full error object:', error);
    
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const resendError = error as { statusCode?: number; message?: string };
      console.error('Resend API error status:', resendError.statusCode);
      console.error('Resend API error details:', resendError.message);
    }
    
    console.error('=== END ERROR LOG ===');
      
    let errorMessage = 'Failed to send email. Please try again later.';
    let statusCode = 500;
    
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        errorMessage = 'Server configuration error. Please contact administrator.';
        statusCode = 500;
      } else if (error.message.includes('rate limit')) {
        errorMessage = 'Too many requests. Please try again later.';
        statusCode = 429;
      } else if (error.message.includes('validation')) {
        errorMessage = 'Invalid email data. Please check your input.';
        statusCode = 400;
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: 'An unexpected error occurred while processing your request',
        timestamp: new Date().toISOString()
      },
      { 
        status: statusCode,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }
    );
  }
}
