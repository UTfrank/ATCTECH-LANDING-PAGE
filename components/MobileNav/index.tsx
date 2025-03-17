"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { RiMenu3Fill } from "react-icons/ri";
import { navigation_links } from "@/constants/navigation"


const MobileNav = () => {
    const pathname = usePathname()

    return (
        <div className="md:hidden container py-[23px]">
            <Sheet>
                <div className="flex justify-between">
                    <Link href="/" className="w-fit">
                        <Image src="/Logo.svg" alt="logo" width={100} height={100} />
                    </Link>
                    <SheetTrigger className="!text-xl text-[#710000] cursor-pointer"><RiMenu3Fill /></SheetTrigger>
                </div>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                            <ul className="flex flex-col gap-[27px] bg-white/50 py-3 px-10 border-2 border-white rounded-[17px]">
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
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav