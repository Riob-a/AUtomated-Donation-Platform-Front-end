import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <div className='bg-dark'>

      <div className="row p-1 ">
        <div className="col">
          <div className="homepage-component">
            <h1>Fund.<b><i>Girls</i></b></h1>
          </div>
        </div>
      </div>

      <div className='container p-1'>
       <div className="row  p-4">
        <div className="col-sm-6 mb-3 mb-sm-0 p3">
          <div className="card w-75 text-bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Donate</h5>
              <p className="card-text">Click the button below to go donate</p>
              <br></br>
              <Link to="/charities" className="btn btn-dark">Donate</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card  w-75 text-bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Charities</h5>
              <p className="card-text">Click the button below to register a charity</p>
              <br></br>
              <Link to="/charities_form" className="btn btn-dark">Create charity</Link>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Home;