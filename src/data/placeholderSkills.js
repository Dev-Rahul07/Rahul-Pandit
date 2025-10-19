// src/data/skillsData.js
import { Code, Zap, Briefcase, Compass } from "../components/Icons";

export const placeholderSkills = [
  // --- FRONTEND ---
  { name: "HTML", icon: Code, category: "Frontend" },
  { name: "CSS", icon: Compass, category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: Zap, category: "Frontend" },
  { name: "React.js", icon: Zap, category: "Frontend" },

  // --- BACKEND ---
  { name: "Python", icon: Code, category: "Backend" },
  { name: "C++", icon: Code, category: "Backend" },
  { name: "Django", icon: Briefcase, category: "Backend" },
  { name: "REST API", icon: Code, category: "Backend" },

  // --- DATABASE ---
  { name: "MySQL", icon: Briefcase, category: "Database" },

  // --- TOOLS ---
  { name: "Git", icon: Compass, category: "Tools" },
  { name: "GitHub", icon: Compass, category: "Tools" },
  { name: "Vs-code", icon: Zap, category: "Tools" },
];
