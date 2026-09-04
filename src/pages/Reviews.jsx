import React, { useState } from "react";
import ReviewsAndCalendar from "../components/ReviewsAndCalendar";
import TopMentors from "../components/TopMentors";
import "./Reviews.css";

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
        <div style={{ background: "#e2e8f0", padding: "4px", borderRadius: "10px", display: "inline-flex", gap: "4px" }}>
          <button
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "start" }}>
          <div>
            <ReviewsAndCalendar />
          </div>

          <div>
            <h3 style={{ marginTop: "0", marginBottom: "10px" }}>Previous Reviews</h3>
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