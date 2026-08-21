import React, { useState } from 'react';

const SkillCard = ({ name, skill, onRemove, onDelete, onUpdate, variant = 'offered' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const displayName = name || (typeof skill === 'object' ? skill?.name : skill) || '';
  const [editedText, setEditedText] = useState(displayName);

  const handleSave = () => {
    if (editedText.trim() && onUpdate) {
      onUpdate(displayName, editedText);
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(displayName);
    else if (onRemove) onRemove(displayName);
  };

  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '6px', 
      padding: '6px 12px', 
      borderRadius: '20px', 
      backgroundColor: variant === 'offered' ? '#e0f2fe' : '#e0e7ff', 
      color: variant === 'offered' ? '#0369a1' : '#3730a3',
      fontSize: '14px',
      fontWeight: '500',
      boxSizing: 'border-box'
    }}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          style={{ 
            padding: '2px 6px', 
            borderRadius: '10px', 
            border: '1px solid #0284c7',
            outline: 'none',
            fontSize: '13px',
            width: '90px'
          }}
        />
      ) : (
        <span>{displayName}</span>
      )}

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        {isEditing ? (
          <button
            type="button"
            onClick={handleSave}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#16a34a', padding: '0 2px' }}
          >
            ✓
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', opacity: 0.7, padding: '0 2px' }}
          >
            ✏️
          </button>
        )}

        <button
          type="button"
          onClick={handleDelete}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '15px', color: '#dc2626', padding: '0 2px', lineHeight: 1 }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SkillCard;