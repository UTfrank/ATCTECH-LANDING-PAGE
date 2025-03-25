import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
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

        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['atctechconsulting@gmail.com'],
            subject: `Contact Form: ${subject || 'New Message'}`,
            react: ContactFormEmail({ email, name, company, subject, message }),
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}