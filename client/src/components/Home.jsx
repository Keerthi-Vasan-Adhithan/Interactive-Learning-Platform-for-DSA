import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { io } from "socket.io-client";
import { FaCode, FaChartLine, FaTrophy, FaLanguage, FaHome } from "react-icons/fa";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    const fetchInitialUserCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stats/users");
        const data = await response.json();
        setUserCount(data.userCount);
        setIsLoadingStats(false);
      } catch (error) {
        console.error("Failed to fetch user count:", error);
        setUserCount(100);
        setIsLoadingStats(false);
      }
    };

    fetchInitialUserCount();

    socket.on("new_user", (data) => {
      setUserCount(data.userCount);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <FaCode />,
      title: "Interactive Problem Solving",
      description: "Tackle real coding challenges with our built-in compiler.",
    },
    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      description: "Monitor your solved problems and accuracy in real-time.",
    },
    {
      icon: <FaTrophy />,
      title: "Achievements",
      description: "Earn badges and level up as you master algorithms.",
    },
    {
      icon: <FaLanguage />,
      title: "Multi-Language Support",
      description: "Code in C++, Java, Python, and JavaScript.",
    },
  ];

  const achievements = [
    {
      title: "First Step",
      description: "Completed your first problem!",
      date: "Apr 25, 2025",
      icon: "🏆",
    },
    {
      title: "Code Explorer",
      description: "Tried coding in 3 different languages.",
      date: "Apr 24, 2025",
      icon: "🌟",
    },
  ];

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="animated-icon big">
          <FaHome />
        </div>
        <h1 className="welcome-title">
        ✨Welcome to ILP✨
        </h1>
        <p className="welcome-message">
          Start your journey to master algorithms and data structures!
        </p>
        {!isLoggedIn && (
          <p className="auth-links">
            Please register and log in to access problems.{" "}
            <a href="/register">Register</a> |{" "}
            <a href="/login">Log in here</a>
          </p>
        )}
        <button
          className="solve-button mt-6 mx-auto block"
          onClick={() => navigate('/learn')}
        >
          Explore Learning Paths
        </button>
      </div>

      {/* Purpose Section */}
      <div className="glass-panel purpose-section">
        <h2 className="text-3xl font-semibold text-center mb-8">
          About ILP: Your Learning Platform
        </h2>
        <p className="text-center">
          ILP (Interactive Learning Platform) is designed to help you master algorithms and data structures through hands-on practice. Whether you're a beginner or an expert, our platform offers a structured path to improve your coding skills with real-time feedback and rewarding milestones.
        </p>
      </div>

      {/* Features Section */}
      <div className="glass-panel p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
        <div className="problem-grid">
          {features.map((feature, index) => (
            <div key={index} className="problem-card">
              <div className="animated-icon big">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section max-w-5xl mx-auto">
        {isLoadingStats ? (
          <div className="stat-card flex justify-center items-center h-32">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <div className="stat-card">
              <div className="stat-number">{userCount}+</div>
              <div className="stat-label">Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Problems Solved</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Over 50%</div>
              <div className="stat-label">Avg. Accuracy</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "65%" }}></div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Achievements Section */}
      <div className="glass-panel p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Recent Achievements</h2>
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement">
            <div className="achievement-badge">{achievement.icon}</div>
            <div className="achievement-info">
              <div className="achievement-title">{achievement.title}</div>
              <div className="achievement-desc">{achievement.description}</div>
            </div>
            <div className="achievement-date">{achievement.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;