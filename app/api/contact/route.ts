import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured');
        return NextResponse.json(
            { error: 'Email service is not configured' },
            { status: 500 }
        );
    }

    try {
        const formData = await req.json();
        const { name, email, company, subject, message } = formData;

        // Validate required fields
        if (!name || !email || !company || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        try {
            const data = await resend.emails.send({
                from: 'Contact Form <onboarding@resend.dev>',
                to: ['frankjoe261@gmail.com'],
                replyTo: email,
                subject: `Contact Form: ${subject || 'New Message'}`,
                react: ContactFormEmail({ email, name, company, subject, message }),
            });

            if (!data.data?.id) {
                throw new Error('Failed to send email');
            }

            return NextResponse.json({ success: true, id: data.data?.id });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Invalid request data' },
            { status: 400 }
        );
    }
}