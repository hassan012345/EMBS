import { 
    Box,
    Typography
} from '@mui/material';
import React from 'react';
import notFound from '../Assets/Images/notFound.png';

const NotFound = () => {
  return (
    <Box xs={{ display:'flex', justifyContent:'center', alignItems:'center', padding:'20px' }}>
        <img src={notFound} alt="Not Found! The page does not exist" width='100%' height='100%' />
        <Typography>
            This page does not exist.You have mistakenly landed here.
        </Typography>
    </Box>
  )
}

export default NotFound
