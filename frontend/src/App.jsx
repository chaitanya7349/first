import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/uploadResume";
import UploadJob from "./pages/uploadjob";
import Candidates from "./pages/candidates";
import Ranking from "./pages/Ranking";
import CandidateDetails from "./pages/CandidateDetails";

function App() {
  return (
  <BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
          width: "100%",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload-resume" element={<UploadResume />} />
          <Route path="/upload-job" element={<UploadJob />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route
    path="/candidate/:id"
    element={<CandidateDetails />}
/>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
}

export default App;