import Image from 'next/image'
import { partners } from '@/constants'

const Brands = () => {
    return (
        <div className='border-t border-t-[#DCDCDC] pt-6 md:pt-12 flex flex-row justify-between items-center overflow-scroll'>
            {partners.map(item => (
                <div key={item.id}><Image src={item.image} sizes='100vw' width={500}
                    height={300} alt='partner companies' className='w-full h-auto' /></div>
            ))}
        </div>
    )
}

export default Brands