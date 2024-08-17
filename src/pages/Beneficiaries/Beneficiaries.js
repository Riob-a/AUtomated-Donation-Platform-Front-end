import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 

const Beneficiaries = () => {
  const navigate = useNavigate();
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const beneficiariesPerPage = 5; // Adjusted to display 5 beneficiaries per page

  useEffect(() => {
    fetch('https://automated-donation-platform-back-end.onrender.com/beneficiaries')
      .then(response => response.json())
      .then(data => setBeneficiaries(data))
      .catch(error => console.error('Error fetching beneficiaries:', error));
  }, []);

  const indexOfLastBeneficiary = currentPage * beneficiariesPerPage;
  const indexOfFirstBeneficiary = indexOfLastBeneficiary - beneficiariesPerPage;
  const currentBeneficiaries = beneficiaries.slice(indexOfFirstBeneficiary, indexOfLastBeneficiary);

  const totalPages = Math.ceil(beneficiaries.length / beneficiariesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-dark p-4">
      <div className="container p-4 mt-5 bg-dark">
        <div className="card text-bg-dark border-w p-3 shadow p-3 mb-5 rounded-pill">
          <h5 className="text-light"><b>The Beneficiaries</b></h5>
          <h3 className="text-light">of Your Kindness</h3>
        </div>

        {currentBeneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className="card mb-3 bg-secondary border-w p-3 shadow p-3 mb-5 rounded-5">
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

        {/* Pagination Controls */}
        <div className="pagination-controls mt-4">
          <button
            className="btn btn-warning rounded-pill"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-light">{currentPage} of {totalPages}</span>
          <button
            className="btn btn-warning rounded-pill"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Back Button */}
        <button className="btn btn-warning float-end rounded-pill mb-5" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Beneficiaries;
