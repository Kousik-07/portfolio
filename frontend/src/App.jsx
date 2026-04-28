import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from "typed.js";
import "remixicon/fonts/remixicon.css";
import CertificateSlider from "./CertificateSlider";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import mylogo from "/Untitled.png";
import myPhoto from "/Adobe Express - file.png";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const el = useRef(null); 
  const mainRef = useRef(null); 

  useEffect(() => {

    const typed = new Typed(el.current, {
      strings: [
        "Modern Web Experiences",
        "Efficient Backend APIs",
        "Interactive Digital Solutions",
        "High-Performance Web Apps",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });


    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".left-content h1, .left-content a",
          {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".right-content .box",
          {
            scale: 0,
            opacity: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.75)",
          },
          "-=0.8"
        );


      gsap.to(".right-content img", {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
        .from("#aboutH1 h1", { y: 30, opacity: 0, duration: 0.8 })
        .from("#aboutH1 p", { y: 20, opacity: 0, duration: 0.8 }, "-=0.4");
    }, mainRef);

    return () => {
      typed.destroy();
      ctx.revert();
    };
  }, []);
  return (
    <div>
      <div
        ref={mainRef}
        className="bg-[#0c1013] text-white min-h-screen overflow-x-hidden"
      >
        <div
          id="particles-js"
          className="fixed inset-0 -z-10 bg-[#0c1013]"
        ></div>

        {/* Navigation */}
        <nav className="h-20 w-full p-10 flex justify-between items-center relative z-50">
          <img src={mylogo} alt="logo" className="h-30 object-cover" />
          <ul className="gap-7 text-xl hidden md:flex">
            <li className="cursor-pointer hover:scale-110 transition-transform">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:scale-110 transition-transform">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:scale-110 transition-transform">
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:scale-110 transition-transform">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:scale-110 transition-transform">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="text-3xl flex gap-5">
            <a href="https://github.com/Kousik-07">
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kousik-jana-1b62a0257/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://www.facebook.com/kousik.jana.31924">
              <i className="ri-facebook-circle-fill"></i>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen w-full flex flex-col justify-center px-10 md:px-20"
        >
          <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-10">
            <div className="left-content flex flex-col mt-8 md:w-1/2">
              <h1 className="text-3xl md:text-5xl text-center md:text-start leading-tight">
                A Computer Science student focused on learning and building
                modern <br />
                <span ref={el} className="text-amber-300"></span>
              </h1>
              <div className="flex justify-center md:justify-start">
                <a href="/src/assets/Kousik_jana_cv.pdf" className="mt-8">
                  <button className="px-8 py-3 bg-amber-300 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(252,211,77,0.8)] transition-all">
                    Resume
                  </button>
                </a>
              </div>
            </div>

            <div className="right-content w-full md:w-1/2 flex justify-center">
              <div className="box h-70 w-70 md:h-112.5 md:w-112.5 bg-linear-to-b from-sky-400/20 via-gray-800 to-black rounded-full overflow-hidden flex justify-center items-center border border-gray-700">
                <img
                  src={myPhoto}
                  alt="Profile"
                  className="w-4/5 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="secleft w-full md:w-1/2 relative flex justify-center items-center min-h-75">
              {/* Background Glows */}
              <div className="h-32 w-32 blur-[80px] bg-blue-500 absolute top-0"></div>
              <div className="h-32 w-32 blur-[80px] bg-pink-500 absolute bottom-0 right-1/4"></div>

              <div className="relative w-full flex justify-center">
                <div className="relative group">
                  <CertificateSlider />
                </div>
              </div>
            </div>

            <div
              id="aboutH1"
              className="secright md:w-1/2 text-center md:text-left z-50"
            >
              <h1 className="text-4xl font-bold text-center mb-6">About</h1>
              <p className="text-lg md:text-xl text-center text-gray-300 leading-relaxed max-w-xl">
                I am a Computer Science Engineering student with a strong
                interest in software development, problem-solving, and emerging
                technologies. I have knowledge of programming languages such as
                Java, and HTML CSS and basic JavaScript to make web pages and I
                am eager to apply my skills in real-world projects.
              </p>
            </div>
          </div>
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App
