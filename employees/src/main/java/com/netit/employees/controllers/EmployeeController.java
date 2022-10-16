package com.netit.employees.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.netit.employees.exception.EmployeeNotFoundException;
import com.netit.employees.models.Employee;
import com.netit.employees.repository.EmployeeRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepository;
    
    @PostMapping("/employee")
    Employee newEmployee(@RequestBody Employee newEmployee) {
       
        return employeeRepository.save(newEmployee);
    }
    
    @GetMapping("/employees")
    List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
    @GetMapping("/employee/{id}")
    Employee getEmployeeById(@PathVariable int id) {
        return employeeRepository.findById(id)
                .orElseThrow(()-> new EmployeeNotFoundException(id));
    }
    
    @PutMapping("/employee/{id}")
    Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable int id) {
        return employeeRepository.findById(id)
                .map(employee -> {
                    employee.setFirstName(newEmployee.getFirstName());
                    employee.setLastName(newEmployee.getLastName());
                    employee.setEmail(newEmployee.getEmail());
                    return employeeRepository.save(employee);
                }).orElseThrow(()-> new EmployeeNotFoundException(id));
        
    }
    
    @DeleteMapping("/employee/{id}")
    String deleteEmployee(@PathVariable Integer id) {
        if(!employeeRepository.existsById(id)) {
            throw new EmployeeNotFoundException(id);
        }
        employeeRepository.deleteById(id);
        return "User with id " + id + " has been deleted success.";
        
    }
    

}
