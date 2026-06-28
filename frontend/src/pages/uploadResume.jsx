import { useState } from "react";
import API from "../services/api";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [candidate, setCandidate] = useState(null);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await API.post("/upload-resume", formData);

console.log(response.data);

setMessage(response.data.message);
setCandidate(response.data.candidate);
    } catch (error) {
      console.log(error);
      setMessage("Upload Failed");
    }
  };

  return (
  <div
    style={{
      background: "#f4f6f9",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial",
    }}
  >
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        background: "#fff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Upload Resume
      </h1>

      <div style={{ textAlign: "center" }}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />
        <br />

        <button
          onClick={uploadResume}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Upload Resume
        </button>

        <h3
          style={{
            color: message.includes("success") ? "green" : "red",
            marginTop: "20px",
          }}
        >
          {message}
        </h3>
      </div>

      {candidate && (
        <div
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ddd",
            paddingTop: "30px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Candidate Details
          </h2>

          <p>
            <strong>Name:</strong> {candidate.name}
          </p>

          <p>
            <strong>Email:</strong> {candidate.email}
          </p>

          <p>
            <strong>Phone:</strong> {candidate.phone}
          </p>

          <h3>Skills</h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {candidate.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "20px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 style={{ marginTop: "30px" }}>
            Education
          </h3>

          <ul>
            {candidate.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
}

export default UploadResume;