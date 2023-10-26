import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
       MuiButton: {
           styleOverrides: {
               root: {
                   fontSize: '14px',
               }
           }
       }
    },
    palette: {
       primary: {
           main: '#000000',
       }
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    spacing: 4,
});