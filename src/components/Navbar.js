import React from "react";
import './Navbar.css'; // Import custom CSS for additional styling
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Fan<b>Girls</b></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/charities">Charities</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/beneficiaries">Beneficiaries</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
            <NavLink to="/register" className="btn btn-light">Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
