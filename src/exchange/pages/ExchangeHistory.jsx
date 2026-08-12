import ExchangeLayout from "../components/ExchangeLayout";
import "./ExchangeHistory.css";

function ExchangeHistory() {
  const exchanges = [
    {
      id: 1,
      skillOffered: "JavaScript",
      skillLearned: "Python",
      status: "Completed",
    },
    {
      id: 2,
      skillOffered: "React.js",
      skillLearned: "UI/UX Design",
      status: "Pending",
    },
    {
      id: 3,
      skillOffered: "HTML & CSS",
      skillLearned: "Node.js",
      status: "Completed",
    },
  ];

  return (
    <ExchangeLayout>
      <div className="exchange-history">
        <h1>Exchange History</h1>

        <p>
          View your previous and ongoing skill exchange requests.
        </p>

        <div className="exchange-history-card">
          <h2>My Exchange History</h2>

          {exchanges.map((exchange) => (
            <div className="history-item" key={exchange.id}>
              <p>
                <strong>Skill Offered:</strong> {exchange.skillOffered}
              </p>

              <p>
                <strong>Skill Learned:</strong> {exchange.skillLearned}
              </p>

              <p>
                <strong>Status:</strong> {exchange.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ExchangeLayout>
  );
}

export default ExchangeHistory;