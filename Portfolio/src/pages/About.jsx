import React, { useEffect } from "react";
import gsap from "gsap";
import { Code2, Palette, Terminal, Book, Gamepad2, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import me from "../assets/pic.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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

  // Professional Experience
  const experiences = [
    {
      title: "Mentor Guru - EdTech Platform",
      duration: "2024 ",
      description:
        "Built a scalable EdTech platform with NestJS, MongoDB, and React, offering student management, course tracking, and online exams.",
    },
    {
      title: "E-Library Management System - Laravel",
      duration: "2023",
      description:
        "Developed a full-stack web application using Laravel and MySQL, enabling efficient library management, book reservations, and user authentication.",
    },
    {
      title: "Full Stack Developer - JPTEKS",
      duration: "2022 - Present",
      description:
        "Developed scalable applications, implemented microservices architecture, and managed API integrations using Next JS,Mongo DB,NestJS.",
    },
  
    {
      title: "Web Tutor - Freelance",
      duration: "2022 - Present",
      description:
        "Provided personalized web development tutorials, helping students master MERN STACK.",
    },
   
    {
      title: "Student Management System (SMS)",
      duration: "2022",
      description:
        "Developed a university-focused student management system with real-time notifications, course scheduling,AI integration and authentication features.",
    },
    {
      title: "Multiplayer Quiz App",
      duration: "2021",
      description:
        "Created a real-time multiplayer quiz app using the MERN stack, leveraging Socket.IO for live communication.",
    },
  ];


 

  return (
    <div className="dark:bg-black bg-white dark:text-white min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1 animate-section">
            <div className="sticky top-24">
              <motion.img
                src={me}
                alt="Profile"
                className="w-64 h-64 rounded-full shadow-lg mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <h1 className="text-3xl font-bold mb-4 text-[#4169E1]">
                POLA WAFFO PHARES VALENTIN
              </h1>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Software Engineer",
                  1000,
                  "Web Tutor",
                  1000,
                  "AI Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[#5A8DFD] text-2xl"
                repeat={Infinity}
              />
              <p className="dark:text-gray-300 mb-6 text-black">
                Passionate Full Stack Developer with a knack for creating innovative web solutions.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Academic Background */}
            <section>
              <h2 className="mt-24 text-xl font-semibold text-[#4169E1]">Academic Background</h2>
              <div className="space-y-2 animate-section">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg hover:scale-105 cursor-pointer transition-all duration-300 ">
                  <h3 className="text-xl font-semibold text-[#5A8DFD]">Bachelor of Computer Science & Engineering</h3>
                  <p className="text-gray-600 mt-2 dark:text-gray-300">IUC Douala | 2021 - 2025</p>
                  <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Minor in Mathematics</li>
                    <li>Dean's List - All Semesters</li>
                    <li>GPA: 3.65/4.0</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="mt-24 text-xl font-semibold text-[#4169E1]">Professional Experience</h2>
              <div className="space-y-4 animate-section">
                {experiences.map((exp, index) => (
                  <div key={index} className="hover:scale-105 cursor-pointer transition-all duration-300  bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#5A8DFD]">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.duration}</p>
                    <p className="dark:text-gray-300 mt-2">{exp.description}</p>
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
