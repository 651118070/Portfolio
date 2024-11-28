import React,{useEffect} from 'react';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger)
export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 200,
      overflow:"hidden"
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: "https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
    tech: ["React", "Node.js", "MongoDB", "Express","Redux toolkit"],
    liveLink: "https://mboashopsite.onrender.com/",
    githubLink: "https://github.com/651118070/shop1",
    delay: 0.5,
  },
  {
    title: "AI-Powered Summariser Article",
    description: "Summarise articles with openAI",
    image: "https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWFyaXNlJTIwYWklMjBhcnRpY2xlfGVufDB8fDB8fHww",
    tech: ["React", "OpenAI"],
    liveLink: "https://summariseepola.netlify.app/",
    githubLink: "https://github.com/651118070/summarize",
     delay: 0.7,
  },
  {
    title: "E-learning Platform",
    description: "A platform to help gce students ace in their exams.",
    image: "https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.webp?a=1&b=1&s=612x612&w=0&k=20&c=t8D-3uQw-Dkvq5DluqPW1P7vbXyy2mN7XpKE_zcDWiw=",
    tech: ["Nest js", "Next js", "Uploadthing", "Docker","MongoDB"],
    liveLink: "https://mentor-guru.vercel.app/",
    githubLink: "https://github.com/jpteks/Mentor-Guru",
    delay: 0.9,

  }
];

const Projects = () => {
  useEffect(()=>{
    const tl=gsap.timeline()
  
    tl.fromTo(
      '.projects',
      {y:100},
      
     {
      scrollTrigger:{
        trigger:'.projects',
        start:'top 45%',
        scrub:true,
      
      },
      y:0,
      duration:1,
      stagger:0.7,
      ease:'power3.in'
     },
     
    )
   
  },[])
  return (
    <section  className="py-20 dark:text-white">
      <h2 className="text-3xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-blue-300  mb-12 text-center dark:text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
        <div className=''>
          <motion.div 
          variants={fadeUp(project.delay)}
          initial="hidden"
          whileInView={"show"}
            key={index} 
            className="projects group rounded-xl overflow-hidden shadow-lg dark:bg-gray-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl "
           
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 transition-transform duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline transition-transform duration-300 hover:translate-x-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline transition-transform duration-300 hover:translate-x-1"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;