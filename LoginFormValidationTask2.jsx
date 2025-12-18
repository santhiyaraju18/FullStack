import React, { useState } from "react";

// ✅ export function
export function LoginFormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name) formErrors.name = "Name is required";

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2>Validation Form</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
          <p style={styles.error}>{errors.name}</p>

          <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
          <p style={styles.error}>{errors.email}</p>

          <input type="text" placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} />
          <p style={styles.error}>{errors.phone}</p>

          <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
          <p style={styles.error}>{errors.password}</p>

          <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} />
          <p style={styles.error}>{errors.confirmPass}</p>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

// ✅ background styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0d80adff", // purple background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "300px",
    borderRadius: "8px",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  button: {
    width: "100%",
    padding: "8px",
    backgroundColor: "#6a0dad",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
