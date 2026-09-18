import React, { useState } from "react";
import TopMentors from "../components/TopMentors";
import "./Reviews.css";

const REVIEWS_DATA = [
  { id: 1, name: "Priya", rating: "⭐⭐⭐⭐⭐", text: "Very good teacher. Explained Python concepts clearly." },
  { id: 2, name: "Aman", rating: "⭐⭐⭐⭐", text: "Great skill exchange experience." },
  { id: 3, name: "Rahul", rating: "⭐⭐⭐⭐⭐", text: "Helpful and friendly person." }
];

function Reviews() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="reviews-page" style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Clean Header Wrapper */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", marginBottom: "25px" }}>
        <h1 style={{ fontSize: "24px", margin: 0, color: "#0f172a", textAlign: "center" }}>
          Reviews & Mentors
        </h1>

        {/* Tab Toggle Switcher */}
        <div 
          role="tablist"
          aria-label="Reviews and Mentors tabs"
          style={{ background: "#e2e8f0", padding: "4px", borderRadius: "10px", display: "inline-flex", gap: "4px" }}
        >
          <button
            role="tab"
            aria-selected={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
            style={{
              padding: "8px 18px",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              background: activeTab === "reviews" ? "#ffffff" : "transparent",
              color: activeTab === "reviews" ? "#2563eb" : "#64748b",
              boxShadow: activeTab === "reviews" ? "0 2px 4px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            Reviews & Calendar
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "mentors"}
            onClick={() => setActiveTab("mentors")}
            style={{
              padding: "8px 18px",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              background: activeTab === "mentors" ? "#ffffff" : "transparent",
              color: activeTab === "mentors" ? "#2563eb" : "#64748b",
              boxShadow: activeTab === "mentors" ? "0 2px 4px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            🌟 Top Mentors
          </button>
        </div>
      </div>

      {/* Dynamic Tab Content */}
      {activeTab === "reviews" ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", alignItems: "start" }}>
          <div>
            <h3 style={{ marginTop: "0", marginBottom: "16px", color: "#0f172a" }}>Previous Reviews</h3>
            {REVIEWS_DATA.map((review) => (
              <div key={review.id} className="review-card">
                <h3 style={{ margin: "0 0 6px 0", fontSize: "16px" }}>{review.name}</h3>
                <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>{review.rating}</p>
                <p style={{ margin: 0, fontSize: "14px", color: "#475569" }}>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <TopMentors />
        </div>
      )}
    </div>
  );
}

export default Reviews;