import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // If you have a Footer component


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}


export default App;
