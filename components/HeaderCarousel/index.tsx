"use client"
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Fade from 'embla-carousel-fade';

type UseAutoplayType = {
    autoplayIsPlaying: boolean
}

export function HeaderCarousel() {
    const [autoplay, setAutoplay] = useState<boolean>(true);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
        },
        [
            Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                playOnInit: true
            }),
            Fade(),
        ],
    );

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi]);
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi]);

    const [autoplayIsPlaying, setAutoplayIsPlaying] = useState<boolean>(true);

    useEffect(() => {
        if (!emblaApi) return;

        const autoplayPlugin = emblaApi?.plugins().autoplay;
        if (!autoplayPlugin) return;

        const onAutoplayChange = () => {
            setAutoplayIsPlaying(autoplayPlugin.isPlaying());
        };

        return () => {
            autoplayPlugin.play();
            autoplayPlugin.stop();
        };
    }, [emblaApi]);

    return (
        <div className="embla w-full h-full relative">
            <div className="embla__viewport h-full" ref={emblaRef}>
                <div className="embla__container h-full">
                    <div className="embla__slide bg-options slider_bg-1"></div>
                    <div className="embla__slide bg-options slider_bg-2"></div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-x-[130px]">
                <div className='h-[85px] w-[85px] rounded-full relative before:content-[""] before:h-full before:w-full before:absolute before:backdrop-blur-3xl before:bg-white/[0.03] before:-z-[1] overflow-hidden flex justify-center items-center'>
                    <button className="h-[45px] w-[45px] text-xl rounded-full bg-[#FFFAFA] hover:bg-[#710000] hover:text-white cursor-pointer flex justify-center items-center embla__prev" onClick={scrollPrev}><GoArrowLeft /></button>
                </div>
                <div className='h-[85px] w-[85px] rounded-full relative before:content-[""] before:h-full before:w-full before:absolute before:backdrop-blur-3xl before:bg-white/[0.03] before:-z-[1] overflow-hidden flex justify-center items-center'>
                    <button className="h-[45px] w-[45px] text-xl rounded-full bg-[#FFFAFA] hover:bg-[#710000] hover:text-white cursor-pointer flex justify-center items-center embla__next" onClick={scrollNext}><GoArrowRight /></button>
                </div>
            </div>
        </div>
    )
}
