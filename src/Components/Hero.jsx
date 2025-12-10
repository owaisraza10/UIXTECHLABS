import React from 'react';
import vividBackground from '../assets/vivid-blurred-colorful-background.jpg'; 
// Adjust path if needed

const Hero = () => {
  return (
    <section
      className="bg-[#0a2540] h-[50vh] w-full flex flex-col justify-center items-center text-center select-none overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Huge “BOB” text with vivid gradient fill */}
      <h1
  className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] 
  font-extrabold uppercase tracking-widest text-transparent bg-clip-text 
  leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
  style={{
    backgroundImage: `url(${vividBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  UIX Tech Labs
</h1>


      {/* Subtitle — still vivid, but smaller and elegant */}
      <p
        className="text-[4vw] sm:text-[3vw] md:text-[2vw] mt-4 font-semibold text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        style={{
          backgroundImage: `url(${vividBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Innovation Through UI, Impact Through UX
      </p>
    </section>
  );
};

export default Hero;


