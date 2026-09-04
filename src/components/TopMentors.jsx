import React, { useState } from "react";

const mentorsData = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    role: "Full-Stack Specialist",
    rating: 4.9,
    reviewsCount: 42,
    skills: ["React", "Node.js", "MongoDB"],
    available: true,
    badge: "Top Rated",
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "Data Science Lead",
    rating: 4.8,
    reviewsCount: 38,
    skills: ["Python", "Machine Learning", "SQL"],
    available: false,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Neha Verma",
    role: "UI/UX Designer",
    rating: 4.7,
    reviewsCount: 29,
    skills: ["Figma", "User Research", "Tailwind"],
    available: true,
    badge: "Rising Star",
  },
];

function TopMentors() {
  const [mentors] = useState(mentorsData);

  return (
    <section 
      style={{ 
        margin: "10px auto", 
        maxWidth: "1100px", 
        padding: "0 10px" 
      }} 
      aria-labelledby="top-mentors-heading"
    >
      <h2 
        id="top-mentors-heading" 
        style={{ 
          fontSize: "20px", 
          marginBottom: "20px", 
          color: "#1e293b",
          textAlign: "center"
        }}
      >
        🌟 Top Mentors
      </h2>

      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "20px" 
        }}
      >
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "18px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              {/* Header: Name and Badge properly separated with Flexbox */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "16px", margin: 0, color: "#0f172a", wordBreak: "break-word" }}>
                  {mentor.name}
                </h3>

                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    background: "#f1f5f9",
                    color: "#475569",
                    padding: "3px 8px",
                    borderRadius: "12px",
                    whiteSpace: "nowrap"
                  }}
                >
                  {mentor.badge}
                </span>
              </div>

              {/* Role */}
              <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 10px 0" }}>
                {mentor.role}
              </p>

              {/* Rating */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
                <span style={{ fontSize: "14px", color: "#eab308" }}>⭐ {mentor.rating}</span>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>({mentor.reviewsCount} reviews)</span>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                {mentor.skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "11px",
                      background: "#eff6ff",
                      color: "#2563eb",
                      padding: "3px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              disabled={!mentor.available}
              aria-label={`Book session with ${mentor.name}`}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                fontSize: "13px",
                fontWeight: "600",
                cursor: mentor.available ? "pointer" : "not-allowed",
                background: mentor.available ? "#2563eb" : "#cbd5e1",
                color: mentor.available ? "#ffffff" : "#64748b",
              }}
            >
              {mentor.available ? "Book Session" : "Currently Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopMentors;