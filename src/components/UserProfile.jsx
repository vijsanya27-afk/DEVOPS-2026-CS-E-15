import React, { useState } from 'react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const [userProfile, setUserProfile] = useState({
    name: 'Suhani Shah',
    email: 'suhani@gmail.com',
    bio: 'Full Stack Developer learning new tools and sharing backend expertise.',
    skillsToTeach: [
      { id: 1, name: 'Node.js', level: 'Advanced', category: 'Backend', tags: 'Express, JavaScript, API' },
      { id: 2, name: 'MongoDB', level: 'Intermediate', category: 'Database', tags: 'NoSQL, Mongoose' }
    ],
    skillsToLearn: [
      { id: 1, name: 'React', level: 'Beginner', category: 'Frontend', tags: 'UI, JSX' }
    ]
  });

  const [newTeachSkill, setNewTeachSkill] = useState({ name: '', level: 'Beginner', category: '', tags: '' });
  const [newLearnSkill, setNewLearnSkill] = useState({ name: '', level: 'Beginner', category: '', tags: '' });

  // Strict email validation checking provider, domain extension, and lowercase criteria
  const validateEmail = (email) => {
    const strictEmailRegex = /^[a-z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|icloud|live)\.(com|in|org|net|co\.in)$/;
    return strictEmailRegex.test(email.toLowerCase().trim());
  };

  const triggerSuccessAlert = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  // Save profile with strict validation checks
  const toggleEditMode = () => {
    if (isEditing) {
      if (!userProfile.email.trim()) {
        setEmailError('Email address cannot be empty!');
        return;
      }

      if (/[A-Z]/.test(userProfile.email)) {
        setEmailError('Capital letters are not allowed in email. Please use lowercase only.');
        return;
      }

      if (!validateEmail(userProfile.email)) {
        setEmailError('Invalid email address! Use standard format and providers (e.g., suhani@gmail.com).');
        return;
      }

      setEmailError('');
      triggerSuccessAlert('Profile updated successfully!');
    }

    setIsEditing(!isEditing);
  };

  // Handle changes with live error feedback
  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (/[A-Z]/.test(value)) {
        setEmailError('Capital letters are not allowed! Email must be in lowercase.');
      } else if (!validateEmail(value)) {
        setEmailError('Invalid email address! Check domain and extension (e.g., user@gmail.com).');
      } else {
        setEmailError('');
      }

      setUserProfile({ ...userProfile, email: value });
    } else {
      setUserProfile({ ...userProfile, [name]: value });
    }
  };

  const handleAddTeachSkill = () => {
    if (!newTeachSkill.name) return;
    setUserProfile({
      ...userProfile,
      skillsToTeach: [...userProfile.skillsToTeach, { ...newTeachSkill, id: Date.now() }]
    });
    setNewTeachSkill({ name: '', level: 'Beginner', category: '', tags: '' });
    triggerSuccessAlert('Skill added successfully!');
  };

  const handleRemoveTeachSkill = (id) => {
    setUserProfile({
      ...userProfile,
      skillsToTeach: userProfile.skillsToTeach.filter(skill => skill.id !== id)
    });
    triggerSuccessAlert('Skill removed successfully!');
  };

  const handleAddLearnSkill = () => {
    if (!newLearnSkill.name) return;
    setUserProfile({
      ...userProfile,
      skillsToLearn: [...userProfile.skillsToLearn, { ...newLearnSkill, id: Date.now() }]
    });
    setNewLearnSkill({ name: '', level: 'Beginner', category: '', tags: '' });
    triggerSuccessAlert('Skill added successfully!');
  };

  const handleRemoveLearnSkill = (id) => {
    setUserProfile({
      ...userProfile,
      skillsToLearn: userProfile.skillsToLearn.filter(skill => skill.id !== id)
    });
    triggerSuccessAlert('Skill removed successfully!');
  };

  return (
    <div style={{ maxWidth: '750px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Alert Banner */}
      {successMessage && (
        <div style={{ padding: '10px 15px', marginBottom: '15px', backgroundColor: '#d1fae5', color: '#065f46', border: '1px solid #a7f3d0', borderRadius: '6px', textAlign: 'center', fontWeight: 'bold' }}>
          {successMessage}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h2>User Profile</h2>
        <button 
          onClick={toggleEditMode}
          style={{ padding: '8px 16px', backgroundColor: isEditing ? '#16a34a' : '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {isEditing ? 'Save / View Mode' : 'Edit Profile'}
        </button>
      </div>

      {/* User Info Section */}
      <div style={{ border: '1px solid #e5e7eb', padding: '16px', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9fafb' }}>
        {isEditing ? (
          <div>
            <div style={{ marginBottom: '10px' }}>
              <label><strong>Name: </strong></label>
              <input type="text" name="name" value={userProfile.name} onChange={handleProfileChange} style={{ width: '100%', padding: '6px', marginTop: '4px' }} />
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <label><strong>Email: </strong></label>
              <input 
                type="email" 
                name="email" 
                value={userProfile.email} 
                onChange={handleProfileChange} 
                style={{ width: '100%', padding: '6px', marginTop: '4px', borderColor: emailError ? '#ef4444' : '#ccc' }} 
              />
              {emailError && (
                <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                  {emailError}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label><strong>Bio: </strong></label>
              <textarea name="bio" value={userProfile.bio} onChange={handleProfileChange} style={{ width: '100%', padding: '6px', marginTop: '4px' }} />
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{userProfile.name}</h3>
            <p style={{ margin: '3px 0' }}><strong>Email:</strong> {userProfile.email}</p>
            <p style={{ margin: '3px 0', color: '#4b5563' }}><strong>Bio:</strong> {userProfile.bio}</p>
          </div>
        )}
      </div>

      {/* Skills Offered (To Teach) */}
      <div style={{ border: '1px solid #e5e7eb', padding: '16px', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9fafb' }}>
        <h3 style={{ textAlign: 'center', marginTop: '0' }}>Skills Offered (To Teach)</h3>
        {userProfile.skillsToTeach.map((skill) => (
          <div key={skill.id} style={{ marginBottom: '10px', textAlign: 'center' }}>
            <strong>{skill.name}</strong> - Level: {skill.level} | Category: {skill.category}
            <div style={{ fontSize: '13px', color: '#6b7280' }}>Tags: {skill.tags}</div>
            
            {isEditing && (
              <button 
                onClick={() => handleRemoveTeachSkill(skill.id)}
                style={{ marginTop: '5px', padding: '2px 8px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        {isEditing && (
          <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px dashed #ccc' }}>
            <h4>Add New Skill to Teach</h4>
            <input placeholder="Skill Name" value={newTeachSkill.name} onChange={(e) => setNewTeachSkill({ ...newTeachSkill, name: e.target.value })} style={{ marginRight: '5px', padding: '4px' }} />
            <select value={newTeachSkill.level} onChange={(e) => setNewTeachSkill({ ...newTeachSkill, level: e.target.value })} style={{ marginRight: '5px', padding: '4px' }}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <input placeholder="Category" value={newTeachSkill.category} onChange={(e) => setNewTeachSkill({ ...newTeachSkill, category: e.target.value })} style={{ marginRight: '5px', padding: '4px' }} />
            <input placeholder="Tags (comma separated)" value={newTeachSkill.tags} onChange={(e) => setNewTeachSkill({ ...newTeachSkill, tags: e.target.value })} style={{ marginRight: '5px', padding: '4px' }} />
            <button onClick={handleAddTeachSkill} style={{ padding: '4px 10px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add</button>
          </div>
        )}
      </div>

      {/* Skills Needed (To Learn) */}
      <div style={{ border: '1px solid #e5e7eb', padding: '16px', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
        <h3 style={{ textAlign: 'center', marginTop: '0' }}>Skills Needed (To Learn)</h3>
        {userProfile.skillsToLearn.map((skill) => (
          <div key={skill.id} style={{ marginBottom: '10px', textAlign: 'center' }}>
            <strong>{skill.name}</strong> - Level: {skill.level} | Category: {skill.category}
            <div style={{ fontSize: '13px', color: '#6b7280' }}>Tags: {skill.tags}</div>
            
            {isEditing && (
              <button 
                onClick={() => handleRemoveLearnSkill(skill.id)}
                style={{ marginTop: '5px', padding: '2px 8px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        {isEditing && (
          <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px dashed #ccc' }}>
            <h4>Add New Skill to Learn</h4>
            <input placeholder="Skill Name" value={newLearnSkill.name} onChange={(e) => setNewLearnSkill({ ...newLearnSkill, name: e.target.value })} style={{ marginRight: '5px', padding: '4px' }} />
            <input placeholder="Category" value={newLearnSkill.category} onChange={(e) => setNewLearnSkill({ ...newLearnSkill, category: e.target.value })} style={{ marginRight: '5px', padding: '4px' }} />
            <input placeholder="Tags" value={newLearnSkill.tags} onChange={(e) => setNewLearnSkill({ ...newLearnSkill, tags: e.target.value })} style={{ marginRight: '5px', padding: '4px' }} />
            <button onClick={handleAddLearnSkill} style={{ padding: '4px 10px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;