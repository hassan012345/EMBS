import React from 'react'
import ContentContainer from './ContentContainer'
import './OurHierarchy.css'
import VP from '../Assets/Images/VicePresidentTech.JPG'

const OurHierarchy = () => {
  return (
    <ContentContainer>
      <div className="hierarchy-container">
        <div className="hierarchy-item">
          <img src={VP} alt="Profile" className="profile-image" />
          <div className="hierarchy-details">
            <h3>Designation</h3>
            <h2>Name</h2>
            <p>Description</p>
          </div>
        </div>
        {/* Add more hierarchy items here */}
      </div>
    </ContentContainer>
  )
}

export default OurHierarchy