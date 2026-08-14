import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  // State to manage profile details and edit toggle
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Rohit',
    email: 'rohit@gmail.com',
    bio: 'Passionate learner and developer.',
    role: 'Student'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Form save hone ke baad normal view me switch
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-card">
        <h1>My Profile</h1>

        {!isEditing ? (
          /* Original UI extended with better layout */
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
          /* React Form and State logic (14 Aug Requirement) */
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
            </div>

            <div className="form-button-group">
              <button type="submit" className="save-btn">Save Profile</button>
              <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;