package com.finalbackend.FinalBackEnd.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finalbackend.FinalBackEnd.Repository.PatientRepository;
import com.finalbackend.FinalBackEnd.model.Patient;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/")

public class PatientController {
	
	public PatientController(PatientRepository patientRepository) {
		super();
		this.patientRepository = patientRepository;
	}
	@Autowired
	private PatientRepository patientRepository;
	@GetMapping("/patients")
	public List<Patient> getAll()
	{
		return patientRepository.findAll();
	}
	@GetMapping("/patients/{id}")
	public Optional<Patient> getdetailsbyID(@PathVariable long id)
	{
		return patientRepository.findById(id);
	}
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient patient)
	{
		return patientRepository.save(patient);
	}

}
