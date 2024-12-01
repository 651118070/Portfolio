import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python",],
  "Frontend": ["Html","React", "Next.js", "Shadcn", "Tailwind CSS",],
  "Backend": ["Node.js", "Express", "NestJS", ],
  "Database": ["MongoDB", "PostgreSQL"],
  
};

const values = [
  {
    title: "Continuous Learning",
    description: "Always eager to learn and adapt to new technologies and methodologies."
  },
  {
    title: "Code Quality",
    description: "Committed to writing clean, maintainable, and well-documented code."
  },
  {
    title: "Collaboration",
    description: "Strong believer in teamwork and knowledge sharing within the developer community."
  }
];

const hobbies = [
  {
    name: "Basketball",
    emoji: "🏀"
  },
  {
    name: "Reading Tech Blogs",
    emoji: "📚"
  },
  {
    name: "Photography",
    emoji: "📷"
  },
  {
    name: "Hiking",
    emoji: "🏃‍♂️"
  }
];
gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useEffect(()=>{
    const tl=gsap.timeline()
    tl.to(
      '.hobby',
      
      
     {
      scrollTrigger:{
        trigger:'.hobby',
        start:'top 30%',
        scrub:true,
       

      },
      x:100,
      duration:1,
      stagger:0.3,
      ease:'power2.inOut'
     },
     
    )
    tl.to(
      '.aboutme',
      
     {
      scrollTrigger:{
        trigger:'.aboutme',
        start:'top center',
        scrub:true,
       
        toggleActions: "reset none none none"
      },
      x:50,
      backgroundColor:"#4169E1",
      duration:1,
      stagger:0.5,
      ease:'power3.in'
     },
     
    )
    tl.to(
      '.color',
      
     {
      scrollTrigger:{
        trigger:'.color',
        start:'top center',
        scrub:true,
    
        toggleActions: "play pause reverse reset"
      },

      color:"white",
      duration:1,
      stagger:0.5,
      ease:'power3.in'
     },
     
    )
  },[])
  return (
    <section  className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className=" text-3xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-blue-300  mb-12 text-center dark:text-white">About Me</h2>
        <div className=" space-y-12">
          <div className=" grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-[#4169E1]">Background</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With over  <span className='text-[#4169E1] font-bold'>5 years of experience</span>  in web development, I've worked on various projects
                ranging from small business websites to large-scale enterprise applications. I'm
                passionate about creating efficient, scalable solutions and staying up-to-date with
                the latest technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me contributing to open-source projects,
                writing technical articles, or exploring new technologies. I believe in
                continuous learning and sharing knowledge with the developer community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-[#4169E1] ">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                       <div key={index} class="relative px-3 py-1 text-sm rounded-full bg-[#4169E1] dark:text-black dark:bg-[#5A8DFD]  font-serif text-white overflow-hidden group">
                       <span class="absolute inset-0 bg-black dark:bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                       <span class="relative">{skill}</span>
                     </div>
                     
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
          <div>
              <h3 className=" text-xl font-semibold mb-6 dark:text-white text-[#4169E1]">Core Values</h3>
          </div>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="aboutme p-4 rounded-lg bg-gray-50 text-black dark:bg-gray-800">
                    <h4 className="color text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">
                      {value.title}
                    </h4>
                    <p className="color text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 dark:text-white text-[#4169E1]">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="hobby p-4 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center gap-3"
                  >
                    <span className="text-2xl">{hobby.emoji}</span>
                    <span className="text-gray-600 dark:text-gray-300">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;