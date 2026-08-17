import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Rohit',
    email: 'rohit@gmail.com',
    bio: 'Passionate learner and developer.',
    role: 'Student'
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  // Profile Completion Percentage Calculation
  const getCompletionPercentage = () => {
    let completedFields = 0;
    const totalFields = 4;

    if (profileData.name.trim().length > 0) completedFields++;
    if (profileData.email.trim().length > 0 && !/[A-Z]/.test(profileData.email)) completedFields++;
    if (profileData.role.trim().length > 0) completedFields++;
    if (profileData.bio.trim().length >= 10) completedFields++;

    return Math.round((completedFields / totalFields) * 100);
  };

  const completionPercentage = getCompletionPercentage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Strict Validation Logic
  const validateForm = () => {
    let newErrors = {};

    // 1. Name Validation
    if (!profileData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(profileData.name)) {
      newErrors.name = 'Name should contain only letters';
    }

    // 2. Email Validation
    if (!profileData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (/[A-Z]/.test(profileData.email)) {
      newErrors.email = 'Email must be in lowercase (no capital letters)';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(profileData.email)) {
      newErrors.email = 'Enter a valid email address';
    } else if (!/[a-z]/.test(profileData.email.split('@')[0])) {
      newErrors.email = 'Email username must contain letters';
    }

    // 3. Role Validation
    if (!profileData.role.trim()) {
      newErrors.role = 'Role is required';
    } else if (!/^[a-zA-Z\s]+$/.test(profileData.role)) {
      newErrors.role = 'Role should contain only letters';
    }

    // 4. Bio Validation
    if (profileData.bio.trim().length < 10) {
      newErrors.bio = 'Bio must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg('');
    } else {
      setErrors({});
      setIsEditing(false);
      setSuccessMsg('Profile updated successfully!');
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  const handleCancel = () => {
    setErrors({});
    setIsEditing(false);
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-card">
        
        {/* Header Title & Avatar */}
        <div className="profile-header">
          {!isEditing && (
            <div className="avatar-circle">
              {profileData.name ? profileData.name.charAt(0).toUpperCase() : 'P'}
            </div>
          )}
          <h1>{isEditing ? 'Edit Profile' : 'My Profile'}</h1>
        </div>

        {/* Dynamic Completion UI - Sirf Edit mode me live updates dikhayega */}
        {isEditing && (
          <div className="completion-card">
            <div className="completion-header">
              <span>Profile Completion</span>
              <span className="completion-count">{completionPercentage}%</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Conditional UI: Success Message Banner */}
        {successMsg && <div className="success-banner">{successMsg}</div>}

        {!isEditing ? (
          /* VIEW PROFILE MODE */
          <div className="profile-details-view">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <div className="detail-value">{profileData.name}</div>
            </div>

            <div className="detail-item">
              <span className="detail-label">Email</span>
              <div className="detail-value">{profileData.email}</div>
            </div>

            <div className="detail-item">
              <span className="detail-label">Role</span>
              <div className="detail-value">{profileData.role}</div>
            </div>

            <div className="detail-item">
              <span className="detail-label">Bio</span>
              <div className="detail-value bio-text">{profileData.bio}</div>
            </div>

            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        ) : (
          /* EDIT PROFILE MODE */
          <form onSubmit={handleSubmit} className="profile-form-edit">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={profileData.role}
                onChange={handleChange}
                placeholder="e.g., Student, Developer"
              />
              {errors.role && <span className="error-text">{errors.role}</span>}
            </div>

            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows="4"
              />
              {errors.bio && <span className="error-text">{errors.bio}</span>}
            </div>

            <div className="form-button-group">
              <button type="submit" className="save-btn">Save Profile</button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;