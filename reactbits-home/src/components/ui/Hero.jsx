import React from "react";
import DarkVeil from "./Darkveil";
import BlurText from "./BlurText";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from "../LogoLoop";

const Hero = () => {
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <DarkVeil />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
     <div className="flex flex-col items-center">
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
      </div>
       <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      />
    </div>
    </section>
  );
};

export default Hero;
