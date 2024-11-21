import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin123" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  const downloadData = async (type) => {
    try {
      const response = await axios.get(
        `https://shivin-tech-backend.vercel.app/api/download/${type}`,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${type}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(`Error downloading ${type} data:`, error);
      alert(`Failed to download ${type} data.`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} style={{ display: "inline-block" }}>
          <h2>Admin Login</h2>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: "10px", width: "200px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "10px", width: "200px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <h2>Welcome, Admin</h2>
          <button
            onClick={() => downloadData("enquiries")}
            style={{ margin: "10px", padding: "10px 20px" }}
          >
            Download Enquiries
          </button>
          <button
            onClick={() => downloadData("contacts")}
            style={{ margin: "10px", padding: "10px 20px" }}
          >
            Download Contacts
          </button>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setUsername("");
              setPassword("");
              navigate("/admin");
            }}
            style={{ margin: "10px", padding: "10px 20px" }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
