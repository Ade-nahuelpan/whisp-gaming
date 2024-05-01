import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import wgLogo from './assets/wg-logo.png'
import background from './assets/newFondo.png';
import { Grid, Box } from '@mui/material';
import construction from './pages/Construction'
import './App.css'

function App() {
  
  return (
    <Grid container sx={{backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    }}>
      
    </Grid>
  );
}

export default App
