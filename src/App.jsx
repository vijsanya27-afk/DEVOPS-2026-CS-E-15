import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardLayout from "./components/DashboardLayout"; // <-- Isko import karein
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Search from "./pages/Search";
import Reviews from "./pages/Reviews";
import Requests from "./exchange/pages/Requests";
import ExchangeHome from "./exchange/pages/ExchangeHome";
import ExchangeRequest from "./exchange/pages/ExchangeRequest";
import ExchangeHistory from "./exchange/pages/ExchangeHistory";
import ExchangeStatus from "./exchange/pages/ExchangeStatus";
import Chat from "./exchange/pages/Chat";
import SessionScheduling from "./pages/SessionScheduling";
import UpcomingSessions from "./pages/UpcomingSessions";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Top Navbar sirf global/public links ke liye */}
      <Navbar />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/exchange" element={<ExchangeHome />} />
        <Route path="/exchange/request" element={<ExchangeRequest />} />
        <Route path="/exchange/history" element={<ExchangeHistory />} />
        <Route path="/exchange/status" element={<ExchangeStatus />} />
        <Route path="/exchange/chat" element={<Chat />} />

        {/* Dashboard & Inner Pages (In sabhi par sidebar persistent rahega) */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/session-scheduling" element={<SessionScheduling />} />
          <Route path="/upcoming-sessions" element={<UpcomingSessions />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;