import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import UploadResume from "./pages/uploadResume";
import UploadJob from "./pages/uploadjob";
import Candidates from "./pages/candidates";
import Ranking from "./pages/Ranking";
import CandidateDetails from "./pages/CandidateDetails";

function Layout() {
  const location = useLocation();

  const showSidebar =
    location.pathname !== "/" &&
    location.pathname !== "/login";

  return (
    <div style={{ display: "flex" }}>
      {showSidebar && <Sidebar />}

      <div
        style={{
          marginLeft: showSidebar ? "250px" : "0",
          width: "100%",
          padding: showSidebar ? "20px" : "0",
        }}
      >
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/upload-resume"
            element={
              <ProtectedRoute>
                <UploadResume />
              </ProtectedRoute>
            }
          />

          <Route
            path="/upload-job"
            element={
              <ProtectedRoute>
                <UploadJob />
              </ProtectedRoute>
            }
          />

          <Route
            path="/candidates"
            element={
              <ProtectedRoute>
                <Candidates />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ranking"
            element={
              <ProtectedRoute>
                <Ranking />
              </ProtectedRoute>
            }
          />

          <Route
            path="/candidate/:id"
            element={
              <ProtectedRoute>
                <CandidateDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;