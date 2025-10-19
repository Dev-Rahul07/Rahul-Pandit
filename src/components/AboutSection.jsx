
import React from "react";
import { User } from "./Icons";
import SectionTitle from "./SectionTitle";

const AboutSection = () => (
  <section id="about" className="section">
    <SectionTitle icon={User} title="About Me" />
    <div className="section-card about-card">
      <p className="text-gray-300 mb-4 leading-relaxed text-lg">
        👋 Hi, I’m Rahul Pandit, a passionate Python Developer with hands-on
        experience in Django and full-stack web development. I love turning
        ideas into real-world projects — from building web apps to automating
        tasks with Python. I’ve built multiple projects like a QR Code
        Attendance System, a Expense Tracking App, and a Jarvis-like Voice
        Assistant, using technologies such as Python, Django, MySQL, JavaScript,
        and REST APIs. I recently completed my Python Full Stack Development
        training at PySpiders (Kolkata), where I worked on end-to-end web
        projects, improved my problem-solving skills, and learned to write
        clean, efficient code.
      </p>
      <p className="text-gray-300 leading-relaxed text-lg">
        I’m always excited to learn, collaborate, and grow as a developer —
        whether it’s contributing to open-source, building new features, or
        improving system performance. Tech Stack: Python | Django | HTML | CSS |
        JavaScript | React |MySQL | SQLite | Git | REST API
      </p>
      <div
        className="mt-6 pt-4"
        style={{
          borderTop: "1px solid var(--bg-gray-700)",
          color: "var(--text-gray-500)",
          fontSize: "0.875rem",
        }}
      >
        <p>
          Training: - Completed Python Full Stack Development at PySpiders
          (Kolkata). - Worked on end-to-end web projects, improved
          problem-solving skills, and learned to write clean, efficient code.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
