import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import AboutEMBS from './Components/AboutEMBS';
import OurHierarchy from './Components/OurHierarchy';
import Events from './Components/OurEvents';
import ContactEMBS from './Components/ContactEMBS';
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/about" element={ <AboutEMBS/> } />
          <Route path="/hierarchy" element={ <OurHierarchy/> } />
          <Route path="/events" element={ <Events/> } />
          <Route path="/contact" element={ <ContactEMBS/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
