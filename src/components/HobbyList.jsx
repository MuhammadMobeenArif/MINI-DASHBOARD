import { useState } from "react";

function HobbyList({ hobbies: initialHobbies, darkMode }) {
  const [hobbies, setHobbies] = useState(initialHobbies);
  const [newHobby, setNewHobby] = useState("");

  const cardStyle = {
    padding: "20px",
    borderRadius: "12px",
    width: "280px",
    backgroundColor: darkMode ? "#1e1e1e" : "#fff",
    boxShadow: darkMode
      ? "0 4px 10px rgba(0,0,0,0.5)"
      : "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  };

  const buttonStyle = {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    margin: "4px 4px 0 0",
    fontWeight: "bold",
  };

  const handleAddHobby = () => {
    if (newHobby.trim() !== "") {
      setHobbies([...hobbies, newHobby.trim()]);
      setNewHobby("");
    }
  };

  const handleRemoveHobby = (indexToRemove) => {
    setHobbies(hobbies.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={cardStyle}>
      <h3>Hobbies</h3>

      <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
        {hobbies.map((hobby, index) => (
          <li key={index} style={{ marginBottom: "6px" }}>
            {hobby}{" "}
            <button
              onClick={() => handleRemoveHobby(index)}
              style={{
                ...buttonStyle,
                backgroundColor: "#e74c3c",
                color: "#fff",
                fontSize: "12px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
          placeholder="Add new hobby"
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginRight: "6px",
            width: "140px",
          }}
        />
        <button
          onClick={handleAddHobby}
          style={{ ...buttonStyle, backgroundColor: "#4a90e2", color: "#fff" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default HobbyList;
