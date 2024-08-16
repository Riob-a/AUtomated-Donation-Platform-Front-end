import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 

const Beneficiaries = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch('https://automated-donation-platform-back-end.onrender.com/beneficiaries')
      .then(response => response.json())
      .then(data => setBeneficiaries(data))
      .catch(error => console.error('Error fetching beneficiaries:', error));
  }, []);

  // Page content
  return (
    <div className="bg-dark p-5">
      <div className="container p-4 bg-dark">
        <div className="card text-bg-dark border-w p-3 shadow p-3 mb-5 rounded">
          <h5 className="text-light"><b>The Beneficiaries</b></h5>
          <h3 className="text-light">of Your Kindness</h3>
        </div>

        {beneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className="card mb-3 bg-secondary border-w p-3 shadow p-3 mb-5 rounded">
            <img
              src={beneficiary.imageUrl}
              className="card-img-top border-w p-3 shadow p-3 mb-5 rounded"
              alt={beneficiary.name}
              style={{ width: "100%", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title text-light">{beneficiary.name}</h5>
              <p className="card-text text-light">{beneficiary.story}</p>
              <p className="card-text text-light">
                <strong>Charity:</strong> {beneficiary.charity ? beneficiary.charity.name : "N/A"}
              </p>
            </div>
          </div>
        ))}

        {/* Back Button */}
        <button className="btn btn-warning rounded-pill" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Beneficiaries;
