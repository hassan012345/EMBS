// import React, { useState } from 'react';
// import { Drawer, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/system';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: 240,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: 240,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
// }));

// const ResponsiveLayout = () => {
//   const classes = useStyles();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <List>
//         {['Home', 'About Us', 'Events', 'Members', 'Contact'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             EMBS Society
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer} aria-label="mailbox folders">
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//       <main className={classes.content}>
//         <Toolbar />
//         <Typography variant="h4">Welcome to the EMBS Society</Typography>
//         <p>Content goes here...</p>
//       </main>
//     </div>
//   );
// };

// export default ResponsiveLayout;
