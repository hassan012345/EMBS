import React from 'react';
import Typography from '@mui/material/Typography';
import EventsCard from '../Components/EventsCard';
import Hero1 from '../Assets/Images/Hero1.webp';

const OurEvents = () => {
  const events = [
    {
      title: "Rang-e-Saqafat",
      description: "The blend of culture and art, Rang-e-Saqafat is a cultural event that showcases the rich culture of Pakistan.",
      image: Hero1
    },
    {
      title: "Thrive",
      description: "Meet the people who have made it big in their respective fields and learn from their experiences.",
      image: Hero1
    },
    {
      title: "Annual Dinner",
      description: "A moment to cherish, the annual dinner is a night full of fun, laughter, and memories.",
      image: Hero1
    },
  ];

  return (
    <div>
      <Typography variant="h5" sx={{ margin: '1rem 0' }}>Our Events</Typography>
      <EventsCard events={events} />
    </div>
  );
}

export default OurEvents;