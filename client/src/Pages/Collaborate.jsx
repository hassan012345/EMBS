import { TextField, Typography, Box } from '@mui/material'
import React from 'react'

const Collaborate = () => {
    return (
        <Box sx={{ width: '50%', marginX: 'auto' }}>
            <Typography variant='h2' sx={{ fontFamily: 'Montserrat' }}>
                Ways to Collaborate
            </Typography>
            <form >
                <TextField
                    name='name'
                    label='Name'
                    value={null}
                    size='small'
                />
                <TextField
                    name='email'
                    label='Email'
                    value={null}
                    size='small'
                />
                <TextField
                    name='phone'
                    label='Phone'
                    value={null}
                    size='small'
                />

            </form>
        </Box>
    )
}

export default Collaborate;