import React from 'react';
import { useNavigate } from 'react-router-dom';

const defaultUsers = [
  {
    id: 1,
    name: "Ananya Roy",
    rating: "4.9 ⭐",
    bio: "Passionate about minimal UI/UX designs.",
    offers: "Figma / UI Design",
    wants: "React.js"
  },
  {
    id: 2,
    name: "Vikram Singh",
    rating: "4.7 ⭐",
    bio: "Helping beginners master deployment pipelines.",
    offers: "DevOps & Docker",
    wants: "Node.js"
  }
];

const RecommendedUsers = ({ users = defaultUsers }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid #f1f5f9',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      marginTop: '24px',
      textAlign: 'left'
    }}>
      {/* Header with See All Route */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          Recommended Users
        </h2>
        <button 
          onClick={() => navigate('/search')}
          style={{
            background: 'none',
            border: 'none',
            color: '#4f46e5',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          See All
        </button>
      </div>

      {/* Recommended Cards List */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {users.map((user) => (
          <div key={user.id} style={{
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #f1f5f9',
            backgroundColor: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justify: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>
                  {user.name}
                </h4>
                <span style={{
                  fontSize: '11px',
                  backgroundColor: '#fef3c7',
                  color: '#b45309',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontWeight: '600'
                }}>
                  {user.rating}
                </span>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '6px 0 12px 0' }}>
                {user.bio}
              </p>
              <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
                <p style={{ margin: 0, color: '#475569' }}>
                  <strong>Offers:</strong> {user.offers}
                </p>
                <p style={{ margin: 0, color: '#475569' }}>
                  <strong>Wants:</strong> {user.wants}
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate(`/profile`)}
              style={{
                marginTop: '12px',
                padding: '8px 12px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#334155',
                cursor: 'pointer'
              }}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedUsers;