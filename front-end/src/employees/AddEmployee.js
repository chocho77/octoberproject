import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddEmployee() {

  let navigate = useNavigate();

  const [employee, setEmployee]=useState({
    firstname:"",
    lastname:"",
    email:""

  })
  
  const{firstname,lastname,email}=employee;

  const onInputChange=(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value})

  }

  const onSubmit=async (e)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "firstName": firstname,
      "lastName": lastname,
      "email": email
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/employee/", requestOptions);
    navigate("/");

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" >
            <h2 className="text-center m-4">Register Employee</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                First Name
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter you first name"
              name="firstname"
              value={firstname}
              onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Last Name
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter you last name"
              name="lastname"
              value={lastname}
              onChange={(e)=>onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter your e-mail address"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            </form>
          </div>  
      </div>

    </div>
  )
}
