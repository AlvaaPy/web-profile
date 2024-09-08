import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Profile from "./pages/Profile";
import Pengumuman from "./pages/Pengumuman";
import ProfileNew from "./pages/ProfileNew";
import Tendik from "./pages/Tendik";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Profile" element={<Profile />} /> */}
          <Route path="/Pengumuman" element={<Pengumuman />} />
          <Route path="/Profile" element={<ProfileNew />} />
          <Route path="/Tendik" element={<Tendik />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
