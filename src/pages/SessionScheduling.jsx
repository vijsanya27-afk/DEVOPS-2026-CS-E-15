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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  
    if (message) {
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

if (!formData.partner.trim()) {
  newErrors.partner = "Please enter partner name.";
}

if (!formData.skill.trim()) {
  newErrors.skill = "Please enter the skill.";
}

if (!formData.date) {
  newErrors.date = "Please select a date.";
}

if (!formData.time) {
  newErrors.time = "Please select a time.";
}

setErrors(newErrors);

if (Object.keys(newErrors).length > 0) {
  setMessage("");
  return;
}

setIsSubmitting(true);
setMessage("");

setTimeout(() => {
  setIsSubmitting(false);
  setMessage("Session scheduled successfully!");

  setFormData({
    partner: "",
    skill: "",
    date: "",
    time: "",
    notes: "",
  });

  setErrors({});
}, 700);
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
            {errors.partner && (
            <p className="form-error">{errors.partner}</p>
            )}
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
          {errors.skill && (
          <p className="form-error">{errors.skill}</p>
          )}
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
              {errors.date && (
              <p className="form-error">{errors.date}</p>
              )}
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
              {errors.time && (
              <p className="form-error">{errors.time}</p>
              )}
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

          <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Scheduling..." : "Schedule Session"}
          </button>
        </form>

        {message && <p className="session-message">{message}</p>}
      </div>
    </div>
  );
}

export default SessionScheduling;