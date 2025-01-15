import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutEMBS from './Pages/AboutEMBS';
import OurHierarchy from './Pages/OurHierarchy';
import Events from './Pages/OurEvents';
import ContactEMBS from './Pages/ContactEMBS';
import HomePage from './Pages/Homepage';
import SponsorUs from './Pages/SponsorUs';  
import NotFound from './Pages/NotFound';
import Shop from './Pages/Shop';
import EventDetail from './Pages/EventDetail';
import SponsorDetails from './Pages/SponsorDetails';
import Initiatives from './Pages/Initiatives';
import HomePageIndex from './Pages/HomePageIndex';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about-embs" element={<AboutEMBS />} />
          <Route path="/our-hierarchy" element={<OurHierarchy />} />
          <Route path="/our-events" element={<Events />} />
          <Route path="/contact-embs" element={<ContactEMBS />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;