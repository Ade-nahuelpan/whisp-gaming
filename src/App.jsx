import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import Construction from './pages/Construction'
import About from './pages/About'
import Home from './pages/Home'

function App() {
    return (
        <>
            
                <Routes>
                    <Route path= 'whisp-gaming/' element={<Construction/>}/>
                    <Route path= 'whisp-gaming/About' element={<About/>}/>
                    <Route path= 'whisp-gaming/Home' element={<Home/>}/>
                </Routes>
            
        </>
    );
};

export default App;