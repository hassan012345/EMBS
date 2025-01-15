import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Box, Grid, Grid2, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import theme from '../theme/theme';
import CommingSoon from './CommingSoon';

const socialIcons = [
    { icon: <FacebookIcon fontSize="6px" />, label: 'facebook' },
    { icon: <LinkedInIcon fontSize="12px" />, label: 'linkedin' },
    { icon: <InstagramIcon fontSize="12px" />, label: 'instagram' },
];

const coreBody = [
    {
        name: 'Haseeb Iqbal',
        position: 'President',
        socialMedia: socialIcons,
        description: 'Haseeb Iqbal is the President of the EMBS.He is a biomedical engineer.'
    },
    {
        name: "Maheen Zahid",
        position: 'Vice President',
        socialMedia: socialIcons,
        description: 'Maheen Zahid is the Vice President of the EMBS.She is a biomedical engineer.'
    },
    {
        name: "Muhammad Ali",
        position: 'General Secretary',
        socialMedia: socialIcons,
        description: 'Muhammad Ali is the General Secretary of the EMBS.He is an electrical engineer.'
    }
]

const generalMembers = [
    {
        name: 'Muhammad Ali',
        position: 'General Member',
        socialMedia: socialIcons,
        description: 'Muhammad Ali is a general member of the EMBS.He is an electrical engineer.'
    },
]


const CoreCard = ({ name, position, socialMedia, description }) => {
    return (
        <Card
            sx={{
                textAlign: 'center',
                padding: 2,
                boxShadow: 3,
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                },
            }}
        >
            <Avatar
                alt={name}
                src=""
                sx={{
                    width: 112,
                    height: 112,
                    marginX: 'auto',
                    marginBottom: 2,
                    boxShadow: 2,
                    transition: 'transform 0.6s',
                    '&:hover': {
                        transform: 'rotate(360deg)',
                    },
                }}
            />
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom color='primary' sx={{ fontWeight: 600 }}>
                    {position}
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                    2024-2025
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    {description}
                </Typography>
                <Stack direction="column" alignItems="center" gap={1}>
                    <Typography variant="body2" color="textSecondary">
                        Follow me:
                    </Typography>
                    <Box
                        sx={{
                            color: 'white',
                            minWidth: '50px',
                            width: 'fit-content',
                            maxWidth: '100px',
                            padding: '5px 10px',
                            borderRadius: '50px',
                            backgroundColor: theme.palette.primary.main,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                        }}
                    >
                        {socialMedia.map((icon, index) => (
                            <IconButton key={index} aria-label={icon.label} size="small" sx={{ color: 'white' }}>
                                {icon.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}

const CoreBodyCard = () => {
    const maxIconsToShow = 3;
    const iconsToShow = socialIcons.slice(0, maxIconsToShow);
    const extraIconsCount = socialIcons.length - maxIconsToShow;
    return (
        <Box>
            <Typography variant='h5' color='primary' sx={{ marginY: '1rem' }}>
                Core Body
            </Typography>
            <Grid2 container spacing={2}>
                {coreBody.map((person, index) => (
                    <Grid2 item size={{ xs: 12, md: 4 }} key={index}>
                        <CoreCard
                            name={person.name}
                            position={person.position}
                            socialMedia={person.socialMedia}
                            description={person.description}
                        />
                    </Grid2>
                ))}
            </Grid2>
            <Typography variant='h5' color='primary' sx={{ marginY: '1rem' }}>
                Upper Hierarchy
            </Typography>
            <CommingSoon />
            <Typography variant='h5' color='primary' sx={{ marginY: '1rem' }}>
                General Members
            </Typography>
            <CommingSoon />
        </Box>
    );
}

export default CoreBodyCard;