import React from "react";
import { Button } from "@/components/ui/button"
import { MdMenu } from "react-icons/md";
import { useTheme } from "../context/ThemeProvider";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { useNavigate } from 'react-router-dom';
import Logos from "./Logos";
import gsap from 'gsap';
import { useEffect } from "react";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
    classname:"home"
  },
  {
    id: 2,
    title: "About Me",
    link: "/about",
    classname:"about"
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
    classname:"projects"
  },
  

 
];
export default function Navbar() {

  const navigate=useNavigate()
  const [open,setOpen]=useState(false)
  const { theme} = useTheme();
  const toggleMenu = () => {
    setOpen(!open);
  };
useEffect(()=>{
  gsap.to(
    ".contact",
    {
      duration:0.5,
      borderColor:"#4169E1",
      repeat:-1,
      yoyo:true,
      ease:"power2.inOut"
    }
  )
  gsap.to(
    ".contact",
    {
      duration:0.5,
      borderColor:"#4169E1",
      repeat:-1,
      yoyo:true,
      ease:"power2.inOut"
    }
  )
})
  return (
    <nav className="font-orbitron text-black py-6  md:py-4 bg-white dark:bg-[#181818] dark:text-white fixed w-full top-0 z-[1000]">
      
      <div
        
        className=" mx-4 flex justify-between items-center "
      >
        {/* logo section */}
        <div>
          <Logos mode={theme==="dark"? "dark":"light"}/>
        </div>
        {/* Menu section on large screen */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative  z-40 ">
            {NavbarMenu.map((item,id) => (
              <li key={id}  >
               
               
               <a onClick={() => navigate(item.link)}

            className={`${item.classname || ''} inline-block text-sm py-2 px-3 uppercase cursor-pointer`}

                   
                  >
                    {item.title}
                  </a>
                
               
              </li>
            ))}
            <li>
              <Button  className="contact text-black border-transparent border-2  dark:bg-white dark:text-black"><a onClick={() => navigate("/contact")}> Contact Me</a></Button>
            </li>

       
          
          </ul>
        </div>
        {/* Toggle mode on desktop */}
     
                <ModeToggle/>
             

        {/* Hamburger Icon */}
        <div className="md:hidden mt-1" onClick={toggleMenu}>
          {open? (
            <MdClose className="text-3xl" />
          ) : (
            <MdMenu className="text-3xl" />
          )}
        </div>
        <div className={`lg:hidden gap-4 flex flex-col items-end text-xl  bg-[#4169E1] text-white dark:bg-[#181818] p-4 ${open ? 'block' : 'hidden'} absolute top-[80px] right-0 w-full pr-4 pb-4 transition-all duration-700 ease-in-out`}>
          <ul
                   className="flex flex-col items-center gap-4 relative dark:text-white z-40">
            {NavbarMenu.map((item, key) => (
              <li key={key} >
               
                  <a
                    href={item.link}
                    className="inline-block text-base  py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
              
              </li>
            ))}
              <li>
              <Button className="contact dark:text-white dark:bg-black"><a onClick={() => navigate("/contact")}> Contact Me</a></Button>
            </li>
           
              
          
          </ul>
        </div>
      </div>
      
    </nav>
  );
}
 