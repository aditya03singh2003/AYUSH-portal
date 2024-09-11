import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterStartup from './pages/RegisterStartup';
import Dashboard from './pages/Dashboard';
import Success from './pages/Success';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm'; 
import RegisterAdmin from './components/RegisterAdmin';

import './index.css';
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegistrationForm />} /> 
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/register-startup" element={<RegisterStartup />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/success" element={<Success />} />
      </Routes>
     
    </Router>
  );
}

export default App;
