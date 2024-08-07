import React from 'react';

function Card({ title, text, buttonText }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default Card;
