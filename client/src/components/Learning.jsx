import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaList, FaSitemap, FaCodeBranch, FaNetworkWired } from "react-icons/fa"; // Topic icons

const Learning = () => {
  const navigate = useNavigate();

  const topics = [
    {
      id: 1,
      name: "Arrays",
      description: "Master the foundation of data structures with arrays.",
      path: [
        { level: "Beginner", difficulty: "difficulty-easy", problems: 5 },
        { level: "Intermediate", difficulty: "difficulty-medium", problems: 8 },
        { level: "Advanced", difficulty: "difficulty-hard", problems: 6 },
      ],
      icon: <FaList />,
    },
    {
      id: 2,
      name: "Strings",
      description: "Explore string manipulation and pattern matching.",
      path: [
        { level: "Beginner", difficulty: "difficulty-easy", problems: 4 },
        { level: "Intermediate", difficulty: "difficulty-medium", problems: 7 },
        { level: "Advanced", difficulty: "difficulty-hard", problems: 5 },
      ],
      icon: <FaCodeBranch />,
    },
    {
      id: 3,
      name: "Linked Lists",
      description: "Learn dynamic data structures with linked lists.",
      path: [
        { level: "Beginner", difficulty: "difficulty-easy", problems: 5 },
        { level: "Intermediate", difficulty: "difficulty-medium", problems: 6 },
        { level: "Advanced", difficulty: "difficulty-hard", problems: 4 },
      ],
      icon: <FaSitemap />,
    },
    {
      id: 4,
      name: "Trees",
      description: "Dive into hierarchical data with trees.",
      path: [
        { level: "Beginner", difficulty: "difficulty-easy", problems: 4 },
        { level: "Intermediate", difficulty: "difficulty-medium", problems: 6 },
        { level: "Advanced", difficulty: "difficulty-hard", problems: 5 },
      ],
      icon: <FaSitemap />,
    },
    {
      id: 5,
      name: "Graphs",
      description: "Understand graph theory and algorithms.",
      path: [
        { level: "Beginner", difficulty: "difficulty-easy", problems: 3 },
        { level: "Intermediate", difficulty: "difficulty-medium", problems: 5 },
        { level: "Advanced", difficulty: "difficulty-hard", problems: 7 },
      ],
      icon: <FaNetworkWired />,
    },
  ];

  const handleStartLearning = (topic) => {
    navigate(`/learn/${topic.name.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <div className="home-container">
      <div className="glass-panel p-8 max-w-full mx-auto"> {/* Adjusted max-w-full for wider layout */}
        <h1 className="welcome-title text-center mb-10">Learning Paths</h1>
        <div className="problem-grid">
          {topics.map((topic) => (
            <div key={topic.id} className="problem-card">
              <div className="animated-icon big">{topic.icon}</div>
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Learning Path</h4>
                {topic.path.map((level, index) => (
                  <div key={index} className="mb-2">
                    <span className={level.difficulty}>
                      {level.level} ({level.problems} problems)
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="start-learning-button mt-4 w-full pointer-events-auto z-10"
                onClick={() => handleStartLearning(topic)}
              >
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;