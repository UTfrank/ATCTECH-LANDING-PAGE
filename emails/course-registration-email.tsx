import * as React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';

interface CourseRegistrationEmailProps {
    course: string;
    startDate: string;
    duration: string;
    packageCost: string;
    name?: string;
    email?: string;
}

export const CourseRegistrationEmail = ({
    course,
    startDate,
    duration,
    packageCost,
    name,
    email,
}: CourseRegistrationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Course Registration</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Course Registration</Heading>
                    {name && <Text style={text}><strong>Name:</strong> {name}</Text>}
                    {email && <Text style={text}><strong>Email:</strong> {email}</Text>}
                    <Text style={text}><strong>Course:</strong> {course}</Text>
                    <Text style={text}><strong>Start Date:</strong> {startDate}</Text>
                    <Text style={text}><strong>Duration:</strong> {duration} Months</Text>
                    <Text style={text}><strong>Package Cost:</strong> {packageCost}</Text>
                    <Hr style={hr} />
                    <Section>
                        <Text style={text}>A new course registration has been submitted.</Text>
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
    lineHeight: '1.5',
};

const text = {
    color: '#333',
    fontSize: '16px',
    margin: '24px 0',
    padding: '0',
    lineHeight: '1.5',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};