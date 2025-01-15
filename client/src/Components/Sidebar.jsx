import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import emb from '../Assets/Images/EMBOfficial.png';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="logo">
                <img src={emb} alt="EMB Logo" />
            </div>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Sign-up" activeClassName="active-link">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to="/Sign-in" activeClassName="active-link">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/about-embs" activeClassName="active-link">About EMBS</NavLink>
                </li>
                <li>
                    <NavLink to="/our-hierarchy" activeClassName="active-link">Our Hierarchy</NavLink>
                </li>
                <li>
                    <NavLink to="/our-events" activeClassName="active-link">Our Events</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-embs" activeClassName="active-link">Contact EMBS</NavLink>
                </li>
                <li>
                    <NavLink to="/sponsor-us" activeClassName="active-link">Sponsor Us</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;