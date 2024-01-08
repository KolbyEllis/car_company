// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/Home';
import MyNavbar from './components/Navbar';
import About from './pages/About';
import VehicleModels from './pages/VehicleModels';
import Testimonials from './pages/Testimonials';
import OurTeam from './pages/OurTeam';

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/VehicleModels" element={<VehicleModels />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/OurTeam" element={<OurTeam />} />
      </Routes>
    </>
  );
}

export default App;
