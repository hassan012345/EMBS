import React from 'react';
import Header from '../Components/Header';
import OurEvents from './OurEvents';
import CoreBodyCard from '../Components/CoreBodyCard';
import Footer from '../Components/Footer';
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
            <Outlet />
            <Footer />
        </div>
    )
}

export default Homepage;