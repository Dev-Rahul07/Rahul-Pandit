import React, { useEffect, useRef, useState } from "react";
import useMousePosition from "./hooks/useMousePosition";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection";

const lerp = (a, b, t) => a + (b - a) * t;

const App = () => {
  const mousePosition = useMousePosition();
  const [cursorActive, setCursorActive] = useState(false);

  // Three trailing positions for the circles
  const [circlePos, setCirclePos] = useState([
    { x: window.innerWidth / 2, y: window.innerHeight / 2 }, // small
    { x: window.innerWidth / 2, y: window.innerHeight / 2 }, // medium
    { x: window.innerWidth / 2, y: window.innerHeight / 2 }, // large
  ]);
  const rafRef = useRef();

  useEffect(() => {
    const animate = () => {
      setCirclePos((prev) => {
        const target = mousePosition || {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        };
        return [
          {
            x: lerp(prev[0].x, target.x, 0.35),
            y: lerp(prev[0].y, target.y, 0.35),
          },
          {
            x: lerp(prev[1].x, target.x, 0.18),
            y: lerp(prev[1].y, target.y, 0.18),
          },
          {
            x: lerp(prev[2].x, target.x, 0.09),
            y: lerp(prev[2].y, target.y, 0.09),
          },
        ];
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [mousePosition]);

  useEffect(() => {
    const onDown = () => setCursorActive(true);
    const onUp = () => setCursorActive(false);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  // Circle sizes (diameter)
  const sizes = [28, 44, 68];
  const opacities = [0.7, 0.35, 0.18];

  const style = `
    .animate-fade-in-down { animation: fadeInDown 0.6s ease-out forwards; opacity: 0; }
    .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-600 { animation-delay: 0.6s; }
    @keyframes fadeInDown { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
  `;

  return (
    <div className="app" onContextMenu={(e) => e.preventDefault()}>
      <style>{style}</style>

      {/* Multi-circle floating cursor, hidden on pointer targets */}
      <div
        id="floating-cursor-multi"
        aria-hidden="true"
        style={{ pointerEvents: "none" }}
      >
        {circlePos.map((pos, i) => (
          <div
            key={i}
            className={`cursor-circle${cursorActive ? " cursor-active" : ""}`}
            style={{
              width: sizes[i],
              height: sizes[i],
              left: pos.x - sizes[i] / 2,
              top: pos.y - sizes[i] / 2,
              opacity: opacities[i],
              zIndex: 9999,
              borderWidth: i === 0 ? 2 : 1,
              borderStyle: "solid",
              borderColor: "rgba(165,180,252,0.5)",
              position: "fixed",
              pointerEvents: "none",
              transition: "border-color 0.18s",
              boxShadow:
                i === 2 ? "0 0 32px 8px rgba(99,102,241,0.07)" : "none",
              background: "transparent",
              willChange: "transform, opacity",
              transform: cursorActive
                ? `scale(${i === 0 ? 1.25 : i === 1 ? 1.12 : 1.06})`
                : "scale(1)",
            }}
          />
        ))}
      </div>

      <Header />
      <main>
        <Hero mousePosition={mousePosition} />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
