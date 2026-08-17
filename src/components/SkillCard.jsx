import React from 'react';

const SkillCard = ({ name, onRemove, variant = 'wanted' }) => {
  return (
    <div className={`sw-chip sw-chip-${variant}`}>
      <span>{name}</span>
      {onRemove && (
        <button
          type="button"
          className="sw-remove-btn"
          onClick={() => onRemove(name)}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SkillCard;