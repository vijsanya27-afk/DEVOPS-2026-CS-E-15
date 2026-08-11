import './Dashboard.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Dashboard() {
  return (
     <div className="dashboard">
     <Sidebar />
    <div className="main-content">
      <Header/>
     <main>
          <h1>Dashboard</h1>
          <p>Welcome to SkillExchange</p>
      </main>
    </div>
    </div>
  )
}

export default Dashboard