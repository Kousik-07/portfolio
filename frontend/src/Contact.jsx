import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-content > *", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-20 bg-[#0c1013] text-white px-10 md:px-20 min-h-[60vh] flex items-center"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="contact-content max-w-4xl">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Contact</h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. Or have a
            project in mind? Let's connect.
          </p>

          {/* Email with Hover Effect */}
          <div className="mb-10">
            <a
              href="mailto:kousikjana@gmail.com"
              className="text-xl md:text-2xl font-medium border-b border-transparent hover:border-amber-300 transition-all duration-300"
            >
              kousikjana976@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 text-3xl">
            <a
              href="https://github.com/Kousik-07"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kousik-jana-1b62a0257/"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <p className="text-gray-400 text-lg hover:text-white transition-colors duration-300">
              +91 9382501279
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
