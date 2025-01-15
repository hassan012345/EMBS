import React, { useEffect } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

const leftSide = {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
    height: '100vh',
    display: 'flex',
    padding: '20px',
    alignItems: 'center',
    color: '#fff',

}
const rightSide = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const button = {
    borderRadius: '50px',
    width: '90%',
}

const SignUp = () => {
    const [typedText, setTypedText] = useState('');
    const [tagLineIndex, setTagLineIndex] = useState(0);

    const tagLines = [
        "Where personality grooms",
        "Where ideas are born",
        "Where creativity is nurtured",
        "Where innovation is celebrated",
        "Where dreams come true"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTypedText(tagLines[tagLineIndex]);
            setTagLineIndex((tagLineIndex + 1) % tagLines.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [tagLineIndex]);





    return (
        <Grid container >
            <Grid item size={{ xs: '6', md: 9 }} style={leftSide}>
                <Stack>
                <Typography variant="h2">EMBS</Typography>
                <Typography variant="h6">{typedText}</Typography>
                </Stack>
            </Grid>
            <Grid item size={{ xs: 6, md: 3 }} style={rightSide}>
                <Stack spacing={2} width='100%' alignItems='center'>
                    <Typography variant="h4">Sign Up</Typography>
                    <Button variant="contained" color="primary" style={button} >
                        Sign Up
                    </Button>
                    <Button variant="contained" color="primary" style={button} >
                        Sign In
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default SignUp;