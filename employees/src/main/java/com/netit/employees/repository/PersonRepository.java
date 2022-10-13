package com.netit.employees.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.netit.employees.models.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Integer>{
	
	@Query("SELECT name FROM Person p WHERE p.name LIKE %:personName%")
	String findByName(String personName);

}
