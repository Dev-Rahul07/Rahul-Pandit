// src/components/ContactSection.jsx
import React from "react";
import { Mail } from "./Icons";
import SectionTitle from "./SectionTitle";
import { userData } from "../data/useData";

const ContactSection = () => (
  <section id="contact" className="section">
    <SectionTitle icon={Mail} title="Get In Touch" />
    <div className="section-card contact-card">
      <h3 className="text-3xl font-bold mb-4">
        I'm always open to new opportunities!
      </h3>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Whether you have a question, a project idea, or just want to say hi,
        feel free to drop me a line. I'll do my best to get back to you!
      </p>
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${userData.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        <Mail className="icon icon-sm mr-2" />
        Say Hello
      </a>
    </div>
  </section>
);

export default ContactSection;
