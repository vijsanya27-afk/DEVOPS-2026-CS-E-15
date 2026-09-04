import ExchangeLayout from "../components/ExchangeLayout";
import "./ExchangeStatus.css";

function ExchangeStatus() {
  const requests = [
    {
      id: 1,
      skill: "Python",
      person: "Priya",
      status: "Pending",
    },
    {
      id: 2,
      skill: "React.js",
      person: "Aman",
      status: "Accepted",
    },
    {
      id: 3,
      skill: "JavaScript",
      person: "Rahul",
      status: "Rejected",
    },
  ];

  const getStatusMessage = (status) => {
    if (status === "Pending") {
      return "Waiting for response";
    }

    if (status === "Accepted") {
      return "Request accepted";
    }

    if (status === "Rejected") {
      return "Request rejected";
    }

    return "Status unavailable";
  };

  return (
    <ExchangeLayout>
      <div className="exchange-status">
        <h1>Request Status</h1>

        <p>
          Check the current status of your skill exchange requests.
        </p>

        <div className="status-container">
          {requests.map((request) => (
            <div
              className={`status-card status-card-${request.status.toLowerCase()}`}
              key={request.id}
            >
              <h2>{request.skill}</h2>

              <p>
                <strong>Person:</strong> {request.person}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`status ${request.status.toLowerCase()}`}
                  aria-label={`Request status: ${request.status}`}
                >
                  {request.status}
                </span>
              </p>

              <p className="status-message">
                {getStatusMessage(request.status)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ExchangeLayout>
  );
}

export default ExchangeStatus;