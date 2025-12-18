import React, { useState } from "react";

export default function OnlineQuiz() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const correctAnswers = {
    q1: "a",
    q2: "c",
    q3: "c",
    q4: "b",
    q5: "a",
    q6: "b",
    q7: "b",
    q8: "c",
    q9: "b",
    q10: "a",
  };

  const handleChange = (q, value) => {
    setAnswers({ ...answers, [q]: value });
  };

  const calculateMark = () => {
    let total = 0;

    for (let i = 1; i <= 10; i++) {
      if (!answers[`q${i}`]) {
        alert("Please answer all questions");
        return;
      }
      if (answers[`q${i}`] === correctAnswers[`q${i}`]) {
        total++;
      }
    }
    setScore(total);
  };

  return (
    <>
      {/* CSS COMBINED HERE */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background-image: url("/"D:\ 23BCS099\React js\Myapp\public\background\Premium Vector _ Questing background.jpg"");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .quiz-container {
          width: 60%;
          margin: 40px auto;
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        h1 {
          text-align: center;
          color: #0d47a1;
        }

        .question {
          background: #f5f7fa;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-left: 15px;
          margin-top: 6px;
        }

        button {
          display: block;
          margin: 25px auto;
          padding: 12px 30px;
          font-size: 16px;
          background: #0d47a1;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #1565c0;
        }

        #result {
          text-align: center;
          font-size: 22px;
          color: green;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .quiz-container {
            width: 90%;
          }
        }
      `}</style>

      {/* QUIZ UI */}
      <div className="quiz-container">
        <h1>Online Quiz</h1>

        {[
          ["CPU stands for?", ["Central Processing Unit", "Computer Processing Unit", "Control Program Unit"], "q1"],
          ["Language used for web development?", ["C", "Java", "JavaScript"], "q2"],
          ["NOT an operating system?", ["Windows", "Linux", "Oracle"], "q3"],
          ["HTML full form?", ["High Text Machine Language", "Hyper Text Markup Language", "Hyperlinks Text Mark Language"], "q4"],
          ["FIFO data structure?", ["Queue", "Stack", "Tree"], "q5"],
          ["RAM stands for?", ["Read Access Memory", "Random Access Memory", "Run Access Memory"], "q6"],
          ["Single-line comment in JS?", ["#", "//", "/* */"], "q7"],
          ["Protocol for web pages?", ["FTP", "SMTP", "HTTP"], "q8"],
          ["Java developed by?", ["Microsoft", "Sun Microsystems", "Google"], "q9"],
          ["Database?", ["MySQL", "HTML", "CSS"], "q10"],
        ].map((q, index) => (
          <div className="question" key={index}>
            <p>{index + 1}. {q[0]}</p>
            {q[1].map((opt, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={q[2]}
                  onChange={() =>
                    handleChange(q[2], ["a", "b", "c"][i])
                  }
                />
                {opt}
              </label>
            ))}
          </div>
        ))}

        <button onClick={calculateMark}>Submit Quiz</button>

        {score !== null && (
          <h2 id="result">Your Score is {score} / 10</h2>
        )}
      </div>
    </>
  );
}
