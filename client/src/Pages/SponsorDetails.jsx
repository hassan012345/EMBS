import { Box, Typography } from '@mui/material'
import React from 'react'
import CommingSoon from '../Components/CommingSoon';

const SponsorDetails = () => {
    return (
        <Box>
            <Typography variant='h5' sx={{ marginTop: '1rem' }}>
                Contact the corresponding person 
            </Typography>
            <CommingSoon />
        </Box>
    )
}

export default SponsorDetails
