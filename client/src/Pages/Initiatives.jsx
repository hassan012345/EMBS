import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Events from '../Assets/Images/Events.jpeg';
import Workshops from '../Assets/Images/Workshops.jpeg';
import Seminars from '../Assets/Images/Seminars.jpeg';


const Initiatives = () => {
    return (
        <Box>
            <Typography variant="h5" align="center" style={{ marginTop: '20px' }}>Initiatives</Typography>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card sx={{ border: '1px solid black' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={Events}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Events
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                We organize various events to help students learn and grow.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card sx={{ border: '1px solid black' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={Workshops}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Workshops
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Several workshops are conducted to help students learn new skills get hands on experience.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card sx={{ border: '1px solid black' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={Seminars}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Seminars
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                We conduct seminars to help students learn about the latest trends in technology.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Initiatives;
