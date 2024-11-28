import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/constant';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const projects = projectsRef.current;

    gsap.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    );

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: 'top center+=150',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="dark:bg-black bg-white dark:text-white grid min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-orbitron mt-20 dark:text-white text-gray-900 text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 ">
          {projectsData.map((project, index) => (
            <div
            
              key={project.title}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;