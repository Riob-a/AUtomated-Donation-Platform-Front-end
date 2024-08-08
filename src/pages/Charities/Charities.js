import React, { useState, useEffect } from "react";
// import "./Charities.css";

const Charities = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/charities")
      .then((response) => response.json())
      .then((data) => setCharities(data))
      .catch((error) => console.error("Error fetching charities:", error));
  }, []);

  return (
  <div className="bg-dark p-4">

      <div className="row p-1 rounded">
        <div className="col">
          <div className="header-component">
            <h1>Available charities</h1>
          </div>
        </div>
      </div>

   <div className="container p-2 text-center">
    <div className="card text-bg-dark border-warning p-3 shadow p-3 mb-5  rounded">
    <h6 className=" text-center text-light bg-dark"><b>Donate with the Kindness of your heart</b></h6>
    </div>

    <div className="row row-cols-1 row-cols-md-2 g-4 ">
      <div className="col">
        <div className="card w-75 text-bg-secondary">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-dark">Donate</a>
          </div>
        </div>
      </div>
    

    <div className="col">
      <div className="card  w-75 text-bg-secondary">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-dark">Donate</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card w-75 text-bg-secondary">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-dark">Donate</a>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card w-75 text-bg-secondary">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-dark">Donate</a>
        </div>
      </div>
    </div>
    </div>

   </div>

   </div>
  );
};

export default Charities;