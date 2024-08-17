import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function BeneficiariesForm() {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    story: "",
    imageUrl: "",
    charity_id: "",
  });

  const [charities, setCharities] = useState([]);

  // Fetch the list of charities in the dropdown
  useEffect(() => {
    fetch('https://automated-donation-platform-back-end.onrender.com/charities')
      .then(response => response.json())
      .then(data => setCharities(data))
      .catch(error => console.error('Error fetching charities:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://automated-donation-platform-back-end.onrender.com/beneficiaries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to create beneficiary');
        }
      })
      .then(data => {
        console.log('Beneficiary created:', data);
        alert("Beneficiary submitted successfully!");
        setFormData({ name: "", story: "", imageUrl: "", charity_id: "" });  // Reset form
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Failed to submit the beneficiary. Please try again.");
      });
  };

  // Page content
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="w-100 p-5" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-4">Add Beneficiary Details</h2>

        <div className="bg-secondary p-4 rounded-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="name" className="form-label"><b>Name</b></label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                id="name" 
                name="name" 
                placeholder="Enter beneficiary's name"
                value={formData.name}
                onChange={handleChange} 
                required
              />
            </div>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="story" className="form-label"><b>Story</b></label>
              <textarea 
                className="form-control form-control-lg"
                id="story" 
                name="story" 
                placeholder="Enter beneficiary's story"
                value={formData.story}
                onChange={handleChange} 
                required
              />
            </div>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="imageUrl" className="form-label"><b>Image URL</b></label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                id="imageUrl" 
                name="imageUrl" 
                placeholder="Enter image URL"
                value={formData.imageUrl}
                onChange={handleChange} 
                required
              />
            </div>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="charity_id" className="form-label"><b>Charity</b></label>
              <select 
                className="form-select form-select-lg"
                id="charity_id" 
                name="charity_id" 
                value={formData.charity_id} 
                onChange={handleChange}
                required
              >
                <option value="">Select your charity</option>
                {charities.map((charity) => (
                  <option key={charity.id} value={charity.id}>
                    {charity.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-dark btn-lg w-100 mb-3 rounded-pill">
              Submit
            </button>
            <button type="button" className="btn btn-warning btn-lg w-100 rounded-pill" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BeneficiariesForm;
