import ExchangeLayout from "../components/ExchangeLayout";
import "./ExchangeHome.css";
function ExchangeHome() {
  return (
    <ExchangeLayout>
      <div className="exchange-home">
        <h1>Skill Exchange</h1>

        <p>
          Find people, share your skills and learn new skills together.
        </p>

        <div className="exchange-card">
          <h2>Start a Skill Exchange</h2>

          <p>
            Choose a skill you can teach and a skill you want to learn.
          </p>

          <a href="/exchange/request">
            <button>Request Skill Exchange</button>
          </a>
        </div>
      </div>
    </ExchangeLayout>
  );
}

export default ExchangeHome;