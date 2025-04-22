import Image from 'next/image'
import { partners } from '@/constants'

const Brands = () => {
    return (
        <div className='border-t border-t-[#DCDCDC] pt-6 md:pt-12 flex flex-row justify-between items-center overflow-x-scroll scrollbar-hidden'>
            {partners.map((item, index) => (
                <div key={item.id} data-aos="fade-up" data-aos-delay={100 * index} style={{ backgroundImage: `url(${item.image})` }} className='h-[50px] w-3/12 bg-options bg-contain'>
                    {/* <Image src={item.image} sizes='100vw' width={500} height={300} alt='partner companies' className='w-full h-auto' /> */}
                </div>
            ))}
        </div>
    )
}

export default Brands