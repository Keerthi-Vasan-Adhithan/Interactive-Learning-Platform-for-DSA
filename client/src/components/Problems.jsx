import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaCode } from "react-icons/fa"; // For animated icon

const Problems = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const problems = [
    {
      id: 1,
      title: "Reverse a String",
      description: "Write a function to reverse a string. For example, 'hello' should become 'olleh'.",
      testCases: [
        { input: "hello", expectedOutput: "olleh" },
        { input: "world", expectedOutput: "dlrow" },
      ],
    },
    {
      id: 2,
      title: "Find the Maximum Element in an Array",
      description: "Write a function to find the maximum element in an array of integers.",
      testCases: [
        { input: "[1, 5, 3, 8, 2]", expectedOutput: "8" },
        { input: "[10, -2, 0, 4]", expectedOutput: "10" },
      ],
    },
    {
      id: 3,
      title: "Check if a Number is Prime",
      description: "Write a function to check if a given number is prime. Return true if prime, false otherwise.",
      testCases: [
        { input: "7", expectedOutput: "true" },
        { input: "4", expectedOutput: "false" },
      ],
    },
    {
      id: 4,
      title: "Fibonacci Sequence",
      description: "Write a function to return the nth Fibonacci number (0-based index). For example, fib(5) should return 5.",
      testCases: [
        { input: "5", expectedOutput: "5" },
        { input: "7", expectedOutput: "13" },
      ],
    },
    {
      id: 5,
      title: "Two Sum",
      description: "Given an array of integers and a target sum, return indices of two numbers that add up to the target. Assume exactly one solution exists.",
      testCases: [
        { input: "[2, 7, 11, 15], target=9", expectedOutput: "[0, 1]" },
        { input: "[3, 2, 4], target=6", expectedOutput: "[1, 2]" },
      ],
    },
  ];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { state: { message: "Please register and log in to access problems." } });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  // Dummy stats (replace with real data if tracked)
  const stats = {
    solved: 2,
    total: 5,
    accuracy: "80%",
  };

  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold text-white text-center mt-10">Algorithm Problems</h1>
      <p className="text-lg text-white text-center mt-4">Solve challenges to level up your skills!</p>

      {/* Stats Section */}
      <div className="stats-section glass-panel">
        <h3 className="stats-title">Your Progress</h3>
        <p>Solved: {stats.solved}/{stats.total}</p>
        <p>Accuracy: {stats.accuracy}</p>
      </div>

      {/* Achievements */}
      <div className="achievements glass-panel">
        <h3 className="achievements-title">Achievements</h3>
        <p>Beginner Solver</p>
        <p>5 Problems Solved</p>
      </div>

      <div className="problem-section">
        <h2 className="text-2xl mb-4">Available Problems:</h2>
        <div className="grid grid-cols-1 gap-4">
          {problems.map((problem) => (
            <div key={problem.id} className="glass-panel p-4 rounded shadow">
              <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
              <p className="mt-2 text-white">{problem.description}</p>
              <div className="mt-2">
                <h4 className="text-md font-semibold text-white">Test Cases:</h4>
                {problem.testCases.map((testCase, index) => (
                  <p key={index} className="text-white">
                    Input: {testCase.input}, Expected Output: {testCase.expectedOutput}
                  </p>
                ))}
              </div>
              <button
                onClick={() => navigate(`/solve/${problem.id}`)}
                className="solve-button mt-4"
              >
                <span className="animated-icon"><FaCode /></span> Solve
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;