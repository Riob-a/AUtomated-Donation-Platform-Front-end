import React, { useState } from "react";

function BeneficiariesForm() {
  const [formData, setFormData] = useState({
    name: "",
    story: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/beneficiaries', {
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
        alert("Beneficiary submitted successfully!");  // Popup on successful submission
        setFormData({ name: "", story: "", imageUrl: "" });  // Reset form
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Failed to submit the beneficiary. Please try again.");
      });
  };

  return (
    <div className="container p-4">
      <div className="container p-4 m-3 bg-dark text-light">Add Beneficiary Details</div>

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
            <label htmlFor="story" className="form-label">Story</label>
            <textarea 
              className="form-control form-control-sm" 
              id="story" 
              name="story" 
              placeholder="Beneficiary's Story"
              value={formData.story}
              onChange={handleChange} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              id="imageUrl" 
              name="imageUrl" 
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="btn btn-dark btn-sm">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BeneficiariesForm;
