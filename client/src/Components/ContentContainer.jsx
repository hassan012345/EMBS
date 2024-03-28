import React from 'react'
import './ContentContainer.css'
const ContentContainer = (props) => {
    return (
        
        
        <div className='content-container'>
            <div className='top-menu'>
                <button>Become a sponsor</button>
                <button>Contribute</button>
            </div>
            {props.children}
        </div>
        
    );
}
export default ContentContainer;