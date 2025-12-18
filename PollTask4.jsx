import React, { useState } from "react";

function Poll() {
  const [votes, setVotes] = useState({
    Mathematics: 0,
    Science: 0,
    ComputerScience: 0,
    English: 0,
    SocialScience: 0,
    Physics: 0,
    Chemistry: 0,
  });

  const handleVote = (subject) => {
    setVotes({ ...votes, [subject]: votes[subject] + 1 });
  };

  const totalVotes = Object.values(votes).reduce(
    (sum, v) => sum + v,
    0
  );

  return (
    <div className="poll-container">
      <h2>📊 Classroom Online Poll</h2>
      <p><b>Question:</b> Which subject do you like the most?</p>

      <button onClick={() => handleVote("Mathematics")}>
        Mathematics
      </button>

      <button onClick={() => handleVote("Science")}>
        Science
      </button>

      <button onClick={() => handleVote("ComputerScience")}>
        Computer Science
      </button>

      <button onClick={() => handleVote("English")}>
        English
      </button>

      <button onClick={() => handleVote("SocialScience")}>
        Social Science
      </button>

      <button onClick={() => handleVote("Physics")}>
        Physics
      </button>

      <button onClick={() => handleVote("Chemistry")}>
        Chemistry
      </button>

      <div className="result">
        <h3>Live Results</h3>
        <p>Mathematics: {votes.Mathematics}</p>
        <p>Science: {votes.Science}</p>
        <p>Computer Science: {votes.ComputerScience}</p>
        <p>English: {votes.English}</p>
        <p>Social Science: {votes.SocialScience}</p>
        <p>Physics: {votes.Physics}</p>
        <p>Chemistry: {votes.Chemistry}</p>
        <p><b>Total Votes:</b> {totalVotes}</p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .poll-container {
          width: 420px;
          margin: 40px auto;
          padding: 20px;
          text-align: center;
          border-radius: 10px;
          background: #f5f7fa;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
          font-family: Arial, Helvetica, sans-serif;
        }

        button {
          width: 100%;
          margin: 6px 0;
          padding: 10px;
          font-size: 16px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #45a049;
        }

        .result {
          margin-top: 20px;
          text-align: left;
          background: #ffffff;
          padding: 10px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}

export default Poll;
