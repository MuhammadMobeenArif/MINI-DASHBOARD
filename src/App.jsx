
import { useState } from "react";
import ProfileCard from "./components/FullDashboard";
import HobbyList from "./components/About";
import HobbyList from "./components/ComponenttsPages";
function App() {
  const [dark, setDark] = useState(false);

  
  return (
    <div>
      <Routes>
        <Route index element={<FullDashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Component" element={<ComponentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
