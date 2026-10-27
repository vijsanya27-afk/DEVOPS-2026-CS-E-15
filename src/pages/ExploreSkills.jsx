import { useNavigate } from "react-router-dom";
import "./ExploreSkills.css";

function ExploreSkills() {
  const navigate = useNavigate();

  const skills = [
    {
      name: "React.js",
      category: "Web Development",
      level: "Intermediate",
      description: "Learn modern frontend development using React."
    },
    {
      name: "Python",
      category: "Programming",
      level: "Beginner",
      description: "Build programming skills with Python."
    },
    {
      name: "JavaScript",
      category: "Web Development",
      level: "Intermediate",
      description: "Learn the core language of modern web applications."
    },
    {
      name: "UI/UX Design",
      category: "Design",
      level: "Beginner",
      description: "Explore user interface and user experience design."
    },
    {
      name: "Node.js",
      category: "Backend Development",
      level: "Intermediate",
      description: "Learn backend development with Node.js."
    },
    {
      name: "Data Structures",
      category: "Computer Science",
      level: "Advanced",
      description: "Improve problem solving with fundamental data structures."
    }
  ];

  return (
    <main className="explore-skills-page">
      <section className="explore-hero">
        <h1>Explore Skills</h1>
        <p>
          Discover skills offered by our community and find something new to learn.
        </p>
      </section>

      <section className="explore-skills-grid">
        {skills.map((skill) => (
          <div className="explore-skill-card" key={skill.name}>
            <span className="skill-category">{skill.category}</span>

            <h2>{skill.name}</h2>

            <p>{skill.description}</p>

            <span className="skill-level">{skill.level}</span>

          <button
          onClick={() =>
          navigate("/login", {
          state: {
          from: "/exchange/request",
          selectedSkill: skill.name,
      },
    })
  }
>
  Request Exchange
</button>
          </div>
        ))}
      </section>

      <section className="explore-bottom">
        <h2>Want to exchange skills?</h2>
        <p>Create an account and start connecting with other learners.</p>

        <button onClick={() => navigate("/register")}>
          Create Account
        </button>
      </section>
    </main>
  );
}

export default ExploreSkills;