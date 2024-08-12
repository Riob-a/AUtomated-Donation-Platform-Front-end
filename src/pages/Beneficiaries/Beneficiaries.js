import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 

//Fetch beneficiaries
const Beneficiaries = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch('https://automated-donation-platform-back-end.onrender.com/beneficiaries')
      .then(response => response.json())
      .then(data => setBeneficiaries(data))
      .catch(error => console.error('Error fetching beneficiaries:', error));
  }, []);

//Page content
  return (
    <div className="bg-dark">

      <div className='card m-2 p-2 bg-dark  p-3 shadow p-3 mb-5  rounded'>
      <h3 className='card-title text-light'>The Beneficiaries of your kindness</h3>
      </div>

      <div className='container p-4 m-4'>
        {beneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className='card mb-3 bg-secondary'>
            <img src={beneficiary.imageUrl} className='card-img-top' alt={beneficiary.name} />
            <div className='card-body'>
              <h5 className='card-title'>{beneficiary.name}</h5>
              <p className='card-text'>{beneficiary.story}</p>
            </div>
          </div>
        ))}
        {/* Back Button */}
        <button className="btn btn-light  float-end" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
      
    </div>
  );
}

export default Beneficiaries;
