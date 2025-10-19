import React from "react";

const SkillBadge = ({ skill, icon: Icon }) => (
  <div className="skill-badge">
    {Icon && <Icon className="icon icon-sm mr-1" />}
    {skill}
  </div>
);

export default SkillBadge;
