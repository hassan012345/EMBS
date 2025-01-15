import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EventsCard = (props) => {

    return (
        <Box sx={{ display: 'flex', gap: '20px', overflowX: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
            {props.events.map((event, index) => (
                <Link sx={{ textDecoration: 'none' }} to={`/our-events/${event.title}`} key={index}>
                    <Card sx={{ width: 345, position: 'relative', flexShrink: 0 }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={event.image}
                                title={event.title}
                            />
                            <CardContent sx={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.5)', color: 'white', '&:hover': { background: 'rgba(0, 0, 0, 0.7)' } }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {event.title}
                                </Typography>
                                <Typography variant="body2">
                                    {event.description}
                                </Typography>
                                <CardActions sx={{ justifyContent: 'end', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}
        </Box>
    )
}

export default EventsCard
