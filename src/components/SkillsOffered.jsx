import React, { useState } from "react";
import SkillCard from "./SkillCard"; // 1. SkillCard Import Kiya
import "./SkillsOffered.css";

const SkillsOffered = () => {
  const [skills, setSkills] = useState(["React", "JavaScript"]);
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");

  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmed = inputVal.trim();

    if (!trimmed) {
      setError("Skill name cannot be empty.");
      return;
    }
    if (skills.map((s) => s.toLowerCase()).includes(trimmed.toLowerCase())) {
      setError("Skill already added.");
      return;
    }
    if (skills.length >= 10) {
      setError("Maximum 10 skills allowed.");
      return;
    }

    setSkills([...skills, trimmed]);
    setInputVal("");
    setError("");
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  // 2. Edit functionality ke liye handler
  const handleUpdateSkill = (oldName, newName) => {
    if (!newName.trim()) return;
    setSkills(skills.map((s) => (s === oldName ? newName.trim() : s)));
  };

  return (
    <div className="so-page-wrapper">
      <div className="so-card-container">
        <div className="so-header">
          <h2 className="so-title">Skills Offered</h2>
          <span className="so-count-badge">{skills.length}/10</span>
        </div>
        <p className="so-subtitle">Add skills you can teach or share</p>

        <form className="so-form" onSubmit={handleAddSkill}>
          <input
            type="text"
            className="so-input"
            placeholder="e.g. Node.js, UI/UX Design"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
              setError("");
            }}
          />
          <button type="submit" className="so-add-btn">
            Add
          </button>
        </form>

        {error && <p className="so-error-message">{error}</p>}

        {/* 3. SkillCard component render kiya */}
        <div className="so-skills-list">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill}
              variant="offered"
              onUpdate={handleUpdateSkill}
              onDelete={handleRemoveSkill}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsOffered;