import React, { useState, useEffect } from "react";
import "./Admin.css";

function AdminApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/applications")  // Updated URL
      .then((response) => response.json())
      .then((data) => setApplications(data))
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div className="bg-dark">
      <div>
        <div className="row p-1 rounded">
          <div className="col">
            <div className="header-component">
              <h1>ADMIN</h1>
              <h6>Applications</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-4 m-2">
        <h5 className="text-light bg-dark"><b>Pending</b></h5>
        <h3 className="text-light bg-dark">Applications</h3>

        {applications.map((app) => (
          <div key={app.id} className="card bg-secondary mb-3 p-4 shadow p-3 mb-5 rounded">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={app.image_url || "placeholder-image-url"}
                  className="bd-placeholder-img img-fluid rounded-start"
                  alt={app.name}
                  width="100%"
                  height="250"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-light">{app.name}</h5>
                  <p className="card-text text-light">{app.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated {new Date(app.date_submitted).toLocaleString()}</small>
                  </p>
                  <button className="btn btn-dark">Approve</button>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default AdminApplications;
