import { addresses } from "@/constants"

const Address = () => {
    return (
        <div className="container mx-auto mt-[450px] md:mt-[500px] py-9">
            <div className="text-center">
                <h4 className="text-[#2F2F2F] text-[24px] lg:text-[40px] font-extrabold">We’re Global and Growing</h4>
                <p className="text-[#808080] font-normal text-sm md:w-8/12 mx-auto">Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-x-0 md:gap-x-[20px] gap-y-[27px] md:gap-y-0 w-full md:w-10/12 mx-auto">
                {addresses.map(item => (
                    <div key={item.id} className="text-center w-full md:w-7/12 relative rounded-xl py-[66px] bg-[#FFFAFA]">
                        {item.country === "United States" && <span className="absolute top-2 left-2 bg-[#710000] text-white text-[13px] rounded-full px-4 py-2">Main Office</span>}
                        <div className="flex flex-col gap-y-4 mx-auto w-full md:w-8/12">
                            <div className={`h-[75px] w-[75px] font-black text-sm rounded-full flex justify-center items-center mx-auto ${item.slug === "USA" ? "bg-[#FFDCE9] text-[#DD7FA1]" : item.slug === "UK" ? "bg-[#C5E8C4] text-[#6EAB6C]" : "bg-[#B1DEFF] text-[#3694D8]"}`}>{item.slug}</div>
                            <h6 className="text-[#040000] text-[16px] lg:text-[20px] font-bold">{item.country}</h6>
                            <p className="text-[#8E8E93] font-normal text-sm">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Address