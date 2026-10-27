import { useState } from "react";
import { useLocation } from "react-router-dom";
import ExchangeLayout from "../components/ExchangeLayout";
import RequestModal from "../components/RequestModal";
import "./ExchangeRequest.css";

function ExchangeRequest() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

const [yourSkill, setYourSkill] = useState("");
const [learningSkill, setLearningSkill] = useState(
  location.state?.selectedSkill || ""
);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdRequest, setCreatedRequest] = useState(null);

  const request = {
    name: "Priya",
    skill: learningSkill || "Python",
    status: "Pending",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!yourSkill.trim()) {
      newErrors.yourSkill = "Please enter the skill you can teach.";
    }

    if (!learningSkill.trim()) {
      newErrors.learningSkill =
        "Please enter the skill you want to learn.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
    
      try {
        const savedRequests = JSON.parse(
          localStorage.getItem("skillExchangeRequests") || "[]"
        );
        const request = {
          id: `local-${Date.now()}`,
          name: "Priya",
          skill: learningSkill.trim(),
          skillOffered: yourSkill.trim(),
          skillWanted: learningSkill.trim(),
          status: "Pending",
          createdAt: new Date().toISOString()
        };
     localStorage.setItem(
          "skillExchangeRequests",
          JSON.stringify([...savedRequests, request])
        );
        setCreatedRequest(request);
        setShowModal(true);
      } catch {
        setErrors({
          form: "Unable to save the request. Please try again."
        });
      } finally {
        setIsSubmitting(false);
      }
    }
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

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="yourSkill">Your Skill</label>

              <input
              id="yourSkill"
                type="text"
                value={yourSkill}
                onChange={(e) => {
                  setYourSkill(e.target.value);

                  if (errors.yourSkill) {
                    setErrors((prev) => ({
                      ...prev,
                      yourSkill: "",
                    }));
                  }
                }}
                placeholder="Enter the skill you can teach"
              />

              {errors.yourSkill && (
                <p className="form-error">{errors.yourSkill}</p>
              )}
            </div>

            <div>
              <label htmlFor="learningSkill">Skill You Want to Learn</label>

              <input
                id="learningSkill"
                type="text"
                value={learningSkill}
                onChange={(e) => {
                  setLearningSkill(e.target.value);

                  if (errors.learningSkill) {
                    setErrors((prev) => ({
                      ...prev,
                      learningSkill: "",
                    }));
                  }
                }}
                placeholder="Enter the skill you want to learn"
              />

              {errors.learningSkill && (
                <p className="form-error">
                  {errors.learningSkill}
                </p>
              )}
            </div>
          <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Request"}
          </button>
          </form>
        </div>

        {showModal && createdRequest && (
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