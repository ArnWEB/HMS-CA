import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.finalbackend.FinalBackEnd.Repository.PatientRepository;
import com.finalbackend.FinalBackEnd.controller.PatientController;
import com.finalbackend.FinalBackEnd.model.Patient;
@ExtendWith(MockitoExtension.class)

public class patientTest {
	@Mock
	private PatientRepository patientRepository;
	@InjectMocks
	private PatientController patientController;
	@Test
	public void createPatientTest()
	{
		Patient patient = new Patient(1,"Arnab","Sam","5th jan");
		patientController.createPatient(patient);
		verify(patientRepository).save(patient);
	}
	@Test
	public void getAllTest()
	{
		patientController.getAll();
		verify(patientRepository).findAll();
	}
	@Test
	public void getDetailsByIdTest()
	{
		patientController.getdetailsbyID(1L);
		verify(patientRepository).findById(1L);
		
	}
	
	

}
