function HistoryCard({ exchange }) {
    return (
      <div className="history-item">
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
    );
  }
  
  export default HistoryCard;