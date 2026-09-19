import React, { useState, useEffect } from 'react';

export default function UserListWithStates() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetch karne ka function (Simulated API call)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null); // Purana error clear karein

      // 2 seconds ka delay simulate kar rahe hain (Jaise server se data aane mein lagta hai)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Yahan aap chahein toh error test karne ke liye 'reject' kar sakte hain
          const success = true; 
          if (success) {
            resolve([
              { id: 1, name: 'Sarah Connor', role: 'Frontend Developer' },
              { id: 2, name: 'Alex Mercer', role: 'UI/UX Designer' },
              { id: 3, name: 'Elena Rostova', role: 'Full Stack Engineer' }
            ]);
          } else {
            reject(new Error('Failed to load user data from server.'));
          }
        }, 2000);
      }).then((data) => {
        setUsers(data);
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Data aaye ya error, loading band honi chahiye
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 1. Loading State UI
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', fontFamily: 'sans-serif' }}>
        <div style={{ fontSize: '1.2rem', color: '#4f46e5', fontWeight: 'bold' }}>Loading users, please wait... ⌛</div>
      </div>
    );
  }

  // 2. Error State UI
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', fontFamily: 'sans-serif' }}>
        <div style={{ color: '#ef4444', marginBottom: '1rem', fontWeight: 'bold' }}>⚠️ {error}</div>
        <button 
          onClick={fetchUsers}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Try Again
        </button>
      </div>
    );
  }

  // 3. Success State UI (Data Loaded Successfully)
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h3>Users List</h3>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>Data successfully loaded from server.</p>
      
      {users.map((user) => (
        <div key={user.id} style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '6px', marginBottom: '0.5rem', backgroundColor: '#f8fafc' }}>
          <h4 style={{ margin: '0 0 0.2rem 0' }}>{user.name}</h4>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>{user.role}</p>
        </div>
      ))}
      
      <button 
        onClick={fetchUsers}
        style={{ marginTop: '1rem', padding: '0.4rem 0.8rem', cursor: 'pointer', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Refresh Data
      </button>
    </div>
  );
}