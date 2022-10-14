package com.netit.employees.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.netit.employees.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
