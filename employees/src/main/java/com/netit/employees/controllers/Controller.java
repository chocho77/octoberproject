package com.netit.employees.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.netit.employees.models.Person;
import com.netit.employees.repository.PersonRepository;

@RestController
@RequestMapping("person")
public class Controller {
	@Autowired
	private PersonRepository personRepository;
	
	@PostMapping("person")
	public String createPerson(@RequestParam String name) {
		personRepository.save(new Person(name, "6.7"));
		return personRepository.findByName(name)+ "Saved successfully";
		
	}
	
	@GetMapping("person")
	public List<Person> getAllThePeople() {
		return (List<Person>) personRepository.findAll();
	}

}
