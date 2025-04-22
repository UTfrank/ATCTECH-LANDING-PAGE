"use client"
import React, { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { testimonials } from '@/constants';

const TestimonialCard = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);


    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi]);
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi]);

    return (
        <div className="embla relative font-mulish">
            <div className="embla__viewport h-full md:w-9/12 mx-auto" ref={emblaRef} data-aos="fade-in">
                <div className="embla__container">

                    {testimonials.map(item => (
                        <div key={item.id} className="embla__slide flex flex-col items-center gap-y-5" data-aos="fade-up" data-aos-delay="100">
                            <div className='flex flex-col items-center gap-y-6'>
                                <div className='h-[143px] w-[143px] rounded-full overflow-hidden flex justify-center items-center bg-options' style={{ backgroundImage: `url(${item.image})`}}>
                                    {/* <Image src={item.image} alt='testimonal image' width={1000} height={1000} className='h-full w-full' /> */}
                                </div>
                                <div className='flex flex-col items-center gap-y-2'>
                                    <h5 className='flex'><strong>{item.name}</strong>, {item.title}</h5>
                                    <div className='flex text-[#FFA722]'>
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
                                    </div>
                                </div>
                                <p className='w-8/12 text-center text-[#040000] text-[10px] md:text-xs lg:text-base'>{item.testimony}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full absolute top-8/12 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-between p-0">
                <div className='flex justify-center items-center'>
                    <button className="h-[45px] w-[45px] text-xl rounded-full bg-[#FFFAFA] hover:bg-[#710000] hover:text-white cursor-pointer flex justify-center items-center embla__prev" onClick={scrollPrev}><FaChevronLeft /></button>
                </div>
                <div className='flex justify-center items-center'>
                    <button className="h-[45px] w-[45px] text-xl rounded-full bg-[#FFFAFA] hover:bg-[#710000] hover:text-white cursor-pointer flex justify-center items-center embla__next" onClick={scrollNext}><FaChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard