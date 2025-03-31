import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
import { team_members } from "@/constants"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
    return (
        <section className="mt-14 py-[100px] md:py-[195px] bg-options font-mulish text-white" style={{ backgroundImage: "url(/team_bg.png)" }}>
            <div className="w-10/12 lg:w-9/12 mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 md:gap-y-0 w-full">
                    <div>
                        <h3 className="text-[24px] lg:text-[32px] font-extrabold w-full lg:w-8/12" data-aos="fade-right">Our Team</h3>
                        <p className="font-normal text-sm md:w-8/12" data-aos="fade-right" data-aos-delay="100">Joining a dynamic team doesn't have to be complicated. ATCTECH CONSULTING LTD is built to empower talent for growth and success.</p>
                    </div>
                    <Button variant="primary" size="md" className="!text-[#040000] !text-[12.5px] !md:text-sm hover:!bg-white px-4 py-4 !w-[205px]" data-aos="fade-left">Join Our Team</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-5 gap-y-5 md:gap-y-0 mt-10">
                    {team_members.map((item, index) => (
                        <div key={item.id} className="flex flex-col gap-y-4" data-aos="fade-up" data-aos-delay={200 * index}>
                            <div className="md:h-[270px] lg:h-[350px] w-full overflow-hidden rounded-xl">
                                <Image src={item.image} alt="team" width={300} height={300} sizes="100vw" className="w-full h-auto" />
                            </div>
                            <div className="text-center">
                                <h6 className="font-bold text-xl">{item.name}</h6>
                                <p className="text-sm font-semibold">{item.title}</p>
                            </div>
                            <div className="flex justify-center gap-x-2 text-white">
                                <Link href={item.facebook} target="_blank" className="text-white hover:text-white/70 text-sm"><FaFacebookF /></Link>
                                <Link href={item.twitter} target="_blank" className="text-white hover:text-white/70 text-sm"><FaTwitter /></Link>
                                <Link href={item.linkedin} target="_blank" className="text-white hover:text-white/70 text-sm"><FaLinkedinIn /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team