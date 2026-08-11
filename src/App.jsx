import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />

      <main className="home">
        <h1>Welcome to Skill Exchange Platform</h1>
        <p>Learn skills, share knowledge, and connect with others.</p>
      </main>
    </>
  );
}

export default App;