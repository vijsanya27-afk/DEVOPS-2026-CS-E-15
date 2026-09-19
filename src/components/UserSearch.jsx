import React, { useState, useMemo } from 'react';

const MOCK_USERS = [
  { id: 1, name: 'Sarah Connor', role: 'Frontend Developer', skill: 'React', level: 'Expert', category: 'Development', available: true },
  { id: 2, name: 'Alex Mercer', role: 'UI/UX Designer', skill: 'Figma', level: 'Intermediate', category: 'Design', available: false },
  { id: 3, name: 'Elena Rostova', role: 'Full Stack Engineer', skill: 'Node.js', level: 'Expert', category: 'Development', available: true },
  { id: 4, name: 'Marcus Brody', role: 'Data Scientist', skill: 'Python', level: 'Beginner', category: 'Data Science', available: true },
];

export default function SearchWithFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  
  // New Validation State
  const [searchError, setSearchError] = useState('');

  // Handle Search Input with Validation
  const handleSearchChange = (e) => {
    const value = e.target.value;

    // Validation 1: Character limit check (e.g., max 35 chars)
    if (value.length > 35) {
      setSearchError('Search query cannot exceed 35 characters.');
    } else {
      setSearchError('');
    }

    setSearchTerm(value);
  };

  // Advanced Multi-filter Logic with Validation & Memoization
  const filteredUsers = useMemo(() => {
    const trimmedQuery = searchTerm.trim().toLowerCase();

    return MOCK_USERS.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(trimmedQuery) ||
        user.skill.toLowerCase().includes(trimmedQuery);
      
      const matchesLevel = selectedLevel === 'All' || user.level === selectedLevel;
      const matchesCategory = selectedCategory === 'All' || user.category === selectedCategory;
      const matchesAvailability = showAvailableOnly ? user.available : true;

      return matchesSearch && matchesLevel && matchesCategory && matchesAvailability;
    });
  }, [searchTerm, selectedLevel, selectedCategory, showAvailableOnly]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedLevel('All');
    setSelectedCategory('All');
    setShowAvailableOnly(false);
    setSearchError('');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Search Users & Skill Filters</h2>

      {/* Filter Section Controls */}
      <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid #e2e8f0' }}>
        <input
          type="text"
          placeholder="Search by name or skill..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: '100%', padding: '0.6rem', marginBottom: '0.5rem', borderRadius: '4px', border: searchError ? '1px solid #ef4444' : '1px solid #ccc', boxSizing: 'border-box' }}
        />
        
        {/* Validation Error Text */}
        {searchError && (
          <p style={{ color: '#ef4444', fontSize: '0.8rem', margin: '0 0 1rem 0' }}>
            {searchError}
          </p>
        )}

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: searchError ? '0' : '1rem' }}>
          {/* Skill Level Filter */}
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 'bold', display: 'block' }}>Skill Level:</label>
            <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} style={{ padding: '0.4rem', borderRadius: '4px' }}>
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: 'bold', display: 'block' }}>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ padding: '0.4rem', borderRadius: '4px' }}>
              <option value="All">All Categories</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>

          {/* Availability Checkbox */}
          <div style={{ marginTop: '1.2rem' }}>
            <label style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
              <input type="checkbox" checked={showAvailableOnly} onChange={(e) => setShowAvailableOnly(e.target.checked)} />
              {' '}Available Only
            </label>
          </div>

          {/* Reset Button */}
          <button onClick={resetFilters} style={{ marginTop: '1.2rem', padding: '0.4rem 0.8rem', cursor: 'pointer', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Reset Filters
          </button>
        </div>
      </div>

      {/* Render Filtered User List */}
      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '6px', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0' }}>{user.name}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
                  {user.skill} • <strong>{user.level}</strong> ({user.category})
                </p>
              </div>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: user.available ? '#d1fae5' : '#f3f4f6', color: user.available ? '#065f46' : '#374151' }}>
                {user.available ? 'Available' : 'Busy'}
              </span>
            </div>
          ))
        ) : (
          <p style={{ color: '#777' }}>No users match the selected filter criteria.</p>
        )}
      </div>
    </div>
  );
}