import React from "react";
import './Navbar.css'; // Import custom CSS for additional styling
import { NavLink } from 'react-router-dom';


function Navbar(){
  return(
      <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Fund<b><i>.Girls</i></b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/charities">Charities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/beneficiaries">Beneficiaries</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin_dashboard">Admin</a>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="http://127.0.0.1:5000/logout">Sign out</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
);
}
export default Navbar; 