import React, { useState, useEffect } from 'react';
// import './Beneficiaries.css';

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/beneficiaries')
      .then(response => response.json())
      .then(data => setBeneficiaries(data))
      .catch(error => console.error('Error fetching beneficiaries:', error));
  }, []);

  

  return (
    <div className="bg-dark">
      <h1 className='text-light'>Beneficiaries</h1>
      <p>Beneficiaries of your Kindness</p>
      <div className="beneficiaries-grid">
        {beneficiaries.map(beneficiary => (
          <div key={beneficiary.id} className="beneficiary-card">
            <div className="beneficiary-image-placeholder"></div>
            <h2>{beneficiary.name}</h2>
            <p>{beneficiary.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beneficiaries;