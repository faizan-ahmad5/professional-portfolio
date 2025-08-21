import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Submit to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
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
      })
    });

    const result = await response.json();
    
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
