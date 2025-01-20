import React from 'react';
import { Card, CardContent, CardHeader, CardActions, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SponsorCard = ({ title, price, color, perks }) => {
    const navigate = useNavigate();
    return (
        <Grid item size={{ xs: 12, sm: 6, md: 4 }} gap={4}>
            <Card variant='outlined' sx={{ borderRadius: '20px', padding: '30px auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', minHeight: '350px  ' }}>
                <CardHeader title={title} sx={{ borderBottom: `5px solid ${color}` }} />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h2'>
                        RS.<em>{price}</em>
                    </Typography>
                    <ul>
                        {
                            perks.map((perk, index) => {
                                return <li key={index}>{perk}</li>
                            })
                        }
                    </ul>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Link to='/sponsor/details' sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/')}
                            sx={{ borderRadius: '50px' }}
                        >
                            Sponsor Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default SponsorCard;
