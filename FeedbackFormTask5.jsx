import React, { useState } from "react";

function FeedbackFrom() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, rating, comment });
    setName("");
    setRating("");
    setComment("");
  };

  return (
    <div className="feedback-container">
      <h2>📝 Classroom Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={rating}
          required
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option>Excellent</option>
          <option>Good</option>
          <option>Average</option>
          <option>Poor</option>
        </select>

        <textarea
          placeholder="Enter your feedback"
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      {submittedData && (
        <div className="output">
          <h3>📢 Submitted Feedback</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Rating:</b> {submittedData.rating}</p>
          <p><b>Comment:</b> {submittedData.comment}</p>
        </div>
      )}

      {/* Internal CSS */}
      <style>{`
        .feedback-container {
          width: 400px;
          margin: 40px auto;
          padding: 20px;
          border-radius: 10px;
          background: #f5f7fa;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        form input, form select, form textarea {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        textarea {
          resize: none;
          height: 80px;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #2196F3;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #1976D2;
        }

        .output {
          margin-top: 20px;
          padding: 15px;
          background: #e3f2fd;
          border-radius: 8px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default Feedback;