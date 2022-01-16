package com.finalbackend.FinalBackEnd.doctor.test;

import static org.mockito.Mockito.verify;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.finalbackend.FinalBackEnd.Repository.DoctorRepository;
import com.finalbackend.FinalBackEnd.controller.DoctorController;
import com.finalbackend.FinalBackEnd.model.Doctor;
@ExtendWith(MockitoExtension.class)
public class DoctorTest {
	@Mock
	private DoctorRepository doctorRepo;
	@InjectMocks
	private DoctorController docController;
	@BeforeEach
	void Setup()
	{
		DoctorController docController=new DoctorController(this.doctorRepo);
	}
	@Test
	void saveAllTest()
	{
		Doctor doc=new Doctor(14,"add",32,"male","ffs");
		docController.createPatient(doc);
		verify(doctorRepo).save(doc);
	}
		
	@Test
	void getAllTest()
	{
		 docController.getAll();
		 verify(doctorRepo).findAll();
	}
	@Test
	void getDetailsByname()
	{
		docController.getdetailsbyName("Arnab");
		verify(doctorRepo).findByName("Arnab");
	}
	
}
