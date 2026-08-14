import { useState } from "react";
import ExchangeLayout from "../components/ExchangeLayout";
import RequestModal from "../components/RequestModal";
import "./ExchangeRequest.css";

function ExchangeRequest() {
  const [showModal, setShowModal] = useState(false);

  const request = {
    name: "Priya",
    skill: "Python",
    status: "Pending",
  };

  return (
    <ExchangeLayout>
      <div className="exchange-request">
        <h1>Request Skill Exchange</h1>

        <p>
          Send a request to exchange skills with another user.
        </p>

        <div className="request-card">
          <h2>Exchange Request</h2>

          <div>
            <label>Your Skill</label>
            <input
              type="text"
              placeholder="Enter the skill you can teach"
            />
          </div>

          <div>
            <label>Skill You Want to Learn</label>
            <input
              type="text"
              placeholder="Enter the skill you want to learn"
            />
          </div>

          <button onClick={() => setShowModal(true)}>
            Send Request
          </button>
        </div>

        {showModal && (
          <RequestModal
            request={request}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </ExchangeLayout>
  );
}

export default ExchangeRequest;