import { useEffect, useRef, useState } from 'react';
import './scrolltop.css'

export const Scrolltop = () => {
    const [backToTop, setBackToTop] = useState(false);
    const scrollRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {                
                setBackToTop(true);
                scrollRef.current?.classList.add('show-scroll');
            } else {
                setBackToTop(false);
                scrollRef.current?.classList.remove('show-scroll');
            }
        }, 1000)
        return () => clearInterval(intervalId);
    }, [scrollRef]);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <a href='#' className='scrollup' ref={scrollRef}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};
