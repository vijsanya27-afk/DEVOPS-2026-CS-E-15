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
        <p><strong>Category:</strong> {selectedCategory}</p>
        <p><strong>Level:</strong> {selectedLevel}</p>
        <p><strong>Tags:</strong> {tags.length > 0 ? tags.join(', ') : 'No tags added'}</p>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    width:'70%',
    maxWidth: '1500px',
    minHeight:'700px',
    margin: '80px auto',
     padding: '30px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  },
  heading: {
    marginTop: 0,
    fontSize: '20px',
    color: '#333',
  },
  section: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#555',
  },
  chipGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '10px',
  },
  chip: {
    padding: '6px 14px',
    border: '1px solid #ccc',
    borderRadius: '16px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    fontSize: '14px',
  },
  activeChip: {
    backgroundColor: '#007bff',
    color: '#fff',
    borderColor: '#007bff',
  },
  levelGroup: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  radioLabel: {
    cursor: 'pointer',
    fontSize: '14px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '10px',
  },
  tag: {
    backgroundColor: '#e9ecef',
    color: '#495057',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  removeTagBtn: {
    background: 'none',
    border: 'none',
    color: '#888',
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
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  summaryBox: {
    backgroundColor: '#f8f9fa',
    padding: '12px',
    borderRadius: '6px',
    borderLeft: '4px solid #007bff',
    marginTop: '15px',
  },
};

export default SkillMetadataUI;