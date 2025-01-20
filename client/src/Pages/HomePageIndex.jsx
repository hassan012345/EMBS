import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Hero1 from '../Assets/Images/Hero/Hero1.jpg';
import Hero2 from '../Assets/Images/Hero/Hero2.jpg';
import Hero3 from '../Assets/Images/Hero/Hero3.jpg';
import Hero4 from '../Assets/Images/Hero/Hero4.jpg';
import Hero5 from '../Assets/Images/Hero/Hero5.jpg';
import Hero6 from '../Assets/Images/Hero/Hero6.jpg';


const HomePageIndex = () => {
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 64px)', overflow: 'hidden' }}> {/* Adjust height to account for AppBar */}
            <Splide
                aria-label="My Favorite Images"
            >
                <SplideSlide style={{ width: '100%', height: '100%' }}> {/* Ensure each slide takes full height */}
                    <img src={Hero1} alt="Image 1" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </SplideSlide>
                <SplideSlide style={{ width: '100%', height: '100%' }}> {/* Ensure each slide takes full height */}
                    <img src={Hero2} alt="Image 2" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </SplideSlide>
                <SplideSlide style={{ width: '100%', height: '100%' }}> {/* Ensure each slide takes full height */}
                    <img src={Hero3} alt="Image 3" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </SplideSlide>
                <SplideSlide style={{ width: '100%', height: '100%' }}> {/* Ensure each slide takes full height */}
                    <img src={Hero4} alt="Image 4" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </SplideSlide>
                <SplideSlide style={{ width: '100%', height: '100%' }}> {/* Ensure each slide takes full height */}
                    <img src={Hero5} alt="Image 5" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </SplideSlide>
                <SplideSlide style={{ width: '100%', height: '100%' }}> {/* Ensure each slide takes full height */}
                    <img src={Hero6} alt="Image 6" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </SplideSlide>
            </Splide>
            
        </div>
    )
}

export default HomePageIndex;