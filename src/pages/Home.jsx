import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Skill Exchange Platform</h1>

        <p>
          Learn skills, share knowledge, and connect with others.
        </p>

        <button>Explore Skills</button>
      </section>

      {/* Feature Sections */}
      <section className="features">

        <div className="feature">
          <h2>Learn New Skills</h2>
          <p>
            Discover new skills and learn from people who have experience
            in different areas.
          </p>
        </div>

        <div className="feature">
          <h2>Share Your Skills</h2>
          <p>
            Share your knowledge and skills with other members of the
            Skill Exchange Platform.
          </p>
        </div>

        <div className="feature">
          <h2>Connect & Exchange</h2>
          <p>
            Connect with other learners and exchange skills through
            meaningful interactions.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Home;