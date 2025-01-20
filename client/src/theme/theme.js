import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000188',
        },
        paper: {
            backgroundColor: 'blue',
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },

});

export default theme;