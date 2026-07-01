import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Upload Resume", path: "/upload-resume" },
    { name: "Upload Job", path: "/upload-job" },
    { name: "Candidates", path: "/candidates" },
    { name: "Ranking", path: "/ranking" },
  ];

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        AI Recruitment
      </h2>

      <div style={{ flex: 1 }}>
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: "block",
              padding: "15px",
              marginBottom: "10px",
              textDecoration: "none",
              color: "white",
              borderRadius: "8px",
              background:
                location.pathname === item.path
                  ? "#2563eb"
                  : "transparent",
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button
        onClick={logout}
        style={{
          width: "100%",
          padding: "12px",
          background: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "40px",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;