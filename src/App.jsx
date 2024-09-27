import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar.jsx";
import Home from "./home/index.jsx";
import AboutUs from "./about/aboutus.jsx";
import AboutArtClub from "./members/members.jsx";
import AttendEvent from "./events/events.jsx";
import Login from "./login/login.jsx";
import Tickets from "./tickets/tickets.jsx";
import Shares from "./shares/shares.jsx";
import Passwordreset from "./login/passwordreset.jsx";
import Footer from "./footer.jsx";
import TestPage from "./tests/backend.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/members" element={<AboutArtClub />} />
          <Route path="/events" element={<AttendEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/shares" element={<Shares />} />
          <Route path="/passwordreset" element={<Passwordreset />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
