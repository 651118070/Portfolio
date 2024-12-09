import React, {useEffect} from 'react';
import { Github, Linkedin, Mail, Download,Book } from 'lucide-react';
import me from "../assets/pic.jpeg";
import gsap from 'gsap';
import {motion} from 'framer-motion';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TypeAnimation } from "react-type-animation";
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {

  
  useEffect(() => {
    
    const heading = document.getElementById("animated-heading");
    const text = heading.textContent; // Get the full text
    heading.textContent = ""; // Clear the heading content
    
    // Split the text by spaces to handle each word separately
    const words = text.split(" ");
    
  
    words.forEach((word, wordIndex) => {
      word.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter; // Set the letter as the span content
        span.style.display = "inline-block"; // Ensure proper GSAP animation
        heading.appendChild(span);

        // Add GSAP animation for each letter with a delay
        gsap.fromTo(
          span,
          { opacity: 0, y: 20,color:"black" }, // Start state
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            color: "#4169E1",
            
            delay: (wordIndex * 0.5 + index * 0.1), // Add delay for word and letter
            ease: "power2.out",
          }
        );
      });
   

      // Add space between words
      if (wordIndex < words.length - 1) {
        const space = document.createElement("span");
        space.textContent = " "; // Create a space element
        heading.appendChild(space);
      }
    });
   
    gsap.fromTo(
      '.p',
      { opacity: 0, x: 200 }, // Start state
      {
        x:0,
        opacity: 1,
        
        duration: 2,

        
        delay:0.1, // Add delay for word and letter
        ease: "power.out",
      }
    );
    gsap.fromTo(
      '.h',
      { opacity: 0, x: -200 }, // Start state
      {
        x:0,
        opacity: 1,
        
        duration: 2,

        
        delay:0.1, // Add delay for word and letter
        ease: "power2.in",
      }
    );
    
  }, []);

 
  const handleDownloadResume = () => {
    const pdfUrl = '/pola-cv.pdf'; // Replace with the correct path to your PDF file
    const link = document.createElement('a');
    
    link.href = pdfUrl;
    link.setAttribute('download', 'pola-cv.pdf'); // This will download the PDF
    link.setAttribute('target', '_blank'); // This ensures the PDF opens in a new tab
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  

  return (
    <section className="py-14 flex flex-col items-center text-center font-orbitron tracking-widest">
   <div className="relative w-64 h-64 flex">
  {/* Animated SVG Circle */}
  <motion.svg
    className="absolute inset-0 w-[300px] h-[300px] mt-5"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle
      cx="230"
      cy="230"
      r="230"
      stroke="#4169E1"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      initial={{ strokeDasharray: "24 10 0 0" }}
      animate={{
        strokeDasharray: 15,
        rotate: [120, 170],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </motion.svg>

  {/* Profile Image */}
  <img
    src={me}
    alt="Profile"
    className="absolute mt-10  w-full h-full rounded-full shadow-lg object-cover hover:opacity-100 opacity-90 dark:opacity-50 dark:hover:opacity-100 mb-8  transition-transform duration-300"
  />
</div>

     
      <h1 id='animated-heading' className="text-md md:text-4xl font-bold mt-20 ">POLA WAFFO PHARES VALENTIN</h1>
      <TypeAnimation
                className="text-[#181818] dark:text-white"
                sequence={[
                  "3 years Experience",
                  1000,
                  "Web Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Freelancer",
                  1000,
                  "100% productive",
                  1000,
                  "Team work",
                  1000,
                  "Collaborative Persona",
                  1000,
                  "Leadership",
                  1000,
                  "Graphic Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
      <p className="h max-w-2xl mb-8 text-gray-600 dark:text-gray-300 " >
       Rapidly delivering smart, modern web/mobile solutions to simplify your challenges and drive your success.
      </p>
     
     <div className="flex gap-4 " >
       
     <div class="relative text-lg px-3 py-1  rounded-full bg-[#4169E1] dark:bg-[#5A8DFD] font-serif text-white overflow-hidden group">
                       <span class="absolute inset-0 bg-black dark:bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                       <button 
        onClick={handleDownloadResume}
        className=" outline-none relative dark:text-[#181818]  text-white px-2 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-2  shadow-lg hover:shadow-xl"
       
      >
        <Download className="w-5 h-5" />
        Download Resume
      </button>
                     </div>
                     <div class="relative text-lg px-3 py-1  rounded-full bg-black dark:bg-white font-serif text-white overflow-hidden group">
                       <span class="absolute inset-0 bg-[#4169E1] dark:bg-[#5A8DFD] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                       <button 
       
        className=" outline-none relative dark:text-[#181818]  text-white px-2 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-2  shadow-lg hover:shadow-xl"
       
      >
        <Book className="w-5 h-5" />
        <a  href="https://wa.me/651118070?text=Hello Pola, i wish to book a service.">Book a Service</a>
      </button>
                     </div>
     
     </div>
    </section>
  );
}

export default Hero;