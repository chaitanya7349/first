import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      const response = await API.post("/login", {
        username,
        password,
      });

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      navigate("/dashboard");
    } catch (error) {
      setMessage("Invalid Username or Password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 5px 20px rgba(46, 41, 41, 0.15)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Recruiter   Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>

        <p
          style={{
            color: "red",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default Login;