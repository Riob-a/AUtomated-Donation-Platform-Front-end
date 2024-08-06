import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {
  return (
    <div>
      <div className="row p-1 rounded">
        <div className="col">
          <div className="header-component">
            <h1>ADMIN</h1>
          </div>
        </div>
      </div>

      <div className="row p-4">
        <div className="col-sm-6 mb-3 mb-sm-0 p1">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Applications</h5>
              <p className="card-text">Navigate to all the available Applications for management</p>
              <Link to="/applications" className="btn btn-primary">Go to Applications</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card-body">
              <h5 className="card-title">Charities</h5>
              <p className="card-text">Navigate to all the available charities for management</p>
              <Link to="/charities" className="btn btn-primary">Go to Charities</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
