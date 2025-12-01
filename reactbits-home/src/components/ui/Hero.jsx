import React from "react";
import DarkVeil from "./Darkveil";
import BlurText from "./BlurText";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from "../LogoLoop";

const Hero = () => {

  return (
    <section className="relative w-full h-[120vh] md:h-[90vh] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <DarkVeil />
      </div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
  <BlurText
    text="React Components"
    delay={150}
    animateBy="words"
    direction="top"
    className="text-5xl font-bold"
  />

  <BlurText
    text="For Creative Developers"
    delay={300}
    animateBy="words"
    direction="top"
    className="text-5xl font-bold mt-2"
  />
</div>
    </section>
  );
};

export default Hero;
