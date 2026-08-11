import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ExchangeHome from "./exchange/pages/ExchangeHome";
import ExchangeRequest from "./exchange/pages/ExchangeRequest";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exchange" element={<ExchangeHome />} />
        <Route path="/exchange/request" element={<ExchangeRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;