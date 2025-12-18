import { useState } from "react";

export default function MembershipRegistrationForm() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    membershipType: "",
    address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Membership registered successfully!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#A569BD", // Purple background
        padding: "20px"
      }}
    >
      <div
        style={{
          maxWidth: 420,
          margin: "0 auto",
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>Membership Registration</h2>

        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={handleChange}
            required
          /><br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          /><br /><br />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          /><br /><br />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          /><br /><br />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <br /><br />

          <select
            name="membershipType"
            value={form.membershipType}
            onChange={handleChange}
            required
          >
            <option value="">Membership Type</option>
            <option>Basic</option>
            <option>Premium</option>
            <option>Gold</option>
            <option>VIP</option>
          </select>
          <br /><br />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
          ></textarea>
          <br /><br />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
