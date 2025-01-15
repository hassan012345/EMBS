import React, { useState } from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import CoreBodyCard from '../Components/CoreBodyCard';

const OurHierarchy = () => {

  return (
    <Box>
      <Typography variant='h4' sx={{marginTop:'1rem'}}>
        Meet the team behind the scenes!
      </Typography>
      <CoreBodyCard />  
    </Box>
  );
}

export default OurHierarchy;