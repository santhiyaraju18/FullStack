export default function StudentRegistration() {

function handleSubmit(e) {
  e.preventDefault();
  alert("Registered Successfully!");
};

  return <>
    <div>
      {/* Internal CSS */}
      <style>{`
        .form-container {
          width: 320px;
          padding: 20px;
          margin: 40px auto;
          border: 1px solid #aaa;
          border-radius: 8px;
          font-family: Arial;
        }
        .form-container h2 {
          text-align: center;
          margin-bottom: 15px;
        }
        .form-container input {
          width: 100%;
          padding: 8px;
          margin: 8px 0;
          border: 1px solid #999;
          border-radius: 5px;
        }
        .btn-submit {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border: none;
          background: blue;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>

      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Student Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          style={{ fontSize: "14px" }}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{ fontSize: "14px" }}
          required
        />

        <input
          type="text"
          name="dept"
          placeholder="Department"
          style={{ fontSize: "14px" }}
          required
        />

        <button type="submit" className="btn-submit">
          Submit
        </button>

      </form>
    </div>
  </>
}