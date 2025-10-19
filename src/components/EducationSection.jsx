import React from "react";
import { Briefcase } from "./Icons";
import SectionTitle from "./SectionTitle";

const EducationSection = () => (
  <section id="education" className="section">
    <SectionTitle icon={Briefcase} title="Education" />
    <div className="section-card education-card">
      <div className="education-item">
        <h3 className="institute">Kazi Nazrul University</h3>
        <p className="degree">Bachelor of Computer Applications (BCA)</p>
        <div className="education-meta">
          <span className="year">2022 - 2025</span>
          <span className="grade">CGPA: 8.61</span>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
