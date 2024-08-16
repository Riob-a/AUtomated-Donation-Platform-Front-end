import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import "./Admin.css";

function AdminBeneficiaries() {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of beneficiaries per page
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch beneficiaries from the backend
    fetch("https://automated-donation-platform-back-end.onrender.com/beneficiaries")
      .then((response) => response.json())
      .then((data) => setBeneficiaries(data))
      .catch((error) => console.error("Error fetching beneficiaries:", error));
  }, []);

  const handleDelete = (id) => {
    // Send DELETE request to the backend
    fetch(`https://automated-donation-platform-back-end.onrender.com/beneficiaries/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted beneficiary from the state
          setBeneficiaries(beneficiaries.filter((beneficiary) => beneficiary.id !== id));
          alert("Beneficiary has been deleted");
        } else {
          console.error("Error deleting beneficiary");
        }
      })
      .catch((error) => console.error("Error deleting beneficiary:", error));
  };

  // Pagination logic
  const indexOfLastBeneficiary = currentPage * itemsPerPage;
  const indexOfFirstBeneficiary = indexOfLastBeneficiary - itemsPerPage;
  const currentBeneficiaries = beneficiaries.slice(indexOfFirstBeneficiary, indexOfLastBeneficiary);

  const totalPages = Math.ceil(beneficiaries.length / itemsPerPage);

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
  
  // Page content
  return (
    <div className="bg-dark">
      <div className="container p-4 bg-dark">
        <div className="card text-bg-dark border-w p-3 shadow p-3 mb-5 rounded">
          <h5 className="text-light"><b>Manage</b></h5>
          <h3 className="text-light">Beneficiaries</h3>
        </div>

        {currentBeneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className="card mb-3 bg-secondary  border-w p-3 shadow p-3 mb-5 rounded">
            <img
              src={beneficiary.imageUrl}
              className="card-img-top  border-w p-3 shadow p-3 mb-5 rounded"
              alt={beneficiary.name}
              style={{ width: "100%", height: "250px" }}
            />
            <div className="card-body ">
              <h5 className="card-title text-light">{beneficiary.name}</h5>
              <p className="card-text text-light">{beneficiary.story}</p>
              <p className="card-text text-light">
                <strong>Charity:</strong> {beneficiary.charity ? beneficiary.charity.name : "N/A"}
              </p>
              <br />
              <button onClick={() => handleDelete(beneficiary.id)} className="btn btn-danger btn-lg">Delete</button>
            </div>
          </div>
        ))}

        {/* Pagination controls */}
        <div className="pagination-controls mt-4">
          <button
            className="btn btn-secondary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-light">
            {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-secondary"
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

export default AdminBeneficiaries;
