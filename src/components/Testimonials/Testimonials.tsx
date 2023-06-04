import './Testimonials.css';
import { testimonialData } from '../../data/TestimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export const Testimonials = () => {
    return (
        <section className='section testimonial container' id='testimonials'>
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper 
                loop={true}
                spaceBetween={24}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48
                    }
                }}
                modules={[Pagination]}
                className="testimonial__container"
            >
                {testimonialData.map((data, index) =>{
                    return(
                        <SwiperSlide className="testimonial__card" key={index}>
                            <img src={data.image} className='testimonial__img' alt={data.image} />
                            <h3 className="testimonial__name">{data.title}</h3>
                            <p className="testimonial__description">{data.description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};
