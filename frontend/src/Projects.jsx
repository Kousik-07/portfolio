import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  const projectData = [
    {
      id: 1,
      title: "Expence Tracking",
      description:
        "A comprehensive financial management application built with React.js and Tailwind CSS designed to help users monitor their spending habits and manage budgets effectively. The project demonstrates advanced CRUD operations and data persistence within a modern web environment.",
      image: "/src/assets/expenceTracking.png", // Replace with your project screenshot
      tags: ["React", "Express.js", "Tailwind", "mongoDB"],
      link: "https://expense-tracking-frontend-iawv.onrender.com/",
      gitlink: "https://github.com/Kousik-07/Expense_Tracking",
    },
    {
      id: 2,
      title: "Random Password generator",
      description:
        "A high-performance and secure web utility built with React.js and Tailwind CSS that enables users to generate strong, unique passwords instantly. The application focuses on providing a seamless user experience with real-time feedback and high-security standards.",
      image: "/src/assets/random_password.png", // Replace with your project screenshot
      tags: ["React.js", "Hooks", "Tailwind"],
      link: "https://password-generator-one-livid-76.vercel.app",
      gitlink: "https://github.com/Kousik-07/password-Generator",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Proti ti project card scroll korle fade in hobe
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-[#0c1013] relative overflow-hidden"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-[-10%] w-125 h-125 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-20 text-center">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-32">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card flex flex-col items-center gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Project Image Box */}
              <div className="w-full md:w-3/5 relative group">
                <div className="absolute -inset-2 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#1a1f24] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Info Box */}
              <div
                className={`w-full md:w-2/5 flex flex-col ${
                  index % 2 === 0
                    ? "md:text-left"
                    : "md:text-right md:items-end"
                }`}
              >
                <p className="text-purple-500 font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                {/* Glassmorphism Description Card */}
                <div className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-xl md:w-[90%] lg:w-[120%]">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div
                  className={`flex flex-wrap gap-4 mt-6 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-gray-400 text-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 mt-6 text-2xl text-white">
                  <a
                    href={project.gitlink}
                    className="hover:text-purple-500 transition-colors"
                  >
                    <i className="ri-github-line"></i>
                  </a>
                  <a
                    href={project.link}
                    className="hover:text-purple-500 transition-colors"
                  >
                    <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
