import { counter } from "@/constants";
import Button from "../Button";

interface StatisticsProps {
    isBackground?: boolean;
}

const Statistics = ({ isBackground = true }: StatisticsProps) => {
    return (
        <section className={`py-16 w-full flex justify-center bg-[#710000] font-mulish ${!isBackground && "bg-transparent"}`}>
            <div className="w-10/12 lg:w-9/12 lg:px-20 flex flex-col gap-11">
                <h6 className={`text-center text-[24px] lg:text-4xl font-extrabold ${isBackground ? "text-[#FF9090]" : "text-[#040000]"}`}>Businesses worldwide trust our expertise to elevate and grow their brand.</h6>
                <div className="flex justify-between gap-x-6 md:gap-x-[50px] w-full">
                    {counter.map(item => (
                        <div key={item.id} className="flex flex-col gap-y-[7px] items-center justify-center text-center">
                            <h6 className={`text-[18px] md:text-[24px] lg:text-4xl font-extrabold ${isBackground ? "text-[#FFFAFA]" : "text-[#710000]"}`}>{item.count}</h6>
                            <p className={`text-xs lg:text-sm font-normal ${isBackground ? "text-[#FF9090]" : "text-[#8E8E93]"}`}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className={`border-t border-t-[#DCDCDC] pt-8 flex flex-col items-center gap-y-4 ${!isBackground && "hidden"}`}>
                    <p className="text-[#FFF5F5] font-semibold text-base md:text-lg text-center md:text-left">Join 160,000+ people and businesses like you</p>
                    <Button variant="primary" fullWidth={false} size="md" className="w-fit text-sm">Select a Plan</Button>
                </div>
            </div>
        </section>
    )
}

export default Statistics