import * as React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';

interface ContactFormEmailProps {
    name: string;
    email: string;
    company?: string;
    subject?: string;
    message: string;
}

export const ContactFormEmail = ({
    name,
    email,
    company,
    subject,
    message,
}: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Contact Form Submission</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Contact Form Submission</Heading>
                    <Text style={text}><strong>Name:</strong> {name}</Text>
                    <Text style={text}><strong>Email:</strong> {email}</Text>
                    {company && <Text style={text}><strong>Company:</strong> {company}</Text>}
                    {subject && <Text style={text}><strong>Subject:</strong> {subject}</Text>}
                    <Hr style={hr} />
                    <Section style={messageSection}>
                        <Text style={text}><strong>Message:</strong></Text>
                        <Text style={text}>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '580px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '16px 0',
};

const messageSection = {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '4px',
    marginTop: '20px',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};