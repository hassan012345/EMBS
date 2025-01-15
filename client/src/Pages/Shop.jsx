import { Box } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import React from 'react'
import CommingSoon from '../Components/CommingSoon';

const Shop = () => {

    const product = () => {
        return (
            <Grid2 item xs={6} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://source.unsplash.com/random"
                        alt="random"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Random
                        </Typography>
                    </CardContent>
                </Card>
            </Grid2>
        )
    }

    return (
        <Box sx={{ marginY: 2 }}>
            <Stack direction="row" spacing={2} sx={{ backgroundColor: 'red', padding: 1, borderRadius: 2 }}>
                <CheckroomIcon />
                <Typography variant="body1">
                    <Link to="https://ashikashi.vercel.app/" target='_blank' style={{ color: 'white', textDecoration: 'none' }}>
                        Shop
                    </Link>
                </Typography>
            </Stack>

            <CommingSoon />
        </Box>
    )
}

export default Shop;
