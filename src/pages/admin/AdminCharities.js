import React, { useEffect, useState } from "react";
import "./Admin.css";

function AdminCharities() {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    // Fetch charities from the backend
    fetch("http://localhost:5000/charities")
      .then((response) => response.json())
      .then((data) => setCharities(data))
      .catch((error) => console.error("Error fetching charities:", error));
  }, []);

  const handleDelete = (id) => {
    // Send DELETE request to the backend
    fetch(`http://localhost:5000/charities/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted charity from the state
          setCharities(charities.filter((charity) => charity.id !== id));
        } else {
          console.error("Error deleting charity");
        }
      })
      .catch((error) => console.error("Error deleting charity:", error));
  };

  return (
    <div>
      <div className="container-fluid p-4 m-2">
        <div className="container-fluid p-1 shadow p-3 mb-5 bg-body- rounded">
          <h5 className="header-1"><b>Manage</b></h5>
          <h3 className="header-2">The following</h3>
        </div>

        {charities.map((charity) => (
          <div key={charity.id} className="card mb-3 p-4 shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="row g-0">
              <div className="col-md-4">
                {charity.image_url ? (
                  <img src={charity.image_url} className="bd-placeholder-img img-fluid rounded-start" alt={charity.name} style={{ width: "100%", height: "250px" }} />
                ) : (
                  <svg className="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                  </svg>
                )}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{charity.name}</h5>
                  <p className="card-text">{charity.description}</p>
                  {/* <p className="card-text"><small className="text-body-secondary">Last updated {new Date(charity.updated_at).toLocaleString()}</small></p> */}
                  <button onClick={() => handleDelete(charity.id)} className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminCharities;
