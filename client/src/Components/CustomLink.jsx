import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
    return (
        <Link 
            to={to} 
            style={{ textDecoration: 'none', color: 'inherit' }} 
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;