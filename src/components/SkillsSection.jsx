// src/components/SkillsSection.jsx
import React from "react";
import { Code } from "./Icons";
import SectionTitle from "./SectionTitle";
import SkillBadge from "./SkillBadge";
import { placeholderSkills } from "../data/placeholderSkills";

const SkillsSection = () => (
  <section id="skills" className="section">
    <SectionTitle icon={Code} title="Technical Skills" />
    <div className="skills-list">
      {placeholderSkills.map((skill, index) => (
        <SkillBadge key={index} skill={skill.name} icon={skill.icon} />
      ))}
    </div>
  </section>
);

export default SkillsSection;
