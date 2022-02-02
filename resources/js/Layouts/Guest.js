import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme,ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import BisonteBackground from '../../../public/img/bisonte.jpg'
const theme = createTheme();

export default function Guest({ children }) {
    return (
        <ThemeProvider theme={theme}>
        
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: "url("+BisonteBackground+")",
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
                {children}
                </Grid>
        </ThemeProvider>
    );
}
