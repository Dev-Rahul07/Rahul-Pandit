// src/components/Icons.jsx
import React from "react";

// Minimal SVG icon components used in the project.
export const Github = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.62-2.8 5.64-5.47 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z" />
  </svg>
);

export const Linkedin = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M4.98 3.5a2.5 2.5 0 11.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.99h4v12H3v-12zM9 8.99h3.84v1.64h.05c.54-1.02 1.86-2.09 3.83-2.09C21.2 8.54 22 10.6 22 13.6v7.39h-4v-6.56c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5v6.66H9v-12z" />
  </svg>
);

export const Mail = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    {...props}
  >
    <path d="M3 8.5l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Menu = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const X = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M6 6l12 12M6 18L18 6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Zap = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" />
  </svg>
);

export const Briefcase = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="2"
      y="7"
      width="20"
      height="14"
      rx="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 7V5a2 2 0 00-2-2H10a2 2 0 00-2 2v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Code = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M16 18l6-6-6-6M8 6L2 12l6 6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Compass = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8l-6 4-4 6 6-4 4-6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const User = ({ className = "", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M20 21v-2a4 4 0 00-3-3.87A9 9 0 006 21v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  
);
