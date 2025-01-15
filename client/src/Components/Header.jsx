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
import { ListItemIcon, Typography } from '@mui/material';

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
            <List>
                {sideBarMenu.map(({ name, url, icon, index }) => (
                    <Link to={url} >
                        <ListItem button key={index}>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    )


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <AppBar sx={{ position: 'static' }}>
                <Toolbar >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexGrow: 1 }}>
                        <Link to='/'>
                            <img src={EMBS} alt="EMBS" style={{ width: '50px', height: '50px' }} />
                        </Link>
                        <Typography variant='h6'>
                            Where ideas take birth
                        </Typography>
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
                    <IconButton color="inherit" sx={
                        {
                            display: {
                                xs: 'block',
                                md: 'none'
                            }
                        }
                    }>
                        <MenuIcon
                            onClick={toggleDrawer(true)}
                        />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {drawerList}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}