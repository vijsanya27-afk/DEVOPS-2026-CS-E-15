import { useState } from "react";

import "./Requests.css";

function Requests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Priya",
      skill: "Python",
      status: "Pending"
    },
    {
      id: 2,
      name: "Aman",
      skill: "React.js",
      status: "Accepted"
    },
    {
      id: 3,
      name: "Rahul",
      skill: "JavaScript",
      status: "Pending"
    }
  ]);

  return (
    <div className="requests-page">
      <h1>Skill Requests</h1>

      {requests.map((request) => (
        <div className="request-card" key={request.id}>
          <h2>{request.name}</h2>

          <p>
            <strong>Skill:</strong> {request.skill}
          </p>

          <p>
            <strong>Status:</strong> {request.status}
          </p>

        <div className="request-actions">

  <button
    onClick={() =>
      alert(
        `Request Details\n\nName: ${request.name}\nSkill: ${request.skill}\nStatus: ${request.status}`
      )
    }
  >
    View Request
  </button>

  {request.status === "Pending" && (
    <>
     <button
  onClick={() => {
    setRequests(
      requests.map((r) =>
        r.id === request.id
          ? { ...r, status: "Accepted" }
          : r
      )
    );
  }}
>
  Accept
</button>

      <button
  onClick={() => {
    setRequests(
      requests.map((r) =>
        r.id === request.id
          ? { ...r, status: "Rejected" }
          : r
      )
    );
  }}
>
  Reject
</button>
    </>
  )}

</div>
        </div>
      ))}
    </div>
  );
}

export default Requests;