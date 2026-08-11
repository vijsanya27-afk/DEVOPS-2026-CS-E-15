import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");

  const users = [
    {
      name: "Aman",
      skill: "React.js",
    },
    {
      name: "Priya",
      skill: "Python",
    },
    {
      name: "Rahul",
      skill: "JavaScript",
    },
    {
      name: "Sneha",
      skill: "UI/UX Design",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">

      <h1>Find Skills</h1>

      <p>Search for people with the skills you want to learn.</p>

      <input
        type="text"
        placeholder="Search a skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="search-results">

        {filteredUsers.map((user, index) => (
          <div className="user-card" key={index}>

            <h3>{user.name}</h3>

            <p>
              Skill: <strong>{user.skill}</strong>
            </p>

            <button>View Profile</button>

          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p>No users found.</p>
        )}

      </div>

    </div>
  );
}

export default Search;