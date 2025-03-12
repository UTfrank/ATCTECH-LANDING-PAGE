import Link from "next/link"
import { social_links } from "@/constants";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Topbar = () => {
    return <div className="w-full bg-black text-[#FFFAFA] py-[18px] flex justify-center items-center font-lato">
        <div className="w-9/12 flex justify-between items-center *:flex *:items-center *:gap-x-2.5 *:text-[13px] *:font-normal">
            <div>
                <CiClock2 />
                Monday - Friday 8AM - 9PM
            </div>
            <div className="*:flex *:justify-between *:items-center">
            <div>
                <IoLocationOutline />
                27 Paramount building, princess Street, Swindon, UK, SN1 2SD
            </div>
            <div className="ml-24 gap-x-[25px]">
                {social_links.map(item =>
                    <Link key={item.id} href={item.link}>{item.icon}</Link>)}
                </div></div>
        </div>
    </div>
}

export default Topbar