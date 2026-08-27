import React, { useState } from 'react';

const trendingSkillsList = [
  { id: 1, title: 'React.js', category: 'Frontend', count: '140+ Requests', tag: '⭐ Popular' },
  { id: 2, title: 'UI/UX Design', category: 'Design', count: '95+ Requests', tag: '📈 Trending' },
  { id: 3, title: 'Python / Django', category: 'Backend', count: '80+ Requests', tag: '🎯 High Demand' },
  { id: 4, title: 'Docker & DevOps', category: 'Cloud', count: '60+ Requests', tag: '⚡ Fast Growing' }
];

const TrendingAndRating = () => {
  // Rating State (Day 17 UI)
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitRating = (e) => {
    e.preventDefault();
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
      
      {/* Day 16: Trending Skills UI */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#0f172a' }}>🔥 Trending Skills</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {trendingSkillsList.map((skill) => (
            <div key={skill.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', color: '#1e293b' }}>{skill.title}</h4>
                <span style={{ fontSize: '11px', color: '#64748b' }}>{skill.category} • {skill.count}</span>
              </div>
             <span style={{ 
                fontSize: '11px', 
                backgroundColor: '#f1f5f9', 
                color: '#475569', 
                padding: '4px 10px', 
                borderRadius: '12px', 
                fontWeight: '600' 
              }}>
                {skill.tag}
              </span>
            </div>
            
          ))}
        </div>
      </div>

      {/* Day 17: Ratings Input UI */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#0f172a' }}>⭐ Rate Your Experience</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#64748b' }}>Leave feedback for your recent skill swap session.</p>

        {submitted ? (
          <div style={{ padding: '16px', backgroundColor: '#f0fdf4', color: '#15803d', borderRadius: '10px', fontSize: '13px', fontWeight: '600' }}>
            🎉 Thank you for rating! Your review has been submitted.
          </div>
        ) : (
          <form onSubmit={handleSubmitRating}>
            {/* Star Picker */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: star <= (hover || rating) ? '#f59e0b' : '#cbd5e1'
                  }}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Feedback Box */}
            <textarea
              rows="3"
              placeholder="Write a short review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '13px',
                boxSizing: 'border-box',
                outline: 'none',
                resize: 'none'
              }}
            />

            <button
              type="submit"
              disabled={rating === 0}
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '10px',
                backgroundColor: rating > 0 ? '#4f46e5' : '#94a3b8',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: rating > 0 ? 'pointer' : 'not-allowed'
              }}
            >
              Submit Rating
            </button>
          </form>
        )}
      </div>

    </div>
  );
};

export default TrendingAndRating;