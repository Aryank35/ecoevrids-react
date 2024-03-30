import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import About from './pages/About';
import Service from './pages/Service';
import Partners from './pages/Partners';
import Blogs from './pages/Blogs';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/partners' element={<Partners/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
