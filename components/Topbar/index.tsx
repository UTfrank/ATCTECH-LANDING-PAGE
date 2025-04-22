import Link from "next/link"
import { social_links } from "@/constants";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Topbar = () => {
    return <div className="w-full bg-black text-[#FFFAFA] py-[18px] flex justify-center items-center font-lato">
        <div className="lg:w-9/12 md:w-11/12 w-11/12 flex md:flex-row flex-col justify-between items-center md:gap-x-3 md:gap-y-0 gap-y-2 *:flex *:items-center *:gap-x-2.5 *:lg:text-[13px] *:md:text-[11px] *:text-[9.2px] *:font-normal">
            <div>
                <CiClock2 />
                Monday - Friday 9AM - 5PM
            </div>
            <div className="*:flex md:flex-row flex-col gap-y-2 *:justify-between *:items-center">
                <div>
                    <IoLocationOutline />
                    BRISTOL, Aztec West
                </div>
                <div className="md:ml-24 gap-x-[25px]">
                    {social_links.map(item =>
                        <Link key={item.id} href={item.link} target="_blank">{item.icon}</Link>)}
                </div></div>
        </div>
    </div>
}

export default Topbar