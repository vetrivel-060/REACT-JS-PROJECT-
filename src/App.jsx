import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Success from "./Components/Success";
import AdminDashboard from "./Components/AdminDashboard";

function App() {
  return (
    <Router>
      <div>

        <nav className="navbar">
          <h2>Conference Platform</h2>

          <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/admin">Admin</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;