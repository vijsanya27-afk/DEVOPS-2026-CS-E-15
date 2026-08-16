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

    // 1. Name Validation (Only letters and spaces)
    if (!profileData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(profileData.name)) {
      newErrors.name = 'Name should contain only letters';
    }

    // 2. Email Validation (Valid format & username must contain letters)
   // 2. Email Validation (Must be lowercase, valid format & contain letters in username)
if (!profileData.email.trim()) {
  newErrors.email = 'Email is required';
} else if (/[A-Z]/.test(profileData.email)) {
  newErrors.email = 'Email must be in lowercase (no capital letters)';
} else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(profileData.email)) {
  newErrors.email = 'Enter a valid email address';
} else if (!/[a-z]/.test(profileData.email.split('@')[0])) {
  newErrors.email = 'Email username must contain letters';
}

    // 3. Role Validation (Only letters and spaces)
    if (!profileData.role.trim()) {
      newErrors.role = 'Role is required';
    } else if (!/^[a-zA-Z\s]+$/.test(profileData.role)) {
      newErrors.role = 'Role should contain only letters';
    }

    // 4. Bio Validation (At least 10 characters)
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
        <h1>My Profile</h1>

        {/* Conditional UI: Success Message Banner */}
        {successMsg && <div className="success-banner">{successMsg}</div>}

        {!isEditing ? (
          <div className="profile-details-view">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{profileData.name}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{profileData.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Role:</span>
              <span className="detail-value">{profileData.role}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Bio:</span>
              <p className="detail-value bio-text">{profileData.bio}</p>
            </div>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form-edit">
            <div className="form-group">
              <label>Name:</label>
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
              <label>Email:</label>
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
              <label>Role:</label>
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
              <label>Bio:</label>
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