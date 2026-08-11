import React, { useState } from "react";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([
    "⚛️ React.js",
    "🟨 JavaScript",
    "🐍 Python"
  ]);

  const addSkill = () => {
    const newSkill = prompt("Enter your skill:");

    if (newSkill && newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
    }
  };

  const deleteSkill = (indexToDelete) => {
    setSkills(
      skills.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="skills-page">

      <h1>My Skills</h1>

      <div className="skill-section">

        <h2>💻 Web Development</h2>

        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <span>{skill}</span>

              <button onClick={() => deleteSkill(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button onClick={addSkill}>
          Add Skill
        </button>

      </div>

    </div>
  );
}

export default Skills;