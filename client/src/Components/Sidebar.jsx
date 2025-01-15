import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Sidebar.css';
import {
  Box
} from '@mui/material';

const Sidebar = () => {

  const mainNavigation = [
    {
      name: "Home",
      logo : "fas fa-home",
      link: "/"
    },
    {
      name: "About EMBS",
      logo : "fas fa-info-circle",
      link: "/about-embs"
    },
    {
      name: "Our Hierarchy",
      logo : "fas fa-sitemap",
      link: "/our-hierarchy"
    },
    {
      name: "Events",
      logo : "fas fa-calendar-alt",
      link: "/our-events"
    },
    {
      name: "Contact Us",
      logo : "fas fa-envelope",
      link: "/contact-embs"
    }
  ]

  return (
    <div className='sidebar'>
      <img src="" alt="" />
      <ul>
        {mainNavigation.map((item, index) => {
          return (
            <li key={index} className=''>
              <Link to={item.link}>
                <i className={item.logo}></i>
                {item.name}
              </Link>
            </li>
          )
        })}
        {/* <li><Link to='/about-embs'>About EMBS</Link></li>
        <li><Link to='/our-hierarchy'>Our Hierarchy</Link></li>
        <li><Link to='/our-events'>Events</Link></li>
        <li><Link to='/contact-embs'>Contact Us</Link></li> */}
      </ul>
      <Box element='main' sx={{p:3}}> 
        <Outlet/>
      </Box>
    </div>
  )
}

export default Sidebar;