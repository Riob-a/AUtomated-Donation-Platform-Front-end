import React, { useState } from "react";

function CharityApplicationForm() {
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

    fetch('http://127.0.0.1:5000/charities', {
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
        alert("Charity submitted successfully!");  // Popup on successful submission
        setFormData({ name: "", description: "", website: "", image_url: "" });  // Reset form
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Failed to submit the charity. Please try again.");
      });
  };

  return (
    <div className="container p-4">
      <div className="container p-4 m-3 bg-dark text-light">Add Your Charity's Details</div>

      <div className="container p-4 m-3 bg-secondary rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
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
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
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
          <div className="mb-3">
            <label htmlFor="website" className="form-label">Website</label>
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
          <div className="mb-3">
            <label htmlFor="image_url" className="form-label">Image URL</label>
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
      </div>
    </div>
  );
}

export default CharityApplicationForm;
