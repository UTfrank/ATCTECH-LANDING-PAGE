"use client";

import { learning_section } from "@/constants";
import CourseRegistrationModal from "@/components/CourseRegistrationModal";

const LearnApproach = () => {
    return (
        <section className="w-full flex justify-center bg-[#0400000F] font-mulish">
            <div className="w-10/12 lg:w-9/12 flex flex-col justify-between items-center gap-y-[30px] py-[50px]">
                <h4 className="text-[#2F2F2F] text-[24px] lg:text-[40px] font-extrabold">Our Learning Approach</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {learning_section.map(item => (
                        <div key={item.id} className="flex flex-col gap-y-5 rounded-xl bg-[#FFFFFF80] hover:bg-white transition-all ease-in duration-300 border border-[#DCDCDC] px-6 py-7">
                            <div className="flex flex-col gap-2.5">
                                <h5 className="text-[#040000] text-xl font-bold">{item.title}</h5>
                                <p className="text-[#808080] text-[13px] font-normal">{item.subtitle}</p>
                            </div>
                            <div className="flex justify-between items-center border-t-[0.5px] border-[#DCDCDC] pt-3">
                                <img src={item.image} width={38} height={40} alt="image" />
                                <CourseRegistrationModal
                                    trigger={
                                        <button className="text-[13px] font-semibold text-[#710000] hover:text-white hover:bg-[#710000] border border-[#040000] hover:border-[#710000] py-1.5 px-5 rounded-full transition-all ease-in duration-300">
                                            Get Started
                                        </button>
                                    }
                                    courseTitle={item.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LearnApproach