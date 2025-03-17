import Link from "next/link"
import Button from "../Button"
import { work_process } from "@/constants"

const WorkProcess = () => {
    return (
        <section className="py-10 w-full font-mulish">
            <div className="container flex flex-col md:flex-row justify-between items-center md:gap-x-10 lg:gap-x-28 gap-y-4">
                <div className="py-[60px] px-10 border text-white rounded-xl flex flex-col gap-y-4 md:gap-y-6 bg-options work_process-bg w-full md:w-[45%] lg:w-[30%]">
                    <h4 className="text-[24px] lg:text-[36px] lg:leading-10 font-extrabold">Our Working
                        Process - How
                        We Work For Our
                        Customers</h4>
                    <p className="text-[13px] font-normal">We follow a simple and effective process to deliver the best results.</p>
                    <Button variant="primary" size="md" className="w-fit">Get Started</Button>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-x-4 lg:gap-x-[100px] gap-y-7">
                    {work_process.map(item => (
                        <div key={item.id} className="text-[#040000]">
                            <div>
                                <span className={`text-[34px] font-black ${item.id === "02" && "text-[#710000]"}`}>{item.id}</span>
                            </div>
                            <h5 className="text-xl font-bold lg:w-7/12">{item.title}</h5>
                            <p className="text-[#808080] text-[13px] font-normal w-10/12">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkProcess