import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

function AdminDashboard() {
  return (
    <div className="bg-dark p-4 ">
      <div className="row p-1 rounded">
        <div className="col">
          <div className="header-component">
            <h1>ADMIN</h1>
          </div>
        </div>
      </div>

      <div className="container p-1">
      <div className="row p-4">
        <div className="col-sm-6 mb-3 mb-sm-0 p1">
          <div className="card w-75 text-bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Applications</h5>
              <p className="card-text">Navigate to all the available Applications for approval</p>
              <br></br>
              <Link to="/applications" className="btn btn-dark">Go to Applications</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card  w-75 text-bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Charities</h5>
              <p className="card-text">Navigate to all the available charities for management</p>
              <br></br>
              <Link to="/admin_charities" className="btn btn-dark">Go to Charities</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminDashboard;