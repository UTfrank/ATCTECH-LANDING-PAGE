import Link from "next/link"
import Image from "next/image"
import { navigation_links } from "@/constants/navigation"
import { social_links } from "@/constants";

const Footer = () => {
    return (
        <footer className="bg-[#040000] py-20 md:py-[100px] lg:py-[132px]">
            <div className="container flex flex-col gap-y-[46px]">
                <div className="w-8/12 mx-auto flex flex-col gap-y-[18px] *:text-center">
                    <p className="text-[#AEAEB2] font-bold text-base font-syne">Get in touch</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center text-[#FFFAFA] text-xl font-syne font-bold *:px-1">
                        <Link href="tel:+447761425493">
                            +44 7761 425 493
                        </Link><span className="hidden lg:flex">|</span>
                        <Link href="mailto:info@atctech.co.uk">
                            info@atctech.co.uk
                        </Link>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-6">
                    <div className="w-full px-[13px] py-[25px] border-t border-b border-t-[#440001] border-b-[#440001] flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 justify-between items-center">
                        <Link href="/">
                            <Image src="/Logo-white.svg" alt="logo" width={150} height={59} />
                        </Link>
                        <div className="flex items-center gap-x-4 text-[#AEAEB2]">
                            <p className="font-syne font-bold text-xl">Pages</p>
                            <ul className="flex gap-[10px]">
                                {navigation_links.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.path}
                                            className={`transition-colors font-inter text-xs capitalize hover:text-[#FFFAFA]`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-4 text-[#AEAEB2]">
                            <p className="font-syne font-bold text-xl">Contact</p>
                            <p className={`transition-colors font-inter text-xs capitalize`}>
                                BRISTOL, Aztec West
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 justify-between items-center text-[#AEAEB2] lg:w-6/12 mx-auto *:flex">
                        <div className="gap-x-[22px]">
                            {social_links.map(item =>
                                <Link key={item.id} href={item.link} target="_blank">{item.icon}</Link>)}
                        </div>
                        <p className="font-syne text-sm font-medium text-center lg:text-left">© Copyright ATCTech.. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer