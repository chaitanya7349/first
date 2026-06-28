import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
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
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        AI Recruitment
      </h2>

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
  );
}

export default Sidebar;