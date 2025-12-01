import { useEffect } from "react";
import gsap from "gsap";

export default function FairyCursor() {
  useEffect(() => {
    const createSpark = (x, y) => {
      const spark = document.createElement("div");

      const size = Math.random() * 6 + 4; // random small particles
      const color = `hsl(${Math.random() * 360}, 80%, 70%)`;

      spark.style.position = "fixed";
      spark.style.left = x + "px";
      spark.style.top = y + "px";
      spark.style.width = size + "px";
      spark.style.height = size + "px";
      spark.style.borderRadius = "50%";
      spark.style.background = color;
      spark.style.pointerEvents = "none";
      spark.style.mixBlendMode = "screen";
      spark.style.zIndex = 9999;
      spark.style.boxShadow = `0 0 10px ${color}`;

      document.body.appendChild(spark);

      gsap.to(spark, {
        x: (Math.random() - 0.5) * 80,
        y: (Math.random() - 0.5) * 80,
        opacity: 0,
        scale: Math.random() + 0.5,
        duration: 0.8 + Math.random() * 0.6,
        ease: "power2.out",
        onComplete: () => spark.remove(),
      });
    };

    const handleMove = (e) => {
      for (let i = 0; i < 2; i++) {
        createSpark(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
