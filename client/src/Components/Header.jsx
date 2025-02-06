import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import EMBS from '../Assets/Images/EMBOfficial.png';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StairsIcon from '@mui/icons-material/Stairs';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PhoneIcon from '@mui/icons-material/Phone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Avatar, ListItemIcon, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { grey } from '@mui/material/colors';
const sideBarMenu = [
    {
        name: 'Home',
        url: '/',
        icon: <HomeIcon />
    },
    {
        name: 'About Us',
        url: '/about-us',
        icon: <InfoIcon />
    },
    {
        name: 'Our Hierarchy',
        url: '/our-hierarchy',
        icon: <StairsIcon />
    },
    {
        name: 'Our Events',
        url: '/our-events',
        icon: <EventAvailableIcon />
    },
    {
        name: 'Contact Us',
        url: '/contact-us',
        icon: <PhoneIcon />
    },
    {
        name: 'Shop',
        url: '/shop',
        icon: <StorefrontIcon />,
    }
]
export default function ButtonAppBar() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const drawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <Avatar
                alt="EMBS"
                src={EMBS}
                sx={{ width: '100%', height: 'auto' }}
            />
            <List>
                {sideBarMenu.map(({ name, url, icon }, index) => (
                    <Link to={url} key={index} style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
                        <ListItem button>
                            <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={name} />
                            <ChevronRightIcon />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AppBar sx={{ position: 'static' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Link to='/'>
                            <img src={EMBS} alt="EMBS" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        </Link>
                        <Typography variant='h6' sx={{ 
                            fontSize: {
                                xs: '0.8rem',   
                                md: '1.5rem'
                            }
                         }}>
                            Where ideas take birth
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {sideBarMenu.map(({ name, url, icon }) => (
                            <Button
                                key={name}
                                component={Link}
                                to={url}
                                // startIcon={icon}
                                sx={{ color: 'white', display: 'block', display: 'flex' }}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                    <Stack direction='row' spacing={0.5}>
                        <Link to='/sponsor-us' sx={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button variant='contained' size='small' color='inherit' sx={{ borderRadius: '50px' }}>
                                Sponsor
                            </Button>
                        </Link>
                        <Link to='/'>
                            <Button variant='contained' size='small' color='inherit' sx={{ borderRadius: '50px' }}>Collaborate</Button>
                        </Link>
                    </Stack>
                    <IconButton
                        color="inherit"
                        sx={{
                            display: {
                                xs: 'block',
                                md: 'none'
                            }
                        }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)} sx={{ backgroundColor: grey }}>
                        {drawerList}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}   