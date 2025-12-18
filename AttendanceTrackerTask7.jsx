import React, { useState } from "react";

export default function AttendanceTracker() {
  const initialStudents = [
    { id: 1, name: "Santhiya", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 2, name: "Priya", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 3, name: "Banu", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 4, name: "Divya", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 5, name: "Sathiya", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 6, name: "Meena", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 7, name: "Emma", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 8, name: "Anitha", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 9, name: "Oviya", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 10, name: "Lakshmi", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 11, name: "Nila", status: "Absent", checkIn: "-", checkOut: "-" },
    { id: 12, name: "Keerthana", status: "Absent", checkIn: "-", checkOut: "-" },
  ];

  const [students, setStudents] = useState(initialStudents);

  const markAttendance = (id, status) => {
    const time = new Date().toLocaleTimeString();

    const updatedStudents = students.map((student) =>
      student.id === id
        ? {
            ...student,
            status,
            checkIn: status === "Present" ? time : student.checkIn,
            checkOut: status === "Absent" ? time : student.checkOut,
          }
        : student
    );

    setStudents(updatedStudents);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>📋 Attendance Tracker</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Student Name</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Check-In</th>
              <th style={styles.th}>Check-Out</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={styles.td}>{student.name}</td>

                <td
                  style={{
                    ...styles.td,
                    color: student.status === "Present" ? "green" : "red",
                  }}
                >
                  {student.status}
                </td>

                <td style={styles.td}>{student.checkIn}</td>
                <td style={styles.td}>{student.checkOut}</td>

                <td style={styles.td}>
                  <button
                    style={styles.presentBtn}
                    onClick={() => markAttendance(student.id, "Present")}
                  >
                    Present
                  </button>

                  <button
                    style={styles.absentBtn}
                    onClick={() => markAttendance(student.id, "Absent")}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #74ebd5, #acb6e5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    width: "750px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  presentBtn: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "6px 10px",
    marginRight: "8px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  absentBtn: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};


