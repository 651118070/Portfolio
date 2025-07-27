import React from 'react';
import { Github, Linkedin, Mail, Code,PhoneIcon} from 'lucide-react';
import { MdWhatsapp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Logos from './Logos';
import { useTheme } from "../context/ThemeProvider";
const Footer = () => {
  // const currentYear = new Date().getFullYear();
  const { theme, } = useTheme();
  const navigate=useNavigate();
  return (
    <footer className="mt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <p className="tracking-widest text-white">POLA <span className="font-bold">WAFFO</span></p>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building digital experiences with modern web technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 cursor-pointer">
            
              <li>
                <a onClick={() => navigate("/projects")} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/contact")} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="animate-pulse text-lg font-semibold mb-4 dark:text-white">Connect</h3>
            <div className="flex gap-4 cursor-pointer">
              <a
                href="https://github.com/651118070/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600  transition-all duration-300 delay-100 ease-linear hover:-translate-y-4 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pola-waffo-phares-valentin-571a37230/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600  transition-all duration-300 delay-100 ease-linear hover:-translate-y-4 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:valentinpola7@gmail.com"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600  transition-all duration-300 delay-100 ease-linear hover:-translate-y-4 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/651118070?text=Hello Pola, i wish to book a service."
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600  transition-all duration-300 delay-100 ease-linear hover:-translate-y-4 hover:scale-110"
              >
               <MdWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300 flex justify-center items-center">
            © 2025 {"  "}  <p className="tracking-widest">POLA <span className="font-bold">WAFFO</span></p> {"  "}   All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;