import React from 'react';
import './Production.css';

const Card = ({ icon, heading, number }) => {
  return (
    <div className="card" style={{margin:"5px", width:"400px"}}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-heading">{heading}</h3>
      <p className="card-number">{number}</p>
    </div>
  );
};

export default Card;
