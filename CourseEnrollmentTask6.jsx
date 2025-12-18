import React, { useState } from "react";

export default function CourseEnrollmentTask6() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();
    if (studentName && course) {
      setEnrolledCourses([...enrolledCourses, { name: studentName, course }]);
      setStudentName("");
      setCourse("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c7d2fe" // 👈 background color
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#4338ca" }}>
          Course Enrollment
        </h2>

        <form onSubmit={handleEnroll}>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          >
            <option value="">Select Course</option>
            <option value="React JS">React JS</option>
            <option value="Node JS">Node JS</option>
            <option value="Python">Python</option>
            <option value="AI & ML">AI & ML</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "6px"
            }}
          >
            Enroll
          </button>
        </form>

        <h3 style={{ marginTop: "20px" }}>Enrolled Students</h3>
        <ul>
          {enrolledCourses.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> – {item.course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
