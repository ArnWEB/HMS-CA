package com.finalbackend.FinalBackEnd.patient.test;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.finalbackend.FinalBackEnd.Repository.PatientRepository;
import com.finalbackend.FinalBackEnd.model.Patient;
@ExtendWith(MockitoExtension.class)
public class PatientTest {
	@Mock
	private PatientRepository patientrepo;
	@Test
	void saveTest()
	{
		Patient p=new Patient();
		patientrepo.save(p);
	}
	

}
