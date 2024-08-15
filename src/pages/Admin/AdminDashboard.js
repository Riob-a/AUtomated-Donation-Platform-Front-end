import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {
  return (
    <div className="bg-dark p-4">
      <div className="row p-1 rounded">
        <div className="col">
          <div className="header-component">
            <h1>ADMIN</h1>
          </div>
        </div>
      </div>

      <div className="container p-1">
        <div className="row p-4">
          <div className="col-md-4 mb-3">
            <div className="card w-100 text-bg-secondary">
              <div className="card-body">
                <h5 className="card-title">Applications</h5>
                <p className="card-text">Navigate to all the available Applications for approval</p>
                <br />
                <Link to="/applications" className="btn btn-dark m-2">Go to Applications</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card w-100 text-bg-secondary">
              <div className="card-body">
                <h5 className="card-title">Charities</h5>
                <p className="card-text">Navigate to all the available charities for management</p>
                <br />
                <Link to="/admin_charities" className="btn btn-dark m-2">Go to Charities</Link>
                <Link to="/admin_beneficiaries" className="btn btn-dark m-2">Go to Beneficiaries</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card w-100 text-bg-secondary">
              <div className="card-body">
                <h5 className="card-title">Register Admin</h5>
                <p className="card-text">Register a new admin for system administration and management</p>
                <br />
                <Link to="/admin_register" className="btn btn-dark m-2">Register Admin</Link>
              </div>
            </div>
          </div>
        </div> 
        <div>
          <Link to="/" className="btn btn-light m-4">Go To Home</Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
