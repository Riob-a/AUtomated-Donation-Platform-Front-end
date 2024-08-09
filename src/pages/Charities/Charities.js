import React, { useState, useEffect } from "react";

const Charities = () => {
  const [charities, setCharities] = useState([]);
  const [donationAmounts, setDonationAmounts] = useState({});
  const [donationError, setDonationError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/charities")
      .then((response) => response.json())
      .then((data) => setCharities(data))
      .catch((error) => console.error("Error fetching charities:", error));
  }, []);

  const handleDonate = async (charityId) => {
    const amount = donationAmounts[charityId] || "";

    try {
      const response = await fetch("http://127.0.0.1:5000/donations", {
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
      fetch("http://127.0.0.1:5000/charities")
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

        {/* Search bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search charities..."
          className="form-control mb-4"
        />

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {filteredCharities.map((charity) => (
            <div className="col" key={charity.id}>
              <div className="card w-75 text-bg-secondary">
                <img src={charity.image_url} className="card-img-top" alt={charity.name} />
                <div className="card-body">
                  <h5 className="card-title">{charity.name}</h5>
                  <p className="card-text">{charity.description}</p>
                  <p className="card-text">
                    <b>Total Donations: ${charity.total_donations.toFixed(2)}</b>
                  </p>
                  <input
                    type="number"
                    value={donationAmounts[charity.id] || ""}
                    onChange={(e) => handleAmountChange(charity.id, e.target.value)}
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
