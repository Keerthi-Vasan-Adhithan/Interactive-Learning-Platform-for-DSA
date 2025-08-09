import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import problemsData from "../problemsData";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import axios from "axios";

const Solve = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your solution here\nconsole.log('Hello, ILP!');");
  const [output, setOutput] = useState("");
  const [testResults, setTestResults] = useState([]);
  const editorRef = useRef(null);

  const languageIds = {
    javascript: 63, // Node.js 12.14.0
    c: 50,         // GCC 9.2.0
    cpp: 54,       // GCC 9.2.0
    python: 71,    // Python 3.8.1
    java: 62,      // OpenJDK 13.0.1
  };

  const languageModes = {
    javascript: "ace/mode/javascript",
    c: "ace/mode/c_cpp",
    cpp: "ace/mode/c_cpp",
    python: "ace/mode/python",
    java: "ace/mode/java",
  };

  const defaultCodeSnippets = {
    javascript: "// Write your solution here\nconsole.log('Hello, ILP!');",
    c: '#include <stdio.h>\nint main() {\n    printf("Hello, ILP!\\n");\n    return 0;\n}',
    cpp: '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, ILP!" << endl;\n    return 0;\n}',
    python: '# Write your solution here\nprint("Hello, ILP!")',
    java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, ILP!");\n    }\n}',
  };

  useEffect(() => {
    const aceEditor = window.ace.edit(editorRef.current, {
      mode: languageModes[language],
      theme: "ace/theme/monokai",
      fontSize: 14,
      showPrintMargin: false,
    });
    aceEditor.setValue(defaultCodeSnippets[language]);
    aceEditor.on("change", () => {
      setCode(aceEditor.getValue());
    });

    return () => aceEditor.destroy();
  }, [language]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setCode(defaultCodeSnippets[e.target.value]);
    setOutput("");
    setTestResults([]);
  };

  const [userProgress, setUserProgress] = useState(() => {
    const savedProgress = localStorage.getItem("userProgress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem("userProgress", JSON.stringify(userProgress));
  }, [userProgress]);

  const handleMarkAsSolved = () => {
    setUserProgress((prev) => ({
      ...prev,
      [problemId]: true,
    }));
    alert("Problem marked as solved! Check the learning page to see the update.");
  };

  const runCodeWithJudge0 = async (code, languageId, input = "") => {
    try {
      // Base64 encode the source code and input to handle special characters
      const encodedCode = btoa(code);
      const encodedInput = btoa(input);

      const response = await axios.post(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          source_code: encodedCode,
          language_id: languageId,
          stdin: encodedInput,
          base64_encoded: true, // Indicate that inputs are Base64 encoded
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "6ee01c7449mshe8bfb876044bcd9p17d65cjsnf060d6a97566", // Replace with your API key
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        }
      );

      const token = response.data.token;

      // Poll for the result
      let result;
      do {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const statusResponse = await axios.get(
          `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
          {
            headers: {
              "X-RapidAPI-Key": "6ee01c7449mshe8bfb876044bcd9p17d65cjsnf060d6a97566", // Replace with your API key
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            },
          }
        );
        result = statusResponse.data;
      } while (result.status.id <= 2); // Status <= 2 means still processing

      if (result.status.id === 3) {
        // Successful execution, decode Base64 output
        return result.stdout ? atob(result.stdout).trim() : "";
      } else {
        // Error or timeout, decode stderr if present
        return result.stderr ? atob(result.stderr) : result.status.description;
      }
    } catch (error) {
      // Log detailed error for debugging
      console.error("API Error:", error.response ? error.response.data : error.message);
      return `Error: ${error.message}`;
    }
  };

  const handleRunCode = async () => {
    setOutput("");
    setTestResults([]);

    const problem = problemsData.find((p) => p.id === parseInt(problemId));
    if (!problem || !problem.testCases) {
      setOutput("No test cases available for this problem.");
      return;
    }

    const languageId = languageIds[language];
    if (!languageId) {
      setOutput("Unsupported language.");
      return;
    }

    const results = [];
    let allTestsPassed = true;

    for (const testCase of problem.testCases) {
      let input = testCase.input;
      const expectedOutput = testCase.output;

      const actualOutput = await runCodeWithJudge0(code, languageId, input);

      const normalizedActual = actualOutput.replace(/\r\n/g, "\n").trim();
      const normalizedExpected = expectedOutput.replace(/\r\n/g, "\n").trim();

      const passed = normalizedActual === normalizedExpected;
      if (!passed) allTestsPassed = false;

      results.push({
        input,
        expectedOutput: normalizedExpected,
        actualOutput: normalizedActual,
        passed,
      });
    }

    setTestResults(results);
    setOutput(
      allTestsPassed
        ? "All test cases passed!"
        : "Some test cases failed. Check the results below."
    );

    if (allTestsPassed) {
      handleMarkAsSolved();
    }
  };

  const problem = problemsData.find((p) => p.id === parseInt(problemId));

  if (!problem) {
    return (
      <div className="home-container">
        <div className="glass-panel p-8 max-w-6xl mx-auto">
          <h1 className="welcome-title">Problem Not Found</h1>
          <p className="text-gray-300 text-center">
            Sorry, this problem doesn’t exist yet. Go back to the topic page to explore other challenges!
          </p>
          <button
            className="start-learning-button mt-4 pointer-events-auto z-10"
            onClick={() => navigate("/learn")}
          >
            Go Back to Learning Paths
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="glass-panel p-8 max-w-6xl mx-auto">
        <h1 className="welcome-title">{problem.title}</h1>
        <p className="text-lg mb-6 text-gray-300">{problem.description}</p>

        <div className="test-cases mb-6">
          <h2 className="text-xl font-semibold mb-2">Test Cases</h2>
          {problem.testCases && problem.testCases.length > 0 ? (
            problem.testCases.map((testCase, index) => (
              <div key={index} className="test-case mb-4 p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-gray-200">Test Case {index + 1}</h3>
                <p className="text-gray-400">
                  <strong>Input:</strong> {testCase.input}
                </p>
                <p className="text-gray-400">
                  <strong>Output:</strong> {testCase.output}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No test cases available for this problem.</p>
          )}
        </div>

        <div className="problem-content">
          <div className="language-selector mb-4">
            <label htmlFor="language" className="text-lg font-semibold mr-2 text-gray-200">
              Select Language:
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="p-2 rounded-lg bg-gray-700 text-white border-none focus:outline-none"
            >
              <option value="javascript">JavaScript</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </div>

          <div ref={editorRef} style={{ height: "300px", width: "100%", borderRadius: "8px", overflow: "hidden" }}></div>
          <button
            className="start-learning-button mt-4 pointer-events-auto z-10"
            onClick={handleRunCode}
          >
            Run Code
          </button>
          <div className="output mt-4 p-4 bg-gray-800 text-white rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Output:</h3>
            <pre>{output || "No output yet..."}</pre>
          </div>
          {testResults.length > 0 && (
            <div className="test-results mt-4">
              <h3 className="text-lg font-semibold mb-2">Test Case Results:</h3>
              {testResults.map((result, index) => (
                <div key={index} className="test-result mb-4 p-4 bg-gray-800 rounded-lg">
                  <h4 className="text-md font-medium text-gray-200">Test Case {index + 1}</h4>
                  <p className="text-gray-400">
                    <strong>Input:</strong> {result.input}
                  </p>
                  <p className="text-gray-400">
                    <strong>Expected Output:</strong> {result.expectedOutput}
                  </p>
                  <p className="text-gray-400">
                    <strong>Actual Output:</strong> {result.actualOutput}
                  </p>
                  <p className={result.passed ? "text-green-400" : "text-red-400"}>
                    <strong>Status:</strong> {result.passed ? "Passed" : "Failed"}
                  </p>
                </div>
              ))}
            </div>
          )}
          <button
            className="start-learning-button mt-4 pointer-events-auto z-10"
            onClick={handleMarkAsSolved}
          >
            Mark as Solved
          </button>
        </div>

        <button
          className="start-learning-button mt-4 pointer-events-auto z-10"
          onClick={() => navigate(`/learn/${problem.topic}`)}
        >
          Back to {problem.topic.charAt(0).toUpperCase() + problem.topic.slice(1)}
        </button>
      </div>
    </div>
  );
};

export default Solve;