import { Box, Typography } from '@mui/material'
import React from 'react'

const CommingSoon = () => {
  return (
    <Box
      textAlign="center"
      backgroundColor="#000188"
      color="white"
      borderRadius='5px'
      padding='1rem'
      maxWidth='600px'
      marginX='auto'
    >
      <Typography variant="h2" component="h1">
        Coming Soon
      </Typography>
    </Box>
  )
}

export default CommingSoon
