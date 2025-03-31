"use client";

import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import Button from "../Button"

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess(false);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.error || 'Failed to send message');
            }

            setSuccess(true);
            toast(({ closeToast }) => <p className="text-green-500 text-sm">Your message has been received. Our team will review your inquiry and respond as soon as possible.</p>);
            form.reset();
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
            toast(({ closeToast }) => <p className="text-red-500 text-sm">{errorMessage}</p>);
            console.error('Contact form error:', err);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="absolute top-4/12 md:top-6/12 w-10/12 rounded-xl py-[50px] md:py-[99px] px-5 md:px-[56px] form-shadow bg-white flex flex-col gap-y-10" data-aos="fade-up">
            <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-12 gap-y-4 md:gap-y-0 *:w-full *:md:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="text-black w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="text-black w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-12 gap-y-4 md:gap-y-0 *:w-full *:md:w-1/2" data-aos="fade-up" data-aos-delay="200">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="text-black w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="text-black w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
            </div>
            <div className="w-full" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="text-black w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                ></textarea>
            </div>
            {/*atcTech@resend25*/}
            <Button
                type="submit"
                variant="secondary"
                className="w-fit"
                disabled={isLoading}
            >
                {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
            <ToastContainer />
        </form>
    )
}

export default ContactForm