import React, { useState, useEffect } from "react";

function BeneficiariesForm() {
  const [formData, setFormData] = useState({
    name: "",
    story: "",
    imageUrl: "",
    charity_id: "",
  });

  const [charities, setCharities] = useState([]);

  // Fetch the list of charities when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5000/charities')
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
        setFormData({ name: "", story: "", imageUrl: "", charity_id: "" });  // Reset form
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Failed to submit the beneficiary. Please try again.");
      });
  };

  return (
    <div className="container p-4">
      <div className="container p-4 m-3 bg-dark text-light text-center"><h1>Add Beneficiary Details</h1></div>

      <div className="container p-4 m-3 bg-secondary rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="story" className="form-label"><b>Story</b></label>
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
            <label htmlFor="imageUrl" className="form-label"><b>Image URL</b></label>
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
          <div className="mb-3">
            <label htmlFor="charity_id" className="form-label"><b>Charity</b></label>
            <select 
              className="form-select form-select-sm" 
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
          <button type="submit" className="btn btn-dark btn-sm">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BeneficiariesForm;
