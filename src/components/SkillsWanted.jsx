import React, { useState } from 'react';
import SkillCard from './SkillCard';
import './SkillsWanted.css';

const SkillsWanted = () => {
  const [wantedSkills, setWantedSkills] = useState(['Python', 'Machine Learning']);
  const [inputSkill, setInputSkill] = useState('');
  const [error, setError] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmed = inputSkill.trim();

    if (!trimmed) {
      setError('Please enter a skill name.');
      return;
    }

    if (wantedSkills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      setError('This skill is already in your wanted list.');
      return;
    }

    if (wantedSkills.length >= 10) {
      setError('Maximum 10 skills allowed.');
      return;
    }

    setWantedSkills([...wantedSkills, trimmed]);
    setInputSkill('');
    setError('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    setWantedSkills(wantedSkills.filter((s) => s !== skillToRemove));
    setError('');
  };

  return (
    <div className="sw-card-container">
      <div className="sw-header">
        <h3 className="sw-title">Skills I Want to Learn</h3>
        <span className="sw-count-badge">{wantedSkills.length}/10</span>
      </div>
      <p className="sw-subtitle">Select or add skills you want to gain</p>

      <form onSubmit={handleAddSkill} className="sw-form">
        <input
          type="text"
          className="sw-input"
          placeholder="e.g. Python, Figma, Docker"
          value={inputSkill}
          onChange={(e) => setInputSkill(e.target.value)}
        />
        <button type="submit" className="sw-add-btn">Add Skill</button>
      </form>

      {error && <p className="sw-error">{error}</p>}

      <div className="sw-badges-list">
        {wantedSkills.length === 0 ? (
          <p className="sw-empty-msg">No skills added yet.</p>
        ) : (
          wantedSkills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill}
              onRemove={handleRemoveSkill}
              variant="wanted"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SkillsWanted;