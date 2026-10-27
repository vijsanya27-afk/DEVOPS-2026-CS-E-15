import { useState } from "react";

import "./Requests.css";

function Requests() {
  const [selectedRequest, setSelectedRequest] = useState(null);

const updateRequestStatus = (id, status) => {
  const allowedStatuses = ["Accepted", "Rejected", "Cancelled"];

  if (!allowedStatuses.includes(status)) {
    return;
  }

  setRequests((prevRequests) => {
    const updatedRequests = prevRequests.map((request) => {
      if (request.id !== id || request.status !== "Pending") {
        return request;
      }

      return { ...request, status };
    });

    localStorage.setItem(
      "skillExchangeRequests",
      JSON.stringify(updatedRequests)
    );

    return updatedRequests;
  });
};

  const [requests, setRequests] = useState(() => {
    const savedRequests = localStorage.getItem("skillExchangeRequests");
    if (savedRequests) {
      return JSON.parse(savedRequests);
    }

    return [
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
    ];
  });

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
  <button onClick={() => setSelectedRequest(request)}>
    View Request
  </button>

  {request.status === "Pending" && (
    <>
      <button
        onClick={() => updateRequestStatus(request.id, "Accepted")}
      >
        Accept
      </button>

      <button
        onClick={() => updateRequestStatus(request.id, "Rejected")}
      >
        Reject
      </button>

      <button
        onClick={() => updateRequestStatus(request.id, "Cancelled")}
      >
        Cancel
      </button>
    </>
  )}
</div>
        </div>
      ))}
       {selectedRequest && (
  <div className="modal-overlay">
    <div className="request-modal">

      <button
        className="close-modal"
        onClick={() => setSelectedRequest(null)}
      >
        ×
      </button>

      <h2>Request Details</h2>

      <p>
        <strong>Name:</strong> {selectedRequest.name}
      </p>

      <p>
        <strong>Skill:</strong> {selectedRequest.skill}
      </p>

      <p>
        <strong>Status:</strong> {selectedRequest.status}
      </p>

      <button
        className="modal-btn"
        onClick={() => setSelectedRequest(null)}
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
  );
}

export default Requests;