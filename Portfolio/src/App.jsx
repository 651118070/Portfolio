import React from 'react'
import gsap from "gsap";
import "./index.css";
import { useState,useEffect } from "react";
import { Suspense,lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progression, setProgression] = useState(0);

  useEffect(() => {
     console.log(loading)
    
    const tl = gsap.timeline({
      onUpdate: () => {
        // Dynamically update the progress percentage
        const currentProgress = Math.round(tl.progress() * 100);
        if(loading && currentProgress % 10 ===0){
         setProgression(currentProgress);
         console.log(currentProgress);
       
        }
        
      },
      onComplete: () => {
       setTimeout(()=> {
        setLoading(false),
        tl.to(".one", {
          opacity: 1,
          scale: 1,
          x: -1000,
          duration: 0.7,
          stagger:0.3,
          ease: "power3.in",
        })
        .to(".two", {
          opacity: 1,
          scale: 1,
          x: 1000,
          duration: 0.7,
          stagger:0.3,
          ease: "power3.in",
        },"-=1")
       
        .to(".three", {
          opacity: 1,
          scale: 1,
          x: -1000,
          duration: 0.7,
          stagger:0.3,
          ease: "power3.in",
        },"-=1")
        .to(".four", {
          opacity: 1,
          scale: 1,
          x: 1000,
          duration: 0.7,
          stagger:0.3,
          ease: "power3.in",
        },"-=1")
        .to(".loading-container",{display:"none"},

        )
       

       },1000)
      },
    });
   
   

    tl.to("#logo", { opacity: 0, scale: 0.5, duration: 0.7 })
      .to("#logo", { opacity: 1, scale: 1, duration: 0.5, ease: "back.in" })
      .to("#logo", {
        opacity: 1,
        scale: 1,
        x: 200,
        duration: 0.4,
        ease: "power1.in",
      })
      .to("#logo", {
        opacity: 1,
        scale: 0.4,
        duration: 0.5,
        ease: "power3.in",
      })
      .to("#logo", {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.in",
      })
     
      
      .fromTo(".text",
        {y:1000,opacity:0.5,color:"#4169E1"},{
        
        y:-20,opacity:1,duration:0.7,color:"white",stagger:0.3
      },"-=2")
      .to(".text",
        {y:-200,x:-300,opacity:1,duration:0.7,color:"#4169E1",stagger:0.3}

      )
      .to(".text",
        {y:-20,x:-300,opacity:1,duration:0.7,color:"#4169E1",stagger:0.3}

      )
      .to(".text",
        {y:-20,x:20,opacity:1,duration:0.7,color:"white",stagger:0.3}

      )
  
  }, []);

  return (
    <>
      <main className="dark:bg-black">
        
            <div className="loading-container absolute z-10 w-screen">
              <div className='grid grid-cols-2 grid-rows-2 absolute -z-20 w-screen'>
                <div className='one bg-[#1f1f1f] w-full p-40'></div>
                <div className='two bg-[#1f1f1f] w-full p-40'></div>
                <div className='three bg-[#1f1f1f] w-full p-40'></div>
                <div className='four bg-[#1f1f1f] w-full p-40'></div>
              </div>
              <p className='text font-serif text-4xl animate-pulse '>Get more clients and value with my expertise</p>
              <svg
                width="115"
                height="15"
                viewBox="0 0 115 15"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="logo"
                  d="M9.04001 15L0.700012 0.600006H4.04001L10.28 11.42L16.52 0.600006H19.86L11.52 15H9.04001Z"
                  fill="white"
                />
                <path
                  id="logo"
                  d="M20.9256 15V3.48001C20.9256 2.94667 21.0523 2.46667 21.3056 2.04001C21.5723 1.60001 21.9189 1.25334 22.3456 1.00001C22.7856 0.733339 23.2723 0.600006 23.8056 0.600006H32.4256C32.9589 0.600006 33.4389 0.733339 33.8656 1.00001C34.3056 1.25334 34.6589 1.60001 34.9256 2.04001C35.1923 2.46667 35.3256 2.94667 35.3256 3.48001V15H32.4056V10.26H23.8056V15H20.9256ZM23.8056 7.38001H32.4056V3.62001C32.4056 3.58001 32.3923 3.55334 32.3656 3.54001C32.3523 3.51334 32.3256 3.50001 32.2856 3.50001H23.9256C23.8856 3.50001 23.8523 3.51334 23.8256 3.54001C23.8123 3.55334 23.8056 3.58001 23.8056 3.62001V7.38001Z"
                  fill="white"
                />
                <path
                  id="logo"
                  d="M42.6444 15V3.50001H36.8844V0.600006H51.2844V3.50001H45.5444V15H42.6444Z"
                  fill="white"
                />
                <path
                  id="logo"
                  d="M105.75 15V3.50001H99.9899V0.600006H114.39V3.50001H108.65V15H105.75Z"
                  fill="white"
                />
                <path
                  id="logo"
                  d="M95.7004 15V0.600006H98.5604V15H95.7004Z"
                  fill="white"
                />
                <path
                  id="logo"
                  d="M73.3614 15V14.1L78.6414 7.80001L73.3614 1.50001V0.600006H76.4214L80.5614 5.52001L84.6814 0.600006H87.7214V1.50001L82.4414 7.80001L87.7414 14.08V15H84.6814L80.5214 10.1L76.4214 15H73.3614Z"
                  fill="white"
                />
                <path
                  id="logo"
                  d="M68.884 15V0.600006H71.744V15H68.884Z"
                  fill="white"
                />
                <path
                  id="logo"
                  d="M64.1002 15L59.8402 9.92H63.6202L67.1402 14.1V15H64.1002ZM52.7802 15V0.619995H64.2802C64.8135 0.619995 65.2935 0.753328 65.7201 1.01999C66.1602 1.27333 66.5135 1.62 66.7802 2.06C67.0468 2.5 67.1802 2.98 67.1802 3.5V7.3C67.1802 7.82 67.0468 8.3 66.7802 8.74C66.5135 9.16666 66.1602 9.51333 65.7201 9.78C65.2935 10.0333 64.8135 10.16 64.2802 10.16L55.6602 10.18V15H52.7802ZM55.7802 7.26H64.1402C64.1802 7.26 64.2068 7.25333 64.2201 7.24C64.2468 7.21333 64.2602 7.18666 64.2602 7.16V3.62C64.2602 3.58 64.2468 3.55333 64.2201 3.54C64.2068 3.51333 64.1802 3.5 64.1402 3.5H55.7802C55.7402 3.5 55.7068 3.51333 55.6802 3.54C55.6668 3.55333 55.6602 3.58 55.6602 3.62V7.16C55.6602 7.18666 55.6668 7.21333 55.6802 7.24C55.7068 7.25333 55.7402 7.26 55.7802 7.26Z"
                  fill="white"
                />
              </svg>
              <div className="percentage-loader mt-10  ">{progression}%</div>
            </div>
          
        
          {!loading && (
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          )}
       
      </main>
    </>
  );
}