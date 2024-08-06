import React from "react";
import "./Admin.css"

function AdminDashboard(){
    return(
      <div>

        <div className>
          <div className="row p-1 rounded ">
            <div className="col">
              <div className="header-component">
                <h1>ADMIN</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="row p-4">

           <div class="col-sm-6 mb-3 mb-sm-0 p1 ">
               <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                  <div class="card-body ">
                  <h5 class="card-title">Applications</h5>
                  <p class="card-text">Navigate to all the available Applications for management</p>
                  <a href="#" class="btn btn-primary">Go to Applications</a>
                  </div>
             </div>
           </div>

           <div class="col-sm-6">
               <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                  <div class="card-body">
                  <h5 class="card-title">Charities</h5>
                  <p class="card-text">Navigate to all the available charities for management</p>
                  <a href="#" class="btn btn-primary">Go to Charities</a>
                  </div>
             </div>
           </div>

        </div>
    
      </div>
      );
}

export default AdminDashboard;
