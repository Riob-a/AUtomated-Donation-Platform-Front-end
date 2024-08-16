import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CharityApplicationForm() {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    image_url: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://automated-donation-platform-back-end.onrender.com/unapproved-charities', {
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
          throw new Error('Failed to create charity');
        }
      })
      .then(data => {
        console.log('Charity created:', data);
        alert("Charity submitted successfully!");
        setFormData({ name: "", description: "", website: "", image_url: "" });
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Failed to submit the charity. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="w-100 p-5" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-4">Charity Application Form</h2>

        <div className="bg-secondary p-4 rounded-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="name" className="form-label"><b>Name</b></label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                id="name" 
                name="name" 
                placeholder="Enter charity's name"
                value={formData.name}
                onChange={handleChange} 
                required
              />
            </div>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="description" className="form-label"><b>Description</b></label>
              <textarea 
                className="form-control form-control-lg"
                id="description" 
                name="description" 
                placeholder="Enter a brief description of the charity"
                value={formData.description}
                onChange={handleChange} 
                required
              />
            </div>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="website" className="form-label"><b>Website</b></label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                id="website" 
                name="website" 
                placeholder="Enter charity's website URL"
                value={formData.website}
                onChange={handleChange} 
                required
              />
            </div>
            <div className="mb-4 p-3 fs-4">
              <label htmlFor="image_url" className="form-label"><b>Image URL</b></label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                id="image_url" 
                name="image_url" 
                placeholder="Enter image URL"
                value={formData.image_url}
                onChange={handleChange} 
                required
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg w-100 mb-3">
              Submit
            </button>
            <button type="button" className="btn btn-warning btn-lg w-100" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CharityApplicationForm;
