import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Home() {
    const [employee, setEmployee] = useState([]);

    useEffect(()=> {
        loadEmployees();
        
    }, []);

    const loadEmployees=async()=>{
        const result = await axios.get("http://localhost:8090/employees");
        setEmployee(result.data);
    }
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Employee</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
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
            </tr>

        ))
    }
    
    
  </tbody>
</table>
        </div>

    </div>
  )
}
