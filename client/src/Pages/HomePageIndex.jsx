import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Hero1 from '../Assets/Images/Hero/Hero1.jpg';
import Hero2 from '../Assets/Images/Hero/Hero2.jpg';
import Hero3 from '../Assets/Images/Hero/Hero3.jpg';
import Hero5 from '../Assets/Images/Hero/Hero5.jpg';
import Hero6 from '../Assets/Images/Hero/Hero6.jpg';
import { Typography, Box, Stack, Button, Card, CardContent } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const HomePageIndex = () => {

    const eventHighlights = [
        { img: Hero1, title: 'Event 1', description: 'Description for Event 1' },
        { img: Hero2, title: 'Event 2', description: 'Description for Event 2' },
        { img: Hero3, title: 'Event 3', description: 'Description for Event 3' },
        { img: Hero5, title: 'Event 4', description: 'Description for Event 4' },
        { img: Hero6, title: 'Event 5', description: 'Description for Event 5' },
    ];
    const testimonials = [
        {
            image: 'path/to/image1.jpg',
            description: "It's not a society it's passion.It's the place where ideas take birth.",
            name: 'Hassaan Siddique',
        },
        {
            image: 'path/to/image2.jpg',
            description: 'Amazing experience! Highly recommend joining.',
            name: 'Jane Smith',
        },
        // Add more testimonials as needed
    ]

    return (
        <div>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 1,
                    perMove: 1,
                    autoplay: true,
                    pauseOnHover: false,
                    resetProgress: false,
                    height: '100vh',
                    width: '100vw',
                }}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src={Hero1} alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SplideSlide>
                <SplideSlide>
                    <img src={Hero2} alt="Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SplideSlide>
                <SplideSlide>
                    <img src={Hero3} alt="Image 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SplideSlide>
                <SplideSlide>
                    <img src={Hero5} alt="Image 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SplideSlide>
                <SplideSlide>
                    <img src={Hero6} alt="Image 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </SplideSlide>
            </Splide>
            <Box>
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        color: '#000188',
                        margin: '1rem 0',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }
                    }}
                >
                    Welcome to EMBS
                </Typography>
                <Grid container spacing={2} sx={{ paddingLeft: 3 }}>
                    <Grid item size={{ sm: 12, md: 6 }} sx={{ backgroundColor: 'lightgrey', borderRadius: 6 }}>
                        <Stack direction="column" gap={1} sx={{ padding: 2, textAlign: "left" }}>
                            <EmojiEventsIcon fontSize='large' />
                            <Typography variant="h3">Events</Typography>
                            <Typography variant="body1">
                                We host a variety of events throughout the year. Check out our events page for more details.
                            </Typography>
                            <Typography variant="caption" sx={{ display: "flex", alignItems: "center" }}>
                                <Link
                                    to="/our-events"
                                    style={{ textDecoration: "none", color: "#000188", display: "flex", alignItems: "center" }}
                                >
                                    Learn more <ChevronRightIcon />
                                </Link>
                            </Typography>
                        </Stack>

                    </Grid>
                    <Grid item size={{ sm: 12, md: 6 }} sx={{ backgroundColor: 'lightgrey', borderRadius: 6 }}>
                        <Stack direction='column' gap={1} sx={{ padding: 2, textAlign: 'left' }}>
                            <PeopleIcon fontSize='large' />
                            <Typography variant="h3">
                                Workshops
                            </Typography>
                            <Typography variant="body1" sx={{ fontWidth: 'bold' }}>
                                We offer a range of workshops to help you develop new skills and knowledge. The workshops equip you with the hands-on experience.
                            </Typography>
                            <Link
                                to="/our-events"
                                style={{ textDecoration: "none", color: "#000188", display: "flex", alignItems: "center" }}
                            >
                                Learn more <ChevronRightIcon />
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item size={{ sm: 12, md: 6 }} sx={{ backgroundColor: 'lightgrey', borderRadius: 6 }}>
                        <Stack direction="column" gap={1} sx={{ padding: 2, textAlign: "left" }}>
                            <CampaignIcon fontSize='large' />
                            <Typography variant="h3">Seminars</Typography>
                            <Typography variant="body1">
                                Several informative seminars are held throughout the year. These give you the opportunity to learn from experts in the field.
                            </Typography>
                            <Typography variant="caption" sx={{ display: "flex", alignItems: "center" }}>
                                <Link
                                    to="/our-events"
                                    style={{ textDecoration: "none", color: "#000188", display: "flex", alignItems: "center" }}
                                >
                                    Learn more <ChevronRightIcon />
                                </Link>
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Box>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            color: '#000188',
                            margin: '1rem 0',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }
                        }}
                    >
                        Event highlights
                    </Typography>

                    <Box sx={{ overflowX: 'scroll', display: 'flex', padding: 2, gap: 2, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
                        {eventHighlights.map((event, index) => (
                            <Card key={index} sx={{ minWidth: 200, width: 350, position: 'relative' }}>
                                <Box
                                    component="img"
                                    src={event.img}
                                    alt={event.title}
                                    sx={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: 1 }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
                                        borderRadius: 1,
                                    }}
                                />
                                <CardContent sx={{ position: 'absolute', bottom: 0, color: 'white' }}>
                                    <Typography variant="h5">{event.title}</Typography>
                                    <Typography variant="body2">{event.description}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ padding: 4 }}>
                    <Typography variant="h3" gutterBottom>
                        Testimonials
                    </Typography>
                    <Splide
                        options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            pauseOnHover: true,
                            arrows: true,
                            pagination: true,
                            speed: 800,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SplideSlide key={index}>
                                <Box sx={{ textAlign: 'center', padding: 2 }}>
                                    <Avatar
                                        alt={testimonial.name}
                                        src={testimonial.image}
                                        sx={{ width: 80, height: 80, marginX: 'auto', marginBottom: 2 }}
                                    />
                                    <Typography variant="body1" gutterBottom>
                                        {testimonial.description}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        {testimonial.name}
                                    </Typography>
                                </Box>
                            </SplideSlide>
                        ))}
                    </Splide>
                </Box>
            </Box>
        </div >
    )
}

export default HomePageIndex;