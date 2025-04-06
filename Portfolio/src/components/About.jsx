import React,{useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python","PHP"],
  "Frontend": ["Html","React", "Next.js", "Shadcn", "Tailwind CSS",],
  "Backend": ["Node.js", "Express", "NestJS","Laravel" ],
  "Database": ["MongoDB", "PostgreSQL"],
  "Tools": ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel","AWS","Docker"],
  "Design": ["Figma", "Canva"]
  
};
const services = [
  {
    icon: "💻",
    title: "Front End  Development",
    description: "I craft visually stunning and highly responsive interfaces that deliver seamless user experiences across all devices. Let’s bring your brand to life with interactive and intuitive designs that captivate and convert."
  },
  {
    icon: "🧮",
    title: "Back End Development",
    description: "I build robust, scalable, and secure backend systems that power modern web applications. From databases to APIs, I ensure your digital infrastructure performs flawlessly to support your business goals."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Crafting intuitive and visually compelling user interfaces focused on delivering exceptional user experiences through research-driven design."
  },
  {
    icon: "🖌️",
    title: "Graphic Design",
    description: "Creating impactful visual designs that align with your brand identity and effectively communicate your message across digital and print media."
  }
];


const values = [
  {
    title: "honesty",
    description: "I believe in transparency and accountability, ensuring truthfulness in every action and communication."
  },
  {
    title: "respect",
    description: "I value diverse perspectives, treating others with fairness, empathy, and consideration."
  },
  {
    title: "leadership",
    description: "I lead by example, inspiring and motivating others through proactive problem-solving and visionary thinking."
  },
  {
    title: "teamwork",
    description: "I foster collaboration by working effectively with others toward shared goals, embracing collective success."
  },
  {
    title: "timeBound",
    description: "I prioritize tasks, manage time efficiently, and meet deadlines consistently to ensure optimal productivity and project success."
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

export const About = () => {

  useEffect(()=>{
    const tl=gsap.timeline()
  
    tl.fromTo(
      '.aboutme',
      {y:100},
      
     {
      scrollTrigger:{
        trigger:'.saboutme',
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
    <section  className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className=" text-3xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-blue-300  mb-12 text-center dark:text-white">About Me</h2>
        <div className=" space-y-12">
          <div className=" grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-[#4169E1]">Background</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With over  <span className='text-[#4169E1] font-bold'>3 years of experience</span>  in App Design & development, I've worked on various projects
                ranging from small business websites to large-scale enterprise applications. I'm
                passionate about creating efficient, scalable solutions and staying up-to-date with
                the latest technologies.
              </p>
              <h3 className="text-xl font-semibold mb-4 dark:text-white text-[#4169E1]">Entrepreneur and Leader</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Driven with the vision to provide software products that improve company productivity,and build a coding school in Cameroon and extend over Africa .
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
              <h3 className=" text-xl font-semibold mb-6 dark:text-white text-[#4169E1]">Soft Skills</h3>
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
              <h3 className="text-xl hobby  font-semibold mb-6 dark:text-white text-[#4169E1]">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="hover:scale-105 cursor-pointer transition-all duration-300  p-4 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center gap-3"
                  >
                    <span className="text-2xl">{hobby.emoji}</span>
                    <span className="text-gray-600 dark:text-gray-300">{hobby.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 service">
  <h3 className="text-xl font-semibold mb-6 dark:text-white text-[#4169E1]">Services</h3>
  <div className="grid  gap-4">
    {services.map((service, index) => (
      <div
        key={index}
        className="service hover:scale-105 cursor-pointer transition-all duration-300 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-start gap-4"
      >
        <span className="text-2xl">{service.icon}</span>
        <div>
          <h4 className="font-semibold text-gray-700 dark:text-white">{service.title}</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
            </div>
            
            
          </div>
          
        </div>
        
      </div>
  
    </section>
  );
}
