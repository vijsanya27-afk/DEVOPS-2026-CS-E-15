import { useState } from "react";
import "./SessionScheduling.css";

function SessionScheduling() {
  const [formData, setFormData] = useState({
    partner: "",
    skill: "",
    date: "",
    time: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.partner ||
      !formData.skill ||
      !formData.date ||
      !formData.time
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    setMessage("Session scheduled successfully!");

    setFormData({
      partner: "",
      skill: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <div className="session-page">
      <div className="session-card">
        <h1>Schedule a Session</h1>
        <p className="session-subtitle">
          Plan a skill exchange session with your partner.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="partner">Partner</label>
            <input
              id="partner"
              name="partner"
              type="text"
              placeholder="Enter partner name"
              value={formData.partner}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="skill">Skill</label>
            <input
              id="skill"
              name="skill"
              type="text"
              placeholder="Enter skill"
              value={formData.skill}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Add session notes..."
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="schedule-button">
            Schedule Session
          </button>
        </form>

        {message && <p className="session-message">{message}</p>}
      </div>
    </div>
  );
}

export default SessionScheduling;