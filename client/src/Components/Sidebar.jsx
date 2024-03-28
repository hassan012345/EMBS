import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src="" alt="" />
      <ul>
        <li><Link to='/about'>About EMBS</Link></li>
        <li><Link to='/hierarchy'>Our Hierarchy</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar;