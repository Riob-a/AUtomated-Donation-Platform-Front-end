import React from "react";
import "./Admin.css"

function AdminCharities(){
    return(
      <div>
        
        <div className="container-fluid p-4 m-2 ">
          <div className=" container-fluid p-1 shadow p-3 mb-5 bg-body- rounded">
             <h5 className="header-1"><b>Manage</b></h5>
             <h3 className="header-2">The following</h3>
          </div>

        <div  className="card mb-3 p-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="row g-0">
            <div className="col-md-4">
              <svg className="bd-placeholder-img img-fluid rounded-start" width={"100%"} height={"250"} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                <a href="#" class="btn btn-danger">Delete</a>
              </div>
            </div>
          </div>
        </div>

        <div  className="card mb-3 p-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="row g-0">
            <div className="col-md-4">
              <svg className="bd-placeholder-img img-fluid rounded-start" width={"100%"} height={"250"} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                <a href="#" class="btn btn-danger">Delete</a>
              </div>
            </div>
          </div>
        </div>

        <div  className="card mb-3 p-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="row g-0">
            <div className="col-md-4">
              <svg className="bd-placeholder-img img-fluid rounded-start" width={"100%"} height={"250"} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                <a href="#" class="btn btn-danger">Delete</a>
              </div>
            </div>
          </div>
        </div>

      </div>
        

       
      </div>
    )
}

export default AdminCharities;