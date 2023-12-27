import React from 'react';
import './Heading.css';

const Heading = ({ title, text }) => {
    return (
        <div className="headings">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Heading