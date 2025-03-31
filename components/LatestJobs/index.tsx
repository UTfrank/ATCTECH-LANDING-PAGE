import { latest_jobs } from "@/constants"
import Button from "../Button"
import Link from "next/link"

const LatestJobs = () => {
    return (
        <section className="mt-[54px] bg-[#FFFAFA] py-5 pb-16 font-mulish flex justify-center">
            <div className="w-10/12 lg:w-9/12 flex flex-col gap-y-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-3 md:gap-y-0 w-full">
                    <div>
                        <h3 className="text-[#040000] text-[24px] lg:text-[32px] font-extrabold w-full lg:w-8/12" data-aos="fade-right">Latest Jobs</h3>
                        <p className="text-[#808080] font-normal text-sm md:w-8/12" data-aos="fade-right" data-aos-delay="100">We currently support Facebook, Instagram, LinkedIn and Twitter. More to come. Felix is purpose built for ease of use and complete flexability.</p>
                    </div>
                    <Button variant="outline" size="md" className="!text-[#2F2F2F] !text-[12.5px] !md:text-sm px-4 py-4 !border !border-[#DCDCDC] !w-[205px]" data-aos="fade-left">See More News</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-9 md:gap-x-3 gap-y-6 md:gap-y-0">
                    {latest_jobs.map((item, index) => (
                        <div key={item.id} className="flex flex-col gap-y-5" data-aos="fade-up" data-aos-delay={200 * index}>
                            <div className="h-[250px] lg:h-[300px] overflow-hidden rounded-xl relative px-5 py-3.5 flex flex-col justify-end after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-options after:bg-[#000000] after:opacity-30 after:z-[1]" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="relative z-[2] w-fit bg-[#ffffff] text-[#2F2F2F] text-xs lg:text-sm font-semibold py-2.5 px-6 rounded-full">{item.tag}</div>
                            </div>
                            <p className="text-[#808080] font-normal text-sm">{item.date}</p>
                            <div className="border-t border-t-[#DCDCDC] flex flex-col gap-y-1.5 lg:gap-y-3 pt-3 text-[#2F2F2F]">
                                <h6 className="md:text-lg lg:text-2xl font-bold ">{item.title}</h6>
                                <Link href="/jobs" className="text-sm font-semibold">View More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LatestJobs