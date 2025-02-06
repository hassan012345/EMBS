import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Members from './Members';
import Workshops from './Workshops';
import Events from './Events';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={9}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper>
                <Members />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <Workshops />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <Events />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
