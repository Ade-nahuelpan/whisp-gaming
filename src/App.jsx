import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import wgLogo from './assets/wg-logo.png'
import background from './assets/newFondo.png';
import { Grid, Box, Typography, Button } from '@mui/material';
import construction from './pages/Construction'
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const navigate = useNavigate();
  return (
    <Grid container display='flex' sx={{backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    }}>
      <Grid container sx={{display:'flex', alignContent:'center', justifyContent:'center', flexDirection:'column', mt: 6,}} >
        <Grid item>
        <img width='256' src={wgLogo} href= 'https://twitter.com/whisp_gaming' /> 
        </Grid>
        <Typography variant='h1'>Whisp Gaming</Typography>
        
      </Grid>
    </Grid>
  );
}

export default App
