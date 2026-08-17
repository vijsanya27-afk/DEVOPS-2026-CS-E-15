import React, { useState } from "react";
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

  return (
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

      <div className="so-skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="so-skill-chip">
            {skill}
            <button
              type="button"
              className="so-remove-btn"
              onClick={() => handleRemoveSkill(skill)}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsOffered;