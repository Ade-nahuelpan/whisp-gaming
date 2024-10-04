import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Construction from './pages/Construction'
import About from './pages/About'
import Home from './pages/Home'

function App() {
    return (
        <>
            <Routes>
                <Route path= '/whisp-gaming/' element={<Construction/>}/>
                <Route path= '/whisp-gaming/Home' element={<Home/>}/>
                <Route path= '/whisp-gaming/About' element={<About/>}/>
            </Routes>
        
        </>
    );
};

export default App;