import Image from "next/image"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { mission_list, vision_list } from "@/constants"

const Vision = () => {
    return (
        <section className="bg-[#FFFAFA] py-[100px] font-mulish">
            <div className="w-10/12 md:w-9/12 mx-auto flex flex-col gap-y-10 *:flex *:flex-col *:md:flex-row *:!items-center *:justify-center *:gap-x-0 *:md:gap-x-5 *:lg:gap-x-10 *:gap-y-10 *:md:gap-y-0">
                <div>
                    <div className="w-full md:w-6/12 lg:w-5/12">
                        <div className="flex flex-col gap-y-2 lg:gap-y-8">
                            <h3 className="text-[#040000] text-[24px] lg:text-[32px] font-extrabold w-full lg:w-8/12">Our Mission</h3>
                            <p className="text-[#808080] text-xs lg:text-sm">Driving digital transformation shouldn’t be complex or costly. ATCTECH CONSULTING LTD is built to empower businesses and individuals with innovative solutions for long-term success.</p>
                        </div>
                        <div className="mt-5 flex flex-col gap-y-5 *:flex *:items-center *:gap-x-2 text-[#2F2F2F]">
                            {mission_list.map(item => (
                                <div key={item.id}>
                                    <IoIosCheckmarkCircleOutline className="text-[#31C65B] text-lg" />
                                    <p className="text-[10px] lg:text-xs">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-7/12 h-[150px] md:h-[250px] lg:h-[250px] flex flex-row justify-between gap-x-2 md:gap-x-3 lg:gap-x-8 *:w-full *:md:w-6/12 *:h-full *:rounded-xl *:bg-no-repeat *:bg-[auto_120%] *:md:bg-[auto_95%] *:bg-center">
                        <div style={{ backgroundImage: "url(/about_img_1.jpg)" }}></div>
                        <div style={{ backgroundImage: "url(/about_img_2.jpg)" }}></div>
                    </div>
                </div>

                <div>
                    <div className="w-full md:w-6/12 lg:w-5/12 order-1 md:order-2">
                        <div className="flex flex-col gap-y-2 lg:gap-y-8">
                            <h3 className="text-[#040000] text-[24px] lg:text-[32px] font-extrabold w-full lg:w-8/12">Our Vision</h3>
                            <p className="text-[#808080] text-xs lg:text-sm">Adopting technology for business success doesn’t have to be overwhelming. ATCTECH CONSULTING LTD simplifies digital innovation to help organizations thrive.</p>
                        </div>
                        <div className="mt-5 flex flex-col gap-y-5 *:flex *:items-center *:gap-x-2 text-[#2F2F2F]">
                            {vision_list.map(item => (
                                <div key={item.id}>
                                    <IoIosCheckmarkCircleOutline className="text-[#31C65B] text-lg" />
                                    <p className="text-[10px] lg:text-xs">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-2 md:order-1 w-full md:w-6/12 lg:w-7/12 h-[150px] md:h-[250px] lg:h-[250px] flex flex-row justify-between gap-x-2 md:gap-x-3 lg:gap-x-8 *:w-full *:md:w-6/12 *:h-full *:rounded-xl *:bg-no-repeat *:bg-[auto_120%] *:md:bg-[auto_95%] *:bg-center">
                        <div style={{ backgroundImage: "url(/about_img_1.jpg)" }}></div>
                        <div style={{ backgroundImage: "url(/about_img_2.jpg)" }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision