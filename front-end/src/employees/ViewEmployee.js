import React from "react";

export default function ViewEmployee() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                      <h2 className="text-center m-4">Employee Details</h2>

                      <div className="card">
                        <div className="card-header">
                            Details of employee id :
                            <ul className="list-group list-group-flush">
                                
                            </ul>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    );
}