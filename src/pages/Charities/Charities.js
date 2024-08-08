import React, { useState, useEffect } from "react";

const Charities = () => {
  const [charities, setCharities] = useState([]);
  const [donationAmount, setDonationAmount] = useState(""); // State to manage donation amount
  const [donationError, setDonationError] = useState(""); // State to manage error messages

  useEffect(() => {
    fetch("http://127.0.0.1:5000/charities")
      .then((response) => response.json())
      .then((data) => setCharities(data))
      .catch((error) => console.error("Error fetching charities:", error));
  }, []);

  const handleDonate = async (charityId) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem('token')}` // Remove this line if no authentication needed
        },
        body: JSON.stringify({
          charity_id: charityId,
          amount: donationAmount,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Donation failed");
      }
  
      // Handle successful donation
      alert("Donation successful!");
      setDonationAmount(""); // Clear the donation amount field
    } catch (error) {
      console.error("Error making donation:", error);
      setDonationError("Donation failed. Please try again.");
    }
  };

  return (
    <div className="bg-dark p-4">
      <div className="row p-1 rounded">
        <div className="col">
          <div className="header-component">
            <h1>Available Charities</h1>
          </div>
        </div>
      </div>

      <div className="container p-2 text-center">
        <div className="card text-bg-dark border-warning p-3 shadow p-3 mb-5 rounded">
          <h6 className="text-center text-light bg-dark">
            <b>Donate with the Kindness of your Heart</b>
          </h6>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {charities.map((charity) => (
            <div className="col" key={charity.id}>
              <div className="card w-75 text-bg-secondary">
                <img src={charity.image_url} className="card-img-top" alt={charity.name} />
                <div className="card-body">
                  <h5 className="card-title">{charity.name}</h5>
                  <p className="card-text">{charity.description}</p>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Amount"
                    className="form-control mb-2"
                  />
                  <button
                    onClick={() => handleDonate(charity.id)}
                    className="btn btn-dark"
                  >
                    Donate
                  </button>
                  {donationError && <p className="text-danger">{donationError}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charities;
