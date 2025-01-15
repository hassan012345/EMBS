import React from 'react';
import Grid from '@mui/material/Grid2';
import SponsorCard from '../Components/SponsorCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const sponsorshipPackages = [
    {
        title: 'Bronze',
        price: '50,000/-',
        color: '#cd7f32',
        perks: ['Basic Perks', 'Community Support', 'Newsletter']
    },
    {
        title: 'Silver',
        price: '1,00,000/-',
        color: '#c0c0c0',
        perks: ['All Bronze Perks', 'Priority Support', 'Exclusive Content']
    },
    {
        title: 'Gold',
        price: '1,50,000/-',
        color: '#ffd700',
        perks: ['All Silver Perks', '1-on-1 Mentorship', 'VIP Events']
    }
]

const SponsorUs = () => {
    return (
        <Box>
            <Typography variant='h4'>
                Explore the ways you can sponsor and get benefits!
            </Typography>
            <Grid container spacing={2}>
                {
                    sponsorshipPackages.map(sponsorshipPackage => {
                        return <SponsorCard title={sponsorshipPackage.title} price={sponsorshipPackage.price} color={sponsorshipPackage.color} perks={sponsorshipPackage.perks} />
                    })
                }
            </Grid>
        </Box>
    );
}

export default SponsorUs;
