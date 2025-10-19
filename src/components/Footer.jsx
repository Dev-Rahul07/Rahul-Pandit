// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "./Icons";
import { userData } from "../data/useData";

const Footer = () => (
  <footer className="site-footer">
    <div className="container text-center">
      <div className="socials">
        <a
          href={userData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github className="icon icon-lg" />
        </a>
        <a
          href={userData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin className="icon icon-lg" />
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${userData.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Mail className="icon icon-lg" />
        </a>
      </div>
      <p>Designed & Built by {userData.name}.</p>
    </div>
  </footer>
);

export default Footer;
