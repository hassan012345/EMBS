// import React from 'react';
// import ContentContainer from './ContentContainer';
// import Grid
// const OurEvents = () => {
//   return (
//     <Grid container sx={{}} spacing={3}>
//     </Grid>
//   );
// }

// export default OurEvents;

import React from 'react';
import { Grid, Box, Typography, Link, Container, AspectRatio } from '@mui/material';

const itemData = [
  {
    title: 'Thrive',
    description: 'Five ways professional writers are leveraging ChatGPT',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/6TNBSyo0rf495XUvq5UV3r/defd253f7d6129a97abbbcdf383df4c8/DALL_E_Writitng_with_AI_v1.png',
    href: '/chatgpt/use-cases/writing-with-ai/',
  },
  {
    title: 'Rang-e-Saqafat',
    description: 'How to use ChatGPT for generating creative ideas',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/3w3kQq3yqVjLmV8e0Zv6pG/4b3f1a0f2b6e7e3c7c7b1f5b1c1f3a1/DALL_E_Creative_Thinking_v1.png',
    href: '/chatgpt/use-cases/creative-thinking/',
  }
];

const Item = ({ title, description, image, href }) => (
  <Grid item xs={6} md={4}>
    <Link component="a" underline="none" href={href}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
    
            <img
              src={image}
              alt={title}
              sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
         
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.3)',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.1)',
              },
            }}
          />
        </Box>
        <Box sx={{ padding: 3, overflow: 'hidden' }}>
          <Typography variant="body1" noWrap sx={{ color: 'white', mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: 'white', lineHeight: 1.3 }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Link>
  </Grid>
);

const Events = () => (
  <Container maxWidth="lg">
    <Grid container spacing={3}>
      {itemData.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </Grid>
  </Container>
);

export default Events;