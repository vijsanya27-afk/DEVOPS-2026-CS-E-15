import ExchangeLayout from "../components/ExchangeLayout";
import HistoryCard from "../components/HistoryCard";
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

          <div className="history-cards">
            {exchanges.map((exchange) => (
              <HistoryCard
                key={exchange.id}
                exchange={exchange}
              />
            ))}
          </div>
        </div>
      </div>
    </ExchangeLayout>
  );
}

export default ExchangeHistory;