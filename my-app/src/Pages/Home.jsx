import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}
