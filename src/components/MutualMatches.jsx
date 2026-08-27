import React from 'react';

const defaultMatches = [
  { id: 1, name: "Aarav Sharma", wants: "React", teaches: "Node.js" },
  { id: 2, name: "Rohan Verma", wants: "Node.js", teaches: "React" }
];

const MutualMatchSuggestions = ({ matches = defaultMatches }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid #f1f5f9',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      marginBottom: '32px',
      textAlign: 'left'
    }}>
      <h2 style={{
        fontSize: '16px',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '16px',
        marginTop: 0,
        textAlign: 'left'
      }}>
        Mutual Match Suggestions
      </h2>
      
      {matches.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          width: '100%'
        }}>
          {matches.map((user) => (
            <div key={user.id} style={{
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #f1f5f9',
              backgroundColor: '#f8fafc',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#0f172a'
                }}>
                  {user.name}
                </h4>
                <div style={{ marginTop: '8px', fontSize: '12px', lineHeight: '1.5' }}>
                  <p style={{ margin: 0, color: '#64748b' }}>
                    <span style={{ fontWeight: '500', color: '#334155' }}>Wants to learn:</span> {user.wants}
                  </p>
                  <p style={{ margin: 0, color: '#64748b' }}>
                    <span style={{ fontWeight: '500', color: '#334155' }}>Can teach:</span> {user.teaches}
                  </p>
                </div>
              </div>
              <span style={{
                backgroundColor: '#ecfdf5',
                color: '#059669',
                fontSize: '11px',
                fontWeight: '600',
                padding: '4px 10px',
                borderRadius: '9999px',
                whiteSpace: 'nowrap'
              }}>
                ✓ Mutual Match
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
          No mutual matches found at the moment.
        </p>
      )}
    </div>
  );
};

export default MutualMatchSuggestions;