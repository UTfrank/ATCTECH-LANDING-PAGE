"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { navigation_links } from "@/constants/navigation"
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className="w-full flex justify-center items-center py-6">
            <div className="container flex justify-between items-center">
                <Link href="/" className="w-fit">
                    <Image src="/Logo.svg" alt="logo" width={100} height={100} />
                </Link>
                <ul className="flex gap-[27px] bg-white/50 py-3 px-10 border-2 border-white rounded-[17px]">
                    {navigation_links.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.path}
                                className={`transition-colors font-inter text-xs capitalize ${pathname === link.path ? 'text-[#870000] font-bold' : 'text-[#8987A1] hover:text-gray-900 font-normal'}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center gap-3 bg-white/50 py-1 px-2 pr-10 border-2 border-white rounded-full">
                    <li className="h-[30px] w-[30px] rounded-full bg-[#710000] flex justify-center items-center text-white text-base">
                        <IoCallOutline />
                    </li>
                    <li>
                        <Link href="tel:+123456789" className="text-xs font-lato font-semibold text-[#040000]">+123 456 789</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
