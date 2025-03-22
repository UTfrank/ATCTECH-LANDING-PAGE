'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                'fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#710000] text-white shadow-lg transition-all duration-300 cursor-pointer',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            )}
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
}