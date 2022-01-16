package com.finalbackend.FinalBackEnd.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finalbackend.FinalBackEnd.Repository.DoctorRepository;
import com.finalbackend.FinalBackEnd.Repository.PatientRepository;
import com.finalbackend.FinalBackEnd.model.Doctor;
import com.finalbackend.FinalBackEnd.model.Patient;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/")
public class DoctorController {
	@Autowired
	private DoctorRepository docotorRepository;
	
	public DoctorController(DoctorRepository docotorRepository) {
		super();
		this.docotorRepository = docotorRepository;
	}
	@GetMapping("/doctors")
	public List<Doctor> getAll()
	{
		return docotorRepository.findAll();
	}
	@GetMapping("/doctors/{name}")
	public List<Doctor> getdetailsbyName(@PathVariable String name)
	{
		return docotorRepository.findByName(name);
	}
	@PostMapping("/doctors")
	public Doctor createPatient(@RequestBody Doctor doctor)
	{
		return docotorRepository.save(doctor);
	}
	
	
}
