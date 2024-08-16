import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function CharityApplicationForm() {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    image_url: "",
  });

//Submission logic
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

//Page Content
  return (
    <div className="container p-4">
      <div className="container p-4 m-3 bg-dark text-light text-center rounded"><h1 className="">Charity Application Form</h1></div>

      <div className="container  p-4 col-8  rounded">
        <form className="bg-secondary  col-8 p-4 m-3 rounded" onSubmit={handleSubmit}>
          <h3 className="text-center"><b>Add your details</b></h3>
          <div className="col-12 mb-3">
            <label htmlFor="name" className="form-label"><b>Name</b></label>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              id="name" 
              name="name" 
              placeholder="Name"
              value={formData.name}
              onChange={handleChange} 
            />
          </div>
          <div className=" col-12 mb-3">
            <label htmlFor="description" className="form-label"><b>Description</b></label>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              id="description" 
              name="description" 
              placeholder="Description"
              value={formData.description}
              onChange={handleChange} 
            />
          </div>
          <div className=" col-12 mb-3">
            <label htmlFor="website" className="form-label"><b>Website</b></label>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              id="website" 
              name="website" 
              placeholder="Website"
              value={formData.website}
              onChange={handleChange} 
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="image_url" className="form-label"><b>Image URL</b></label>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              id="image_url" 
              name="image_url" 
              placeholder="Image URL"
              value={formData.image_url}
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="btn btn-dark btn-sm">Submit</button>
        </form>
        {/* Back Button */}
        <button className="btn btn-light  float-end" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CharityApplicationForm;
