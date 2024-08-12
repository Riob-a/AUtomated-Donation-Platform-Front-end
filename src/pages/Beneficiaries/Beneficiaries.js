import React, { useState, useEffect } from 'react';

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch('https://automated-donation-platform-back-end.onrender.com/beneficiaries')
      .then(response => response.json())
      .then(data => setBeneficiaries(data))
      .catch(error => console.error('Error fetching beneficiaries:', error));
  }, []);

  return (
    <div className="bg-dark">

      <div className='card m-2 p-2 bg-dark border-warning p-3 shadow p-3 mb-5  rounded'>
      <h5 className='card-title text-light'>The Beneficiaries of your kindness</h5>
      </div>

      <div className='container p-4'>
        {beneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className='card mb-3 bg-secondary'>
            <img src={beneficiary.imageUrl} className='card-img-top' alt={beneficiary.name} />
            <div className='card-body'>
              <h5 className='card-title'>{beneficiary.name}</h5>
              <p className='card-text'>{beneficiary.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beneficiaries;
