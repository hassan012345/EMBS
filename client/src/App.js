import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import AboutEMBS from './Components/AboutEMBS';
import OurHierarchy from './Components/OurHierarchy';
import Events from './Components/OurEvents';
import ContactEMBS from './Components/ContactEMBS';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import HomePage from './Pages/Homepage';
// import Home from './Pages/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar /> {/* Add Sidebar component here */}          
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Sign-up" element={<SignUp/>} />
          <Route path="/Sign-in" element={<SignIn/>} />

          <Route path="/about-embs" element={<AboutEMBS />} />
          <Route path="/our-hierarchy" element={<OurHierarchy />} />
          <Route path="/our-events" element={<Events />} />
          <Route path="/contact-embs" element={<ContactEMBS />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
