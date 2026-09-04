import React, { useState } from 'react';

// Mock reviews data
const initialReviews = [
  { id: 1, name: 'Sarah Jenkins', rating: 5, date: '2026-08-25', comment: 'Great session! Explained React hooks and state clearly.' },
  { id: 2, name: 'Alex Chen', rating: 4, date: '2026-08-22', comment: 'Very helpful advice on component architecture.' },
  { id: 3, name: 'Maria Garcia', rating: 5, date: '2026-08-18', comment: 'Excellent mentor, super quick at resolving UI bugs.' }
];

const ReviewsAndCalendar = () => {
  // Day 18 States: Reviews List & Date UI
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [selectedDate, setSelectedDate] = useState('2026-08-27');

  // Calculate Average Rating dynamically
  const totalRating = reviewsList.reduce((acc, curr) => acc + curr.rating, 0);
  const avgRating = (totalRating / reviewsList.length).toFixed(1);

  // Format date helper
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '20px' }}>
      
      {/* Day 18 Section 1: Reviews List & Average Rating */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#0f172a' }}>💬 Reviews & Ratings</h3>
        
        {/* Average Rating Banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #f1f5f9', marginBottom: '16px' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a' }}>{avgRating}</div>
          <div>
            <div style={{ color: '#f59e0b', fontSize: '14px' }}>
              {'★'.repeat(Math.round(avgRating))}{'☆'.repeat(5 - Math.round(avgRating))}
            </div>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Based on {reviewsList.length} reviews</span>
          </div>
        </div>

        {/* Reviews List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {reviewsList.map((rev) => (
            <div key={rev.id} style={{ padding: '10px 12px', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>{rev.name}</span>
                <span style={{ fontSize: '11px', color: '#f59e0b' }}>{'★'.repeat(rev.rating)}</span>
              </div>
              <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: '#475569' }}>{rev.comment}</p>
              <span style={{ fontSize: '10px', color: '#94a3b8' }}>{formatDate(rev.date)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Day 18 Section 2: Session Calendar / Date UI */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#0f172a' }}>📅 Schedule Session</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#64748b' }}>Select a date for your next mentoring session.</p>

        {/* Date Selection Control */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>
            Choose Date:
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '13px',
              outline: 'none',
              color: '#0f172a',
              backgroundColor: '#f8fafc'
            }}
          />

          {/* Selected Date UI Box */}
          <div style={{ marginTop: '10px', padding: '14px', backgroundColor: '#eff6ff', borderRadius: '10px', border: '1px solid #dbeafe' }}>
            <span style={{ fontSize: '11px', color: '#1e40af', fontWeight: '600', display: 'block', marginBottom: '2px' }}>
              CURRENTLY SELECTED
            </span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#1e3a8a' }}>
              📆 {formatDate(selectedDate)}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewsAndCalendar;