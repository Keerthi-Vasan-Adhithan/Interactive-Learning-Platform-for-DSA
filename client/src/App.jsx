import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Problems from "./components/Problems";
import Solve from "./components/Solve";
import { FaHome, FaSignInAlt, FaSignOutAlt, FaCode } from "react-icons/fa";
import Learning from "./components/Learning";
import LearnTopic from "./components/LearnTopic"; // Import LearnTopic

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              <span className="animated-icon">
                <FaHome />
              </span>
              Home
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <NavLink to="/problems" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="animated-icon">
                    <FaCode />
                  </span>
                  Problems
                </NavLink>
              </li>
              <li>
                <a href="#" onClick={logout}>
                  <span className="animated-icon">
                    <FaSignOutAlt />
                  </span>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="animated-icon">
                    <FaSignInAlt />
                  </span>
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="animated-icon">
                    <FaSignInAlt />
                  </span>
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className="home-container">
        {location.state?.message && (
          <div className={`message ${location.state.messageType || "message-info"}`}>
            {location.state.message}
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/solve/:problemId" element={<Solve />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/learn/:topic" element={<LearnTopic />} /> {/* Fixed: Point to LearnTopic */}
        </Routes>
      </div>
    </>
  );
}

export default App;