import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [employee, setEmployee] = useState([]);

    const {id} = useParams();

    useEffect(()=> {
        loadEmployees();
        
    }, []);

    const loadEmployees=async()=>{
        const result = await axios.get("http://localhost:8080/employees");
        setEmployee(result.data);
    }

    const deleteEmployee=async (id)=>{
      await axios.delete(`http://localhost:8080/employee/${id}`);
      loadEmployees();

    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Employee</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        employee.map((employee,index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                    <button className="btn btn-primary mx-2">View</button>
                    <Link className="btn btn-outline-primary mx-2"

                    to={`/editemployee/${employee.id}`}
                    
                    >Edit</Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=> deleteEmployee(employee.id)}
                    >Delete</button>

                </td>
            </tr>
        ))
    }
    
    
  </tbody>
</table>
        </div>

    </div>
  )
}
