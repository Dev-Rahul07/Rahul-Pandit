import React, { useState, useEffect } from "react";
import { Menu, X } from "./Icons";
import { userData } from "../data/useData";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" }, // Add this line
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    // lock body scroll while mobile nav is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="text-2xl font-bold">
          <a onClick={() => scrollToSection("hero")} className="cursor-pointer">
            {userData.name.split(" ")[0]}
            <span style={{ color: "var(--indigo-300)" }}>.dev</span>
          </a>
        </h1>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="md-hidden-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X className="icon icon-md" />
          ) : (
            <Menu className="icon icon-md" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-nav"
          className="nav-mobile-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="nav-mobile-panel"
            onClick={(e) => e.stopPropagation()}
            role="menu"
            aria-label="Mobile navigation"
          >
            <button
              className="mobile-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="icon icon-md" />
            </button>

            <nav className="nav-mobile-list">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  role="menuitem"
                  className="nav-mobile-link"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
