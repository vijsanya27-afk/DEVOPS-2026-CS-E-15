import React from "react";
import SkillsOffered from "../components/SkillsOffered";
import SkillsWanted from "../components/SkillsWanted";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-page">
      <h1>My Skills Dashboard</h1>

      <div className="skills-container">
        <SkillsOffered />
        <SkillsWanted />
        <SkillMetadataUI />
      </div>
    </div>
  );
}

export default Skills;