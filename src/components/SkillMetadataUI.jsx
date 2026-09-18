import React, { useState } from 'react';

const SkillMetadataUI = () => {
  // Dynamic Lists State
  const [categories, setCategories] = useState(['Frontend', 'Backend', 'Database', 'DevOps']);
  const [selectedCategory, setSelectedCategory] = useState('Frontend');
  
  const [levels] = useState(['Beginner', 'Intermediate', 'Advanced', 'Expert']);
  const [selectedLevel, setSelectedLevel] = useState('Intermediate');

  const [tags, setTags] = useState(['React', 'Node.js', 'Tailwind', 'MongoDB']);
  const [tagInput, setTagInput] = useState('');
  const [newCategoryInput, setNewCategoryInput] = useState('');

  // Tag Add Handler
  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  // Tag Remove Handler
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Category Add Handler
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategoryInput.trim() && !categories.includes(newCategoryInput.trim())) {
      setCategories([...categories, newCategoryInput.trim()]);
      setSelectedCategory(newCategoryInput.trim());
      setNewCategoryInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Skill Metadata & Categories</h2>

      {/* 1. Category Selection & Dynamic Addition */}
      <div style={styles.section}>
        <label style={styles.label}>Select Category:</label>
        <div style={styles.chipGroup}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              style={{
                ...styles.chip,
                ...(selectedCategory === cat ? styles.activeChip : {}),
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <form onSubmit={handleAddCategory} style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Add new category..."
            value={newCategoryInput}
            onChange={(e) => setNewCategoryInput(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>+ Add Category</button>
        </form>
      </div>

      {/* 2. Proficiency Level Selection */}
      <div style={styles.section}>
        <label style={styles.label}>Proficiency Level:</label>
        <div style={styles.levelGroup}>
          {levels.map((lvl) => (
            <label key={lvl} style={styles.radioLabel}>
              <input
                type="radio"
                name="skillLevel"
                value={lvl}
                checked={selectedLevel === lvl}
                onChange={(e) => setSelectedLevel(e.target.value)}
              />
              <span style={{ marginLeft: '6px' }}>{lvl}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 3. Dynamic Tags UI (Add & Remove) */}
      <div style={styles.section}>
        <label style={styles.label}>Tags:</label>
        <div style={styles.tagContainer}>
          {tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
              <button
                type="button"
                style={styles.removeTagBtn}
                onClick={() => handleRemoveTag(tag)}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <form onSubmit={handleAddTag} style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter tag (e.g. JavaScript)..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>+ Add Tag</button>
        </form>
      </div>

      {/* Live Preview / UI State Summary */}
      <div style={styles.summaryBox}>
        <h4 style={{ margin: '0 0 8px 0' }}>Selected Metadata Preview:</h4>
        <p style={{ margin: '4px 0' }}><strong>Category:</strong> {selectedCategory}</p>
        <p style={{ margin: '4px 0' }}><strong>Level:</strong> {selectedLevel}</p>
        <p style={{ margin: '4px 0' }}><strong>Tags:</strong> {tags.length > 0 ? tags.join(', ') : 'No tags added'}</p>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '20px auto',
    padding: '30px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box'
  },
  heading: {
    marginTop: 0,
    fontSize: '20px',
    color: '#0f172a',
  },
  section: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#475569',
    fontSize: '14px'
  },
  chipGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '12px',
  },
  chip: {
    padding: '6px 14px',
    border: '1px solid #cbd5e1',
    borderRadius: '16px',
    backgroundColor: '#f8fafc',
    color: '#334155',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '500'
  },
  activeChip: {
    backgroundColor: '#2563eb',
    color: '#fff',
    borderColor: '#2563eb',
  },
  levelGroup: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  radioLabel: {
    cursor: 'pointer',
    fontSize: '14px',
    color: '#334155'
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '12px',
  },
  tag: {
    backgroundColor: '#f1f5f9',
    color: '#334155',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  removeTagBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: 0,
    lineHeight: 1,
  },
  inputGroup: {
    display: 'flex',
    gap: '8px',
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    outline: 'none',
    fontSize: '14px'
  },
  addButton: {
    padding: '8px 14px',
    backgroundColor: '#16a34a',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '13px'
  },
  summaryBox: {
    backgroundColor: '#f8fafc',
    padding: '16px',
    borderRadius: '8px',
    borderLeft: '4px solid #2563eb',
    marginTop: '10px',
  },
};

export default SkillMetadataUI;