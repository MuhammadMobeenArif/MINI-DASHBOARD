// App.jsx
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import HobbyList from "./components/HobbyList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const profile = {
    name: "MUHAMMAD MOBEEN ARIF",
    role: "Frontend Developer",
    email: "muhammadmobeenarif60@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINcjfEMeNl_qDWKJnFdXu02bcbYsJrpgnag&s",
  };

  const hobbies = ["Coding", "Cricket", "Gaming", "Traveling"];

  // App container style
  const appStyle = {
    backgroundColor: darkMode ? "#121212" : "#f6f6f6",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    transition: "0.3s",
    fontFamily: "'Poppins', sans-serif",
  };

  // Theme toggle button
  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: darkMode ? "#f6f6f6" : "#4a90e2",
    color: darkMode ? "#000" : "#fff",
    fontWeight: "bold",
    transition: "0.3s",
  };

  return (
    <div style={appStyle}>
      {/* Theme Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} style={buttonStyle}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Profile Card */}
      <ProfileCard
        name={profile.name}
        role={profile.role}
        email={profile.email}
        image={profile.image}
        darkMode={darkMode} // Optional, if you want card to react to theme
      />

      {/* Hobby List */}
      <HobbyList hobbies={hobbies} darkMode={darkMode} />
    </div>
  );
}

export default App;
