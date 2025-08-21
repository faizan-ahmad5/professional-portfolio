import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Log incoming request for debugging
    console.log('Contact form submission:', { name, email, subject: subject || 'N/A', messageLength: message?.length || 0 });
    console.log('Environment check:', { hasAccessKey: !!process.env.WEB3FORMS_ACCESS_KEY });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed - missing fields:', { name: !!name, email: !!email, message: !!message });
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed - invalid email format:', email);
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Submit to Web3Forms
    console.log('Submitting to Web3Forms...');
    const formData = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      name,
      email,
      subject: subject || 'Contact Form Submission',
      message,
      from_name: name,
      replyto: email,
      // Add some metadata
      source: 'Portfolio Website',
      timestamp: new Date().toISOString()
    };

    console.log('Form data prepared:', { ...formData, access_key: formData.access_key ? '[REDACTED]' : 'MISSING' });

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log('Web3Forms response:', { status: response.status, success: result.success, message: result.message });
    
    if (response.ok && result.success) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!'
      });
    } else {
      console.error('Web3Forms error:', result);
      return NextResponse.json(
        { success: false, message: result.message || 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
