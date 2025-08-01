import React from "react";
import { useRoutes } from "react-router-dom";
import gsap from "gsap";
import "./index.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

import Projects from "./pages/Projects";
import { Contact } from "./pages/Contact";
import Blog from "./pages/Blog";

function CustomRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: (
        <div className="flex justify-center items-center">Page Not Found</div>
      ),
    },
  ]);
  return routes;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progression, setProgression] = useState(0);

  useEffect(() => {
    console.log(loading);

    const tl = gsap.timeline({
      onUpdate: () => {
        // Dynamically update the progress percentage
        const currentProgress = Math.round(tl.progress() * 100);
        if (loading && currentProgress % 10 === 0) {
          setProgression(currentProgress);
          console.log(currentProgress);
        }
      },
      onComplete: () => {
        setTimeout(() => {
          setLoading(false),
            tl
              .to(".one", {
                opacity: 1,
                scale: 1,
                x: -1000,
                duration: 0.7,
                stagger: 0.3,
                ease: "power3.in",
              })
              .to(
                ".two",
                {
                  opacity: 1,
                  scale: 1,
                  x: 1000,
                  duration: 0.7,
                  stagger: 0.3,
                  ease: "power3.in",
                },
                "-=1"
              )

              .to(
                ".three",
                {
                  opacity: 1,
                  scale: 1,
                  x: -1000,
                  duration: 0.7,
                  stagger: 0.3,
                  ease: "power3.in",
                },
                "-=1"
              )
              .to(
                ".four",
                {
                  opacity: 1,
                  scale: 1,
                  x: 1000,
                  duration: 0.7,
                  stagger: 0.3,
                  ease: "power3.in",
                },
                "-=1"
              )
              .to(".loading-container", { display: "none" });
        }, 500);
      },
    });

    tl.to("#logo", { opacity: 0, scale: 0.5, duration: 0.7 })
      .to("#logo", { opacity: 1, scale: 1, duration: 0.5, ease: "back.in" })
      .to("#logo", {
        opacity: 1,
        scale: 1,
        x: 200,
        duration: 0.4,
        ease: "power1.in",
      })
      .to("#logo", {
        opacity: 1,
        scale: 0.4,
        duration: 0.5,
        ease: "power3.in",
      })
      .to("#logo", {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.in",
      })

      .fromTo(
        ".text",
        { y: 1000, opacity: 0.5, color: "#4169E1" },
        {
          y: -20,
          opacity: 1,
          duration: 0.7,
          color: "white",
          stagger: 0.3,
        },
        "-=2"
      )
      .to(".text", {
        y: -200,
        x: -300,
        opacity: 1,
        duration: 0.7,
        color: "#4169E1",
        stagger: 0.3,
      })
      .to(".text", {
        y: -20,
        x: -300,
        opacity: 1,
        duration: 0.7,
        color: "#4169E1",
        stagger: 0.3,
      })
      .to(".text", {
        y: -20,
        x: 10,
        opacity: 1,
        duration: 0.7,
        color: "white",
        stagger: 0.3,
      });
  }, []);

  return (
    <>
      <main className="dark:bg-black">
        <div className="loading-container absolute z-10 w-screen">
          <div className="grid grid-cols-2 grid-rows-2 absolute -z-20 w-screen">
            <div className="one bg-[#1f1f1f] w-full p-40"></div>
            <div className="two bg-[#1f1f1f] w-full p-40"></div>
            <div className="three bg-[#1f1f1f] w-full p-40"></div>
            <div className="four bg-[#1f1f1f] w-full p-40"></div>
          </div>
          <p className="text font-serif md:text-4xl animate-pulse text-sm ">
            Get more clients and value with my expertise
          </p>
         <p className="tracking-widest text-4xl">POLA <span className="font-bold">WAFFO</span></p>
          {/* <svg width="227" height="18" viewBox="0 0 227 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='logo' d="M209.711 18.0001V0.720093H213.383L223.487 12.7681V0.720093H226.991V18.0001H223.319L213.167 5.90409V18.0001H209.711Z" fill="white"/>
<path id='logo'  d="M204.098 18.0001V0.720093H207.53V18.0001H204.098Z" fill="white"/>
<path id='logo'  d="M192.415 18.0001V4.20009H185.503V0.720093H202.783V4.20009H195.895V18.0001H192.415Z" fill="white"/>
<path id='logo'  d="M166.399 18.0001V0.720093H170.071L180.175 12.7681V0.720093H183.679V18.0001H180.007L169.855 5.90409V18.0001H166.399Z" fill="white"/>
<path id='logo'  d="M148.072 18.0001V0.720093H164.008V4.20009H151.576V7.60809H161.584V11.1121H151.576V14.5201H164.008V18.0001H148.072Z" fill="white"/>
<path id='logo'  d="M129.344 18V0.696045H132.8V14.52H146.624V18H129.344Z" fill="white"/>
<path id='logo'  d="M109.306 18.0001V4.17609C109.306 3.53609 109.458 2.96009 109.762 2.44809C110.082 1.92009 110.498 1.50409 111.01 1.20009C111.538 0.880093 112.122 0.720093 112.762 0.720093H123.106C123.746 0.720093 124.322 0.880093 124.834 1.20009C125.362 1.50409 125.786 1.92009 126.106 2.44809C126.426 2.96009 126.586 3.53609 126.586 4.17609V18.0001H123.082V12.3121H112.762V18.0001H109.306ZM112.762 8.85609H123.082V4.34409C123.082 4.29609 123.066 4.26409 123.034 4.24809C123.018 4.21609 122.986 4.20009 122.938 4.20009H112.906C112.858 4.20009 112.818 4.21609 112.786 4.24809C112.77 4.26409 112.762 4.29609 112.762 4.34409V8.85609Z" fill="white"/>
<path id='logo'  d="M95.0434 18.0001L85.0354 0.720093H89.0434L96.5314 13.7041L104.019 0.720093H108.027L98.0194 18.0001H95.0434Z" fill="white"/>
<path id='logo'  d="M57.9546 18.0001V4.17609C57.9546 3.53609 58.1066 2.96009 58.4106 2.44809C58.7306 1.92009 59.1466 1.50409 59.6586 1.20009C60.1866 0.880093 60.7706 0.720093 61.4106 0.720093H71.7546C72.3946 0.720093 72.9706 0.880093 73.4826 1.20009C74.0106 1.50409 74.4346 1.92009 74.7546 2.44809C75.0746 2.96009 75.2346 3.53609 75.2346 4.17609V18.0001H71.7306V12.3121H61.4106V18.0001H57.9546ZM61.4106 8.85609H71.7306V4.34409C71.7306 4.29609 71.7146 4.26409 71.6826 4.24809C71.6666 4.21609 71.6346 4.20009 71.5866 4.20009H61.5546C61.5066 4.20009 61.4666 4.21609 61.4346 4.24809C61.4186 4.26409 61.4106 4.29609 61.4106 4.34409V8.85609Z" fill="white"/>
<path id='logo'  d="M39.2273 18V0.696045H42.6833V14.52H56.5073V18H39.2273Z" fill="white"/>
<path id='logo'  d="M22.7363 18.0001C22.0963 18.0001 21.5123 17.8481 20.9843 17.5441C20.4723 17.2241 20.0563 16.8081 19.7363 16.2961C19.4323 15.7681 19.2803 15.1841 19.2803 14.5441V4.17609C19.2803 3.53609 19.4323 2.96009 19.7363 2.44809C20.0563 1.92009 20.4723 1.50409 20.9843 1.20009C21.5123 0.880093 22.0963 0.720093 22.7363 0.720093H33.1043C33.7283 0.720093 34.2963 0.880093 34.8083 1.20009C35.3363 1.50409 35.7603 1.92009 36.0803 2.44809C36.4003 2.96009 36.5603 3.53609 36.5603 4.17609V14.5441C36.5603 15.1841 36.4003 15.7681 36.0803 16.2961C35.7603 16.8081 35.3363 17.2241 34.8083 17.5441C34.2963 17.8481 33.7283 18.0001 33.1043 18.0001H22.7363ZM22.8803 14.5201H32.9123C32.9603 14.5201 32.9923 14.5121 33.0083 14.4961C33.0403 14.4641 33.0563 14.4241 33.0563 14.3761V4.34409C33.0563 4.29609 33.0403 4.26409 33.0083 4.24809C32.9923 4.21609 32.9603 4.20009 32.9123 4.20009H22.8803C22.8323 4.20009 22.7923 4.21609 22.7603 4.24809C22.7443 4.26409 22.7363 4.29609 22.7363 4.34409V14.3761C22.7363 14.4241 22.7443 14.4641 22.7603 14.4961C22.7923 14.5121 22.8323 14.5201 22.8803 14.5201Z" fill="white"/>
<path id='logo'  d="M0.343994 18V0.744019H14.144C14.784 0.744019 15.36 0.904018 15.872 1.22402C16.4 1.52802 16.824 1.94402 17.144 2.47202C17.464 3.00002 17.624 3.57602 17.624 4.20002V8.76002C17.624 9.38402 17.464 9.96002 17.144 10.488C16.824 11 16.4 11.416 15.872 11.736C15.36 12.04 14.784 12.192 14.144 12.192L3.79999 12.216V18H0.343994ZM3.94399 8.71202H13.976C14.024 8.71202 14.056 8.70402 14.072 8.68802C14.104 8.65602 14.12 8.62402 14.12 8.59202V4.34402C14.12 4.29602 14.104 4.26402 14.072 4.24802C14.056 4.21602 14.024 4.20002 13.976 4.20002H3.94399C3.89599 4.20002 3.85599 4.21602 3.82399 4.24802C3.80799 4.26402 3.79999 4.29602 3.79999 4.34402V8.59202C3.79999 8.62402 3.80799 8.65602 3.82399 8.68802C3.85599 8.70402 3.89599 8.71202 3.94399 8.71202Z" fill="white"/>
</svg> */}

          <div className="percentage-loader mt-10  ">{progression}%</div>
        </div>

        {!loading && (
          <>
            <CustomRoutes />
          </>
        )}
      </main>
    </>
  );
}
