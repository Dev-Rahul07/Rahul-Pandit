import React from "react";
import { Zap, Mail } from "./Icons";
import { userData } from "../data/useData";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const Hero = ({ mousePosition }) => {
  const {
    x: mouseX = typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: mouseY = typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  } = mousePosition || {};

  const cx = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const cy = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  const dx = mouseX - cx;
  const dy = mouseY - cy;

  // subtle factors for smooth depth
  const layer1Tx = clamp(dx * 0.015, -30, 30);
  const layer1Ty = clamp(dy * 0.015, -30, 30);
  const layer1Rot = clamp(dx * 0.006, -2.5, 2.5);

  const layer2Tx = clamp(dx * 0.04, -60, 60);
  const layer2Ty = clamp(dy * 0.04, -60, 60);
  const layer2Rot = clamp(dx * 0.018, -6, 6);

  return (
    <section id="hero" className="hero">
      <div
        className="hero-bg"
        style={{
          transform: `translate(${layer1Tx}px, ${layer1Ty}px) rotate(${layer1Rot}deg) scale(1.02)`,
          willChange: "transform, opacity",
        }}
      />
      <div
        className="hero-bg-2"
        style={{
          transform: `translate(${layer2Tx}px, ${layer2Ty}px) rotate(${layer2Rot}deg) scale(1.06)`,
          willChange: "transform, opacity",
        }}
      />

      <div className="hero-content">
        <p className="eyebrow">Hi, my name is</p>
        <h1 className="title">{userData.name}</h1>
        <h2 className="subtitle">{userData.title}</h2>
        <p className="lead">{userData.tagline}</p>
        <div className="flex justify-center gap-2">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href={userData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
