import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import problemsData from "../problemsData";

const LearnTopic = () => {
  const { topic } = useParams();
  const navigate = useNavigate();

  // Topic metadata
  const topicMetadata = {
    arrays: { name: "Arrays", intro: "Arrays are the foundational data structure in programming, allowing you to store and manipulate collections of elements efficiently. Master these problems to build a strong base!" },
    strings: { name: "Strings", intro: "Strings are sequences of characters used for text manipulation. Dive into these challenges to master pattern matching and string algorithms!" },
    "linked-lists": { name: "Linked Lists", intro: "Linked Lists are dynamic data structures where elements are connected via pointers. Tackle these problems to understand node-based operations!" },
    trees: { name: "Trees", intro: "Trees are hierarchical structures used in many algorithms. Solve these problems to master traversals and tree manipulations!" },
    graphs: { name: "Graphs", intro: "Graphs represent networks and relationships. Conquer these challenges to excel in graph theory and algorithms!" },
  };

  // Filter problems by topic
  const topicProblems = problemsData.filter((problem) => problem.topic === topic);

  // Organize problems into levels
  const levels = [
    {
      level: "Beginner",
      difficulty: "difficulty-easy",
      problems: topicProblems.filter((problem) => problem.level === "Beginner"),
    },
    {
      level: "Intermediate",
      difficulty: "difficulty-medium",
      problems: topicProblems.filter((problem) => problem.level === "Intermediate"),
    },
    {
      level: "Advanced",
      difficulty: "difficulty-hard",
      problems: topicProblems.filter((problem) => problem.level === "Advanced"),
    },
  ].filter((level) => level.problems.length > 0);

  // Get user progress from local storage or initialize
  const [userProgress, setUserProgress] = useState(() => {
    const savedProgress = localStorage.getItem("userProgress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  // Save progress to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("userProgress", JSON.stringify(userProgress));
  }, [userProgress]);

  // Check if a problem is solved by the user
  const isProblemSolved = (problemId) => userProgress[problemId] || false;

  // Calculate progress
  const calculateProgress = () => {
    const totalProblems = levels.reduce((sum, level) => sum + level.problems.length, 0);
    const solvedProblems = levels.reduce((sum, level) =>
      sum + level.problems.filter((p) => isProblemSolved(p.id)).length,
      0
    );
    return totalProblems > 0 ? (solvedProblems / totalProblems) * 100 : 0;
  };

  const [progress] = useState(calculateProgress());

  const handleSolveProblem = (problemId) => {
    navigate(`/solve/${problemId}`);
  };

  return (
    <div className="home-container">
      <div className="glass-panel p-8 max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            className="back-button mr-4 pointer-events-auto z-10"
            onClick={() => navigate("/learn")}
            title="Go back to Learning Paths"
          >
            Go back
          </button>
          <h1 className="welcome-title">{topicMetadata[topic]?.name || "Not Found"}</h1>
        </div>

        <p className="text-lg mb-6 text-gray-300">{topicMetadata[topic]?.intro || "Topic not found."}</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            Progress <FaCheckCircle className="ml-2 text-green-400" />
            <span className="ml-2 text-green-400">{progress.toFixed(1)}%</span>
          </h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {levels.length > 0 ? (
          levels.map((level, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                {level.level}{" "}
                <span className={level.difficulty}>({level.problems.length} problems)</span>
              </h2>
              <div className="problem-grid">
                {level.problems.map((problem) => (
                  <div key={problem.id} className="problem-card">
                    <h3>{problem.title}</h3>
                    <div className="tags-container">
                      {problem.tags.map((tag, idx) => (
                        <span key={idx} className={`tag ${tag.toLowerCase().replace(/ /g, "-")}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400">
                      {isProblemSolved(problem.id) ? "Solved" : "Unsolved"}
                    </p>
                    <button
                      className="solve-button mt-4 pointer-events-auto z-10"
                      onClick={() => handleSolveProblem(problem.id)}
                    >
                      Solve Problem
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No content available for this topic.</p>
        )}
      </div>
    </div>
  );
};

export default LearnTopic;