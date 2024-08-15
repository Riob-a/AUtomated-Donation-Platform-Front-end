import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 


const Charities = () => {
  const [charities, setCharities] = useState([]);
  const [donationAmounts, setDonationAmounts] = useState({});
  const [donationError, setDonationError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of charities per page
  const navigate = useNavigate(); // Initialize navigate


//Fetch Charities
  useEffect(() => {
    fetch("https://automated-donation-platform-back-end.onrender.com/charities")
      .then((response) => response.json())
      .then((data) => setCharities(data))
      .catch((error) => console.error("Error fetching charities:", error));
  }, []);

//Posts Donations
  const handleDonate = async (charityId) => {
    const amount = donationAmounts[charityId] || "";

    try {
      const response = await fetch("https://automated-donation-platform-back-end.onrender.com/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          charity_id: charityId,
          amount: amount,
        }),
      });

      if (!response.ok) {
        throw new Error("Donation failed");
      }

      alert("Donation successful!");
      setDonationAmounts((prevState) => ({ ...prevState, [charityId]: "" }));

  // Refresh charity list to update total donations
      fetch("https://automated-donation-platform-back-end.onrender.com/charities")
        .then((response) => response.json())
        .then((data) => setCharities(data))
        .catch((error) => console.error("Error fetching charities:", error));
    } catch (error) {
      console.error("Error making donation:", error);
      setDonationError("Donation failed. Please try again.");
    }
  };

  const handleAmountChange = (charityId, amount) => {
    setDonationAmounts((prevState) => ({
      ...prevState,
      [charityId]: amount,
    }));
  };

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCharity = currentPage * itemsPerPage;
  const indexOfFirstCharity = indexOfLastCharity - itemsPerPage;
  const currentCharities = filteredCharities.slice(indexOfFirstCharity, indexOfLastCharity);

  const totalPages = Math.ceil(filteredCharities.length / itemsPerPage);

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

//Page content
  return (
    <div className="bg-dark p-4">
      <div className="row p-1 rounded">
        <div className="col">
          <div className="header-component">
            <h1>Available Charities</h1>
          </div>
        </div>
      </div>

      <div className="container p-4 text-center">
        <div className="card text-bg-dark p-3 shadow p-3 mb-5 rounded">
          <h1 className="text-center text-light bg-dark">
            <b>Donate with the Kindness of your Heart</b>
          </h1>
        </div>

        {/* Search bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search charities..."
          className="form-control mb-4 border-dark"
        />

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {currentCharities.map((charity) => (
            <div className="col" key={charity.id}>
              <div className="card w-75 text-bg-secondary">
                <img src={charity.image_url} className="card-img-top bg-dark p-4" alt={charity.name} />
                <div className="card-body">
                  <h5 className="card-title border-w p-4 shadow p-4 mb-5 rounded">{charity.name}</h5>
                  <p className="card-text border-w p-3 shadow p-3 mb-5 rounded">{charity.description}</p>
                  <p className="card-text border-w p-3 shadow p-3 mb-5 rounded">
                    <b>Total Donations: ${charity.total_donations.toFixed(2)}</b>
                  </p>
                  <input
                    type="number"
                    value={donationAmounts[charity.id] || ""}
                    onChange={(e) => handleAmountChange(charity.id, e.target.value)}
                    placeholder="Amount"
                    className="form-control mb-2 border-w p-3 shadow p-3 mb-5 rounded"
                  />
                  <button
                    onClick={() => handleDonate(charity.id)}
                    className="btn btn-dark btn-lg"
                  >
                    Donate
                  </button>
                  {donationError && <p className="text-danger">{donationError}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="pagination-controls mt-4">
          <button
            className="btn btn-secondary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-light">{currentPage} of {totalPages}</span>
          <button
            className="btn btn-secondary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          {/* Back Button */}
        <button className="btn btn-light  float-end" onClick={() => navigate(-1)}>
          Go Back
        </button>
        </div>
      </div>
    </div>
  );
};

export default Charities;
