import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fan<b>Girls</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Charities</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Beneficiaries</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
);
}
export default Navbar;    