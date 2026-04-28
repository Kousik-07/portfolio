import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const sliderRef = useRef(null);

  // Tomar icon gulo ekhane array-te rakho
  // Ami dummy URL diyechi, tumi tomar assets folder theke icon use koro
  const skillIcons = [
    { name: "React", url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    {
      name: "NodeJS",
      url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "MongoDB",
      url: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "JavaScript",
      url: "/src/assets/javascript-logo-svgrepo-com.svg",
    },
    {
      name: "Tailwind",
      url: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      name: "Express",
      url: "/src/assets/Express.svg",
    },
    { name: "Java", url: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    { name: "Figma", url: "/src/assets/Figma.svg" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2;

    const ctx = gsap.context(() => {
      // Auto-sliding animation
      const move = gsap.to(slider, {
        x: `-${totalWidth}px`,
        duration: 20, // Speed control koro ekhane
        ease: "none",
        repeat: -1,
      });

      // Hover korle slider theme jabe
      slider.addEventListener("mouseenter", () => move.pause());
      slider.addEventListener("mouseleave", () => move.play());
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-20 bg-[#0c1013] overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">My Tech Stack</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm currently focused on building modern, accessible, and
          high-performance web applications using these technologies.
        </p>
      </div>

      {/* Infinite Slider Wrapper */}
      <div className="relative flex items-center">
        {/* Shadow Overlays for smooth entry/exit */}
        <div className="absolute left-0 z-10 w-20 h-full bg-linear-to-r from-[#0c1013] to-transparent"></div>
        <div className="absolute right-0 z-10 w-20 h-full bg-linear-to-l from-[#0c1013] to-transparent"></div>

        <div
          ref={sliderRef}
          className="flex gap-8 md:gap-16 items-center w-max"
        >
          {/* Double map korchi seamless loop-er jonno */}
          {[...skillIcons, ...skillIcons].map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-gray-800/30 rounded-2xl border border-white/5 hover:border-amber-300/50 transition-all duration-300 w-32 h-32 md:w-40 md:h-40"
            >
              <img
                src={skill.url}
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-125"
              />
              <span className="mt-4 text-xs md:text-sm text-gray-500 group-hover:text-amber-300 font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
