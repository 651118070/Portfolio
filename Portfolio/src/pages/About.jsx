import React, { useEffect } from "react";
import gsap from "gsap";
import { Code2, Palette, Terminal, Book, Gamepad2, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import me from "../assets/pic.jpeg";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  useEffect(() => {
    gsap.to(".animate-section", {
      y: 50,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS.",
    },
    {
      icon: Terminal,
      title: "Backend Development",
      description:
        "Building scalable server-side applications with Node.js, Express, and databases.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing intuitive and beautiful user experiences with attention to detail.",
    },
  ];

  const hobbies = [
    {
      icon:Gamepad2,
      title: "BasketBall",
      description:
        "Ex player at Fire birds, scored 30 points over the year.",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Amateur photographer with a keen interest in landscape and street photography.",
    },
    {
      icon: Book,
      title: "Reading",
      description:
        "Avid reader of science fiction and technical books. Always learning something new.",
    },
  ];

  return (
    <div className="dark:bg-black bg-white dark:text-white grid min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1 animate-section">
            <div className="sticky top-24">
              <img
                src={me}
                alt="Profile"
                className="hover:opacity-100 opacity-90 dark:opacity-50 dark:hover:opacity-100 w-full h-96 rounded-full mb-8 shadow-lg transition-transform duration-300"
              />
              <h1 className="text-3xl font-bold mb-4">
                POLA WAFFO PHARES VALENTIN
              </h1>
              <TypeAnimation
                className="text-[#5A8DFD]"
                sequence={[
                  "5 years Experience in Web Development",
                  1000,
                  "Web Developer",
                  1000,
                  "Web Tutor",
                  1000,
                  "100% productive",
                  1000,
                  "I encourage teamwork",
                  1000,
                  "Collaborative Persona",
                  1000,
                  "Madrid Fan",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <p className="dark:text-gray-300 mb-6 text-black">
                Full Stack Developer with a passion for creating beautiful and
                functional web applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React", "Node.js", "Python"].map((tech,index) => (
                 <div key={index} class="relative px-3 py-1 text-sm rounded-full bg-[#4169E1] dark:text-black dark:bg-[#5A8DFD]  font-serif text-white overflow-hidden group">
                 <span class="absolute inset-0 bg-black dark:bg-white transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                 <span class="relative">{tech}</span>
               </div>
                ))}
                 
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Academic Background */}
            <section className="mt-[100px]">
              <h2 className="text-xl font-semibold dark:text-white text-[#4169E1] ">
                Academic Background
              </h2>
              <div className="space-y-6 animate-section">
                <div className="bg-gray-50 text-black dark:bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold dark:text-[#5A8DFD] text-[#4169E1]">
                    Bachelor of Computer Science and Engineering
                  </h3>
                  <p className="text-gray-600 mt-2 dark:text-gray-300">
                    IUC Douala | 2021 - 2025
                  </p>
                  <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Minor in Mathematics</li>
                    <li>President of Computer Science Society</li>
                    <li>Dean's List all semesters</li>
                    <li>GPA: 3.65/4.0</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold dark:text-white text-[#4169E1]">
                   Ordinary and Advanced Level 
                  </h3>
                  <p className=" text-gray-600 dark:text-gray-300 mt-2">Du vaal | 2019 - 2021</p>
                  <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>11 papers - 30points</li>
                    <li>5 papers - 25points </li>
                    <li>Major in Mathematics Physics Futher Mathematics Computer Science Biology Chemistry ...</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Skills */}
            <section className="mt-[100px]">
              <h2 className="text-xl font-semibold text-white mt-40">
                Professional Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-section">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg text-center"
                  >
                    <skill.icon className="w-12 h-12 mx-auto dark:text-white text-[#4169E1] mb-4" />
                    <h3 className="text-lg font-semibold dark:text-white text-[#4169E1] mt-2">
                      {skill.title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hobbies & Interests */}
            <section className="mt-[100px]">
              <h2 className="text-xl font-semibold text-white mb-4">
                Hobbies & Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-section">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className=" bg-gray-50 dark:bg-gray-900 p-6 rounded-lg text-center"
                  >
                    <hobby.icon className="w-12 h-12 mx-auto dark:text-white text-[#4169E1] mb-4" />
                    <h3 className="mt-2 text-lg font-semibold dark:text-white text-[#4169E1]">
                      {hobby.title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-600">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
