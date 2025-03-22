"use client"
import Button from '@/components/Button';
import { HeaderCarousel } from '@/components/HeaderCarousel';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    return (
        <header className="bg-options md:bg-contain bg-top bg-header pt-[83px] mb-6">
            <div className="container flex flex-col gap-y-8">
                <div className="flex flex-col md:flex-row gap-y-4 justify-between *:md:w-1/2">
                    <div className="flex flex-col gap-y-[10px] text-white font-mulish">
                        <h1 className="text-4xl font-extrabold text-wrap">Driving Digital Excellence with Tailored Solutions.</h1>
                        <p className="text-[13.5px]">We craft innovative strategies and cutting-edge solutions to help businesses and professionals thrive in the evolving tech landscape. </p>
                    </div>
                    <div className="flex md:justify-end items-center gap-4">
                        <Button variant="primary" size="md" onClick={() => router.push("contact")}>Get Started</Button>
                        <Button variant="outline" size="md" onClick={() => router.push("contact")}>Book a Session</Button>
                    </div>
                </div>
                <div className="flex h-[40vh] lg:h-[69vh] overflow-hidden rounded-xl mb-6 sm:mb-0">
                    <HeaderCarousel />
                </div>
            </div>
        </header>
    )
}

export default Header