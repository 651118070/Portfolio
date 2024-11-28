import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import Logos from './Logos';
import { useTheme } from "../context/ThemeProvider";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, } = useTheme();
  return (
    <footer className="mt-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
             <Logos mode={theme==="dark"? "dark":"light"}/>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building digital experiences with modern web technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300 flex justify-center items-center">
            © {currentYear}  <Logos  mode={theme==="dark"? "dark":"light"}/>  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;