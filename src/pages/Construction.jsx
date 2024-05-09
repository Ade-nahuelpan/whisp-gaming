import { useState } from 'react'
import wgLogo from '../assets/wg-logo.png'
import background from '../assets/newFondo.png';
import { Grid, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Construction = () => {
  const navigate = useNavigate();
  const handleLink = () => {
    location.href='https://twitter.com/whisp_gaming'
    }
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
        <Grid item >
        <img width='256' src={wgLogo} onClick={handleLink} /> 
        </Grid>
        <Typography variant='h1'>Whisp Gaming</Typography>
        
      </Grid>
    </Grid>
  );
}

export default Construction;
