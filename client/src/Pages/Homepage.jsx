import React from 'react';
import Sidebar from '../Components/Sidebar';
import SocietyHierarchy from '../Components/OurHierarchy';
import Header from '../Components/Header';

const societyData = {
    id: 1,
    name: 'Student Council',
    children: [
      {
        id: 2,
        name: 'President',
        children: []
      },
      {
        id: 3,
        name: 'Vice President',
        children: [
          {
            id: 4,
            name: 'Secretary',
            children: []
          },
          {
            id: 5,
            name: 'Treasurer',
            children: []
          }
        ]
      },
      {
        id: 6,
        name: 'Public Relations',
        children: []
      }
    ]
  };

const Homepage = () => {
    <div>
        <Header />
        <Sidebar />
        
        {/* <SocietyHierarchy data={societyData} /> */}

    </div>
}

export default Homepage;