import Image1 from '../assets/testimonial1.png';
import Image2 from '../assets/testimonial2.png';
import Image3 from '../assets/testimonial3.png';

export interface Testimonial {
    id: number,
    title: string,
    image: string,
    description: string
}

export const testimonialData: Testimonial[] = [
    {
        id: 1,
        title: 'Kdda',
        image: Image1,
        description: 'lorem ipsum dolor sit amet lore m themselves auctor and auctor of the world.'
    },
    {
        id: 2,
        title: 'Kddt',
        image: Image2,
        description: 'lorem ipsum dolor sit amet lore m themselves a conductor and a conductor of the world.'
    },
    {
        id: 3,
        title: 'Srivari Developers',
        image: Image3,
        description: 'lorem ipsum dolor sit amet lore m themselves a conductor and a conductor of the world.'
    }
]