import React from "react";

function CharityApplicationForm(){
    return(
        <div className="container p-4">
        <div className="card p-4 m-3 bg-dark text-light">Add Your Charities Details</div>
        <div className="card bg-secondary p-4">
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name"></input>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Description</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Description"></input>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Website</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Website"></input>
            </div>
        
            <div className="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Image_url</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
            </div>


        </div>

        </div>
    )
}
export default CharityApplicationForm;