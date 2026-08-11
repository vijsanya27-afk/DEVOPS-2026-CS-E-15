import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews-page">
      <h1>Reviews</h1>

      <div className="review-card">
        <h3>Priya</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p>Very good teacher. Explained Python concepts clearly.</p>
      </div>

      <div className="review-card">
        <h3>Aman</h3>
        <p>⭐⭐⭐⭐</p>
        <p>Great skill exchange experience.</p>
      </div>

      <div className="review-card">
        <h3>Rahul</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p>Helpful and friendly person.</p>
      </div>
    </div>
  );
}

export default Reviews;