import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { PrevButton, NextButton } from './button';
import { useRecursiveTimeout } from "./useRecursiveTimeout";

const useEmbla = ({ options, autoplay }) => {
    const AUTOPLAY_INTERVAL = 2000
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const [viewportRef, embla] = useEmblaCarousel(options);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    const autoplayFn = useCallback(() => {
        if (!embla) return;
        if (embla.canScrollNext()) {
            embla.scrollNext();
        } else {
            embla.scrollTo(0);
        }
    }, [embla]);

    const { play, stop } = useRecursiveTimeout(autoplayFn, AUTOPLAY_INTERVAL);


    useEffect(() => {
        if (!embla) return;
        embla.on('select', onSelect);
        onSelect();
    }, [embla, onSelect]);

    useEffect(() => {
        if (autoplay) {
            play();
        } else {
            stop()
        }
    }, [play, autoplay, stop]);




    const Arows = () => {
        return (
            <div className='testimonial-area clear-arrows' >
                <div className='slider-arrows'>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </div>
            </div>
        );
    };

    return { slides, Arows, viewportRef };
};

export default useEmbla;
