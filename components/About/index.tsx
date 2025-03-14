import Image from "next/image"
import { about_details } from "@/constants"
import Button from "@/components/Button"

const About = () => {
    return (
        <div className="w-full font-mulish">
            <div className="container flex gap-x-[60px] p-5">
                <div className="flex flex-col gap-y-[27px] w-5/12">
                    <div className="h-[65%] rounded-xl overflow-hidden bg-options about_bg-1">
                        {/* <Image src="/about.png" alt="about-image" width={1000} height={2000} sizes="100vw" className="w-full h-auto" /> */}
                    </div>
                    <div className="w-full flex gap-x-[29px]">
                        <div className="px-8 py-[54px] rounded-xl bg-[#710000] text-white flex flex-col font-mulish">
                            <h6 className="text-5xl font-extrabold">500K</h6>
                            <p className="text-sm font-semibold">Daily Active Users</p>
                        </div>
                        <div className="overflow-hidden flex-1 rounded-xl bg-options about_bg-2">
                            {/* <Image src="/slider_2.png" alt="slider-image" width={1000} height={2000} sizes="100vw" className="w-full h-auto" /> */}
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-8">
                        <h3 className="text-[#040000] text-[32px] font-extrabold w-8/12">We're on a mission to bring ideas to life.</h3>
                        <p className="text-[#808080] text-sm">ATCTECH CONSULTING LTD is a premier technology consulting firm committed to driving digital transformation and innovation. We specialize in providing expert solutions, professional training, and strategic mentorship to businesses and individuals looking to thrive in the ever-evolving tech industry. Our team of seasoned professionals brings extensive experience across various technological fields, ensuring tailored solutions that align with our clients’ unique goals.</p>
                    </div>
                    <ul className="pt-7 w-8/12 border-t flex flex-col gap-y-6">
                        {about_details.map(item => (
                            <li key={item.id} className="flex gap-x-[22px]">
                                <div className="h-[70px] w-[70px] bg-[#FFFAFA] rounded-xl flex justify-center items-center text-[#710000] text-2xl">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col gap-y-1 w-8/12">
                                    <h6 className="text-[#040000] text-xl font-bold">{item.title}</h6>
                                    <p className="text-[#808080] text-sm font-normal">{item.subtitle}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Button variant="secondary" fullWidth={false} size="md" className="w-fit">Join our Team</Button>
                </div>
            </div>
        </div>
    )
}

export default About