import React from "react";

const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="section-title">
    {Icon && <Icon className="icon icon-lg" />}
    {title}
  </h2>
);

export default SectionTitle;
