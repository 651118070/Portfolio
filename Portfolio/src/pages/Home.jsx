import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import TechnologiesGlobe from '@/components/Globe'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'

export default function Home() {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <About/>
        <TechnologiesGlobe/>
        <Projects/>
        <Contact/>
        <Footer/>
        
    </main>
  )
}
