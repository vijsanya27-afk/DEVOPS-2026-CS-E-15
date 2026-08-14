import { useState } from "react";
import "./RequestModal.css";

function RequestModal({ request, onClose }) {
  const [status, setStatus] = useState(request?.status || "Pending");

  if (!request) {
    return null;
  }

  const handleAccept = () => {
    setStatus("Accepted");
  };

  const handleReject = () => {
    setStatus("Rejected");
  };

  return (
    <div className="modal-overlay">
      <div className="request-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Request Details</h2>

        <div className="request-details">
          <p>
            <strong>Name:</strong> {request.name}
          </p>

          <p>
            <strong>Skill:</strong> {request.skill}
          </p>

          <p>
            <strong>Status:</strong>
            <span className={`modal-status ${status.toLowerCase()}`}>
              {status}
            </span>
          </p>
        </div>

        {status === "Pending" && (
          <div className="modal-actions">
            <button className="accept-btn" onClick={handleAccept}>
              Accept
            </button>

            <button className="reject-btn" onClick={handleReject}>
              Reject
            </button>
          </div>
        )}

        {status !== "Pending" && (
          <p className="updated-message">
            Request has been {status.toLowerCase()}.
          </p>
        )}
      </div>
    </div>
  );
}

export default RequestModal;