import React,{useEffect} from 'react';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const projects = [
  {
    title: "E-Learning Platform",
    description: "A comprehensive learning management system built with Next.js and MongoDB",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    title: "Social Media Manager",
    description: "Automated social media management tool with scheduling capabilities",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Express", "Redis", "Docker"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
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
        start:'top 70%',
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
          <div 
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
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;