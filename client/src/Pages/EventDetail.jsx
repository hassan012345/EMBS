import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Hero1 from '../Assets/Images/Hero/Hero1.jpg';

const EventDetail = () => {

    const { id } = useParams();

    return (
        <Box>
            <img src={Hero1} alt="" width='100%' height='100vh' />
            <Typography variant='h4' sx={{ marginY: '0.5rem' }}>
                {id}
            </Typography>
        </Box>
    )
}

export default EventDetail;