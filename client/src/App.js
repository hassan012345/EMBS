import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
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
import Collaborate from './Pages/Collaborate';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<HomePageIndex />} />
            <Route path="/about-embs" element={<AboutEMBS />} />
            <Route path="/our-hierarchy" element={<OurHierarchy />} />
            <Route path="/our-events" element={<Events />} />
            <Route path="/our-events/:id" element={<EventDetail />} />
            <Route path="/contact-embs" element={<ContactEMBS />} />
            <Route path="/sponsor-us" element={<SponsorUs />} />
            <Route path="/collab" element={<Collaborate />} />
            <Route path="/sponsor/details" element={<SponsorDetails />} />
            <Route path="/whatwedo" element={<Initiatives />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;