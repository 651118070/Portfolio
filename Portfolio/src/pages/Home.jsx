import { About } from '@/components/About'
import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
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
        <Clients/>
        <Projects/>
       
        <Footer/>
        
    </main>
  )
}
