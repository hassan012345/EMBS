import React from 'react';
import Header from '../Components/Header';
import OurEvents from './OurEvents';
import CoreBodyCard from '../Components/CoreBodyCard';
import Footer from '../Components/Footer';
import Hero from '../Assets/Images/Hero.webp';
import { Outlet } from 'react-router-dom';
import {
    Box
} from '@mui/material';

function HeroSection() {
    return (
        <Box>
            Header
        </Box>
    )
}

const Homepage = () => {

    return (
        <div>
            <Header />
            <Box sx={{
                padding: {
                    xs: '0.5rem',
                    sm: '1rem',
                    md: '2rem',
                }
            }}>
                <Outlet />
            </Box>
            <Footer />
        </div>
    )
}

export default Homepage;