// components/ProfileCard.jsx
import { useState } from "react";

function ProfileCard({ name, role, email, image, darkMode }) {
  const [followers, setFollowers] = useState(0);

  const cardStyle = {
    padding: "20px",
    borderRadius: "12px",
    width: "280px",
    textAlign: "center",
    backgroundColor: darkMode ? "#1e1e1e" : "#fff",
    boxShadow: darkMode
      ? "0 4px 10px rgba(0,0,0,0.5)"
      : "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  };

  const buttonStyle = {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#4a90e2",
    color: "#fff",
    fontWeight: "bold",
    marginTop: "10px",
  };

  return (
    <div style={cardStyle}>
      <img
        src={image}
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>

      <h3>Followers: {followers}</h3>
      <button onClick={() => setFollowers(followers + 1)} style={buttonStyle}>
        Follow +
      </button>
    </div>
  );
}

export default ProfileCard;
