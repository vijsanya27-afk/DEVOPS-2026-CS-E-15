import "./UpcomingSessions.css";

function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      partner: "Rahul",
      skill: "React.js",
      date: "28 Aug 2026",
      time: "5:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      partner: "Priya",
      skill: "Python",
      date: "30 Aug 2026",
      time: "4:00 PM",
      status: "Confirmed",
    },
    {
      id: 3,
      partner: "Aman",
      skill: "JavaScript",
      date: "02 Sep 2026",
      time: "6:30 PM",
      status: "Pending",
    },
  ];
  const handleViewDetails = (session) => {
    alert(
      `Session Details\n\nPartner: ${session.partner}\nSkill: ${session.skill}\nDate: ${session.date}\nTime: ${session.time}\nStatus: ${session.status}`
    );
  };
  
  return (
    <div className="upcoming-page">
      <div className="upcoming-container">
        <h1>Upcoming Sessions</h1>
        <p className="upcoming-subtitle">
          View and manage your upcoming skill exchange sessions.
        </p>

        <div className="sessions-list">
          {sessions.map((session) => (
            <div className="session-item" key={session.id}>
              <div className="session-info">
                <h2>{session.skill} Exchange</h2>

                <p>
                  <strong>Partner:</strong> {session.partner}
                </p>

                <p>
                  <strong>Date:</strong> {session.date}
                </p>

                <p>
                  <strong>Time:</strong> {session.time}
                </p>
              </div>

              <div className="session-actions">
                <span
                  className={`session-status ${
                    session.status === "Confirmed"
                      ? "confirmed"
                      : "pending"
                  }`}
                >
                  {session.status}
                </span>
                <button
  type="button"
  onClick={() => handleViewDetails(session)}
>
  View Details
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingSessions;