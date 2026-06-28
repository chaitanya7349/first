import { useState } from "react";
import API from "../services/api";

function UploadJob() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [skills, setSkills] = useState([]);

  const uploadJob = async () => {
    if (!file) {
      alert("Please select a Job Description PDF");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await API.post("/upload-job", formData);

      setMessage("Job uploaded successfully");
      setSkills(response.data.skills);


localStorage.setItem(
  "jobSkills",
  JSON.stringify(response.data.skills)
);
    } catch (error) {
      console.log(error);
      setMessage("Upload failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Upload Job Description</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadJob}>
        Upload Job
      </button>

      <h3>{message}</h3>

      {skills.length > 0 && (
        <>
          <h3>Required Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UploadJob;