"use client"
import Button from '@/components/Button';
import { HeaderCarousel } from '@/components/HeaderCarousel';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    return (
        <header className="bg-options bg-contain bg-top bg-header h-screen pt-[83px]">
            <div className="container flex flex-col gap-y-8">
                <div className="flex justify-between *:w-1/2">
                    <div className="flex flex-col gap-y-[10px] text-white font-mulish">
                        <h1 className="text-4xl font-extrabold text-wrap">Empowering Innovation, Building Digital Success </h1>
                        <p className="text-[13.5px]">Our team of seasoned tech professionals is dedicated to delivering top-tier consulting, training, and mentorship—turning bold ideas into groundbreaking solutions.  </p>
                    </div>
                    <div className="flex justify-end items-center gap-4">
                        <Button variant="primary" size="md" onClick={() => router.push("contact")}>Get Started</Button>
                        <Button variant="outline" size="md" onClick={() => router.push("contact")}>Book a Session</Button>
                    </div>
                </div>
                <div className="flex h-[69vh] overflow-hidden rounded-xl">
                    <HeaderCarousel />
                </div>
            </div>
        </header>
    )
}

export default Header