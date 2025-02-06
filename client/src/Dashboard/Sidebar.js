import React, { useState } from 'react';
import { List, ListItem, ListItemText, Drawer, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/members">
            <ListItemText primary="Members" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/workshops">
            <ListItemText primary="Workshops" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/events">
            <ListItemText primary="Events" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
