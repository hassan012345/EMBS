import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import Advisor from '../Assets/Images/Advisor/advisor.jpeg';

const AdvisorWords = () => {
    return (
        <Box container maxWidth='md' sx={{ py: 4, marginX: 'auto' }}>
            <Grid container spacing={2} sx={{ minHeight: '400px' }}>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Stack spacing={2} direction='column'>
                        <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'left', color: '#000188' }}>Advisor's Words</Typography>
                        <Typography variant="body1">Farhan Yousaf</Typography>
                        <Typography variant="body2">Updated Soon</Typography>
                    </Stack>
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <img src={Advisor} alt="Advisor" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AdvisorWords;