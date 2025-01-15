import { Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

const SignIn = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                EMBS
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                <Button variant="contained" color="secondary">Sign up</Button>
                <Button variant="contained" color="primary">Sign in</Button>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default SignIn;
