import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Navbar/Hero'
import Services from '../Components/Navbar/Services'
import Description from '../Components/Navbar/Description'
import Download from '../Components/Navbar/Download'
import Contact from '../Components/Navbar/Contact'
import Footer from '../Components/Navbar/Footer'

const Landing = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <Description/>
    <Download/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Landing