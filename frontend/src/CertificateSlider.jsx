import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CertificateSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    // Slider-er total width mapchi
    const totalWidth = slider.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: `-${totalWidth}px`, // Bam dike slide hobe
        duration: 10, // Koto druto cholbe (beshi dile slow hobe)
        ease: "none",
        repeat: -1, // Infinite loop
      });
    });

    return () => ctx.revert();
  }, []);

  // Image array (tomar certificate gulo ekhane rakho)
  const images = [
    "/src/assets/67e160b90f43d67d093d56bd_page-0001.jpg",
    "/src/assets/PHOTO-2026-04-28-15-30-25.jpg",
    "/src/assets/Internship-Batct_Data Set 4.jpg",
  ];

  return (
    <div className="overflow-hidden w-full py-10 relative">
      {/* Gradient Overlay (Dui pashe halka blurry effect) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-[#0c1013] via-transparent to-[#0c1013]"></div>

      <div ref={sliderRef} className="flex gap-6 w-max items-center">
        {/* Prothom bar images */}
        {images.map((img, index) => (
          <div
            key={index}
            className="h-44 w-64 md:h-64 md:w-80 shrink-0 border-4 border-white/20 rounded-xl overflow-hidden shadow-xl"
          >
            <img src={img} alt="cert" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Repeat images jate loop-ta seamless hoy */}
        {images.map((img, index) => (
          <div
            key={`dup-${index}`}
            className="h-44 w-64 md:h-64 md:w-80 shrink-0 border-4 border-white/20 rounded-xl overflow-hidden shadow-xl"
          >
            <img src={img} alt="cert" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSlider;
