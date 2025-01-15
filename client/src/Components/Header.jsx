import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ width: '100%'}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        EMBs
                    </Typography>
                    <Button color="inherit">Collaborate With Us</Button>
                    <Button color="inherit">Contribute</Button>
                    <Button color="inherit">shop</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}