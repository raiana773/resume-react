import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Interests from "./components/Interests/Interests";
import Profile from "./components/Profile/Profile";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/work" element={<WorkExperience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
