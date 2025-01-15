import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Hero1 from '../Assets/Images/Hero1.webp';


const HomePageIndex = () => {
    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <img src={Hero1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img src={Hero1} alt="Image 2" />
            </SplideSlide>
        </Splide>
    )
}

export default HomePageIndex;