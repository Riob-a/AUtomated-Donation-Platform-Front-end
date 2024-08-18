import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const beneficiariesPerPage = 5; // Adjusted to display 5 beneficiaries per page
  const navigate = useNavigate();

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
      <div>
        <div className="row p-1 mt-5 rounded">
          <div className="col">
            <div className="header-component">
              <h1>Beneficiaries</h1>
              <h6>of Your Kindness</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-4 m-2">
        <h5 className="text-light bg-dark"><b>The Beneficiaries</b></h5>
        <h3 className="text-light bg-dark">of Your Generosity</h3>

        {currentBeneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className="card bg-secondary mb-3 p-4 shadow p-3 mb-5 rounded-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={beneficiary.image_url || "placeholder-image-url"}
                  className="bd-placeholder-img img-fluid rounded-start bg-dark"
                  alt={beneficiary.name}
                  width="80%"
                  height="80%"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-light fs-1">{beneficiary.name}</h5>
                  <p className="card-text text-light ">{beneficiary.story}</p>
                  <p className="card-text text-light ">
                    <strong>Charity:</strong> {beneficiary.charity ? beneficiary.charity.name : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination controls */}
        <div className="pagination-controls mt-4">
          <button
            className="btn btn-warning rounded-pill"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-light">
            {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-warning rounded-pill"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

          {/* Back Button */}
          <button className="btn btn-warning float-end rounded-pill" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Beneficiaries;
