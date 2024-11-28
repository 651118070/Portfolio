import React, {useEffect} from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import me from '../assets/me.jpg'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
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
    const pdfUrl = '/Tutor Job application.pdf'; // Replace with the correct path to your PDF file
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
      <img
        src={me}
        alt="Profile"
        className="w-64 pic h-64 rounded-full mb-8 shadow-lg hover:animate-pulse transition-transform duration-300"
      />
      <h1 id='animated-heading' className="text-md md:text-4xl font-bold mb-4">POLA WAFFO PHARES VALENTIN</h1>
      <h2 className="p text-xl mb-6 text-[#4169E1] dark:text-blue-400 " >
        Full Stack Developer
      </h2>
      <p className="h max-w-2xl mb-8 text-gray-600 dark:text-gray-300 " >
       Rapidly delivering smart, modern web solutions to simplify your challenges and drive your success.
      </p>
      <div className=" flex gap-4 mb-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
           className="hover:-translate-y-4  p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 delay-100 ease-linear hover:scale-110">
          <Github className="w-6 h-6 " />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 delay-100 ease-linear hover:-translate-y-4 hover:scale-110">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:contact@example.com"
           className="0 delay-100 ease-linear hover:-translate-y-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <div class="relative text-lg px-3 py-1  rounded-full bg-[#4169E1] dark:bg-gray-700  font-serif text-white overflow-hidden group">
                       <span class="absolute inset-0 bg-black dark:bg-gray-500 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                       <button 
        onClick={handleDownloadResume}
        className=" outline-none relative  text-white px-6 py-3 rounded-lg flex items-center gap-2  shadow-lg hover:shadow-xl"
       
      >
        <Download className="w-5 h-5" />
        Download Resume
      </button>
                     </div>
     
    </section>
  );
}

export default Hero;